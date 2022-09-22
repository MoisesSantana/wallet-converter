import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f9f9f9;

    --blue: #2795C7;
    --blue-light: #0BC6E3;

    --green: #1A7F00;
    --green-light: #22DA6E;

    --red: #DF0D25;
    --red-light: #EF5350;

    --black: #111111;
    --black-light: #282828;

    --radius: 0.25rem;
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
    background: var(--black);
    -webkit-font-smoothing: antialiased;
    color: var(--white);
  }

  body, input, button, textarea {
    font-family: 'Michroma', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    text-shadow: 1px 1px 3px solid rgba(0, 0, 0, 0.8);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--radius);
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
