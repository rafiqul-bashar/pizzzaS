import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";

export default function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const handleShow = () => {
    setShowCart(!showCart);
  };
  return (
    <Flex
      flexDir="column"
      h="100vh"
      w="100vw"
      overflow="auto"
      position="relative"
    >
      <Header handleShow={handleShow} />
      {showCart && <Cart />}
      {children}
      <footer>
        <h1>
          Copyright ©2022 All rights reserved |{" "}
          <span>
            <Link href="https://github.com/rafiqul-bashar" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Rafiqul Bashar
              </a>
            </Link>
          </span>
        </h1>
      </footer>
    </Flex>
  );
}
