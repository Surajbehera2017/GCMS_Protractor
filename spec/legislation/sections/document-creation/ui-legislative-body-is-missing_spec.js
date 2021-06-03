var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var jiraNumber = 'GCMSQABANG-3275';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/'+ jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var generalDataSection = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');



describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify error message if legislative body is not selected for Legislation.GCMSQABANG-3275', function () {

		var page = LegislationDocumentEditionPage;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		//save marginal before add
		var actualMarginal = documentDisplayPage.getMarginalNumber();

		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.enterYear(loadedData.year);
		documentDisplayPage.clickcalculate();
		documentDisplayPage.clickadd();

		//Enter all mandatory fields except 'legislative body'
		//(enter all mandatory fields before the occurance of this one)

		//Enter mandatory fields - general data
		generalDataSection.expandableEdit.expand();
		//Select 'Legislation' as document type
		generalDataSection.selectDocumentTypeFromComboBox(loadedData.document_type);
		generalDataSection.jurisdictionSelect();
		generalDataSection.jurisdictionSelectOption(loadedData.jurisdiction);
		generalDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//click create & verify legislative body error message
		page.clickCreate();
		var firstError = page.getFirstSaveErrorMessage();
		expect(firstError).toEqual(loadedData.error_msg);

	});

});