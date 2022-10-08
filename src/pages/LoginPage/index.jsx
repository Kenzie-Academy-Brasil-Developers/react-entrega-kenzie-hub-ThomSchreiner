import { Link, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { DivContainer } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "./../../services/api"
import { toast } from "react-toastify"

export function LoginPage({ isLogged, setIsLogged, setUser }) {
   const navigate = useNavigate()
   const schema = yup.object({
      email: yup.string().required("Email obrigatório!"),
      password: yup.string().required("Senha obrigatória"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   function onSubmit(data) {
      console.log(data)

      api.post("/sessions", data)
         .then((resp) => {
            setUser(resp.data.user)
            localStorage.setItem("@KenzieHubToken", resp.data.token)
            localStorage.setItem("@KenzieHubUserId", resp.data.user.id)
            setIsLogged(true)
            toast.success("Login realizado com sucesso!")
            navigate("/dashboard")
         })
         .catch((err) => toast.error(err.response.data.message))
   }

   return (
      <>
         <Header isLogged={isLogged} setIsLogged={setIsLogged} loginPage="login" />
         <DivContainer className="container small">
            <h3 className="title three">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label className="text three" htmlFor="email">
                  Email
               </label>
               <input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  {...register("email")}
               />

               <label className="text three" htmlFor="password">
                  Senha
               </label>
               <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
               />

               <button type="submit">Entrar</button>
            </form>
            <span className="text three bold">Ainda não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
         </DivContainer>
      </>
   )
}
