var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1709';
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
	 * GCMSQABANG-1709 TC27 -Add 1.0 Editor - Aranzadi - Empty search button
	 */
	it('Unit Xeditor Aranzadi Empty search button.'+jiraNumber, function () {
		
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from XML editor');
		
		browser.sleep(7000);
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		
		//Click Replace button and verify search box is displayed
		rightpanelpage.fontFormatOptionsOnXMLeditor('Search');
		var searchBoxDisplayed = rightpanelpage.isfontFormatOptionpresent('Search');
		expect(searchBoxDisplayed).toEqual(true);
		
		//Click 'Clear Search' button and verify search box is disappeared
		rightpanelpage.fontFormatOptionsOnXMLeditor('Clear search');
		expect(rightpanelpage.isfontFormatOptionpresent()).toEqual(false);
		
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnApplyOrCloseButton('cancelEdition');
		
	});


});
