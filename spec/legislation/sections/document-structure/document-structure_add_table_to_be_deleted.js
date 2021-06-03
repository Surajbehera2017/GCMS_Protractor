var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.document_structure.createunit;

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 
   //DOUBT
	
	it('Add and remove table', function () {

		browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.
        rightpanelpage.clickAddNewUnitFromXml();
        rightpanelpage.enterUnitName(loaded.unitname);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        rightpanelpage.enterunit(loaded.rubric);
        rightpanelpage.clicktitleFrame();
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        rightpanelpage.enterunidad(loaded.unidad);
        rightpanelpage.cliclPastefromXml ();
        rightpanelpage.clickPasteTest ();
        rightpanelpage.entertextinExternalText1(loaded.text) ;
        rightpanelpage.clcikInsertButton() ;
        rightpanelpage.clickCapaTextoInNewUNit();
        rightpanelpage.movemousetoInsertElements();
        rightpanelpage.clickFaltaFigura();
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        rightpanelpage.clickImageFrame();
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        rightpanelpage.clickImageFrame();
        rightpanelpage.enterimagename(loaded.test);
        rightpanelpage.enterimageref(loaded.test);
        rightpanelpage.clcikInsertButton() ;
         browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false; 
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.waitForAngular();
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
         
        
        
}); 
    
});