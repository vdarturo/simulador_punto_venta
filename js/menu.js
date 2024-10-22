const products = [{
  id: '1',
  name: 'Paquete 1',
  description: 'Hamburguesa, papas y refresco',
  img: '../assets/img/hamburguesa.jpeg',
  price: 120.00
}, {
  id: '2',
  name: 'Paquete 2',
  description: 'Hotdog, papas y ice',
  img: '../assets/img/hot-dog.jpeg',
  price: 100.00
}, {
  id: '3',
  name: 'Paquete 3',
  description: 'Rebanada de pizza y refresco',
  img: '../assets/img/pizza.jpeg',
  price: 90.00
}, {
  id: '4',
  name: 'Paquete 4',
  description: 'Dona, galleta de chispas y cafe',
  img: '../assets/img/donas.jpeg',
  price: 80.00
}]

const showMenu = () => {
  for(const product of products){
    document.getElementById('menu').innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${product.img}" class="card-img-top" height="200px" width="200px">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
              ${product.description}
            </p>
            <p class="card-text">
              Precio: $${product.price} MXN
            </p>
          </div>
        </div>
      </div>
    `
  }
};

export { showMenu };