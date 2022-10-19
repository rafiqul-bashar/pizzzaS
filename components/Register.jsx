import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { BsCardText } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineMail,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { loginUser } from "../app/slices/userSlice";

export default function Register() {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => setShow(!show);
  const registerUrl = "http://localhost:5000/api/v1/user/login";
  const register = async () => {
    const { data } = await axios.post(registerUrl, {
      name,
      email,
      password,
      phone,
      address,
    });
    dispatch(loginUser(data));

    // await createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     dispatch(loginUser(user));
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorMessage);
    //   })
    //   .then(() => {
    //   });
    router.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDir="column" gap={4} px="4" mx="auto" maxW="lg" py="16">
        <Heading color="gray.700" size="lg">
          Fill All Information to Register
        </Heading>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          isRequired
        />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineMail color="gray.300" />}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            isRequired
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BsCardText color="gray.300" />}
          />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Your Address"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="+880" />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Your phone number"
          />
        </InputGroup>

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
        <Button type="submit" colorScheme="yellow" border="none" rounded="none">
          Register
        </Button>
      </Flex>
    </form>
  );
}
