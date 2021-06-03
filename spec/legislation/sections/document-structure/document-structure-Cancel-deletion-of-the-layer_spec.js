var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1637';
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
	 
	  
	/*GCMSQABANG-1637  01 - Cancel deletion of  the layer */

	it('Cancel deletion of  the layer.'+jiraNumber, function () {

		
		  browser.waitForAngular();
		  rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		  browser.waitForAngular();
		  rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.unit_name1,loaded.version);
          browser.waitForAngular();
		  
		//Verify Delete pop-up is displayed
		var deletePopUp = rightpanelpage.isDeleteUnitConfirmationPopUpDisplayed();
		expect(deletePopUp).toEqual(true);

		//Click Cancel button & verify pop-up is closed
		rightpanelpage.clickOnButtonForGlobal(loaded.cancel_button);

		//Verify if delete popup is closed after clicking on cancel button
		var deleteCancelled = rightpanelpage.isDeleteUnitConfirmationPopUpDisplayed();
		expect(deleteCancelled).toEqual(false);
		
	});
	
});







