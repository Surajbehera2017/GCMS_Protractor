var params = browser.params;
//i18n basic support
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
//var LegislationDocumentDisplayPage = require('../../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3368';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  it('data and action buttons to be displayed - Header', function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     relationshipsearchpage.clickMarginalDropdown();
     relationshipsearchpage.sendMarginalLEG(loaded.marginal_leg);
     relationshipsearchpage.clickSearchMarginal();
     browser.waitForAngular();
     relationshipsearchpage.sendYear1(testData.legislation.sections.relationship_search.marginal_year1);
     relationshipsearchpage.sendNumber1(testData.legislation.sections.relationship_search.marginal_number1);
     relationshipsearchpage.clickSearchButtonRelationship();
     var relationshipTrue = relationshipsearchpage.isRelationshipTablePresent();
     if(relationshipTrue)
      {
     expect(relationshipTrue).toEqual(true);
      }
      var relationshipTableHeader = relationshipsearchpage.isTableHeaderPresent();
      if(relationshipTableHeader)
      {
     expect(relationshipTableHeader).toEqual(true);
      }
      
     });
    
    xit('data and action buttons to be displayed - Legislation source', function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     relationshipsearchpage.clickMarginalDropdown();
     relationshipsearchpage.sendMarginalLEG(testData.legislation.sections.relationship_search.marginal_leg);
     relationshipsearchpage.clickSearchMarginal();
     browser.waitForAngular();
     relationshipsearchpage.sendYear1(testData.legislation.sections.relationship_search.marginal_year1);
     relationshipsearchpage.sendNumber1(testData.legislation.sections.relationship_search.marginal_number1);
     relationshipsearchpage.clickSearchButtonRelationship();
     browser.waitForAngular();
     var marginalNum = relationshipsearchpage.isMarginalNumberPresent();
     if(marginalNum)
         {
             expect(marginalNum).toEqual(true);
         }
    
     var unit = relationshipsearchpage.isUnitPresent();
     if(unit)
         {
             expect(unit).toEqual(true);
         }
    
     var level = relationshipsearchpage.isLevelPresent();
     if(level)
         {
             expect(level).toEqual(true);
         }
        
     var relacion = relationshipsearchpage.isRelacionTabPresent();    
     if(relacion)
         {
             expect(relacion).toEqual(true);
         }
        
        
        
     });
});
    
    
    
    
    

    
