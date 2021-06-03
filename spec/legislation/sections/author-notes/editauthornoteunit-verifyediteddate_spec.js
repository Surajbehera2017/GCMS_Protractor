var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3198';
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


    it('should edit unit and verify the recent date.' + jiraNumber, function () {

        browser.waitForAngular();
        //click on view all link of author notes section
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.sleep(2000);

        //verify if show filters button is displayed and click on show filters
        var buttonDisplayed = globalfunction.isButtonInsideSectionTableDisplayed(loaded.button);
        expect(buttonDisplayed).toEqual(true);
        globalfunction.clickOnbuttonInsideSectionTable(loaded.button);
        browser.waitForAngular();

        //enter values in the search fields
        globalfunction.enterValueInShowFiltersField(loaded.type, loaded.typevalue);
        globalfunction.enterValueInShowFiltersField(loaded.unit, loaded.unitvalue);

        //click on edit option in action column of the author notes table
        authorNotes.selectActionFromTable(loaded.editaction);

        //edit pop up appears
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(2000);

                //deleting thr unit assigned to the author note
                authorNotes.deleteUnitInEditAuthorNotePopUp();

                globalfunction.clickOnButtonForGlobal(loaded.save);
                browser.sleep(2000);

                //verify that the error pop up is displayed and respond to the pop up
                var error = globalfunction.isErrorMessageDisplayed();
                expect(error).toEqual(true);
                browser.sleep(2000);
                authorNotes.clickToSaveOrCancel(loaded.respond);

            });
            browser.switchTo().window(currentHandle);
            browser.sleep(1000);

        });


    });
    
    it('should verify the recent date and reassign the unit.' + jiraNumber, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.sleep(2000);

        //searching the recently modified author note

        var buttonDisplayed = globalfunction.isButtonInsideSectionTableDisplayed(loaded.button);
        expect(buttonDisplayed).toEqual(true);
        globalfunction.clickOnbuttonInsideSectionTable(loaded.button);
        browser.waitForAngular();

        //enter values in the search fields
        globalfunction.enterValueInShowFiltersField(loaded.type, loaded.typevalue);
        globalfunction.enterValueInShowFiltersField(loaded.note, loaded.notevalue);

        //click on view action in author notes table
        browser.sleep(2000);
        authorNotes.selectActionFromTable(loaded.viewaction);
        browser.waitForAngular();
        browser.sleep(2000);

        //verify whether recent date is displayed
        authorNotes.getDateAndVerify(loaded.prop);
        browser.sleep(2000);

        //click on edit action
        authorNotes.selectActionFromTable(loaded.editaction);

        //edit pop up appears
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.reassign, loaded.add);

                browser.sleep(2000);
                globalfunction.clickOnButtonForGlobal(loaded.save);
            });
            browser.switchTo().window(currentHandle);
            browser.sleep(1000);


        });
    });

});



