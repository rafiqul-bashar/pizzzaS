import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  selectCart,
} from "../app/slices/cartSlice";
import { MdDeleteForever } from "react-icons/md";

export default function Cart() {
  const { cartItems, cartTotalQuantity, cartTotalAmount } =
    useSelector(selectCart);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const increaseQuantity = (product) => {
    dispatch(addToCart(product));
    setQuantity(quantity + 1);
    toast({
      title: "Product quantity increased",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };
  const emptyCart = () => {
    dispatch(clearCart());
    toast({
      title: "Cleared cart",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };
  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
    toast({
      title: "Removed Item from Cart",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };
  const decreaseQuantity = (product) => {
    dispatch(decreaseCart(product));
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
    toast({
      title: "Product quantity decreased",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
  };
  if (cartTotalQuantity === 0) {
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
        <Center h="full" w="full">
          <Text mx="auto" letterSpacing="widest">
            Your Cart is empty.
          </Text>
        </Center>
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
        You have {cartTotalQuantity} items
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
            {cartItems?.map((product, index) => (
              <Tr key={index}>
                <Td>
                  <Flex gap="3">
                    <Image
                      colSpan={1}
                      boxSize="50px"
                      src={product?.imgSrc}
                      alt={product?.title}
                    />
                    <Text colSpan={1}>{product?.name}</Text>
                  </Flex>
                </Td>
                <Td textAlign="end">
                  <Flex gap="2">
                    <AiOutlineMinus onClick={() => decreaseQuantity(product)} />
                    <span>{quantity}</span>
                    <AiOutlinePlus onClick={() => increaseQuantity(product)} />
                    <MdDeleteForever onClick={() => removeProduct(product)} />
                  </Flex>
                </Td>
                <Td isNumeric>$ {product?.price}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th textAlign="end">=</Th>
              <Td isNumeric textAlign="end">
                $ {cartTotalAmount}
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button w="full" colorScheme="teal">
        CheckOut
      </Button>
      <Button
        onClick={emptyCart}
        mt="2"
        w="full"
        colorScheme="red"
        variant="outline"
      >
        Clear Cart
      </Button>
    </Box>
  );
}
