import { Router } from 'express'
import { createTask, getAllTasks, getTaskByUser } from '../controllers/task.controller.js'

const router = Router();

router.get('/', getAllTasks)
router.get('/get-by-user/:userId', getTaskByUser)
router.post('/', createTask)

export default router