var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
 var fix_Section =require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2805';
var testData = require('../../../../test-data/Jira_TestData/fix-section-and-general/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
//var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

describe('Fix section', function () {
    
       beforeEach(function () {
     
        browser.ignoreSynchronization = false;
       
        legisDocDisplayPage.get(loaded.marginal_id);
        fix_Section.urlLoad(params.valid_username,params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();
    
		
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


    
   //Method: 03-Block-Unblock with analyst role
    it('it should block unblock Operation carried out successfully and it accept the popup.' + jiraNumber,function(){
        //block operation
       browser.waitForAngular();

       //verify whether unlock icon is present 
       var unlock = "(//*[@class='gcms-dot bento-toggle ng-isolate-scope ng-pristine ng-valid on'])[2]";
       expect(globalfunction.isElementDisplayed(unlock)).toEqual(true);

       //toggle to lock the analyst
       fix_Section.clickOnToggleButton();
       
       //Accept to block
       globalfunction.clickOnButtonForGlobal(loaded.accept);
       browser.sleep(2000);
       globalfunction.gettingTextofelement(loaded.popup,loaded.successfulmsg);

       browser.sleep(2000);
       fix_Section.clickonokOfBlock();

       //unblock operation
       //verify whether loack icon is present
        var lock = '(//*[@class="gcms-dot bento-toggle ng-isolate-scope ng-pristine ng-valid"])[2]' ;
        expect(globalfunction.isElementDisplayed(lock)).toEqual(true);

       //toggle to unlock
       fix_Section.clickOnToggleButton();

       //Accept to block
       globalfunction.clickOnButtonForGlobal(loaded.accept);
       globalfunction.gettingTextofelement(loaded.popup,loaded.successfulmsg);
      fix_Section.clickonokOfBlock();

        
    });
});