var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2595';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Delete Page', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(loaded.marginal_id);
      thesauruspage.urlLoad(params.valid_username,params.valid_password);  
                          
});
afterEach(function () {
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

    //GCMSQABANG-2595:05 - Deleting from different pages
	it('Deleting from different pages.'+jiraNumber, function () {
        
        globalpo.clickOnSectionButton('Thesaurus','view');
      thesauruspage.selectNoOfRows('1');
      browser.sleep(1000);
      globalpo.clickOnNavigationOrCloseButton('next');
      browser.sleep(1000);
      thesauruspage.selectNoOfRows('1');
      globalpo.clickOnbuttonInsideSectionTable('Delete');
      globalpo.clickOnNavigationOrCloseButton('cancel');

    });
    
});