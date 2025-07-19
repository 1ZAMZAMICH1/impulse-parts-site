import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FF8C00; /* ВОТ ОН, СУКА, СВЕТЛО-ОРАНЖЕВЫЙ */
    color: #5C3A1A;   /* Глубокий коричневый для контраста */
    font-family: 'Exo 2', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
`;