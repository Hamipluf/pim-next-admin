import { query } from "../../postgresql.config.js";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";

export default async function login(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(req.body);
    const secretKey = process.env.SECRET_JWT;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Ingrese su correo electrónico y contraseña",
      });
    }

    try {
      const data = await query("SELECT * FROM admin WHERE email = $1", [email]);

      if (data.rows.length !== 0) {
        const admin = data.rows[0];
        if (admin.password.trim() === password.trim()) {
          const token = jwt.sign(admin, secretKey, { expiresIn: "1h" });

          setCookie("logged", JSON.stringify(token), {
            req,
            res,
            maxAge: 3600, // Duración de la cookie (1 hora).
            path: "/", // Ruta donde estará disponible la cookie.
          });

          return res.status(202).json({ status: true, message: "Autorizado" })
        } else {
          return res
            .status(401)
            .json({ status: false, message: "Contraseña incorrecta" });
        }
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Usuario incorrecto" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido" });
  }
}
