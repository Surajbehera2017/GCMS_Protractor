var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id1);
      relationshippage.urlLoad();
        
	});
    /*
    TC07 - Relations - Filter by New Unit -Target 542 -  Filter by percentage percentage
    */
    	
  it('Filter-TargetNewUnit by %% GCMSQABANG-3591', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.percentage);
       browser.waitForAngular();
       relationshippage.valueunderfilter();
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      
      });
    /*
    TC10 - Relations - Filter by Target Unit and Level - Target 542 -  A percentage
    TC10 - Relations - Filter by New Unit - Target 542 -  A percentage
*/
    
    it('Filter-TargetNewUnit by percentageA GCMSQABANG-3594 GCMSQABANG-1932', function () {
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.percentageA);
         browser.waitForAngular();
       relationshippage.valueunderfilter();
        browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });
    
 
    
    it('Filter-TargetNewUnit by newtargetunit ', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.newunittarget);
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();    
      
      });
    
  
    

      
      });
    
           
      

    