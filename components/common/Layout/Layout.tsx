import Head from "next/head";

import { useUIContext } from "@components/ui/context";

import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isSidebarOpen } = useUIContext();

  return (
    <>
      <Head>
        <title>Malgosia.co – Shop</title>
      </Head>
      <div className='mainContainer'>
        <Sidebar isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
