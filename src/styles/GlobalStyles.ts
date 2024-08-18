import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #FFCA00;
        --primary-hover: #ffc107;
        --secondary: #2855ac;
        --secondary-hover: #27356F;
        --primary-background: #fff;
        --secondary-background: #FAFBFD;
        --third-background: #eff2f5;
        --primary-text: #000;
        --secondary-text: #fff;
        --third-text: #253342;
        --fourth-text: #555;
        --border-color: #e0e0e0;
        --old-text-color: #9e9e9e;
        --button-disabled: #ccc;
        --cart-badge: #f44336;
        --your-bill: #39a6d8;
        --rating: #0bc15c;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: var(--font-greycliffcf), sans-serif;
        background-color: var(--secondary-background);
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
