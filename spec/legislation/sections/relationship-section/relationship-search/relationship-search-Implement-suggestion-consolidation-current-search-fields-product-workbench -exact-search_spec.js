var params = browser.params;
//i18n basic support
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
//var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3469';
var jiraNumber2 = 'GCMSQABANG-3470';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  xit(' Implement suggestion for consolidation current search fields - Product workbench - Exact search.'+jiraNumber1, function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var product = relationshipsearchpage.isProductWorkbenchPresent();
     if(product)
         {
             expect(product).toEqual(true);
         }
      relationshipsearchpage.clickProductWorkbenchDropdown();
      relationshipsearchpage.sendKeystoProductWorkbench(loaded.product_first);
     // relationshipsearchpage.enterProductWorkbench();
      relationshipsearchpage.clickSearchProductWorkbench();
     var workbench = relationshipsearchpage.getTextofProductWorkbench();
     expect(workbench).toContain(loaded.product_first); 
      
      
 });
    
    it('Implement suggestion for consolidation current search fields - Product workbench - First search', function() {
       
         browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var product = relationshipsearchpage.isProductWorkbenchPresent();
     if(product)
         {
             expect(product).toEqual(true);
         }
      relationshipsearchpage.sendKeyProductWorkbenchSecond(loaded.product_second);
      relationshipsearchpage.isProductworkbenchSuggestionPresent();
        
    });
    
    xit('Implement suggestion for consolidation current search fields - Product workbench - Second search', function() {
       
         browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var product = relationshipsearchpage.isProductWorkbenchPresent();
     if(product)
         {
             expect(product).toEqual(true);
         }
      relationshipsearchpage.sendKeyProductWorkbenchThird(testData.legislation.sections.relationship_search.product_third);
      relationshipsearchpage.isProductworkbenchSuggestionPresent();
        
    });
    
    xit('Implement suggestion for consolidation current search fields - Product workbench - Enter key', function() {
       
         browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var product = relationshipsearchpage.isProductWorkbenchPresent();
     if(product)
         {
             expect(product).toEqual(true);
         }
      relationshipsearchpage.sendKeyProductWorkbenchThird(testData.legislation.sections.relationship_search.product_third);
      //relationshipsearchpage.enterProductWorkBenchField();
      var workbench = relationshipsearchpage.getTextofProductWorkbench();
     //expect(workbench).toEqual('WEB-Legis'); 
        
    });
    
 });
    
    
    

    
