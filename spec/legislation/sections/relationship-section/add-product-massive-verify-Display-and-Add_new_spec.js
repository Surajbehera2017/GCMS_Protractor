var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-1968';
var jiraNumber1 = 'GCMSQABANG-1969';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Relationship', function () {

	beforeAll(function () {
		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});

	/*
	 * TC01 -Relationships - Add product massive - Aranzadi - Display - Add
	 */
	it('Relationships - Add product massive - Aranzadi - Display - Add.' + jiraNumber, function () {

		// click on viewall link on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
		browser.sleep(2000);

		//Select first  check box in relationship table from 1st page
		globalpage.selectNoOfRows('1');

		//Click add product button
		globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);

		//Verify add product popup is displayed
		expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);

		//Select first value from drop down & verfiy
		relationshippage.clickProductDropDownInRelationshipLayerInAddPopUp('table');
		
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('table',loadedData.firstproduct);
		var valueSelected =
			relationshippage.isSelectedValueDisplayedInAddProductPopUp(loadedData.firstproduct);
		expect(valueSelected).toEqual(true);

		//Click accept & verify operation is successful
		globalpage.clickOnButtonForGlobal(loadedData.AcceptButton);
		var infoMessage = relationshippage.getMessageFromInfoDialogueBox();
		expect(infoMessage).toEqual(loadedData.msg);
		globalpage.clickOnButtonForGlobal(loadedData.ok);

		//Click edit for first product & Click product tab, and verify added product is displayed.
		globalpage.selectNoOfRows('1');
		relationshippage.clickonEditButtonInRelTable();

		relationshippage.clickOnTab(loadedData.ProductTab);
		var addedProductDisplayed =
			relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct);
		expect(addedProductDisplayed).toEqual(true);
		
		//Cleaning up - Remove the product added
		relationshippage.removeSelectedValueDisplayedInListUnderProductDropDown(loadedData.firstproduct);
		relationshippage.clickSaveButton();
		browser.waitForAngular();

	});


});




