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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
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
    console.log(data);
    dispatch(loginUser(data));
    // await signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     dispatch(loginUser(user));
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
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
