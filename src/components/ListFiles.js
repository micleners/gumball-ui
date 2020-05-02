import React from 'react';
import { Box, Button, Heading } from 'rebass';
import { getFiles } from '../fetchService';

const ListFiles = ({ files, techId, setFiles }) => {
  return (
    <Box mx={['1', '4']}>
      <Heading fontSize={'3'} mb={2}>
        {techId && techId.length ? (
          <>
            <Button
              bg={techId.length ? 'blue' : 'grey'}
              m={1}
              disabled={!techId.length}
              width={'100px'}
              minWidth={'100px'}
              onClick={() => getFiles(techId, setFiles)}
            >
              Search
            </Button>
            {` for files associated with ID ${techId}`}
          </>
        ) : (
          'Enter ID above to search'
        )}
      </Heading>

      <Box my={3}>
        <Heading fontSize={'2'} mb={2}>
          {files && files.length ? 'Files Found' : 'No files to show'}
        </Heading>
        {files &&
          files.map((file) => (
            <Box my={2} key={file}>
              {file}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ListFiles;
