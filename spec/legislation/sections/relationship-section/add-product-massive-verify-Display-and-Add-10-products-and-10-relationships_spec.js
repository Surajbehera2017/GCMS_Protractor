var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-1970';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});
	/*
	 * TC03 -Relationships - Add product massive - Aranzadi - Display - Add 10 products 10 relationships
	 * Note: This is implemented for 5 products only. (Test case is to verify for multiple products)
	 */
	it('Relationships - Add product massive - Aranzadi - Display - Add 5 products 5 relationships.' + jiraNumber, function () {

		// click on viewall link on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
		browser.sleep(2000);
		//Select first five  check box in relationship table from 1st page
		globalpage.selectNoOfRows('2');
		browser.sleep(1000);
		//Click add product button
		globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);

		//Verify add product popup is displayed
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);


		//Select first  five value from drop down & verify
		for (var row = 0; row < loadedData.expectedproducts.length; row++) {
			//Select value from drop down
			relationshippage.clickDropDownArrowInAddProductFormPopUp();
	
			relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('table',loadedData.expectedproducts[row]);
			browser.waitForAngular();
		}
		//Click accept & verify operation is successful
		globalpage.clickOnButtonForGlobal(loadedData.AcceptButton);
		var infoMessage = relationshippage.getMessageFromInfoDialogueBox();
		expect(infoMessage).toEqual(loadedData.msg);
		globalpage.clickOnButtonForGlobal(loadedData.ok);

		//Click edit for first product & Click product tab, and verify added products are displayed.
		globalpage.selectNoOfRows('1');
		relationshippage.clickonEditButtonInRelTable();
		relationshippage.clickOnTab(loadedData.ProductTab);
		for (var row = 0; row < loadedData.expectedproducts.length; row++) {
			var addedProductDisplayed =
				relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.expectedproducts[row]);
			expect(addedProductDisplayed).toEqual(true);

		}

		relationshippage.closeAddorEditRelationshipPopup();
		browser.sleep(1000);
		authorNotes.clickOnButtonForGlobal(loadedData.yes);
		globalpage.selectNoOfRows('1');
		browser.sleep(1000);

		//Remove the added products for 2 rows
		globalpage.selectNoOfRows('2');
        browser.sleep(1000);
		//Click add product button
		relationshippage.clickModifyProductInRelationshipTableHeader();

		for (var row = 0; row < loadedData.expectedproducts.length; row++) {

			relationshippage.removeProductInModifyProductpopup();

		}
		globalpage.clickOnButtonForGlobal(loadedData.AcceptButton);
		var infoMessage = relationshippage.getMessageFromInfoDialogueBox();
		expect(infoMessage).toEqual(loadedData.msg);
		globalpage.clickOnButtonForGlobal(loadedData.ok);



	});

});




