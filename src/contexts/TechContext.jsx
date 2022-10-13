import { createContext, useContext } from "react"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {
   const { setUser } = useContext(UserContext)

   async function createTech(tech) {
      try {
         console.log(tech)
         // await api.post("/users/techs", tech)
         // const resp = await api.get("/profile")
         // setUser(resp.data)
      } catch (error) {
         console.log(error)
      }
   }

   return <TechContext.Provider value={{ createTech }}>{children}</TechContext.Provider>
}
