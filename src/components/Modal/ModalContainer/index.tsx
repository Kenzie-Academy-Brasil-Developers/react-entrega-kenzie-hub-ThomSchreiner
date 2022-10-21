import { MouseEvent, ReactNode } from "react"

interface iModalContainer {
   children: ReactNode
   className?: string
   handleShowModal(): void
}

export function ModalContainer({ children, className, handleShowModal }: iModalContainer) {
   function hiddenModal(event: MouseEvent<HTMLElement>) {
      const target = event.target as HTMLDivElement
      target.className === className && handleShowModal()
   }

   return (
      <div onClick={hiddenModal} className={className}>
         {children}
      </div>
   )
}
