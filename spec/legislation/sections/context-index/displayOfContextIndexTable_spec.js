var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber1= 'GCMSQABANG-3525'; 
 var jiraNumber2= 'GCMSQABANG-3526'; 
 var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber1 + '.js');
 var loaded = testData[params.env][params.BU];


describe('Context Index', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        contextindexpage.urlLoad(params.valid_username, params.valid_password);

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

	
    //04 - Context Index table content  By Type option
    //05 - Context Index table content  By Context Index option
    it('verify context index table content.' +jiraNumber1+'.'+jiraNumber2, function() {
       
        //Context Index table content  By Type option
           globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
           browser.sleep(1000);
           globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.bytype_link);
           browser.sleep(3000);

           //checking the data in a row
            var valuepresent1=contextindexpage.isValidDataPresent(loaded.column_name1,loaded.unit);
            expect(valuepresent1).toEqual(true);
            var valuepresent2=contextindexpage.isValidDataPresent(loaded.column_name2,loaded.type);
            expect(valuepresent2).toEqual(true);
            var valuepresent3=contextindexpage.isValidDataPresent(loaded.column_name3,loaded.term);
            expect(valuepresent3).toEqual(true);

            //clicking on lens icon and checking the data
            contextindexpage.contextindexAction('detail');
            browser.sleep(1000); 
            var value1=contextindexpage.verifyInfoOfLensIcon(loaded.key1);
            expect(value1).toEqual(loaded.expectedvalue1);
            var value2=contextindexpage.verifyInfoOfLensIcon(loaded.key2);
            expect(value2).toEqual(loaded.expectedvalue2);
            var value3=contextindexpage.verifyInfoOfLensIcon(loaded.key3);
            expect(value3).toEqual(loaded.expectedvalue3);
            globalfunction.clickOnNavigationOrCloseButton('close');
            browser.sleep(2000);
                        
            //            //Context Index table content  By Context Index option
            //             // globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
            //             // browser.sleep(1000);
                        globalfunction.clickOnElement(loaded.bycontexindex_link);
                        browser.sleep(3000);
                        //checking the data in a row
                       var valuepresent1=contextindexpage.isValidDataPresent(loaded.column_name1,loaded.unit);
                       expect(valuepresent1).toEqual(true);
                       var valuepresent2=contextindexpage.isValidDataPresent(loaded.column_name2,loaded.type);
                       expect(valuepresent2).toEqual(true);
                       var valuepresent3=contextindexpage.isValidDataPresent(loaded.column_name3,loaded.term);
                       expect(valuepresent3).toEqual(true);
           
                       //clicking on lens icon and checking the data
                       contextindexpage.contextindexAction('detail');
                       browser.sleep(1000); 
                       var value1=contextindexpage.verifyInfoOfLensIcon(loaded.key1);
                       expect(value1).toEqual(loaded.expectedvalue1);
                       var value2=contextindexpage.verifyInfoOfLensIcon(loaded.key2);
                       expect(value2).toEqual(loaded.expectedvalue2);
                       var value3=contextindexpage.verifyInfoOfLensIcon(loaded.key3);
                       expect(value3).toEqual(loaded.expectedvalue3);
                    var todays_date = globalfunction.getDateAndVerify(loaded.path_date);
                    //    expect(todays_date).toEqual(true);
                       globalfunction.clickOnNavigationOrCloseButton('close');
           

     });
});
    
    
    
    
    

    
