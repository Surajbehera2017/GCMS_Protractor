var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1675';
var tabName = I18n.documentstructure.documentstructuretabname;
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
	 * GCMSQABANG-1675:02 - Document Structure view Content
	 */
	it('Document Structure View Content.'+ jiraNumber, function () {

		browser.waitForAngular(1000);
		rightpanelpage.clickDocumentStructure();
		
		//Verify Document structure tab is highlighted
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(tabName);
		expect(expectedTabHighlighted).toEqual(true);
		
		//Verify Document structure tab text is in orange color
		var validateColor = rightpanelpage.isColorOfHighlightedTabEquals(loadedData.orange);
		expect(validateColor).toEqual(true);
		
		//Verify current version(inForce) is displayed at the first position 
		var inForceValidated = rightpanelpage.isInForceStructureDisplayedAsFirstStructure();
		expect(inForceValidated).toEqual(true);
		
		//Verify navigation arrows
		var nextNavigationValidated = rightpanelpage.isNextArrowDisplayedInStructureNavigation();
		expect(nextNavigationValidated).toEqual(true);
		rightpanelpage.clickNextArrowInStructureNavigation();
		
		var navigationValidated = rightpanelpage.isPreviousArrowDisplayedInStructureNavigation();
		expect(navigationValidated).toEqual(true);
		
		
	});
	
});
