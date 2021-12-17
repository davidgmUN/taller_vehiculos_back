const router=require("express").Router();
const esquemaUsuario=require("./modelos/usuario");

router.get("/",(peticion, respuesta)=>{
	esquemaUsuario.findOne(peticion.body)
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.post("/",(peticion, respuesta)=>{
	const usuario=esquemaUsuario(peticion.body);
	usuario.save()
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.put("/",(peticion, respuesta)=>{
	const{usuario}=peticion.body;
	esquemaUsuario.updateOne({usuario:usuario},{$set:peticion.body})
	.then((datos)=>{
		respuesta.json(datos);
	})
	.catch((error)=>{
		respuesta.json({mensaje:error});
	});
});

router.delete("/",(peticion, respuesta)=>{
	const{usuario, perfil, activo}=peticion.body;
	if(perfil!="Administrador" && activo != true){
		esquemaUsuario.remove({usuario, perfil, activo})
		.then((datos)=>{
			respuesta.json(datos);
		})
		.catch((error)=>{
			respuesta.json({mensaje:error});
		});
	}
	
});

module.exports=router;