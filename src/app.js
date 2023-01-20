import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import registryRouter from "./routes/registryRoutes.js";
import authRouter from "./routes/authRoutes.js";

//servidor
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// rotas
app.use(registryRouter);
app.use(authRouter);


// porta e listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
