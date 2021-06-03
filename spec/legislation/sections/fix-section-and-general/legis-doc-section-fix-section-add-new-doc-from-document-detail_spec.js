var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
var fix_Section = require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2946';
var testData = require('../../../../test-data/Jira_TestData/fix-section-and-general/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var collectiveagreement = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
describe('Fix section', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;

        legisDocDisplayPage.get(loaded.marginal_id);
        fix_Section.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();


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

    it('should add new document from document detail sucessfully.' + jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.adddoc);
        fix_Section.enterMarginalIdInAdd(loaded.codefield, loaded.selectedvalue);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.yearfield, loaded.year);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.nofield, loaded.no);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.textfield, loaded.text);
        browser.sleep(2000);
        collectiveagreement.clickAddCopy(loaded.addbtn);
        browser.waitForAngular();
        var loc = globalfunction.isElementDisplayed(loaded.docid);
        expect(loc).toEqual(true);
        rightpanelpage.clickOnbuttonInEditMode(loaded.exit);
        globalfunction.clickOnButtonForGlobal(loaded.confirm);
        browser.sleep(2000);

        //clicking on add button and then cancel 
        rightpanelpage.clickOnbuttonInEditMode(loaded.adddoc);
        browser.sleep(2000);
        fix_Section.clickOnCancelOfAdd();

        //adding through calculate
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.adddoc);
        fix_Section.enterMarginalIdInAdd(loaded.codefield, loaded.selectedvalue);
        browser.sleep(2000);
        globalfunction.clickOnButtonForGlobal(loaded.calc);
        browser.sleep(3000);
        collectiveagreement.clickAddCopy(loaded.addbtn);
        browser.waitForAngular();
        var loc = globalfunction.isElementDisplayed(loaded.docid);
        expect(loc).toEqual(true);
        rightpanelpage.clickOnbuttonInEditMode(loaded.exit);
        globalfunction.clickOnButtonForGlobal(loaded.confirm);
        //duplicating the document


    });

     it('should copy document from document detail sucessfully.' + jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.duplicate);
        fix_Section.enterMarginalIdInAdd(loaded.codefield, loaded.selectedvalue);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.yearfield, loaded.year);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.nofield, loaded.no);
        browser.sleep(2000);
        fix_Section.enterMarginalIdInAdd(loaded.textfield, loaded.text);
        browser.sleep(2000);
        collectiveagreement.clickAddCopy(loaded.duplicate);
        browser.waitForAngular();
        var loc = globalfunction.isElementDisplayed(loaded.docid);
        expect(loc).toEqual(true);
        rightpanelpage.clickOnbuttonInEditMode(loaded.exit_copy);
        globalfunction.clickOnButtonForGlobal(loaded.confirm);


    });
});
