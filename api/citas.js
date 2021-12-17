const router=require("express").Router();
const esquemaCita=require("./modelos/cita");

router.get("/",(peticion, respuesta)=>{
	esquemaCita.find()
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.get("/cita",(peticion, respuesta)=>{
	esquemaCita.find(peticion.body)
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.post("/",(peticion, respuesta)=>{
	const cita=esquemaCita(peticion.body);
	cita.save()
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.put("/",(peticion, respuesta)=>{
	const {placa,fecha_cita}=peticion.body;
	esquemaCita.updateOne({placa:placa, fecha_cita,fecha_cita},{$set:peticion.body})
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.delete("/",(peticion, respuesta)=>{
	const {placa,fecha_cita,nombre_servicio}=peticion.body;
	esquemaCita.remove({placa,fecha_cita,nombre_servicio})
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

module.exports=router;