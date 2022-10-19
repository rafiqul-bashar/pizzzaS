import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { addToCart } from "../app/slices/cartSlice";

export default function PizzaCard({ title, prices, desc, imgSrc, sizes, _id }) {
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const priceIndex = sizes.indexOf(size);
  const price = prices[priceIndex];
  const dispatch = useDispatch();
  const toast = useToast();
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const product = { title, price, imgSrc, size, _id };
  const handleAddtoCart = () => {
    dispatch(addToCart({ ...product, cartQuantity: quantity }));
    toast({
      title: "Added to cart",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

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

        <Text fontWeight="light" fontSize="md" h="50px" overflow="hidden">
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
          <Flex gap="2">
            <AiOutlineMinus onClick={decreaseQuantity} />
            <span>{quantity}</span>
            <AiOutlinePlus onClick={increaseQuantity} />
          </Flex>
          <Text fontWeight="bold" fontSize="lg">
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
          onClick={handleAddtoCart}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
