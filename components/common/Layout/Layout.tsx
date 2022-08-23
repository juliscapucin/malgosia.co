import Head from "next/head";

import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";

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
        <Sidebar></Sidebar>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
