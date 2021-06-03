var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var loadedData = testdata.legislation.sections;

describe('Author Notes', function () {

    beforeEach(function () {
      
       browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(loadedData.author_notes.marginal_id_edit_delete_unit);
      //  legisDocDisplayPage.get(loadedData.author_notes.marginal_idaut1);
        browser.sleep(5000);
       authorNotes.urlLoad(params.valid_username, params.valid_password);
       browser.sleep(5000);
       browser.waitForAngular();
                  
    });

    afterEach(function(){//Close additional tab
        browser.getAllWindowHandles().then(function(handles) {
        browser.switchTo().window(handles[0]);
        for(var i=1;i<handles.length;i++){
        browser.switchTo().window(handles[i]).then(function () {
        browser.close();
        },function(error){
        browser.switchTo().window(handles[0]);
        });
        }
        browser.switchTo().window(handles[0]);
        });
    });
    
   // This is not working due to iframe issue.
    it('xEditor  Copy external text  Paragraphs and styles  Author notes  Note edition ', function () { 
        
        authorNotes.clickViewAllLink();
        browser.sleep(5000);
        authorNotes.clickFristCheckbox();
        authorNotes.clickOnEdit();
        browser.waitForAngular();
    	browser.getAllWindowHandles().then(function(handles) {
          var newTabHandle = handles[1];
          var currentHandle = handles[0];
          browser.switchTo().window(newTabHandle).then(function () {
             
            browser.waitForAngular();          
            authorNotes.clickEditNote();
            browser.switchTo().frame('authornote');
            browser.ignoreSynchronization = true; 
            browser.sleep(3000);
            browser.switchTo().frame('ext-gen1133');
            browser.ignoreSynchronization = true; 

            authorNotes.clearEditNoteText();
            browser.sleep(4000);
            browser.switchTo().defaultContent();
            authorNotes.clickPasteExternalText();
            authorNotes.clickPasteFromXML();
            browser.switchTo().frame(by.css('.xe-dialog-pasteoffice-iframe'));
            browser.waitForAngular(); 
            authorNotes.enterSomeTextInXML();
            authorNotes.clickOnInsertPasteFromWord();
            authorNotes.clickOnSaveVisual();
            browser.sleep(4000);           
            authorNotes.clickOnSaveButtonEdit();
            browser.switchTo().window(currentHandle); 
             
          });             
        });          
    });    
});