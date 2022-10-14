import { createContext, useContext } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {
   const { setUser } = useContext(UserContext)

   async function createTech(data, handleShowModalAdd) {
      try {
         await api.post("/users/techs", data)
         const resp = await api.get("/profile")
         setUser(resp.data)
         toast.success("Tecnologia adicionada com sucesso!")
         handleShowModalAdd()
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   async function removeTech(id) {
      try {
         await api.delete(`/users/techs/${id}`)
         const resp = await api.get("/profile")
         setUser(resp.data)
         toast.success("Tecnologia deletada com sucesso!")
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   async function editTech(data, id, handleShowModalEdit) {
      try {
         await api.put(`/users/techs/${id}`, data)
         const resp = await api.get("/profile")
         setUser(resp.data)
         toast.success("Tecnologia atualizada com sucesso!")
         handleShowModalEdit()
      } catch (error) {
         toast.error(error.response.data.message)
      }
   }

   return <TechContext.Provider value={{ createTech, removeTech, editTech }}>{children}</TechContext.Provider>
}
