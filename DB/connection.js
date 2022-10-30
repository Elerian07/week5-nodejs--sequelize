import Sequelize from 'sequelize';


export const sequelize = new Sequelize('week5', 'root', '',
    {
        host: 'localhost',
        dialect: 'mysql'
    })

export const createTable = () => {
    return sequelize.sync({ alter: true }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}