var params = browser.params;

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var jiraNum1='GCMSQABANG-1641';
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

	 // GCMSQABANG-1642 : TC02 - Right Panel - Document Structure - Unit Menu - Rename - Nice to have - Valid Unit no part
	var jiraNum='GCMSQABANG-1642';
	it('Rename Unit Valid Unit No Part.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnUnitAndSelectEditUnitId(loaded.unit);
		browser.sleep(3000);

		// 	//Verify Rename pop-up is displayed
		var unitIDPopUp = rightpanelpage.isUnitIDContainerPopUpDisplayed();
		expect(unitIDPopUp).toEqual(true);
		browser.sleep(3000);
		// 	//Write <Valid Unit no part> in UnitID & verify green tick, and save button enabled
		rightpanelpage.writeUnitInUnitIDContainerPopUp(loaded.unit_id_no_part);
		browser.sleep(3000);
		expect(rightpanelpage.isGreenTickDisplayedInUnitIDContainer()).toEqual(true);
		browser.sleep(3000);
		expect(rightpanelpage.isSaveButtonEnabledInUnitIDContainerPopUp()).toEqual(true);
		//Close pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
	});

	
 		//GCMSQABANG-1643 : TC03 - Right Panel - Document Structure - Unit Menu - Rename-Nice to have - Invalid Unit no part
		var jiraNum1='GCMSQABANG-1643';
	 	it('Rename Unit Invalid Unit No Part.'+jiraNum1, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnUnitAndSelectEditUnitId(loaded.unit);
		browser.sleep(3000);
		//Verify Rename pop-up is displayed
		var unitIDPopUp = rightpanelpage.isUnitIDContainerPopUpDisplayed();
		expect(unitIDPopUp).toEqual(true);
		//Write <Invalid Unit no part> in UnitID & verify green tick, and save button enabled
		rightpanelpage.writeUnitInUnitIDContainerPopUp('X');
		browser.sleep(1000);
		expect(rightpanelpage.isRedCrossDisplayedInUnitIDContainer()).toEqual(true);
		browser.sleep(1000);
		expect(rightpanelpage.isSaveButtonEnabledInUnitIDContainerPopUp()).toEqual(false);
		//Close pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
	});

});
