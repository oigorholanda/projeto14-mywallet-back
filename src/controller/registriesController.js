import db from "../config/database.js";
import dayjs from "dayjs";

//Cadastrar nova entrada e ou saida
export async function newRegistry(req, res) {
  const registry = res.locals.registries;

  try {
    await db.collection("registries").insertOne(registry);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

//Pegar todos os registros
export async function listRegistries(req, res) {
  const user = res.locals.user;

  try {
    const registries = await db.collection("registries").find({ user: user._id  }).toArray();
    return res.send({ registries, user });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

//apagar um registro
export async function deleteRegistry(req, res) {}
