var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-1996';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {

  beforeEach(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });
    
    /*
    TC01 - Relationships - Multilingual support - Default Language
    */
    it('Multilingual support-Default Language.' + jiraNumber, function(){

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loadedData.secname,loadedData.add_btn);
        browser.sleep(2000);
        expect(relationshippage.isModalPresent(loadedData.addmodal)).toEqual(true);
        browser.sleep(2000);
        //getting the default language from the relationship pop up
        globalfunction.gettingTextofelement(loadedData.langselect,loadedData.default);
        browser.sleep(2000);
        relationshippage.closeAddorEditRelationshipPopup();

      
    });
});
