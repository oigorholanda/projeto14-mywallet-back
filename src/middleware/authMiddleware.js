import db from "../config/database.js";

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).send("Informe o Token!");

  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session)
      return res.status(401).send("Você não tem autorização para esta ação");

    const user = await db.collection("users").findOne({ _id: session.userId });

    delete user.password;

    res.locals.user = user;
  } catch (error) {
    return res.status(500).send(error.message);
  }

  next();
}
