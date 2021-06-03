var params = browser.params;
var jiraNumber ='GCMSQABANG-2278';


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
	 * 03 - Relationship - Add - invalid marginal
	 */
	it(' Relationships -Documents rotation - Add - invalid marginal - Eye view.'+jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
		//Verify type 
		relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
   
		//Enter mandatory fields in target
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
	  
   
		
        //Click rotation icon
		relationshippage.clickOnIcon(loadedData.section ,loadedData.rotationIcon);
		browser.waitForAngular();
		
		//Verify source eye icon is visible
		expect(relationshippage.isIconPresent(loadedData.SoureEyeIcon)).toEqual(true);
		
		//Click source eye icon & verify details are displayed
        relationshippage.clickOnIcon(loadedData.Source,loadedData.SoureEyeIcon);
		browser.waitForAngular();
	
        expect(relationshippage.isSummaryDisplayedInViewEyePopUp()).toEqual(false);
		globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);

	});

});




