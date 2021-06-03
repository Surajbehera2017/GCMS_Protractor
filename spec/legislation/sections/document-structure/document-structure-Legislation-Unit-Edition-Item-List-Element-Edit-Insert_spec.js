var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber='GCMSQABANG-1669';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var loadedData = testData[params.env][params.BU]


describe('Document-structure', function () {

    beforeAll(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

        legisDocDisplayPage.get(loadedData.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);

    });

    /*
    *GCMSQABANG-1669: TC02 - Legislation Unit Edition - Item List Element - Edit - Insert
    *
    */

    it('Legislation Unit Edition Item List Element Edit Insert.'+jiraNumber, function () {


        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        browser.sleep(1000);
       
        rightpanelpage.ClickOnOriginalUnit(loadedData.unit,'Original');;
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnEditVisual();
        browser.sleep(10000);

        //rightpanelpage.clickonXEditorExpandButton();
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        rightpanelpage.clickOnPasteDropdown();
        browser.sleep(1000);
        rightpanelpage.selectOptionFromPasteDropdown("Paste external text");  // Select Paste External Text
        browser.sleep(1000);
        rightpanelpage.enterTextIntoPopup(loadedData.text);
        rightpanelpage.clickOnInsertOrCancel("Insert");
       
        browser.sleep(7000);
        //*[@class='x-box-inner ']//span[text()='" + tabName + "']
        //rightpanelpage.waitForElementusingXPathIsDisplayed("//*[@class='x-box-inner ']//span[text()='capatexto']");
        rightpanelpage.clickCapatextoAndChildTabs(loadedData.tabname_1);
      
        rightpanelpage.moveToInsertAndSelectElement(loadedData.elementname);
        browser.switchTo().defaultContent(); 
        //browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.clickonSpecificDataType(loadedData.tabname_2);
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        rightpanelpage.clickOnPasteDropdown();
        browser.sleep(1000);
        rightpanelpage.selectOptionFromPasteDropdown("Paste external text");  // Select Paste External Text
        browser.sleep(1000);
        rightpanelpage.enterTextIntoPopup(loadedData.paragraph_one);
        rightpanelpage.clickOnInsertOrCancel("Insert");
        browser.sleep(1000);

        // Delete all content inside the text
        browser.switchTo().defaultContent(); 
        //browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        rightpanelpage.selectAllAndDelete();  // Select all content and delete
        browser.sleep(1000);
        browser.switchTo().defaultContent();
       // browser.ignoreSynchronization = false;

    });
});
