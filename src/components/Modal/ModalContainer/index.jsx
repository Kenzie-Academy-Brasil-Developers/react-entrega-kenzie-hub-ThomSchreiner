export function ModalContainer({ children, className, handleShowModalAdd }) {
   function hiddenModal(event) {
      event.target.className === className && handleShowModalAdd()
   }

   return (
      <div onClick={hiddenModal} className={className}>
         {children}
      </div>
   )
}
