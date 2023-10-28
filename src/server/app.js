import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config()

import userRouter from '../routes/user.routes.js'


const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/user', userRouter);

export default app