import { IVA } from './constants.js';
class Order {
  constructor(id) {
    this.id = id;
    this.items = [];
  }
}

function newOrder() {
  let order;
  let keys = Object.keys(localStorage);
  
  if(keys.length === 0) {
    order = new Order(1);
  } else {
    order = new Order(localStorage.length+1);
  }

  localStorage.setItem(order.id, JSON.stringify(order));
  return order.id;
}

function showSubtotal() {
  let subtotal = 0;
  let order = JSON.parse(localStorage.getItem(document.getElementById('txt-order').value));
  for(let i = 0; i < order.items.length; i++) {
    subtotal += (order.items[i].price * order.items[i].quantity);
  }
  document.getElementById('txt-subtotal').value = `${subtotal}`; 
}

function showIva() {
  let subtotal = parseFloat(document.getElementById('txt-subtotal').value);
  let iva = subtotal*(IVA/100);
  document.getElementById('txt-iva').value = `${iva.toFixed(2)}`;
}

function showTotal() {
  let subtotal = parseFloat(document.getElementById('txt-subtotal').value);
  let iva = parseFloat(document.getElementById('txt-iva').value);
  let total = subtotal + iva;
  document.getElementById('txt-total').value = `${total.toFixed(2)}`;
}

export { Order, newOrder, showSubtotal, showIva, showTotal };