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

      svg {
         position: absolute;
         right: 10px;
         top: 50%;
         transform: translateY(-50%);
         color: var(--negative);
         font-size: 24px;
         cursor: pointer;
      }
   }
`