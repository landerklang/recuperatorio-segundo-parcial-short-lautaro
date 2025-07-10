import express from "express";
import { createlanguage,getlanguageByid,getalllanguage,updatelanguage,delestlanguage } from "../controllers/language.controllers.js";

export const languagerourtes = express.Router();

languagerourtes.post("/languages",createlanguage);

languagerourtes.get("/languages",getalllanguage);

languagerourtes.get("/languages/:id",getlanguageByid);

languagerourtes.put("/language/:id",updatelanguage);

languagerourtes.delete("/language/:id",delestlanguage);