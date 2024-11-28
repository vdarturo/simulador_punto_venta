import { showMenu } from './js/menu.js';
import { newOrder, showSubtotal, showIva, showTotal } from './js/order.js';
import { addItem, cleanItemTable, showItemTable } from './js/item.js';
import { searchProduct } from './js/products.js';


// Para mostrar el menu de comida
showMenu();

setTimeout(() => {

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
    const new_order = {
      "num_order": parseInt(document.getElementById('txt-order').value),
      "subtotal": parseFloat(document.getElementById('txt-subtotal').value),
      "iva": parseFloat(document.getElementById('txt-iva').value),
      "total": parseFloat(document.getElementById('txt-total').value)
    }

    fetch("https://dghstvwvsvzgpuynyjqz.supabase.co/rest/v1/orders",
      {
        method: 'POST',
        headers: {
          'apikey': '',
          'Authorization': '',
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(new_order)
      }
    ).then(data => {
      if (data.ok) {
        Swal.fire({
          title: 'Orden: ' + document.getElementById('txt-order').value,
          confirmButtonText: 'Cerrar'
        }).then((result) => {
          if (result.isConfirmed) {
            disabledItemButtons();
            cleanItemTable();
            cleanData();
            btnNewOrder.disabled = false;
            btnPay.disabled = true;
          }
        });
      }
    })
  });
}, "300");