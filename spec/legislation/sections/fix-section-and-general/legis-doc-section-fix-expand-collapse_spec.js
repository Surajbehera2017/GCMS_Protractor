var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
var fix_Section = require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2948';
var testData = require('../../../../test-data/Jira_TestData/fix-section-and-general/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
//var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
//var collectiveagreement = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
describe('Fix section', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;

        legisDocDisplayPage.get(loaded.marginal_id);
        fix_Section.urlLoad(params.valid_username, params.valid_password);
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


	it('should expand and collapse the fix general section.' + jiraNumber, function () {
		browser.waitForAngular();
		fix_Section.expandAndCollapseFixSection();
		browser.sleep(2000);
       fix_Section.expandAndCollapseFixSection();
        //clicking on language dropdown to change the language
        fix_Section.selectLanguageFromUserDropdown(loaded.langoption);
        // browser.sleep(1000);
        var loc = fix_Section.isWelcomeTextDisplayed(loaded.welcometext);
        expect(loc).toEqual(true);
       // browser.sleep(2000);
        fix_Section.selectLanguageFromUserDropdown(loaded.langoption1);
        var loc1 = fix_Section.isWelcomeTextDisplayed(loaded.welcome);
        expect(loc1).toEqual(true);
         
			
			
    });
    
    it('should verify the fixed section.' +jiraNumber,function(){
        
         browser.waitForAngular();
         browser.sleep(2000);
         //verifying whether marginal id is displayed
        var loc = globalfunction.isElementDisplayed(loaded.marginal);
        expect(loc).toEqual(true);
        browser.sleep(2000);
       
    // //verify whether  ordenenza is displayed
        var loc2 = globalfunction.isElementDisplayed(loaded.desc);
       expect(loc2).toEqual(true);
        browser.sleep(2000);

    // //     //verifying number is displayed
        var index = globalfunction.isElementDisplayed(loaded.num);
        expect(index).toEqual(true);
        browser.sleep(2000);

    // //     //verifying docnum
        var tar = globalfunction.isElementDisplayed(loaded.docnum);
        expect(tar).toEqual(true);
        browser.sleep(2000);

    //     //verifying docyear
        var el1 = globalfunction.isElementDisplayed(loaded.docyear);
        expect(el1).toEqual(true);
        browser.sleep(2000);
       
    //     //verify whether doc date is displayed
        var loc3 = globalfunction.isElementDisplayed(loaded.date);
        expect(loc3).toEqual(true);
        browser.sleep(3000);

    //     //verifying the text getting displayed
       var el = globalfunction.isElementDisplayed(loaded.text);
       expect(el).toEqual(true);
       browser.sleep(2000);

     //    //verifying oractice area is displayed
       var loc4 = globalfunction.isElementDisplayed(loaded.practicearea);
       expect(loc4).toEqual(true);
       browser.sleep(2000);




});


	

	});



