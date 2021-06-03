var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1690';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

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


	/*
	 * GCMSQABANG-1690 TC04 -Add 1.0 Editor - Aranzadi - Edit layer with XML
	 */
    
	it('Editor Aranzadi Edit layer with XML.'+jiraNumber,function () {

		
		browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
		//rightpanelpage.rightClickOnOrignalAndXmlLayer(loaded.unit_1,loaded.version);
		rightpanelpage.ClickOnOriginalUnit(loaded.unit_1,loaded.version);
		browser.waitForAngular();
		rightpanelpage.clickOnEditXML();
		browser.sleep(1000);
		
		//Verify Edit pop-up is displayed with buttons on side bar
		var editPopUp = 
			rightpanelpage.isModalUnitEditPopUpDisplayed()
			&& rightpanelpage.isSidebarButtonsDisplayedInModalUnitEditPopUp();
		expect(editPopUp).toEqual(true);
		
		//Click Cancel button & verify pop-up is closed
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
	
	});
	
});







