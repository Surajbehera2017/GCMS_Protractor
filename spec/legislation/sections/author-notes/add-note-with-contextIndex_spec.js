var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3174';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        browser.sleep(5000);
        authorNotes.urlLoad(params.valid_username, params.valid_password);
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

    //Method: 01 - Author Notes - Add Author note - with context index
    it('Add Note with context index.' + jiraNumber, function () {

        browser.waitForAngular();
        browser.sleep(2000);
        //clicking on view all link of author notes
        globalfunction.clickOnSectionButton(loaded.section, loaded.linktolink);

        browser.sleep(1000);
        authorNotes.clickOnbuttonInsideSectionTable('Add');
        browser.sleep(1000);

        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown('A.2', 'addUnit');
                browser.sleep(2000);
                // var el= authorNotes.clickOnPlusIcon();
                // expect(el).toEqual(true);
                browser.sleep(1000);

                authorNotes.selectSearchNameAndValue(loaded.feildname, loaded.contextindextype);
                browser.sleep(2000);
                authorNotes.selectContextIndexHierarchy(loaded.contextindexheirarchy);
                browser.sleep(2000);
                authorNotes.selectValueFromContextIndexTerm(loaded.contextindexterm);
                browser.sleep(2000);
                authorNotes.selectSearchNameAndValue('Type of Note:', loaded.notetype);
                browser.sleep(1000);
                //clicking on edit visual link
                globalfunction.clickonXMLorVisual('Visual');

                browser.sleep(5000);
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(4000);
                browser.switchTo().frame(loaded.frameid);//1st frame
                browser.ignoreSynchronization = true;
                browser.sleep(5000);

                authorNotes.enterTextSpecificDatatype('parrafo', 'This is testing to check the complemenatryinfo functionality');
                browser.switchTo().defaultContent();
                browser.ignoreSynchronization = false;
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                authorNotes.clickOnActionsInGeneralTab('Save');
                browser.sleep(5000);
                browser.switchTo().window(newTabHandle);
                //authorNotes.selectAnalyst("Addas Nascimento Oliveira [ ANALISTA ] ");
                authorNotes.selectAnalyst(loaded.analyst_name);
                authorNotes.clickOnButtonForGlobal('Add');
                browser.sleep(5000);

            });
            browser.switchTo().window(currentHandle);
            browser.waitForAngular();
            browser.sleep(2000);


            browser.waitForAngular();
            browser.sleep(3000);

            //globalfunction.clickOnSectionButton(loaded.section, loaded.linktolink);
            globalfunction.clickOnFilterAndEnterValue('input-filter-author-note-unit-detail', 'A.2');
            browser.sleep(5000);
            globalfunction.clickOnFilterAndEnterValue('input-filter-author-note-type', 'Jurisprudencia');
            globalfunction.selectNoOfRows('All');
            globalfunction.clickOnbuttonInsideSectionTable('Delete');
            browser.sleep(1000);
            authorNotes.clickOnButtonForGlobal('Yes');


        });
    });


});