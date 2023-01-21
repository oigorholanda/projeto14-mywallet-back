import db from "../config/database.js";


export async function validateToken(req, res, next) {
  const { authorization } = req.header;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).send("Informe o Token!");

  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session) return res.status(401).send("Você não tem autorização para esta ação");

    res.locals.sessao = session

    next()

  } catch (error) {
    res.status(500).send(error.message)
  }

}
