import { query } from "../../postgresql.config.js";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function login(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }
  const { email, password } = req.body;
  const secret = process.env.SECRET_JWT;

  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Ingrese su correo electrónico y contraseña",
    });
  }

  // Verifica si el correo está permitido (en un array)
  const adminEmails = ["ramirogumma@hotmail.com", "administrador@example.com"]; // Reemplaza con tus correos permitidos
  if (!adminEmails.includes(email)) {
    return res
      .status(401)
      .json({ status: false, message: "Correo no autorizado" });
  }

  try {
    const data = await query("SELECT * FROM administradores WHERE email = $1", [
      email,
    ]);

    if (data.rows.length > 0) {
      const admin = data.rows[0];
      const comparePasswords = await bcrypt.compare(password, admin.password);
      const payload = {
        email: admin.email,
        autorized: true,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "1h" });
      if (comparePasswords) {
        setCookie("logged", JSON.stringify(token), {
          req,
          res,
          maxAge: 3600, // Duración de la cookie (1 hora).
          path: "/", // Ruta donde estará disponible la cookie.
        });
        return res.status(200).json({ status: true, message: "Autorizado" });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Contraseña incorrecta" });
      }
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const registerAdmin = await query(
        "INSERT INTO administradores (email, password) VALUES ($1, $2) RETURNING *",
        [email, hashPass]
      );
      const payload = {
        email: email,
        autorized: true,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "1h" });

      setCookie("logged", JSON.stringify(token), {
        req,
        res,
        maxAge: 3600, // Duración de la cookie (1 hora).
        path: "/", // Ruta donde estará disponible la cookie.
      });
      return res
        .status(200)
        .json({ status: true, message: "Usuario registrado" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
