var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3181';
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


   
    it('should delete more then one massive author notes.' +jiraNumber, function () {

        //adding the first author note
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.waitForAngular();
        authorNotes.clickOnbuttonInsideSectionTable(loaded.addnote);
        
        browser.waitForAngular();
        browser.sleep(5000);

        //edit pop up window 
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.expectedunit, loaded.add);
                browser.sleep(2000);
                globalfunction.selectSearchNameAndValue(loaded.notetype, loaded.value);
                browser.sleep(2000);
                globalfunction.selectSearchNameAndValue(loaded.index, loaded.topics);
                browser.sleep(4000);
                authorNotes.selectContextIndexHierarchy(loaded.expectedhie);
                browser.sleep(2000);
                authorNotes.selectContextIndexHierarchy(loaded.subhie);
                browser.sleep(2000);
                authorNotes.selectValueFromContextIndexTerm(loaded.indexterm);
                browser.sleep(2000);
                authorNotes.clickonXMLorVisual(loaded.visual);
                browser.sleep(3000);
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                browser.switchTo().frame(loaded.frameid);//1st frame
                browser.ignoreSynchronization = true;
                browser.sleep(3000);
                authorNotes.enterTextSpecificDatatype(loaded.type, loaded.text);
                browser.switchTo().defaultContent();
                browser.ignoreSynchronization = false;
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                
                authorNotes.clickOnActionsInGeneralTab(loaded.save);
                browser.sleep(2000);
                authorNotes.selectAnalyst(loaded.analyst_name);
                authorNotes.clickOnButtonForGlobal(loaded.addnote);

            });
            browser.switchTo().window(currentHandle);
            browser.sleep(2000);
        });
    });

   it('should delete more then one massive author notes.' + jiraNumber, function () {
        //adding second author note and deleting the recently created author notes
        browser.waitForAngular();
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section, loaded.btn);
        browser.waitForAngular();
        globalfunction.clickOnbuttonInsideSectionTable(loaded.addnote);
        browser.waitForAngular();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                authorNotes.selectAndAddUnitFromDropDown(loaded.expectedunit_2, loaded.add);
                browser.sleep(2000);
                globalfunction.selectSearchNameAndValue(loaded.notetype, loaded.value);
                browser.sleep(2000);
                globalfunction.selectSearchNameAndValue(loaded.index, loaded.codex);
                browser.sleep(2000);
                authorNotes.selectContextIndexHierarchy(loaded.hierarchy);
                browser.sleep(2000);
                authorNotes.selectValueFromContextIndexTerm(loaded.term);
                browser.sleep(2000);
                authorNotes.clickonXMLorVisual(loaded.visual);
                browser.sleep(3000);
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                browser.switchTo().frame(loaded.frameid);//1st frame
                browser.ignoreSynchronization = true;
                browser.sleep(3000);
                authorNotes.enterTextSpecificDatatype(loaded.type, loaded.text);
                browser.switchTo().defaultContent();
                browser.ignoreSynchronization = false;
                browser.switchTo().frame(loaded.ext_frameid);
                browser.ignoreSynchronization = true;
                authorNotes.clickOnActionsInGeneralTab(loaded.save);
                browser.sleep(2000);
                authorNotes.selectAnalyst(loaded.analyst_name);
                browser.sleep(2000);
                authorNotes.clickOnButtonForGlobal(loaded.addnote);
                browser.sleep(1000);
                

            });
            browser.switchTo().window(currentHandle);
            browser.sleep(1000);
            globalfunction.selectNoOfRows('2');
            browser.sleep(3000);
            globalfunction.clickOnbuttonInsideSectionTable(loaded.delete);
            browser.sleep(2000);
            authorNotes.clickOnButtonForGlobal(loaded.yes);


        });
    });


});

