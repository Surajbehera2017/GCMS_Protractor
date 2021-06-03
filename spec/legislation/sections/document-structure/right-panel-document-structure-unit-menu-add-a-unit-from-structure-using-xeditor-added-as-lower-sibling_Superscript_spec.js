var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber='GCMSQABANG-1627';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_lowersibling;
var loadedData = testData[params.env][params.BU]

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
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.sibling_unit_superscript,'Original');
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		//click ok button
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		browser.sleep(2000);
		//Delete unit
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.sibling_unit_superscript);
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		//click ok button
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		
	});
	


	/*
	 * GCMSQABANG-1627: TC16 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Superscript
	 */
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Superscript.'+jiraNumber, function () {
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
		rightpanelpage.clickRadioButtonInAddUnitPopUp('as an lower sibling');
		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.sibling_unit_superscript);
		
		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		rightpanelpage.clickOnTabInsideVisualEditor('Format');
		
        browser.switchTo().frame('ext-gen1132'); // give id of iframe
        rightpanelpage.writeRubricInAddUnitPopUp(rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(editorial_rubric_text);

		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(paragraph_two);
		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		//Select the text
		rightpanelpage.selectAText(loadedData.data_type);
		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		
		//Click Overline button
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		rightpanelpage.changeTheWordFormat('superscript2');
		
		//Click Edit title
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.switchTo().frame('ext-gen1132');
		rightpanelpage.clickonSpecificDataType('titulooriginal');
		
		//Write title fields
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; 
		rightpanelpage.writeFieldInInnerTitleEditPopUp(title_text,19);
		rightpanelpage.clickOnInsertorCancelInPastePopUpWindow('Accept');
		
		rightpanelpage.selectOptionFromDropDown('definitivo*','definitivo','N');
		browser.switchTo().defaultContent();
		
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal('Save');
		browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		browser.driver.ignoreSynchronization = false; 
		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();
        browser.sleep(1000);
		infoMsg.then(function(text) {
			if(text===''){ //Save successful. No info message. Popup closes automatically
				expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
				browser.sleep(5000);
				browser.waitForAngular();
				//Check new data is displayed in edit view - xml
				rightpanelpage.rightClickOnOrignalAndXmlLayer(loadedData.sibling_unit_superscript,'Original');
				browser.sleep(5000);
				browser.waitForAngular();
				//Verify Superscript text tag for paragraph_two
				var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
				browser.sleep(2000);
				//expect(newXMLText).toContain("<superindice>"+paragraph_two+"</superindice>");
				expect(newXMLText).toContain("<parrafo>"+paragraph_two+"</parrafo>");
				
			}
			else{//info message displayed. Duplicate entry for unit, hence cannot save. expected.
				console.log('Superscript is not verified. Given unit already exist in structure. Trying to delete it');
				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
				//click on Ok button
				rightpanelpage.clickOnApplyOrCloseButton('ok');
				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
				rightpanelpage.clickOnApplyOrCloseButton('cancelEdition');
			}
			
		});
		
	});


	
});







