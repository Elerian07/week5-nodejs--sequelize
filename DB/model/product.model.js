import { sequelize } from '../connection.js';
import { DataTypes } from 'sequelize';
export const productModel = sequelize.define('product', {
    productName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(100),

    },
    price: {
        type: DataTypes.FLOAT
    },
    userId: {
        type: DataTypes.INTEGER
    }

})