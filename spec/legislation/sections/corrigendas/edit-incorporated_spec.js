var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var corrigendas = require('../../../../po/document/display/legis/sections/corrigendas/corrigendas.po.js');
var loadedData = testData.legislation.sections.corrigendas;

describe('Corrigendas', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		corrigendas.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	// Method: TC04 - Corrigenda Edit button in table -Edit incorporated
	it('Edit button in table -Edit incorporated',function(){

		browser.waitForAngular();
		corrigendas.clickViewAllLink();
		browser.waitForAngular();
		browser.ignoreSynchronization = true; //going to non angular page
		corrigendas.selectAndEditCorrigendas();
		corrigendas.clickonCancelButtonInEdit();
		browser.ignoreSynchronization = false; //going to angular page
		expect(corrigendas.displayGlassesButton()).toEqual(true);//verify corrigendas table
	});

});