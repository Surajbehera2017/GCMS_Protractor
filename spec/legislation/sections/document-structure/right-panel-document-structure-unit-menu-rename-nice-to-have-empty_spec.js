var params = browser.params;
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded =  testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1641';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
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

	// GCMSQABANG-1641: TC01 - Right Panel - Document Structure - Unit Menu - Rename - Nice to have - Empty
	var jiraNum='GCMSQABANG-1641';
	it('Rename Unit Empty Cancel.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnUnitAndSelectEditUnitId(loaded.unit);
		//rightpanelpage.rightClickOnUnitAndSelectEditUnitId(1);
		browser.sleep(3000);
		
		//Verify Rename pop-up is displayed
		var unitIDPopUp = rightpanelpage.isUnitIDContainerPopUpDisplayed();
		expect(unitIDPopUp).toEqual(true);
		browser.sleep(3000);
		//Write <blank> in UnitID & verify red cross, and save button disabled
		rightpanelpage.writeUnitInUnitIDContainerPopUp('');
		browser.sleep(3000);
		expect(rightpanelpage.isRedCrossDisplayedInUnitIDContainer()).toEqual(true);
		browser.sleep(3000);
		expect(rightpanelpage.isSaveButtonEnabledInUnitIDContainerPopUp()).toEqual(false);
		//Close pop-up
		//rightpanelpage.clickCancelInUnitIDContainerPopUp();
		rightpanelpage.clickOnButtonForGlobal('Cancel');
	});

});
