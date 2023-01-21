import { Router } from "express";
import { login, signUp } from "../controller/authController.js";
import validateSchema from "../middleware/validateSchema.js";
import { newUserValidation, loginValidation } from "../schema/authSchema.js";

const authRouter = Router()


authRouter.post("/sign-up", validateSchema(newUserValidation), signUp)
authRouter.post("/login", validateSchema(loginValidation), login)

export default authRouter

