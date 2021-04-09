import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

html {
  @media (max-width: 1700px){
    font-size: 75%;
  }
}

body {
  background-color: #141414;
  overflow-x: hidden;
}

button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;

  &:hover, &:focus {
    background-color: #23d997;
  }
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
}

h3 {
  color: #fff;
}

h4 {
  font-weight: bold;
  font-size: 2rem;
}

span {
  font-weight: bold;
  color: #23d997;
}

a {
  font-size: 1.1rem;
}

p {
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}
`;

export default GlobalStyle;
