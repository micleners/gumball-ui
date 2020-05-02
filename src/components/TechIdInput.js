import React from 'react';
import { Flex, Box, Text, Heading } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { getFiles } from '../fetchService';

const TechIdInput = ({ techId, setTechId, setFiles }) => {
  const submitQuery = (event) => {
    if (event.key === 'Enter') {
      getFiles(techId, setFiles);
    }
  };

  return (
    <Box mt={4} mx={['1', '4']}>
      <Heading fontSize={'5'} my={3}>
        To Manage Files...
      </Heading>
      <Label>Enter Your ID:</Label>
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Input
          m={1}
          ml={0}
          id="tech-id"
          name="techId"
          type="text"
          value={techId}
          maxWidth={'200px'}
          onChange={(event) => {
            setTechId(event.target.value)
            setFiles([])
          }}
          onKeyPress={(event) => submitQuery(event)}
        />
      </Flex>
      <Text fontSize='1'>Example: ID 001 has files loaded</Text>
    </Box>
  );
};

export default TechIdInput;
