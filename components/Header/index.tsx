import { Container, Flex, Grid, GridCol, Image, Text, Title } from '@mantine/core';

const Header = () => {
  return (
    <Flex c="#000" justify="space-between" align="center" bg="#FCECF6" p={50}>
      <div>
        <Title order={1} fz="xl">
          The scan.art <br /> Image Recognition
        </Title>
        <Text fz="sm" mt={30}>
          The Image Recognition Solution for the Art World.
          <br />
          Made for Scanning and recognising Artworks.
        </Text>
      </div>
      <div>
        <Image h={600} fit="contain" src="/images/header.png" />
      </div>
    </Flex>
  );
};

export default Header;
