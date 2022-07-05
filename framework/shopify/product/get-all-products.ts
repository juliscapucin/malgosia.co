// const clientID = `?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
// const mainUrl = `https://api.unsplash.com/users/`;

import getAllProductsQuery from "./../utils/queries/get-all-products";
import { ProductConnection } from "../schema";

import fetchApi from "../utils/fetch-api";

type ReturnType = { products: ProductConnection };

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // If it's returning null, make it an empty array
  const products =
    data.products.edges.map(({ node: product }) => {
      return product;
    }) ?? [];

  return products;
};

export default getAllProducts;
