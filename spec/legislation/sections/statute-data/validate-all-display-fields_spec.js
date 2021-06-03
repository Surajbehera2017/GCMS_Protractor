var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

//var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var section = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var legisDocEditPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
//var loadedData = testData.legislation.sections.statutedata;

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2993';
var testData = require('../../../../test-data/Jira_TestData/Statute_Data/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Statute Data', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocEditPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		section.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	afterEach(function () {});

	it('Display Legislative Body in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Legislative Body","Organo emisor","Órgão Emissor"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.getTextField("").then(function (result) {
			
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Statute Type in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Statute Type","Rango","Tipo Normativo"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		browser.sleep(1000);
		section.getTextField(loadedData.typeStatute).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Statute Note in Statute Data Section.'+jiraNumber, function () {
		if(params.BU == 'gulf'){
			console.log("Statue Note field is not present in gulf")
		}
		else{
		browser.waitForAngular();

		var expectedName = ["Statute Note","Nota-Rango","Nota"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.getTextField(loadedData.statuteNote).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	}
	});

	it('Display Statute Plural in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();
		section.expandableEdit.expand();
		expect(section.statutePluralDisplayed()).toEqual(true);
	});

	it('Display Statute_Connector in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Connector","Conector","Connector"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.clickAddStatuteType();
		expect(section.statuteConnectorDisplayed()).toEqual(true);
		//common function not supporting, so using specific function
		section.statuteConnectorTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Provision Date in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Provision Date","Fecha de Disposición","Data de Assinatura"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		//provision date functionality is not supported by common function getTextField, so using provisionDateTitle() 
		section.provisionDateTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				console.log(expectedName[row]+"   "+result);
				if(expectedName[row] == result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Provision Date Connector in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Connector","Conector","Connector"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.clickAddProvisionDate();
		expect(section.provisionDateConnectorDisplayed()).toEqual(true);
        //common function not supporting, so using specific function
		section.provisionDateConnectorTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				//console.log(expectedName[row]+"   "+result);
				if(expectedName[row] == result){
					fieldDisplayed = true;
					//console.log("inside if");
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Abbreviation in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Abbreviation","Abreviatura","Abreviatura"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.getTextField(loadedData.abbreviation).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Alias in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Alias","Alias","Apelido"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		if(params.BU == 'gulf'){

			section.getTextField(loadedData.aliasMultilang_1).then(function (result) {
				for (var row = 0; row < expectedName.length; row++) {
					if(expectedName[row] === result){
						fieldDisplayed = true;
						break;
					}
				}
				expect(fieldDisplayed).toEqual(true);
				expect(section.aliasInputDisplayed()).toEqual(true);
			});

		} else{
		section.getTextField(loadedData.aliasMultilang).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
			expect(section.aliasInputDisplayed()).toEqual(true);
		});
	}
	});

	it('Display VID_Ranking in Statute Data Section.'+jiraNumber, function () {
		if(params.BU == 'gulf'){
			console.log("VID Ranking field is not present in gulf")
		} else{
		browser.waitForAngular();

		var expectedName = ["Vid-Ranking","Clasificación VID","Ranking VID"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.getTextField(loadedData.vidRanking).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
			expect(section.vidRankingInputDisplayed()).toEqual(true);
		});
	}
	});

	it('Display Keyword in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Main-Keyword","Voz","Palavra Chave"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.getTextField(loadedData.keyword).then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
			expect(section.keywordInputDisplayed()).toEqual(true);
		});
	});

	it('Display Summary Abstract in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Summary Abstract","Resumen","Resumo Abstract"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		//Summary Abstract functionality is not supported by common function getTextField, so using numberTitle() 
		section.summaryAbstractTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
			expect(section.summaryAbstractInputDisplayed()).toEqual(true);
		});
	});

	it('Display Number Prefix label in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Legislative Number","Número","Número","Number"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
	 //	Display Number Prefix label functionality is not supported by common function getTextField, so using numberTitle() 
		section.numberTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

	it('Display Number N in Statute Data Section.'+jiraNumber, function () {

		browser.waitForAngular();
		section.expandableEdit.expand();
		expect(section.isFieldDisplayedUsingId(loadedData.Nproperty)).toEqual(true);
	});

	it('Display Number Note in Statute Data Section.'+jiraNumber, function () {
		if(params.BU == 'gulf'){
			console.log("Number Note field is not present for statue data in gulf")
		}else{
		browser.waitForAngular();
		section.expandableEdit.expand();
		expect(section.isFieldDisplayedUsingId(loadedData.noteproperty)).toEqual(true);
		}
	});

	it('Display Number Year in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();
		section.expandableEdit.expand();
		expect(section.isFieldDisplayedUsingId(loadedData.yearproperty)).toEqual(true);
	});

	it('Display Number Model in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();
		section.expandableEdit.expand();
		expect(section.isFieldDisplayedUsingId(loadedData.modelproperty)).toEqual(true);
	});

	it('Display Number Connector in Statute Data Section.'+jiraNumber, function () {
		browser.waitForAngular();

		var expectedName = ["Connector","Conector","Connector"];
		var fieldDisplayed = false;
		section.expandableEdit.expand();
		section.clickAddNumber();
		//Number Connector functionality is not supported by common function getTextField, so using numberConnectorDisplayed() 
		expect(section.numberConnectorDisplayed()).toEqual(true);

		section.numberConnectorTitle().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if(expectedName[row] === result){
					fieldDisplayed = true;
					break;
				}
			}
			expect(fieldDisplayed).toEqual(true);
		});
	});

});
