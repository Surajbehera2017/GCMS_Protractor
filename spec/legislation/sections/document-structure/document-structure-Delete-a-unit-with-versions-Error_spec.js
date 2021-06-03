var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1635';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);
        browser.waitForAngular();
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

	//GCMSQABANG-1635 : 05 - Delete a unit with versions - Error
	 var jiraNum='GCMSQABANG-1635';
	it('Delete Version Layer Error.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        //right click on the unit which has contextindex
        rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.unit2);
		//rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.unit2);
        browser.waitForAngular();
        browser.sleep(5000);
		//Verify Delete pop-up is displayed
		 var deletePopUp = rightpanelpage.isDeleteUnitConfirmationPopUpDisplayed();
		expect(deletePopUp).toEqual(true);
		 browser.sleep(2000);
		 //Click Yes button & verify error message
		  rightpanelpage.clickOnButtonForGlobal('Yes');
		 var errorMessage = rightpanelpage.getTextImportpopupError();//READING THE ERROR MESSAGE FROM POP UP

		 expect(errorMessage).toEqual(I18n.documentstructure.deleteunitwithversions);
		// //Close pop-up
		 rightpanelpage.clickOnButtonForGlobal('Ok');
		
	});
	
});







