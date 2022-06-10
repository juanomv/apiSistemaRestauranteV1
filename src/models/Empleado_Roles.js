// import {DataTypes} from 'sequelize';
// import sequelize from '../database/database';
// import Empleado from './Empleado';
// import Rol from './Rol';

// const EmpleadosRoles = sequelize.define('roles_empleado',{
//     empleado:{
//         type:DataTypes.CHAR(10),
//         primaryKey:true,
//         references:{
//             model:Empleado,
//             as :"Empleado",
//             key:"cedula"
//         }
//     },
//     rol:{
//         type:DataTypes.SMALLINT,
//         primaryKey:true,
//         references:{
//             model:Rol,
//             as :"Rol",
//             key:"id"
//         }
//     }
// },{
    
//     timestamps:false,
//     tableName:'roles_empleado'
// });

// export default EmpleadosRoles;