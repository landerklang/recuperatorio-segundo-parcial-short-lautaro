import { sequelize } from "./src/config/database.js";
import { staON } from "./src/config/database.js";
import { languagerourtes } from "./src/routes/language.routes.js";
import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';

dotenv.config();


const app= express();
const PORT= process.env.PORT || 3000

app.use(express.json());
app.use(morgan("dev"));
sequelize.authenticate

app.use("/api",languagerourtes)

app.listen(PORT,async()=>{
    await staON();
    console.log(`se escuhca correctamente el puerto ${PORT}`)
})