var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2707';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        browser.sleep(5000);
        authorNotes.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(2000);
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

    //GCMSQABANG-2707: TC07 - Author Notes - Complete Agregation Feature - No Author note text
    it('Add Author Note with context index.' + jiraNumber, function () {

        browser.waitForAngular();
        //clicking on view all link of author notes
        globalfunction.clickOnSectionButton(loaded.section, loaded.add_button);
        browser.waitForAngular();
        // globalfunction.clickOnbuttonInsideSectionTable(loaded.add_button);
        // browser.waitForAngular();
        // browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(1000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.unit, loaded.addunitfeild);
                browser.sleep(1000);
                authorNotes.selectSearchNameAndValue(loaded.feildtypeofnote, loaded.notetype);
                browser.sleep(1000);
                
                authorNotes.selectAnalyst(loaded.analyst_name);
                browser.sleep(1000);
                authorNotes.clickOnButtonForGlobal(loaded.add_button);
                browser.sleep(2000);
                expect(globalfunction.isElementDisplayed(loaded.element)).toEqual(true);
                authorNotes.clickOnButtonForGlobal('Ok');
                
                
            });
                //browser.switchTo().window(currentHandle);
                browser.switchTo().window(newTabHandle);
                
                browser.sleep(1000);


            
        });

    });


});











