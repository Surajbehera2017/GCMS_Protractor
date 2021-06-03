var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_lowersibling;

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});

	afterEach(function () {
		
		//Delete the Unit created for this test
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//delete version
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.sibling_unit_italic,'Original');
		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		rightpanelpage.clickOnButtonForGlobal();
		browser.sleep(2000);
		//Delete unit
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectDelete(loadedData.sibling_unit_italic);
		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		rightpanelpage.clickOnButtonForGlobal();
		
	});
	


	/*
	 * TC10 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - italic
	 */
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Italic', function () {
		//Set up data
		/*This test case is for verifying text styles. 
		Hence using hard coded data. Changing data may require code changes 
		(since mouse actions are implemented for select operation)
		*/
		var paragraph_one = "Paragraph one"; //Dont change para 1
		var paragraph_two = "Paragraph two"; //Dont change para 2
		var rubric_text = "Rubric";
		var editorial_rubric_text = "Editorial Rubric";
		var title_text ="titulo";
		
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loadedData.unit);
		browser.sleep(4000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		//select the Lower sibling radio. 
		rightpanelpage.clickAsALowerSiblingRadioButtonInAddUnitPopUp();
		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.sibling_unit_italic);
		
		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		rightpanelpage.clickOnFormatinPoup();
		
        browser.switchTo().frame('ext-gen1132'); // give id of iframe
        rightpanelpage.writeRubricInAddUnitPopUp(rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(editorial_rubric_text);

		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(paragraph_two);
		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		//Select the text
		rightpanelpage.selectFirstLineTextInParagraphTwoInAddUnitPopUp();
		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		
		//Click italic button
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		rightpanelpage.clickItalicButtonInFormatTabInUnitPopUp();
		
		//Click Edit title
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.switchTo().frame('ext-gen1132');
		rightpanelpage.clickEditTitleInAddUnitPopUp();
		
		//Write title fields
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; 
		rightpanelpage.writeFieldInInnerTitleEditPopUp(title_text,19);
		rightpanelpage.clickAcceptInnerTitleEditPopUp();
		
		rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
		browser.switchTo().defaultContent();
		
		//Click Save button
		rightpanelpage.clickSaveButtonInModalUnitEditPopUp();
		browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		browser.driver.ignoreSynchronization = false; 
		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		infoMsg.then(function(text) {
			if(text===''){ //Save successful. No info message. Popup closes automatically
				expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
				browser.sleep(5000);
				browser.waitForAngular();
				//Check new data is displayed in edit view - xml
				rightpanelpage.rightClickOnVersionAndSelectEditLayerXML(loadedData.sibling_unit_italic,'Original');
				browser.sleep(5000);
				browser.waitForAngular();
				//Verify Italic text tag for paragraph_two
				var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
				
				expect(newXMLText).toContain("<en-origen estilo-fuente=\"cursiva\">"+paragraph_two+"</en-origen>");
			}
			else{//info message displayed. Duplicate entry for unit, hence cannot save. expected.
				console.log('Italic is not verified. Given unit already exist in structure. Trying to delete it');
				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
				rightpanelpage.clickOnButtonForGlobal();
				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
				rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
			}
			
		});
		
	});


	
});







