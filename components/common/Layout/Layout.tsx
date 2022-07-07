import Head from "next/head";

import styles from "../../../styles/Layout.module.scss";

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
      <div className={styles.mainContainer}>{children}</div>
    </>
  );
};

export default Layout;
