var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id5);
        relationshippage.urlLoad();
        
	});
/*
01 - Go back button 1.0
*/
	
  it('Go back Button GCMSQABANG-3487', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();      
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

     
      
     
});  
  /*
  02 - Add  - Modifica
*/  
    
    it('Add-modifica GCMSQABANG-1906', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
      relationshippage.selectUnitDropdown();
      relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit);
      
      relationshippage.selectTypeDropdown();
      relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type);
        
        
      relationshippage.selectCodeDropdownOfDestination();
      relationshippage.enterCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year);
      relationshippage.enterN(testData.legislation.sections.relationShip.n);
        
       relationshippage.enterBody(testData.legislation.sections.relationShip.body); 
        relationshippage.selectUnitDropdownOfDestination();
         relationshippage.UnitSearchAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
         relationshippage.selectPartDropdownOfDestination();
         relationshippage.PartSearchAndEnterOfDestination(testData.legislation.sections.relationShip.part);
        
        relationshippage.selectNewSectionOfDestination();
         relationshippage.enterNewLevelOfDestination(testData.legislation.sections.relationShip.newlevel);
        
        relationshippage.clickOnAddButton();
         browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        relationshippage.clickShowRelationshipfilter();
        relationshippage.entermarginalid();
        browser.waitForAngular();
        relationshippage.selectFirstcheckbox();
        relationshippage.clickDeleteRelationShip();
        browser.waitForAngular();
        relationshippage.clickOkpopup();
        browser.waitForAngular();
        relationshippage.clearmarginalid();
        relationshippage.closeRelationshipFilter();
        
        
    
});  
    
   /*
   05 - Add  - Véase
*/ 
    
     it('Add- Véase GCMSQABANG-1907', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
      relationshippage.selectUnitDropdown();
      relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit);
      
      relationshippage.selectTypeDropdown();
      relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type1);
        
        
      relationshippage.selectCodeDropdownOfDestination();
      relationshippage.enterCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n1);
      browser.waitForAngular();
      relationshippage.clickOnAddButton();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      relationshippage.clickShowRelationshipfilter();
      relationshippage.entermarginalidofVéase();
      browser.waitForAngular();
      relationshippage.selectFirstcheckbox();
      relationshippage.clickDeleteRelationShip();
      browser.waitForAngular();
      relationshippage.clickOkpopup();
      browser.waitForAngular();
      relationshippage.clearmarginalid();
      relationshippage.closeRelationshipFilter();
    
        

     
     });  
    
    


});
    