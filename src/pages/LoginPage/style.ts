import styled from "styled-components"

export const DivContainer = styled.div`
   padding: 42px 22px;
   border-radius: 4px;
   box-shadow: 0px 4px 40px -10px var(--shadow);
   display: flex;
   flex-direction: column;
   align-items: center;
   color: var(--grey-0);
   background-color: var(--grey-3);

   h3 {
      text-align: center;
   }

   form {
      display: flex;
      flex-direction: column;
      gap: 26px;
      width: 100%;
      margin-bottom: 34px;
   }

   span {
      text-align: center;
      margin-bottom: 22px;
   }

   a {
      width: 100%;
      height: 48px;
      background-color: var(--grey-1);
      color: var(--grey-0);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      text-decoration: none;

      &:hover {
         background-color: var(--grey-2);
      }
   }
`
