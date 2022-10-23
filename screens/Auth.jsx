import {
  Box,
  Flex,
  Heading,
  Show,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Login, Register } from "../components";

export default function Auth() {
  const router = useRouter();

  return (
    <SimpleGrid h={["90vh", "80vh"]} columns={[1, 2]}>
      <Show breakpoint="(min-width: 480px)">
        <Flex alignItems="center" justifyContent="center" bg="primary">
          <Box>
            <Heading textAlign="center" color="white" size="3xl" as="i">
              Welcome to{" "}
            </Heading>{" "}
            <br />
            <Flex alignItems="center" gap={3} mt={6}>
              <h1 style={{ width: "80px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#FFF"
                >
                  <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
              </h1>
              <Heading color="white" size="2xl" as="i">
                pizzaS
              </Heading>
            </Flex>
          </Box>
        </Flex>
      </Show>
      {/* Form */}
      <Box p={4}>
        <Tabs align="center" variant="enclosed">
          <TabList>
            <Tab>Sign In</Tab>
            <Tab>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SimpleGrid>
  );
}
