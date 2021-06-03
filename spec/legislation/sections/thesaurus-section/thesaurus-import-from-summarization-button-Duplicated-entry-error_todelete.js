
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');

var loaded = testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('Import from summarization button', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id_second);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);
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


    //07 - Import from summarization button - Duplicated entry - Error
     var jiraNumber='GCMSQABANG-2610';
    it('Duplicated entry - Error - 4125 '+jiraNumber.link(params.jiraURL+jiraNumber), function () {
       
        browser.waitForAngular();
        globalfunction.clickOnSectionButton('Thesaurus','');
        //thesauruspage.clickImport();
        //thesauruspage.isImportPopUpDisplayed();
        //browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.clickOnCodeDropdown(loaded.clickOnCodeDropdown);
        thesauruspage.selectCodeFromDropdown(loaded.codename_3);
        browser.waitForAngular();
        thesauruspage.sendYearToImport(loaded.year_4);
        browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.sendNumberInImportTable(loaded.number_2);
        browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.clickSearchImport();
        browser.waitForAngular();
        thesauruspage.clickonCheckboxImport();
        browser.waitForAngular();
        thesauruspage.clickImportButton();
        expect(thesauruspage.isImportErrormsgDisplayed()).toEqual(true);
        thesauruspage.clickClosepopUp();
       
    }); 
});