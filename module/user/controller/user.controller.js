import { userModel } from '../../../DB/model/user.model.js';
import { productModel } from '../../../DB/model/product.model.js'
import { Op } from "sequelize";


const getAllUsers = async (req, res) => {
    const userData = await userModel.findAll({
        include: {
            model: productModel
        }
    })
    res.json({ message: "done", userData })
}

const addUser = async (req, res) => {
    const { name, email, password, age } = req.body;
    const addUser = await userModel.create({ userName: name, email, password, age });
    res.json({ message: "added", addUser })

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updateUser = await userModel.update({ userName: name }, {
        where: {
            id
        }
    });
    if (updateUser[0]) {
        res.json({ message: "updated", updateUser })
    } else {
        res.json({ message: "invalid user id" })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await userModel.destroy({
        where: {
            id
        }
    })

    if (deletedUser) {
        res.json({ message: "deleted", deletedUser })

    } else {
        res.json({ message: "invalid user id" })
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const userData = await userModel.findOne({
        include: {
            model: productModel
        },

        where: {
            id

        }

    })
    if (userData) {
        res.json({ message: "Found", userData })
    } else {
        res.json({ message: "invalid user id" })
    }

}

const getUserName = async (req, res) => {
    const { searchKey } = req.query;
    const userInfo = await userModel.findAll({
        where: {
            userName: { [Op.startsWith]: searchKey }
        }
    })

    if (userInfo) {
        res.json({ message: "Found", userInfo })
    } else {
        res.json({ message: "not found" })
    }


}


const getUserAge = async (req, res) => {
    let { searchAge } = req.query;
    let { searchAge1 } = req.query;
    const userData = await userModel.findAll({
        where: {
            age: { [Op.between]: [searchAge, searchAge1], }
        }
    })
    if (userData) {
        res.json({ message: "Found", userData })
    } else {
        res.json({ message: "not found" })
    }
    console.log(userData);
}

const getGrThan = async (req, res) => {
    let { searchAge1 } = req.query;
    const userData = await userModel.findAll({
        where: {
            age: { [Op.gt]: [searchAge1], }
        }
    })
    if (userData) {
        res.json({ message: "Found", userData })
    } else {
        res.json({ message: "not found" })
    }


}

const getLessThan = async (req, res) => {
    let { searchAge1 } = req.query;
    const userData = await userModel.findAll({
        where: {
            age: { [Op.lt]: [searchAge1], }
        }
    })
    if (userData) {
        res.json({ message: "Found", userData })
    } else {
        res.json({ message: "not found" })
    }
}


export {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUserName,
    getUserAge,
    getGrThan,
    getLessThan,
}