var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2440';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {
       
       browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
       legisDocDisplayPage.get(loaded);
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
    
    //GCMSQABANG-2440: TC09 - Author Notes - Edit Author note - Editorial title - Adding a context index - Fails
     it('Editorial title - Adding a context index - Fails', function () {
      
        authorNotes.clickViewAllLink();
    	browser.waitForAngular();     	 
        browser.sleep(5000);
        authorNotes.clickFristCheckbox();
        authorNotes.clickOnEdit();
         browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currenthandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
        	
                authorNotes.clickTypeofAuthorNote();
                browser.sleep(3000);
                authorNotes.changeTypeOfNote(2);
                authorNotes.clickOnSaveButtonEdit();
                
            });
            
            browser.switchTo().window(currenthandle);
        	 
        });
         
    });
     
        
});
    
    
    
    
    
    
    
    
    
    
    