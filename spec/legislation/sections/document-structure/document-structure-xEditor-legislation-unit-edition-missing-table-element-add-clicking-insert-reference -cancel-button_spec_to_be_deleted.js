var params = browser.params;
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1667';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});


    /*  
    *  TC03 -  Legislation Unit Edition - Missing Table Element - Add - Clicking insert reference - Cancel button
	*/
	it('Legislation Unit Edition Missing Table Element Add Clicking insert reference Cancel button_CAN_BE_DELETED.' + jiraNumber, function () {
		
		
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();

		rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		browser.sleep(2000);

		//Give a unit which is not existing in structure
		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.unit_to_add);

		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.switchTo().frame('ext-gen1132'); // give id of iframe
	    browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
	    
		rightpanelpage.writeRubricInAddUnitPopUp(loadedData.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loadedData.editorial_rubric_text);
		browser.switchTo().defaultContent();
        browser.sleep(3000);
        browser.switchTo().frame('legistext'); 
        browser.ignoreSynchronization = true;
    
		rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
        rightpanelpage.selectOptionFromPasteDropdown(loadedData.pasteExternalText);//select the option paste from external text
        rightpanelpage.enterTextIntoPopup(loadedData.paragraph_two); //enter the text in the paste from external text box
        browser.sleep(1000);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        

        rightpanelpage.clickCapatextoAndChildTabs(loadedData.tabname_1);
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loadedData.elementname_1);
		browser.sleep(2000);

		browser.switchTo().frame('ext-gen1132'); // give id of iframe
	    browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		browser.sleep(1000);
		
		rightpanelpage.clickTableLink();

		browser.switchTo().defaultContent();
        browser.sleep(3000);
        browser.switchTo().frame('legistext'); 
        browser.ignoreSynchronization = true;
    
		rightpanelpage.selectAddOrCancelInInsertTable('Add');

		browser.switchTo().defaultContent();
		browser.sleep(3000);
        rightpanelpage.clickOnButtonForGlobal('Cancel');
     
	});

});







