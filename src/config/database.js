import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

export const staON = async() =>{
    try {
    await sequelize.sync();
    console.log("se a realizado con exito la conexion con el servidor");
    } catch (err) {
        console.error({error: err.message});
    }  
};