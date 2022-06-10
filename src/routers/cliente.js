import { Router } from "express";
import * as clienteCtrl from '../controllers/cliente.controller'
const router = Router();

router.post("/", clienteCtrl.crearCliente);

module.exports = router;
