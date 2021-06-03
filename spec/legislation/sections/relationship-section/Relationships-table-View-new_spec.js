var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-1882';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
  
  
           
    beforeAll(function () {
      
      browser.ignoreSynchronization = false;
      legisDocDisplayPage.get(loadedData.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
      
      });

	 
    /*
     * 03-Relationship table View
     */
    
    it('Relationship table View.' + jiraNumber, function () {
     
      browser.waitForAngular();
      globalfunction.clickOnSectionButton(loadedData.section,loadedData.viewbtn);
      browser.sleep(2000);
      globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
      browser.sleep(2000);
      rightpanelpage.expandSectionInLeftPanel(loadedData.section);
      browser.sleep(2000);
      relationshippage.clickonLinkInsideRelationship(loadedData.consolodation);
      browser.sleep(2000);
      globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
      browser.sleep(2000);
      //Open consolidation-source relations from relationship section
//relationshippage.clickOnSoureOrTargetOf(loadedData.consolidation,loadedData.cons_src);
      browser.sleep(2000);
      // globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
      // browser.sleep(2000);
      relationshippage.clickonLinkInsideRelationship(loadedData.annotations);
      // browser.sleep(2000);
       globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
      // browser.sleep(2000);
       relationshippage.clickOnSoureOrTargetOf(loadedData.annotations,loadedData.target);
      // browser.sleep(2000);
      globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
      









      // var relation = relationshippage.isRalationshipViewAllPresent();
      // expect(relation).toEqual(true);
      // var expand = relationshippage.isRelationshipCollapseButtonDisplayed();
      // expect(expand).toEqual(true);
      // relationshippage.clickRelationshipCollapseButtonDisplayed();
      // //browser.waitForAngular();
      // browser.sleep(5000);
      //   var consolidate = relationshippage.isConsolidationLinkPresent();
      //   expect(consolidate).toEqual(true);
      //   var getConsole = relationshippage.getTextConsolidationLinkPresent();
        
        
      //   relationshippage.clickConsolidationLinkRelationship();
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
      //   relationshippage.clickSubLinkInRelationshipSection('consolidation','source',0);
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
      //   relationshippage.clickSubLinkInRelationshipSection('consolidation','target',0);
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
        
      //   var annotation = relationshippage.isAnnotationLinkPresent();
      //   expect(annotation).toEqual(true);
        
      //   var getAnnotation = relationshippage.getAnnotationTextRelationship();
        
        
      //   relationshippage.clickAnnotationLinkRelationship();
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
      //   relationshippage.clickSubLinkInRelationshipSection('annotations','source',1);
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
      //   relationshippage.clickSubLinkInRelationshipSection('annotations','target',1);
      //   browser.waitForAngular();
      //   relationshippage.closeRelationshipViewAllTable();
        
        
     }); 
    
  });