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
