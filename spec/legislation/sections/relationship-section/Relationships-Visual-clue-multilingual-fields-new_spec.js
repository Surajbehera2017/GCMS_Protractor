var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-2127';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
  
  
           
    beforeAll(function () {
      
      browser.ignoreSynchronization = false;
      legisDocDisplayPage.get(loadedData.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
      
      });
    
    

	/*
     *05 - Visual clue for multilingual fields


     */

    it('Visual clue for multilingual fields.' + jiraNumber, function () {
         
      browser.waitForAngular();
      globalfunction.clickOnSectionButton(loadedData.relationship,loadedData.viewbtn);
      browser.sleep(2000);
      globalfunction.clickOnbuttonInsideSectionTable(loadedData.filters);
      browser.sleep(2000);
      relationshippage.filterbyRelType(loadedData.rel_type);
      browser.sleep(2000);
      globalfunction.selectNoOfRows('1');
      browser.sleep(2000);
      relationshippage.clickactionOnRelationshipTable(loadedData.editaction);
      browser.sleep(2000);
      relationshippage.clickOnIcon(loadedData.panelname,loadedData.lang_icon);
      expect(relationshippage.isModalPresent(loadedData.languagemodal)).toEqual(true);
      browser.sleep(2000);
      relationshippage.addLanguage(loadedData.lang_latin);
      browser.sleep(2000);
      relationshippage.closeMultiLanguagePopupAddRelationship();
      //relationshippage.selectLanguageFromDropdown(loadedData.lang_latin);
      relationshippage.clickOnTab(loadedData.sectiontab);
      //expect(relationshippage.getBorderColorOfNewLevelFieldinNewSectionTab).toEqual('rgb(255, 0, 0)');
      var loc = relationshippage.getBorderColorOfNewLevelFieldinNewSectionTab();
      expect(loc).toEqual(loadedData.red);
      browser.sleep(2000);
      relationshippage.closeAddorEditRelationshipPopup();
      browser.sleep(2000);
      globalfunction.clickOnButtonForGlobal(loadedData.confirm);
      //browser.sleep(1000);
      globalfunction.clickOnNavigationOrCloseButton(loadedData.cls_btn);
      browser.sleep(2000);



       
      }); 
    
  });