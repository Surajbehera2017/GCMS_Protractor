var I18n = {
		loginPage: {
			title: 'Bienvenido a la aplicación de WIP',
			empty_credentials_error: 'Los campos usuario y password deben estar informados.',
			invalid_credentials_error: 'Error de login'
		},
		wipPage: {
			title: 'GCMS: WIP'
		},
		grantsSubsidies:{
			noEntriesFoundMsg: 'No Entries Found'
		},
		legisDocDisplay: {
			title: "Legislation Document Detail - GCMS 2.0",
			PrintPagetitle: "GCMS: Impresión/Generación de informes",
			subMessagetitle: "Operation carried out successfully"
		},
		documentType: {
			legislation: "Legislación",
			spa: "Español",
			cat: "Catalán",
			gal: "Gallego",
			val: "Valenciano",
			spatxt: "Textos"
		},
		productWorkbench: {
			no_results: "No se encontraron entradas"
		},

		documentDetails: {
			displaymessage: "Este documento no tiene ningún texto asociado",
			exportbuttontext: "Textos"
		},
		dateInForce: {
			dateInForce: "Fecha de Vigencia",
			effectiveType: "Temporalidad",
			ineffectiveDate: "Ineffective Date",
			ineffectiveNote: "Nota Inefectiva",
			popupTitle: "Nota Inefectiva"
		},
		relationshipbutton: {
			import: "Importar",
			addsingle: "Agregar Una",
			addmultiple: "Agregar Multiples"
		},
		packaging: {
			texts: "Textos",
			noText: "This document does not have an associated text"
		},
		relationshipwindow: {
			relationship: "RELATIONSHIPS",
			errormessage:"No se puede borrar la relación."
		},
		relationshipsection: {
			adddocumentsuccess: "Operación realizada con éxito.",
			add_days_error_message:"Solo es posible crear relaciones entre versiones o entre artículos completos",
			affected_marginal_error:"**- Los ambitos de los marginales Afecta-Afectado no son correctos para el tipo de relacion seleccionado."
		},
		documentstructure: {
			structurecreatedmessage: "Operación realizada con éxito.",
			duplicatedateerror: "Ya existe una plantilla con la misma fecha.",
			structuredeletesuccess: "Operación realizada con éxito.",
			deleteunitwithversions: "- No se puede borrar el nodo porque existen textos que sólo dependen de este nodo.",
			deleteunitwithchildren: "- No se puede borrar un nodo que tenga hijos",
			deleteversionwithrelationships:"a capa tiene relaciones asociadas",
			duplicateentryinsertmessage: 'Se ha intentado insertar un valor duplicado en un campo',
			documentstructuretabname: "ESTRUCTURA DEL TEXTO",
			documenttexttabname: "VERSIONES DEL TEXTO",
			structureactionsmenuoptions: "Expandir todos,Importar de XML," +
			"Agregar nueva unidad desde el editor," +
			"Agregar nueva unidad desde el editor XML," +
			"Duplicar Estructura,Exportar Estructura (PDF)," +
			"Exportar Estructura (RTF),Borrar",
			elementselectoroptionsinuniteditor: "Fecha,Llamada a nota,Texto de nota,Derogado," +
			"Inconstitucional,Destacado,Recomendaciones,Recomendación," +
			"Ementa,Paragraph,Clause,Resumen de resumen,Espaciado,Imagen",
			elementselectoroption: {
				date: 'Fecha',
				note: 'Llamada a nota',
				textnote: 'Texto de nota',
				repeal: 'Derogado',
				unconstitucional: 'Inconstitucional',
				highlight: 'Destacado',
				recommendation: 'Recomendaciones',
				ementa: 'Ementa',
				section: 'Paragraph',
				clause: 'Clause',
				abstract: 'Resumen de resumen',
				spacing: 'Espaciado',
				image: 'Imagen'
			}
		}



};
module.exports = I18n;