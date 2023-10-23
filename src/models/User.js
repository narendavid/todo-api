import { DataTypes } from 'sequelize'
import sequelize from '../database/db.js'

const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
})

export default User