import express from "express";
import { createlanguage,getlanguageByid,getalllanguage,updatelanguage,delestlanguage } from "../controllers/language.controllers";

export const languagerourtes = express.Router();

language.post("/languages"),createlanguage;

language.get("/languages"),getalllanguage;

language.get("/languages/:id"),getlanguageByid;

language.put("/language/:id"),updatelanguage;

language.delete("/language/:id"),delestlanguage;