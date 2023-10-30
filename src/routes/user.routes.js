import express from "express";
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser
} from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", createUser)
router.get("/", verifyToken, getUsers)
router.put("/:id", verifyToken, updateUser)
router.delete("/:id", verifyToken, deleteUser)

export default router;

