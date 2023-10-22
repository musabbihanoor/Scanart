import { Center } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const Video = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderPlayer = () => {
    if (isClient) {
      const ReactPlayer = require('react-player').default; // Dynamic import
      return (
        <ReactPlayer
          style={{ width: '100%' }}
          url="Link for Video: 
      https://www.youtube.com/watch?v=Y7VYpgQC71A"
        />
      );
    }
    return null;
  };

  return (
    <Center my={50} mx={10}>
      {renderPlayer()}
    </Center>
  );
};

export default Video;
