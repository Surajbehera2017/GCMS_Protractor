var params = browser.params;
var jiraNumber ='GCMSQABANG-2078';
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
	 * 05 - wrong type of relationship
	 */
	it('Relationships - Add Relationships - wrong type of relationship.'+jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
		//Verify wrong type 
		relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
   
	   //Enter mandatory fields in target (Enter invalid margin)
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
        relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.UnitValue);
	   //Click Add & verify the error
		  
	   relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);
   
	   expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);
	   relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
	   expect(relationshippage.getMessageFromInfoDialogueBox()).toContain(loadedData.error_msg);
   
	});

});




