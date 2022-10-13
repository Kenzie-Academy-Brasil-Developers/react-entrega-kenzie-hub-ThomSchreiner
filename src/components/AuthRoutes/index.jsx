import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export function AuthRoutes() {
   const { user, isLoading } = useContext(UserContext)

   if (isLoading) return null

   return user ? <Outlet /> : <Navigate to="/" replace />
}
