import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { font } from 'shared/styles';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      body,
      * {
        font-family:
          ${font.Pretendard},
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          sans-serif;
        box-sizing: border-box;
      }

      body {
        background-color: '#1A1918';
        height: 100vh;
        height: 100dvh;
        overscroll-behavior: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        padding: 0;
        border: 0;
        outline: none;
        background: inherit;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
