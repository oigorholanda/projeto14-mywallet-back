import dayjs from "dayjs";
import { registrySchema } from "../schema/registrySchema.js";

export function registriesValidation(req, res, next) {
  const { type } = req.params;
  const { value, description } = req.body;
  const user = res.locals.user;

  const newRegistry = {
    value,
    description,
    type,
    user: user._id,
    createdAt: dayjs().format("DD/MM/YYYY"),
  };

  const validation = registrySchema.validate(newRegistry, { abortEarly: false });

  if (validation.error) return res.status(422).send(validation.error.message);

  res.locals.registries = newRegistry;
  console.log(user);

  next();
}
