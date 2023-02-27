import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  min-height:100vh;
  border: none;

}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none
}


h1,
h2 {
  margin: 0;
}

`;

export default GlobalStyles;
