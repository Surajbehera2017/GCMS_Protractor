var params = browser.params;
var jiraNumber = 'GCMSQABANG-1611';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});


	/*
	 * TC10 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - Cancel button
	 */
	it('Add Unit XML Cancel Button.'+ jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.rightClickOnOrignalAndXmlLayer(loadedData.unit,'Original');
		browser.waitForAngular();
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalWindowDisplayed();
		expect(popup).toEqual(true);
		//Click Cancel Button
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		//verify pop-up closed
		browser.sleep(7000);
		var clickcancel = rightpanelpage.isModalWindowDisplayed();
		expect(clickcancel).toEqual(true);
	});

	/*
	 * TC11 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - X button
	 */
	it('Add Unit XML Close X.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.rightClickOnOrignalAndXmlLayer(loadedData.unit,'Original');
		browser.waitForAngular();
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalWindowDisplayed();
		expect(popup).toEqual(true);
		//Click Close (X) Button
		rightpanelpage.clickOnApplyOrCloseButton('close');
		//verify pop-up closed
		browser.sleep(7000);
		var clickClose = rightpanelpage.isModalWindowDisplayed();
		expect(clickClose).toEqual(false);

	});

});







