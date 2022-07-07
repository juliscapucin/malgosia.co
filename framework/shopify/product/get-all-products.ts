// const clientID = `?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
// const mainUrl = `https://api.unsplash.com/users/`;

import { normalizeProduct, getAllProductsQuery } from "../utils";

import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

type ReturnType = { products: ProductConnection };

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  // If it's returning null, make it an empty array
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
