let products = [];

function searchProduct(productId) {
  return products.find(({id}) => id == productId);
}

export { products, searchProduct };