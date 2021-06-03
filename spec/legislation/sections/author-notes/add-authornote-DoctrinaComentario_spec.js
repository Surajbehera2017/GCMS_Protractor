var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3176';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);//1572021
        browser.waitForAngular();
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

    //03 - Adding note Doctrina Comentario
    it('with Doctrina Comentario.' + jiraNumber, function () {

        globalpo.clickOnSectionButton(loaded.section,loaded.add_button);
        
        browser.waitForAngular();

        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentTabHandle = handles[0];
            browser.switchTo().window(newTabHandle);
            authorNotes.selectAndAddUnitFromDropDown(loaded.unit, 'addUnit');
            browser.sleep(2000);
            authorNotes.clickOnPlusIcon();
            browser.sleep(3000);
            authorNotes.selectSearchNameAndValue('Type of Note:', loaded.notetype);
            browser.sleep(3000);
            authorNotes.clickonXMLorVisual('Add Bibliography Marginal');

            authorNotes.enterBibilographyMarginal('code', 'BIB');
            browser.sleep(1000);
            authorNotes.enterBibilographyMarginal('year', '2010');
            browser.sleep(1000);
            authorNotes.enterBibilographyMarginal('number', '1');
            browser.sleep(1000);
            authorNotes.clickAddBibilography('Add');
            browser.sleep(2000);
            //authorNotes.selectAnalyst("Addas Nascimento Oliveira [ ANALISTA ] ");
            // authorNotes.selectAnalyst(loaded.analyst_name);
            // browser.sleep(1000);
            authorNotes.clickOnButtonForGlobal('Add');
            browser.sleep(3000);
            browser.switchTo().window(currentTabHandle);

               browser.sleep(3000);
            globalpo.clickOnSectionButton(loaded.section,loaded.linktolink);
            browser.sleep(1000);
            globalpo.clickOnFilterAndEnterValue(loaded.unitidprop, loaded.unit);
            browser.sleep(5000);
            globalpo.clickOnFilterAndEnterValue(loaded.notetypeprop,loaded.notetype);
            browser.sleep(1000);
            globalpo.selectNoOfRows('All');
            globalpo.clickOnbuttonInsideSectionTable('Delete');
            browser.sleep(1000);
            authorNotes.clickOnButtonForGlobal('Yes');
            browser.sleep(1000);
        });

        });
    });











