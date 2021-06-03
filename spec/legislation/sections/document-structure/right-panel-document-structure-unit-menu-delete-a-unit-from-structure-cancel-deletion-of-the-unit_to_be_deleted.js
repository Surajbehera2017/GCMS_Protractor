var params = browser.params;
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(testData.legislation.sections.document_structure.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 * 01 - Cancel deletion of  the unit
	 */
	it('Delete Unit Cancel', function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnLastUnitAndSelectDelete();
		//Verify Delete pop-up is displayed
		var deletePopUp = rightpanelpage.isDeleteUnitPopUpDisplayed();
		expect(deletePopUp).toEqual(true);
		//Click cancel button & verify pop-up closed
		rightpanelpage.clickCancelButtonInDeleteUnitPopUp();
		expect(rightpanelpage.isDeleteUnitPopUpDisplayed()).toEqual(false);
		
	});
	
});







