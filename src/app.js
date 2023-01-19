import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

//servidor
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

//banco de dados
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
  await mongoClient.connect();
  db = mongoClient.db();
  console.log("Conectado ao banco de dados");
} catch (err) {
  console.log("Erro no mongo.conect", err.message);
}


//const document = await db.collection("users").findOne({ _id: ObjectId(id) });

// ROTAS:
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
