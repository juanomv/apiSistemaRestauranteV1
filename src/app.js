import express, { json , urlencoded} from "express";
import cors from 'cors'

import morgan from "morgan";
import sequelize from "./config.js/database";
import {config} from '../config'
// Importar rutas
import EmpleadosRouter from "./routers/empleados";
import ClienteRouter from './routers/cliente'
import authRouter from './routers/authRouters'
// inicializacion
const app = express();
//

async function conexionDB() {
    // await sequelize.authenticate();
    await sequelize.sync({alter:true,force:true})
}

try {
    //conexionDB();
    console.log('conectado')
} catch (error) {
    console.log('error:',error)
}

// Middlewares
app.use(morgan("dev"));
app.use(urlencoded({extended:false}))
app.use(json());
app.use(cors(config.application.cors.server));
// routes
app.use("/api/empleado", EmpleadosRouter);
app.use("/api/cliente", ClienteRouter);
app.use("/api/auth/",authRouter)
// export
export default app;
