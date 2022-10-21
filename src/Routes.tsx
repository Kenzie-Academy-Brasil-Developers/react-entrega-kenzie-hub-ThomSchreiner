import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { DashboardPage } from "./pages/DashboardPage"
import { AuthRoutes } from "./components/AuthRoutes"

export default function RoutesMain() {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/register" element={<SignupPage />} />
         <Route element={<AuthRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
         </Route>

         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   )
}
