import { Router } from "express";
import { deleteRegistry, listRegistries, newRegistry } from "../controller/registriesController.js";
import { validateToken } from "../middleware/authMiddleware.js";

const registryRouter = Router()

registryRouter.get("/registries", validateToken, listRegistries)
registryRouter.post("/registries", validateToken, newRegistry)

registryRouter.delete("/registries", validateToken, deleteRegistry)

export default registryRouter