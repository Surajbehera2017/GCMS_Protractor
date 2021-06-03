var params = browser.params;
//i18n basic support
// var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
// var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
  var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
// var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
// var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
 var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var legisDocEditPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3049';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
describe('Legislation-Body', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = false;
        // var legisDocEditPage = new LegislationDocumentEditionPage();
        // legisDocEditPage.get(testData.legislation.sections.legislativebody.marginal_legisnum_id);
        legisDocEditPage.get(loaded.marginal_id);
        legislativebodyEdition.urlLoad(params.valid_username, params.valid_password);
    });
    afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                   browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });  

    it('should verify the modle vlaue document name .'+jiraNumber, function () {

        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);

        expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
        browser.sleep(1000);
        // expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
        // browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
        browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(2000); 
        // LegislationDocumentEditionPageObject.save();
        // expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
        // legislativebodyEdition.clickAddBtnConnector();
        // legislativebodyEdition.clicklegisNumberconnectorComboBox();
        // legislativebodyEdition.selectlegisNumberConnector(2);
        // legislativebodyEdition.clicklegisnumModelComboBox();
        // legislativebodyEdition.selectlegisNumberModel(4);
        // legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
        // legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
        // legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
        // legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
        // LegislationDocumentEditionPageObject.save();
        // expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);

    });
});














