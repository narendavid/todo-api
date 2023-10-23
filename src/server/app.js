import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config()

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

export default app