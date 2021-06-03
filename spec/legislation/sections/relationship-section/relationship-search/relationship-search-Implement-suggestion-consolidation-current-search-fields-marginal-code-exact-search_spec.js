var params = browser.params;
//i18n basic support
//var I18n = require('../../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
//var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3481';
var jiraNumber2 = 'GCMSQABANG-3484';
var jiraNumber3 = 'GCMSQABANG-3485';
var jiraNumber4 = 'GCMSQABANG-3486';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

  it(' Implement suggestion for consolidation current search fields - Marginal code - Exact search.'+jiraNumber1, function() {
        
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var marginal = relationshipsearchpage.isMarginalFieldPresent();
     if(marginal)
         {
             expect(marginal).toEqual(true);
         }
     relationshipsearchpage.sendKeysMarginalField(loaded.marginal_key);
        
    });
    
    it(' Implement suggestion for consolidation current search fields - Marginal code - First search.'+jiraNumber2, function() {
        
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var marginal = relationshipsearchpage.isMarginalFieldPresent();
     if(marginal)
         {
             expect(marginal).toEqual(true);
         }
     relationshipsearchpage.sendKeysMarginalFirst(loaded.marginal_first);
     var marginalSuggest = relationshipsearchpage.isMarginalSuggestionPresent();
     if(marginalSuggest)
         {
             expect(marginalSuggest).toEqual(true);
         }
     
        
    });
    
    it('Implement suggestion for consolidation current search fields - Marginal code - Second search.'+jiraNumber3, function() {
        
       browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var marginal = relationshipsearchpage.isMarginalFieldPresent();
     if(marginal)
         {
             expect(marginal).toEqual(true);
         }
    relationshipsearchpage.sendKeysMarginalSecond(loaded.marginal_second); 
        
    relationshipsearchpage.isMarginalSuggestionPresentSecond();
        
        
    });
    
    it('Implement suggestion for consolidation current search fields - Marginal code- Enter key.'+jiraNumber4, function() {
        
        browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var marginal = relationshipsearchpage.isMarginalFieldPresent();
     if(marginal)
         {
             expect(marginal).toEqual(true);
         }
        
        relationshipsearchpage.sendKeysMarginalThird(loaded.marginal_third);
        //relationshipsearchpage.enterMarginalField();
        var getMarginal = relationshipsearchpage.getTextofMarginalField();
        if(params.BU=='br'){
            expect(getMarginal).toEqual('LGL');
        }
        else{
        expect(getMarginal).toEqual('LEG');
        }
      });
});
    
    
    

    
