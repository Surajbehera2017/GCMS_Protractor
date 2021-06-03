var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3546';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
describe('Author Notes',function () {

    beforeEach(function () {
      
       browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
       legisDocDisplayPage.get(loaded.marginal_id);
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
    
    //Method: TC22 -Add 1.0 Editor - Aranzadi - Search button
    it('author Note XML - search button.' + jiraNumber, function () { 

      browser.waitForAngular();
      globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
      browser.waitForAngular();
      globalfunction.clickOnbuttonInsideSectionTable(loaded.addnotes);
      browser.waitForAngular();
        browser.sleep(5000);

    //add author-notes window opens
    browser.getAllWindowHandles().then(function (handles) {
        var newTabHandle = handles[1];
        var currentHandle = handles[0];
        browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(2000);
            browser.driver.manage().window().maximize();
            globalfunction.clickonXMLorVisual(loaded.xml);
            browser.sleep(2000);
            rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.searchbutton);
            browser.sleep(1000);
            rightpanelpage.sendKeyToSearchInputFieldAndPressEnter(loaded.textvalue);
            browser.sleep(1000);
            authorNotes.clickOnXbutton();
            browser.sleep(2000);
            globalfunction.clickOnButtonForGlobal(loaded.cancel);
        });
        browser.switchTo().window(currentHandle);


        });
      });
    
    
});