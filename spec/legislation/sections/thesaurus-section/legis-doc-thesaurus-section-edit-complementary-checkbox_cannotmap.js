var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.thesaurus_section;

describe('Thesaurus', function () {//('Thesaurus-section-Edit', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);

    });

    //not be mapped
    it('complementary checkbox', function () {

        browser.sleep(2000);
        global.clickOnSectionButton('Thesaurus', 'viewall');
        expect(global.isTablePresent()).toEqual(true);

        global.clickOnFilterAndEnterValue('thesaurusName', loadedData.term);
        browser.sleep(2000);

        //click on edit in actions
        thesauruspage.thesaurusAction('edit');
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[1]).then(function () {
                //browser.ignoreSynchronization = true;
                browser.sleep(3000);
                thesauruspage.clickOnElementClass('red-checkbox margin-midle');
                global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(3000);
            });

            browser.switchTo().window(windows[0]);

            browser.getAllWindowHandles().then(function (windows) {
                //verifying only one window must be opened
                expect(windows.length).toEqual(1);
            })

        });
    });
});

