import styled, { css } from "styled-components"

interface iButtonProps {
   heigth: "default" | "small"
   color: "primary" | "grey" | "disabled"
   isActive?: boolean
}

const buttonHeigth = {
   default: css`
      height: 48px;
      padding: 10px 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
   `,
   small: css`
      height: 32px;
      padding: 1.5px 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      background-color: var(--grey-3);

      &:hover {
         background-color: var(--grey-2);
      }
   `,
}

const buttonColor = {
   primary: css`
      background-color: var(--primary);

      &:hover {
         background-color: var(--primary-focus);
      }
   `,
   grey: css`
      background-color: var(--grey-1);

      &:hover {
         background-color: var(--grey-2);
      }
   `,
   disabled: css`
      background-color: var(--primary-disabled);
      cursor: no-drop;

      &:hover {
         background-color: var(--primary-disabled);
      }
   `,
}

export const StyledButton = styled.button<iButtonProps>`
   color: var(--white);
   border-radius: 4px;

   ${({ heigth, color }) => heigth === "default" && buttonColor[color]}
   ${({ isActive = true }) => !isActive && buttonColor.disabled}
   ${({ heigth }) => buttonHeigth[heigth]}
`
