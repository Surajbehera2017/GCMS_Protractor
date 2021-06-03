var params = browser.params;
//i18n basic support
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../po/relationshipsearch.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      var relationSearch = new RelationshipSearch(); 
        
       relationSearch.get(); 
      relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  it('validate target content', function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
     relationshipsearchpage.clickMarginalDropdown();
     relationshipsearchpage.sendMarginalLEG(testData.legislation.sections.relationship_search.marginal_leg);
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
      var targetmarginal = relationshipsearchpage.isMarginalNumberTargetPresent();
      if(targetmarginal)
          {
              expect(targetmarginal).toEqual(true);
          }
     
      var targetUnit = relationshipsearchpage.isUnitTargetPresent();
      if(targetUnit)
          {
              expect(targetUnit).toEqual(true);
          }
      var targetLevel = relationshipsearchpage.isLevelTargetPresent();
      if(targetLevel)
          {
              expect(targetLevel).toEqual(true);
          }
      var targetNewUnit = relationshipsearchpage.isNewUnitTargetPresent();
      if(targetNewUnit)
          {
              expect(targetNewUnit).toEqual(true);
          }
      var targetNewLevel = relationshipsearchpage.isNewLevelTargetPresent();
      if(targetNewLevel)
          {
              expect(targetNewLevel).toEqual(true);
          }
      
     });
});
    
    
    
    
    

    
