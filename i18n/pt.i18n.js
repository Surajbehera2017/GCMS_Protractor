var I18n = {
		loginPage: {
			title: 'Bem-vindo à aplicação de WIP',
			empty_credentials_error: 'Os campos utilizador e password devem estar informados',
			invalid_credentials_error: 'Erro de login'
		},
		wipPage: {
			title: 'GCMS: WIP'
		},
		legisDocDisplay:{
			title: "Legislation Document Detail - GCMS 2.0"
		},
		grantsSubsidies:{
			noEntriesFoundMsg: 'No Entries Found'
		},
		documentDetails: {
			displaymessage: "Este documento não tem texto associado",
			exportbuttontext: "Textos"
		},
		productWorkbench:{
			no_results: "No se encontraron entradas"
		},

		relationshipbutton:{
			import: "Importar",
			addsingle: "Add Single",
			addmultiple: "Add Multiple"
		},

		relationshipwindow: {
			relationship: "RELATIONSHIPS",
			errormessage:"Não é possível apagar a relação. "
		},
		relationshipsection: {
			adddocumentsuccess: "Operação realizada com sucesso",
			add_days_error_message:"Só é possível criar relações entre as versões ou artigos completos",
			affected_marginal_error:"**- Los ambitos de los marginales Afecta-Afectado no son correctos para el tipo de relacion seleccionado."
		},
		documentstructure: {
			structurecreatedmessage: "Operação realizada com sucesso",
			duplicatedateerror: "Um modelo já existe com a mesma data.",
			structuredeletesuccess: "Operação realizada com sucesso",
			deleteunitwithversions: "O nodo não pode ser apagado porque existem textos que só dependem deste nodo",
			deleteunitwithchildren: "Não é possível apagar um nodo que tenha filhos",
			deleteversionwithrelationships:"A capa tem relações associadas",
			duplicateentryinsertmessage: 'Tentou-se inserir um valor duplicado num campo',
			documentstructuretabname: "ESTRUTURA",
			documenttexttabname: "TEXTO",
			structureactionsmenuoptions: "Expandir,Importar XML,Adicionar Nova Unidade (Editor)," +
			"Adicionar Nova Unidade (XML Editor),Copiar," +
			"Exportar Estrutura (PDF),Exportar Estrutura (RTF),Apagar",
			elementselectoroptionsinuniteditor: "Data,Chamada a nota,Texto de nota,Revogação por nível," +
			"Inconstitucional,Destaque,Recomendações,Recomendação,Ementa," +
			"Paragraph,Clause,Abstract Summary,Espaçamento entre linhas,Imagem",
			elementselectoroption: {
				date: 'Data',
				note: 'Chamada a nota',
				textnote: 'Texto de nota',
				repeal: 'Revogação por nível',
				unconstitucional: 'Inconstitucional',
				highlight: 'Destaque',
				recommendation: 'Recomendações',
				ementa: 'Ementa',
				section: 'Paragraph',
				clause: 'Clause',
				abstract: 'Abstract Summary',
				spacing: 'Espaçamento entre linhas',
				image: 'Imagem'
			}
		}
};
module.exports = I18n;