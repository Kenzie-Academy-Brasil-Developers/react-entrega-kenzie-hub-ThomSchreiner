import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { DivContainer } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { StyledInput } from "../../components/Input/style"
import { StyledButton } from "../../style/button"
import { useContext, useState } from "react"
import { iLoginUser, UserContext } from "../../contexts/UserContext"

export function LoginPage() {
   const { login } = useContext(UserContext)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)
   const schema = yup.object({
      email: yup.string().required("Email obrigatório!"),
      password: yup.string().required("Senha obrigatória!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iLoginUser>({ resolver: yupResolver(schema) })

   async function onSubmit(data: iLoginUser) {
      setIsLoadingBtn(true)
      await login(data)
      setIsLoadingBtn(false)
   }

   return (
      <>
         <Header page="login" className="container small" />
         <DivContainer className="container small">
            <h3 className="title three">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <StyledInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  register={register("email")}
                  errors={errors.email}
               />
               <StyledInput
                  label="Senha"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  register={register("password")}
                  errors={errors.password}
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
