const mongoose=require("mongoose");

const esquemaUsuario=mongoose.Schema({
	usuario:{
		type:String,
		require:true,
		unique:true
	},
	contraseña:{
		type:String,
		require:true
	},
	perfil:{
		type:String,
		require:true
	},
	nombres:{
		type:String,
		require:true
	},
	apellidos:{
		type:String,
		require:true
	},
	correo:{
		type:String,
		require:false
	},
	telefono:{
		type:String,
		require:true
	},
	tipo_id:{
		type:String,
		require:true
	},
	numero_id:{
		type:String,
		require:true
	},
	activo:{
		type:Boolean,
		require:true
	}
});

module.exports=mongoose.model("Usuario",esquemaUsuario);