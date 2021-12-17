const router=require("express").Router();
const esquemaServicio=require("./modelos/servicio");

router.get("/", (peticion, respuesta)=>{
	esquemaServicio.find()
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.get("/servicio", (peticion, respuesta)=>{
	esquemaServicio.find(peticion.body)
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.post("/",(peticion, respuesta)=>{
	const servicio=esquemaServicio(peticion.body);
	servicio.save()
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.put("/",(peticion, respuesta)=>{
	const{nombre_servicio}=peticion.body;
	esquemaServicio.updateOne({nombre_servicio:nombre_servicio},{$set:peticion.body})
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.delete("/",(peticion, respuesta)=>{
	const{nombre_servicio, disponibilidad}=peticion.body;
	if(disponibilidad!=true){
		esquemaServicio.remove({nombre_servicio,disponibilidad})
		.then((datos)=>{
			respuesta.json(datos);
		})
		.catch((error)=>{
			respuesta.json({mensaje:error});
		});
	}
});

module.exports=router;