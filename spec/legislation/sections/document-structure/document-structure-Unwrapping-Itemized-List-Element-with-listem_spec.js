var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1828';
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
  *   05- Unwrapping Itemized List Element with listem
  * 
  */
    it('Unwrapping Itemized List Element with listem.'+jiraNumber, function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();

    rightpanelpage.clickDocumentStructure();
    browser.waitForAngular();
    browser.sleep(2000);

    rightpanelpage.ClickOnOriginalUnit(loadedData.unit, 'Original');  // Select The first Original Label
    browser.waitForAngular();
    browser.sleep(2000);
    rightpanelpage.clickOnEditVisual();

    browser.sleep(5000);
    browser.switchTo().frame('legistext');
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    //browser.switchTo().frame('ext-gen1132');
    //click capatexto and select parrafo
    rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
    browser.sleep(1000);
    rightpanelpage.moveToInsertAndSelectElement(loadedData.element);
    browser.sleep(1000);

    browser.switchTo().defaultContent();
    //browser.ignoreSynchronization = false;
    rightpanelpage.clickOnButtonForGlobal('Save');
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();


  });
});
