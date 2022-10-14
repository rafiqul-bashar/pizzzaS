import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <Flex flexDir="column" h="100vh" w="100vw" overflow="auto">
      <Header />
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
