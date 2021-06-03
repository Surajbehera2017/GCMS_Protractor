var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-2585';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {//('Thesaurus-section-FixSection', function () {

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

    //01 - Thesaurus table fix section
    it('Thesaurus table fix section-validate all Links.'+jiraNumber, function () {

        
        //browser.waitForAngular();
        globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
        browser.sleep(2000);

        //Click on the First link:
        thesauruspage.clickOnGiveThesaurusType(loaded.clickonfirstlink);
        browser.sleep(4000);

        //Verify the buttons are present in the screen:
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyaddbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifydeletebutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyokbutton);
        globalfunction.isButtonInsideSectionTableDisplayed(loaded.verifyimportbutton);
        browser.sleep(2000);

        //Verify filter option is displayed in the table:
        //Click on show filter:        
        expect(globalfunction.clickOnFilterAndEnterValue('Unit', '')).toEqual(true);
        browser.sleep(2000);

        //To click on Hide filters:
        globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter);
        browser.sleep(1000);

        //Select the checkbox:
        thesauruspage.selectNoOfRows(loaded.checkbox1);

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

        //Click on show filter:        
        expect(globalfunction.clickOnFilterAndEnterValue('Unit', '')).toEqual(true);
        browser.sleep(2000);

        //To click on Hide filters:
        globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter);
        browser.sleep(1000);

        //Select the checkbox:
        thesauruspage.selectNoOfRows(loaded.checkbox1);

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

        //Click on show filter:        
        expect(globalfunction.clickOnFilterAndEnterValue('Unit', '')).toEqual(true);
        browser.sleep(2000);

        //To click on Hide filters:
        globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter);
        browser.sleep(1000);

        //Select the checkbox:
        thesauruspage.selectNoOfRows(loaded.checkbox1);

        // //Close the popup window:
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

        //Click on show filter:        
        expect(globalfunction.clickOnFilterAndEnterValue('Unit', '')).toEqual(true);
        browser.sleep(2000);

        //To click on Hide filters:
        globalfunction.globalButtonElementDisplayedAndClick(loaded.clickonfilter);
        browser.sleep(1000);

        //Select the checkbox:
        thesauruspage.selectNoOfRows(loaded.checkbox1);

        //Close the popup window:
        globalfunction.clickOnNavigationOrCloseButton(loaded.tableclose);
        browser.sleep(2000);
        }
    );
    
});

