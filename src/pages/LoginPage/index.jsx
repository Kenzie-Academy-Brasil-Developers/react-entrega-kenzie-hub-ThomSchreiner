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
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"

export function LoginPage() {
   const { setUser, setIsLogged } = useContext(UserContext)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)
   const navigate = useNavigate()
   const schema = yup.object({
      email: yup.string().required("Email obrigatório!"),
      password: yup.string().required("Senha obrigatória!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   async function onSubmit(data) {
      try {
         setIsLoadingBtn(true)
         const resp = await api.post("/sessions", data)
         setUser(resp.data.user)
         localStorage.setItem("@KenzieHubToken", resp.data.token)
         localStorage.setItem("@KenzieHubUserId", resp.data.user.id)
         setIsLogged(true)
         toast.success("Login realizado com sucesso!")
         navigate("/dashboard")
      } catch (error) {
         toast.error(error.response.data.message)
      } finally {
         setIsLoadingBtn(false)
      }
   }

   return (
      <>
         <Header loginPage="login" className="container small" />
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
                  className={isLoadingBtn ? "loading" : ""}
                  color="primary"
                  heigth="default"
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
