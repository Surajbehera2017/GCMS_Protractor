var params = browser.params;


var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber ='GCMSQABANG-2190';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});
	/*
	 * 04 - Relationships -Documents rotation - Current Marginal
	 */
	it(' Relationships -Documents rotation - Current Marginal.'+jiraNumber, function () {

	// click on add button on relationship section 
	globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
	//Verify type 
	relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);

	//Enter mandatory fields in target
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
  

	
	
		//Verify current marginal id is displayed as disabled in source section
		expect(relationshippage.isCurrentMarginalIdDisabledInSource()).toEqual(true);
		
		//Click rotation icon & verify current marginal id is displayed as disabled in target section
		
	relationshippage.clickOnIcon(loadedData.section ,loadedData.rotationIcon);
	browser.waitForAngular();
		expect(relationshippage.isCurrentMarginalIdDisabledInTarget()).toEqual(true);
		browser.waitForAngular();
	    
	});

});




