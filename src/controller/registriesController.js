import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import db from "../config/database.js";

//Cadastrar nova entrada e ou saida
export async function newRegistry(req, res) {
    

  const user = await db.collection("users").findOne({
    _id: session.userId,
  });

  if (user) {
    // ...
  } else {
    res.sendStatus(401);
  }
}


//Pegar todos os registros
export async function listRegistries(req, res) {


  const user = await db.collection("users").findOne({
    _id: session.userId,
  });

  if (user) {
    // ...
  } else {
    res.sendStatus(401);
  }
}


//apagar um registro
export async function deleteRegistry(req, res) {
  
}
