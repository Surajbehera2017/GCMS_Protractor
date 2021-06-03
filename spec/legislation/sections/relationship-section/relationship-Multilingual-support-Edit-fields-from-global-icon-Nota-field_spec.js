var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-2003';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });
    /*
    TC10 - Relationships - Multilingual support - Edit fields from global icon - Nota field
    TC16 - Relationships - Multilingual support - Edit fields from global icon - Nota from target
    
 
*/
    it(' Multilingual support - Edit fields from global icon - Nota field.' + jiraNumber, function(){
      
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loadedData.secname,loadedData.addbtn);
        browser.sleep(2000);
        expect(relationshippage.isModalPresent(loadedData.addmod)).toEqual(true);
        relationshippage.clickOnIcon(loadedData.panelname,loadedData.lang);
        browser.sleep(2000);
        expect(relationshippage.isModalPresent(loadedData.Langmod)).toEqual(true);
        relationshippage.addLanguage(loadedData.lang_1);
        browser.sleep(2000);
        relationshippage.addLanguage(loadedData.lang_2);
        browser.sleep(2000);
        relationshippage.closeMultiLanguagePopupAddRelationship();
        browser.sleep(2000);
        relationshippage.clickonNoteGlobalInTarget();
        browser.sleep(2000);
        relationshippage.enterTextinNotaFieldOfTarget(loadedData.espanol,loadedData.text);
        browser.sleep(2000);
        relationshippage.enterTextinNotaFieldOfTarget(loadedData.lang_1,loadedData.text_1);
        browser.sleep(2000);
        relationshippage.enterTextinNotaFieldOfTarget(loadedData.lang_2,loadedData.text_2);
        browser.sleep(2000);
        globalfunction.clickOnButtonForGlobal(loadedData.okbtn);
        browser.sleep(2000);
        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(2000);
        // relationshippage.clickOnIcon(loadedData.lang);
        // browser.sleep(2000);
        // relationshippage.clickOndeletebutton();
        // browser.sleep(2000);
        // relationshippage.clickOndeletebutton();
  






    //   browser.waitForAngular();
    //   browser.driver.manage().window().maximize();
    //   browser.waitForAngular();
    //   relationshippage.clickOnAddRelationship();
    //   relationshippage.clickOnPencilButton();
    //    relationshippage.selectfirstlanguagefromdropdownlist();
    //     relationshippage.selectsecondlanguagefromdropdownlist();
    //     browser.waitForAngular();
    //     relationshippage.clickOnXbuttonOfIdiomaspopup();
    //     relationshippage.clickonNoteglobalicon();
    //     relationshippage.entertextfirstnotefield(testData.legislation.sections.relationship.Edit_fields_from_global_icon.text1);
    //     relationshippage.entertextsecondnotefield(testData.legislation.sections.relationship.Edit_fields_from_global_icon.text2);
    //     relationshippage.clickonapplybutton();
        
    
    });
});