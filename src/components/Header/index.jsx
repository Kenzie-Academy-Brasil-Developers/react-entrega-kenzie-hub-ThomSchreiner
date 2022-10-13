import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { UserContext } from "../../contexts/UserContext"
import { StyledButton } from "../../style/button"
import { StyledHeader } from "./style"

export function Header({ loginPage, className, children }) {
   const { isLogged, setIsLogged, setUser } = useContext(UserContext)
   const navigate = useNavigate()

   function logOut() {
      setIsLogged(false)
      localStorage.removeItem("@KenzieHubToken")
      localStorage.removeItem("@KenzieHubUserId")
      setUser(null)
      navigate("/", { replace: true })
   }

   return (
      <StyledHeader isLogged={isLogged} loginPage={loginPage}>
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
