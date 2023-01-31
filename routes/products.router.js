import { Router } from 'express'
const router = Router();

import { ProductManager } from '../src/ProductManager.js';

const manager = new ProductManager();

router.get('/', async (req, res) => {

    const productos = await manager.getProducts()
    let productosLimit;

    if (req.query.limit && !isNaN(req.query.limit)) {
        productosLimit = productos.slice(0, req.query.limit)
        res.json({ productosLimit })
    } else {
        res.json({ productos })
    }

});

router.get('/:pid', async (req, res) => {

    const { pid } = req.params

    const producto = await manager.getProductById(parseInt(pid))
    res.json({ producto })

});

router.post('/', async (req, res) => {
    const agregarProducto = await manager.addProduct(req.body)
    res.json({ agregarProducto })
})

router.delete("/:pid", async (req, res) => {
    const { pid } = req.params;
    const eliminarProducto = await manager.deleteProduct(pid)
    res.json({ eliminarProducto })
});

router.put("/:pid", async (req, res) => {
    const { pid } = req.params;
    const {campo, valor} = req.body
    const actualizarProducto = await manager.updateProduct(parseInt(pid), campo, valor)

    console.log(pid + ' ' + campo + ' ' + valor)

    res.json({ actualizarProducto })
});

export default router;