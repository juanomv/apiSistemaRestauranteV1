import { DataTypes } from "sequelize";
import sequelize from "../config.js/database";
;
const Cliente = sequelize.define(
  "Cliente",
  {
    cedula: {
      type: DataTypes.CHAR(10),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: "El nombre del cliente es obligatorio",
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: "El apellido del cliente es obligatorio",
      },
    },
    telefono: {
      type: DataTypes.CHAR(10),
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: "Debe ser un email valido",
      },
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: "la direcion del cliente es obligatorio",
      },
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: "la ciudad del cliente es obligatorio",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);




export default Cliente;
