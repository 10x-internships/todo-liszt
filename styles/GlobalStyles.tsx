import { Global, css, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        :root {
          --font-primary: 'DM Sans', sans-serif;
          --font-secondary: 'Poppins', sans-serif;

          --transition: all 0.25s linear;
        }

        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-primary);
          font-size: 1rem;
          font-weight: 400;
          color: ${theme.textColor};
          background-color: ${theme.backgroundColor};
          transition: var(--transition);
          padding: 2rem;
        }

        a {
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        h1 {
          margin: 0;
        }

        button,
        input,
        textarea {
          font-family: inherit;
          font-size: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
