var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-3511';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
  
  
           
    beforeAll(function () {
      
      browser.ignoreSynchronization = false;
      legisDocDisplayPage.get(loadedData.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
      
      });    
    

	/*
     * TC06 - Relationships - Actions in Relationships table - Delete Many Entries - Try to select consolidated multiple relationships

     */

    it('Relationships - Actions in Relationships table - Delete Many Entries - Try to select consolidated multiple relationships.'+ jiraNumber, function () {
     
      browser.waitForAngular();
      //globalfunction.clickOnSectionButton(loadedData.secname,loadedData.viewbtn);
      globalfunction.expandSectionInLeftPanel(loadedData.secname);
      browser.sleep(2000);
      relationshippage.clickOnSoureOrTargetOf(loadedData.consolidation,loadedData.target)
      browser.sleep(2000);
      globalfunction.selectNoOfRows('2');
      var loc = relationshippage.isTooltipPresent(loadedData.del,loadedData.tip);
        expect(loc).toEqual(true);
      browser.sleep(2000);

      


















    //  var relation = relationshippage.isRalationshipViewAllPresent();
    //   expect(relation).toEqual(true);
    //   var expand = relationshippage.isRelationshipCollapseButtonDisplayed();
    //   expect(expand).toEqual(true);
    //   relationshippage.clickRelationshipCollapseButtonDisplayed();
    //     browser.waitForAngular();
    //     relationshippage.clickSubLinkInRelationshipSection('consolidations','target',0);
    //     browser.waitForAngular();
        
    //     relationshippage.clickMainCheckboxViewAllTable();
    //     relationshippage.closeRelationshipViewAllTable();
        
     }); 
    
  });