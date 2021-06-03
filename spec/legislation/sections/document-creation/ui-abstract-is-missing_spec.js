var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var statuteDataSection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var generalDataSection = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');



describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify error message if abstract is not provided', function () {

		var page = LegislationDocumentEditionPage;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		//save marginal before add
		var actualMarginal = documentDisplayPage.getMarginalNumber();

		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.enterYear(loadedData.year);
		documentDisplayPage.clickcalculate();
		documentDisplayPage.clickadd();

		//Enter all mandatory fields except 'AbstractData'
		//(enter all mandatory fields before the occurance of this one)

		//Enter mandatory fields - general data
		generalDataSection.expandableEdit.expand();
		generalDataSection.selectDocumentTypeFromComboBox('Legislación');
		generalDataSection.jurisdictionSelect();
		generalDataSection.jurisdictionSelectOption('Estatal');
		generalDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - statute data
		statuteDataSection.expandableEdit.expand();
		statuteDataSection.selectFirstLegislativeBody('Gobierno General Guinea Ecuatorial');
		statuteDataSection.selectFirstStatuteType('Ordenanza');
		statuteDataSection.clickOnAddProvisionDateIcon();
		statuteDataSection.enterMainKeyword();

		//click create & verify abstract error message
		page.clickCreate();
		var firstError = page.getFirstSaveErrorMessage();
		expect(firstError).toEqual('The field abstract is mandatory');

	});

});