import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const healthy = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#F44A25">
    <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
  </svg>
);
const delivery = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#F44A25">
    <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
  </svg>
);
const pizza = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#F44A25">
    <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
  </svg>
);

const FeatureCard = ({ title, ico }) => {
  return (
    <Flex flexDir="column" gap={4} p={3} textAlign="center">
      <h1 className="featureCardLogo">{ico}</h1>
      <Heading size="sm" autoCapitalize="uppercase">
        {title}
      </Heading>
      <Text fontSize="sm" as="p">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic.
      </Text>
    </Flex>
  );
};

export default function Services() {
  return (
    <Flex
      alignItems="center"
      bg="yellow.300"
      mt={[, 12]}
      justifyContent="center"
      mx="auto"
    >
      {" "}
      <Box maxW="container.lg" py={12}>
        <Heading size="lg" textAlign="center" my={8} color="#333">
          OUR SERVICES
        </Heading>
        <Text
          maxW="xl"
          mx="auto"
          my={3}
          as="p"
          px={4}
          fontSize="sm"
          textAlign="center"
        >
          Our chefs are working 24/7 and are ready to accept visitors and at any
          time of the day and night
        </Text>

        {/* <Text fontSize="md" maxW="xl" mx="auto" my={3} textAlign="center">
          We would like to take this opportunity to welcome you at our Pizza
          House. We are offering a warm, friendly atmosphere to share a meal
          with family and friends at any time of the day or evening.
        </Text> */}
        <SimpleGrid columns={[1, 3]} spacing={6} p={3}>
          <FeatureCard title="HEALTHY FOODS" ico={healthy} />
          <FeatureCard title="FASTEST DELIVERY" ico={delivery} />
          <FeatureCard title="ORIGINAL RECIPES" ico={pizza} />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
