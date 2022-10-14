import styled from "styled-components";
import { ModalContainer } from ".";

export const StyledModal = styled(ModalContainer)`
   position: fixed;
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--grey-4-50);
   z-index: 1;
`