var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedData = testData.legislation.sections.document_structure;
var jiraNumber_1 = 'GCMSQABANG-1646';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
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
	 *GCMSQABANG-1615: TC02 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Added as child
	 */
	it('Add Unit Xeditor Unit Menu Added as Child.'+jiraNumber_1, function () {

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
			rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.unit);
			browser.sleep(2000);
			var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
			expect(addPopUp).toEqual(true);

			//select the Add as a child radio.
			//browser.sleep(2000); 
			browser.waitForAngular();
			rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.lower);
			rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.child);
			browser.sleep(2000);
			 //Give a unit which is not existing as a child
			 rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.child_unit_to_add);

			//enetring the frames
			browser.waitForAngular();
		    browser.switchTo().frame(loaded.out_frame_id);//1st frame
			browser.ignoreSynchronization = true; 
			browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
			browser.ignoreSynchronization = true; 
			browser.sleep(3000);

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
			rightpanelpage.fillFieldTextinPopUpWindow(loaded.title_fieldname,loaded.title_fieldvalue)
		rightpanelpage.clickOnInsertOrCancel(loaded.accept);
		browser.sleep(3000);
//browser.sleep(3000);
			rightpanelpage.selectOptionFromDropDown(loaded.definitivo_label,loaded.definitivo_field,loaded.definitivo_option);
			browser.switchTo().defaultContent();
			browser.ignoreSynchronization = false;
		  //Click Save button
		  browser.sleep(2000);
		  rightpanelpage.clickOnButtonForGlobal(loaded.save);

	});

	it('deletion of created unit'+ jiraNumber.link(params.jiraURL + jiraNumber) + jiraNumber_1.link(params.jiraURL + jiraNumber_1) + jiraNumber_2.link(params.jiraURL + jiraNumber_2), function () {

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		//rightpanelpage.expandUnit('A.10');
		rightpanelpage.expandUnit(loaded.unit);
		browser.waitForAngular();
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.child_unit_to_add, loaded.version);
		browser.sleep(2000);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.waitForAngular();
		rightpanelpage.expandUnit(loaded.unit);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.child_unit_to_add);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.sleep(1000);
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(1000);

        
});
});







