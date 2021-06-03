var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber='GCMSQABANG-1596';
var jiraNumber_1='GCMSQABANG-1597';
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
	 *GCMSQABANG-1596: TC07 - Right Panel - Document Structure - Main Menu - Add a Unit from Structure using XML - Cancel button
	 */
	it('Add Unit Cancel & close Button.'+jiraNumber+','+jiraNumber_1, function () {
		browser.waitForAngular();
        browser.sleep(2000);
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expectedAction);
		browser.sleep(2000);

		rightpanelpage.clickOnButtonForGlobal(loaded.cancel);
		var popup = rightpanelpage.isModalWindowDisplayed();
		expect(popup).toEqual(false);
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expectedAction);
		var popup = rightpanelpage.isModalWindowDisplayed();
		expect(popup).toEqual(true);
		browser.sleep(2000);
		rightpanelpage.clickOnApplyOrCloseButton(loaded.button_close);
		var popup = rightpanelpage.isModalWindowDisplayed();
		 expect(popup).toEqual(false);



		
	});
	
	
	
});







