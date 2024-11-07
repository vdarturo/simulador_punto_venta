const products = [{
  id: 1,
  name: 'Paquete 1',
  description: 'Hamburguesa, papas y refresco',
  img: 'hamburguesa.jpeg',
  price: 120.00
}, {
  id: 2,
  name: 'Paquete 2',
  description: 'Hotdog, papas y ice',
  img: 'hot-dog.jpeg',
  price: 100.00
}, {
  id: 3,
  name: 'Paquete 3',
  description: 'Rebanada de pizza y refresco',
  img: 'pizza.jpeg',
  price: 90.00
}, {
  id: 4,
  name: 'Paquete 4',
  description: 'Dona, galleta de chispas y cafe',
  img: 'donas.jpeg',
  price: 80.00
}]

function searchProduct(productId) {
  return products.find(({id}) => id == productId);
}

export { products, searchProduct };