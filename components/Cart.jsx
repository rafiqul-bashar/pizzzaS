import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
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
import Router from "next/router";
import PlaceOrder from "./PlaceOrder";

export default function Cart({ handleShow }) {
  const { cartItems, cartTotalQuantity, cartTotalAmount } =
    useSelector(selectCart);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState(false);
  const [isCOD, setIsCOD] = useState(false);
  const user = true;
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const handleCOD = () => {
    setIsCOD(!isCOD);
  };

  const handleCheckOut = () => {
    if (!user) {
      Router.push("/auth");
    } else {
      setPayment(true);
    }
  };

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
    onClose();
    toast({
      title: "Cleared cart",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    handleShow(false);
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
      position="fixed"
      top={16}
      right="0"
      zIndex={3}
      w={["full", "lg"]}
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
                  <Flex gap="2" alignItems="center">
                    <IconButton
                      onClick={() => decreaseQuantity(product)}
                      variant={"ghost"}
                      icon={<AiOutlineMinus />}
                    />
                    <p style={{ textAlign: "center" }}>{quantity}</p>

                    <Icon
                      onClick={() => increaseQuantity(product)}
                      as={AiOutlinePlus}
                      w={6}
                      h={6}
                      color="blue.400"
                      cursor="pointer"
                    />
                    <Icon
                      onClick={() => removeProduct(product)}
                      as={MdDeleteForever}
                      w={6}
                      h={6}
                      color="red.500"
                      cursor="pointer"
                    />
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
      {!payment ? (
        <Box>
          <Button onClick={handleCheckOut} w="full" colorScheme="teal">
            CheckOut
          </Button>
          <Button
            onClick={onOpen}
            mt="2"
            w="full"
            colorScheme="red"
            variant="outline"
          >
            Clear Cart
          </Button>
        </Box>
      ) : (
        <Box>
          <Button onClick={handleCOD} w="full" colorScheme="telegram">
            Cash On Delivery
          </Button>
          <Button
            onClick={onOpen}
            mt="2"
            w="full"
            colorScheme="red"
            variant="outline"
          >
            Cancel
          </Button>
        </Box>
      )}

      <Modal isOpen={isCOD} onClose={() => setIsCOD(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill all informations *</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PlaceOrder setIsCOD={setIsCOD} />
          </ModalBody>
          <ModalFooter bg="white">
            <Button
              onClick={() => setIsCOD(false)}
              variant="outline"
              colorScheme="red"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Clear Cart Modal*/}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Clear Cart?</ModalBody>
          <ModalFooter bg="white">
            <Button colorScheme="red" mr={3} onClick={emptyCart}>
              Yes
            </Button>
            <Button onClick={onClose} variant="outline" colorScheme="linkedin">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
