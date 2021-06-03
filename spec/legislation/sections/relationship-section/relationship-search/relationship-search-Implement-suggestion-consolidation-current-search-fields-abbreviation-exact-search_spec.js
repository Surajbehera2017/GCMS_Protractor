var params = browser.params;
//i18n basic support
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
var LegislationDocumentDisplayPage = require('../../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3475';
var jiraNumber2 = 'GCMSQABANG-3477';
var jiraNumber3 = 'GCMSQABANG-3478';
var jiraNumber4 = 'GCMSQABANG-3479';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  it(' Implement suggestion for consolidation current search fields - Abbreviation - Exact search.'+jiraNumber1, function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var abv = relationshipsearchpage.isAbbrevationFieldPresent();
     if(abv)
          {
              expect(abv).toEqual(true);
          }
      relationshipsearchpage.clickAbbreviationDropdown();
      relationshipsearchpage.sendKeyAbbreveiation(loaded.abbreviation_id);
      //relationshipsearchpage.clickSearchButtonAbbreveiation();
      var getAbv = relationshipsearchpage.getTextofAbbrrevationField();
      expect(getAbv).toEqual(loaded.abbreviation_id);
      
      
    });
    
    it(' Implement suggestion for consolidation current search fields - Abbreviation - First search.'+jiraNumber2, function() {
        
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var abv = relationshipsearchpage.isAbbrevationFieldPresent();
     if(abv)
          {
              expect(abv).toEqual(true);
          }
    relationshipsearchpage.clickAbbreviationDropdown(); 
    relationshipsearchpage.sendKeyAbbreveiationFirst(loaded.abbreviation_first);
     var suggAbv = relationshipsearchpage.isAbbreveiationSuggestionPresent();
     if(suggAbv)
         {
             expect(suggAbv).toEqual(true);
         }
        
        
    });
    
   it(' Implement suggestion for consolidation current search fields - Abbreviation - Second search.'+jiraNumber3, function() {
        
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var abv = relationshipsearchpage.isAbbrevationFieldPresent();
     if(abv)
          {
              expect(abv).toEqual(true);
          }
    relationshipsearchpage.clickAbbreviationDropdown();
     relationshipsearchpage.sendKeyAbbreveiationSecond(loaded.abbreviation_second);
     var suggAbv = relationshipsearchpage.isAbbreveiationSuggestionPresentSecond();
     if(suggAbv)
         {
             expect(suggAbv).toEqual(true);
         }
        
        
    });
    
    it('Implement suggestion for consolidation current search fields - Abbreviation- Enter key.'+jiraNumber4, function() {
        
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var abv = relationshipsearchpage.isAbbrevationFieldPresent();
     if(abv)
          {
              expect(abv).toEqual(true);
          }
    relationshipsearchpage.clickAbbreviationDropdown(); 
    relationshipsearchpage.sendKeyAbbreveiationThird(loaded.abbreviation_third);
     relationshipsearchpage.enterAbbreviationfield();    
     var getTextAbv = relationshipsearchpage.getTextofAbbrrevationField(); 
    
     expect(getTextAbv).toEqual(loaded.abbreviation_third);
    
    });
});
    
    
    

    
