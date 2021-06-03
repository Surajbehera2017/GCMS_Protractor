var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-2412';
var jiraNumber2 = 'GCMSQABANG-2413';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus', function () {

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


    //01 - Edit complementary info - single

    it('Edit complementary info - single.' + jiraNumber1, function () {

        browser.waitForAngular();
       // globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        authorNotes.expandSectionInLeftPanel(loaded.leftpanel);
        globalpage.clickOnSectionButton(loaded.leftpanel,loaded.type_1);
        browser.sleep(2000);
         var table_popup = globalpage.isTablePresent();
         expect(table_popup).toEqual(true);
         thesauruspage.thesaurusAction(loaded.edit_action);
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                thesauruspage.clickOnLinkForGlobal(loaded.link);
                browser.sleep(4000);
                browser.getAllWindowHandles().then(function (handles) {
                    var secondTabHandle = handles[2];

                    browser.switchTo().window(secondTabHandle).then(function () {
                        browser.ignoreSynchronization = true;
                        browser.sleep(5000);

                        browser.switchTo().frame('ext-gen1133'); // give id of iframe
                        browser.ignoreSynchronization = true;
                        thesauruspage.selectAllAndDelete();
                        browser.sleep(1000);
                        // browser.switchTo().defaultContent();
                        // globalpage.clickOnPasteDropdown();  
                        // globalpage.selectOptionFromPasteDropdown(loaded.pasteExternalText);
                        thesauruspage.enterTextSpecificDatatype(loaded.datatype, 'Test');
                        browser.sleep(1000);
                        //thesauruspage.clickOnInsertOrCancel(loaded.inser_button);
                        browser.switchTo().defaultContent();
                        thesauruspage.clickOnActionsInGeneralTab('Save');
                        browser.sleep(3000);
                    });
                });

                browser.switchTo().window(handles[1]);
                browser.ignoreSynchronization = false;
                browser.sleep(2000);
                globalpage.clickOnButtonForGlobal(loaded.apply);
                browser.sleep(1000);
                globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);

            });
            browser.switchTo().window(handles[0]);
            browser.ignoreSynchronization = false;
            browser.waitForAngular();
            browser.sleep(2000);
            globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
        });
     });


   //  //02 - Edit complementary info - multiple
    it('Edit multiple.' + jiraNumber2, function () {


        browser.waitForAngular();
        authorNotes.expandSectionInLeftPanel(loaded.leftpanel);
        globalpage.clickOnSectionButton(loaded.leftpanel,loaded.type_2);
        var table_popup = globalpage.isTablePresent();
        expect(table_popup).toEqual(true);
        thesauruspage.thesaurusAction(loaded.edit_action);
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                thesauruspage.clickOnLinkForGlobal(loaded.link);
                browser.sleep(4000);
                browser.getAllWindowHandles().then(function (handles) {
                    var secondTabHandle = handles[2];

                    browser.switchTo().window(secondTabHandle).then(function () {
                        browser.ignoreSynchronization = true;
                        browser.sleep(5000);

                        browser.switchTo().frame('ext-gen1133'); // give id of iframe
                        browser.ignoreSynchronization = true;
                        thesauruspage.selectAllAndDelete();
                        browser.sleep(1000);
                        // browser.switchTo().defaultContent();
                        // globalpage.clickOnPasteDropdown();  
                        // globalpage.selectOptionFromPasteDropdown(loaded.pasteExternalText);
                        thesauruspage.enterTextSpecificDatatype(loaded.datatype, 'Test');
                        browser.sleep(1000);
                        //thesauruspage.clickOnInsertOrCancel(loaded.inser_button);
                        browser.switchTo().defaultContent();
                        thesauruspage.clickOnActionsInGeneralTab('Save');
                        browser.sleep(3000);
                    });
                });

                browser.switchTo().window(handles[1]);
                browser.ignoreSynchronization = false;
                browser.sleep(2000);
                globalpage.clickOnButtonForGlobal(loaded.apply);
                browser.sleep(1000);
                globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);

            });
            browser.switchTo().window(handles[0]);
            browser.ignoreSynchronization = false;
            browser.waitForAngular();
            browser.sleep(2000);
            globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
        });
    });
});