import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const { email, password, name, image } = req.body; 
        const user = { email, password, name, image };
        const userSaved = await User.create(user);
        res.json({data:userSaved}).status(200);
    } catch (error) {
        res.json({error}).status(400);
    }

}
