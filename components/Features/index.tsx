'use client';

import { Container, Flex, Grid, GridCol, Image, Text, Title } from '@mantine/core';

const Features = () => {
  return (
    <Container bg="#fff" py={50} size="lg">
      <Text fz="lg" ta="center" mb={50}>
        How the scan.art Image Recognition works
      </Text>

      <Grid align="center">
        <GridCol span={6}>
          <Image w={450} src="/images/realtime-detection.png" />
        </GridCol>
        <GridCol span={6}>
          <Text fz="lg">Realtime Detection - No Training</Text>
          <Text fz="sm">
            Make newly added artworks searchable in real time without any delay for supervised AI
            training.
          </Text>
        </GridCol>

        <GridCol span={6}>
          <Text fz="lg">Low Cost</Text>
          <Text fz="sm">
            scan.art offers a budget friendly artwork image recognition through an innovative set-up
            and structure
          </Text>
        </GridCol>
        <GridCol span={6}>
          <Image w={450} src="/images/low-cost.png" />
        </GridCol>

        <GridCol span={6}>
          <Image w={450} src="/images/high-accuracy.png" />
        </GridCol>
        <GridCol span={6}>
          <Text fz="lg">High Accuracy Results</Text>
          <Text fz="sm">
            Through extensive preprocessing steps and multiple different recognition AIs scan.art
            ensures high and accurate detection results.
          </Text>
        </GridCol>

        <GridCol span={6}>
          <Text fz="lg">Scan Individual Artwork</Text>
          <Text fz="sm">Accurately detects and matches single scanned artworks.</Text>
        </GridCol>
        <GridCol span={6}>
          <Image h={540} fit="contain" src="/images/scan-individual.png" />
        </GridCol>

        <GridCol span={6}>
          <Image h={540} fit="contain" src="/images/scan-multiple.png" />
        </GridCol>
        <GridCol span={6}>
          <Text fz="lg">Scan Multiple Artworks</Text>
          <Text fz="sm">
            Recognize multiple artworks inside the camera stream and let the user choose which
            artwork they want to view.
          </Text>
        </GridCol>
      </Grid>
    </Container>
  );
};

export default Features;
