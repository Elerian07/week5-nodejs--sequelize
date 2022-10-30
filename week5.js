import express from 'express';


const week5 = express();

import * as allRoutes from './module/index.routers.js'

import { createTable } from './DB/connection.js'
import { userModel } from './DB/model/user.model.js';
import { productModel } from './DB/model/product.model.js';

week5.use(express.json())
week5.use('/api/v1/user', allRoutes.userRouter)
week5.use('/api/v1/product', allRoutes.productRouter)

createTable()

userModel.hasMany(productModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(userModel)
week5.listen(3000, () => {
    console.log("server is running ");
})