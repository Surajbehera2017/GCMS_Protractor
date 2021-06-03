var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-1971';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var jiraNumber1 = 'GCMSQABANG-1972';
var testData1 = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loadedData1 = testData1[params.env][params.BU];


describe('Relationship', function () {

	beforeAll(function () {

		//browser.ignoreSynchronization = false;
		//legisDocDisplayPage.get(loadedData.marginal_id);
		//relationshippage.urlLoad(params.valid_username,params.valid_password);

	});

	/*
	 * TC05 -Relationships - Add product massive - Aranzadi - Display - Cancel button
	 */
	it('Relationships - Add product massive - Aranzadi - Display - Cancel button.' + jiraNumber, function () {


		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

		//click on viewall link on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

		//Select first  check box in relationship table from 1st page
		globalpage.selectNoOfRows('1');

		//Click add product button
		globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);

		//Verify add product popup is displayed
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);

		//Click close (X) & verify the popup is closed
		globalpage.clickOnButtonForGlobal(loadedData.CancelProductButton);
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(false);

	});

	/*
	 * TC06 -Relationships - Add product massive - Aranzadi - Display - X button
	 */
	it('Relationships - Add product massive - Aranzadi - Display - X button.' + jiraNumber1, function () {


		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData1.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);
		globalpage.clickOnSectionButton(loadedData1.Relationships, loadedData1.viewAllLink);

		//Click add product button

		globalpage.clickOnButtonForGlobal(loadedData1.AddProductButton);

		//Verify add product popup is displayed
		expect(relationshippage.isModalPresent(loadedData1.AddProductModal)).toEqual(true);


		//Click close (X) & verify the popup is closed
		relationshippage.closeAddOrRemoveProductPopUp();
		expect(relationshippage.isModalPresent(loadedData1.AddProductModal)).toEqual(false);

	});

});




