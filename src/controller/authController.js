import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../config/database.js";

//Cadastrar usuario
export async function signUp(req, res) {
  // pegar os dados do body
  const { name, email, password } = req.body;

  // cryptar a senha
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const registeredEmail = await db.collection("users").findOne({ email })

    if (registeredEmail) return res.status(409).send("Já existe uma conta com esse e-mail.")

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).send("Usuário Cadastrado");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Verificar e logar user
export async function login(req, res) {
  const { email, password } = req.body;

  const token = uuid()

  try {
    const user = await db.collection("users").findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {

      await db.collection("sessions").insertOne({ userId: user._id, token})

      res.status(200).send(`Autenticação realizada com sucesso!\n${token}`);
    } else {
      res.status(401).send("Email ou senha incorretos");
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function allDoc(req, res) {
  try {
    const data = await db.collection("sessions").find().toArray()
    res.send(data)
  } catch (error) {
    res.status(500).send(error.message);
  }
}
