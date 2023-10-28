import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { email, password, name, image } = req.body;
    const user = { email, password, name, image };
    const userSaved = await User.create(user);
    res.json({ data: userSaved }).status(200);
  } catch (error) {
    res.json({ error }).status(400);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users }).status(200);
  } catch (error) {
    res.json({ error }).status(400);
  }
};

export const updateUser = async (req, res) => {

  const { id } = req.params;
  const { body } = req;

  try {

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        msg: 'There is no user with the id ' + id,
      });
    }
    await user.update(body);
    res.json({ data: user }).status(200);
    
  } catch (error) {
    res.status(500).json({
      error,
      msg: 'An error occurred while updating the user',
    });
  }
};

export const deleteUser = async (req, res) => {

  const { id } = req.params;

  try {

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        msg: 'User not found',
      });
    }
    await user.destroy();
    res.status(200).json({
      msg: 'user successfully deleted',
    });

  } catch (error) {
    res.status(500).json({
      error,
      msg: 'An error occurred while deleting the user',
    });
  }
};
