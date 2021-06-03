var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3237';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Author Notes', function () {


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

    //Add Unit Level
    it('add unit value and add the unit level to that.' + jiraNumber, function () {
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.sleep(2000);
        globalfunction.clickOnbuttonInsideSectionTable(loaded.addnote);
        browser.waitForAngular();
        browser.sleep(5000);

            //edit pop up window 
            browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.expectedunit, loaded.action);
                browser.sleep(2000);
                authorNotes.enterDataInHashPopup(loaded.version, loaded.original);
                browser.sleep(2000);
                authorNotes.enterDataInHashPopup(loaded.level, loaded.levelvalue);
                browser.sleep(2000);
                authorNotes.enterDataInHashPopup(loaded.unitl, loaded.value);
                browser.sleep(2000);
                authorNotes.clickOnPlusIcon();
                var unit = authorNotes.isAddedUnitDisplayed(loaded.expectedunit);
                expect(unit).toEqual(true);
                browser.sleep(2000);

            });
            browser.switchTo().window(currentHandle);

        });

    });

});










