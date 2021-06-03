var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber1= 'GCMSQABANG-3554';
 var jiraNumber2='GCMSQABANG-3557';
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
	

    //12 - Modal - Context index copy
    
  it('Modal - Context index copy.' +jiraNumber1, function () {

        globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
        browser.sleep(1000);
        globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.bytype_link);
        browser.sleep(3000);
        contextindexpage.contextindexAction(loaded.copy_icon);
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currentHandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
        
            browser.sleep(1000);
            browser.driver.manage().window().setPosition(0, -1000); 
            
     });
                browser.switchTo().window(currentHandle); 
                browser.sleep(1000);
                // var EC = protractor.ExpectedConditions;
                // var ele = element(by.xpath('//a[@ng-click="addContextIndex()"]'));
                // var isClickable = EC.elementToBeClickable(ele);
                // expect(isClickable).toBe(true);
                globalfunction.clickOnbuttonInsideSectionTable('Delete');
                
    });
});

 
    // 11 - Modal - Context index copy

 it('Modal - Context index copy.' +jiraNumber2, function () {

    globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
    browser.sleep(1000);
    globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.bytype_link);
    browser.sleep(3000);
    contextindexpage.contextindexAction(loaded.copy_icon);
    browser.sleep(2000);
    browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        var currenthandle = handles[0];

        browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(2000);
            browser.close();
            browser.sleep(7000);
 });
            browser.switchTo().window(currenthandle); 
            browser.sleep(1000);
            globalfunction.clickOnNavigationOrCloseButton('close');

});
});
});


    
    
    
    
    

    
