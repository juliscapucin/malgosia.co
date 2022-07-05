import { loadDefaultErrorComponents } from "next/dist/server/load-components";

type FetcherParams = { query: string };

type FetcherResult<T> = { data: T };

const fetchApi = async <T>({
  query,
}: FetcherParams): Promise<FetcherResult<T>> => {
  const url = "http://localhost:4000/graphql";
  //   const url = `${mainUrl}ikredenets/photos${clientID}`;
  //   const url = `${mainUrl}${name}/photos${clientID}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export default fetchApi;
