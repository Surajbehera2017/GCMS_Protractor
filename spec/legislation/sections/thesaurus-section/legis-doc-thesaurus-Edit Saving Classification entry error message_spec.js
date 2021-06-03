var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2415';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Thesaurus',function(){

	beforeEach(function () {
         
            browser.ignoreSynchronization = false;
            var legisDocDisplayPage = new LegislationDocumentDisplayPage();
            legisDocDisplayPage.get(loaded.marginal_id);
            thesauruspage.urlLoad(params.valid_username,params.valid_password);
            
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
    
    
    //05 - Edit - Saving Classification entry error message

  it('Edit - Saving Classification entry error message.'+jiraNumber, function () {
        
        browser.waitForAngular();
        globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded.type);
         globalpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
        thesauruspage.enterUnitId(loaded.unit);
        thesauruspage.enterThesaurusTerm(loaded.term_1);
        thesauruspage.thesaurusAction(loaded.actions);
        browser.sleep(5000);

        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                  browser.sleep(2000);
                  thesauruspage.clickTermEnterText(loaded.term_2);
                  browser.sleep(1000);
                  thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.term_2);
                  browser.sleep(1000);
                  globalpage.clickOnButtonForGlobal(loaded.apply_button);
                  browser.sleep(1000);
                  globalpage.clickOnButtonForGlobal(loaded.ok_button);
                  browser.sleep(1000);
                  browser.close();
                        });
            browser.switchTo().window(handles[0]);
            browser.sleep(3000);
            globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
            browser.sleep(1000);
            
        });
      
         });
   
});
    
