import { AppProps } from "next/app";
import { FC } from "react";

import { Layout } from "@components/common";
import { UIProvider } from "@components/ui/context";

import "../styles/index.scss";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: any } }) {
  // defines custom layout according to page loaded
  // if not provided, use basic Layout
  const CustomLayout = Component.Layout ?? Layout;

  return (
    <UIProvider>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </UIProvider>
  );
}

export default MyApp;
