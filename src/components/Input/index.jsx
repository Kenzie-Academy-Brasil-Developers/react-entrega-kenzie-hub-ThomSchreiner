export function Input({ className, name, type, placeholder, register, errors }) {
   const [namePtBr, nameEng] = name

   return (
      <div className={className}>
         <label className="text three" htmlFor="">
            {namePtBr}
         </label>
         <div>
            <input type={type} placeholder={placeholder} {...register(nameEng)} />
            {/* <img src="" alt="Erros" /> */}
            <span className="text three">{errors[name]?.message}</span>
         </div>
      </div>
   )
}
