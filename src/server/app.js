import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config()

import {
    userRouter,
    taskRouter,
    authRouter,
} from '../routes/index.js'
import verifyToken from "../middlewares/verifyToken.js";


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

app.use('/user', userRouter);
app.use('/task', verifyToken, taskRouter);
app.use('/auth', authRouter);

export default app