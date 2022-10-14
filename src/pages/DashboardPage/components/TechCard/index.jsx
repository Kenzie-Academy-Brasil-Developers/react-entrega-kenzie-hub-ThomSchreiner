import { useContext } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { TechContext } from "../../../../contexts/TechContext"
import { CardItem } from "./style"

export function TechCard({ tech }) {
   const { removeTech } = useContext(TechContext)

   return (
      <CardItem>
         <p className="title three">{tech.title}</p>
         <p className="text three">{tech.status}</p>
         <button type="button" onClick={() => removeTech(tech.id)}>
            <FaRegTrashAlt />
         </button>
      </CardItem>
   )
}
