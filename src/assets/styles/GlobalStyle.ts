import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 25px;
  }

  ::-webkit-scrollbar-track {
    background-color: #eee;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #111;

    border: 6px solid transparent;
    border-radius: 20px;

    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0);
  }
`

export default GlobalStyle
