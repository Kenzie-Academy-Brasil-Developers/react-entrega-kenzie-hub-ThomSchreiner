import styled, { css } from "styled-components";

const isLoggedStyle = {
   true: css`
      height: 190px;
      border-bottom: 1px solid var(--grey-3);

      & > div {
         padding-top: 72px;
      }

      nav { 
         height:72px;
         position: fixed;
         inset: 0;
         background-color: var(--grey-4);

         &::before {
            content: "";
            width: 200vw;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: -100vw;
            background-color: var(--grey-3);
         }
      }

      .header_children { height: 118px; }
   `,
   login: css`
      nav ul { display: none; }
      nav { justify-content: center; }
   `
}

export const StyledHeader = styled.header`
    height: 72px;

   & > div {
      height: 100%;
   }
   
   nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
   }

   .header_children {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
         color: var(--grey-0);
      }

      p {
         color: var(--grey-1);
      }
   }

   ${({ isLogged, loginPage }) => loginPage ? isLoggedStyle["login"] : isLoggedStyle[isLogged]}
`