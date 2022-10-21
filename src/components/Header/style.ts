import styled, { css } from "styled-components"
import { tPage } from "."

interface iStyledHeaderProps {
   page: tPage
}

const isLoggedStyle = {
   dashboard: css`
      height: 190px;
      border-bottom: 1px solid var(--grey-3);

      & > div {
         padding-top: 72px;
      }

      nav {
         height: 72px;
         position: fixed;
         inset: 0;

         &::before {
            content: "";
            width: 200vw;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: -100vw;
            border-bottom: 1px solid var(--grey-3);
            background-color: var(--grey-4);
            z-index: -1;
         }
      }

      .header_children {
         height: 118px;
      }
   `,
   login: css`
      nav ul {
         display: none;
      }
      nav {
         justify-content: center;
      }
   `,
   signup: "",
}

export const StyledHeader = styled.header<iStyledHeaderProps>`
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

   ${({ page }) => isLoggedStyle[page]}
`
