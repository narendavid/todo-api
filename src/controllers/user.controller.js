import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const createUser = async (req, res) => {
	try {
		const { email, password, name, image } = req.body
		const hashPassword = await bcrypt.hash(password, 10)
		const user = {
			email: email.trim().toLowerCase(),
			password: hashPassword,
			name,
			image
		}
		await User.create(user)
		return res.status(200).json({ message: 'User created successfully' })
	} catch (error) {
		return res.json({ error }).status(400)
	}
}

export const getUsers = async (req, res) => {
	try {
		const users = await User.findAll()
		return res.json({ data: users }).status(200)
	} catch (error) {
		return res.json({ error }).status(400)
	}
}

export const updateUser = async (req, res) => {
	try {
		const { id } = req.params
		const { body } = req

		const user = await User.findOne({ where: { id } })
		if (!user) {
			return res.status(404).json({
				msg: 'There is no user with the id ' + id,
			})
		}
		await user.update(body)
		return res.json({ data: user }).status(200)

	} catch (error) {
		return res.status(500).json({
			error,
			msg: 'An error occurred while updating the user',
		})
	}
}

export const deleteUser = async (req, res) => {

	const { id } = req.params

	try {
		const user = await User.findOne({ where: { id } })
		if (!user) {
			return res.status(404).json({
				msg: 'User not found',
			})
		}
		await user.destroy()
		return res.status(200).json({
			msg: 'user successfully deleted',
		})
	} catch (error) {
		return res.status(500).json({
			error,
			msg: 'An error occurred while deleting the user',
		})
	}
}
