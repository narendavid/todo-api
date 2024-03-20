import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: { email: email.trim().toLowerCase() }
        })
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
            return res.status(401).json({ message: 'Email or password are incorrect' })
        }
        const token = jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: '1m' })
        return res.json({ message: 'Login successfully', token })
    } catch (error) {
        return res.json({ error }).status(500);
    }
}