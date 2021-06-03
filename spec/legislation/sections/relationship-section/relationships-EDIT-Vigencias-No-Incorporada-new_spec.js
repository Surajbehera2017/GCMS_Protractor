var params = browser.params;
var jiraNumber ='GCMSQABANG-2115';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loaded.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
    

	/*
     *  08 - EDIT - Vigencias  - No Incorporada

     */

    it('EDIT - Vigencias  - No Incorporada.'+jiraNumber, function () {
     
    
      globalpage.expandSectionInLeftPanel(loaded.Relationships);
     
      relationshippage.clickonLinkInsideRelationship(loaded.Consolidations_link);
      globalpage.clickOnbuttonInsideSectionTable(loaded.showfilters);
      relationshippage.filterbyConsolidation(loaded.no);
      relationshippage.clickactionOnRelationshipTable(loaded.edit_button);
      
      var useranalyst=relationshippage.isAnalystNamePresentFor('native',loaded.analyst_name);
      expect(useranalyst).toEqual(false);
     
      browser.sleep(3000);
      relationshippage.closeAddorEditRelationshipPopup();
      authorNotes.clickOnButtonForGlobal('Yes');

      console.log("edit pop up closed");  
     
      relationshippage.clickOnLensIcon();
      console.log("clicked on lens icon");
     var analystDisplay = relationshippage.isNotesSectionEmptyinGlassIcon();
     expect(analystDisplay).toEqual(true);
     globalpage.clickOnNavigationOrCloseButton(loaded.closebutton);
     }); 
    
  });