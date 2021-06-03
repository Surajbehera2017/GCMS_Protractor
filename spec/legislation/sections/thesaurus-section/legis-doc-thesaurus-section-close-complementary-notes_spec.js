var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-3167';
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


    //03 - Thesaurus - close  a complementary note
    
	it('close complementary info.'+ jiraNumber, function () {
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.sectionname,loaded.btn);
        browser.sleep(1000);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.button);
        browser.sleep(1000);
        thesauruspage.enterThesaurusTerm(loaded.term);
        browser.sleep(2000);
        thesauruspage.clickOnComplementaryInfoIcon();
        browser.sleep(3000);
        thesauruspage.collapseComplementaryInfo();
        // thesauruspage.collapseComplementaryInfo();



           
        // browser.waitForAngular();
        //    thesauruspage.clickOnSectionButton('Thesaurus','viewalllink');
        //    browser.waitForAngular();
        // //    thesauruspage.clickOnComplementaryInfoIcon(); 
        //    browser.sleep(1000);
        //    thesauruspage.collapseComplementaryInfo();
        //    browser.sleep(1000);
        //    thesauruspage.clickOnViewMoreLink('View more');
        //    browser.sleep(1000);
        //    thesauruspage.collapseComplementaryInfo();
        //    browser.sleep(1000);
           


    //    browser.waitForAngular();
    //    thesauruspage.clickViewAllLink();
    //    thesauruspage.isComplementaryInfoTablePresent(); 
    //    thesauruspage.clickComplementaryInfoTable();
    //    thesauruspage.isComplemantaryInfoTextDisplayed();
       
    //    thesauruspage.isComplementaryCloseButtonDisplayed();
    //    thesauruspage.clickComplementaryCloseFirst();
    //    thesauruspage.clickComplementaryCloseSecond();
        
    //     var view = thesauruspage.isViewAllPresent();
    //     if(view = true)
    //         {
    //             expect(view).toEqual(true);
    //         }
      
    //    thesauruspage.closeViewAll();
        
            
        });
          
    });
          
