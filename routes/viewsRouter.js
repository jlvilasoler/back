import { Router } from "express";
import { ProductManager } from "../src/productManager.js";

const productManager = new ProductManager();

const router = Router();

router.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('home', {products});
});

router.get('/realtimeproducts', async (req, res) => {
    const socketServer = req.context.socketServer;
    const products = await productManager.getProducts();
    res.render('realTimeProducts', {products});
});


export default router;