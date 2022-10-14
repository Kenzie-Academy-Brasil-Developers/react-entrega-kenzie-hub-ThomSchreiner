export function ModalContainer({ children, className, handleShowModal }) {
   function hiddenModal(event) {
      event.target.className === className && handleShowModal()
   }

   return (
      <div onClick={hiddenModal} className={className}>
         {children}
      </div>
   )
}
