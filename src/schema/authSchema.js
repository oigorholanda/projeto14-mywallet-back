import Joi from "joi";

export const newUser = Joi.object().keys({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
})

export const newLogin = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})