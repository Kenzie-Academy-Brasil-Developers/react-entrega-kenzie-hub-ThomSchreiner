import { BiErrorCircle } from "react-icons/bi"
import { RiCheckboxBlankFill } from "react-icons/ri"

export function Input({ className, name, type, placeholder, register, errors }) {
   const [namePtBr, nameEng] = name

   return (
      <div className={className}>
         <label className="text three" htmlFor={nameEng}>
            {namePtBr}
         </label>
         <div>
            <input
               className={`text one ${errors[nameEng]?.message ? "input_red" : ""}`}
               id={nameEng}
               type={type}
               placeholder={placeholder}
               {...register(nameEng)}
            />
            {errors[nameEng]?.message && (
               <>
                  <BiErrorCircle />
                  <span className="text three">{errors[nameEng]?.message}</span>
                  <RiCheckboxBlankFill />
               </>
            )}
         </div>
      </div>
   )
}
