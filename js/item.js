class Item {
  constructor(id, name, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}

function getSubTotal(price, quantity) {
  return price * quantity;
}

function cleanItemTable() {
  let order = JSON.parse(localStorage.getItem(document.getElementById('txt-order').value));
  for(let i = 0; i < order.items.length; i++) {
    document.getElementById('order-table').deleteRow(-1);
  }
}

function showItemTable() {
  let order = JSON.parse(localStorage.getItem(document.getElementById('txt-order').value));
  for(let i = 0; i < order.items.length; i++) {
    document.getElementById('order-table').insertRow(-1).innerHTML = `
      <td>${order.items[i].name}: ${order.items[i].description}</td>
      <td>$${order.items[i].price}</td>
      <td>${order.items[i].quantity}</td>
      <td>$${getSubTotal(order.items[i].price, order.items[i].quantity)}</td>
    `
  }
}

function addItem(product) {
  let item;
  let order = JSON.parse(localStorage.getItem(document.getElementById('txt-order').value));

  let existingItem = order.items.find(({id}) => id == product.id);
  if(order.items.length === 0 || existingItem === undefined) {
    item = new Item(product.id, product.name, product.description, product.price, 1);
    order.items.push(item);
  }else{
    item = order.items[order.items.indexOf(existingItem)];
    item.quantity += 1;
  }

  localStorage.setItem(order.id, JSON.stringify(order));
}

export { Item, addItem, cleanItemTable, showItemTable };