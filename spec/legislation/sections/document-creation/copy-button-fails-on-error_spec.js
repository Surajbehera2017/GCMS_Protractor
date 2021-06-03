var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var jiraNumber='GCMSQABANG-3311';
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

	it('Verify copy button fails functionality.GCMSQABANG-3311', function () {

		var documentDisplayPage = LegislationDocumentDisplayPage;

		//Verify copy fails on error
		documentDisplayPage.clickCopyButton();
		documentDisplayPage.selectcode(loadedData.document_code_rcl);
		documentDisplayPage.enterYear(loadedData.year_1);
		documentDisplayPage.enterNumber(loadedData.numberToEnter_1);
		documentDisplayPage.clickCopyOnCopyDocPopup();
		expect(documentDisplayPage.errorMessageCopyDoc()).toEqual(loadedData.errorMessageOnDuplicate);

	});

});