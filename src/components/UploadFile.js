import React, { useState, useEffect } from 'react';
import { Flex, Box, Button, Heading } from 'rebass';
import { Label, Input } from '@rebass/forms';

const UploadFile = () => {
  const [file, setFile] = useState();

  const onChangeHandler = (event) => {
    setFile(() => event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const submitFile = () => {
    console.log(file);
  };

  return (
    <Box mt={4} mx={['1', '4']}>
      <Heading fontSize={'5'} my={3}>
        Upload File
      </Heading>
      <Label>Select file to upload:</Label>
      <Flex flexDirection="row" alignItems="center" flexWrap="wrap">
        <Input
          type="file"
          sx={{ borderRadius: '4px', borderColor: 'grey' }}
          maxWidth={'300px'}
          my={2}
          name="file"
          onChange={onChangeHandler}
        />
        <Button bg="blue" width={'150px'} m={1} onClick={submitFile}>
          Upload File
        </Button>
      </Flex>
    </Box>
  );
};

export default UploadFile;
