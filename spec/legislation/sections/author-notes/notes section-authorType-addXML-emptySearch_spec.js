var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2751';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
describe('Author Notes', function () {

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
    
    //TC25 -Add 1.0 Editor - Aranzadi - Empty search button
    it('author Note XML - Empty search button.'+jiraNumber, function () { 
        
        globalpage.clickOnSectionButton(loaded.section,loaded.add_button);
		
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currenthandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(1000);
            browser.driver.manage().window().maximize();
            var note =authorNotes.clickonXMLorVisual('XML');
            expect(note).toEqual(true);
            browser.sleep(1000);
            rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.search);
            browser.sleep(1000);
            rightpanelpage.sendKeyToSearchInputFieldAndPressEnter('parra');
            browser.sleep(1000);
            rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.empty_search);
            authorNotes.clickOnXbutton();
            browser.sleep(1000);
            browser.close(); 
            
        }); 
        
       
    });      
    });    
});