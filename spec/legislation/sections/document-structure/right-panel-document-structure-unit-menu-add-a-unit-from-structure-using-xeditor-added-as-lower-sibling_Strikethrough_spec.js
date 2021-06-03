var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedData = testData.legislation.sections.document_structure.add_unit_xeditor_lowersibling;
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber='GCMSQABANG-1625';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});

	afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                   browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });
    
    

	/*
	 * GCMSQABANG-1625:TC14 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Strikethrough
	 */
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Strikethrough.'+jiraNumber, function () {
		//Set up data
		/*This test case is for verifying text styles. 
		Hence using hard coded data. Changing data may require code changes 
		(since mouse actions are implemented for select operation)
		*/
		// var paragraph_one = "Paragraph one"; //Dont change para 1
		// var paragraph_two = "Paragraph two"; //Dont change para 2
		// var rubric_text = "Rubric";
		// var editorial_rubric_text = "Editorial Rubric";
		// var title_text ="titulo";

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.unit);
		browser.sleep(2000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		
		//select the Lower sibling radio.
		//browser.sleep(2000); 
		rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.lower);
		rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.sibling_unit_strikethrough);

		//enetring the frames
		browser.waitForAngular();
        browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true; 
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true; 
		browser.sleep(1000);

		//complete rubric and editorial rubric fields
		rightpanelpage.writeRubricInAddUnitPopUp(loaded.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loaded.editorial_rubric_text);
	
		//enter the text in the main text field
		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loaded.paragraph_one);

		//click on titulo original button
		rightpanelpage.clickonSpecificDataType(loaded.performOption); 
		browser.sleep(1000); 
		
		//going to the first frame
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization=false;
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id);
		browser.ignoreSynchronization = true;
		//rightpanelpage.writeFieldInInnerTitleEditPopUp('Title',19);
		rightpanelpage.fillFieldTextinPopUpWindow(loaded.title_fieldname,loaded.title_fieldvalue);
		rightpanelpage.clickOnInsertOrCancel(loaded.accept);
		browser.sleep(3000);

		// going to 2nd frame

		browser.switchTo().frame(loaded.inside_frame_id); // give id of iframe
		 browser.ignoreSynchronization = true;
		 browser.sleep(3000);

		 //selecting the line and performing the strikethrough action

		 rightpanelpage.selectAText(loaded.par_opt); 
		 browser.sleep(2000);

		 		 //performing strikethrough

				  browser.switchTo().defaultContent();
				  browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
				   browser.ignoreSynchronization = true;
				   browser.sleep(2000);
				   rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
				   browser.sleep(2000);
				   rightpanelpage.changeTheWordFormat(loaded.strikethrough);
				   browser.sleep(2000);
				   //rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
				   rightpanelpage.selectOptionFromDropDown(loaded.definitivo_label,loaded.definitivo_field,loaded.definitivo_option);

				 // rightpanelpage.selectDefinitivoMandotoryAttributeFields(loaded.selectSorN);
				  browser.switchTo().defaultContent();
				   browser.ignoreSynchronization = false;
				 //Click Save button
				 rightpanelpage.clickOnButtonForGlobal(loaded.save);
				 browser.waitForAngular();
	
		 
	 });

	 it ('deletion of created unit'+jiraNumber.link(params.jiraURL+jiraNumber), function () {


		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.sibling_unit_strikethrough, loaded.version);
		browser.sleep(2000);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.waitForAngular();
		//rightpanelpage.expandUnit(loaded.unit);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.sibling_unit_strikethrough);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(2000);
		
});
});







