import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
    color: white;

  input {
  outline: none;
  }

  a {
  text-decoration: none;
  }
  body {
    background-color: #0f1322
  }
}
`;

export default GlobalStyle;
