import type { InferGetStaticPropsType } from "next";
import { useState } from "react";

import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-products";

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
      {allProducts.map((item: { id: string; name: string }) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
