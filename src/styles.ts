import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        background: black;
        color: black;
        font-family: Ubuntu,sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        align-items: center;
    }
    ::selection {
        background: black;
      }
`;
