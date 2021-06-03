var params = browser.params;
var jiraNumber ='GCMSQABANG-1962';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeEach(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
	/*
	 * TC01 -Display Tree report - Aranzadi - Layout
	 */
	it('Display Tree report - Aranzadi - Layout.'+jiraNumber, function () {

		// click on add button on relationship section 
	globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
		
	//Verify  product tab is enabled or not in add relationship popup
	
	expect(relationshippage.isTabEnabled(loadedData.ProductTab)).toEqual(true);
	
	
	//Click product tab & verify product dropdown is displayed
	relationshippage.clickOnTab(loadedData.ProductTab);
	browser.waitForAngular();
	expect(relationshippage.isProductDropDownDisplayedInRelationshipLayerInAddPopUp()).toEqual(true);
	
	});

});




