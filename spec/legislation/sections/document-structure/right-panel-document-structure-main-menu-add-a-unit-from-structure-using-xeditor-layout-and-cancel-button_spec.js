var params = browser.params;
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var docFileToUpload = params.BU + '.unitxml_add_as_child.xml';
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3621';
var jiraNumber2 = 'GCMSQABANG-1601';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

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
	 * GCMSQABANG-3621:TC01 - Right Panel - Document Structure - Main Menu - Add a Unit from Structure using Xeditor - Layout
	 */
	it('Add Unit Xeditor Layout.' + jiraNumber1, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab('DOCUMENT STRUCTURE'); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction('Import from XML');
		browser.sleep(2000);
		rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder + docFileToUpload));
		expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);

		browser.waitForAngular();
		//rightpanelpage.clickOKBrowseXMLPopupError();
		var popUpWindow = rightpanelpage.browseXMLPopupWindowIsPresented();
		expect(popUpWindow).toEqual(true);
		//rightpanelpage.clickOkInBrowseXMLPopupWindow();
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		browser.sleep(2000);
	});

	/*
	 * GCMSQABANG-1601:TC04 -  Right Panel - Document Structure - Main Menu - Add a Unit from Structure using Xeditor - Cancel button
	//  */
	it('Add Unit Xeditor Cancel Button.'+jiraNumber2, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab('DOCUMENT STRUCTURE'); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
		browser.sleep(4000);
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalWindowDisplayed();
		expect(popup).toEqual(true);
		//Click Cancel Button & Verify pop-up is closed
		rightpanelpage.clickOnButtonForGlobal('Cancel');

	});

});







