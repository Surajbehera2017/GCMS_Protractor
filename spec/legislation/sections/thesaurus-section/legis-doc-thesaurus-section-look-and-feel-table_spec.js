var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-3107';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {//('Thesaurus-section-Import', function () {

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

    //02 - Look & Feel Thesaurus Table

    it('Should Check and Expand  Thesaurus thesauruspage and verify the links exist.' + jiraNumber, function () {

        //Expand the section:
        globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
        browser.sleep(2000);

        //Click on the First link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonfirstlink);
        browser.sleep(4000);

        //Close the popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
        browser.sleep(2000);

        //Click on the Second link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonsecondlink);
        browser.sleep(2000);

        //Verify the buttons are present in the screen:
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyaddbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifydeletebutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyokbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyimportbutton);
        browser.sleep(2000);

        //Close the popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
        browser.sleep(2000);

        //Click on the Third link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonthirdlink);
        browser.sleep(2000);

        //Verify the buttons are present in the screen:
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyaddbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifydeletebutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyokbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyimportbutton);
        browser.sleep(2000);

        //Close the popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
        browser.sleep(2000);

        //Click on the Fourth link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonfourthlink);
        browser.sleep(2000);

        //Verify the buttons are present in the screen:
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyaddbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifydeletebutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyokbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyimportbutton);
        browser.sleep(2000);

        //Close the popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
        browser.sleep(2000);

        //Click on the Fifth link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonfifthlink);
        browser.sleep(2000);

        //Verify the buttons are present in the screen:
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyaddbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifydeletebutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyokbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyimportbutton);
        browser.sleep(2000);

        //Close the thesaurus popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
      
    });

});