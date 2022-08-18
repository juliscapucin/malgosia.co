import { AppProps } from "next/app";
// import { FunctionComponent } from "react";
import { FC } from "react";

import { Layout } from "@components/common";

import "../styles/globals.scss";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: any } }) {
  // defines custom layout according to page loaded
  // if not provided, use basic Layout
  const CustomLayout = Component.Layout ?? Layout;

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
