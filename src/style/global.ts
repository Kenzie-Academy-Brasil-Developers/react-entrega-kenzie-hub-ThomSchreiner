import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* RESET CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    transition: 0.15s;
}

img {
    max-width: 100%;
}

button {
    cursor: pointer;
    background-color: transparent;
}

ul, ol, li {
    list-style: none;
}

:root {
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-disabled: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --grey-4-50: rgba(18, 18, 20, 0.5);
    --shadow: rgba(0, 0, 0, 0.25);
    --white: #FFFFFF;
    --success: #3FE864;
    --negative: #E83F5B;
}

.container {
    width: 85%;
    max-width: 900px;
    margin: 0 auto;
}

.container.small {
    max-width: 370px;
}

@media (max-width: 768px) {
    .container {
        width: 95%;
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

/* LOADING */
.loading {
   position: relative;
   inset: 0;
}

.loading::before {
   content: "";
   position: absolute;
   right: 10px;
   top: 27%;
   width: 15px;
   height: 15px;
   border: 4px solid var(--white);
   border-top: 4px solid var(--grey-1);
   border-radius: 50%;
   animation: rotateAnivation 0.1s linear infinite;

}

@keyframes rotateAnivation {
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`
