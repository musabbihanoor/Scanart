import { Box, Button, Card, Container, Flex, Grid, GridCol, Image, Text } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { data } from '@/data/useCases';

const UseCases = () => {
  return (
    <Container size="lg" py={50}>
      <Text fz={{ base: 'md', sm: 'lg' }} ta="center" mb={50}>
        Use Cases for the scan.art Image Recognition
      </Text>

      <Box display={{ base: 'none', sm: 'block' }}>
        <Grid justify="space-between">
          {data.map((x, i) => (
            <GridCol span={4}>
              <Card h={300} m={10} shadow="sm" padding="xl" radius="md" withBorder>
                <Image src={x.image} h={90} w={90} fit="contain" />
                <Text mt={20} mb={10} fz="sm">
                  {x.heading}
                </Text>
                <Text fw={'lighter'} fz="xs">
                  {x.description}
                </Text>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Box>

      <Box display={{ base: 'block', sm: 'none' }}>
        <Carousel slideSize="85%" slideGap="xs" height={220}>
          {data.map((x, i) => (
            <CarouselSlide>
              <Card h={200} m={10} shadow="sm" padding="md" radius="md" withBorder>
                <Image src={x.image} h={60} w={60} fit="contain" />
                <Text mt={10} mb={5} fz="xxs">
                  {x.heading}
                </Text>
                <Text fw={'lighter'} fz="xxxs">
                  {x.description}
                </Text>
              </Card>
            </CarouselSlide>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default UseCases;
