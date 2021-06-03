var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotesPage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNumber = 'GCMSQABANG-2408';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {


    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);

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


    //05 - Add - Saving Classification entry for one unit several terms


    it('Saving Classification entry for one unit and Several Term.' + jiraNumber, function () {
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.waitForAngular();
       // globalfunction.clickOnbuttonInsideSectionTable(loaded.button_name);
       authorNotesPage.clickOnbuttonInsideSectionTable(loaded.button_name);

        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                thesauruspage.clickOnPlusButton();
                thesauruspage.enterUnitIDInPopup(loaded.unitid);
                thesauruspage.clickOnComplementDropdown();
                thesauruspage.selectNumberFromComplement(loaded.number);
                browser.waitForAngular();
                globalfunction.clickOnButtonForGlobal(loaded.save);
                browser.sleep(2000);
                thesauruspage.selectThesarusTypeFromDropdown(loaded.thesaurustype);
                thesauruspage.clickHierarchyEnterText(loaded.hie);
                thesauruspage.selectThesaurusHierarchy(loaded.expected_hie);

                globalfunction.selectValueFromContextIndexTerm(loaded.contextTerm);
                thesauruspage.clickOnLinkForGlobal(loaded.link);
                browser.sleep(2000);
                browser.getAllWindowHandles().then(function (handles) {
                    var newTabHandle = handles[2];
                    browser.switchTo().window(newTabHandle).then(function () {
                        browser.ignoreSynchronization = true;
                        browser.sleep(3000);
                        browser.switchTo().frame('ext-gen1133');//1st frame
                        browser.ignoreSynchronization = true;

                        browser.sleep(3000);
                        thesauruspage.enterTextSpecificDatatype(loaded.perform, loaded.text);
                        browser.switchTo().defaultContent();
                        thesauruspage.clickOnActionsInGeneralTab('Save');
                        browser.sleep(3000);

                    });
                    browser.switchTo().window(handles[1]);
                    // globalfunction.clickOnButtonForGlobal(loaded.add);
                    // globalfunction.clickOnButtonForGlobal(loaded.respond);
                    authorNotesPage.clickOnButtonForGlobal(loaded.add);
                    authorNotesPage.clickOnButtonForGlobal(loaded.respond);
                    browser.close();

                });
                browser.switchTo().window(handles[0]);
                browser.sleep(3000);
                browser.waitForAngular();
                thesauruspage.selectNoOfRows('2');
                browser.sleep(3000);
               // globalfunction.clickOnbuttonInsideSectionTable(loaded.delete);
               authorNotesPage.clickOnbuttonInsideSectionTable(loaded.delete);
                browser.sleep(3000);
                authorNotesPage.clickOnButtonForGlobal(loaded.respond_1);

                //     globalfunction.clickOnButtonForGlobal(loaded.respond_1);






            });

        });

    });
});
