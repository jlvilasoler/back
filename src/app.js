import { ProductManager } from "./productManager.js"; 
import cartRouter from "../routes/cartRouter.js"
import productRouter from "../routes/productRouter.js";
import express from "express";
const productManager = new ProductManager();



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', productRouter);
app.use('/api', cartRouter);

app.listen(8080, () => {
    console.log(`Servidor en ejecución en el puerto 8080`);
});
