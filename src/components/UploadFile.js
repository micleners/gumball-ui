import React, { useState } from 'react';
import { Flex, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { uploadFile } from '../fetchService';

const UploadFile = ({ techId, machId, setFiles }) => {
  const [file, setFile] = useState();

  const onChangeHandler = (event) => {
    setFile(() => event.target.files[0]);
  };

  const submitFile = () => {
    uploadFile(file, techId, machId, setFile, setFiles);
  };

  return (
    <Box mt={4} mx={['1', '4']}>
      <Label>Select file to upload:</Label>
      <Flex flexDirection="row" alignItems="center" flexWrap="wrap">
        <Input
          type="file"
          sx={{ borderRadius: '4px', borderColor: 'grey' }}
          maxWidth={'300px'}
          my={2}
          name="file"
          onChange={onChangeHandler}
          disabled={!techId || !machId}
        />
        <Button
          disabled={!techId || !machId || !file}
          bg={!techId || !machId || !file ? 'grey' : 'blue'}
          width={'150px'}
          m={1}
          onClick={submitFile}
        >
          Upload File
        </Button>
      </Flex>
    </Box>
  );
};

export default UploadFile;
