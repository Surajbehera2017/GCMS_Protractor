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
        legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id9);
        relationshippage.urlLoad();
        
	});

	
//05- Not consolidated-Change the marginal target- Error

it('Not consolidated-Change the marginal target- Error', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.select13thcheckbox();
      relationshippage.clickedit();
      browser.waitForAngular();

            
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code2);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year3);
      relationshippage.enterN(testData.legislation.sections.relationShip.n3);
        
        
      var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
      expect(analysttabdisabled).toEqual('true');
    
      relationshippage.clickSave();
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    
      

});
    //06- Not consolidated-Change the marginal target

     it('Not consolidated-Change the marginal target', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.select13thcheckbox();
      relationshippage.clickedit();
      browser.waitForAngular();

            
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code2);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year3);
      relationshippage.enterN(testData.legislation.sections.relationShip.n2);
        
        
      var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
      expect(analysttabdisabled).toEqual('true');
    
      relationshippage.clickSave();
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
       
         
      relationshippage.select13thcheckbox();
      relationshippage.clickedit();
      browser.waitForAngular();

            
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.yearfive);
      relationshippage.enterN(testData.legislation.sections.relationShip.nfive);
       relationshippage.clickSave();   
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
         
         
    
      

});
  //07- Not consolidated- Change  unit from target  
    
    it('Not consolidated- Change  unit from target', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.selectcheckbox3();
      relationshippage.clickedit();
      browser.waitForAngular();
     
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
        
      var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
      expect(analysttabdisabled).toEqual('true');
    
      relationshippage.clickSave();
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
        
        relationshippage.select7thcheckbox();
      relationshippage.clickedit();
      browser.waitForAngular();
     
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unitsix);
        
      var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
      expect(analysttabdisabled).toEqual('true');
    
      relationshippage.clickSave();
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
        
        
        
         
        
        
        
       
     
});
    
  //08- Not consolidated- Change  nivel from target
  
    it('Not consolidated- Change  nivel from target', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      
      relationshippage.clickShowRelationshipfilter();
      relationshippage.enterRelationshiptypeinFilter(testData.legislation.sections.relationShip.type5);
      
      browser.waitForAngular();
      relationshippage.select6thcheckbox();
     
       relationshippage.clickedit();
      browser.waitForAngular();
      
     
      relationshippage.selectNewSectionOfDestination();
       
        browser.waitForAngular();
       var newleveldisabled= relationshippage.isEnabledCheckOfNewLevel();
      expect(newleveldisabled).toEqual('true');
    
        
     var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
      expect(analysttabdisabled).toEqual('true');
        
        relationshippage.clickSave();
        
      
       browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        relationshippage.clickOnYesButton();
         browser.waitForAngular();
         relationshippage.clearRelationshipFilter();
         browser.waitForAngular();
        relationshippage.closeRelationshipFilter();
        
});
    
//09-Not consolidated- Duplicated Error

it('Not consolidated- Duplicated Error', function () {
     
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      
      relationshippage.select16thcheckbox();
      relationshippage.clickedit();
      browser.waitForAngular();

       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.partthree);
        
     
       browser.waitForAngular(); 

      relationshippage.clickSave();
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    
      
    
    
});       
  
   
   
    
});