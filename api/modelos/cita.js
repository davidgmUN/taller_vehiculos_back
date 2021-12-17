const mongoose=require("mongoose");

const esquemaCita=mongoose.Schema({
	nombre_servicio:{
		type:String,
		require:true
	},
	fecha_cita:{
		type:Date,
		require:true
	},
	placa:{
		type:String,
		require:true
	},
	comentarios:{
		type:String,
		require:false
	},
	mecanico_asignado:{
		type:String,
		require:true
	},
	estado:{
		type:String,
		require:true
	}
});

module.exports=mongoose.model("Cita", esquemaCita);