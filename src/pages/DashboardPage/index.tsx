import { useContext, useState } from "react"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext"
import { DivContainer } from "./style"
import { IoMdAdd } from "react-icons/io"
import { StyledButton } from "../../style/button"
import { ModalAddTech } from "../../components/Modal/ModalAddTech"
import { TechCard } from "./components/TechCard"
import { ModalEditTech } from "../../components/Modal/ModalEditTech"

export function DashboardPage() {
   const { user } = useContext(UserContext)
   const [showModalAdd, setShowModalAdd] = useState(false)
   const [showModalEdit, setShowModalEdit] = useState(false)

   function handleShowModalAdd() {
      setShowModalAdd(!showModalAdd)
   }
   function handleShowModalEdit() {
      setShowModalEdit(!showModalEdit)
   }

   return (
      <>
         {showModalAdd && <ModalAddTech {...{ handleShowModalAdd }} />}
         {showModalEdit && <ModalEditTech {...{ handleShowModalEdit }} />}
         <Header page="dashboard" className="container">
            <h1 className="title one">Olá, {user?.name}</h1>
            <p className="text three">{user?.course_module}</p>
         </Header>
         <DivContainer className="container">
            <div>
               <h2 className="title two">Tecnologias</h2>
               <StyledButton onClick={handleShowModalAdd} heigth="small" color="grey">
                  <IoMdAdd />
               </StyledButton>
            </div>
            <ul>
               {user?.techs.length ? (
                  user.techs.map((tech) => (
                     <TechCard key={tech.id} tech={tech} handleShowModalEdit={handleShowModalEdit} />
                  ))
               ) : (
                  <TechCard tech={null} handleShowModalEdit={handleShowModalEdit} />
               )}
            </ul>
         </DivContainer>
      </>
   )
}
