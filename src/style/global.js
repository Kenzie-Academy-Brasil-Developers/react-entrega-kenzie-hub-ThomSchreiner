import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* RESET CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'Inter', sans-serif;
}

img {
    max-width: 100%;
}

button {
    cursor: pointer;
}

ul, ol, li {
    list-style: none;
}

:root {
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;
    --shadow: rgba(0, 0, 0, 0.25);
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 50px;
}

.container.small {
    max-width: 370px;
}

@media (max-width: 768px) {
    .container {
        margin: 0 15px;
    }
}

/* TYPOGRAPHY */
.title {
    font-weight: 700;
}

.title.one {
    font-size: 18px;
    line-height: 28px;
}

.title.two {
    font-size: 16px;
    line-height: 26px;
}

.title.three {
    font-size: 14px;
    line-height: 24px;
}

.text {
    font-weight: 400;
}

.text.one {
    font-size: 16px;
    line-height: 26px;
}

.text.two {
    font-size: 14px;
    line-height: 24px;
}

.text.three {
    font-size: 12px;
    line-height: 22px;
}

.text.three.bold {
    font-weight: 600;
}

.text.three.italic {
    font-style: italic;
}

`