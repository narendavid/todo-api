import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import userRouter from '../routes/user.routes.js'

config()

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/user', userRouter);

export default app