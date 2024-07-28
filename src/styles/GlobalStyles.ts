import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: var(--font-greycliffcf), sans-serif;
        background-color: #FAFBFD;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
        margin: 0;
    }
`;

export default GlobalStyles;
