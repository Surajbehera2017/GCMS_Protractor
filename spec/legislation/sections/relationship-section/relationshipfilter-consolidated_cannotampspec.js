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
    
    	
  it('Filter-Relationshiptype by nospace', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.selectConsildatedFilterYes();
       browser.waitForAngular();
       relationshippage.valueunderfilter();
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      
      });
    
    
    it('Filter-Relationshiptype by percentageA', function () {
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.selectConsildatedFilterNo();
         browser.waitForAngular();
       relationshippage.valueunderfilter();
        browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });
    
    
   //TC05 -  Relations - Filter by Consolidation Status - Target 542 - Filter by no
 
    it('Filter-Relationshiptype by typefilter ', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
       browser.waitForAngular();
       relationshippage.clickShowRelationshipfilter();
       relationshippage.selectConsildatedFilterNo();
       browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();    
      
      });
    
  
    

      
      });
    
           
      

    