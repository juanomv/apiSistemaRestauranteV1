import Empleado from "../models/Empleado";

import bcrypt from "bcrypt";


export async function createEmpleado(req, res) {
  const { cedula, Nombre, Apellido, telefono, email, rol } = req.body;
  
  try {
    
    const password = bcrypt.hashSync(req.body.password, 10);
    await Empleado.create({
      cedula,
      Nombre,
      Apellido,
      telefono,
      email,
      password,
      rol
    });
    res.status(200).json({
      ok:true,
      msg:"empleado creado"
    });
  } catch (error) {
    res.status(404).json({
      ok:false,
      error
    });
  }
};

export async function getEmpleados(req,res){
  try {
    const empleados = await Empleado.findAll();
    res.status(200).send(empleados);
  } catch (error) {
    res.status(404).json({
      ok:false,
      error
    });
  }
}

export async function getEmpleado(req,res){

  try {
    const empleado = await Empleado.findOne({where:{cedula:req.body.cedula}});
    res.status(200).json({
      ok:true,
      empleado
    });
  } catch (error) {
    res.status(404).json({
      ok:false,
      error
    });
  }
}

export async function deleteEmpleado(req,res){

  try {
    const empleado = await Empleado.destroy({where:{cedula:req.body.cedula}});
    res.status(200).json({
      ok:true,
      empleado
    });
  } catch (error) {
    res.status(404).json({
      ok:false,
      error
    });
  }
}
