import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import PizzaCard from "../components/PizzaCard";

const data = [
  {
    _id: "634bdbb8dbfede97ad3457a5",
    name: "American Favourite Feast",
    description:
      "Chicken sausage, Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel.",
    price: [19, 27, 38],
    img: "https://images.dominos.com.bd/american_fav_feast.png",
    sizes: ["small", "regular", "large"],
    createdAt: "2022-10-16T10:23:52.365Z",
    updatedAt: "2022-10-16T10:23:52.365Z",
    __v: 0,
  },
  {
    _id: "634bdec51912313013c33fbe",
    name: "Ultimate Pepperoni",
    description:
      "An American cult pizza made of smoky beef pepperoni and extra mozzarella cheese",
    price: [22, 32, 48],
    img: "https://images.dominos.com.bd/ultimate_pepperoni.png",
    sizes: ["regular", "large", "extra-large"],
    createdAt: "2022-10-16T10:36:53.709Z",
    updatedAt: "2022-10-16T10:36:53.709Z",
    __v: 0,
  },
];

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
                <Link href="/menu">Order Online</Link>
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
            {data.map((product, index) => (
              <PizzaCard
                key={index}
                title={product?.name}
                desc={product?.description}
                imgSrc={product?.img}
                prices={product?.price}
                sizes={product?.sizes}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
