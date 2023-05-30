import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

export default GlobalStyles;
