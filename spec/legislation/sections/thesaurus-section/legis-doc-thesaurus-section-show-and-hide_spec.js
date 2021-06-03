var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-2294';
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


    it('should show and hide the filters.'+jiraNumber, function () {

        //Click on viewall link:
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
        browser.sleep(2000);

        //Click on show filters:
        thesauruspage.clickOnFiltersInThesaurusTable(loaded.clickonfilter1);
        browser.sleep(1000);
        // globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter1);
        // browser.sleep(1000);

        //Click on show filter:        
        expect(globalfunction.clickOnFilterAndEnterValue('Unit', '')).toEqual(true);
     
        //To verify the table exists:
        globalfunction.clickOnFilterAndEnterValue('Unit', loaded.unit);
        expect(globalfunction.isElementDisplayed(loaded.expect)).toEqual(true);

        //To click on Hide filters:
        thesauruspage.clickOnFiltersInThesaurusTable(loaded.clickonfilter);
        browser.sleep(1000);
        // globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter);
        // browser.sleep(1000);

        //To verify the table:
        expect(globalfunction.isElementDisplayed(loaded.expect)).toEqual(true);

    });
});