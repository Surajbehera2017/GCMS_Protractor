var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-3103';
 var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
 var loaded = testData[params.env][params.BU];
 
       
describe('Thesaurus',function(){//('Thesaurus-section-Add Page', function () {

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



    //01 - Add - Saving Classification entry for one unit
  it('should successfully perform add operation for one unit.'+jiraNumber,function(){

          browser.waitForAngular();
         globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
          browser.waitForAngular();
         globalfunction.clickOnbuttonInsideSectionTable(loaded.button_name);

         browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
          browser.sleep(2000);
         thesauruspage.clickOnPlusButton();
         thesauruspage.enterUnitIDInPopup(loaded.unitid);
         thesauruspage.clickOnComplementDropdown();
         thesauruspage.selectNumberFromComplement(loaded.number);
          browser.waitForAngular();
           globalfunction.clickOnButtonForGlobal(loaded.save);
           browser.sleep(2000);
           thesauruspage.clickHierarchyEnterText(loaded.hierarchy);
           browser.sleep(2000);
           thesauruspage.clickTermEnterText(loaded.searchterm);
           thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.expectedterm);
           authorNotes.clickOnButtonForGlobal(loaded.add);
            });
            browser.switchTo().window(handles[0]);
            browser.sleep(3000);
            browser.waitForAngular();
            thesauruspage.thesaurusAction(loaded.action);
            browser.sleep(3000);
            authorNotes.clickOnButtonForGlobal(loaded.respond)

        });

            
    
    });
});

    
  
   
    

       