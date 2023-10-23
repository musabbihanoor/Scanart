import React from 'react';
import { Container, Grid, GridCol, Image, Text, Title } from '@mantine/core';
import Feature from './Item';
import { data } from '@/data/features';

const Features: React.FC = () => {
  return (
    <Container bg="#fff" py={50} size="lg">
      <Text fz={{ base: 'md', sm: 'lg' }} ta="center" mb={50}>
        How the scan.art Image Recognition works
      </Text>

      {data.map((x, i) => (
        <Feature {...x} />
      ))}
    </Container>
  );
};

export default Features;
