import {
  Avatar,
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/slices/userSlice";
import { EditProfile, MyOrders } from "../components";

export default function Profile() {
  // const user = useSelector(selectUser);
  const user = {
    email: "guest@demo.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn21l8KznRU73ewDjD4cjEiy4M7JuTK0GTzVxzzPakA&s",
    name: "Guest User",
    role: "customer",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGMzMjIyZGE1YzVkN2VkNTNmMTdlNyIsImlhdCI6MTY2NjI0MjQxNiwiZXhwIjoxNjY3OTcwNDE2fQ.iCqFHISc9oRXvF6eLWnP_hbqpS3Qdi8K6ykf2u__skY",
    _id: "634c3222da5c5d7ed53f17e7",
  };

  return (
    <Container maxW="container.lg" h="100vh">
      <Flex flexDir={["column", "row"]} p="2">
        <Flex flexDir="column" gap="4" mx="auto">
          <Avatar src={user?.img} mx="auto" size="lg" />
          <Text>Name: {user?.name}</Text>
          <Text>Email: {user?.email}</Text>
        </Flex>
        <Box my={[6, 0]} minW={[0, "xl"]}>
          <Tabs isLazy variant="line" colorScheme="green">
            <TabList>
              <Tab>My Orders</Tab>
              <Tab>Edit Profile</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <MyOrders />
              </TabPanel>
              <TabPanel>
                <EditProfile user={user} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
}
