var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotesPage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNumber1 = 'GCMSQABANG-3507';
var jiraNumber2 = 'GCMSQABANG-2512';
var testData = require('../../../../test-data/Jira_TestData/Context Index/' + jiraNumber1 + '.js');
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

    // 01 - Delete button disactivated - no rows selected
    it('Delete button disactivated - no rows.' + jiraNumber1, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
        browser.sleep(1000);
        var isdeletedisabled = contextindexpage.isDeleteDisabled();
        expect(isdeletedisabled).toEqual(true);
        browser.sleep(1000);

    });

    //03 - Delete button disactivated after unselecting
    it('Delete button disactivated after unselecting.' + jiraNumber2, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
        browser.sleep(1000);
        globalfunction.selectNoOfRows('All');
        browser.sleep(2000);
        //globalfunction.clickOnbuttonInsideSectionTable(loaded.delete);
        authorNotesPage.clickOnbuttonInsideSectionTable(loaded.delete);
        browser.sleep(4000);
      // globalfunction.clickOnButtonForGlobal(loaded.cancel_button);
      authorNotesPage.clickOnButtonForGlobal(loaded.cancel_button);
      
       //globalfunction.clickOnElement(loaded.cancel_button);
        browser.sleep(2000);
        globalfunction.selectNoOfRows('All');
        browser.sleep(2000);
        var isdeletedisabled = contextindexpage.isDeleteDisabled();
        expect(isdeletedisabled).toEqual(true);
        browser.sleep(1000);

    });


});