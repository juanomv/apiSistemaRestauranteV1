import { Router } from "express";
import * as empleadoCtrl from "../controllers/empleado.controller";
import auth from '../middleware/auth';
import * as empleadoPoli from '../politicas/empleadosPoliticas'
const router = Router();

router.post("/create",auth,empleadoPoli.create,empleadoCtrl.createEmpleado);
router.get("/",auth,empleadoCtrl.getEmpleados)
module.exports = router;
