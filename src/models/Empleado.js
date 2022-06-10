import {DataTypes} from 'sequelize';
import sequelize from '../config.js/database';
import Pedidos from './Pedidos';
import Rol from  './Rol';
const Empleado = sequelize.define("Empleado", {
    cedula:{
        type:DataTypes.CHAR(10),
        primaryKey:true,
        allowNull:false,
        validate:{
          notNull:{
            msg:"Cedula es obligarorio"
          },
          len:{
            args: 10,
            msg: "Cedula debe conterner 10 digitos"
          },
        
        }
    },
    Nombre:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:"Nombre es obligatorio",
       
      }
    },
    Apellido:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:"Apellido es obligatorio",
      
      }
    },telefono:{
      type: DataTypes.CHAR(10),
      unique:true,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    rol:{
              type:DataTypes.STRING(45),
              allowNull:false,
          }
  },{
    timestamps:false,
    freezeTableName: true,
    
});


// Empleado.belongsToMany(Rol,{through:'roles_empleado' ,as:'Rol',foreignKey:'empleado',timestamps:false});
// Rol.belongsToMany(Empleado,{through:'roles_empleado' ,as:'Rol',foreignKey:'rol',});

Empleado.hasMany(Pedidos,{as:"Empleado",foreignKey:"empleado"});
Pedidos.belongsTo(Empleado,{foreignKey:"empleado"});

export default Empleado;

