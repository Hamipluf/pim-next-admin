import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
export default async function getAll(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const secret = process.env.SECRET_JWT;
    const cookie = getCookie("logged", { req, res });
    if (!cookie) {
      return res.status(401).json({ status: false, message: "No hay token" });
    }
    const token = cookie?.split('"')[1];
    const data = jwt.verify(token, secret);
    if (!data) {
      return res.status(401).send({ status: false, message: "No Token" });
    }
    const currentTime = Date.now() / 1000; // Tiempo actual en segundos
    if (currentTime > token.exp) {
      return res
        .status(401)
        .json({ status: false, message: "El token expiro" });
    }
    return res.status(200).json({ status: true, message: "Autorizado", data });
  } catch (error) {
    // console.error("Error al obtener los registros:", error);
    return res.status(500).json({
      status: false,
      error: "Token invalido",
    });
  }
}
