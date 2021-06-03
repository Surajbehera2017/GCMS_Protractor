var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1585';
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
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


	/*GCMSQABANG-1585
	 * 02 - Original Text Layout for loading PDF and already has original text
	 */
		it('Original Text Already has pdf.'+jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		var pdfIcon = originaltextpage.isPDFIconDisplayed();
		expect(pdfIcon).toEqual(true);
		
		var removeButton = originaltextpage.isRemoveButtonDisplayed();
		expect(removeButton).toEqual(true);
		
		var displayTitle = originaltextpage.isOriginalTextPDFTitleDisplayed();
		expect(displayTitle).toEqual(true);
	});
});







