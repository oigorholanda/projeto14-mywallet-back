import { Router } from "express";
import { deleteRegistry, listRegistries, newRegistry } from "../controller/registries.js";

const registryRouter = Router()

registryRouter.post("/registries", newRegistry)
registryRouter.get("/registries", listRegistries)
registryRouter.delete("/registries", deleteRegistry)

export default registryRouter