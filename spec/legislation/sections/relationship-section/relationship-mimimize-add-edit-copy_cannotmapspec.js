var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var testdataspec =testData.legislation.sections.relationShip.minimizeADDCOPYEDIT;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');



describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testdataspec.marginalid);
      relationshippage.urlLoad();
        
	});
    
    	
  it('Minimize Add window', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       browser.waitForAngular();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
        relationshippage.isMinimizePopup();
      
      
     
      
      
     });
    
    
    it('Minimize Copy window', function () {
       
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       browser.waitForAngular();
       relationshippage.expandRelationshipTable();
       relationshippage.clickExpanEDitCopyPaste();
        browser.waitForAngular();
        
       relationshippage.clickCopyfirstrelationship();
       browser.waitForAngular();
       relationshippage.isMinimizePopup();
       
      
      
});
    
    
    it('Minimize Edit window', function () {
     
      
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       browser.waitForAngular();
       relationshippage.expandRelationshipTable();
       relationshippage.clickExpanEDitCopyPaste();
       relationshippage.clickEditfirstrelationship();
        browser.waitForAngular();
        relationshippage.isMinimizePopup();
		
      
      
      
     });
    
    
    
    
    
    
    
    
    
    

      
      });
    
           
      

    