var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1742';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var loadedData = testData[params.env][params.BU]


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 
    /*
    * GCMSQABANG-1742: TC02 -xEditor - Copy external text - Tables - Word format - Unit edition - Verify elements
    */
    
    it('Copy external text Tables Word format Unit edition Verify elements.'+jiraNumber, function () {

        
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.ClickOnOriginalUnit(loadedData.unit,'Original');  // Select The first Original Label
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnEditVisual(); // Click on Edit Visual Label
        browser.sleep(2000);
        browser.waitForAngular();
        browser.sleep(2000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.selectAllAndDelete();  // Select all content and delete
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.clickOnPasteDropdown();
        rightpanelpage.selectOptionFromPasteDropdown('Paste external text');
        browser.ignoreSynchronization = true;
        // Select Paste External Text
        rightpanelpage.enterTextIntoPopup(loadedData.xml_data2);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnApplyOrCloseButton('editTextLayer');
        browser.waitForAngular();
        browser.sleep(5000);
  
  });
});
