import Cliente from "../models/Cliente";


export async function crearCliente(req,res) {

   try {
      const cliente= await Cliente.create({});
      res.status(200).json({
         ok:true,
         cliente
      });
   } catch (error) {
      res.status(404).json({
         ok:false,
         error
      })
   }
  
};

export async function getClientes(req,res) {
   
   try {
      const clientes = await Cliente.findAll();
      res.status(200).json({
         ok:true,
         clientes
      });
   } catch (error) {
      res.status(404).json({
         ok:false,
         error
      })
   }

}

export async function getCliente(req,res) {
   
   try {
      const cliente = await Cliente.findOne({where:{cedula:req.body.cedula}});
      res.status(200).json({
         ok:true,
         cliente
      });
   } catch (error) {
      res.status(404).json({
         ok:false,
         error
      })
   }

};

export async function updateCliente(req,res) {
   const {nombre,apellido,telefono,email,direccion,ciudad,} = req.body;
   try {
      await Cliente.update({
         nombre,
         apellido,
         telefono,
         email,
         direccion,
         ciudad
      },{where:{cedula:req.body.cedula}});
      res.status(200).json({
         ok:true,
         msg:"Datos cliente modificados correctamente"
      });
   } catch (error) {
      res.status(404).json({
         ok:false,
         error
      })
   }

}