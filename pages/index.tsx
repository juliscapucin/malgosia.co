import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import getAllProducts from "../framework/shopify/product/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();
  return { props: { products }, revalidate: 4 * 60 * 60 };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products.edges);

  const [allProducts, setAllProducts] = useState(products);

  return (
    <div>
      {allProducts.map((item: { id: string; title: string }) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
