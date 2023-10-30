import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(5).max(16),
    image: Joi.string(),
})

export default schema;