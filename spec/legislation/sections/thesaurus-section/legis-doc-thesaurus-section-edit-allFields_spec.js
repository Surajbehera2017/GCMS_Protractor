var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3043';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Thesaurus', function () {//('Thesaurus-section-Edit', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);
    });
    afterEach(function () {
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

    // afterAll(function () {
    //     browser.executeScript('window.sessionStorage.clear();'); //clear session
    //     browser.executeScript('window.localStorage.clear();');   //clear local storage
    // });


    //04 - Edit several fields

    it('Edit several fields.' + jiraNumber, function () {
        //complimentary_info:'Congreso de Diputados y Senado: convocatoria',
        //thesaurus_term:'01',

        browser.sleep(2000);
        global.clickOnSectionButton('Thesaurus', 'viewall');
        expect(global.isTablePresent()).toEqual(true);

        global.clickOnFilterAndEnterValue('Unit', loadedData.unit);
        browser.sleep(2000);

        //click on delete edit in actions
        thesauruspage.thesaurusAction('edit');
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[1]).then(function () {
                //browser.ignoreSynchronization = true;
                browser.sleep(3000);
                thesauruspage.clickAndSearchAUnit(loadedData.unit);
                global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(3000);
            });

            browser.switchTo().window(windows[0]);
            thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
            thesauruspage.enterUnitId('');

            expect(global.isElementDisplayed(loadedData.expected)).toEqual(true);
            browser.sleep(3000);

        });

    });

});