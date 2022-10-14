import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PizzaCard = ({ title, price, desc }) => {
  return (
    <Box textAlign="center" p={4} rounded="md" border="2px" color="#333">
      <Image
        boxSize="200px"
        objectFit="cover"
        src="/landingBg.svg"
        alt="pizza"
        mx="auto"
      />

      <Heading my={3} size="md">
        {title}
      </Heading>
      <Text maxH="4" fontSize="xs" as="p" noOfLines={3}>
        {desc}
      </Text>
      <Box>
        <Heading my={3} size="lg">
          $ {price}
        </Heading>
        <Select
          placeholder="Regular"
          rounded="full"
          my={3}
          border="1px"
          _focus={{ borderColor: "black" }}
        >
          <option value="option2">Large</option>
          <option value="option3">Extra Large</option>
        </Select>
        <Button
          rounded="full"
          bg="primary"
          _hover={{ bg: "primary", opacity: 0.8 }}
          color="white"
          size="sm"
          w="full"
          autoCapitalize="uppercase"
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default function Landing() {
  return (
    <>
      <Box id="landing">
        <Container maxW="container.lg">
          <Box>
            <Box py="40" mx="auto">
              <Text fontSize="6xl" color="white">
                We Have The <b>Best pizza!</b>
              </Text>
              <Text fontSize="2xl" color="white">
                Time to enjoy our delicious pizza.
              </Text>
              <br />
              <Button
                bg="primary"
                rounded="full"
                _hover={{ bg: "primary", opacity: 0.8 }}
                color="white"
                size={["sm", "md"]}
              >
                Order Online
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxW="container.lg">
        <Box>
          <Heading size="lg" textAlign="center" my={8} color="#333">
            Trending Recipe
          </Heading>
          <SimpleGrid columns={[1, 3]} spacing={10} px={[0, 12]}>
            <PizzaCard
              price={20}
              title={"Cheese Loveer"}
              desc={
                "Combination of Alfredo sauce and two cheeses – Romano, and Parmesan."
              }
            />
            <PizzaCard
              price={25}
              title={"Pepperoni Pizza"}
              desc={"Pizza with homemade spicy beef sausage"}
            />
            <PizzaCard
              price={30}
              title={"Magherita Pizza"}
              desc={
                "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil."
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
