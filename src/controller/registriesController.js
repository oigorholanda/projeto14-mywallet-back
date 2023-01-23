import db from "../config/database.js";
import dayjs from "dayjs";

//Cadastrar nova entrada e ou saida
export async function newRegistry(req, res) {
  const { description, value } = req.body;
  const { type } = req.params;
  const authId = res.locals.userId


  try {
    const user = await db.collection("users").findOne({ _id: authId });
    
    const registry = {
      userId: user._id,
      description,
      value,
      type,
      date: dayjs().format("DD/MM")
  }

    await db.collection("registry").insertOne(registry);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}


//Pegar todos os registros
export async function listRegistries(req, res) {
  const authId = res.locals.userId

  try {
    const registries = await db.collection("registry").find({ user_id: authId }).toArray();
    return res.send(registries);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}


//apagar um registro
export async function deleteRegistry(req, res) {
  
}
