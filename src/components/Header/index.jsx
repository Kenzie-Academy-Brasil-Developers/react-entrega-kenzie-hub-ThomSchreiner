import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { StyledHeader } from "./style"

export function Header({ isLogged, setIsLogged, loginPage, className, children }) {
   const navigate = useNavigate()

   function logOut() {
      setIsLogged(false)
      localStorage.removeItem("@KenzieHubToken")
      localStorage.removeItem("@KenzieHubUserId")
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
                        <button onClick={logOut}>Sair</button>
                     </li>
                  ) : (
                     <li>
                        <button onClick={() => navigate(-1)}>voltar</button>
                     </li>
                  )}
               </ul>
            </nav>
            {children && <div className="header_children">{children}</div>}
         </div>
      </StyledHeader>
   )
}
