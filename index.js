//import { IVA } from './js/constants.js';
import { showMenu } from './js/menu.js';

showMenu();

/*
let items = [];

class Item extends Product {
  constructor(id, name, description, price, quantity) {
    super(id, name, description, price);
    this.quantity = quantity;
  }
  getSubTotal() {
    return this.price * this.quantity;
  }
}

function newOrder() {
  console.log("nueva orden");
  document.getElementById('subtotal').value = ''; 
  document.getElementById('iva').value = ''; 
  document.getElementById('total').value = '';

  for(let i = 0; i<items.length; i++) {
    document.getElementById('order-table').deleteRow(-1);
  }

  items = [];
}

function searchProduct(productId) {
  for(const product of products) {
    if(productId === product.id){
      return product;
    }
  }
  return null;
}

function addItem(product, quantity) {
  let item = new Item(product.id, product.name, product.description, product.price, quantity);
  items.push(item);
  document.getElementById('order-table').insertRow(-1).innerHTML = `<td>${item.name}: ${item.description}</td><td>$${item.price}</td><td>${item.quantity}</td><td>$${item.getSubTotal()}</td>`
}

function getSubTotal() {
  let subtotal = 0;
  for(const item of items) {
    subtotal += item.getSubTotal();
  }
  return subtotal;
}

function getIva(subTotal) {
  return subTotal*(IVA/100);
}

function getTotal(subtotal, iva) {
  return subtotal+iva;
}

const button = document.getElementById('btn-new-order');

button.addEventListener('click', function() {
  newOrder();

  setTimeout(() => {
    do {
      let productId;
      let product;
      let quantityItems;
      
      do {
        productId = parseInt(prompt('Introduzca el número de paquete:'));
        product = searchProduct(productId);
        if(product === null) {
          alert("El número de paquete es incorrecto, vuelva a ingresarlo");
        }
      } while(product === null);
      
      do {
        quantityItems = parseInt(prompt('Introduzca la cantidad:'));
        if(Number.isNaN(quantityItems)) {
          alert("La cantidad debe un valor númerico, vuelva a introducirla");
        } else if(quantityItems <= 0) {
          alert("La cantidad debe ser mayor a cero, vuelva a introducirla");
        }
      } while(Number.isNaN(quantityItems) || (quantityItems <= 0));  
      
      addItem(product, quantityItems);
    } while(confirm("¿Desea agregar otro producto?"));
    
    let subTotal = getSubTotal();
    document.getElementById('subtotal').value = `$${getSubTotal()}`; 
    
    let iva = getIva(subTotal)
    document.getElementById('iva').value = `$${getIva(subTotal)}`; 
    
    document.getElementById('total').value = `$${getTotal(subTotal, iva)}`;
  }, 100); 
});
*/