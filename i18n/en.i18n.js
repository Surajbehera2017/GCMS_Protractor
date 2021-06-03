var I18n = {
		loginPage: {
			title: 'Welcome to WIP module',
			empty_credentials_error: 'Username and password fields must be fulfilled.',
			invalid_credentials_error: 'Login Error'
		},
		wipPage: {
			title: 'GCMS: WIP',
			alternateTitle: 'GCMS: WIP'
		},
		grantsSubsidies:{
			noEntriesFoundMsg: '(0)',
			subjectOfTheGrant: 'Subject of the grant',
			beneficiariesFieldText: 'Beneficiaries'
		},
		legisDocDisplay: {
			title: "Legislation Document Detail - GCMS 2.0",
			PrintPagetitle: "Print/Report Generation",
			subMessagetitle: "Operation carried out successfully",
			doc12170616title:"RCL\1997\136"
		},
		documentType: {
			legislation: "Legislation",
			spa: "Spanish",
			cat: "Catalan",
			gal: "Galician",
			val: "Valencian"
		},
		productWorkbench: {
			no_results: "No Entries Found"
		},

		documentDetails: {
			displaymessage: "This document/language does not have text-structure\n" +
			"You may add structure and text to this document by Load XML file in Original" +
			" Text(tab)",
			exportbuttontext: "Texts",
			displaymessageinnerhtml: "\n    <div class=\"header ng-scope\" translate=\"\">This "+ "document/language does not have text-structure</div>\n"+
			"    <div class=\"body ng-binding\">"+
			"You may add structure and text to this document by Load XML file in "+
			"<button class=\"btn btn-link ng-scope\" type=\"button\" ng-click=\"rightPanel.goToOriginalTextTab()\" translate=\"\">Original Text(tab)</button>"+
			"</div>\n"
		},



		dateInForce: {
			dateInForce: "Validity/End of Validity",
			effectiveType: "Effective Type",
			ineffectiveDate: "Ineffective Date",
			ineffectiveNote: "Ineffective Note",
			popupTitle: "Ineffective Note"

		},

		thesaurussection: {
			value1: "ACTIVOS FINANCIEROS (1)",
			value2: "AMBITOS (2)",
			value3: "EMPRESAS (1)",
			value4: "INDICE COMUN (4)",
			value5: "TRIBUTOS Y OBLIGACIONES (1)"
		},
		relationshipbutton: {
			import: "Import",
			addsingle: "Add Single",
			addmultiple: "Add Multiple"
		},
		packaging: {
			texts: "Texts",
			noText: "This document does not have an associated text"
		},
		relationshipwindow: {
			relationship: "RELATIONSHIPS",
			errormessage: "RelationshipcannotbedeletedTherelationshipisthelastandyouhavetodeletethelayer."
		},
		relationshipsection: {
			adddocumentsuccess: "Operation carried out successfully",
			add_days_error_message:"It is only possible to create relationships between versions or full articles",
			affected_marginal_error:"**- Los ambitos de los marginales Afecta-Afectado no son correctos para el tipo de relacion seleccionado."
		},

		documentstructure: {
			structurecreatedmessage: "Operation carried out successfully",
			duplicatedateerror: "A structure already exists with the same date.",
			structuredeletesuccess: "Operation carried out successfully",
			deleteunitwithversions: "**- The node can not be deleted because there are texts which rely on this one.",
			deleteunitwithchildren: "**- The node can not be deleted because it has children",
			deleteversionwithrelationships:"Group text has relationships related",
			duplicateentryinsertmessage: 'An attempt has been made to insert a duplicate value in a field',
			documentstructuretabname: "DOCUMENT STRUCTURE",
			documenttexttabname: "DOCUMENT TEXT",
			structureactionsmenuoptions: "Expand All,Collapse All,Import from XML," +
			"Add new unit from editor,Add new unit from XML editor," +
			"Duplicate Structure,Export Structure (PDF)," +
			"Export Structure (RTF),Delete",
			elementselectoroptionsinuniteditor: "Date,Note,Text note,Repeal,Unconstitucional,Highlight," +
			"Recommendations,Recommendation,Ementa,Section,Clause," +
			"Abstract of abstract,Spacing,Image",
			elementselectoroption: {
				date: 'Date',
				note: 'Note',
				textnote: 'Text note',
				repeal: 'Repeal',
				unconstitucional: 'Unconstitucional',
				highlight: 'Highlight',
				recommendation: 'Recommendation',
				ementa: 'Ementa',
				section: 'Section',
				clause: 'Clause',
				abstract: 'Abstract of abstract',
				spacing: 'Spacing',
				image: 'Image'
			}

		}

};
module.exports = I18n;