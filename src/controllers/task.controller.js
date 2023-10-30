import Task from "../models/Task.js";

export const createTask = async(req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = { title, description, status }
        await Task.create(task);
        res.status(200).json({message: 'Task created successfully'});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json({ data: tasks }).status(200);
    } catch (error) {
        res.status(500).json({error});
    }
}

export const getTaskByUser = async(req, res) => {
   try {
    const { userId } = req.params;

    const tasks = await Task.findAll({
        where:{ userId },
    });
    res.json({ data: tasks }).status(200);
   } catch (error) {
    res.status(500).json({error});
   }

}

