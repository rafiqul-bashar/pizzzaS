import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import PizzaCard from "../components/PizzaCard";

import Layout from "../screens/Layout";

const data = [
  {
    _id: "634bdbb8dbfede97ad3457a5",
    name: "American Favourite Feast",
    description:
      "Chicken sausage, Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel.",
    price: [19, 27, 38],
    img: "https://images.dominos.com.bd/american_fav_feast.png",
    sizes: ["small", "regular", "large"],
    createdAt: "2022-10-16T10:23:52.365Z",
    updatedAt: "2022-10-16T10:23:52.365Z",
    __v: 0,
  },
  {
    _id: "634bdec51912313013c33fbe",
    name: "Ultimate Pepperoni",
    description:
      "An American cult pizza made of smoky beef pepperoni and extra mozzarella cheese",
    price: [22, 32, 48],
    img: "https://images.dominos.com.bd/ultimate_pepperoni.png",
    sizes: ["regular", "large", "extra-large"],
    createdAt: "2022-10-16T10:36:53.709Z",
    updatedAt: "2022-10-16T10:36:53.709Z",
    __v: 0,
  },
];

// const PizzaCard = ({ title, prices, desc, imgSrc, sizes }) => {
//   const [size, setSize] = useState(sizes[0]);
//   const priceIndex = sizes.indexOf(size);
//   const price = prices[priceIndex];
//   return (
//     <Box p={4} rounded="md" border="2px" color="#333">
//       <Image src={imgSrc ? imgSrc : "/landingBg.svg"} alt="pizza" mx="auto" />
//       <Heading minH="10" maxH="20" noOfLines={3} my={3} size="md">
//         {title}
//       </Heading>
//       <Heading my={3} size="2xl">
//         $ {price}
//       </Heading>

//       <Text minH="20" fontSize="sm" as="p" noOfLines={5}>
//         {desc}
//       </Text>
//       <Box>
//         <Text>Choose Size :</Text>
//         <Select
//           onChange={(e) => setSize(e.target.value)}
//           rounded="full"
//           my={3}
//           border="1px"
//           _focus={{ borderColor: "black" }}
//         >
//           {sizes.map((el, i) => (
//             <option key={i} value={el}>
//               {el}
//             </option>
//           ))}
//         </Select>
//         <Button
//           rounded="full"
//           bg="primary"
//           _hover={{ bg: "primary", opacity: 0.8 }}
//           color="white"
//           size="sm"
//           w="full"
//           autoCapitalize="uppercase"
//         >
//           Add to cart
//         </Button>
//       </Box>
//     </Box>
//   );
// };

export default function Menu() {
  return (
    <div>
      <Head>
        <title>All pizzaS - Pizza </title>
        <meta name="description" content="Our pizzas are best in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Container p={[3, 2]} maxW="container.lg">
            <Heading size="lg" textAlign="center" my={8} color="#333">
              Explore Our Menu
            </Heading>
            <SimpleGrid columns={[1, 3]} spacing={10} px={[0, 12]}>
              {data.map((product, index) => (
                <PizzaCard
                  key={index}
                  title={product?.name}
                  desc={product?.description}
                  imgSrc={product?.img}
                  prices={product?.price}
                  sizes={product?.sizes}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Layout>
      </main>
    </div>
  );
}
