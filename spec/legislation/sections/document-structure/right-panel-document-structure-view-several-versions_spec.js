var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var jiraNumber = 'GCMSQABANG-1674';
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
	 * GCMSQABANG-1674:01 - Document Structure - View - several versions
	 */
	it('Document Structure View several versions.'+ jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		//Verify if text color of Document structure is Orange after selecting it.
		browser.waitForAngular();
		var validateColor =rightpanelpage.isTextColorOfSelectedTabEquals(loadedData.orange);
		expect(validateColor).toEqual(true);

		//Verify multiple structure versions displayed
		browser.waitForAngular();
		var srtructureVersions = rightpanelpage.isMultipleStructureVersionsDisplayed();
		expect(srtructureVersions).toEqual(true);
		
		//Verify inForce Structure(current version) displayed
		browser.waitForAngular();
		var inForceStructure = rightpanelpage.isInForceStructureDisplayed();
		expect(inForceStructure).toEqual(true);
		
		//Verify Background color of current structure (In Force) is orange
		browser.waitForAngular();
		var validateColor1 = rightpanelpage.isBGColorOfInForceStructureEquals(loadedData.orangeInForce);
		expect(validateColor1).toEqual(true);
		
	});
	
});
