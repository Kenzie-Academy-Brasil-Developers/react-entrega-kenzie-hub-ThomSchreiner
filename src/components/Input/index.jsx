import { BiErrorCircle } from "react-icons/bi"

export function Input({ className, name, type, placeholder, register, errors }) {
   const [namePtBr, nameEng] = name

   return (
      <div className={className}>
         <label className="text three" htmlFor={nameEng}>
            {namePtBr}
         </label>
         <div>
            <input
               className="text one"
               id={nameEng}
               type={type}
               placeholder={placeholder}
               {...register(nameEng)}
            />
            {/* <BiErrorCircle /> */}
            {/* <span className="text three">{errors[name]?.message}</span> */}
         </div>
      </div>
   )
}
