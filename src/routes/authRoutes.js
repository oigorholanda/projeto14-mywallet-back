import { Router } from "express";
import { allDoc, login, signUp } from "../controller/authController.js";
import validateSchema from "../middleware/validateSchema.js";
import { newUser, newLogin } from "../schema/authSchema.js";

const authRouter = Router()


authRouter.post("/sign-up", validateSchema(newUser), signUp)
authRouter.post("/login", validateSchema(newLogin), login)

authRouter.get("/todos", allDoc)

export default authRouter

