var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded =  testData.legislation.sections.document_structure;
var jiraNum1='GCMSQABANG-1645';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum1 + '.js');
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

	 //GCMSQABANG-1645: TC01 - Right Panel - Document Structure - Replace the XML Editor by the XEditor in the UNIT edition - Layout
	var jiraNum='GCMSQABANG-1645';
	it('UNIT edition layout Replace the XML Editor by the XEditor.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnOrignalAndXmlLayer(loaded.unit,loaded.Original);
		browser.sleep(3000);
		
		//Verify Edit pop-up is displayed
		var editPopUp = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(editPopUp).toEqual(true);
		
		//Verify Side bar Buttons displayed
		var buttonsDisplayed = rightpanelpage.isSidebarButtonsDisplayedInModalUnitEditPopUp();
		expect(buttonsDisplayed).toEqual(true);
		
		//Verify Unit details not present
		var unitDetails = rightpanelpage.isUnitIDDisplayedInAddUnitPopUp()
		expect(unitDetails).toEqual(false);
		
		//Click Cancel button & verify pop-up is closed
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		
	});
	
});







