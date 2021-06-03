//import { globalAgent } from 'http';

var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3179';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Author Notes',function () {


    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        authorNotes.urlLoad(params.valid_username, params.valid_password);

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

    

        it('should display the error message on adding duplicated author note.'+ jiraNumber, function () {
              

               // clicking on viewAll link of author notes
               globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
               browser.waitForAngular();
              
              // verify if   show filter is displayed or not  
               var buttonDisplayed = globalfunction.isButtonInsideSectionTableDisplayed(loaded.button);
               expect(buttonDisplayed).toEqual(true);
               globalfunction.clickOnbuttonInsideSectionTable(loaded.button);
               browser.waitForAngular();
              
               globalfunction.enterValueInShowFiltersField(loaded.fieldname,loaded.value_1);
               globalfunction.enterValueInShowFiltersField(loaded.fieldname_1,loaded.value_2);
               
               authorNotes.selectActionFromTable(loaded.action_button);
    
               browser.getAllWindowHandles().then(function(handles) {
                var newTabHandle = handles[1];
                var currentHandle = handles[0];
                browser.switchTo().window(newTabHandle).then(function () {
                   
                  browser.sleep(2000);
                 authorNotes.selectAndAddUnitFromDropDown(loaded.expectedunit,loaded.add);

                 globalfunction.clickOnButtonForGlobal(loaded.save);
                 browser.sleep(2000);
   
                
                 // verify if error message is displayed or not
                var error=  globalfunction.isErrorMessageDisplayed();
                expect(error).toEqual(true);
                 globalfunction.clickOnButtonForGlobal(loaded.respond);
                 browser.close();
                     });

                     browser.switchTo().window(currentHandle);
                     browser.sleep(1000);
                 });
            });
        });    

            
            
 
    
   





