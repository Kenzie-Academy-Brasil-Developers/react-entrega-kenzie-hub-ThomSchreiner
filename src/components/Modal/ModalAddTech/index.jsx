import { StyledButton } from "../../../style/button"
import { useForm } from "react-hook-form"
import { Container } from "./style"
import { AiOutlineClose } from "react-icons/ai"
import { StyledInput } from "../../Input/style"
import { StyledModal } from "../ModalContainer/modal"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useState } from "react"
import { TechContext } from "../../../contexts/TechContext"

export function ModalAddTech({ handleShowModalAdd }) {
   const { createTech } = useContext(TechContext)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)

   const schema = yup.object({
      title: yup.string().required("Tecnologia obrigatória!"),
      status: yup.string().required("Status obrigatório!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   async function onSubmit(data) {
      setIsLoadingBtn(true)
      await createTech(data, handleShowModalAdd)
      setIsLoadingBtn(false)
   }

   return (
      <StyledModal {...{ handleShowModalAdd }}>
         <Container className="container small">
            <div>
               <h3 className="title three">Cadastrar Tecnologia</h3>
               <button onClick={handleShowModalAdd} type="button">
                  <AiOutlineClose />
               </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <StyledInput
                  name={["Nome", "title"]}
                  type="text"
                  placeholder="Escreva uma tecnologia"
                  register={register}
                  errors={errors}
               />

               <label className="text three" htmlFor="status">
                  Selecione o status
               </label>
               <select className="text one" id="status" {...register("status")}>
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
                  Cadastrar Tecnologia
               </StyledButton>
            </form>
         </Container>
      </StyledModal>
   )
}
