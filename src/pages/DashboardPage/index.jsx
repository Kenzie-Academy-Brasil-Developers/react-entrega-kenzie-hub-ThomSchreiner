import { Header } from "../../components/Header"
import { DivContainer } from "./style"

export function DashboardPage({ isLogged, setIsLogged, user, setUser }) {
   return (
      <>
         <Header isLogged={isLogged} setIsLogged={setIsLogged} setUser={setUser} className="container">
            <h1 className="title one">Olá, {user.name}</h1>
            <p className="text three">{user.course_module}</p>
         </Header>
         <DivContainer className="container">
            <h1 className="title one">Que pena! Estamos em desenvolvimento :(</h1>
            <p className="text one">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
         </DivContainer>
      </>
   )
}
