var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-2743';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {
      
       browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
       legisDocDisplayPage.get(loaded.marginal_id);
       browser.sleep(5000);
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
    
    //TC16 -Add 1.0 Editor - Aranzadi - Paragraph
    it('author Note XML-Paragraph.'+jiraNumber1, function () { 
        
        authorNotes.clickOnSectionButton(loaded.section_name,loaded.add_button);
		
		
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currenthandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(1000);
            var note =authorNotes.clickonXMLorVisual(loaded.addxml);
            expect(note).toEqual(true);
            browser.sleep(1000);
            authorNotes.fontFormatOptionsOnXMLeditor(loaded.paragraphoption);
            browser.sleep(1000);
            //Verify the new xml
            var text_xml='<parrafo></parrafo><texto><parrafo>$position</parrafo></texto>';
            var actualXMLText = authorNotes.getXMLTextInUnitPopUp();
            expect(actualXMLText).toEqual(text_xml);
            
            authorNotes.clickOnXbutton();
            browser.sleep(1000);
            browser.close();
        }); 
        
    });      
    });    
});