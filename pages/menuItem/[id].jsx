import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../screens/Layout";

const product = {
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
};

export default function MenuItem() {
  const [size, setSize] = useState(product?.sizes[0]);
  const priceIndex = product?.sizes.indexOf(size);
  const price = product?.price[priceIndex];
  return (
    <Layout>
      <Container maxW="container.lg" p={[4, 2]}>
        <Flex flexDir={["column", "row"]}>
          <Image maxW="md" src={product?.img} alt={product?.name} />
          <Flex style={{ flex: 1 }} flexDir="column" gap={3} mx="auto" px="4">
            <Text fontSize="2xl" fontWeight="bold">
              {product?.name}
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              $ {price}
            </Text>
            <Text>{product?.description}</Text>
            <Text my={2} fontSize="sm" fontWeight="light" textColor="gray.600">
              Choose the size :
            </Text>

            <Flex gap="6">
              <div className="size" onClick={() => setSize(product?.sizes[0])}>
                <Image
                  src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
                  layout="fill"
                  alt=""
                />
                <span className="number">Small</span>
              </div>
              <div className="size" onClick={() => setSize(product?.sizes[1])}>
                <Image
                  src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
                  layout="fill"
                  alt=""
                />
                <span className="number">Medium</span>
              </div>
              <div className="size" onClick={() => setSize(product?.sizes[2])}>
                <Image
                  src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
                  layout="fill"
                  alt=""
                />
                <span className="number">Large</span>
              </div>
            </Flex>

            <Button
              rounded="full"
              bg="primary"
              _hover={{ bg: "primary", opacity: 0.8 }}
              color="white"
              size="sm"
              w={["50%"]}
              autoCapitalize="uppercase"
            >
              Add to cart
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
