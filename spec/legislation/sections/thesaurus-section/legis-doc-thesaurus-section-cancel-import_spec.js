var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-2623';
 var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
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
        globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
        browser.sleep(1000);

        //Click on Import button:
        globalfunction.clickOnbuttonInsideSectionTable(loaded.button_name);
        browser.sleep(1000);

       //Click on dropdown and give the values:
       thesauruspage.enterMarginalIdImport(loaded.option_1,loaded.code);
       thesauruspage.enterMarginalIdImport(loaded.option_2,loaded.year);
       thesauruspage.enterMarginalIdImport(loaded.option_3,loaded.nfield);

        
        //Click on search button:
        globalfunction.clickOnButtonForGlobal(loaded.button)
        browser.sleep(2000);

       //clicking on cancel 
        globalfunction.clickOnButtonForGlobal(loaded.cancel);
        browser.sleep(2000);


    });
});