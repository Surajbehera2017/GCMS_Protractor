var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js')
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-3615';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });

/*
TC13 - Relationships - Multilingual support - Edit fields from global icon - Nivel field from target
TC15 - Relationships - Multilingual support - Edit fields from global icon - Nivel nuevo field from target

*/
  it('multilingual-edit-fields-global-icon-nivel-fields.' + jiraNumber, function(){

         browser.waitForAngular();
      globalfunction.clickOnSectionButton(loadedData.secname,loadedData.addbtn);
      browser.sleep(2000);
      expect(relationshippage.isModalPresent(loadedData.addmodal)).toEqual(true);
      browser.sleep(2000);
      relationshippage.clickOnIcon(loadedData.panel,loadedData.langicon);
      browser.sleep(2000);
      expect(relationshippage.isModalPresent(loadedData.languagemodal)).toEqual(true);
      browser.sleep(2000);
      relationshippage.addLanguage(loadedData.lang1);
      browser.sleep(2000);
      relationshippage.addLanguage(loadedData.lang2);
      browser.sleep(2000);
      relationshippage.closeMultiLanguagePopupAddRelationship();
      browser.sleep(2000);
      relationshippage.levelGlobalICon();
      browser.sleep(2000);
      relationshippage.enterValueInLanguageFields(loadedData.espanol,loadedData.textinput);
      browser.sleep(2000);
      relationshippage.enterValueInLanguageFields(loadedData.lang1,loadedData.text_1);
      browser.sleep(2000);
      relationshippage.enterValueInLanguageFields(loadedData.lang2,loadedData.text_2);
      browser.sleep(2000);
      globalfunction.clickOnButtonForGlobal(loadedData.okbtn);
      browser.sleep(2000);
      relationshippage.closeAddorEditRelationshipPopup();
      browser.sleep(2000);
            
  });  
    
});
    

  
    
           
      

    