import { AppProps } from "next/app";
// import { FunctionComponent } from "react";
import { FC } from "react";

import "../styles/globals.scss";

// Fallback if Layout doesn't exist
// const Noop: FunctionComponent = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: any } }) {
  const Layout = Component.Layout;
  // const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
