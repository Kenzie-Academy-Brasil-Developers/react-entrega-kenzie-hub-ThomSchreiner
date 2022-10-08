import { Header } from "../../components/Header"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { DivContainer } from "./style"
import { StyledInput } from "../../components/Input/style"
import { api } from "./../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export function SignupPage({ isLogged }) {
   const navigate = useNavigate()

   const schema = yup.object({
      name: yup.string().required("Nome obrigatório!"),
      email: yup.string().required("Email obrigatório!").email("Digite um email válido!"),
      password: yup
         .string()
         .required("Senha obrigatório!")
         .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
         .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
         .matches(/(\d)/, "Deve conter ao menos 1 número")
         .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos"),
      confirmPassword: yup
         .string()
         .required("Confirmação de senha obrigatório!")
         .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
      bio: yup.string().required("Bio obrigatório!"),
      contact: yup.string().required("Contato obrigatório!").min(11, "Digite seu número com DDD"),
      course_module: yup.string().required("Módulo obrigatório!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   function onSubmit(data) {
      console.log(data)
      api.post("/users", data)
         .then((resp) => {
            toast.success("Cadastro realizado com sucesso!")
            navigate("/")
         })
         .catch((err) => toast.error(err.response.data.message))
   }

   const inputsGuide = [
      { name: ["Nome", "name"], type: "text", placeholder: "Digite aqui seu nome" },
      { name: ["Email", "email"], type: "email", placeholder: "Digite aqui seu email" },
      { name: ["Senha", "password"], type: "password", placeholder: "Digite aqui sua senha" },
      {
         name: ["Confirmar Senha", "confirmPassword"],
         type: "password",
         placeholder: "Digite novamente sua senha",
      },
      { name: ["Bio", "bio"], type: "text", placeholder: "Fale sobre você" },
      { name: ["Contato", "contact"], type: "number", placeholder: "Opção de contato" },
   ]

   return (
      <>
         <Header isLogged={isLogged} />
         <DivContainer className="container small">
            <h1 className="title one">Crie sua conta</h1>
            <span className="text three">Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(onSubmit)}>
               {inputsGuide.map((input) => (
                  <StyledInput
                     key={input.placeholder}
                     name={input.name}
                     type={input.type}
                     placeholder={input.placeholder}
                     register={register}
                     errors={errors}
                  />
               ))}
               <select {...register("course_module")}>
                  {["Escolha um", "1º", "2º", "3º", "4º", "5º", "6º"].map((count, i) => (
                     <option key={i} value={i ? `${count} Módulo` : ""}>{`${count} Módulo`}</option>
                  ))}
               </select>

               <button type="submit">Cadastrar</button>
            </form>
         </DivContainer>
      </>
   )
}
