var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's


var jiraNumber='GCMSQABANG-3306';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/' + jiraNumber + '.js');


var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];
describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify add button fails on duplicate error.GCMSQABANG-3306.'+jiraNumber, function () {

		var documentDisplayPage = LegislationDocumentDisplayPage;
		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code_rcl);
		documentDisplayPage.enterYear(loadedData.year_1);
		documentDisplayPage.enterNumber(loadedData.numberToEnter_1);
		documentDisplayPage.clickadd();
		expect(documentDisplayPage.errorMessageCopyDoc()).toEqual(loadedData.errorMessageOnDuplicate);

	});

});