var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var jiraNumber = 'GCMSQABANG-1584';
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


	/*GCMSQABANG-1584
	 * 01 - Original Text Layout for loading the first original text
	 */

		it('Original Text First text.'+jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.isDisplayImportPDF();
		var displayTitle = originaltextpage.isOriginalTextPDFTitleDisplayed();
		expect(displayTitle).toEqual(true);
		
	});
});







