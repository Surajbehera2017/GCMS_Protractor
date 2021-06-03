var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3221';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);//1572937
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
    

    //GCMSQABANG-3221:04 - Adding author notes without Context Index
     it('without context index.'+jiraNumber, function () {
        
        
        browser.waitForAngular();
        //clicking on view all link of author notes
        globalfunction.clickOnSectionButton(loaded.section, loaded.linktolink);
        browser.waitForAngular();
        globalfunction.clickOnbuttonInsideSectionTable(loaded.add_button);
        browser.waitForAngular();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                authorNotes.selectAndAddUnitFromDropDown(loaded.unit,loaded.addunitfeild);
                browser.sleep(1000);
                authorNotes.selectSearchNameAndValue(loaded.feildtypeofnote,loaded.notetype);
               
                //clicking on edit visual link
                globalfunction.clickonXMLorVisual(loaded.addvisuallink);
                browser.sleep(3000);
                         browser.switchTo().frame(loaded.ext_frameid);
                         browser.ignoreSynchronization = true;
                         browser.sleep(2000);
                        browser.switchTo().frame(loaded.frameid);//1st frame
                         browser.ignoreSynchronization = true;
                         browser.sleep(5000);

                         authorNotes.enterTextSpecificDatatype(loaded.datatype,'This is testing to check the complemenatryinfo functionality');
                        browser.switchTo().defaultContent();
                        browser.ignoreSynchronization = false;
                        browser.switchTo().frame(loaded.ext_frameid);
                        browser.ignoreSynchronization = true;
                        authorNotes.clickOnActionsInGeneralTab(loaded.save_button);
                        browser.sleep(5000);
                  browser.switchTo().window(newTabHandle);
                  authorNotes.selectAnalyst(loaded.analyst_name);
                  authorNotes.clickOnButtonForGlobal(loaded.add_button);
                  browser.sleep(5000);
                
            });
             browser.switchTo().window(currentHandle);
             browser.waitForAngular();
             browser.sleep(2000);

            
            browser.waitForAngular();
            browser.sleep(5000);
           // globalpo.clickOnSectionButton(loaded.section,loaded.linktolink);
            globalfunction.clickOnFilterAndEnterValue(loaded.unitidprop,loaded.unit);
            browser.sleep(5000);
            globalfunction.clickOnFilterAndEnterValue(loaded.notetypeprop,loaded.notetype);
            globalfunction.selectNoOfRows(loaded.noofrows);
            globalfunction.clickOnbuttonInsideSectionTable(loaded.delete_btn);
            browser.sleep(1000);
            authorNotes.clickOnButtonForGlobal(loaded.yes_btn);
                     
        
            });
     });   
});