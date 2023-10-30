import app from "./server/app.js"
import sequelize from './database/db.js'
import './models/User.js'
import './models/Task.js'

const PORT = 3000

const main = async () => {
    try {
        await sequelize.sync({ logging: false, force: false });
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()