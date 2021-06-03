var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var jiraNumber = 'GCMSQABANG-2587';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
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

    //GCMSQABANG-2587: 04 - Long text in Complementary Info field
    it('validate Complementary Info.'+jiraNumber, function () {

        browser.waitForAngular();
        globalpo.expandSectionInLeftPanel('Thesaurus');
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonthirdlink)
        browser.waitForAngular();
        thesauruspage.clickOnViewMoreLink('View more');
        globalpo.clickOnNavigationOrCloseButton('close');
        browser.sleep(2000);
    });

    var jiraNum = 'GCMSQABANG-3169';
    //GCMSQABANG-3169: 06 - Thesaurus -  Delete  a thesaurus with a Very long complementary note
    it('Try Delete Option.'+jiraNum, function () {


        globalpo.clickOnSectionButton('Thesaurus', 'Add');
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(3000);
                thesauruspage.clickOnPlusButton();
                browser.sleep(2000);
                thesauruspage.enterUnitIDInPopup(loaded.unitid);
                browser.sleep(2000);
                globalpo.clickOnButtonForGlobal('Save');
                browser.sleep(1000);

                thesauruspage.selectThesarusTypeFromDropdown(loaded.thesaurustype);
                thesauruspage.selectThesaurusHierarchy(loaded.thesaurushierarchy);
                thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.thesaurusterm);
               // thesauruspage.enterAnalystName(loaded.analystname);
                 // thesauruspage.clickOnAnalyst();
                thesauruspage.clickOnLinkForGlobal(loaded.complementarylink);
               
                 browser.sleep(4000);
                browser.getAllWindowHandles().then(function (handles) {
                    var secondTabHandle = handles[2];

                    browser.switchTo().window(secondTabHandle).then(function () {
                        browser.ignoreSynchronization = true;
                        browser.sleep(2000);
                        
                        browser.sleep(5000);
                        browser.switchTo().frame('ext-gen1133'); // give id of iframe
                        browser.ignoreSynchronization = true;
                        thesauruspage.enterTextSpecificDatatype('parrafo', 'This is testing to check the complemenatryinfo functionality');
                        browser.switchTo().defaultContent();
                        thesauruspage.clickOnActionsInGeneralTab('Save');
                        browser.sleep(3000);
                    });
                });

                browser.switchTo().window(handles[1]);
                browser.ignoreSynchronization = false;
                browser.sleep(2000);
                authorNotes.clickOnButtonForGlobal('Add');
                browser.sleep(1000);
                globalpo.clickOnNavigationOrCloseButton('ok');
                browser.close();
                browser.sleep(1000);
            });


       
        browser.switchTo().window(handles[0]);
        browser.sleep(2000);
       browser.ignoreSynchronization = false;
        browser.waitForAngular();
        globalpo.clickOnSectionButton('Thesaurus', 'view');
        globalpo.clickOnFilterAndEnterValue('marginalUnitName',loaded.unitid);
       globalpo.clickOnFilterAndEnterValue('thesaurusName',loaded.thesaurusterm);
        globalpo.selectNoOfRows('All');
        thesauruspage.thesaurusAction('delete');
        globalpo.clickOnNavigationOrCloseButton('ok');
        globalpo.clickOnNavigationOrCloseButton('close');
    });
    });


});

