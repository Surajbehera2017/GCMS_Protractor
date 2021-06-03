var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2815';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Complementary Info', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(loaded.marginal_id);
      thesauruspage.urlLoad(params.valid_username,params.valid_password);
        
	});
    
    afterEach(function() {
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

     // GCMSQABANG-2815: 02 - Thesaurus - collapse complementary notes
	it('collapse complementary info'+jiraNumber.link(params.jiraURL+jiraNumber), function () {
        
        browser.waitForAngular();
        globalpo.clickOnSectionButton('Thesaurus','view');
        globalpo.isTablePresent();
        expect(globalpo.isTablePresent()).toEqual(true); 
        browser.sleep(2000);
        thesauruspage.clickOnComplementaryInfoIcon();
        browser.waitForAngular();
        browser.sleep(2000);
        // to collapse Complementary Info
        thesauruspage.clickOnComplementaryInfoIcon();
        browser.sleep(2000);
        globalpo.clickOnNavigationOrCloseButton('close');
        browser.sleep(2000);
        
            
        });
          
    });
          
