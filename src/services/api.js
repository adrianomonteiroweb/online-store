export async function getCategories() {
  const api = 'https://api.mercadolibre.com/sites/MLB/categories';
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let response;
  const ENDPOINT_TERMO = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const ENDPOINT_ID = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  if (!categoryId && query) response = await fetch(`${ENDPOINT_TERMO}${query}`);
  if (categoryId && !query) response = await fetch(`${ENDPOINT_ID}${categoryId}`);
  response = await fetch(`${ENDPOINT_ID}${categoryId}&q=${query}`);

  const jsonResponse = response.json();

  return jsonResponse;
}
