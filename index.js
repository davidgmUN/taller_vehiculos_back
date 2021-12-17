const exp=require ("express");
const mongoose=require("mongoose");
require("dotenv").config();
const APIusuarios=require("./api/usuarios");
const APIservicios=require("./api/servicios");
const APIcitas=require("./api/citas");

mongoose.connect(process.env.BD)
.then(()=>console.log("Conexión establecida"))
.catch((error)=>console.log(error));

const puerto=process.env.PORT || 3000;
const aplicacion=exp();

aplicacion.use(exp.json());
aplicacion.use("/api_servicios", APIservicios);
aplicacion.use("/api_citas",APIcitas);
aplicacion.use("/api_usuarios",APIusuarios);

aplicacion.listen(puerto,()=>console.log("Conexión"));