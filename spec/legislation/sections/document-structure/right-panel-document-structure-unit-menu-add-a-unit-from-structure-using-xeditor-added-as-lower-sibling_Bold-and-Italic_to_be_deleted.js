var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_lowersibling;

var jiraNumber1 = 'GCMSQABANG-1622';
var jiraNumber2 = 'GCMSQABANG-1617';
var jiraNumber3 = 'GCMSQABANG-1621';

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});

	/*
	 * TC11 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Bold + Italic
	 */
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Bold and Italic' + jiraNumber1+'.'+jiraNumber2+'.'+ jiraNumber3, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		rightpanelpage.rightClickOnUnitAndSelectAdd(2);
		browser.sleep(4000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		//First select the sibling radio. After that child radio is getting enabled. (Application issue)
		rightpanelpage.clickRadioButtonInAddUnitPopUp(2);
		rightpanelpage.clickRadioButtonInAddUnitPopUp(0);
		rightpanelpage.writeUnitIDInAddUnitPopUp('A.123');

		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		browser.switchTo().frame('ext-gen1132'); // give id of iframe

		//In below four lines of code Edit Rubric,EditorialRubric,FirstParagraph and SecondPragraph.
		rightpanelpage.writeRubricInAddUnitPopUp(loadedData.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loadedData.editorial_rubric_text);
		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loadedData.paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(loadedData.paragraph_two);

		//Edit the title using Pop Up
		rightpanelpage.clickEditTitleInAddUnitPopUp();
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true;
		rightpanelpage.writeFieldInInnerTitleEditPopUp(loadedData.title_text, 19);
		rightpanelpage.clickAcceptInnerTitleEditPopUp();

		//Fill the Mandatory field in Attribute.
		rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('S');
		

		browser.switchTo().frame('ext-gen1132'); 
		browser.ignoreSynchronization = true;
		//select the entered text in editor
		rightpanelpage.selectAText();


		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true;
		rightpanelpage.clickFormatTabinXEditor();
		//*******************************
		//click on bold + Italic
		rightpanelpage.clickonAnyAvailableButtonInEditVisual(11);
		rightpanelpage.clickonAnyAvailableButtonInEditVisual(12);

		browser.sleep(3000);

		//Fill the Mandatory field in Attribute.
		rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('S');
		browser.switchTo().defaultContent();
		//Click Save button
		rightpanelpage.clickSaveButtonInModalUnitEditPopUp();
		browser.sleep(3000);

		//Below codes are checking whether all above text's are available in created UNIT
		rightpanelpage.rightClickOnOrignalXML(1);
		browser.sleep(3000);

		var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		expect(newXMLText).toContain(loadedData.rubric_text);
		expect(newXMLText).toContain(loadedData.editorial_rubric_text);
		expect(newXMLText).toContain(loadedData.paragraph_one);
		expect(newXMLText).toContain(loadedData.paragraph_two);
		expect(newXMLText).toContain(loadedData.title_text);

		browser.sleep(3000);
		rightpanelpage.clickCloseBtnAddXML(1);
		browser.sleep(3000);
		
		//Delete the Unit
		rightpanelpage.rightClickOnOrignalDeleteLayer(32);
		browser.sleep(3000);
		//click on Yes
		rightpanelpage.clickOnButtonForGlobal();;
		browser.sleep(3000);
		rightpanelpage.clickOnButtonForGlobal();
		browser.sleep(2000);
		rightpanelpage.expandAllParentAndChildUnit(1);
		browser.sleep(2000);
		rightpanelpage.rightClickOnUnitAndSelectDelete(3);

		rightpanelpage.clickOnButtonForGlobal();
		rightpanelpage.clickOnButtonForGlobal();

	});
});


//************************************************************* */
// describe('Document-structure', function () {

// 	beforeEach(function () {
// 		//Load the document
// 		browser.ignoreSynchronization = false;
// 		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

// 		legisDocDisplayPage.get(loadedData.marginal_id);
// 		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

// 	});

// 	afterAll(function () {

// 		//Delete the Unit created for this test
// 		browser.ignoreSynchronization = false;
// 		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
// 		//delete version
// 		legisDocDisplayPage.get(loadedData.marginal_id);
// 		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
// 		browser.waitForAngular();
// 		rightpanelpage.clickDocumentStructure();
// 		browser.sleep(4000);
// 		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.sibling_unit_bolditalic,'Original');
// 		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
// 		rightpanelpage.clickOnButtonForGlobal();
// 		browser.sleep(2000);
// 		//Delete unit
// 		legisDocDisplayPage.get(loadedData.marginal_id);
// 		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
// 		browser.waitForAngular();
// 		rightpanelpage.clickDocumentStructure();
// 		browser.sleep(4000);
// 		rightpanelpage.rightClickOnUnitAndSelectDelete(loadedData.sibling_unit_bolditalic);
// 		rightpanelpage.clickYesButtonInDeleteUnitPopUp();
// 		rightpanelpage.clickOnButtonForGlobal();

