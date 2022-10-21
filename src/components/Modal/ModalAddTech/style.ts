import styled from "styled-components"

export const Container = styled.div`
   background-color: var(--grey-3);
   box-shadow: 0px 4px 40px -10px var(--shadow);
   border-radius: 4px;
   color: var(--grey-0);

   & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 20px;
      background-color: var(--grey-2);
      border-radius: 4px 4px 0px 0px;

      button {
         color: var(--grey-1);
         font-size: 16px;
      }
   }

   form {
      padding: 24px 24px 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      select {
         height: 48px;
         padding: 0 16px;
         color: var(--grey-0);
         background-color: var(--grey-2);
         border: 1px solid var(--grey-2);
         border-radius: 4px;

         &:focus {
            border-color: var(--grey-0);
         }
      }
   }
`
