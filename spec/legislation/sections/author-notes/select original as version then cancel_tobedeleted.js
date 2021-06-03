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
        legisDocDisplayPage.get(loadedData.author_notes.marginal_id);
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
    
    //Method: TC01 - Author Notes - Select Section and Section ID - Add - Layout
    it('Select version as original then cancel', function () {
          
        authorNotes.clickViewAllLink();
        authorNotes.clickAddButton();
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.waitForAngular();
                authorNotes.clickUnitValue(1);
                browser.sleep(5000);
                authorNotes.clickUnitLevelButton();
                browser.sleep(5000);
                authorNotes.clickVersionDropdownOption();
                browser.sleep(5000);
                authorNotes.selectVersionDropdownOption('0');

                authorNotes.clickUnitLevelDropdownOption();
                                    
                authorNotes.clickOnCancelButtonEdit();
                browser.switchTo().window(currentHandle);
            });
        });
    });       
});
    
    
    
    
    
    
    
    
    
    
    