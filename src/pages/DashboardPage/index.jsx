import { Header } from "../../components/Header"

export function DashboardPage({ isLogged, setIsLogged, user }) {
    return (
        <>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    )
}
