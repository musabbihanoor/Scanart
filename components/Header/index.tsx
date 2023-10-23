import { Container, Flex, Grid, GridCol, Image, Text, Title } from '@mantine/core';

const Header = () => {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      c="#000"
      justify="space-between"
      align="center"
      bg="#FCECF6"
      p={50}
    >
      <div>
        <Title order={1} ta={{ base: 'center', sm: 'left' }} fz={{ base: 'md', sm: 'xxl' }}>
          The scan.art <br /> Image Recognition
        </Title>
        <Text display={{ base: 'none', sm: 'block' }} fz={{ base: 'xxxs', sm: 'xs' }} mt={30}>
          The Image Recognition Solution for the Art World.
          <br />
          Made for Scanning and recognising Artworks.
        </Text>
        <Text
          ta="center"
          display={{ base: 'block', sm: 'none' }}
          fz={{ base: 'xxxs', sm: 'xs' }}
          mt={30}
        >
          The Image Recognition Solution for the Art World. Made for Scanning and recognising
          Artworks.
        </Text>
      </div>
      <div>
        <Image
          h={{ base: 280, sm: 600 }}
          mt={{ base: 50, sm: 0 }}
          fit="contain"
          src="/images/header.png"
        />
      </div>
    </Flex>
  );
};

export default Header;
