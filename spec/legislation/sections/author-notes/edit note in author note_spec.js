var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3183';
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

    it('should edit the text of the author note.' + jiraNumber, function () {

        browser.waitForAngular();
        //clicking on view all link of author notes
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.waitForAngular();

        // verify if   show filter is displayed or not  
        var buttonDisplayed = globalfunction.isButtonInsideSectionTableDisplayed(loaded.button);
        expect(buttonDisplayed).toEqual(true);

        //clicking on Show filters
        globalfunction.clickOnbuttonInsideSectionTable(loaded.button);
        browser.waitForAngular();

        //enter the search values in the Show Filters fields
        globalfunction.enterValueInShowFiltersField(loaded.fieldname, loaded.value_1);
        globalfunction.enterValueInShowFiltersField(loaded.fieldname_1, loaded.value_2);

        //clicking on the edit button and entering the edit author notes window
        authorNotes.selectActionFromTable(loaded.action);
        browser.waitForAngular();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {


                globalfunction.clickonXMLorVisual(loaded.value);
                browser.sleep(3000);
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                browser.switchTo().frame(loaded.frameid);//1st frame
                browser.ignoreSynchronization = true;
                browser.sleep(3000);

                authorNotes.selectAllAndDelete();
                authorNotes.enterTextSpecificDatatype(loaded.type, loaded.text);
                browser.switchTo().defaultContent();
                browser.ignoreSynchronization = false;
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                authorNotes.clickOnActionsInGeneralTab(loaded.save);
                browser.sleep(2000);
                browser.switchTo().window(newTabHandle);
                globalfunction.clickOnButtonForGlobal(loaded.save);

            });
            browser.switchTo().window(currentHandle);
            browser.waitForAngular();
            browser.sleep(2000);
             authorNotes.selectActionFromTable(loaded.click);

             browser.waitForAngular();
             browser.sleep(5000);


        });
    });


});








    


