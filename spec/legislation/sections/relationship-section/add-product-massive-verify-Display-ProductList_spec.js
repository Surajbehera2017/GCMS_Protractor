var params = browser.params;
var jiraNumber = 'GCMSQABANG-1973';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');



describe('Relationship', function () {

	beforeAll(function () {
		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});
	/*
	 * TC07 -Relationships - Add product massive - Aranzadi - Display - Product List
	 */
	it('Relationships - Add product massive - Aranzadi - Display - Product List.' + jiraNumber, function () {

		// click on viewall link on relationship section 

		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);


		//Click product tab & verify product dropdown is displayed

		globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);
		expect(relationshippage.isProductDropDownDisplayedInRelationshipLayerInAddPopUp()).toEqual(true);
		relationshippage.clickDropDownArrowInAddProductFormPopUp();
		//Verify first value displayed in drop down
		var firstValueDisplayed =
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.firstproduct);
		expect(firstValueDisplayed).toEqual(true);

		//Verify all expected values in dropdown list
		var fieldDisplayed = false;
		for (var row = 0; row < loadedData.expectedproducts.length; row++) {
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.expectedproducts[row]).then(function (result) {
				expect(result).toEqual(true);
			});
		}

		//Navigate to last page, and verify the product displayed
		relationshippage.clickNavigateToLastInProductDropDownInRelationshipLayer();
		var lastValueDisplayed =
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.lastpageproduct);
		expect(lastValueDisplayed).toEqual(true);

	});

});




