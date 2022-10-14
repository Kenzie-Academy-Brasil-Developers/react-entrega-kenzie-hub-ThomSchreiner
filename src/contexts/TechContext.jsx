import { createContext, useContext } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {
   const { setUser } = useContext(UserContext)

   async function createTech(data) {
      try {
         await api.post("/users/techs", data)
         const resp = await api.get("/profile")
         setUser(resp.data)
         toast.success("Tecnologia adicionada com sucesso!")
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   return <TechContext.Provider value={{ createTech }}>{children}</TechContext.Provider>
}
