import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import getAllProductsPaths from "@framework/product/get-all-products-paths";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const products = await getAllProductsPaths(config);

  return {
    paths: products.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return { props: { product: { slug: params?.slug } } };
};

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>Product</div>;
}

Product.Layout = Layout;
