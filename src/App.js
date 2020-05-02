import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import { ReactComponent as GumballMachine } from './assets/gumball-machine.svg';
import ListFiles from './components/ListFiles';
import UploadFile from './components/UploadFile';
import TechIdInput from './components/TechIdInput';
import MachIdInput from './components/MachIdInput';
import Reflections from './components/Reflections';
import theme from './theme';
import { Box, Flex, Heading } from 'rebass';

import { ThemeProvider } from 'emotion-theming';

const App = () => {
  const [machId, setMachId] = useState('');
  const [techId, setTechId] = useState('');
  const [files, setFiles] = useState([]);

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
      <Heading bg="blue" color="white" fontSize={['2', '6']} py={1}>
        <Flex alignItems="center">
          <GumballMachine height="100" width="100" />
          GSI YummyGummy2k™ Data Portal
        </Flex>
      </Heading>

      <Reflections />

      <TechIdInput setTechId={setTechId} techId={techId} setFiles={setFiles} />

      <Box my={4}>
        <Heading fontSize={'5'} my={3} mx={['1', '4']}>
          Upload New File
        </Heading>
        <MachIdInput machId={machId} setMachId={setMachId} />
        <UploadFile techId={techId} machId={machId} setFiles={setFiles} />
      </Box>

      <Heading fontSize={'5'} my={3} mx={['1', '4']}>
        List Your Files
      </Heading>
      <ListFiles
        files={files}
        query={techId}
        techId={techId}
        setFiles={setFiles}
      />
    </ThemeProvider>
  );
};

export default App;
