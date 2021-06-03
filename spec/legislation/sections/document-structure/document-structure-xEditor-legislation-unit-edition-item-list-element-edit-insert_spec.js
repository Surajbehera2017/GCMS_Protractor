var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber='GCMSQABANG-1669';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
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
	
	
		// 	 * TC01 - Legislation Unit Edition Item List Element Edit Insert
			
		it('Legislation Unit Edition Item List Element Edit Insert.'+jiraNumber, function () {
        
	   
			browser.waitForAngular();
			rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
			browser.waitForAngular();
			rightpanelpage.ClickOnOriginalUnit(loaded.unit,loaded.version);
			browser.waitForAngular();
			rightpanelpage.clickOnEditVisual();
			browser.waitForAngular();
			rightpanelpage.clickonXEditorExpandButton();
			browser.waitForAngular();

			//entering into the first frame
			browser.switchTo().frame('legistext'); // give id of iframe
			browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
			browser.sleep(15000);
			rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_1);
			browser.sleep(1000);
			rightpanelpage.moveToInsertAndSelectElement(loaded.elementname_1);
			browser.sleep(1000);
			rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
            rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteexternaltext);//select the option paste from external text
			rightpanelpage.enterTextIntoPopup(loaded.text); //enter the text in the paste from external text box
			browser.sleep(1000);
			rightpanelpage.clickOnInsertOrCancel('Insert');
			browser.sleep(1000);
			
			//insert itemized list and listitem elements
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

			rightpanelpage.clickOnTabAndSelectInserBreak(loaded.tabname_2);
			browser.sleep(4000);
            rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
            rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteexternaltext);//select the option paste from external text
			rightpanelpage.enterTextIntoPopup(loaded.paragraph_two); //enter the text in the paste from external text box
			browser.sleep(1000);
			rightpanelpage.clickOnInsertOrCancel('Insert');
			browser.sleep(1000);
		
	});
});






