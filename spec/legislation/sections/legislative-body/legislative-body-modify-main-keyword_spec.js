var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');


var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2671';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Legislation-Body', function () {

	beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocEditPage = new LegislationDocumentEditionPage();
        legisDocEditPage.get(loadedData.marginal_id);
        legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
    });

	it('should modify the old value with new value from lsit for main keyword and save the changes.'+jiraNumber,function (){
			
        // legislativebodyEdition.expandSection();
        // expect(legislativebodyEdition.isExpanded()).toEqual(true);
        // legislativebodyEdition.clickWorldIconMainKeyword();
        // legislativebodyEdition.isMainKeywordPopupDisplayed();
        // browser.waitForAngular();
        // legislativebodyEdition.legismainKeyword(testData.legislation.sections.legislativebody.main_keyword);
        // legislativebodyEdition.clickApplyBtnMainKeyword();
        // browser.waitForAngular();
        // LegislationDocumentEditionPageObject.saveWIConfirm();
        // expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);

        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        
        browser.sleep(5000);
        legislativebodyEditionNew.enterMainKeyword(loadedData.Text);
        
        browser.waitForAngular();
        LegislationDocumentEditionPageObject.save();
        expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
    });
});
