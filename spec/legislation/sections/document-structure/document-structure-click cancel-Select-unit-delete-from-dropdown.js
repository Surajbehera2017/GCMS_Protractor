var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1634';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

    });
    // afterEach(function () {//Close additional tab
    //     browser.getAllWindowHandles().then(function (handles) {
    //     browser.switchTo().window(handles[0]);
    //         for (var i = 1; i < handles.length; i++) {
    //             browser.switchTo().window(handles[i]).then(function () {
    //                 browser.close();
    //             }, function (error) {
    //                browser.switchTo().window(handles[0]);
    //             });
    //         }
    //         browser.switchTo().window(handles[0]);
    //     });
    // });
 
	 //GCMSQABANG-1634 : 01 -click cancel-Select an unit and delete it from dropdown
        var jiraNumber='GCMSQABANG-1634';
    it('click cancel-Select an unit and delete it from dropdown.'+jiraNum, function (done) {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        browser.sleep(4000);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		//right click on the unit which has contextindex
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.unit1);
        browser.waitForAngular();
        browser.sleep(5000);
		 //Verify Delete pop-up is displayed
		var deletePopUp = rightpanelpage.isDeleteUnitConfirmationPopUpDisplayed();
		expect(deletePopUp).toEqual(true);
        browser.sleep(2000);
        rightpanelpage.clickOKButtonDisplayedinErrorValidation('cancel');//click cancel button int he popup
        done();
        
  });
});
