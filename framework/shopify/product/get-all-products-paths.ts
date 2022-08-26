import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-products-paths";
import { ProductConnection } from "@framework/schema";

type ReturnType = { productsPaths: Pick<Product, "slug">[] };

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  });

  const productsPaths = data.products.edges.map(({ node: { handle } }) => {
    return { slug: handle };
  });

  return { productsPaths };
};

export default getAllProductsPaths;
