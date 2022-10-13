import styled from "styled-components"

export const DivContainer = styled.div`
   padding-top: 37px;
   color: var(--grey-0);

   h1 {
      margin-bottom: 23px;
   }

   & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;

      button {
         width: 32px;
         padding: 0;
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 16px;
         color: var(--white);
      }
   }

   ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      background-color: var(--grey-3);
      border-radius: 4px;
   }

`

export const CardItem = styled.li`
   height: 50px;
   padding: 0 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 25px;
   background-color: var(--grey-4);
   border-radius: 4px;

   &:hover {
      background-color: var(--grey-2);
      
      p + p { color: var(--grey-0); }
   }

   p + p {
      flex: 1 1 auto;
      text-align: end;
      color: var(--grey-1);
   }

   button {
      color: var(--white);
   }
`