import type { InferGetStaticPropsType } from "next";
import { useState } from "react";

import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-products";

import { Layout } from "@components/common";
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
    <div>
      {allProducts.map((product) => {
        return (
          <>
            <ProductCard key={product.id} product={product} />
            <h3>Hello</h3>
          </>
        );
      })}
    </div>
  );
}

/// Adds custom Layout
Home.Layout = Layout;
