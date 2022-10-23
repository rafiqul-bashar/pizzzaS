import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../app/slices/userSlice";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { baseUrl } from "../utils/http";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const existToken = localStorage.getItem("userToken");

    const id = localStorage.getItem("uid");

    if (!id) {
      return;
    }

    const fetchUser = async () => {
      const userAxios = axios.create({
        baseURL: `${baseUrl}/user`,
        timeout: 1000,
        headers: { Authorization: `Bearer ${existToken}` },
      });
      try {
        const { data } = await userAxios.post("/me", {
          id,
        });
        dispatch(loginUser(data));
      } catch (error) {}
    };

    fetchUser();
  }, [dispatch]);

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
      {showCart && <Cart handleShow={handleShow} />}
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
