var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
//var fix_Section = require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var PracticeAreaDocEdition = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po.js')
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-2468';
var testData = require('../../../../test-data/Jira_TestData/practice-area/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Practice Area', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;

        legisDocDisplayPage.get(loaded.marginal_id);
        PracticeAreaDocEdition.urlLoad(params.valid_username, params.valid_password);
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

    it('should expand the practice area section and show the Accept button.' + jiraNumber, function () {
       
        browser.waitForAngular();
        rightpanelpage.expandSectionInLeftPanel(loaded.section);
        browser.sleep(2000);
        globalfunction.clickOnElement(loaded.collapse);
        browser.sleep(1000);


        
    //     PracticeAreaDisplay.expandable.expand(); 
	// 	expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(true);
	// 	PracticeAreaDisplay.expandable.collapse();
    //     expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(false);
        	
     });
});