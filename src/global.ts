import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'PoppinsBlack';
    src: local('Poppins-Black'), url(./fonts/MyFont.woff) format('woff');
    /* other formats include: 'woff2', 'truetype, 'opentype',
      'embedded-opentype', and 'svg' */
  }
  html {
    --white: #ffffff;
    --global_boxShadow: 0px 8px 16px rgba(143, 149, 178, 0.15);
    --lg_screen: 1100px;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Montserrat', sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.45;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  
  #root {
    /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
    */
    isolation: isolate;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    overflow-x: hidden;
  }

`;

export default GlobalStyles;