var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-3100';
 var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
 var loaded = testData[params.env][params.BU];


describe('Thesaurus',function() {
    

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
    
    it('no hierarchy found error.'+jiraNumber, function () {

    
    globalfunction.expandSectionInLeftPanel(loaded.section);
    globalfunction.clickOnSectionButton('Thesaurus' ,'INDICE COMUN');
    //thesauruspage.clickOnGiveThesaurusType(loaded.thesaurus_type);
    thesauruspage.clickOnbuttonInsideSectionTable(loaded.button_name);
    thesauruspage.enterUnitId(loaded.unit);
    browser.sleep(1000);
    // thesauruspage.enterUnitLevel(loaded.unitlevel);
    // browser.sleep(1000);
    thesauruspage.enterThesaurusTerm(loaded.term);
    browser.sleep(1000);
    thesauruspage.thesaurusAction(loaded.action);
    browser.sleep(1000);
    browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(1000);
            browser.driver.manage().window().maximize();
            browser.sleep(4000);
            thesauruspage.clickHierarchyEnterText(loaded.hierarchy);
            browser.sleep(2000);
            var validate_msg=thesauruspage.isNoResultDisplayed('hierarchy',loaded.error_msg);
            console.log(validate_msg);
             expect(validate_msg).toEqual(true);
             browser.sleep(1000);
            globalfunction.clickOnButtonForGlobal(loaded.bttn);
            browser.sleep(1000);
            globalfunction.clickOnButtonForGlobal(loaded.buttonname);
            });
            browser.switchTo().window(handles[0]);
            browser.sleep(3000);
            browser.waitForAngular();
        });








        
    //     browser.waitForAngular();
    //     thesauruspage.clickadd();
    //     browser.waitForAngular();
    //     browser.getAllWindowHandles().then(function(handles) {
    //     var newTabHandle = handles[1];
    //     browser.switchTo().window(newTabHandle).then(function () {
    //         browser.sleep(3000);
    //     browser.waitForAngular();
    //     thesauruspage.clickHierarchyTab();
    //     thesauruspage.sendTermKeywordNoTerm();
    //     thesauruspage.enterKeyTermHierarchy();
    //    var noHie = thesauruspage.isNoHierarchyTextPresent();
    //         if(noHie = true)
    //          {
    //              expect(noHie).toEqual(true);
    //          }
    //     thesauruspage.clickCancelButton();
    //         browser.sleep(3000);
        });
    });
              
          

          
