import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";

export default function EditProfile({ user }) {
  const { name, email, img, address, phone } = user;
  return (
    <Container>
      <Flex flexDir="column" gap={4} px="4" mx="auto" maxW="lg" py="8">
        <Heading color="gray.700" size="lg">
          Edit Profile
        </Heading>
        <label htmlFor="">Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          // placeholder="Your Name"
          isRequired
        />
        <label htmlFor="">Email</label>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={AiOutlineMail} w={8} h={8} color="yellow.500" />
            }
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            isRequired
          />
        </InputGroup>
        <label htmlFor="">Address</label>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={BsCardText} w={8} h={8} color="yellow.500" />}
          />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Your Address"
          />
        </InputGroup>
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

        {/* <InputGroup size="md">
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
        </InputGroup> */}
        <Button type="submit" colorScheme="yellow" border="none" rounded="none">
          Update Profile
        </Button>
      </Flex>
    </Container>
  );
}
