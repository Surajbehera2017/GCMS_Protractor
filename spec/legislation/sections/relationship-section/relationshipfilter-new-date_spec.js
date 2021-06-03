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
  TC10 - Relations - Filter by New Date - Filter by date - Target link  - Percentage percentage
  */
    	
  it('Filter-TargetNewDate by %% GCMSQABANG-1957', function () {
     
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
    
  //TC07 - Relations - Filter by New Date - Filter by date - Target link - Filter empty

    it('Filter-TargetNewDate by no space GCMSQABANG-3586', function () {
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.nospace);
         browser.waitForAngular();
       relationshippage.valueunderfilter();
        browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });
    
    
 //TC06 - Relations - Filter by New Date - Filter by date - Target link  - 08-01-1993
   
    it('Filter-TargetNewDate by date GCMSQABANG-3585', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.newdate);
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();    
      
      });
    
      /*
      TC09 - Relations - Filter by New Date - Filter by date - Target link - Original
*/
    it('Filter-TargetNewDate by orginal GCMSQABANG-3588', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.enterTargetNewDateField(testData.legislation.sections.relationShip.newdateorginal);
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();    
      
      });
    

      
      });
    
           
      

    