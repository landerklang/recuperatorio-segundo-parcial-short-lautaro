import express from "express";
import { createlanguage,getlanguageByid,getalllanguage,updatelanguage,delestlanguage } from "../controllers/language.controllers.js";

export const languagerourtes = express.Router();

languagerourtes.post("/languages",createlanguage);

languagerourtes.get("/languages",getalllanguage);

languagerourtes.get("/languages/:id",getlanguageByid);

languagerourtes.put("/languages/:id",updatelanguage);

languagerourtes.delete("/languages/:id",delestlanguage);