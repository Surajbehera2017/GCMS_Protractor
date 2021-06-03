var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
//var fix_Section = require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var PracticeAreaDocEdition = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po.js')
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-2474';
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
	it('expand the practice area and add new practice area .' + jiraNumber, function() {

		 browser.waitForAngular();
		 rightpanelpage.expandSectionInLeftPanel(loaded.section);
		 browser.sleep(1000);
		 rightpanelpage.clickOnbuttonInEditMode(loaded.edit);
		 browser.sleep(1000);
		 rightpanelpage.expandSectionInLeftPanel(loaded.section);
		 browser.sleep(2000);
		 globalfunction.clickOnElement(loaded.add);
		 browser.sleep(2000);
		 PracticeAreaDocEdition.selectPracticeAreaFromDropdown(loaded.option);
		 browser.sleep(2000);
		 rightpanelpage.clickOnbuttonInEditMode(loaded.save);
		 browser.sleep(2000);
		// PracticeAreaDocEdition.clickToSaveNewPracticeArea();
		 globalfunction.clickOnElement(loaded.savebtn);
		 browser.sleep(3000);
		 rightpanelpage.expandSectionInLeftPanel(loaded.section);
		 browser.sleep(2000);
		 var loc = globalfunction.isElementDisplayed(loaded.newentry);
		 expect(loc).toEqual(true);

		 
	});

	it('delete the added practice area.' + jiraNumber, function() {
	   
		browser.waitForAngular();
		rightpanelpage.clickOnbuttonInEditMode(loaded.edit);
		browser.sleep(2000);
		rightpanelpage.expandSectionInLeftPanel(loaded.section);
		browser.sleep(1000);
		globalfunction.clickOnElement(loaded.remove);
		browser.sleep(2000);
		rightpanelpage.clickOnbuttonInEditMode(loaded.save);
		browser.sleep(1000);
		globalfunction.clickOnElement(loaded.savebtn);
		browser.sleep(2000);
		rightpanelpage.expandSectionInLeftPanel(loaded.section);
		browser.sleep(1000);
	});

});