var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.document_structure.delte_nothaexistlelement;

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 

	/*
	 * DOUBT
	 * 
	 */
	it('Delete Notatexisto with repro', function () {

		browser.waitForAngular();
        //Verify Document text tab is visible
		rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.rightClickOnA2Orignal();
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        rightpanelpage.clickCapatexto();
        browser.sleep(1000);
        rightpanelpage.movemousetoInsertElements();
        browser.sleep(1000);
        rightpanelpage.clickparaffaro();
        browser.sleep(1000);
        rightpanelpage.clickparaffaroAgain();
        browser.sleep(1000);
        rightpanelpage.movemousetoInsertElementsParaffaro();
        browser.sleep(1000);
        rightpanelpage.clickDirweb();
        
       
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false; 
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
        browser.waitForAngular();
        //Verify Document text tab is visible
		
        
        
        
        rightpanelpage.rightClickOnA2Orignal();
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        browser.sleep(1000);
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
   
        
        rightpanelpage.clickonParrafaroAfterNotaTexto();
        rightpanelpage.deleteDirWeb();
        
        
        
         browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false; 
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
        
        
     }); 
    
    
    
   
    
    
    
    

    
});