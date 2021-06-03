var params = browser.params;
var jiraNumber='GCMSQABANG-1616';
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData=testData[params.env][params.BU]


describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});

	afterEach(function () {
		
		// //Delete the Unit created for this test
		// browser.ignoreSynchronization = false;
		// var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		// //delete version
		// legisDocDisplayPage.get(loadedData.marginal_id);
		// rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		// browser.waitForAngular();
		// rightpanelpage.clickDocumentStructure();
		// browser.sleep(4000);
		// rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.sibling_unit_to_add,'Original');
		// rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		// rightpanelpage.clickOnButtonForGlobal();
		// browser.sleep(2000);
		// //Delete unit
		// legisDocDisplayPage.get(loadedData.marginal_id);
		// rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		// browser.waitForAngular();
		// rightpanelpage.clickDocumentStructure();
		// browser.sleep(4000);
		// rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.sibling_unit_to_add);
		// rightpanelpage.clickYesButtonInDeleteUnitPopUp();
		// rightpanelpage.clickOnButtonForGlobal();

		//Delete the Unit created for this test
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//delete version
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.sibling_unit_to_add,'Original');
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		//click Ok button
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		browser.sleep(2000);
		
		//Delete unit
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.sibling_unit_to_add);
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		//click Ok button
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		
	});
	


	/*
	 * TC03 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Added as an upper sibling
	 */
	it('Add Unit Xeditor Unit Menu Added as Upper Sibling.'+jiraNumber, function () {

		var paragraph_one = "Paragraph one"; //Dont change para 1
		var paragraph_two = "Paragraph two"; //Dont change para 2
		var rubric_text = "Rubric";
		var editorial_rubric_text = "Editorial Rubric";
		var title_text ="titulo";
		
		browser.waitForAngular();
		browser.sleep(2000);
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loadedData.unit);
		browser.sleep(4000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		//select the upper sibling radio. 
		rightpanelpage.clickRadioButtonInAddUnitPopUp('as an upper sibling');
		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.sibling_unit_to_add);
		browser.sleep(10000);
		
		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.switchTo().frame('ext-gen1132'); // give id of iframe
        rightpanelpage.writeRubricInAddUnitPopUp(loadedData.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loadedData.editorial_rubric_text);

		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loadedData.paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(loadedData.paragraph_two);
		
		//Click Edit title
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.switchTo().frame('ext-gen1132');
		rightpanelpage.clickonSpecificDataType(loadedData.datatype);
		
		//Write title fields
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; 
		rightpanelpage.writeFieldInInnerTitleEditPopUp(title_text,19);
		rightpanelpage.clickOnInsertorCancelInPastePopUpWindow('Accept');
		
		rightpanelpage.selectOptionFromDropDown(loadedData.final_label,loadedData.final_textbox,loadedData.final_value);
		browser.switchTo().defaultContent();
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal('Save');
		browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		browser.driver.ignoreSynchronization = false; 
		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		infoMsg.then(function(text) {
			if(text===''){ //Save successful. No info message. Popup closes automatically
				expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
				browser.sleep(5000);
				browser.waitForAngular();
				//Check new data is displayed in edit view - xml
				rightpanelpage.rightClickOnOrignalAndXmlLayer(loadedData.sibling_unit_to_add,'Original');
				browser.sleep(5000);
				browser.waitForAngular();
				//Verify all added texts in xml window. Note this works in chrome alone. not in ie
				var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
				expect(newXMLText).toContain(loadedData.rubric_text);
				expect(newXMLText).toContain(loadedData.editorial_rubric_text);
				expect(newXMLText).toContain(loadedData.paragraph_one);
				expect(newXMLText).toContain(loadedData.paragraph_two);
				expect(newXMLText).toContain(loadedData.title_text);
			}
			else{//info message displayed. Duplicate entry for unit, hence cannot save. expected.
				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
				//click on OK button
				rightpanelpage.clickOnApplyOrCloseButton('ok');
				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
				rightpanelpage.clickOnApplyOrCloseButton('cancelEdition');
			}
			
		});
		
		
	});

	
});







