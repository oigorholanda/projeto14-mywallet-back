import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import registryRouter from "./routes/registry.routes.js";
import authRouter from "./routes/auth.routes.js";

//servidor
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// rotas
app.use(authRouter);
app.use(registryRouter);


// porta e listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
