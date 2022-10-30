import { userModel } from '../../../DB/model/user.model.js';

import { Op } from "sequelize";

export const getUser = async (req, res) => {
    const { id } = req.params;
    const userData = await userModel.findOne({


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

export const findByEmail = async (req, res) => {
    const { searchKey } = req.query;
    const userData = await userModel.findOne({


        where: {
            email: searchKey

        }

    })
    if (userData) {
        res.json({ message: "Found", userData })
    } else {
        res.json({ message: "invalid user id" })
    }

}

export const nameAge = async (req, res) => {
    const { searchKey } = req.query;
    const { age } = req.query;
    const userInfo = await userModel.findAll({
        where: {
            userName: { [Op.and]: [{ [Op.like]: searchKey }, { [Op.gt]: age }] }
        }
    })

    if (userInfo) {
        res.json({ message: "Found", userInfo })
    } else {
        res.json({ message: "not found" })
    }


}