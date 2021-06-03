var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2513';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Delete', function () {

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
    
    

    //GCMSQABANG-2513 and GCMSQABANG-3079 : 03 - Delete button disactivated after unselecting
	it('validation of delete button deactivate.'+jiraNumber, function () {
        
        browser.waitForAngular();
        globalpo.clickOnSectionButton('Thesaurus','view');
        thesauruspage.selectNoOfRows('All');//selecting all entries
        browser.sleep(1000);
        thesauruspage.selectNoOfRows('All');//deselecting all entries
        browser.sleep(1000);
        expect(globalpo.clickOnbuttonInsideSectionTable('delete')).toEqual(false); 
          
    });
      
             
});