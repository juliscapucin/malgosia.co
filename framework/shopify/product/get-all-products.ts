// const clientID = `?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
// const mainUrl = `https://api.unsplash.com/users/`;

import { fetchApi, normalizeProduct, getAllProductsQuery } from "../utils";

import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";

type ReturnType = { products: ProductConnection };

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // If it's returning null, make it an empty array
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
