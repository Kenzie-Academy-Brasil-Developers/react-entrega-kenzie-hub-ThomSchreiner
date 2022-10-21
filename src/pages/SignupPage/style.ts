import styled from "styled-components"

export const DivContainer = styled.div`
   padding: 42px 22px 28px 22px;
   border-radius: 4px;
   box-shadow: 0px 4px 40px -10px var(--shadow);
   display: flex;
   flex-direction: column;
   align-items: center;
   color: var(--grey-0);
   background-color: var(--grey-3);

   h1 {
      margin-bottom: 22px;
   }
   
   span {
      color: var(--grey-1);
      margin-bottom: 28px;
   }

   form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 26px;

      select {
         width: 100%;
         height: 48px;
         padding-left: 16px;
         border-radius: 4px;
         color: var(--grey-0);
         background-color: var(--grey-2);
         border: 1px solid var(--grey-2);
      }
   }
`