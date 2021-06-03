var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id6);
        relationshippage.urlLoad(params.valid_username, params.valid_password);
        //contextindexpage.urlLoad();
        
	});

	
  it('Add relationship Constitucionalidad según interpretación - Requiered fields GCMSQABANG-2158', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();      
      /*relationshippage.selectTypeDropdown1();
      relationshippage.enterRelationShiptype1(testData.legislation.sections.relationShip.type2);
      */
     relationshippage.clickandSelect('type',testData.legislation.sections.relationShip.type2);
      browser.waitForAngular();
         
      relationshippage.selectCodeDropdownOfDestination1();
      relationshippage.enterCode1(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n1);
      
      browser.waitForAngular();
      
      relationshippage.selectUnitFromDocumentStructureOfTarget();
      relationshippage.selectTheFirstCheckboxOfTargetDocStructure();
      relationshippage.clickOnOkButtonAfterChecking();
      relationshippage.selectDateDropdownOfTarget();
      relationshippage.selectOptionOfDateInTarget();
      
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
     
});
    
 
    
    it('Add relationship Declara carácter basico - Requiered fields GCMSQABANG-2165', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();      
      /*relationshippage.selectTypeDropdown1();
      relationshippage.enterRelationShiptype1(testData.legislation.sections.relationShip.type3);
        */
       relationshippage.clickandSelect('type',testData.legislation.sections.relationShip.type2);
      browser.waitForAngular();
         
      relationshippage.selectCodeDropdownOfDestination1();
      relationshippage.enterCode1(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n1);
      
      browser.waitForAngular();
      
      relationshippage.selectUnitFromDocumentStructureOfTarget();
      relationshippage.selectTheFirstCheckboxOfTargetDocStructure();
      relationshippage.clickOnOkButtonAfterChecking();
      relationshippage.selectDateDropdownOfTarget();
      relationshippage.selectOptionOfDateInTarget();
        
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
     
}); 
    
    
    
    
     it(' Add relationship Constitucionalidad según interpretación - New Section GCMSQABANG-2159', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();      
      /*relationshippage.selectTypeDropdown1();
      relationshippage.enterRelationShiptype1(testData.legislation.sections.relationShip.type2);
      */
     relationshippage.clickandSelect('type',testData.legislation.sections.relationShip.type2);
        
      browser.waitForAngular();
         
      relationshippage.selectCodeDropdownOfDestination1();
      relationshippage.enterCode1(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n1);
      
      browser.waitForAngular();
      
      relationshippage.selectUnitFromDocumentStructureOfTarget();
      relationshippage.selectTheFirstCheckboxOfTargetDocStructure();
      relationshippage.clickOnOkButtonAfterChecking();
      relationshippage.selectDateDropdownOfTarget();
      relationshippage.selectOptionOfDateInTarget();
         
      
      var spectalebutton= relationshippage.isEnabledCheckForNewSectionInTarget();
      expect(spectalebutton).toEqual('true');

      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
     
}); 
    
    
    
    it('Add relationship Declara carácter basico - New Section GCMSQABANG-2163', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();      
      /*relationshippage.selectTypeDropdown1();
      relationshippage.enterRelationShiptype1(testData.legislation.sections.relationShip.type2);
      */
     relationshippage.clickandSelect('type',testData.legislation.sections.relationShip.type2);
        
      browser.waitForAngular();
         
      relationshippage.selectCodeDropdownOfDestination1();
      relationshippage.enterCode1(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n1);
      
      browser.waitForAngular();
      
      relationshippage.selectUnitFromDocumentStructureOfTarget();
      relationshippage.selectTheFirstCheckboxOfTargetDocStructure();
      relationshippage.clickOnOkButtonAfterChecking();
      relationshippage.selectDateDropdownOfTarget();
      relationshippage.selectOptionOfDateInTarget();
         
       browser.waitForAngular();
      var spectalebutton= relationshippage.isEnabledCheckForNewSectionInTarget();
      expect(spectalebutton).toEqual('true');
      
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
     
});       

});
    