var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1672';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

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
	

		// 	 * TC01 - Legislation Unit Edition - Item List Element - Add - Layout
		
		it('Legislation Unit Edition Item List Element Add Layout.'+jiraNumber, function () {

			browser.waitForAngular();
			rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
			browser.waitForAngular();
			rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_action);
		    browser.waitForAngular();
 
			rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.unit_to_add);
			browser.sleep(15000);
			
			//Steps - belongs to iFrame
			browser.switchTo().frame('legistext'); // give id of iframe
			browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
			browser.switchTo().frame('ext-gen1132'); // give id of iframe
			browser.ignoreSynchronization = true;
			browser.sleep(7000);
			rightpanelpage.writeRubricInAddUnitPopUp(loaded.rubric_text);
			browser.sleep(2000);
			rightpanelpage.writeEditorialRubricInAddUnitPopUp(loaded.editorial_rubric_text);
			browser.sleep(2000);
			
            //click on titulooriginal button in frame 2
			rightpanelpage.clickonSpecificDataType(loaded.datatype); 
			browser.sleep(1000); 

			//going to the first frame
			browser.switchTo().defaultContent();
			browser.ignoreSynchronization=false;
            browser.sleep(3000);
			browser.switchTo().frame('legistext');
			browser.ignoreSynchronization = true;
			rightpanelpage.fillFieldTextinPopUpWindow(loaded.uni_field,loaded.value1);
			rightpanelpage.fillFieldTextinPopUpWindow(loaded.com_field,loaded.value2);
			rightpanelpage.clickOnInsertOrCancel('Accept');
			browser.sleep(1000);

			//inserting itemized list elements
			rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_1);
			browser.sleep(1000);
			rightpanelpage.moveToInsertAndSelectElement(loaded.elementname);
			browser.sleep(2000);
            rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
            rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteexternaltext);//select the option paste from external text
			rightpanelpage.enterTextIntoPopup(loaded.paragraph_one); //enter the text in the paste from external text box
			browser.sleep(1000);
			rightpanelpage.clickOnInsertOrCancel('Insert');
			browser.sleep(1000);
			rightpanelpage.clickOnTabAndSelectInserBreak(loaded.elementname);
			browser.sleep(4000);
            rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
            rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteexternaltext);//select the option paste from external text
			rightpanelpage.enterTextIntoPopup(loaded.paragraph_two); //enter the text in the paste from external text box
			browser.sleep(1000);
			rightpanelpage.clickOnInsertOrCancel('Insert');
			browser.sleep(1000);


			//fill in the mandatory field and click on "save"

			rightpanelpage.selectOptionFromDropDown(loaded.final_field,loaded.final_textbox,loaded.final_value);
			browser.switchTo().defaultContent();
			
			//Click Save button
			browser.sleep(2000);
			rightpanelpage.clickOnButtonForGlobal('Save');
		
	});

	it('deletion of created unit'+jiraNumber.link(params.jiraURL+jiraNumber), function () {

		//deletion of the created unit
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.unit_to_add,loaded.version);
		browser.sleep(9000);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(1000);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.unit_to_add);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.sleep(1000);
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(2000);
 
	});


});







