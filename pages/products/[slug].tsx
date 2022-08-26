import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { productsPaths } = await getAllProductsPaths(config);

  return {
    paths: productsPaths.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { slug: params!.slug },
  });

  console.log(product);

  return { props: { product } };
};

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>Hello there! {product?.name}</div>;
}

Product.Layout = Layout;
