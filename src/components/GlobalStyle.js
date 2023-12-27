import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Roboto', sans-serif;
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

export const theme = {
  colors: {
    primeryWhite: '#FFFFFF',
    primeryBlack: '#2F2F2F',
    primeryBlue: '#407BFF',
    secondary2: '#ECF2FF',
    secondary3: '#EF5050',
    secondary4: '#9EBBFF',
    secondary5: '#FF9D43',
    secondary6: '#D7E3FF',
    secondary7: '#8F8F8F',
  },
};
