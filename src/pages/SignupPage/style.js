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


    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`