import { sequelize } from '../connection.js';
import { DataTypes } from 'sequelize';
export const userModel = sequelize.define('user', {
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),

    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,

    },
    age: {
        type: DataTypes.INTEGER,

    }

})