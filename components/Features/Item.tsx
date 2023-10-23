import React from 'react';
import { Container, Grid, GridCol, Image, Text, Title } from '@mantine/core';

interface FeatureProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse: any;
}

const Feature: React.FC<FeatureProps> = ({ imageSrc, title, description, reverse }) => {
  return (
    <Grid align="center">
      <GridCol
        display={reverse ? { base: 'block', sm: 'none' } : 'block'}
        span={{ base: 12, sm: 6 }}
      >
        <Image mx={{ base: 'auto', sm: 0 }} w={{ base: 325, sm: 450 }} src={imageSrc} />
      </GridCol>
      <GridCol mb={{ base: 50, sm: 0 }} span={{ base: 12, sm: 6 }}>
        <Text ta={{ base: 'center', sm: 'left' }} fz={{ base: 'xs', sm: 'lg' }}>
          {title}
        </Text>
        <Text
          mt={{ base: 10, sm: 0 }}
          ta={{ base: 'center', sm: 'left' }}
          fz={{ base: 'xxxs', sm: 'sm' }}
        >
          {description}
        </Text>
      </GridCol>
      {reverse && (
        <GridCol display={{ base: 'none', sm: 'block' }} span={{ base: 12, sm: 6 }}>
          <Image mx={{ base: 'auto', sm: 0 }} w={{ base: 325, sm: 450 }} src={imageSrc} />
        </GridCol>
      )}
    </Grid>
  );
};

export default Feature;
