var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1676';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

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


	/*
	 * GCMSQABANG-1676:03 - Document Structure - Original
	 */
	it('Document Structure View Original version.'+ jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		//Verify Original Structure is displayed
		var originalStructure = rightpanelpage.isOriginalStructureDisplayed();
		expect(originalStructure).toEqual(true);
		
		//Verify Background color of Original structure when selected to be grey
		var validateColor = rightpanelpage.isBGColorOfOriginalStructureEquals(loadedData.grey);
		expect(validateColor).toEqual(true);
		
	});
	
});
