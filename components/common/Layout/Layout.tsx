import Head from "next/head";

import { Footer } from "@components/common";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Malgosia.co – Shop</title>
        <link rel='preconnect' href='https://use.typekit.net' />
        <link href='https://use.typekit.net/cbg5juo.css' rel='stylesheet' />
      </Head>
      <div className='mainContainer'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
