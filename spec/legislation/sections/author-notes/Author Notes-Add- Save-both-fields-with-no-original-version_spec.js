var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-2794';
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

    //TC04 - Author Notes - Select Section and Section ID - Add - Save both fields with  no original version
    it(' Add-Save both fields with no original version.' + jiraNumber, function () {

        globalpage.clickOnSectionButton(loaded.section, loaded.linktolink);
        globalpage.clickOnbuttonInsideSectionTable(loaded.add_button);

        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(1000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.unit, 'level');
                var a = ['version', 'level', 'unit'];
                var b = [loaded.date, 'Nivel nuevo', 'PR.1'];

                //18/12/1982'
                //entering data in level('#') 
                for (var i = 0; i < 3; i++) {
                    authorNotes.enterDataInHashPopup(a[i], b[i]);
                }
                browser.waitForAngular();

                var plus = authorNotes.clickOnPlusIcon();
                expect(plus).toEqual(true);
                browser.sleep(1000);
                var typeofnote = authorNotes.selectSearchNameAndValue('Type of Note', 'Editorial-title');
                expect(typeofnote).toEqual(true);
                browser.sleep(1000);
                var note = authorNotes.clickonXMLorVisual('XML');
                expect(note).toEqual(true);
                var text_xml = '<texto><parrafo>sample</parrafo></texto>';
                authorNotes.fontFormatOptionsOnXMLeditor('Replace');
                browser.sleep(1000);
                authorNotes.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(text_xml);
                var actualXMLText = authorNotes.getXMLTextInUnitPopUp();
                expect(actualXMLText).toEqual(text_xml);
                browser.sleep(1000);
                var sidebutton = authorNotes.clickOnSideBarButton('Accept');
                expect(sidebutton).toEqual(true);
                browser.sleep(1000);
                globalpage.clickOnElement(loaded.add_xpath);
                browser.sleep(2000);


            });
            browser.switchTo().window(currentHandle);
            browser.sleep(5000);
            globalpage.clickOnbuttonInsideSectionTable(loaded.show_button);
            browser.sleep(1000);
            authorNotes.enterNoteType('Editorial-title');
            //authorNotes.enterUnit('A.267');
            globalpage.selectNoOfRows('All');
            authorNotes.clickOnbuttonInsideSectionTable(loaded.delete);
            globalpage.clickOnElement(loaded.yes);
            browser.sleep(1000);
            globalpage.clickOnNavigationOrCloseButton('close');
            browser.sleep(1000);


        });
    });
});