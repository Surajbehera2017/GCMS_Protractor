var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.document_structure;



describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.copyexternaltext.marginal_id1_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 
   /*
   *   05- Unwrapping Itemized List Element with listem
   * 
   */
    
    xit('Unwrapping Itemized List Element with listem_NEEDS_TO_BE_DELETED', function () {

        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        rightpanelpage.clickOnFirstOriginalLabel(1);
        browser.waitForAngular();
        rightpanelpage.clickOnEditVisuallabel(15);
        browser.sleep(5000);
        browser.switchTo().frame('legistext'); 
        browser.ignoreSynchronization = true; 
        browser.sleep(5000);
        browser.switchTo().frame('ext-gen1132');
        rightpanelpage.clickOnCapatexto();
        // browser.sleep(1000);
        // rightpanelpage.selectInsertElementOption();
        // browser.sleep(1000);
        // rightpanelpage.selectpárrafoOption();
        // browser.switchTo().defaultContent();
        // browser.ignoreSynchronization = false;
        // rightpanelpage.clickOnsaveButton();
        // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

        // browser.sleep(1000);
        // rightpanelpage.clickOn1stOriginalLabel();
        // browser.waitForAngular();
        // rightpanelpage.clickOn1srEditVisualLabel();
        // browser.switchTo().frame('legistext'); 
        // browser.ignoreSynchronization = true; 
        // rightpanelpage.clickOnCapatexto();
        // browser.sleep(1000);
        // rightpanelpage.selectInsertElementOption();
        // browser.sleep(1000);
        // rightpanelpage.selectpárrafoOption();
        // rightpanelpage.clickParaffroButton();
        // rightpanelpage.clickDeleteParaffro();
        // browser.sleep(1000);
        // rightpanelpage.clickParaffroButton();
        // rightpanelpage.clickDeleteParaffro();
        // browser.switchTo().defaultContent();
        // browser.ignoreSynchronization = false;
        // rightpanelpage.clickOnsaveButton();
        // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();      
  });
});
