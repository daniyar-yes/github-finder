import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 480px; 
    background-color: #ffffff;
  }

  p {
    text-align: center;
  }

  #root {
    width: 100%;
    max-width: 1200px;
  }
`;


export default GlobalStyles;
