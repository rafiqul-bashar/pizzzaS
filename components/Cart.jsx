import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

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
const CartItem = ({ imgSrc, title, quan, price }) => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <Image colSpan={1} boxSize="50px" src={imgSrc} alt="name" />
        <Text colSpan={1}>{title}</Text>
        <Text>{quan}</Text>
        <Text>{price}</Text>
      </Grid>
      <hr />
    </>
  );
};

export default function Cart() {
  let quan = 1;
  if (quan === 0) {
    return (
      <Box
        position="absolute"
        top={16}
        right="0"
        zIndex={3}
        w="280px"
        bg="white"
        shadow="sm"
      >
        <Text mx="auto">You have No Items in the cart</Text>
      </Box>
    );
  }
  return (
    <Box
      position="absolute"
      top={16}
      right="0"
      zIndex={3}
      w={["280px", "lg"]}
      bg="white"
      shadow="sm"
      p={3}
    >
      <Text
        my={2}
        fontSize="sm"
        mt="3"
        fontWeight="semibold"
        textColor="gray.700"
      >
        You have {quan} items
      </Text>
      <hr />
      {/*       
      <Flex flexDir="column">
        {data.map((product, index) => (
          <CartItem
            key={index}
            title={product?.name}
            imgSrc={product?.img}
            price="30"
            quan="2"
          />
        ))}
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          my={2}
          fontSize="sm"
          mt="3"
          fontWeight="semibold"
          textColor="gray.700"
        >
          Total
        </Text>
        <Text
          my={2}
          fontSize="sm"
          mt="3"
          fontWeight="semibold"
          textColor="gray.700"
        >
          $ 220
        </Text>
      </Flex> */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr> */}
            {data.map((product, index) => (
              <Tr key="index">
                <Td>
                  <Flex gap="3">
                    <Image
                      colSpan={1}
                      boxSize="50px"
                      src={product?.img}
                      alt={product?.name}
                    />
                    <Text colSpan={1}>{product?.name}</Text>
                  </Flex>
                </Td>
                <Td textAlign="center">{quan}</Td>
                <Td isNumeric>$ 30.48</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th>=</Th>
              <Td isNumeric textAlign="end">
                $ 100
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button w="full" colorScheme="teal">
        CheckOut
      </Button>
    </Box>
  );
}
