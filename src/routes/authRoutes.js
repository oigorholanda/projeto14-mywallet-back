import { Router } from "express";
import { signIn, signUp } from "../controller/auth.js";

const authRouter = Router()

authRouter.post("/sign-in", signIn)
authRouter.post("/sign-up", signUp)

export default authRouter

