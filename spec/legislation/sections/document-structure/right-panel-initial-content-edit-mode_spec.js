var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1682';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var tabName = I18n.documentstructure.documenttexttabname;
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
	 * GCMSQABANG-1682:04 - Initial Content - Edition mode
	 */
	it('Initial Content Edit mode.' + jiraNumber, function () {

		//Verify Document Text tab is highlighted by default
		browser.waitForAngular();
        rightpanelpage.clickOnEditButton();
        
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(tabName);
		expect(expectedTabHighlighted).toEqual(true);
		
		//Verify version selector is displayed
		browser.waitForAngular();
		expect(rightpanelpage.isVersionSelectorDropDownDisplayed()).toEqual(true);
		
		//Verify language selector is displayed
     	browser.waitForAngular();
		expect(rightpanelpage.isLanguageSelectorDropDownDisplayed()).toEqual(true);
		
		//Verify Preview Button is displayed
		browser.waitForAngular();
		expect(rightpanelpage.isPreviewButtonDisplayed()).toEqual(true);
		
		//Verify Refresh Text Button is displayed
		browser.waitForAngular();
		expect(rightpanelpage.isRefreshTextButtonDisplayed()).toEqual(true);
		
		
		});
	
});
