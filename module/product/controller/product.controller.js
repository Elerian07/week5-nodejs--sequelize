import { productModel } from '../../../DB/model/product.model.js'
import { Op } from "sequelize";
import { userModel } from '../../../DB/model/user.model.js';



const getAllProduct = async (req, res) => {
    const productData = await productModel.findAll({
        include: {
            model: userModel
        }
    })
    res.json({ message: "done", productData })
}

const addProduct = async (req, res) => {
    const { name, description, price, userId } = req.body;
    const addUser = await productModel.create({ productName: name, description, price, userId });
    res.json({ message: "added", addUser })

}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await productModel.destroy({
        where: {
            id
        }
    })
    if (deleteProduct) {
        res.json({ message: "deleted", deleteProduct })
    } else {
        res.json({ message: "invalid id" })
    }
}

const productId = async (req, res) => {
    const { id } = req.params;
    const productId = await productModel.findOne({
        where: {
            id
        },
        include: {
            model: userModel,
        }
    })
    if (productId) {
        res.json({ message: "found", productId })
    } else {
        res.json({ message: "invalid id" })

    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updateProduct = await productModel.update({ productName: name, description, price }, {
        where: {
            id
        }
    });

    if (updateProduct[0]) {
        res.json({ message: "updated", updateProduct })
    } else {
        res.json({ message: "invalid user id" })
    }
}

const getProductName = async (req, res) => {
    const { searchKey } = req.query;
    const productInfo = await productModel.findAll({
        where: {
            productName: { [Op.startsWith]: searchKey }
        },
        include: {
            model: userModel
        }
    })

    if (productInfo) {
        res.json({ message: "not found" })
    } else {
        res.json({ message: "Found", productInfo })
    }


}

export {
    getAllProduct,
    addProduct,
    deleteProduct,
    productId,
    updateProduct,
    getProductName
}
