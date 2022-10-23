import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const data = [
  {
    orderId: "4565196320",
    customer: "Jhony Bhai",
    address: "example,214 strt",
    total: 45.98,
  },
  {
    orderId: "4565196320",
    customer: "Jhony Bhai",
    address: "example,214 strt",
    total: 45.98,
  },
];

export default function MyOrders() {
  return (
    <Container>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>OrderID</Th>
              <Th>Customer</Th>
              <Th>Address</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((order, index) => (
              <Tr key={index}>
                <Td>
                  {order?.orderId}
                  {/* <Flex gap="3">
                    <Image
                      colSpan={1}
                      boxSize="50px"
                      src={product?.imgSrc}
                      alt={product?.title}
                    />
                    <Text colSpan={1}>{product?.name}</Text>
                  </Flex> */}
                </Td>
                <Td>
                  {order?.customer}
                  {/* <Flex gap="2" alignItems="center">
                    <IconButton
                      onClick={() => decreaseQuantity(product)}
                      variant={"ghost"}
                      icon={<AiOutlineMinus />}
                    />
                    <p style={{ textAlign: "center" }}>{quantity}</p>
                    <IconButton
                      onClick={() => increaseQuantity(product)}
                      variant={"ghost"}
                      icon={<AiOutlinePlus />}
                    />
                    <IconButton
                      onClick={() => removeProduct(product)}
                      variant={"ghost"}
                      icon={<MdDeleteForever />}
                    />
                  </Flex> */}
                </Td>
                <Td> {order?.address}</Td>

                <Td isNumeric>$ {order?.total}</Td>
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th textAlign="end">=</Th>
              <Td isNumeric textAlign="end">
                $ {cartTotalAmount}
              </Td>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Container>
  );
}
