import styled, { css } from "styled-components";

const isLoggedStyle = {
    true: css`

    `,
    false: css`
    
    `,
    login: css`
        nav ul { display: none; }
        nav { justify-content: center; }
    `
}

export const StyledHeader = styled.header`
    height: 72px;
   
    nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    ${({ isLogged, loginPage }) => loginPage ? isLoggedStyle["login"] : isLoggedStyle[isLogged]}
`