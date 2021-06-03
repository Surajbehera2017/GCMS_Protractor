var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNumber = 'GCMSQABANG-2767';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id1);
        browser.sleep(5000);
        authorNotes.urlLoad(params.valid_username, params.valid_password);
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


    //Method: TC41 -Add 1.0 Editor - Aranzadi - All allign buttons
    it('author Note XML select allignment.'+jiraNumber, function () {
        browser.sleep(2000);
        global.clickOnSectionButton(loadedData.section, loadedData.btn);
        global.clickOnFilterAndEnterValue(loadedData.filter, loadedData.filterValue);
        browser.sleep(3000);
        authorNotes.selectActionFromTable("col-md-4 name-icon-edit-table");

        browser.getAllWindowHandles().then(function (Handle1) {
            browser.sleep(2000);
            browser.switchTo().window(Handle1[1]).then(function () {
                browser.sleep(3000);
                authorNotes.clickonXMLorVisual(loadedData.xml);
                authorNotes.fontFormatOptionsOnXMLeditor("Justify");
                global.isElementDisplayed("//span[contains(text(),'justificado')]");

                authorNotes.fontFormatOptionsOnXMLeditor("Left");
                global.isElementDisplayed("//span[contains(text(),'izquierda')]");

                authorNotes.fontFormatOptionsOnXMLeditor("Right");
                global.isElementDisplayed("//span[contains(text(),'derecha')]");

                authorNotes.fontFormatOptionsOnXMLeditor("Centered");
                global.isElementDisplayed("//span[contains(text(),'centrado')]");
                
            })
            browser.switchTo().window(Handle1[0]);
        })
        
    });
});