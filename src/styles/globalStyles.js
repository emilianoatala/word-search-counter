import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, Sans-Serif;
    background-color:#F8F8F1;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
`;
 
export default GlobalStyle;