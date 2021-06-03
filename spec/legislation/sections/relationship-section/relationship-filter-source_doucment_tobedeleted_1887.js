var params = browser.params;
var jiraNumber ='GCMSQABANG-1886';

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

afterEach(function () {//Close additional tab

  globalpage.clickOnNavigationOrCloseButton(loadedData.CloseButton);
  browser.sleep(4000);
  browser.getAllWindowHandles().then(function (handles) {
  browser.switchTo().window(handles[0]);
      for (var i = 1; i < handles.length; i++) {
          browser.switchTo().window(handles[i]).then(function () {
              browser.close();
          }, function (error) {
             browser.switchTo().window(handles[0]);
          });
      }
      browser.switchTo().window(handles[0]);
  });
}); 


it('Filter By Source Document.'+jiraNumber, function () {

  globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
  browser.waitForAngular();
  globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
  browser.waitForAngular();
  relationshippage.filterbySourceDoc (loadedData.filterbysourdoc);
  browser.waitForAngular();
  expect(relationshippage.isResultDisplayedAfterFilter(loadedData.result)).toBe(true);
	
  // it('Filter By Source Document', function () {
     
  //      browser.waitForAngular();
  //      browser.driver.manage().window().maximize();
  //      relationshippage.expandRelationshipTable();
  //      browser.waitForAngular();
  //      relationshippage.clickShowRelationshipfilter();
  //      relationshippage.enterSourceDoc();
  //      relationshippage.valueunderfilter();
  //      browser.waitForAngular();
  //      relationshippage.closeRelationshipFilter();
  //      browser.waitForAngular();
  //     });  
           
      
});
});
    