var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's

var jiraNumber='GCMSQABANG-3279';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/' + jiraNumber + '.js');


//var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');

describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify add button functionality.GCMSQABANG-3279.'+jiraNumber, function () {

		var documentDisplayPage = LegislationDocumentDisplayPage;
		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.enterYear(loadedData.year);
		documentDisplayPage.enterNumber(loadedData.numberToEnter);
		documentDisplayPage.clickadd();
		expect(documentDisplayPage.getMarginalNumber()).toEqual(loadedData.code + loadedData.year + '\\' + loadedData.numberToEnter);
	});

});