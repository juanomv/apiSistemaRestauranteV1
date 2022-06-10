import jwt from "jsonwebtoken";
import Empleado from "../models/Empleado";
const auth = (req, res, next) => {
  
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "acceso no autorizado" });
  } else {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.AUTH_SECRET, async (err, decode) => {
      if (err) {
        res.status(500).json({ msg: "error al decodificar el token", err });
      } else {
            try {
                const empleado = await Empleado.findByPk(decode.cedula);
                console.log(empleado);
                req.empleado = empleado;
                next();
            } catch (error) {
                res.status(500).json({ msg: "no esta autorizado", err });
                next();
            }          
          
      }
    });
  }
};
export default auth;
