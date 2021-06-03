var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.document_structure;
var jiraNumber='GCMSQABANG-1582';


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.copyexternaltext.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 
    /*
    * GCMSQABANG-1582: TC04 -xEditor - Copy external text - Tables - Word format - X button
    Can't perform this test case as Test case is not properly in JIRA.
    */
    
    it('Copy external text Tables Word format X button.'+jiraNumber, function () {

        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        browser.waitForAngular();
        rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
        browser.sleep(7000);
        // browser.waitForAngular();
        // rightpanelpage.clickOn4thoptionOfxmlEditor();
        // browser.waitForAngular();
        browser.switchTo().frame('legistext'); 
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.clickOnUnidadButton();
        rightpanelpage.clickDeleteOptionFromUnidad();
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
              
            
  });
});
