

var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3358';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Author Notes',function () {


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

    //01 - Author Notes- selection through the pages
    it('should Check the pagination is working fine for author notes section.'+jiraNumber, function () {

        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
        browser.sleep(3000);
        globalfunction.selectNoOfRows('2');
        browser.sleep(2000);
        globalfunction.clickOnNavigationOrCloseButton(loaded.page2);
        browser.sleep(3000);
       var el = globalfunction.isElementDisplayed(loaded.loc_1);
       expect(el).toEqual(true);

       //click on previous navigation 
       globalfunction.clickOnNavigationOrCloseButton(loaded.previouspage);
       var x = globalfunction.isElementDisplayed(loaded.loc_2);
       expect(x).toEqual(true);
       browser.sleep(2000);
       var type = globalfunction.isElementDisplayed("//div[@class='modal-content']//div[text()='Note Type']");
       expect(type).toEqual(true);
       browser.sleep(2000);
       var indextype = globalfunction.isElementDisplayed("//div[@class='modal-content']//div[text()='Context Index Type']");
       expect(indextype).toEqual(true);
       browser.sleep(2000);
       var term = globalfunction.isElementDisplayed("//div[@class='modal-content']//div[text()='Context Index Term']");
       expect(term).toEqual(true);
       browser.sleep(2000);
       var text = globalfunction.isElementDisplayed("//div[@class='modal-content']//div[text()='Note']");
        expect(text).toEqual(true);
        browser.sleep(2000);
        var noteunit = globalfunction.isElementDisplayed("//div[@class='modal-content']//div[text()='Unit']")
        expect(noteunit).toEqual(true);
        browser.sleep(2000);

        
    });

});

