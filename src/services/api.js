export async function getCategories() {
  const api = 'https://api.mercadolibre.com/sites/MLB/categories';
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const res = await fetch(api);
  const data = await res.json();
  return data;
}
