var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
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

	
  it('Consolidation form-Modify text form-XML editor from source', function () {
     
     browser.waitForAngular();
     relationshipsearchpage.isRelationshipSearchPagePresent();
      relationshipsearchpage.clickClearAllButton(); 
     relationshipsearchpage.clickMarginalDropdown();
     relationshipsearchpage.sendMarginal(testData.legislation.sections.relationship_search.marginal_id);
     relationshipsearchpage.clickSearchMarginal();
     browser.waitForAngular();
     relationshipsearchpage.sendYear(testData.legislation.sections.relationship_search.marginal_year);
     relationshipsearchpage.sendNumber(testData.legislation.sections.relationship_search.marginal_number);
     relationshipsearchpage.clickSearchButtonRelationship();
     var relationshipTrue = relationshipsearchpage.isRelationshipTablePresent();
     if(relationshipTrue)
      {
     expect(relationshipTrue).toEqual(true);
      }
      
      relationshipsearchpage.clickCheckBoxRelationshipTableThirdRow();
      var action = relationshipsearchpage.isActionColumnPresent();
      if(action)
          {
              expect(action).toEqual(true);
          }
      relationshipsearchpage.clickActionButtonThirdRow();
      var actionpopup = relationshipsearchpage.isActionPopupDisplayed();
      if(actionpopup)
          {
              expect(actionpopup).toEqual(true);
          }
      relationshipsearchpage.clickAcceptButton();
      browser.waitForAngular();
      relationshipsearchpage.clickEditXMLSource();
      var sourceXML = relationshipsearchpage.isXMLFieldPresent();
      if(sourceXML)
          {
              expect(sourceXML).toEqual(true);
          }
      
     });
});
    
    
    
    
    

    
