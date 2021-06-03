var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1590';
var jiraNumber1='GCMSQABANG-1591';
var jiraNumber2='GCMSQABANG-1592';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
  
	/*
	 * GCMSQABANG-1590:TC01 - Right Panel - Document Structure - Duplicate Structure - Date
	 * create new Doument duplicate structure
	 */
	it('Duplicate Actions Create.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loadedData.Duplicate_Structure);
		
		
		//Add new date for duplicate pop-up
		rightpanelpage.writeDateInPopUp(loadedData.date_duplicatestructure);
		rightpanelpage.clickOnButtonForGlobal(loadedData.ok);
		
		// verify success message
		var infoMessage = rightpanelpage.getMessageOnPopUp();
		expect(infoMessage).toEqual(loadedData.structurecreatedmessage);
		rightpanelpage.clickOnButtonForGlobal(loadedData.ok);
		
	});

     /*
	 * GCMSQABANG-1591:TC02 - Right Panel - Document Structure - Duplicate Structure - Invalid same date
	 */
	it('Duplicate Actions Error.'+jiraNumber1, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
	   rightpanelpage.ClickOnStrucureActionAndSelectAction(loadedData.Duplicate_Structure);
		
		
		//Add Duplicate date & verify error message
		rightpanelpage.writeDateInPopUp(loadedData.date_duplicatestructure);
		rightpanelpage.clickOnButtonForGlobal(loadedData.ok);
		
		// verify success message
		var duplicateError = rightpanelpage.getMessageOnPopUp();
		expect(duplicateError).toEqual(loadedData.duplicatedateerror);
		rightpanelpage.clickOnButtonForGlobal(loadedData.ok);  
		
	});
	
	/*
	 * GCMSQABANG-1592:01 - Delete Document Structure
	 */
	it('Duplicate Actions Delete.'+jiraNumber2, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();

		//Click on delete structure from structure dropdown
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loadedData.delete);

	   // click on ok to delete structure
	   
		rightpanelpage.clickOnButtonForGlobal(loadedData.yes);
		
		
		var deleteSuccess = rightpanelpage.getMessageFromInfoBoxPopUp();
		expect(deleteSuccess).toEqual(loadedData.structuredeletesuccess);
		rightpanelpage.clickOnButtonForGlobal(loadedData.ok);
		
	});

	
});







