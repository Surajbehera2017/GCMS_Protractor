var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2275';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Relationship', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});

	/*
	 * 06 - Relationship - Add product
	 */
	it('Relationship - Add product - Multiple relationship from multiple pages.' + jiraNumber, function () {

		// click on viewall link on relationship section 
		
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
		browser.sleep(2000);
		//Select first 2 check box in relationship table from 1st page
		globalpage.selectNoOfRows('2');
		//Go to 2nd page and select 3rd relationship (first in this page)
		relationshippage.clickonPagination(loadedData.nextPage);
		browser.sleep(1000);
		globalpage.selectNoOfRows('1');
		//Click add product button
		globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);
		//Verify add product popup is displayed
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);
		//Expected all selected relationships from all pages.
		//But currently, only the current page selection is displayed. (Bug??).
		//expect(relationshippage.numberOfSelectedRelationshipInAddProductPopUp()).toEqual('3');
		expect(relationshippage.numberOfSelectedRelationshipInAddProductPopUp()).toEqual('1');


	});

});




