import { query } from "../../postgresql.config";
export default async function getAll(req, res) {
  if (req.method === "GET") {
    try {
      const data = await query("SELECT * FROM medicos");
      const medicos = data.rows;
      if (medicos.length !== 0) {
        res.status(200).json({ status: true, medicos });
      } else {
        res
          .status(204)
          .json({ status: false, message: "No hay registros que devolver" });
      }
    } catch (error) {
      console.error("Error al obtener los registros:", error);
      res
        .status(500)
        .json({
          status: false,
          error: "No se pudieron obtener los registros.",
        });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
