import type { InferGetStaticPropsType } from "next";
import { useState } from "react";

import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-products";

import { Layout } from "@components/common";
import { Grid, Hero, Marquee } from "@components/ui";
import { ProductCard } from "@components/product";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return { props: { products }, revalidate: 4 * 60 * 60 };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [allProducts, setAllProducts] = useState(products);

  return (
    <>
      <Grid>
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Grid>
      <Hero headline='Headline' description='Description' />
      <Marquee>
        {allProducts.slice(0, 3).map((product) => {
          return (
            <ProductCard key={product.id} product={product} variant={"slim"} />
          );
        })}
      </Marquee>
      <Grid layout='B'>
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Grid>
      <Marquee background='black'>
        {allProducts.slice(0, 3).map((product) => {
          return (
            <ProductCard key={product.id} product={product} variant={"slim"} />
          );
        })}
      </Marquee>
    </>
  );
}

/// Adds custom Layout
Home.Layout = Layout;
