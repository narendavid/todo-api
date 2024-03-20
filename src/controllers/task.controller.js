import Task from '../models/Task.js'

export const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body
        const task = { title, description, status }
        await Task.create(task)
        return res.status(200).json({ message: 'Task created successfully' })
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        return res.json({ data: tasks }).status(200)
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const getTaskByUser = async (req, res) => {
    try {
        const { userId } = req.params

        const tasks = await Task.findAll({
            where: { userId },
        })
        return res.json({ data: tasks }).status(200)
    } catch (error) {
        return res.status(500).json({ error })
    }

}

