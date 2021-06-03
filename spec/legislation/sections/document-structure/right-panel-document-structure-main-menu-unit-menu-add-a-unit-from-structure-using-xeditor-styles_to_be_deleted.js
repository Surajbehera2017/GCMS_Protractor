// var params = browser.params;
// var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
// var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

// var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_styles;

// describe('Document-structure', function () {

// 	beforeEach(function () {

// 		browser.ignoreSynchronization = false;
// 		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

// 		legisDocDisplayPage.get(loadedData.marginal_id);
// 		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

// 	});


// 	/*
// 	 * TC04 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Styles
// 	 * NB: Only verifying the style options are present. Functionality of each style is covered in different tests.
// 	 */
// 	it('Add Unit Unit Menu Xeditor Styles', function () {

// 		browser.waitForAngular();
// 		rightpanelpage.clickDocumentStructure();
// 		browser.waitForAngular();
// 		rightpanelpage.rightClickOnUnitAndSelectAdd(loadedData.unit);
// 		browser.sleep(4000);
// 		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
// 		expect(addPopUp).toEqual(true);
// 		//Steps - belongs to iFrame
// 		browser.switchTo().frame('legistext'); // give id of iframe
// 		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
// 		rightpanelpage.clickOnFormatinPoup();
// 		//Verify each style option is present
// 		//NB: Only verifying the style options are present. Functionality of each style is covered in different tests.
// 		expect(rightpanelpage.isDisplayedBoldButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedItalicButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedUnderlineButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedOverlineButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedBoldItalicButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedStrikethroughButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedSubscriptButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedSuperscriptButtonInFormatTabInUnitPopUp()).toEqual(true);
		
// 		browser.switchTo().defaultContent();
// 		//Click Cancel Button & Verify pop-up is closed
// 		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		
// 	});
	
// 	/*
// 	 * TC05 -  Right Panel - Document Structure - Main Menu - Add a Unit from Structure using Xeditor - Styles
// 	 * NB: Only verifying the style options are present. Functionality of each style is covered in different tests.
// 	 */
// 	it('Add Unit Main Menu Xeditor Styles', function () {

// 		browser.waitForAngular();
// 		rightpanelpage.clickDocumentStructure();
// 		browser.waitForAngular();
// 		rightpanelpage.clickStructureActions();
// 		rightpanelpage.clickAddNewUnitFromEditorInStructureActionsMenu();
		
// 		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
// 		expect(addPopUp).toEqual(true);
// 		//Steps - belongs to iFrame
// 		browser.switchTo().frame('legistext'); // give id of iframe
// 		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
// 		rightpanelpage.clickOnFormatinPoup();
// 		//Verify each style option is present
// 		//NB: Only verifying the style options are present. Functionality of each style is covered in different tests.
// 		expect(rightpanelpage.isDisplayedBoldButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedItalicButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedUnderlineButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedOverlineButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedBoldItalicButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedStrikethroughButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedSubscriptButtonInFormatTabInUnitPopUp()).toEqual(true);
// 		expect(rightpanelpage.isDisplayedSuperscriptButtonInFormatTabInUnitPopUp()).toEqual(true);
		
// 		browser.switchTo().defaultContent();
// 		//Click Cancel Button & Verify pop-up is closed
// 		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		
// 	});
	
// });







