var params = browser.params;
var jiraNumber ='GCMSQABANG-1966';
var jiraNumber1 ='GCMSQABANG-1967';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
	/*
	 * TC05 -Display Tree report - Aranzadi -Remove products
	 */
	it('Display Tree report - Aranzadi -Remove products.'+jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
 
		//Verify  product tab is enabled or not in add relationship popup
		
		expect(relationshippage.isTabEnabled(loadedData.ProductTab)).toEqual(true);
		
		
		//Click product tab & verify product dropdown is displayed
		relationshippage.clickOnTab(loadedData.ProductTab);
		browser.waitForAngular();
		expect(relationshippage.isProductDropDownDisplayedInRelationshipLayerInAddPopUp()).toEqual(true);
		 
		relationshippage.clickProductDropDownInRelationshipLayerInAddPopUp('Add');
			browser.waitForAngular();
			
			console.log("test.....");
			//Select first value and verify it is added to the selected list
			relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('Add',loadedData.firstproduct);
			var valueSelected = relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct);
			expect(valueSelected).toEqual(true);
			//Re-open product dropdown list
			
			relationshippage.clickProductDropDownInRelationshipLayerInAddPopUp('Add');
			browser.waitForAngular();
			
			//Navigate to last page, select new value, and verify both the product selected
			relationshippage.clickNavigateToLastInProductDropDownInRelationshipLayer();
			relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('add',loadedData.lastpageproduct);
			var bothValueSelected =
				relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct)
				&& relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.lastpageproduct);
			expect(bothValueSelected).toEqual(true);
			
		//Click Remove for both the products, and verify the products are removed.
		relationshippage.removeSelectedValueDisplayedInListUnderProductDropDown(loadedData.firstproduct);
		relationshippage.removeSelectedValueDisplayedInListUnderProductDropDown(loadedData.lastpageproduct);
		bothValueSelected =
			relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct)
			&& relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.lastpageproduct);
		expect(bothValueSelected).toEqual(false);
	});

	/*
	 * TC06 -Display Tree report - Aranzadi -Add a third product
	 * Note: add 3rd product after add&removing two products.
	 * so using after first it block
	 */
	it('Display Tree report - Aranzadi -Add a third product.'+jiraNumber1, function () {

		relationshippage.clickProductDropDownInRelationshipLayerInAddPopUp('Add');
		browser.waitForAngular();
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('Add',loadedData.firstproduct);
		var firstValueSelected =
			relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct);
		var secondValueSelected = 
			relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.lastpageproduct);
			expect(firstValueSelected).toEqual(true);
		expect(secondValueSelected).toEqual(false);
		
	});
	

	
});




