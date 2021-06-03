var document = {
	"publicaciones": {"list": []},
	"aliasMultilang": {"fieldName": "ALIAS", "list": []},
	"abstractMultilang": {
		"officialAbstracts": {
			"list": [{
				"code": "Español",
				"description": "<resumen-leg><resumen oficial=\"s\"><parrafo>This is a test of a document with Editorial Note</parrafo></resumen></resumen-leg>"
			}]
		},
		"nonOfficialAbstracts": {"list": []},
		"officialAbstractsHtml": {
			"list": [{
				"code": "Español",
				"description": "<DIV style=\"width: 10%; float: right;\"> </DIV><P align=\"justify\" style=\"width: 90%;\">This is a test of a document with Editorial Note</P>"
			}]
		},
		"nonOfficialAbstractsHtml": {"list": []}
	},
	"htmlTextNotaRedaccion": {
		"list": [{
			"code": "Español",
			"description": "<BLOCKQUOTE><FONT size=\"-1\" color=\"gray\"><DIV style=\"width: 10%; float: right;\"> </DIV><P align=\"justify\" style=\"width: 90%;\">This is a test of a document with Editorial Note</P></FONT></BLOCKQUOTE>"
		}]
	},
	"htmlTextNotaRedaccionPE": {
		"list": [{
			"code": "Español",
			"description": "<DIV style=\"width: 10%; float: right;\"> </DIV><P align=\"justify\" style=\"width: 90%;\">This is a test of a document with Editorial Note</P>"
		}]
	},
	"notaRedaccionMultilang": {
		"fieldName": "",
		"list": [{
			"code": "Español",
			"description": "<nota-red><parrafo>This is a test of a document with Editorial Note</parrafo></nota-red>"
		}]
	},
	"notaAplicaPE": false,
	"notaRedaccionPEMultilang": {
		"fieldName": "NBDA",
		"list": [{
			"code": "Español",
			"description": "<nota-bda><parrafo>This is a test of a document with Editorial Note</parrafo></nota-bda>"
		}]
	},
	"llevaPDF": false,
	"marginal": {
		"nmp": 3,
		"nma": 2030,
		"nmn": 0,
		"nmt": "",
		"descripcionNmp": "LEG",
		"idAmbito": 1,
		"idMarginal": 0,
		"nmap": 0,
		"nmnp": 0,
		"nmpp": 0,
		"numeroMarginal": "LEG\\2030\\0"
	},
	"ambito": {"code": 12085, "description": "Estatal"},
	"tipoDisposicion": {"code": "4", "description": ""},
	"vozMultilang": {"fieldName": "VOZ", "list": [{"code": "Español", "description": "Prensa"}]},
	"analista": {},
	"abreviatura": {"code": "", "description": ""},
	"abbreviationMultilang": {"fieldName": "", "list": []},
	"publicacionesOficiales": {
		"list": [{
			"fecha": "26/02/2015",
			"numero": "49/2015",
			"numeroPagina": "",
			"orden": 1,
			"ordenDisposicion": "",
			"principal": true,
			"publicacion": {"code": 97, "description": "BOE"},
			"idDatosPublicacion": "155383156",
			"serie": ""
		}]
	},
	"organosEmisores": {
		"list": [{
			"organoEmisor": {"code": 5, "description": "Administración Central Telégrafos"},
			"orden": "1"
		}]
	},
	"rangos": {
		"list": [{
			"fechas": {
				"list": [{
					"fecha": "23/09/2015",
					"idFechaDisposicion": "",
					"orden": "1",
					"conector": "",
					"formatoFecha": {"code": "3", "description": "dd/MM/yyyy"}
				}]
			},
			"numeros": {
				"list": [{
					"idNumeroDisps": "",
					"numd": "",
					"numda": "",
					"numdn": "200",
					"numdnp": "",
					"numdnt": "",
					"orden": "1",
					"conector": "",
					"modeloComposicion": {"code": "5", "description": "NUM"},
					"numdnpMultilang": {"fieldName": "NUMDNP", "list": [{"code": "Español", "description": ""}]},
					"numdntMultilang": {"fieldName": "NUMDNT", "list": [{"code": "Español", "description": ""}]}
				}]
			},
			"plural": false,
			"rango": {"code": 72, "description": "Ley"},
			"notaRangoMultilang": {"fieldName": "NOTARANGO", "list": []},
			"rangoMultilang": {"fieldName": "", "list": []},
			"idDisposicion": "",
			"idDatosDisposicion": "",
			"conector": "",
			"orden": "1"
		}]
	},
	"temporalidad": {"code": "", "description": ""},
	"temporalidadMultilang": {"fieldName": "", "list": []},
	"tipoTramitacion": {"code": "", "description": ""},
	"comisionCompetente": {"code": "", "description": ""},
	"legislatura": {"code": "", "description": ""},
	"documentNameMultilang": {"fieldName": "", "list": []},
	"bloqueado": false,
	"propietarios": {"listaPropietarios": []},
	"autorizaciones": {
		"listaAutorizaciones": [{
			"tipoAutorizacion": {"code": "", "description": ""},
			"autorizacionesEsp": {"listaAutorizacionesEsp": []}
		}]
	},
	"productRelevances": {"listProductRelevances": []},
	"baseLanguage": {"code": "8", "description": "Español"},
	"languages": [{"idLang": 8, "longname": "Español", "oficial": true}],
	"inoperante": false,
	"areas": {"list": [{"orden": 1, "principal": "S", "texto": "Civil", "idArea": 5}]},
	"grant": {
		"subjectMultilang": {"fieldName": "SUBJECT", "list": [{"code": "Español", "description": ""}]},
		"granteeMultilang": {"fieldName": "GRANTEE", "list": [{"code": "Español", "description": ""}]}
	},
	"fechaAnalisis": "23/09/2015",
	"nomFichRT": "",
	"relevantChange": null,
	"alias": null,
	"voz": "",
	"vID": "",
	"resumen": "",
	"fechaEntradaEnVigor": "13/10/2015",
	"idDisposicion": "",
	"notaInterna": "This is a test of a document with Editorial Note"
};

module.exports = document;