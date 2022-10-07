import { Header } from "../../components/Header"

export function SignupPage({ isLogged }) {
    return (
        <>
            <Header isLogged={isLogged} />
            <div>
                <h1>Signup Page</h1>
            </div>
        </>
    )
}
