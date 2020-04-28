import React from 'react';
import { Router } from '@reach/router';

import Index, { PAGES } from './pages/Index';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <h1
        style={{
          color: 'cyan',
          fontSize: '3rem',
          fontStyle: 'italic',
          marginTop: '-0.5rem',
          position: 'fixed',
          top: 0,
          right: 0,
          textDecoration: 'deeppink double underline',
        }}
      >
        using web audio hooks
      </h1>
      <ThemeProvider theme={theme}>
        <Router>
          <Index default />
          {PAGES.map(({ Component, path }) => (
            <Component key={path} path={path} />
          ))}
        </Router>
      </ThemeProvider>
    </>
  );
}
