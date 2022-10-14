import { useContext } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { TechContext } from "../../../../contexts/TechContext"
import { CardItem } from "./style"

export function TechCard({ tech, handleShowModalEdit }) {
   const { removeTech } = useContext(TechContext)

   function handleEditTech() {
      localStorage.setItem("@KenzieHubActualTech", JSON.stringify(tech))
      handleShowModalEdit()
   }

   return (
      <CardItem onClick={handleEditTech}>
         <p className="title three">{tech.title}</p>
         <p className="text three">{tech.status}</p>
         <button type="button" onClick={() => removeTech(tech.id)}>
            <FaRegTrashAlt />
         </button>
      </CardItem>
   )
}
