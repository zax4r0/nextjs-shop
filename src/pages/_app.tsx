import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRedux } from "../app/redux";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
    const reduxStore = useRedux(pageProps);

    return (
        <ReduxProvider store={reduxStore}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </ReduxProvider>
    );
}

export default MyApp;
