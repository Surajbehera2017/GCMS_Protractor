var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id4);
      relationshippage.urlLoad();
        
	});
    
    	
  it('Check source document with %%', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       
       var result =  relationshippage.isDisplayedButtonDisplayed();
       if (result = 0)
           {
               expect(result).toEqual(0);
           }
      
      
      
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      
      });
    
    
    it('Check source document with nothing', function () {
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.selectFirstcheckbox();
        var result =  relationshippage.isDisplayedButtonDisplayed();
       if (result =1)
           {
               expect(result).toEqual(1);
           }
        
        browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });
    
    
    
    it('Check source document with space', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize(); 
        relationshippage.expandRelationshipTable();
        browser.waitForAngular();
       relationshippage.selectFirstcheckbox();
       relationshippage.selectFirstcheckbox(); 
        
        var result =  relationshippage.isDisplayedButtonDisplayed();
       if (result =0)
           {
               expect(result).toEqual(0);
           }
        
        
        
        
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();    
      
      });
    
    
    
    
           
      
});
    