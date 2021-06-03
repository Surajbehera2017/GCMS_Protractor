var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var PracticeAreaDocEdition = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po.js')
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-2471';
var testData = require('../../../../test-data/Jira_TestData/practice-area/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

// var PracticeAreaEdition = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po.js');
// var PracticeAreaDisplay = require('../../../../po/document/display/legis/sections/practice-area/practice-area.po.js');
// var documentToLoad = testData.legislation.sections.practice_area;

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

    it('Delete Button not available for single practice area.' + jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.expandSectionInLeftPanel(loaded.section);
        browser.sleep(2000);
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit);
        browser.sleep(2000);
        rightpanelpage.expandSectionInLeftPanel(loaded.section);
        browser.sleep(2000);
        var loc = globalfunction.isElementPresent(loaded.crossbtn);
        expect(loc).toEqual(false);

        // expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(false);
		// PracticeAreaDisplay.clickOnEditDocument();
		// browser.waitForAngular();
		// PracticeAreaEdition.expandable.expand();
        // browser.sleep(1000);
        // expect(PracticeAreaDisplay.deletePractice()).toEqual(false);

    });
});