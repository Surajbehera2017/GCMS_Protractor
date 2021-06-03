var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1583';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var originaltextpage = require('../../../../po/document/edition/legis/sections/original-text/original-text.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		originaltextpage.urlLoad(params.valid_username,params.valid_password);

	});

	/*
	 * Right Panel - Original Text - Delete Original -cancel
	 */
	it('Delete Original Cancel.'+jiraNumber, function () {
	
		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.isPDFIconDisplayed();
		originaltextpage.isRemoveButtonDisplayed();
		browser.sleep(2000);
		originaltextpage.clickRemoveButtonForFirstItem();
		browser.sleep(2000);
		var popup = originaltextpage.isConfirmationMessageDisplayed();
		expect(popup).toEqual(true);
		
		originaltextpage.clickCancelButton();
		browser.sleep(2000);
	});
});







