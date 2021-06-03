var params = browser.params;
var jiraNumber = 'GCMSQABANG-1635';
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 * 05 - Delete a unit with versions - Error
	 */
	it('Delete Unit Error.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(2000);
		console.log("about to right click");
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.unit);
		console.log("clicked on Delete");
		browser.waitForAngular();
		//Verify Delete pop-up is displayed
		var deletePopUp = rightpanelpage.isDeleteUnitPopUpDisplayed();
		expect(deletePopUp).toEqual(true);
		//Click Yes button & verify error message
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		rightpanelpage.isDeleteUnitConfirmationPopUpDisplayed();
		var error = rightpanelpage.getMessageFromInfoBoxPopUp();
		expect(error).toEqual(I18n.documentstructure.deleteunitwithchildren );
		rightpanelpage.clickOKButtonDisplayedinErrorValidation('ok');
		
	});
	
});







