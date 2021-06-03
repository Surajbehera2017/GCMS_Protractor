var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
// test data support for various Bu's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var testData = testdata.legislation.sections.thesaurus;

describe('Thesaurus', function () {//('should save the neccessary changes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.marginal_idthes_1);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);


    });

    //cannot be mapped

    it('should click on PencilIcon of thresaurus table', function () {

        global.clickOnSectionButton('Thesaurus', 'viewall');
        expect(global.isTablePresent()).toEqual(true);

        //filter perticular unit
        thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
        thesauruspage.enterThesaurusTerm(testData.thesaurusTerm1);
        thesauruspage.thesaurusAction('edit');
        browser.waitForAngular();

        //Verifying the edit pop is displayed.
        browser.getAllWindowHandles().then(function (handles) { 
            browser.switchTo().window(handles[1]).then(function () {      
            browser.sleep(2000);
            var windows = handles.length;
            expect(windows).toEqual(2);
            });
        browser.close();
        browser.switchTo().window(handles[0])
    });
    });
});