import axios from "axios"
import { createContext, useContext, ReactNode } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { iUser, UserContext } from "./UserContext"

interface iTechContextParams {
   createTech: (data: iCreateTechData, handleShowModalAdd: () => void) => Promise<void>
   removeTech: (id: string) => Promise<void>
   editTech: (dataTech: iEditTechData, id: string, handleShowModalEdit: () => void) => Promise<void>
}

interface iTechProviderProps {
   children: ReactNode
}

export interface iCreateTechData {
   title: string
   status: string
}

interface iEditTechData {
   status: string
}

export const TechContext = createContext<iTechContextParams>({} as iTechContextParams)

export function TechProvider({ children }: iTechProviderProps) {
   const { setUser } = useContext(UserContext)

   async function createTech(dataTech: iCreateTechData, handleShowModalAdd: () => void) {
      try {
         await api.post("/users/techs", dataTech)
         const { data } = await api.get<iUser>("/profile")
         setUser(data)
         toast.success("Tecnologia adicionada com sucesso!")
         handleShowModalAdd()
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.message)
         }
      }
   }

   async function removeTech(id: string) {
      try {
         await api.delete(`/users/techs/${id}`)
         const resp = await api.get<iUser>("/profile")
         setUser(resp.data)
         toast.success("Tecnologia deletada com sucesso!")
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.message)
         }
      }
   }

   async function editTech(dataTech: iEditTechData, id: string, handleShowModalEdit: () => void) {
      try {
         await api.put(`/users/techs/${id}`, dataTech)
         const { data } = await api.get<iUser>("/profile")
         setUser(data)
         toast.success("Tecnologia atualizada com sucesso!")
         handleShowModalEdit()
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.message)
         }
      }
   }

   return <TechContext.Provider value={{ createTech, removeTech, editTech }}>{children}</TechContext.Provider>
}
