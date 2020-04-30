import React, { useState, useEffect } from 'react';
import { Flex, Box, Button, Heading } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { getFiles } from '../fetchService';

const ListFiles = () => {
  const [files, setFiles] = useState([]);
  const [query, setQuery] = useState('');

  const submitQuery = (event) => {
    if (event.key === 'Enter') {
      console.log('apples');
      getFiles(query, setFiles);
    }
  };

  return (
    <Box mt={4} mx={['1', '4']}>
      <Heading fontSize={'5'} my={3}>
        My Files
      </Heading>
      <Label>Enter Your ID:</Label>
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Input
          m={1}
          ml={0}
          id="tech-id"
          name="techId"
          type="text"
          value={query}
          maxWidth={'200px'}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={(event) => submitQuery(event)}
        />
        <Button
          bg="blue"
          m={1}
          width={'100px'}
          minWidth={'100px'}
          onClick={() => getFiles(query, setFiles)}
        >
          Search
        </Button>
      </Flex>
      <Box my={3}>
        <Heading fontSize={'3'} mb={2}>
          {files.length
            ? 'Files associated with your ID:'
            : `No files to show ${query ? `for technician ${query}` : ''}`}
        </Heading>
        {files.map((file) => (
          <Box my={2} key={file}>
            {file}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ListFiles;
