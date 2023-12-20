import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
:root{
  --Primery-Color-White: #FFFFFF;
  --Primery-Color-Black: #2F2F2F;
  --Primery-Color-Blue: #407BFF;

  --Secondary-color-2: #ECF2FF;
  --Secondary-color-3: #EF5050;
  --Secondary-color-4: #9EBBFF;
  --Secondary-color-5: #FF9D43;
  --Secondary-color-5: #D7E3FF;
}

body {
  font-family: 'Roboto', sans-serif;;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
