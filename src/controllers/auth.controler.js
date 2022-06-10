import Empleado from "../models/Empleado";
import authconfig from "../config.js/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function singIn(req, res) {
  try {
    const { email, password } = req.body;
    const empleado = await Empleado.findOne({
      where: { email },
      attributes: ["email", "password", "cedula"],
    });
    if (!empleado) {
      res.status(404).json({
        ok: false,
        msg: "Empleado no registrado",
      });
    } else {
      if (await bcrypt.compareSync(password, empleado.password)) {
        const { cedula } = empleado;
        let token = jwt.sign({ cedula }, authconfig.secret, {
          expiresIn: authconfig.expires,
        });
        res.status(200).json({
          ok: true,
          cedula,
          token,
        });
      } else {
        res.status(401).json({
          ok: false,
          msg: "Contraseña incorrecta intente con otra",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "error en el servidor",
      error,
    });
  }
}

export function validarToken(req, res) {
  try {
    if (!req.headers.authorization) {
      res.status(401).json({ auth: false });
    } 
    else {
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.AUTH_SECRET, async (err, decode) => {
        if (err) {
          res.status(500).json({ auth: false });
        } else {
          try {
            res.status(200).json({ auth: true });
          } catch (error) {
            res.status(500).json({ auth: false });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).json({ auth: false });
  }
}
