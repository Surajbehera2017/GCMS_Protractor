var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var jiraNumber ='GCMSQABANG-1943';
var jiraNumber1='GCMSQABANG-1946';
var jiraNumber2='GCMSQABANG-1947';
var jiraNumber3='GCMSQABANG-1944';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {
         
    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loaded.marginal_id);
    relationshippage.urlLoad(params.valid_username,params.valid_password);
        
	});
    
    /*
    TC01 - Relations - Filter by Target Unit and Level - View All -  Filter by unitlevel
*/	
  it('Filter-unit target-unitlevel.'+jiraNumber, function () {
     
    
    browser.waitForAngular();
           
    globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
    browser.sleep(3000);
    globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
    browser.waitForAngular();
    browser.waitForAngular();
    relationshippage.filterbyTargetUnitlevel('%A.175%');//1#A.175/regla 6ª
    browser.waitForAngular();
    browser.sleep(2000);
    var sourceelementpresent=globalpo.isElementPresent(loaded.unitelement);
    expect(sourceelementpresent).toEqual(true);
    browser.waitForAngular();
    globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
    browser.waitForAngular();
      
      });
    
    /*
    TC04 - Relations - Filter by Target Unit and Level - View All -  Filter Space
*/
    it('Filter-unit space.'+jiraNumber1, function () {
      browser.waitForAngular();
           
      globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
      browser.sleep(3000);
      globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
      browser.waitForAngular();
      browser.waitForAngular();
      relationshippage.filterbyTargetUnitlevel(loaded.text);
      browser.waitForAngular();
     // browser.sleep(2000);
      var sourceelementpresent=globalpo.isElementPresent(loaded.unitelement);
      expect(sourceelementpresent).toEqual(true);
      browser.waitForAngular();
      globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
      browser.waitForAngular();
      });
 
    /*
    TC05 - Relations - Filter by Target Unit and Level - View All -  A percentage
*/
    it('Filter-unit clear-A%.'+jiraNumber2, function () {
       
    browser.waitForAngular();
           
    globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
    browser.sleep(3000);
    globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
    browser.waitForAngular();
    browser.waitForAngular();
    relationshippage.filterbyTargetUnitlevel('A%');//1#A.175/regla 6ª
    browser.waitForAngular();
    browser.sleep(2000);
    var sourceelementpresent=globalpo.isElementPresent(loaded.unitelement);
    expect(sourceelementpresent).toEqual(true);
    browser.waitForAngular();
    globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
    browser.waitForAngular();
     
         
      
      });
    
    /*
    TC02 - Relations - Filter by Target Unit and Level - View All -  Filter by percentage percentage
*/
    it('Filter-unit clear-%%.'+jiraNumber3, function () {
     
      browser.waitForAngular();
           
      globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);
      browser.sleep(3000);
      globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);
      browser.waitForAngular();
      browser.waitForAngular();
      relationshippage.filterbyTargetUnitlevel('%%');//1#A.175/regla 6ª
      browser.waitForAngular();
      browser.sleep(2000);
      var sourceelementpresent=globalpo.isElementPresent(loaded.unitelement);
      expect(sourceelementpresent).toEqual(true);
      browser.waitForAngular();
      globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);
      browser.waitForAngular();    
      
      });
    
    
    
});
    