var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2276';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});

	/*
	 * 07 - Relationship - Modify  product
	 */
	it('Relationship - Modify product - Multiple relationship from multiple pages .' + jiraNumber, function () {
		browser.waitForAngular();
		globalfunction.clickOnSectionButton(loadedData.secname, loadedData.viewtable);
		browser.sleep(2000);
		globalfunction.selectNoOfRows('2');
		browser.sleep(2000);
		relationshippage.clickOnProductsButton(loadedData.modify);
		browser.sleep(2000);
		expect(relationshippage.isModalPresent(loadedData.remove)).toEqual(true);
		browser.sleep(2000);
		globalfunction.gettingTextofelement(loadedData.removeprods, loadedData.text);
		browser.sleep(2000);
		globalfunction.clickOnButtonForGlobal(loadedData.cancel);
		browser.sleep(2000);
		relationshippage.clickonPagination(loadedData.nextpage);
		browser.sleep(2000);
		globalfunction.selectNoOfRows('1');
		browser.sleep(2000);
		relationshippage.clickOnProductsButton(loadedData.modify);
		browser.sleep(2000);
		expect(relationshippage.isModalPresent(loadedData.remove)).toEqual(true);
		browser.sleep(2000);
		globalfunction.gettingTextofelement(loadedData.removeprods, loadedData.text_1);
		browser.sleep(1000);
		globalfunction.clickOnButtonForGlobal(loadedData.cancel);
		browser.sleep(1000);
		globalfunction.clickOnNavigationOrCloseButton(loadedData.closetable);



		// browser.waitForAngular();
		// browser.driver.manage().window().maximize();
		// relationshippage.expandRelationshipTable();
		// browser.waitForAngular();
		// relationshippage.clearFiltersInRelationshipTable();
		// browser.waitForAngular();

		// //Select first 2 check box in relationship table from 1st page
		// for (var row = 0; row < 2; row++) { //Selecting first 2 check boxes
		// 	relationshippage.clickCheckboxAtPosition(row);
		// 	browser.waitForAngular();
		// }
		// //Go to 2nd page and select 3rd relationship (first in this page)
		// relationshippage.clickNextPageButtonInRelationshipTable();
		// relationshippage.clickCheckboxAtPosition(0);
		// //Click modify button
		// relationshippage.clickModifyProductInRelationshipTableHeader();

		// //Verify add/modify product popup is displayed
		// expect(relationshippage.isAddProductFormPopUpIsDisplayed()).toEqual(true);
		// //Expected all selected relationships from all pages.
		// //But currently, only the current page selection is displayed. (Bug??).
		// //expect(relationshippage.numberOfSelectedRelationshipInAddProductPopUp()).toEqual(3);
		// expect(relationshippage.numberOfSelectedRelationshipInAddProductPopUp()).toEqual('1');

		// //Click cancel
		// relationshippage.clickCommonCancelButton();

	});

});




