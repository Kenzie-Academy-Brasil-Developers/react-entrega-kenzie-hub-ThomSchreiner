import { Header } from "../../components/Header"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { DivContainer } from "./style"
import { StyledInput } from "../../components/Input/style"
import { api } from "./../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { StyledButton } from "./../../style/button"
import { useEffect, useState } from "react"

export function SignupPage() {
   const navigate = useNavigate()
   const [isActive, setIsActive] = useState(false)
   const [isLoadingBtn, setIsLoadingBtn] = useState(false)

   const schema = yup.object({
      name: yup.string().required("Nome obrigatório!"),
      email: yup.string().required("Email obrigatório!").email("Digite um email válido!"),
      password: yup
         .string()
         .required("Senha obrigatória!")
         .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
         .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
         .matches(/(\d)/, "Deve conter ao menos 1 número")
         .matches(/(\W)|_/, "Deve conter ao menos 1 caractere especial")
         .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos"),
      confirmPassword: yup
         .string()
         .required("Confirmação de senha obrigatória!")
         .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
      bio: yup.string().required("Bio obrigatória!"),
      contact: yup.string().required("Contato obrigatório!").min(11, "Digite seu número com DDD"),
      course_module: yup.string().required("Módulo obrigatório!"),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(schema) })

   async function onSubmit(data) {
      try {
         setIsLoadingBtn(true)
         await api.post("/users", data)
         toast.success("Cadastro realizado com sucesso!")
         navigate("/")
      } catch (error) {
         toast.error(error.response.data.message)
      } finally {
         setIsLoadingBtn(false)
      }
   }

   useEffect(() => {
      setIsActive(!Object.keys(errors).length)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [Object.keys(errors).length])

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
         <Header className="container small" />
         <DivContainer className="container small">
            <h1 className="title one">Crie sua conta</h1>
            <span className="text three">Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

               <label className="text three" htmlFor="course_module">
                  Selecionar módulo
               </label>
               <select className="text one" id="course_module" {...register("course_module")}>
                  {["1º", "2º", "3º", "4º", "5º", "6º"].map((count, i) => (
                     <option key={i} value={`${count} Módulo`}>{`${count} Módulo`}</option>
                  ))}
               </select>
               <StyledButton
                  color="primary"
                  heigth="default"
                  isActive={isActive}
                  disabled={!isActive}
                  className={isLoadingBtn ? "loading" : ""}
                  type="submit"
               >
                  Cadastrar
               </StyledButton>
            </form>
         </DivContainer>
      </>
   )
}
