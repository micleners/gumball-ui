import React, { useState } from 'react';
import { Flex, Button, Box } from 'rebass';
import KataRetro from './KataRetro';
import DigestingKata from './DigestingKata';

const Reflections = () => {
  const [showRetro, setShowRetro] = useState(false);
  const [showDigest, setShowDigest] = useState(false);

  const ButtonSet = () => (
    <Flex justifyContent="flex-start" flexWrap="wrap">
      <Button
        bg="blue"
        mt={4}
        mx={['1', '4']}
        width={'200px'}
        onClick={() => {
          setShowDigest(!showDigest);
          setShowRetro(false);
        }}
      >
        {showDigest ? 'Hide' : 'Read'} Digest
      </Button>
      <Button
        bg="blue"
        mt={4}
        mx={['1', '4']}
        width={'200px'}
        onClick={() => {
          setShowRetro(!showRetro);
          setShowDigest(false);
        }}
      >
        {showRetro ? 'Hide' : 'Read'} Retro
      </Button>
    </Flex>
  );

  return (
    <>
      <ButtonSet />
      <Box mt={4} mx={['1', '4']} mr={['1', '20%', '40%']}>
        <Box pt={2} display={showDigest ? 'block' : 'none'}>
          <DigestingKata />
          <ButtonSet />
        </Box>
        <Box pt={2} display={showRetro ? 'block' : 'none'}>
          <KataRetro />
          <ButtonSet />
        </Box>
      </Box>
    </>
  );
};

export default Reflections;
