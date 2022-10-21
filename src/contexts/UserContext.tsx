import axios from "axios"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export interface iUserContextParams {
   user: iUser | null
   setUser: Dispatch<SetStateAction<iUser | null>>
   isLogged: boolean
   setIsLogged: Dispatch<SetStateAction<boolean>>
   isLoading: boolean
   registerUser(data: iRegisterUser): Promise<void>
   login(data: iLoginUser): Promise<void>
   logOut(): void
}

interface iUserProviderProps {
   children: ReactNode
}

export interface iTechs {
   created_at: string
   id: string
   status: string
   title: string
   updated_at: string
}

export interface iUser {
   avatar_url: string | null
   bio: string
   contact: string
   course_module: string
   created_at: string
   email: string
   id: string
   name: string
   techs: iTechs[]
   updated_at: string
   works?: []
}

export interface iLoginUser {
   email: string
   password: string
}

export interface iRegisterUser extends iLoginUser {
   name: string
   confirmPassword: string
   bio: string
   contact: string
   course_module: string
}

interface iLoginResponse {
   user: iUser
   token: string
}

export const UserContext = createContext<iUserContextParams>({} as iUserContextParams)

export function UserProvider({ children }: iUserProviderProps) {
   const [user, setUser] = useState<iUser | null>(null)
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
               const { data } = await api.get<iUser>("/profile")
               setUser(data)
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

   async function registerUser(data: iRegisterUser) {
      try {
         await api.post("/users", data)
         toast.success("Cadastro realizado com sucesso!")
         navigate("/")
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.message)
         }
      }
   }

   async function login(dataLogin: iLoginUser) {
      try {
         const { data } = await api.post<iLoginResponse>("/sessions", dataLogin)
         setUser(data.user)
         localStorage.setItem("@KenzieHubToken", data.token)
         localStorage.setItem("@KenzieHubUserId", data.user.id)
         setIsLogged(true)
         toast.success("Login realizado com sucesso!")
         navigate("/dashboard")
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.message)
         }
      }
   }

   function logOut(): void {
      setIsLogged(false)
      localStorage.removeItem("@KenzieHubToken")
      localStorage.removeItem("@KenzieHubUserId")
      setUser(null)
      navigate("/", { replace: true })
   }

   return (
      <UserContext.Provider
         value={{ user, setUser, isLogged, setIsLogged, isLoading, registerUser, login, logOut }}
      >
         {children}
      </UserContext.Provider>
   )
}
