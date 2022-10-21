import { useContext, useState, MouseEvent } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { TechContext } from "../../../../contexts/TechContext"
import { iTechs } from "../../../../contexts/UserContext"
import { CardItem } from "./style"

interface iTechCardProps {
   tech: iTechs | null
   handleShowModalEdit(): void
}

export function TechCard({ tech, handleShowModalEdit }: iTechCardProps) {
   const { removeTech } = useContext(TechContext)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)

   function handleEditTech(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (target?.closest("BUTTON")?.tagName !== "BUTTON") {
         localStorage.setItem("@KenzieHubActualTech", JSON.stringify(tech))
         handleShowModalEdit()
      }
   }

   async function handleRemoveTech() {
      setIsLoadingBtn(true)
      await removeTech(tech?.id as string)
      setIsLoadingBtn(false)
   }

   if (!tech) {
      return (
         <CardItem>
            <p className="title three">Nenhuma tecnologia cadastrada</p>
         </CardItem>
      )
   }

   return (
      <CardItem onClick={handleEditTech}>
         <p className="title three">{tech.title}</p>
         <p className="text three">{tech.status}</p>
         {isLoadingBtn ? (
            <button className="loading" type="button"></button>
         ) : (
            <button type="button" onClick={handleRemoveTech}>
               <FaRegTrashAlt />
            </button>
         )}
      </CardItem>
   )
}
