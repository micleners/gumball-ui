import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import { Flex } from 'rebass';

import ListFiles from './components/ListFiles';
import UploadFile from './components/UploadFile';
import theme from './theme';

import { ThemeProvider } from 'emotion-theming';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
        `}
      />
      <UploadFile />
      <ListFiles />
    </ThemeProvider>
  );
};

export default App;
