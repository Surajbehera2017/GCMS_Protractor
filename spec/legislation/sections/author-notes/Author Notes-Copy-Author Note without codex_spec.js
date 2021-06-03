var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-3178';
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


    //02 - Author Notes - Copy Author note - Author Note without codex

    it('should copy author note with codex.'+jiraNumber, function () {

        globalpage.clickOnSectionButton(loaded.section,loaded.linktolink);
		authorNotes.selectActionFromTable(loaded.copy_action);
		
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

            authorNotes.selectAndAddUnitFromDropDown('PT.1','addUnit');
            // var plus = authorNotes.clickOnPlusIcon();
            // expect(plus).toEqual(true);
            browser.sleep(1000);

            var typeofnote=authorNotes.selectSearchNameAndValue('Type of Note','Elemento');
            expect(typeofnote).toEqual(true);
            authorNotes.selectAnalyst(loaded.analyst_name);
            authorNotes.clickOnButtonForGlobal(loaded.save_button);
            browser.sleep(1000);

              });

          browser.switchTo().window(currentHandle); 
          authorNotes.clickOnbuttonInsideSectionTable(loaded.show_button);
          authorNotes.enterNoteType('Elemento');
          globalpage.selectNoOfRows('All');
          authorNotes.clickOnbuttonInsideSectionTable(loaded.delete);
          authorNotes.clickOnButtonForGlobal(loaded.yes);
          globalpage.clickOnNavigationOrCloseButton('close');

            });
        });
    });
