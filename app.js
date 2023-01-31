import express from "express";
// import PM from './prodManager.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importo Rutas
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";

// Routes:
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// # Litsening:
app.listen(8080, (req, res) => {
  console.log("Listening 8080");
});



// import express from 'express';
// import { ProductManager } from './ProductManager.js';

// const app = express();
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// const manager = new ProductManager();

// app.get('/api/products', async (req, res) => {

//     const productos = await manager.getProducts()
//     let productosLimit;

//     if (req.query.limit && !isNaN(req.query.limit)) {
//         productosLimit = productos.slice(0, req.query.limit)
//         res.json({ productosLimit })
//     } else {
//         res.json({ productos })
//     }

// });

// app.get('/api/products/:pid', async (req, res) => {

//     const { pid } = req.params

//     const producto = await manager.getProductById(parseInt(pid))
//     res.json({ producto })

// });

// app.listen(8080, () => {
//     console.log('Escuchando el puerto 8080');
// });


// app.post('/', async (req, res) => {
//     const agregarProducto = await manager.addProduct(req.body)
//     res.json({ agregarProducto })
// })

// app.delete("/:pid", async (req, res) => {
//     const { pid } = req.params;
//     const eliminarProducto = await manager.deleteProduct(pid)
//     res.json({ eliminarProducto })
// });

// app.put("/:pid", async (req, res) => {
//     const { pid } = req.params;
//     const {campo, valor} = req.body
//     const actualizarProducto = await manager.updateProduct(parseInt(pid), campo, valor)

//     console.log(pid + ' ' + campo + ' ' + valor)

//     res.json({ actualizarProducto })
// });