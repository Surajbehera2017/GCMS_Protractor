var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-2619';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus', function () {//('Thesaurus-section-Import', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);

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


    /*
     */
    it('import from table button-from a Biblio document.'+jiraNumber, function () {

        //Click on viewall link:
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
        browser.sleep(1000);

        //Click on Import button:
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickbutton);
        browser.sleep(1000);

        //Entering the code field:
        thesauruspage.enterMarginalIdImport('Code', loaded.code);
        browser.sleep(1000);

        //Enter year field:
        thesauruspage.enterMarginalIdImport('Year', loaded.year);
        browser.sleep(1000);

        //Enter N field:
        thesauruspage.enterMarginalIdImport('N°', loaded.nfield);
        browser.sleep(1000);
        
        //Click on search button:
        globalfunction.clickOnButtonForGlobal(loaded.button)
        browser.sleep(2000);

        //Select the checkbox:
        thesauruspage.selectEntriesInImportPopup(loaded.checkbox);

        //Click on Import button:
        globalfunction.clickOnButtonForGlobal(loaded.clickbutton)
        browser.sleep(2000);

        //Verify the popup is been displayed:
        var importClas = globalfunction.isTablePresent();
        expect(importClas).toEqual(true);

    });
});