import {Router} from 'express';
import * as authCtrl from "../controllers/auth.controler"
const router = Router();


router.post('/signin',authCtrl.singIn);
router.post('/validatorToken',authCtrl.validarToken);
export default router;