var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-2325';
var jiraNumber2 = 'GCMSQABANG-3494';
var testData = require('../../../../test-data/Jira_TestData/Context Index/' + jiraNumber2 + '.js');
var loaded = testData[params.env][params.BU];


describe('Context Index', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        contextindexpage.urlLoad(params.valid_username, params.valid_password);

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

    //03- Copy the term from the complete doc to a unit-s
    it('Copy the term from the complete doc to a unit or units.' + jiraNumber1 + '.' + jiraNumber2, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
        contextindexpage.contextindexAction(loaded.copy_button);
        browser.sleep(1000);

        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currenthandle = handles[0];

            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(2000);
                browser.driver.manage().window().maximize();
                browser.sleep(3000);
                thesauruspage.clickAndSearchAUnit(loaded.addunit);
                browser.sleep(1000);
                contextindexpage.enterTextInInternalNote('Testing only');
                browser.sleep(1000);
                contextindexpage.selectCodexSystematicIndexFromDropdown(loaded.value);
                browser.sleep(3000);
                globalfunction.clickOnButtonForGlobal(loaded.save);
                browser.close();

            });
            browser.switchTo().window(currenthandle);
            browser.waitForAngular();
            contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
            browser.sleep(1000);
            contextindexpage.enterValueInSearchField(loaded.searchunit, loaded.addunit);
            browser.sleep(1000);
            contextindexpage.contextindexAction('detail');
            browser.sleep(1000);
            var value1 = contextindexpage.verifyInfoOfLensIcon(loaded.key1);
            expect(value1).toEqual(loaded.expectedvalue1);
            var value2 = contextindexpage.verifyInfoOfLensIcon(loaded.key2);
            expect(value2).toEqual(loaded.expectedvalue2);
            var value3 = contextindexpage.verifyInfoOfLensIcon(loaded.key3);
            expect(value3).toEqual(loaded.expectedvalue3);
            var todays_date = globalfunction.getDateAndVerify(loaded.path_date);
            expect(todays_date).toEqual(true);
            thesauruspage.selectNoOfRows('All');
            thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
            browser.sleep(1000);
            globalfunction.clickOnButtonForGlobal('Yes');
            browser.sleep(1000);
            globalfunction.clickOnNavigationOrCloseButton('close');

             });

        });


    });