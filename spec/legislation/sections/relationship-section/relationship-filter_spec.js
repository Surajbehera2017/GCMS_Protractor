var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var jiraNumber ='GCMSQABANG-1887';
var jiraNumber1='GCMSQABANG-1888';
var jiraNumber2='GCMSQABANG-1889';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {
    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loaded.marginal_id);
    relationshippage.urlLoad(params.valid_username,params.valid_password);
        
	});
    
    	
  it('Check source document with %%.'+jiraNumber, function () {
     
       browser.waitForAngular();
           
       globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
       browser.sleep(3000);
       globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
       browser.waitForAngular();
       browser.waitForAngular();
       relationshippage.filterbySourceid(loaded.wildcardtext);
       browser.waitForAngular();
       var sourceelementpresent=globalpo.isElementPresent(loaded.sourceelement);
       expect(sourceelementpresent).toEqual(true);
       browser.waitForAngular();
       globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
       browser.waitForAngular();
       
      
      });
    

    
    
    it('Check source document with nothing.'+jiraNumber1, function () {
      browser.waitForAngular();
           
      globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
      browser.sleep(3000);
      globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
      browser.waitForAngular();
      browser.waitForAngular();
      relationshippage.filterbySourceid(loaded.emptytext);
      browser.waitForAngular();
      var sourceelementpresent=globalpo.isElementPresent(loaded.sourceelement);
      expect(sourceelementpresent).toEqual(true);
      browser.waitForAngular();
      globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
      browser.waitForAngular();
      });
    
    
    
    it('Check source document with space.'+jiraNumber2, function () {
     
      browser.waitForAngular();
           
      globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
      browser.sleep(3000);
      globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
      browser.waitForAngular();
      browser.waitForAngular();
      relationshippage.filterbySourceid(' ');
      browser.sleep(3000);
      browser.waitForAngular();
      var sourceelementpresent=globalpo.isElementPresent(loaded.sorceelenotpresent);
      expect(sourceelementpresent).toEqual(false);
      browser.waitForAngular();
      globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
      browser.waitForAngular();
      });
    
    
    
    
           
      
});
    