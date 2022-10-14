import { Button, Flex, Heading, Show } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { IoExitOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, selectUser } from "../app/slices/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth);
    dispatch(logOutUser());
  };
  return (
    <nav>
      <Flex
        alignItems="center"
        justifyContent={["space-between", "space-around"]}
        p={4}
      >
        <Show breakpoint="(min-width: 480px)">
          <Link href="/">
            <Flex alignItems="center" gap={3}>
              <h1 className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#F44A25"
                >
                  <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
              </h1>
              <Heading color="primary" size="md">
                pizzaS
              </Heading>
            </Flex>
          </Link>
        </Show>
        <Show breakpoint="(min-width: 480px)">
          <Flex gap={4} fontWeight="bold">
            <Link color="primary" href="/">
              Home
            </Link>
            <Link href="#menu">Menu</Link>
            {user?.uid && <Link href="#delivery">Delivery</Link>}

            <Link href="#service">About</Link>
            <Link href="#contact">Contact</Link>
          </Flex>
        </Show>
        <Show breakpoint="(max-width: 480px)">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="logo menubar"
          >
            {!mobileMenu ? <HiMenu /> : <GrClose />}{" "}
          </button>
        </Show>

        <Show breakpoint="(max-width: 480px)">
          <Flex alignItems="center" gap={2}>
            <Link href="/">
              <h1 className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#F44A25"
                >
                  <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
              </h1>
            </Link>
            <Heading color="primary" size="md">
              pizzaS
            </Heading>
          </Flex>
        </Show>
        {/* logo Ends */}
        <Flex gap={4}>
          <h1 className="logo search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </h1>

          <h1 className="logo cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
            </svg>
          </h1>

          {!user?.uid ? (
            <Button
              rounded="full"
              bg="primary"
              _hover={{ bg: "primary", opacity: 0.8 }}
              color="white"
              size="sm"
            >
              <Link href="/auth">SIGN IN</Link>
            </Button>
          ) : (
            <Flex onClick={handleLogout} gap={2} textAlign="center">
              <h2>{user?.name || "Rafiqul"}</h2>
              <IoExitOutline cursor="pointer" size="1.5rem" color="#F44A25" />
            </Flex>
          )}
        </Flex>
      </Flex>

      {mobileMenu ? (
        <Flex
          w="full"
          textAlign="center"
          flexDir="column"
          gap={4}
          py={8}
          shadow="xl"
          position="absolute "
          bg="white"
          zIndex={3}
        >
          <Link
            onClick={() => setMobileMenu(!mobileMenu)}
            pb={4}
            color="primary"
            href="/"
          >
            <button onClick={() => setMobileMenu(!mobileMenu)}>Home</button>
          </Link>

          <Link pb={4} href="#">
            <button onClick={() => setMobileMenu(!mobileMenu)}>Menu</button>
          </Link>
          <Link
            onClick={() => setMobileMenu(!mobileMenu)}
            borderBottom={"2px"}
            pb={4}
            href="#"
          >
            <button onClick={() => setMobileMenu(!mobileMenu)}>Delivery</button>
          </Link>
          <Link
            onClick={() => setMobileMenu(!mobileMenu)}
            pb={4}
            href="#service"
          >
            <button onClick={() => setMobileMenu(!mobileMenu)}>About</button>
          </Link>
          <Link
            onClick={() => setMobileMenu(!mobileMenu)}
            pb={4}
            href="#contact"
          >
            <button onClick={() => setMobileMenu(!mobileMenu)}>Contact</button>
          </Link>
        </Flex>
      ) : null}
    </nav>
  );
}
