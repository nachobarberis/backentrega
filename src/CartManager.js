import fs from "fs";

class CartManager {

  constructor() {
    this.path = './files/Cart.json'
    this.pathProductos = './files/Products.json'
  }

  obtenerProductos() {

    try {
      if (fs.existsSync(this.pathProductos)) {
        const obtenerProductos = fs.readFileSync(this.pathProductos, "utf-8");
        const obtenerProductosJS = JSON.parse(obtenerProductos);
        return obtenerProductosJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }

  }

  addToCart(id) {

    const obtenerProductos = this.obtenerProductos();
    let obtenerItem = obtenerProductos.find((x) => x.id === id);

    let obtenerCarrito = this.getPurchases();

    let purch = {
      id: obtenerItem.id,
      title: obtenerItem.title,
      quantity: 1,
    };

    const obtenerCarritoProd = obtenerCarrito.find((x) => x.id === id);

    if (obtenerCarritoProd) {
      const obtenerCarritoRest = obtenerCarrito.filter((x) => x.id != id);
      purch.quantity = obtenerCarritoProd.quantity + 1;
      let concatenados = obtenerCarritoRest.concat(purch);
      fs.writeFileSync(this.path, JSON.stringify(concatenados));
      return `Producto agregado Anteriormente. Se sumó una Unidad.`;
    } else {
      obtenerCarrito.push(purch);
      fs.writeFileSync(this.path, JSON.stringify(obtenerCarrito));
      return `Producto agregado correctamente:`;
    }

  }

  getPurchases() {

    if (fs.existsSync(this.path)) {
      const readFile = fs.readFileSync(this.path, "utf-8");
      const readFileJS = JSON.parse(readFile);
      return "Su compra", readFileJS;
    } else {
      return [];
    }

  }

  getPurchaseById(id) {

    const obtenerProductos = this.getPurchases();
    const buscarID = obtenerProductos.find((x) => x.id === id);

    if (buscarID) {
      return buscarID;
    } else {
      return "Producto no agregado al carrito.";
    }

  }

  deletePurchase(id) {

    const obtenerProductos = this.getPurchases(id);
    let validar = obtenerProductos.find((x) => x.id == id);

    if (validar) {
      let buscarOtros = obtenerProductos.filter((x) => x.id != id);
      fs.writeFileSync(this.path, JSON.stringify(buscarOtros));
      return `Eliminado correctamente.`;
    } else {
      return `No se encontró producto con id: ${id}`;
    }

  }


}

export { CartManager };