var params = browser.params;
var jiraNumber='GCMSQABANG-1671';
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
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
*GCMSQABANG-1671: TC05 - Legislation Unit Edition - Item List Element - Edit - ListItem Elements
*
*/
    
    it('Legislation Unit Edition Item List Element Edit ListItem Elements.'+jiraNumber, function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickDocumentStructure();
        browser.sleep(2000);
        rightpanelpage.ClickOnOriginalUnit(loadedData.unit,'Original');
        browser.waitForAngular();

        browser.sleep(2000);
        rightpanelpage.clickOnEditVisual();
        browser.sleep(10000);
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        
        browser.sleep(1000);
        rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loadedData.itemizedlist);  // Always move the option into Insert element
        // browser.sleep(1000);
        // rightpanelpage.insertElementOptions(6);//6
        // browser.sleep(1000);
        // rightpanelpage.clickCapatextoAndChildTabs(1);
        // browser.sleep(1000);
        // rightpanelpage.movemousetoInsertElements(0);
        // browser.sleep(1000);
        // rightpanelpage.insertElementOptions(8);//45
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

  });
});
