import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
const colors = {
  primary: "#F44A25",
};
const theme = extendTheme({ colors });
function MyApp({ Component, ...pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
