import { createGlobalStyle } from 'styled-components';

import { ThemeState } from '../stores';

export default createGlobalStyle<ThemeState>`
${(props) => {
  const {
    computed: { background },
    color,
  } = props;

  return `
      * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
      background: ${background};
    }

    body, button, p, input {
      font-family: 'roboto', sans-serif;
      font-size: 14px;
      color: ${color};
      -webkit-font-smoothing: antialised !important;
    }

    .App {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    button, input {
      border-radius: 0.75rem;
      border: none;
      outline: none;
      background: ${background};
      filter: brightness(1.05);
    }

    header, footer {
      filter: brightness(1.2);
    }

    button {
      cursor: pointer;
    }

    button:hover {
        filter: brightness(1.5);
      }

    ul {
      list-style: none;
    }
  `;
}}`;
