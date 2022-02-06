import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    
  }
  body {
 
    height: 100%;
    width: 100%;
  }
  
  h2{
      margin-top: 50px;
      text-align: center;
  }
`;

export default GlobalStyles;
