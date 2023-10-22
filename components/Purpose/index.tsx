import { Box, Button, Container, Flex, Image, Text } from '@mantine/core';

const Purpose = () => {
  const data = [
    {
      name: 'Paintings',
      image: '/images/paintings.png',
    },
    {
      name: 'Sculptures',
      image: '/images/sculptures.png',
    },
    {
      name: 'Installations',
      image: '/images/installations.png',
    },
    {
      name: 'Murals',
      image: '/images/murals.png',
    },
    {
      name: 'Prints/Edition',
      image: '/images/prints.png',
    },
    {
      name: 'Drawings',
      image: '/images/drawings.png',
    },
    {
      name: 'Collages',
      image: '/images/collages.png',
    },
    {
      name: 'Mixed Media',
      image: '/images/mixed-media.png',
    },
    {
      name: 'Photography',
      image: '/images/photography.png',
    },
  ];
  return (
    <Container size="lg" py={50}>
      <Text fz="lg" ta="center" mb={50}>
        Made for Recognizing Art
      </Text>
      <Flex wrap={'wrap'} justify="center">
        {data.map((x, i) => (
          <div>
            <Button mx={30} bg="#DE3DA2" h={150} w={150} radius={150}>
              <Image src={x.image} />
            </Button>
            <Text ta="center" mb={30} mt={10}>
              {x.name}
            </Text>
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default Purpose;
