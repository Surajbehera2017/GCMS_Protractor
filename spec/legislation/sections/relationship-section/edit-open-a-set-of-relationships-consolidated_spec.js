var params = browser.params;
var jiraNumber ='GCMSQABANG-3775';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});


  /*
   * 03 - Relationship - Open a set of consolidated relationships
   * - Open set of Not consolidated.
   */

  it('Relationship - Edit - Open a set of non consolidated relationships.'+jiraNumber, function () {

    globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
 
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
      
      
		//Verify relationship table & order data is displayed
		expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
    expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
    browser.waitForAngular();
    
     relationshippage.filterbyConsolidation(loadedData.yes);

   globalpage.selectNoOfRows(loadedData.rows);
   relationshippage.clickonEditButtonInRelTable();
    
  
    
//Click edit and verify all selected items are displayed in the collector
    
    var countofrows = element.all(by.css('#relationshipsCollectorContainer input'));
    expect(countofrows.count()).toBe(1);
    browser.sleep(2000);
    
    // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    relationshippage.closeAddorEditRelationshipPopup();
    authorNotes.clickOnButtonForGlobal('Yes');
    //close relationship table
    
    globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);
 

});
});