var params = browser.params;

var jiraNumber ='GCMSQABANG-1940';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
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

  /*
    TC01 -  Relations - Filter by Consolidation Status - View All -  Filter by Yes
    */

  it('Relations - Filter by Consolidation Status - View All -  Filter by Yes.'+jiraNumber, function () {

    globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
 
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    
   //Verify relationship table & order data is displayed
		expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
    expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
    browser.waitForAngular();
    
     relationshippage.filterbyConsolidation(loadedData.yes);

    globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);
  });


  var jiraNumber1 ='GCMSQABANG-1941';
  it('Relations - Filter by Consolidation Status - View All -  Filter by no.'+jiraNumber1, function () {

    globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
 
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    
   //Verify relationship table & order data is displayed
		expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
    expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
    browser.waitForAngular();
    
     relationshippage.filterbyConsolidation(loadedData.no);

    globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);
  });

});