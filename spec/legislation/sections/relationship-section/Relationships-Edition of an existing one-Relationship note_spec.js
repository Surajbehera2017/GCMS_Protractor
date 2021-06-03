
var params = browser.params;
var jiraNumber ='GCMSQABANG-2138';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
    
//TC10 - Relationships - Edition of an existing one - Relationship note



it('Relationships - Edition of an existing one - Relationship note.'+jiraNumber, function () {
     
      globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.view);
     
      globalpage.clickOnbuttonInsideSectionTable(loadedData.showfilters);
    
      relationshippage.filterbyRelType(loadedData.Modifica);
      relationshippage.clickactionOnRelationshipTable(loadedData.edit_button);
      browser.waitForAngular();
      expect(relationshippage.isModalPresent(loadedData.Edit)).toBe(true);
      // add note to relationship note and verify if added or not
    var result=  relationshippage.sendValueTo(loadedData.RelationshipPanel,loadedData.NoteField,loadedData.Note);
    
      expect(result).toBe(true);
    
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      
      globalpage.clickOnNavigationOrCloseButton(loadedData.closebutton);

});


    
    
});