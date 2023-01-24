import { Router } from "express";
import { deleteRegistry, listRegistries, newRegistry } from "../controller/registriesController.js";
import { validateToken } from "../middleware/authMiddleware.js";
import { registriesValidation } from "../middleware/registriesMiddleware.js";


const registryRouter = Router()

registryRouter.use(validateToken)
registryRouter.get("/registries", listRegistries)
registryRouter.post("/registries/:type", registriesValidation, newRegistry)

registryRouter.delete("/registries", deleteRegistry)

export default registryRouter