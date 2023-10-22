import { Box, Button, Card, Container, Flex, Grid, GridCol, Image, Text } from '@mantine/core';

const UseCases = () => {
  const data = [
    {
      image: '/images/link-physical.png',
      heading: 'Link Physical to Digital',
      description: 'Allow users to scan artworks and direct them to your online shop or website',
    },
    {
      image: '/images/collection-management.png',
      heading: 'Collection Management',
      description: 'Manage and keep track of your collection.',
    },
    {
      image: '/images/quality-assurance.png',
      heading: 'Quality Assurance',
      description: 'Detect defects and issues with artworks.',
    },
    {
      image: '/images/fake-artwork.png',
      heading: 'Fake Artwork Detection',
      description: 'Detect fake and plagiarized artworks',
    },
    {
      image: '/images/similarity-finder.png',
      heading: 'Similarity Finder',
      description: 'Search for similar artworks and/or artists',
    },
    {
      image: '/images/transparency.png',
      heading: 'Transparency',
      description: 'Offer information and price transparency',
    },
  ];

  return (
    <Container size="lg" py={50}>
      <Text fz="lg" ta="center" mb={50}>
        Use Cases for the scan.art Image Recognition
      </Text>

      <Grid justify="space-between">
        {data.map((x, i) => (
          <GridCol span={4}>
            <Card h={300} m={10} shadow="sm" padding="xl" radius="md" withBorder>
              <Image src={x.image} h={90} w={90} fit="contain" />
              <Text mt={20} mb={10} fz="md">
                {x.heading}
              </Text>
              <Text fw={'lighter'} fz="xs">
                {x.description}
              </Text>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
};

export default UseCases;
