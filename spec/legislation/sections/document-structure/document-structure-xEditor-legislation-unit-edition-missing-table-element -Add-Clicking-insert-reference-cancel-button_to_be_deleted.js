var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_unitmenu;

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});

	/*afterAll(function () {
		
		//Delete the Unit created for this test
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//delete version
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.expandUnitInStructure(loadedData.unit);
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.child_unit_to_add,'Original');
		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		rightpanelpage.clickOnButtonForGlobal();
		browser.sleep(2000);
		//Delete unit
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.expandUnitInStructure(loadedData.unit);
		rightpanelpage.rightClickOnUnitAndSelectDelete(loadedData.child_unit_to_add);
		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		rightpanelpage.clickOnButtonForGlobal();
		
	}); */
	
//ALREADY AUTOMATED..THIS IS DUPLICATE

	/*
	 * TC02 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Added as child
	 */
	it('Add Unit Xeditor Unit Menu Added as Child', function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.clickStructureActions();
        rightpanelpage.clickAddXEditorButtonStructureAction();
        browser.waitForAngular();
        rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.child_unit_to_add_2);
        
        browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        
        rightpanelpage.writeRubricInAddUnitPopUp(loadedData.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loadedData.editorial_rubric_text);

		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loadedData.paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(loadedData.paragraph_two);
		
        rightpanelpage.clickEditTitleInAddUnitPopUp();
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; 
		rightpanelpage.writeFieldInInnerTitleEditPopUp(loadedData.title_text_article,19);
		rightpanelpage.clickAcceptInnerTitleEditPopUp();
        browser.waitForAngular();
        
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        
        rightpanelpage.rightClickonTextLorumandSelectFaltaTable();
		var falta = rightpanelpage.isFaltaTableIconDisplayedAnother();
        expect(falta).toEqual(true);
        browser.waitForAngular();
        rightpanelpage.clickFaltaTableIconDisplayedAnother();
        
        
        browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; 
        
        browser.waitForAngular();
        rightpanelpage.clickCancelButtonFaltaTableDialogBox();
        
        
	});
});







