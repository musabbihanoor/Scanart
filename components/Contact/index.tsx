import { BackgroundImage, Button, Center, Flex, Text } from '@mantine/core';

const Contact = () => {
  return (
    <BackgroundImage h={510} src="/images/footer.png" radius="sm">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Text
          fz={{ base: 'lg', sm: 'xl' }}
          fw="bold"
          ta="center"
          w={{ base: '90%', sm: 800 }}
          mt={50}
        >
          Want to learn more about the scan.art Image Recognition?
        </Text>
        <Button bg="#000" px={20} py={10} mt={30}>
          Contact us
        </Button>
      </Flex>
    </BackgroundImage>
  );
};

export default Contact;
