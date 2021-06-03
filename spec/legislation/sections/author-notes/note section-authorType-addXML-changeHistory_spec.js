var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2770';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Author Notes',function () {


    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        authorNotes.urlLoad(params.valid_username, params.valid_password);

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

    
    //Method: TC24 -Add 1.0 Editor - Aranzadi - change history
    it('author Note XML - Change history button.'+jiraNumber, function () { 

        browser.waitForAngular();
        //click on view all link of Author-Notes section
        globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
        browser.waitForAngular();
        // browser.sleep(2000);
        //click on thr Add button present on the section table
        globalfunction.clickOnbuttonInsideSectionTable(loaded.add);
        browser.waitForAngular();
        browser.sleep(5000);

    //add author-notes window opens
    browser.getAllWindowHandles().then(function (handles) {
        var newTabHandle = handles[1];
        var currentHandle = handles[0];
        browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(2000);
            globalfunction.clickonXMLorVisual(loaded.xml);
            browser.sleep(2000);
            authorNotes.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded.text);
            browser.sleep(2000);
            authorNotes.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded.newtext);
            browser.sleep(2000);
            authorNotes.clickOnSideBarButton(loaded.history);
            browser.sleep(2000);
            

        });
        browser.switchTo().window(currentHandle);
    });
                
    });    
});