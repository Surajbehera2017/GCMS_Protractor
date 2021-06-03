var params = browser.params;
var jiraNumber ='GCMSQABANG-2075';
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
afterEach(function(){
   
	//relationshippage.clickOnIcon('collector','deleteRela');
  });

	/*
	02 - Add a rela with Compliance document
	*/
	it('Relationships - Add Relationships - Compliance document.'+jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
		//Verify type as Véase
		relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
	
		//Enter mandatory fields in target
	 relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
	 relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
	 relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
   
		//Select compliance document (doc with Non-existant compliance)
		relationshippage.clickOnTab('PURSUANT');
	
		relationshippage.sendValueToPursuant(loadedData.CodeField,loadedData.pursuant_code);
		relationshippage.sendValueToPursuant(loadedData.YearField,loadedData.pursuant_year);
		relationshippage.sendValueToPursuant(loadedData.NumberField,loadedData.pursuant_number);
	  

		//Click Add & verify the error
		relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//error displayed
		relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
		expect(relationshippage.getMessageFromInfoDialogueBox()).toContain(loadedData.error_msg);
		relationshippage.clickOkpopup();

		 //Select compliance document (doc with existant compliance)
	// 	 relationshippage.clickOnTab('PURSUANT');
	
	// 	 relationshippage.sendValueToPursuant(loadedData.CodeField,loadedData.pursuant_code);
	// 	 relationshippage.sendValueToPursuant(loadedData.YearField,loadedData.pursuant_year);
	// 	 relationshippage.sendValueToPursuant(loadedData.NumberField,loadedData.pursuant_number);
	   
 
	// 	 //Click Add & verify the unit created
		   
	//  relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);
 
	//  // verify if Relationship added to collector or not
	//   expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
		



	});

});




