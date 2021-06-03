var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var corrigendasSection = require('../../../../po/document/display/legis/sections/corrigendas/corrigendas.po.js');
var loadedData = testData.legislation.sections.corrigendas;

describe('Corrigendas', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = true;
		/*
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		corrigendasSection.urlLoad(params.valid_username,params.valid_password);
        browser.waitForAngular();
		 */
		//Login to GCMS 1.0 Page
		var loginPage = new LoginPage();
		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
				loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {  
				});
			});
		});	
	});

	// Method: TC02 - Consolidation result-list - Warnings - Ammeding document - Legislation - Pending corrigendas
	it('should Ammeding document_Legislation_Pending corrigendas ',function(){

		browser.waitForAngular();
		corrigendasSection.clickonLegislation();
		corrigendasSection.clickonCorrigendas();
		corrigendasSection.clickonSearch();
		corrigendasSection.clickonFirstDropdown();
		corrigendasSection.selectFirstDropdown(4);
		browser.waitForAngular();
		corrigendasSection.clickonSecondDropdown();
		corrigendasSection.selectSecondDropdown(7);
		browser.waitForAngular();
		corrigendasSection.clickonThirdDropdown();
		corrigendasSection.selectThirdDropdown(3);
		browser.waitForAngular();
		corrigendasSection.enterText(loadedData.text);
		corrigendasSection.enterYear(loadedData.year);
		corrigendasSection.enterNumber(loadedData.number);
		corrigendasSection.clickonSearchButton();

	});

});