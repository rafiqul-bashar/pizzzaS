import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import React from "react";

import { loginUser } from "../app/slices/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";

const loginUrl = "http://localhost:5000/api/v1/user/login";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleGuestLogin = () => {
    setEmail("guest@demo.com");
    setPassword("demo123");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(loginUrl, { email, password });

    dispatch(loginUser(data));
    localStorage.setItem("userToken", data?.token);
    localStorage.setItem("uid", data?._id);

    router.push("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <Flex flexDir="column" gap={4} px="4" mx="auto" maxW="lg" py="16">
        <Heading size="lg">Please Login to Continue</Heading>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          isRequired
        />
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            isRequired
          />
          <InputRightElement width="4.5rem">
            <Button variant="ghost" h="1.75rem" size="sm" onClick={handleClick}>
              {!show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          type="submit"
          colorScheme="telegram"
          border="none"
          rounded="none"
        >
          Sign In
        </Button>
        <Button onClick={handleGuestLogin} border="none" rounded="none">
          Get Guest Credentials
        </Button>
      </Flex>
    </form>
  );
}
