import { useContext, useEffect, useState } from "react"
import { TechContext } from "../../../contexts/TechContext"
import { StyledModal } from "../ModalContainer/modal"
import { AiOutlineClose } from "react-icons/ai"
import { StyledButton } from "../../../style/button"
import { Container } from "./style"
import { toast } from "react-toastify"

export function ModalEditTech({ handleShowModalEdit }) {
   const { editTech } = useContext(TechContext)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)
   const [tech, setTech] = useState(null)
   const [status, setStatus] = useState("")

   async function handleSubmit(event) {
      event.preventDefault()
      if (status && status !== tech.status) {
         setIsLoadingBtn(true)
         await editTech({ status }, tech.id, handleShowModalEdit)
         setIsLoadingBtn(false)
      } else {
         toast.warning("Escolha um status diferente do atual")
      }
   }

   useEffect(() => {
      setTech(JSON.parse(localStorage.getItem("@KenzieHubActualTech")))
   }, [])

   useEffect(() => {
      tech && localStorage.removeItem("@KenzieHubActualTech")
   }, [tech])

   if (!tech) {
      return null
   }

   return (
      <StyledModal handleShowModal={handleShowModalEdit}>
         <Container className="container small">
            <div>
               <h3 className="title three">Detalhes da Tecnologia</h3>
               <button onClick={handleShowModalEdit} type="button">
                  <AiOutlineClose />
               </button>
            </div>
            <form onSubmit={handleSubmit}>
               <label htmlFor="title">Nome</label>
               <input id="title" type="text" disabled defaultValue={tech.title} />

               <label className="text three" htmlFor="status">
                  Status
               </label>
               <select
                  onChange={(event) => setStatus(event.target.value)}
                  className="text one"
                  id="status"
                  defaultValue={tech.status}
               >
                  {["Iniciante", "Intermediário", "Avançado"].map((status) => (
                     <option key={status} value={status}>
                        {status}
                     </option>
                  ))}
               </select>

               <StyledButton
                  className={isLoadingBtn ? "loading" : ""}
                  heigth="default"
                  color="primary"
                  type="submit"
               >
                  Salvar alterações
               </StyledButton>
            </form>
         </Container>
      </StyledModal>
   )
}
