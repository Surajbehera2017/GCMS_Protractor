var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber1= 'GCMSQABANG-2826';
 var jiraNumber2= 'GCMSQABANG-2828';
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

    //03 - Context-index - selection through the pages
    //01 - Context-index- selection through the pages
    
  it('selection through the pages.' +jiraNumber1+'.'+jiraNumber2, function () {

    globalfunction.expandSectionInLeftPanel(loaded.leftpanel);
    globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
    browser.sleep(1000);
    globalfunction.selectNoOfRows('3');
    browser.sleep(2000);
    globalfunction.clickOnNavigationOrCloseButton(loaded.next_button);
    browser.sleep(1000);
    globalfunction.clickOnNavigationOrCloseButton(loaded.previous_button);
    browser.sleep(1000);
    globalfunction.clickOnNavigationOrCloseButton('close');

  });    
 });
    
    
    
    
    

    
