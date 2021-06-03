var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var authorNotesPage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNumber1 = 'GCMSQABANG-1975';
var jiraNumber2 = 'GCMSQABANG-1976';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loaded.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});

	//01 - Relationships without products

	it('Relationships without products.' + jiraNumber1, function () {


		browser.waitForAngular();

		// click on view all link of relationship section 
		globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
		browser.sleep(1000);

		//Select first check box in relationship table & click modify product
		globalpage.selectNoOfRows('1');
		relationshippage.clickOnProductsButton(loaded.modify_product);
		expect(relationshippage.isModifyProductFormPopUpIsDisplayed()).toEqual(true);

		//check if accept button is disabled or not
		expect(relationshippage.isCommonAcceptButtonDisabled()).toEqual(true);

		//Click cancel to close the popup
		globalpage.clickOnButtonForGlobal(loaded.cancel_button);

	});


	/*
	 * 02 - Remove the unique Product
	 * Note: previous test is not having any products now.
	 * Hence adding 1 product (unique), and deleting it.
	 */

	it('Remove the unique Product.' + jiraNumber2, function () {

		browser.waitForAngular();

		// click on view all link of relationship section 
		globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
		browser.sleep(1000);

		//Select first check box in relationship table & click modify product
		globalpage.selectNoOfRows('1');
		relationshippage.clickOnProductsButton(loaded.add_product);
		expect(relationshippage.isModifyProductFormPopUpIsDisplayed()).toEqual(true);

		//click on product dropdown and select the product
		relationshippage.clickDropDownArrowInAddProductFormPopUp('table');
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('table',loaded.firstproduct);

		//click on accept button
		globalpage.clickOnButtonForGlobal(loaded.accept_button);

		//read the message in the dialog box

		globalpage.gettingTextofelement(loaded.element_locator, loaded.dialog_text);
		globalpage.clickOnButtonForGlobal(loaded.ok_button);
		browser.sleep(4000);

		//close the table
		globalpage.clickOnNavigationOrCloseButton('close');

		// click on view all link of relationship section 
		globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
		browser.sleep(1000);


		//Select first check box in relationship table & click modify product
		globalpage.selectNoOfRows('1');
		browser.sleep(2000);
		relationshippage.clickOnProductsButton(loaded.modify_product);
		expect(relationshippage.isModifyProductFormPopUpIsDisplayed()).toEqual(true);

		var productExist =
			relationshippage.isValueDisplayedInExistingProductsInModifyPopUp(loaded.firstproduct);
		expect(productExist).toEqual(true);

		//Remove product & verify operation is successful
		relationshippage.removeExistingProductInModifyPopUp(loaded.firstproduct);

		//click on accept button
		globalpage.clickOnButtonForGlobal(loaded.accept_button);

		//read the message in the dialog box
		browser.waitForAngular();
		globalpage.gettingTextofelement(loaded.element_locator, loaded.dialog_text);
		globalpage.clickOnButtonForGlobal(loaded.ok_button);
		browser.waitForAngular();

		//Click glass view icon & verify the value removed from publication data
		relationshippage.clickOnLensIcon();
		browser.sleep(1000);

		var publicationDataFound =
			relationshippage.verifyinfoInLensIcon(loaded.publicationdata_info);
		expect(publicationDataFound).toEqual(false);

		globalpage.clickOnNavigationOrCloseButton('close');

	});

});




