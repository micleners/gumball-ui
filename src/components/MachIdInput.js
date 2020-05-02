import React from 'react';
import { Flex, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';

const MachIdInput = ({ machId, setMachId, confirm }) => {
  return (
    <Box mt={4} mx={['1', '4']}>
      <Label>Enter Machine Number:</Label>
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Input
          m={1}
          ml={0}
          id="mach-id"
          name="machId"
          type="text"
          value={machId}
          maxWidth={'200px'}
          onChange={(event) => setMachId(event.target.value)}
          onBlur={(event) => setMachId(event.target.value)}
        />
      </Flex>
    </Box>
  );
};

export default MachIdInput;
