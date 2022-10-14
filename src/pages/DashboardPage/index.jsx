import { useContext, useState } from "react"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext"
import { CardItem, DivContainer } from "./style"
import { FaRegTrashAlt } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"
import { StyledButton } from "../../style/button"
import { ModalAddTech } from "../../components/Modal/ModalAddTech"

export function DashboardPage() {
   const { user } = useContext(UserContext)
   const [showModalAdd, setShowModalAdd] = useState(false)
   // const [showModalRemove, setShowModalRemove] = useState(false)

   function handleShowModalAdd() {
      setShowModalAdd(!showModalAdd)
   }

   return (
      <>
         {showModalAdd && <ModalAddTech {...{ handleShowModalAdd }} />}
         <Header className="container">
            <h1 className="title one">Olá, {user.name}</h1>
            <p className="text three">{user.course_module}</p>
         </Header>
         <DivContainer className="container">
            <div>
               <h2 className="title two">Tecnologias</h2>
               <StyledButton onClick={handleShowModalAdd} heigth="small" color="grey">
                  <IoMdAdd />
               </StyledButton>
            </div>
            <ul>
               {user.techs.map((tech) => (
                  <CardItem key={tech.id}>
                     <p className="title three">{tech.title}</p>
                     <p className="text three">{tech.status}</p>
                     <button>
                        <FaRegTrashAlt />
                     </button>
                  </CardItem>
               ))}
            </ul>
         </DivContainer>
      </>
   )
}
