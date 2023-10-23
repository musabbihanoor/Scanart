import { data } from '@/data/purpose';
import { Box, Button, Container, Flex, Image, Text } from '@mantine/core';

const Purpose = () => {
  return (
    <Container size="lg" py={50}>
      <Text fz={{ base: 'md', sm: 'lg' }} ta="center" mb={50}>
        Made for Recognizing Art
      </Text>
      <Flex wrap={'wrap'} justify="center">
        {data.map((x, i) => (
          <div>
            <Button
              mx={{ base: 15, sm: 30 }}
              bg="#DE3DA2"
              h={{ base: 80, sm: 150 }}
              w={{ base: 80, sm: 150 }}
              radius={150}
            >
              <Image src={x.image} />
            </Button>
            <Text fz={{ base: 'xxxs', sm: 'md' }} ta="center" mb={30} mt={10}>
              {x.name}
            </Text>
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default Purpose;
