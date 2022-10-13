import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
   }, [])

   return (
      <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, isLoading }}>
         {children}
      </UserContext.Provider>
   )
}
