
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2798';
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

    
    it('xEditor - Copy external text - Paragraphs and styles - Word format - Author notes - Note edition.'+jiraNumber, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.waitForAngular();

        //verify if show filters button is present
        var el = globalfunction.isButtonInsideSectionTableDisplayed(loaded.filters);
        expect(el).toEqual(true);

        //clicking on show filters button 
        globalfunction.clickOnbuttonInsideSectionTable(loaded.filters);
        browser.sleep(2000);

        //entering values in show filters fields
        globalfunction.enterValueInShowFiltersField(loaded.notetype, loaded.type);
        globalfunction.enterValueInShowFiltersField(loaded.unit, loaded.unitdata);
        browser.sleep(2000);

        //clicking on edit button in the action column of the author notes table
        authorNotes.selectActionFromTable(loaded.editaction);
        browser.waitForAngular();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                //clicking on edit visual
                globalfunction.clickonXMLorVisual(loaded.visual);
                //enetring the frames
                browser.sleep(3000);
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                browser.switchTo().frame(loaded.frameid);//1st frame
                browser.ignoreSynchronization = true;
                browser.sleep(3000);
                authorNotes.selectAllAndDelete();
                browser.sleep(2000);
                authorNotes.enterTextSpecificDatatype(loaded.datatype, loaded.text);
                authorNotes.selectAText();
                browser.switchTo().defaultContent();
                browser.ignoreSynchronization = false;
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                authorNotes.clickOnTabInsideVisualEditor(loaded.format);
                globalfunction.changeTheWordFormat(loaded.bolditalics);
                browser.sleep(2000);
                globalfunction.changeTheWordFormat(loaded.underline);
                browser.sleep(2000);
                globalfunction.changeTheWordFormat(loaded.strike);
                browser.sleep(2000);
                authorNotes.clickOnTabInsideVisualEditor(loaded.general);
                browser.sleep(2000);
                authorNotes.clickOnActionsInGeneralTab(loaded.save);
                browser.switchTo().window(newTabHandle);
                browser.sleep(2000);
                browser.close();
            // globalfunction.clickOnButtonForGlobal(loaded.save);
             });
             browser.switchTo().window(currentHandle);
            browser.sleep(2000);
        });
    });

});