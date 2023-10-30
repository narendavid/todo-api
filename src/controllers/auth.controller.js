import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
                email,
                password
            }
        })
        if (!user) return res.status(401).json({ message: 'Email or password are incorrect' })
        const token = jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: '1m' })
        return res.json({ message: 'Login successfully', token })
    } catch (error) {
        return res.json({ error }).status(500);
    }
}