var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1626';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);
       
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
	 * GCMSQABANG-1626:TC15 -  Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Subscript
	 */

	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Subscript.'+jiraNumber, function () {
		//Set up data
		/*This test case is for verifying text styles. 
		Hence using hard coded data. Changing data may require code changes 
		(since mouse actions are implemented for select operation)
		*/
		
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.unit);
		browser.sleep(2000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
	    expect(addPopUp).toEqual(true);
		
		//select the Lower sibling radio.
		browser.sleep(2000); 
		rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.lower);
		rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.sibling_unit_subscript);

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
		//rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(loaded.paragraph_two);
		 
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

		 //selecting the line and performing the subscript action

		 rightpanelpage.selectAText(loaded.par_opt); 
		 browser.sleep(2000);

		 //performing subscript

		  browser.switchTo().defaultContent();
		 browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		  browser.ignoreSynchronization = true;
		  browser.sleep(2000);
		  rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		  browser.sleep(2000);
		  rightpanelpage.changeTheWordFormat(loaded.subscript2);
		  browser.sleep(2000);
		  //rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
		  rightpanelpage.selectOptionFromDropDown(loaded.definitivo_label,loaded.definitivo_field,loaded.definitivo_option);
		// rightpanelpage.selectDefinitivoMandotoryAttributeFields(loaded.selectSorN);
         browser.switchTo().defaultContent();
		  browser.ignoreSynchronization = false;
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal(loaded.save);
		browser.sleep(2000);


	 //deletion of the created unit
	// rightpanelpage.expandUnit(loaded.unit);
		browser.waitForAngular();
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.sibling_unit_subscript, loaded.version);
		browser.sleep(2000);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.waitForAngular();
		//rightpanelpage.expandUnit(loaded.unit);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.sibling_unit_subscript);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(2000);


	//  rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.sibling_unit_subscript,loaded.version);
	//  rightpanelpage.clickOnButtonForGlobal();
	//  browser.waitForAngular();
	//  rightpanelpage.clickOnButtonForGlobal();
	//  browser.waitForAngular();
	//  rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.sibling_unit_subscript);	
    //  rightpanelpage.clickOnButtonForGlobal();
	//  browser.waitForAngular();
	//  rightpanelpage.clickOnButtonForGlobal();
	//   browser.sleep(2000); 



	  
















		// browser.waitForAngular();
		// browser.sleep(5000);
		// rightpanelpage.clickDocumentStructure();
		// browser.sleep(4000);
		// rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.add_unit_xeditor_lowersibling.unit);
		//  browser.sleep(4000);
		//  var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		// expect(addPopUp).toEqual(true);
		//  //select the Lower sibling radio. 
		//   rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.add_analysis.lower);
		//   rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.add_unit_xeditor_lowersibling.sibling_unit_subscript);
		
		// //Steps - belongs to iFrame
		// browser.switchTo().frame('legistext');
		// browser.ignoreSynchronization = true;
		
		//  browser.switchTo().frame('ext-gen1132'); // give id of iframe
		//  browser.ignoreSynchronization = true; 	
		//  rightpanelpage.writeRubricInAddUnitPopUp(loaded.add_unit_xeditor_lowersibling.rubric_text);
		// rightpanelpage.writeEditorialRubricInAddUnitPopUp(loaded.add_unit_xeditor_lowersibling.editorial_rubric_text);
		// rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loaded.add_unit_xeditor_lowersibling.paragraph_one);
		// rightpanelpage.writeParagraphTwoInAddUnitPopUpAndPressEnter(loaded.add_unit_xeditor_lowersibling.paragraph_two_2);
		//  rightpanelpage.clickonSpecificDataType(loaded.add_unit_xeditor_lowersibling.performOption); //Clicks on the title button in the frame of the add unit pop up
		 
		 
		//  //switching to frame 1	  
		//  browser.switchTo().defaultContent();
		//  browser.switchTo().frame('legistext');
		//  browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular 
		// browser.sleep(4000);

		// rightpanelpage.editTitleWindowPopUpFieldsEntry('unidad','Title');
		// //rightpanelpage.writeFieldInInnerTitleEditPopUp('Title',19);	 
		// // rightpanelpage.clickAcceptInnerTitleEditPopUp(loaded.add_unit_xeditor_lowersibling.accept);
		// // rightpanelpage.clickOnTabInsideVisualEditor(loaded.add_unit_xeditor_lowersibling.tabName);

		// browser.switchTo().frame('ext-gen1132'); // give id of iframe
		//  browser.ignoreSynchronization = true;
		//  rightpanelpage.selectFirstLineTextInParagraphTwoInAddUnitPopUp(); 
		//  browser.switchTo().defaultContent();
		//  browser.switchTo().frame('legistext');
		//  browser.ignoreSynchronization = true;
		//  rightpanelpage.changeTheWordFormat(loaded.word_format_test_data.subscript2);
		//  browser.switchTo().defaultContent();
		//  browser.ignoreSynchronization = false;



		// //added
		// rightpanelpage.clickEditTitleInAddUnitPopUp();
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// browser.ignoreSynchronization = true; 
		// rightpanelpage.writeFieldInInnerTitleEditPopUp('Title',19);
		// rightpanelpage.clickAcceptInnerTitleEditPopUp();
		
		// rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
		// browser.switchTo().defaultContent();
		
		//Click Save button
		//rightpanelpage.clickSaveButtonInModalUnitEditPopUp();
		// browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		// var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		// infoMsg.then(function(text) {
		// 	if(text===''){ //Save successful. No info message. Popup closes automatically
		// 		expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
		// 	}
		// 	else{//info message displayed. Duplicate entry, hence cannot save. expected.
		// 		expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
		// 		rightpanelpage.clickOnButtonForGlobal();
		//	}
		//});

		///




		// browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		// //Select the text
		// rightpanelpage.selectFirstLineTextInParagraphTwoInAddUnitPopUp();
		// browser.sleep(1000);//Sleep required- Because Synchornization is overriden.
		
		// //Click Subscript button
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// rightpanelpage.clickSubscriptButtonInFormatTabInUnitPopUp();
		
		// //Click Edit title
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// browser.switchTo().frame('ext-gen1132');
		// rightpanelpage.clickEditTitleInAddUnitPopUp();
		
		// //Write title fields
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// browser.ignoreSynchronization = true; 
		// rightpanelpage.writeFieldInInnerTitleEditPopUp(title_text,19);
		// rightpanelpage.clickAcceptInnerTitleEditPopUp();
		
		// rightpanelpage.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp('N');
		// browser.switchTo().defaultContent();
		
		// //Click Save button
		// rightpanelpage.clickSaveButtonInModalUnitEditPopUp();
		// browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		// browser.driver.ignoreSynchronization = false; 
		// var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		// infoMsg.then(function(text) {
		// 	if(text===''){ //Save successful. No info message. Popup closes automatically
		// 		expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
		// 		browser.sleep(5000);
		// 		browser.waitForAngular();
		// 		//Check new data is displayed in edit view - xml
		// 		rightpanelpage.rightClickOnVersionAndSelectEditLayerXML(loadedData.sibling_unit_subscript,'Original');
		// 		browser.sleep(5000);
		// 		browser.waitForAngular();
		// 		//Verify Subscript text tag for paragraph_two
		// 		var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		// 		expect(newXMLText).toContain("<subindice>"+paragraph_two+"</subindice>");
				
		// 	}
		// 	else{//info message displayed. Duplicate entry for unit, hence cannot save. expected.
		// 		console.log('Subscript is not verified. Given unit already exist in structure. Trying to delete it');
		// 		expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
		// 		rightpanelpage.clickOnButtonForGlobal();
		// 		browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
		// 		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		// 	}
			
		});
		
	

	
});







