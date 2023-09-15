import { deleteCookie, getCookie } from "cookies-next";

export default async function getAll(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  const cookie = getCookie("logged");

  if (!cookie) {
    res.status(401).json({
      status: false,
      message: "No se pudo cerrar la sesión correctamente",
    });
    return;
  }

  deleteCookie("logged");

  res.status(200).json({ status: true, message: "Cierre de sesión correcto" });
}
