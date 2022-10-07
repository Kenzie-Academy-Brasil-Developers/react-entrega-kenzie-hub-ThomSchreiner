import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { StyledHeader } from "./style"

export function Header({ isLogged, setIsLogged, loginPage }) {
    const navigate = useNavigate()

    function logOut() {
        setIsLogged(false)
        localStorage.removeItem("@KenzieHubToken")
        localStorage.removeItem("@KenzieHubUserId")
        navigate("/")
    }

    return (
        <StyledHeader className="container small" isLogged={isLogged} loginPage={loginPage}>
            <nav>
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
        </StyledHeader>
    )
}
