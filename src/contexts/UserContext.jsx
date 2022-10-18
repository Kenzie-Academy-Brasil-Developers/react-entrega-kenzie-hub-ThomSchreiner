import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
   const [user, setUser] = useState(null)
   const [isLogged, setIsLogged] = useState(false)
   const [isLoading, setIsLoading] = useState(true)
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      const token = localStorage.getItem("@KenzieHubToken")
      async function getUser() {
         if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`

            try {
               const resp = await api.get("/profile")
               setUser(resp.data)
               setIsLogged(true)
               location.pathname === "/" && navigate("/dashboard")
            } catch (error) {
               setUser(null)
               localStorage.removeItem("@KenzieHubToken")
               localStorage.removeItem("@KenzieHubUserId")
            }
         }

         setIsLoading(false)
      }
      getUser()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLogged])

   async function registerUser(data) {
      try {
         await api.post("/users", data)
         toast.success("Cadastro realizado com sucesso!")
         navigate("/")
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   async function login(data) {
      try {
         const resp = await api.post("/sessions", data)
         setUser(resp.data.user)
         localStorage.setItem("@KenzieHubToken", resp.data.token)
         localStorage.setItem("@KenzieHubUserId", resp.data.user.id)
         setIsLogged(true)
         toast.success("Login realizado com sucesso!")
         navigate("/dashboard")
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   return (
      <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, isLoading, registerUser, login }}>
         {children}
      </UserContext.Provider>
   )
}
