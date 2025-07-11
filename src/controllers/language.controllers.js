import { ProgrammingLanguage } from "../models/language.model.js";

export const createlanguage = async(req, res)=>{
    const{name, paradigm,release_year}=req.body;
    if(name===""){
        return res.status(500).json({message: "no se permiten campos vacios"});
    };
    const nombretab = await ProgrammingLanguage.findOne({where:{name}})
    if(nombretab) { return res.status(500).json({message:"ya existe un nombre igual en la base de datos"})
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
    try {
        const language = await ProgrammingLanguage.findByPk(req.params.id)
        if (language) res.json(language);
        else res.status(404).json({message: "no se encontro el lenguaje de programacion"})
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
export const updatelanguage= async(req,res)=>{
    try{
const [update] = await ProgrammingLanguage.update(req.body,{
where: {id: req.params.id}
});
if (update) {
    const updatelanguages= await ProgrammingLanguage.findByPk(req.params.id);
    res.json(updatelanguages);
} else {
    res.status(404).json({message: "no se encontro el lenguaje"})
}}catch(err){
    res.status(500).json({error: err.message});

}
};
export const delestlanguage =async(req,res)=>{
try {
    const deleted = await ProgrammingLanguage.destroy({where: {id: req.params.id}});
    if (deleted) res.json({message: "el lenguaje de programacion se elimino"});
    else return res.status(404).json({message: "no se pudo encontrar el lenguaje"});
} catch (error) {
    res.status(500).json({error: error.message});
}
};