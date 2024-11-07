import { showMenu } from './js/menu.js';
import { newOrder, showSubtotal, showIva, showTotal } from './js/order.js';
import { addItem, cleanItemTable, showItemTable } from './js/item.js';
import { searchProduct } from './js/products.js';

const btnNewOrder = document.getElementById('btn-new-order');
const btnPay = document.getElementById('btn-pay');

function cleanData() {
  document.getElementById('txt-order').value = ''; 
  document.getElementById('txt-subtotal').value = ''; 
  document.getElementById('txt-iva').value = ''; 
  document.getElementById('txt-total').value = '';
}

function enableItemButtons() {
  const btnAddItem = document.getElementsByName('btn-add-item');
  for(let i = 0; i < btnAddItem.length; i++){
    btnAddItem[i].disabled = false;
  }
}

function disabledItemButtons() {
  const btnAddItem = document.getElementsByName('btn-add-item');
  for(let i = 0; i < btnAddItem.length; i++){
    btnAddItem[i].disabled = true;
  }
}

// Para mostrar el menu de comida
showMenu();

// Para agregar items a la orden
const btnAddItem = document.getElementsByName('btn-add-item');
for(let i = 0; i < btnAddItem.length; i++){
  btnAddItem[i].addEventListener('click', function() {
    let product = searchProduct(btnAddItem[i].id);
    addItem(product);
    cleanItemTable();
    showItemTable();
    showSubtotal();
    showIva();
    showTotal();
  });
}

// Para crear una nueva orden
btnNewOrder.addEventListener('click', function() {
  enableItemButtons();
  cleanData();
  let order = newOrder();
  document.getElementById('txt-order').value = `${order}`;
  btnNewOrder.disabled = true;
  btnPay.disabled = false;
});

// Pagar orden
btnPay.addEventListener('click', function() {
  disabledItemButtons();
  cleanItemTable();
  cleanData();
  btnNewOrder.disabled = false;
  btnPay.disabled = true;
});