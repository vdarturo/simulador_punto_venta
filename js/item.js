class Item {
  constructor(id, name, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }

  getSubTotal() {
    return this.price * this.quantity;
  }
}

export { Item };