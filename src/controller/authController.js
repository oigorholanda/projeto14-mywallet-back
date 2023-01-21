import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import db from "../config/database.js";

// schema do JOI

//Cadastrar usuario
export async function signUp(req, res) {
    // pegar os dados do body
    const data = req.body
    console.log(data);
    
    // cryptar a senha

    // try {
    //     await db.collection("users").insertOne()
    //     res.status(201).send("Usuário Cadastrado")
    // } catch (error) {
    //     res.status(500).send(error.message)
    // }
  return res.status(201).send("Requisição completa no /sign-up")
}

//Verificar e logar user
export async function login(req, res) {
   return res.status(201).send("Requisição completa no /login")
}


