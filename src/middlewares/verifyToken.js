import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ error: 'Access denied' })
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log('first')
        console.log(verified)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({ error })
    }
}

export default verifyToken