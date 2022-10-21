import { BiErrorCircle } from "react-icons/bi"
import { RiCheckboxBlankFill } from "react-icons/ri"
import { FieldErrorsImpl, UseFormRegisterReturn, FieldError, Merge } from "react-hook-form"
import { ReactNode } from "react"

interface iInputProps {
   className?: string
   label: string
   name: string
   type: string
   placeholder: string
   register: UseFormRegisterReturn<string>
   errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
//  Perguntar se tem como forçar passar error.alguma string

export function Input({ className, label, name, type, placeholder, register, errors }: iInputProps) {
   return (
      <div className={className}>
         <label className="text three" htmlFor={name}>
            {label}
         </label>
         <div>
            <input
               className={`text one ${errors?.message ? "input_red" : ""}`}
               id={name}
               type={type}
               placeholder={placeholder}
               {...register}
            />
            {errors?.message && (
               <>
                  <BiErrorCircle />
                  <span className="text three">{errors?.message as ReactNode}</span>
                  {/* Perguntar se está certo usar o ReactNode assim */}
                  <RiCheckboxBlankFill />
               </>
            )}
         </div>
      </div>
   )
}
