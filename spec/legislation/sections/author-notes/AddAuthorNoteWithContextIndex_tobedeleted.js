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
       legisDocDisplayPage.get(1570752);
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
    
    //Method: 01 - Author Notes - Add Author note - with context index
     it('Add Author Note with context index', function () {
      
        authorNotes.clickViewAllLink();
        browser.sleep(10000);
        authorNotes.clickAddButton();
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
            
                browser.waitForAngular();
                authorNotes.clickUnitValue();
                browser.sleep(5000);
                authorNotes.clickUnitLevelButton();
                authorNotes.clickUnitButton();

                authorNotes.clickTypeofAuthorNote();
                authorNotes.changeTypeOfNote(3);
                
                //select the context index vlaue from drop down box 
                authorNotes.clickcontexindexcomBox();
                authorNotes.selectSpecificContexIndex(4);
                browser.sleep(3000);
                           
       
                //Select one or several terms from Context Index Term column.
                browser.waitForAngular();
                authorNotes.clickContextindexHierarchyItemOther();
                authorNotes.clickSubContextindexHierarchyItemOther();                
                browser.waitForAngular();           
                authorNotes.clickonAddVirtual();
                browser.sleep(5000);
                browser.switchTo().frame('authornote');
                browser.ignoreSynchronization = true; 
                browser.sleep(3000);
                browser.switchTo().frame('ext-gen1133');
                browser.ignoreSynchronization = true; 
                authorNotes.enterEditedNoteText();
                
                browser.switchTo().defaultContent();
                browser.switchTo().frame('authornote');
                browser.ignoreSynchronization = true;
                authorNotes.clickSaveButtoninNote();
                browser.sleep(5000);
                authorNotes.addAuthorNoteSaveButton();
                browser.switchTo().window(currentHandle);
              
            
            
            });
        });
        
    });    
   
  
    var selectComboxvalue = function (element, optionNum) {
        if (optionNum) {
            var options = element.getWebElement().findElements(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();
                });
        }
    };

});  

    
    
    
    
    
    
    
    
    
    
    