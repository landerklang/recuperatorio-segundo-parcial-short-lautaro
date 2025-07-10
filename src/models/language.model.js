import { DataTypes } from "sequelize"
import { sequelize } from "../config/database"

export const ProgrammingLanguage = sequelize.define("ProgrammingLanguage",{
    name: {type: DataTypes.STRING,allowNull:false},
    paradigm: {type: DataTypes.STRING,allowNull:false},
    release_year: {type: DataTypes.INTEGER,allowNull:false},
});