// 	});



// 	/*
// 	 * TC11 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Bold + Italic
// 	 */
// 	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Bold and Italic', function () {
// 		//Set up data
// 		/*This test case is for verifying text styles. 
// 		Hence using hard coded data. Changing data may require code changes 
// 		(since mouse actions are implemented for select operation)
// 		 */
// 		var paragraph_one = "Paragraph one"; //Dont change para 1
// 		var paragraph_two = "Paragraph two"; //Dont change para 2
// 		var rubric_text = "Rubric";
// 		var editorial_rubric_text = "Editorial Rubric";
// 		var title_text ="titulo";

// 		browser.waitForAngular();
// 		rightpanelpage.clickDocumentStructure();
// 		browser.sleep(4000);
// 		rightpanelpage.rightClickOnUnitAndSelectAdd(loadedData.unit);
// 		browser.sleep(4000);
// 		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
// 		expect(addPopUp).toEqual(true);
// 		//select the Lower sibling radio. 
// 		rightpanelpage.clickAsALowerSiblingRadioButtonInAddUnitPopUp();
// 		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.sibling_unit_bolditalic);

// 		//Steps - belongs to iFrame
// 		browser.switchTo().frame('legistext'); // give id of iframe
// 		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
// 		rightpanelpage.clickOnFormatinPoup();

// 		browser.switchTo().frame('ext-gen1132'); // give id of iframe
// 		rightpanelpage.writeRubricInAddUnitPopUp(rubric_text);
// 		rightpanelpage.writeEditorialRubricInAddUnitPopUp(editorial_rubric_text);

// 		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(paragraph_one);
// 		rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(paragraph_two);
// 		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
// 		//Select the text
// 		rightpanelpage.selectFirstLineTextInParagraphTwoInAddUnitPopUp();
// 		browser.sleep(1000);//Sleep required- Because Synchornization is overriden.

// 		//Click BoldItalic button
// 		browser.switchTo().defaultContent();
// 		browser.switchTo().frame('legistext');
// 		rightpanelpage.clickBoldItalicButtonInFormatTabInUnitPopUp();

// 		//Click Edit title
// 		browser.switchTo().defaultContent();
// 		browser.switchTo().frame('legistext');
// 		browser.switchTo().frame('ext-gen1132');
// 		rightpanelpage.clickEditTitleInAddUnitPopUp();

// 		//Write title fields
// 		browser.switchTo().defaultContent();
// 		browser.switchTo().frame('legistext');
// 		browser.ignoreSynchronization = true; 
// 		rightpanelpage.writeFieldInInnerTitleEditPopUp(title_text,19);
// 		rightpanelpage.clickAcceptInnerTitleEditPopUp();

// 		rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
// 		browser.switchTo().defaultContent();

// 		//Click Save button
// 		rightpanelpage.clickSaveButtonInModalUnitEditPopUp();
// 		browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
// 		browser.driver.ignoreSynchronization = false; 
// 		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

// 		infoMsg.then(function(text) {
// 			if(text===''){ //Save successful. No info message. Popup closes automatically
// 				expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
// 				browser.sleep(5000);
// 				browser.waitForAngular();
// 				//Check new data is displayed in edit view - xml
// 				rightpanelpage.rightClickOnVersionAndSelectEditLayerXML(loadedData.sibling_unit_bolditalic,'Original');
// 				browser.sleep(5000);
// 				browser.waitForAngular();
// 				//Verify Bold&Italic text tag for paragraph_two
// 				var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();

// 				expect(newXMLText).toContain("<en-origen peso-fuente=\"negrita\" estilo-fuente=\"cursiva\">"
// 						+paragraph_two+"</en-origen>");
// 			}
// 			else{//info message displayed. Duplicate entry for unit, hence cannot save. expected.
// 				console.log('Bold&Italic button is not verified. Given unit already exist in structure. Trying to delete it');
// 				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
// 				rightpanelpage.clickOnButtonForGlobal();
// 				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
// 				rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
// 			}

// 		});

// 	});



// });







