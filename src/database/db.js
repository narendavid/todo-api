import { Sequelize } from 'sequelize'
const { DB_URL, USERNAME, PASSWORD, HOST, DATABASE } = process.env
const sequelize = new Sequelize( DATABASE, USERNAME, PASSWORD, {
    dialect: 'postgres',
    host: HOST,
})

export default sequelize