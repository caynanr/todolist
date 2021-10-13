import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}
body {
    background-color: ${(props) => props.theme.bg};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
}
`;

export default GlobalStyle;
