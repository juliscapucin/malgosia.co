import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Malgosia.co – Shop</title>
        <link rel='preconnect' href='https://use.typekit.net' />
        <link href='https://use.typekit.net/cbg5juo.css' rel='stylesheet' />
      </Head>
      <div className='mainContainer'>{children}</div>
    </>
  );
};

export default Layout;
