import { ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { UserContext } from "../../contexts/UserContext"
import { StyledButton } from "../../style/button"
import { StyledHeader } from "./style"

export type tPage = "login" | "signup" | "dashboard"

interface iHeaderProps {
   page: tPage
   className: "container small" | "container"
   children?: ReactNode
}

export function Header({ page, className, children }: iHeaderProps) {
   const { isLogged, logOut } = useContext(UserContext)
   const navigate = useNavigate()

   return (
      <StyledHeader page={page}>
         <div className={className}>
            <nav className={isLogged ? className : ""}>
               <img src={logo} alt="Logo Kenzie Hub" />
               <ul>
                  {isLogged ? (
                     <li>
                        <StyledButton color="grey" heigth="small" type="button" onClick={logOut}>
                           Sair
                        </StyledButton>
                     </li>
                  ) : (
                     <li>
                        <StyledButton color="grey" heigth="small" type="button" onClick={() => navigate(-1)}>
                           voltar
                        </StyledButton>
                     </li>
                  )}
               </ul>
            </nav>
            {children && <div className="header_children">{children}</div>}
         </div>
      </StyledHeader>
   )
}
