import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");

  body {
    margin: 0;
    padding: 0;

    @media screen and (min-width: 992px) {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #5b36ac;
      font-family: "Gothic A1", "Ubuntu", sans-serif;
    }
  }
`;

export default GlobalStyle;