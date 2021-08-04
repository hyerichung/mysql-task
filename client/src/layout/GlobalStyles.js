import { createGlobalStyle } from "styled-components";

import { GLOBAL_COLOR } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    overflow: scroll;

    @media screen and (min-width: 992px) {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${GLOBAL_COLOR.LAPTOP_BACKGROUND_COLOR};
    }
  }
`;

export default GlobalStyle;
