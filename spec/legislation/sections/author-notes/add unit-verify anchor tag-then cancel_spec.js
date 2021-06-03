var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2791';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
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
    
    //GCMSQABANG-2791: TC01 - Author Notes - Select Section and Section ID - Add - Layout
    it('add unit then verify anchor tag.'+jiraNumber, function () {
          
        globalpo.clickOnSectionButton(loaded.section,loaded.linktolink);
        globalpo.clickOnbuttonInsideSectionTable(loaded.add_button);
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {

                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown('A.2','level');

                //to check the verion level present
                authorNotes.enterDataInHashPopup(loaded.feildname,loaded.versionvalue);
                var version='//input[@ng-model="node.unidadDTO.date"]';
                expect(globalpo.isElementDisplayed(version)).toEqual(true);
           
                //to check the anchor tag present
                var el='//button[@ng-click="FatherController.showUnitText(node)"]';
                expect(globalpo.isElementDisplayed(el)).toEqual(true); 

                globalpo.clickOnButtonForGlobal(loaded.cancel_button);
                browser.switchTo().window(currentHandle);
            });
        });
    });       
});
    
    
    
    
    
    
    
    
    
    
    