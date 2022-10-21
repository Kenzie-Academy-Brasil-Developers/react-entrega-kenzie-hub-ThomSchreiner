import styled from "styled-components"

export const CardItem = styled.li`
   height: 50px;
   padding: 0 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 25px;
   background-color: var(--grey-4);
   border-radius: 4px;
   cursor: pointer;
   overflow-x: auto;

   &:hover {
      background-color: var(--grey-2);

      p + p {
         color: var(--grey-0);
      }
   }

   p + p {
      flex: 1 1 auto;
      text-align: end;
      color: var(--grey-1);
   }

   button {
      color: var(--white);
      min-width: 13px;
      min-height: 13px;

      &::before {
         right: -30%;
         top: -30%;
         width: 13px;
         height: 13px;
      }
   }

   button:hover {
      transform: scale(1.2);
   }
   button:focus {
      color: var(--primary-focus);
   }
`
