var params = browser.params;
var jiraNumber ='GCMSQABANG-1901';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
afterEach(function(){
   
   
    
  });
    

    /*
     * 05 - Edit Type of Relationship - Not Consolidated

     */

    it('Edit Type of Relationship - Not Consolidated.'+jiraNumber, function () {
       // click on add button on relationship section 
       globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
      

       //Verify type 
       relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
 
       //Enter mandatory fields in target
       relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
       relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
       relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
       //relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.unit);
       //relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.PartField,loadedData.part);
      
        // click on new section tab and select new unit
        relationshippage.clickOnTab(loadedData.newSectiontab);
        relationshippage.clickandSelect(loadedData.newunit,loadedData.unit);

     //Click Add & verify the unit created

relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

// verify if Relationship added to collector or not
expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);

browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        // filter nonconsolidated 
        globalpage.clickOnSectionButton(loadedData.Relationships,'view');
        globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
        browser.waitForAngular();
  
              relationshippage.filterbyRelType(loadedData.relation_type);
              browser.waitForAngular();
              relationshippage.filterbyConsolidation(loadedData.no);
             browser.waitForAngular();
            relationshippage.clickactionOnRelationshipTable(loadedData.edit);

           //change type to modifica
    relationshippage.clickandSelect(loadedData.TypeField,loadedData.Modifica);
    relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.unit);
    relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.PartField,loadedData.part);
  //Click Add & verify the unit created

relationshippage.clickOnRelPopUpButtons(loadedData.save);

// verify if Relationship added to collector or not
expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
browser.waitForAngular();
browser.sleep(3000);
relationshippage.clickOnIcon('collector','deleteRela');
browser.waitForAngular();
browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

globalpage.clickOnNavigationOrCloseButton(loadedData.closebutton);

               
        
     }); 
    
  });