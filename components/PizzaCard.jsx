import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function PizzaCard({ title, prices, desc, imgSrc, sizes }) {
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const priceIndex = sizes.indexOf(size);
  const price = prices[priceIndex];
  return (
    <Box
      maxW="400px"
      rounded="10px"
      overflow="hidden"
      boxShadow="sm"
      bg="gray.200"
      pb={4}
    >
      <Image src={imgSrc} alt="title" />
      <Box px={4}>
        <Badge variant="solid">starting from</Badge>
        <Badge mx="4" fontWeight="bold" fontSize="lg">
          ${prices[0]}
        </Badge>
        <Text
          as="h2"
          textTransform="uppercase"
          fontSize="xl"
          fontWeight="semibold"
          my="2"
          letterSpacing="wide"
          h="32px"
          noOfLines={3}
        >
          {title}
        </Text>

        <Text
          istruncated
          fontWeight="light"
          fontSize="md"
          h="50px"
          overflow="hidden"
        >
          {desc}
        </Text>
        <Text fontSize="sm" mt="3" fontWeight="light" textColor="gray.600">
          Choose Size :
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Select
              fontSize="sm"
              textTransform="capitalize"
              onChange={(e) => setSize(e.target.value)}
              rounded="full"
              my={2}
              border="1px"
              _focus={{ borderColor: "black" }}
            >
              {sizes.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </Select>
          </Box>
          <Box maxW="6">
            <Input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              mx="auto"
              size="xs"
            />
          </Box>
          <Text istruncated fontWeight="bold" fontSize="lg">
            ${price}
          </Text>
        </Flex>
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
}
