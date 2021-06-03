
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

	
//02- Add a Actualiza for unit


it('Add a Actualiza for unit', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
      relationshippage.select1stUnitDropdown();
      relationshippage.UnitSearch1stAndEnter(testData.legislation.sections.relationShip.unit3);
      relationshippage.select1stPartDropdownOfSource();
      relationshippage.partSearch1stAndEnterOfSource(testData.legislation.sections.relationShip.part1);
      
      relationshippage.select1stTypeDropdown();
      relationshippage.enter1stRelationShipType(testData.legislation.sections.relationShip.typesix);
        
        
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n4);
        
       
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.part);
        
     
       var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
       expect(analysttabdisabled).toEqual('true');
      
    
      browser.waitForAngular();
      
    
      
      relationshippage.clickOnAddButton();
       
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    
      relationshippage.clickShowRelationshipfilter();
      relationshippage.entermarginalidOfSource();
      relationshippage.enterunitlevelOfSource(testData.legislation.sections.relationShip.unitlvlofsrc); 
      relationshippage.entermarginalidOfTarget();
      relationshippage.enterunitlevelOfTarget(testData.legislation.sections.relationShip.unitlvloftarget);
      
      browser.waitForAngular();
      relationshippage.selectcheckbox11();
      browser.waitForAngular();
      relationshippage.clickDeleteButton11();
      browser.waitForAngular();
      relationshippage.clickOkpopup();
      relationshippage.closeRelationshipFilter();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
    

});

  //03-Add a Actualiza with no legis marginal  for the target
  
    
   it('Add a Actualiza with no legis marginal  for the target', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
      relationshippage.select1stUnitDropdown();
      relationshippage.UnitSearch1stAndEnter(testData.legislation.sections.relationShip.unit3);
      relationshippage.select1stPartDropdownOfSource();
      relationshippage.partSearch1stAndEnterOfSource(testData.legislation.sections.relationShip.part1);
      
      relationshippage.select1stTypeDropdown();
      relationshippage.enter1stRelationShipType(testData.legislation.sections.relationShip.typesix);
        
        
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.codeseven);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year4);
      relationshippage.enterN(testData.legislation.sections.relationShip.n2);
        
       
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.part);
        
     
       var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
       expect(analysttabdisabled).toEqual('true');
      
    
      browser.waitForAngular();
      
    
      
      relationshippage.clickOnAddButton();
       
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
    
      relationshippage.clickShowRelationshipfilter();
      relationshippage.entermarginalidOfSource();
      relationshippage.enterunitlevelOfSource(testData.legislation.sections.relationShip.unitlvlofsrc); 
      relationshippage.entermarginalidOfTarget();
      relationshippage.enterunitlevelOfTarget(testData.legislation.sections.relationShip.unitlvloftarget);
      
      browser.waitForAngular();
      
      relationshippage.closeRelationshipFilter();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
    

});
    
  
  //02- Add a Deroga Parcialmente for unit
  
    

it('Add a Deroga Parcialmente for unit', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
    

       relationshippage.select1stUnitDropdown();
      relationshippage.UnitSearch1stAndEnter(testData.legislation.sections.relationShip.unit3);
      relationshippage.select1stPartDropdownOfSource();
      relationshippage.partSearch1stAndEnterOfSource(testData.legislation.sections.relationShip.part1);
      
     
      relationshippage.select1stTypeDropdown();
      relationshippage.enter1stRelationShipType(testData.legislation.sections.relationShip.typeseven);
        
        
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n4);
        
       
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.part);
       relationshippage.enterLevelfieldInTarget(testData.legislation.sections.relationShip.levelone); 
     
       var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
       expect(analysttabdisabled).toEqual('true');
      
    
      browser.waitForAngular();
      
    
      
      relationshippage.clickOnAddButton();
       
      browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    
      relationshippage.clickShowRelationshipfilter();
      relationshippage.entermarginalidOfSource();
      relationshippage.enterunitlevelOfSource(testData.legislation.sections.relationShip.unitlvlofsrc); 
      relationshippage.entermarginalidOfTarget();
      relationshippage.enterunitlevelOfTarget(testData.legislation.sections.relationShip.unitlvloftarget);
      
      browser.waitForAngular();
      relationshippage.selectcheckbox11();
      browser.waitForAngular();
      relationshippage.clickDeleteButton11();
      browser.waitForAngular();
      relationshippage.clickOkpopup();
      relationshippage.closeRelationshipFilter();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
    

});
    //05-Add a Deroga Parcialmente relationship duplicate

    
    it('Add a Deroga Parcialmente relationship duplicate', function () {
     
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      relationshippage.clickAddButtonOnTop();      
    
    

       relationshippage.select1stUnitDropdown();
      relationshippage.UnitSearch1stAndEnter(testData.legislation.sections.relationShip.unit3);
      relationshippage.select1stPartDropdownOfSource();
      relationshippage.partSearch1stAndEnterOfSource(testData.legislation.sections.relationShip.part1);
      
     
      relationshippage.select1stTypeDropdown();
      relationshippage.enter1stRelationShipType(testData.legislation.sections.relationShip.typeseven);
        
        
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n4);
        
       
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.part);
       relationshippage.enterLevelfieldInTarget(testData.legislation.sections.relationShip.levelone); 
     
       var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
       expect(analysttabdisabled).toEqual('true');
      
    
      browser.waitForAngular();
      
      relationshippage.clickOnAddButton();
       
    
      relationshippage.clickOnClearFormIcon();
        
      relationshippage.select1stUnitDropdown();
      relationshippage.UnitSearch1stAndEnter(testData.legislation.sections.relationShip.unit3);
      relationshippage.select1stPartDropdownOfSource();
      relationshippage.partSearch1stAndEnterOfSource(testData.legislation.sections.relationShip.part1);
      
     
      relationshippage.select1stTypeDropdown();
      relationshippage.enter1stRelationShipType(testData.legislation.sections.relationShip.typeseven);
        
        
      relationshippage.select1stCodeDropdownOfDestination();
      relationshippage.enter1stCode(testData.legislation.sections.relationShip.code);
      relationshippage.enterYear(testData.legislation.sections.relationShip.year1);
      relationshippage.enterN(testData.legislation.sections.relationShip.n4);
        
       
      relationshippage.select1stUnitDropdownOfDestination();
      relationshippage.UnitSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
       relationshippage.select1stPartDropdownOfDestination();
      relationshippage.PartSearch1stAndEnterOfDestination(testData.legislation.sections.relationShip.part);
       relationshippage.enterLevelfieldInTarget(testData.legislation.sections.relationShip.levelone); 
     
       var analysttabdisabled= relationshippage.isEditableCheckOfAnalystName();
       expect(analysttabdisabled).toEqual('true');
      
    
      browser.waitForAngular();
      
      relationshippage.clickOnAddButton();
        
       browser.waitForAngular();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    
      relationshippage.clickShowRelationshipfilter();
        
       relationshippage.unitOrLevelOfTarget(testData.legislation.sections.relationShip.unitorleveltwo);
      relationshippage.enterRelationshiptypeinFilter(testData.legislation.sections.relationShip.typeseven);
       
        
      browser.waitForAngular();
      relationshippage.selectcheckbox11();
      browser.waitForAngular();
      relationshippage.clickDeleteButton11();
      browser.waitForAngular();
      relationshippage.clickOkpopup();
      relationshippage.closeRelationshipFilter();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
      
       
        

});
    
    
    
    
    
    });