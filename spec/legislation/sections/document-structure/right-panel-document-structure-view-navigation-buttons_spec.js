var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1677';
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
	 * GCMSQABANG-1677:05 - Navigation buttons
	 */
	it('Document Structure Navigation buttons.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		
		//Verify current version(inForce) is displayed at the first position 
		var inForceValidated = rightpanelpage.isInForceStructureDisplayedAsFirstStructure();
		expect(inForceValidated).toEqual(true);
		
		//Verify next navigation arrows
		browser.waitForAngular();
		var nextNavigationValidated = rightpanelpage.isNextArrowDisplayedInStructureNavigation();
		expect(nextNavigationValidated).toEqual(true);
		rightpanelpage.clickNextArrowInStructureNavigation();
		
		//Verify current version(inForce) is NOT displayed at the first position 
		browser.waitForAngular();
		var inForceVisible = rightpanelpage.isInForceStructureDisplayedAsFirstStructure();
		expect(inForceVisible).toEqual(false);
		
		//Verify previous navigation arrows
		  browser.waitForAngular();
		  var prevNavigationValidated = rightpanelpage.isPreviousArrowDisplayedInStructureNavigation();
		  browser.waitForAngular();
		rightpanelpage.clickPreviousArrowInStructureNavigation();
		
	
		 //Verify current version(inForce) is displayed at the first position 
		 browser.waitForAngular();
		var inForceValidated = rightpanelpage.isInForceStructureDisplayedAsFirstStructure();
		expect(inForceValidated).toEqual(true);
		
		//Verify multiple versions displayed at first page
		var multipleVersionsDisplayed = rightpanelpage.isMultipleStructureVersionsDisplayed();
		expect(multipleVersionsDisplayed).toEqual(true);
		
	});
	
});
