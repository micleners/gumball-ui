import React from 'react';
import { Flex, Box } from 'rebass';
import KataRetro from './KataRetro';
import DigestingKata from './KataRetro';

const KataReflections = () => {
  const [showRetro, setShowRetro] = useState(false)
  const [showDigest, setShowDigest] = useState(false)
  return (
    <Box mt={4} mx={['1', '4']}>
      <KataRetro style={{display: showRetro ? 'block' : 'none'}}/>
      <DigestingKata/>
    </Box>
  );
};

export default KataReflections;
