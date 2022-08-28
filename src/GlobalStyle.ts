import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --pri-text: #eceee1;
    --sec-text: #DF0D25;

    --pri-background: linear-gradient(149deg, rgba(10,10,10,1) 0%, rgba(24,24,24,1) 100%);
    --sec-background: #DF0D25;

    --blue: #018FF6;
    --green: #22DA6E;
    --red: #EF5350;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`