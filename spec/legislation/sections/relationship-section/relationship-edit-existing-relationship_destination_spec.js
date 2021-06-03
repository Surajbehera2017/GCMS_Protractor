var params = browser.params;
var jiraNumber ='GCMSQABANG-2137';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});
  //TC09 - Relationships - Edition of an existing one - Target- Unit - Fails
  it('edit_existing_relationships_destination.'+jiraNumber, function () {
    
    globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.view);
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    browser.waitForAngular();

          relationshippage.filterbyRelType(loadedData.relation_type);
          browser.waitForAngular();
          relationshippage.filterbyConsolidation(loadedData.yes);
         browser.waitForAngular();
        relationshippage.clickactionOnRelationshipTable(loadedData.edit);

   //verify if icon structure icon of target is enabled or not
  
    expect(relationshippage.isIconEnabled(relationshippage.structureIcon)).toBe(false);

  //close  edit window and table

 relationshippage.closeAddorEditRelationshipPopup();
 relationshippage.closeeditpopupmodal();
 globalpage.clickOnNavigationOrCloseButton('close');
  });
 });    
     