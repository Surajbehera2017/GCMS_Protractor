var params = browser.params;
var jiraNumber ='GCMSQABANG-1963';


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
	 * TC02 -Display Tree report - Aranzadi - Product list
	 */
	it('Display Tree report - Aranzadi - Product list.'+jiraNumber, function () {

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
		//Verify first value displayed in drop down
		var firstValueDisplayed =
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.firstproduct);
		expect(firstValueDisplayed).toEqual(true);
		
		//Verify all expected values in dropdown list
		
		var fieldDisplayed = false;
		for (var row = 0; row < loadedData.expectedproducts.length; row++) {
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.expectedproducts[row]).then(function(result){
				console.log("test");
				expect(result).toEqual(true);
			});
		}
		
		//Select first value and verify it is added to the selected list
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('Add',loadedData.firstproduct);
		var valueSelected = 
			relationshippage.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer(loadedData.firstproduct);
		expect(valueSelected).toEqual(true);
		
		//Re-open product dropdown list
		relationshippage.clickProductDropDownInRelationshipLayerInAddPopUp('Add');
		browser.waitForAngular();
		
		//Navigate to last page, and verify the product displayed
		relationshippage.clickNavigateToLastInProductDropDownInRelationshipLayer();
		var lastValueDisplayed =
			relationshippage.isValueDisplayedInProductDropDownInRelationshipLayer(loadedData.lastpageproduct);
		expect(lastValueDisplayed).toEqual(true);
		
	});

});




