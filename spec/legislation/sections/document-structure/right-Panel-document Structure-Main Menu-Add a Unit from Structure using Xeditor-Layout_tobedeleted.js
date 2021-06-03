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
	 * TC01 - Right-Panel-Document Structure-Main Menu-Add a Unit from Structure using Xeditor-Layout
	 */
	it('Add Unit Xeditor Layout', function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.rightClickOnLastUnitAndSelectAdd();
		
		//Verify pop-up displayed
		var popup = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(popup).toEqual(true);
		//Verify DocumentText tab exist
		var docTextTab = rightpanelpage.isAddUnitPopUpHasDocumentTextTab();
		expect(docTextTab).toEqual(true);
		//Verify Unit details Input fields
		var unitDetails = 
			rightpanelpage.isUnitIDDisplayedInAddUnitPopUp()
			&& rightpanelpage.isComplementDisplayedInAddUnitPopUp()
			&& rightpanelpage.isSuperiorLevelDisplayedInAddUnitPopUp()
			&& rightpanelpage.isBodyFieldDisplayedInAddUnitPopUp();
		expect(unitDetails).toEqual(true);
		//verify tree image & radios
		var treeRadioAndImage =
			rightpanelpage.isUnitTreeDisplayedInAddUnitPopUp()
			&& rightpanelpage.isTreeImageDisplayedInAddUnitPopUp();
		expect(treeRadioAndImage).toEqual(true);
		//Verify Save button displayed
		var savebutton = rightpanelpage.isAddUnitPopUpHasSaveButton();
		expect(savebutton).toEqual(true);
		//Click Cancel Button
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		
	});
	
	/*
	 * TC07 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Cancel button
	 */
	it('Add Unit Xeditor Cancel Button', function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.rightClickOnLastUnitAndSelectAdd();
		//Verify pop-up displayed
		var popup = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(popup).toEqual(true);
		//Click Cancel Button & Verify pop-up is closed
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
		
	});
	
});







