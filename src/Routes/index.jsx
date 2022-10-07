import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { SignupPage } from "../pages/SignupPage"
import { DashboardPage } from "../pages/DashboardPage"
import { useState } from "react"

export default function RoutesMain() {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({})

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <LoginPage isLogged={isLogged} setIsLogged={setIsLogged} setUser={setUser} />
                }
            />
            <Route path="/register" element={<SignupPage isLogged={isLogged} />} />
            <Route
                path="/dashboard"
                element={
                    <DashboardPage isLogged={isLogged} setIsLogged={setIsLogged} user={user} />
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
