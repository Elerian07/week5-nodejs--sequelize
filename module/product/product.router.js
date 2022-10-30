import { Router } from 'express';

import { getProductName, updateProduct, productId, deleteProduct, getAllProduct, addProduct } from "./controller/product.controller.js";
const router = Router();

router.get("/products", getAllProduct)

router.post("/addProduct", addProduct)

router.delete("/delete/:id", deleteProduct)

router.get("/getId/:id", productId)

router.patch("/update/:id", updateProduct)

router.get("/search", getProductName)

export default router