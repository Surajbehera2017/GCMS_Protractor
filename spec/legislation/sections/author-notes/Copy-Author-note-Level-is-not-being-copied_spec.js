var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2445';
var testData = require('../../../../test-data/Jira_TestData/author-notes/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Author Notes', function () {

    beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        authorNotes.urlLoad(params.valid_username,params.valid_password);
        
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
    
    //TC08 - Author Notes - Copy Author note - Level is not being copied
    it('Copy Author note-Level is not being copied.'+jiraNumber, function () {

        
        globalpage.clickOnSectionButton(loaded.section,loaded.linktolink);
		authorNotes.selectActionFromTable(loaded.copy_action);
		
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(4000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.unit_name,'level');
                browser.sleep(2000);
                var el =authorNotes.getLevelValue();
                expect(el).toEqual('');
                browser.close();
                browser.sleep(1000);
            }); 
            browser.switchTo().window(currentHandle); 
            browser.sleep(1000);
            globalpage.clickOnNavigationOrCloseButton('close');
        });
                      
});
});
