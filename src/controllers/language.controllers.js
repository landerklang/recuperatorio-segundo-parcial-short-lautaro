import { ProgrammingLanguage } from "../models/language.model.js";

export const createlanguage = async(req, res)=>{
    const{name, paradigm,release_year}=req.body;
    if(name===""){
        return res.status(500).json({message: "no se permiten campos vacios"});
    };
    if(paradigm===""){
        return res.status(500).json({message: "no se permiten paradigmas vacios"});
    };
    if(release_year===""){
        return res.status(500).json({message: "no se permite años de salida vacios"})
    };
    //verificador de tipo de dato entero en el atributo release_year
    const yearint= Math.floor(release_year);
    if (release_year!==yearint){
        return res.status(500).json({message: "solo se permiten años en enteros"})
    };
try {
    const language =await ProgrammingLanguage.create(req.body);
    console.log(language)
    res.status(201).json({message: "se creo un nuevo lenguaje "});
} catch (error) {
    res.status(500).json({message: "no se pudo crear el personaje"})
}
};
export const getalllanguage = async (req, res)=>{
    try{
    const language =await ProgrammingLanguage.findAll();
    res.json(language)
    }catch(err) {
        res.status(500).json({message:"no se pudo traer los language",err})
    };
};
export const getlanguageByid =async(req, res)=>{

};
export const updatelanguage= async(req,res)=>{

};
export const delestlanguage =async(req,res)=>{

};