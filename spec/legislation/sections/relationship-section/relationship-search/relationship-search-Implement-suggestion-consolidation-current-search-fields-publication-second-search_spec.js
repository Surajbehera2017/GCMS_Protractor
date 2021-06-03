var params = browser.params;
//i18n basic support
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
//var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3466';
var jiraNumber2 = 'GCMSQABANG-3465';
var jiraNumber3 = 'GCMSQABANG-3467';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  it('Implement suggestion for consolidation current search fields - Publication - Second search.'+jiraNumber1, function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     var publication = relationshipsearchpage.isPublicationFieldPresent();
     if(publication)
         {
             expect(publication).toEqual(true);
         }
      relationshipsearchpage.sendPublicationKeyword(loaded.publication_first);
      var publishSuggestion = relationshipsearchpage.isPublicationSuggestionPresent();
      if(publishSuggestion)
          {
              expect(publishSuggestion).toEqual(true);
          }
      
     });
    
    it(' Implement suggestion for consolidation current search fields - Publication - First search.'+jiraNumber2, function () {
     
     browser.waitForAngular();
     relationshipsearchpage.clickClearAllButton();
      var publication = relationshipsearchpage.isPublicationFieldPresent();
     if(publication)
         {
             expect(publication).toEqual(true);
         }
     browser.waitForAngular();
     relationshipsearchpage.sendPublicationKeywordSecond(loaded.publication_second);
     var publishSuggestion = relationshipsearchpage.isPublicationSuggestionPresent();
      if(publishSuggestion)
          {
              expect(publishSuggestion).toEqual(true);
          }
    
     });
    
    it(' Implement suggestion for consolidation current search fields - Publication - Enter key.'+jiraNumber3, function () {
     
     browser.waitForAngular();
     //relationshipsearchpage.clickClearAllButton();
      var publication = relationshipsearchpage.isPublicationFieldPresent();
     if(publication)
         {
             expect(publication).toEqual(true);
         }
     relationshipsearchpage.sendPublicationKeywordThird(loaded.publication_third);
     relationshipsearchpage.enterPublicationKeywordThird();
     var publicationEnterTab = relationshipsearchpage.isPublicationAddedTabPresent();
     if(publicationEnterTab)
         {
             expect(publicationEnterTab).toEqual(true);
         }
     var addedText = relationshipsearchpage.getTextofAddedPublication();
     expect(addedText).toEqual(loaded.publication_third);   
});
    
});
    
    
    

    
