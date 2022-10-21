import styled from "styled-components"
import { Input } from "."

export const StyledInput = styled(Input)`
   label {
      display: inline-block;
      margin-bottom: 18px;
   }

   div {
      height: 48px;
      position: relative;
      inset: 0;

      input {
         width: 100%;
         height: 100%;
         border-radius: 4px;
         padding-left: 16px;
         padding-right: 40px;
         color: var(--grey-0);
         background-color: var(--grey-2);
         border: 1px solid var(--grey-2);

         &::placeholder {
            color: var(--grey-1);
         }

         &:focus {
            border-color: var(--grey-0);
         }
      }

      .input_red {
         border-color: var(--negative);
      }

      svg {
         position: absolute;
         right: 10px;
         top: 50%;
         transform: translateY(-50%);
         color: var(--negative);
         font-size: 24px;
      }

      span {
         display: none;
         position: absolute;
         right: -10px;
         top: 0;
         transform: translate(100%, 25%);
         background-color: var(--negative);
         color: white;
         padding: 5px 10px;
         margin: 0;
         border-radius: 4px;
         z-index: 1;
      }

      span + svg {
         display: none;
         right: -20px;
         top: 24%;
         transform: rotate(45deg);
         font-size: 16px;
      }

      input:focus + svg + span,
      input:focus + svg + span + svg {
         display: inline-block;
      }

      @media (max-width: 768px) {
         span {
            right: 0;
            top: -10px;
            transform: translate(0, -100%);
         }

         span + svg {
            right: 14px;
            top: -18px;
         }
      }
   }
`
