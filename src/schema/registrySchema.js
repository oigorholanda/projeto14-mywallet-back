import Joi from "joi";

export const registrySchema = Joi.object().keys({
    value: Joi.number().required(),
    description: Joi.string().min(5).required(),
    type: Joi.string().valid("in", "out").required(),
    user: Joi.object().required(),
    createdAt: Joi.string().required()
})