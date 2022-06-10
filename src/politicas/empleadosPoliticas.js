export function create(req,res,next){
    if(req.empleado.rol==='admin'){
        next();
    }else{
        res.status(401).json({
            msg:"no esta autorizado a a registar empleados"
        });
        
    }
} 