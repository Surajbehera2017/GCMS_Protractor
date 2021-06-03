var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-1999';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });
    /*
    TC05 - Relationships - Multilingual support - Delete languages added
*/
    it(' Multilingual support - Delete languages added.' + jiraNumber, function(){
      
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loadedData.secname,loadedData.add_btn);
        browser.sleep(2000);
        expect(relationshippage.isModalPresent(loadedData.addmodal)).toEqual(true);
        //browser.sleep(2000);
        relationshippage.clickOnIcon(loadedData.panel,loadedData.lang_icon);
        browser.sleep(2000);
        expect(relationshippage.isModalPresent(loadedData.langmod)).toEqual(true);
        browser.sleep(2000);
        relationshippage.addLanguage(loadedData.lang_1);
        browser.sleep(2000);
        relationshippage.addLanguage(loadedData.lang_2);
        browser.waitForAngular();
        relationshippage.closeMultiLanguagePopupAddRelationship();
        browser.sleep(2000);
        relationshippage.clickOnIcon(loadedData.panel,loadedData.lang_icon);
        browser.sleep(2000);
        relationshippage.clickOndeletebutton();
        browser.sleep(2000);
        relationshippage.clickOndeletebutton();
        browser.sleep(2000);
        relationshippage.closeMultiLanguagePopupAddRelationship();
        browser.sleep(2000);
        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(1000);




    //   browser.waitForAngular();
    //   browser.driver.manage().window().maximize();
    //   browser.waitForAngular();
    //   relationshippage.clickOnAddRelationship();
    //   relationshippage.clickOnPencilButton();
    //    relationshippage.selectfirstlanguagefromdropdownlist();
    //     relationshippage.selectsecondlanguagefromdropdownlist();
    //     browser.waitForAngular();
    //     relationshippage.clickOnXbuttonOfIdiomaspopup();
    //      relationshippage.clickOnPencilButton();
    //     relationshippage.clickOndeletebutton();
    //     browser.waitForAngular();
    //    relationshippage.clickOnXbuttonOfIdiomaspopup();
    
    });
});
