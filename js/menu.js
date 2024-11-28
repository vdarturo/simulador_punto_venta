import { products } from './products.js';

const showMenu = () => {
  
  fetch("https://dghstvwvsvzgpuynyjqz.supabase.co/rest/v1/products?select=*",
    {
      headers: {
        'apikey': '',
        'Authorization': ''
      }
    }
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        products.push(product);
        document.getElementById('menu').innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/img/${product.img}" class="card-img-top" height="200px" width="200px">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
              ${product.description}
            </p>
            <p class="card-text">
              Precio: $${product.price} MXN
            </p>
            <button type="button" class="btn btn-primary" id="${product.id}" name="btn-add-item" disabled>Agregar</button>
          </div>
        </div>
      </div>
    `
      });
    });
};

export { showMenu };