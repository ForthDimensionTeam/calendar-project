import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import { ConfigProvider } from "antd";
import React from "react";
import ru_RU from "antd/lib/locale/ru_RU";


export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider locale={ru_RU}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
    </ConfigProvider>
  );
}
