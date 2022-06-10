import {DataTypes} from 'sequelize';
import sequelize from '../config.js/database';
import Cliente from './Cliente';


const Pedidos = sequelize.define('Pedidos',{
    codigo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    mesa:DataTypes.TINYINT,
    comentario:DataTypes.STRING,
    fecha:{
        type:DataTypes.DATE,
        allowNull:false,
        validate:{
            isDate:'tiene que ser una fecha validad',
        }
    },
    descuento:{
        type:DataTypes.TINYINT,
        defaultValue:0,
        validate:{
            max:{
                args:100,
                msg:"el descuento no puede ser mayor a 100%"
            },
            min:{
                args:0,
                msg:"el descuento no puede ser menor a 0%"
            },
        }
    },

},{
    freezeTableName:true,
    timestamps:false
});

Cliente.hasMany(Pedidos, { as: "Cliente", foreignKey: "cliente" });
Pedidos.belongsTo(Cliente, {  foreignKey: "cliente" });



export default Pedidos;


