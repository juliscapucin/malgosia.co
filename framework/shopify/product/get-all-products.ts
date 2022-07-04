const clientID = `?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/users/`;

const fetchApi = async () => {
  const url = `${mainUrl}ikredenets/photos${clientID}`;
  //   const url = `${mainUrl}${name}/photos${clientID}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi();

  return products.data;
};

export default getAllProducts;
