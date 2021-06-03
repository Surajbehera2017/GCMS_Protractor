var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2438';
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

    
    it('Error is displayed upon trying to save after deleting author note text.'+ jiraNumber, function () {
        
        browser.waitForAngular();

        //clicking on view all link of Author Notes
        globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
        browser.waitForAngular();

         // verify if   show filter is displayed or not  
         var buttonDisplayed = globalfunction.isButtonInsideSectionTableDisplayed(loaded.button);
         expect(buttonDisplayed).toEqual(true);
 

        //clicking on show filters button
        globalfunction.clickOnbuttonInsideSectionTable(loaded.button);
        browser.waitForAngular();

        //entering values in show filter fields
        globalfunction.enterValueInShowFiltersField(loaded.fieldname,loaded.value_1);
        globalfunction.enterValueInShowFiltersField(loaded.fieldname_1,loaded.value_2);

        //clicking on edit icon 
        authorNotes.selectActionFromTable(loaded.action);
        browser.waitForAngular();
        browser.sleep(5000);

        //edit pop up window 
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                globalfunction.clickonXMLorVisual(loaded.value);
                browser.sleep(3000);

                //getting into frames
                         browser.switchTo().frame(loaded.ext_frameid);
                         browser.ignoreSynchronization = true;
                         browser.sleep(2000);
                        browser.switchTo().frame(loaded.frameid);//1st frame
                         browser.ignoreSynchronization = true;
                         browser.sleep(3000);
                    
                //selecting the text and deleting         
                        authorNotes.selectAllAndDelete();
                        browser.switchTo().defaultContent();
                        browser.ignoreSynchronization = false;
                        browser.switchTo().frame(loaded.ext_frameid);
                        browser.ignoreSynchronization = true;

                        //save
                        authorNotes.clickOnActionsInGeneralTab(loaded.save);
                        browser.sleep(2000);
                        browser.switchTo().window(newTabHandle);
                        globalfunction.clickOnButtonForGlobal(loaded.save);
                        browser.sleep(2000);
                        var error = globalfunction.isErrorMessageDisplayed();
                        expect(error).toEqual(true);
                        globalfunction.clickOnButtonForGlobal(loaded.respond);

            });
            browser.switchTo().window(currentHandle);


            });
        });
    
 });
    
    
    