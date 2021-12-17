const mongoose=require("mongoose");

const esquemaServicio=mongoose.Schema({
	nombre_servicio:{
		type:String,
		require:true
	},
	descripcion:{
		type:String,
		require:false
	},
	costo:{
		type:Number,
		require:true
	},
	duracion:{
		type:Number,
		require:false
	},
	disponibilidad:{
		type:Boolean,
		require:true
	}
});

module.exports=mongoose.model("Servicio",esquemaServicio);