import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCart } from "../app/slices/cartSlice";

const user = {
  email: "guest@demo.com",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn21l8KznRU73ewDjD4cjEiy4M7JuTK0GTzVxzzPakA&s",
  name: "Guest User",
  role: "customer",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGMzMjIyZGE1YzVkN2VkNTNmMTdlNyIsImlhdCI6MTY2NjI0MjQxNiwiZXhwIjoxNjY3OTcwNDE2fQ.iCqFHISc9oRXvF6eLWnP_hbqpS3Qdi8K6ykf2u__skY",
  _id: "634c3222da5c5d7ed53f17e7",
};

export default function PlaceOrder({ setIsCOD }) {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(user.address || "");
  const dispacth = useDispatch();
  const { cartTotalQuantity, cartTotalAmount, cartItems } =
    useSelector(selectCart);
  const toast = useToast();

  const placeOrder = () => {
    const order = {
      name: user.name,
      email: user.email,
      phone,
      address,
      items: cartItems,
    };
    console.log(order);
    toast({
      title: "Order Placed Successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setIsCOD(false);
    dispacth(clearCart());
  };

  return (
    <Flex flexDir="column" gap={4} px="4" mx="auto" maxW="lg" py="8">
      <label htmlFor="">Name</label>
      <Input disabled value={user.name} type="text" isRequired />
      <label htmlFor="">Email</label>
      <Input
        disabled
        value={user.email}
        type="text"
        placeholder="Shipping Address"
      />
      <label htmlFor="">Address</label>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Shipping Address"
        isRequired
      />
      <label htmlFor="">Phone</label>

      <InputGroup>
        <InputLeftAddon children="+880" />
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Your phone number"
        />
      </InputGroup>
      <Box>
        <Heading size="xs">You have {cartTotalQuantity} items. </Heading>
        <Heading size="xs">Total Amount $ {cartTotalAmount}. </Heading>
      </Box>
      <Button
        onClick={placeOrder}
        type="submit"
        colorScheme="yellow"
        border="none"
        rounded="none"
      >
        Place Order
      </Button>
    </Flex>
  );
}
