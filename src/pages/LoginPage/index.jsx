import { Link, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { DivContainer } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "./../../services/api"
import { toast } from "react-toastify"
import { StyledInput } from "../../components/Input/style"
import { StyledButton } from "../../style/button"
import { useState } from "react"

export function LoginPage({ isLogged, setIsLogged, setUser }) {
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false)
   const schema = yup.object({
      email: yup.string().required("Email obrigatório!"),
      password: yup.string().required("Senha obrigatória!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   function onSubmit(data) {
      setIsLoading(true)
      api.post("/sessions", data)
         .then((resp) => {
            setUser(resp.data.user)
            localStorage.setItem("@KenzieHubToken", resp.data.token)
            localStorage.setItem("@KenzieHubUserId", resp.data.user.id)
            setIsLogged(true)
            setIsLoading(false)
            toast.success("Login realizado com sucesso!")
            navigate("/dashboard")
         })
         .catch((err) => {
            toast.error(err.response.data.message)
            setIsLoading(false)
         })
   }

   return (
      <>
         <Header
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            loginPage="login"
            className="container small"
         />
         <DivContainer className="container small">
            <h3 className="title three">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <StyledInput
                  name={["Email", "email"]}
                  type="email"
                  placeholder="Digite seu email"
                  register={register}
                  errors={errors}
               />
               <StyledInput
                  name={["Senha", "password"]}
                  type="password"
                  placeholder="Digite sua senha"
                  register={register}
                  errors={errors}
               />
               <StyledButton
                  className={isLoading ? "loading" : ""}
                  color="primary"
                  heigth="default"
                  isActive={true}
                  type="submit"
               >
                  Entrar
               </StyledButton>
            </form>
            <span className="text three bold">Ainda não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
         </DivContainer>
      </>
   )
}
