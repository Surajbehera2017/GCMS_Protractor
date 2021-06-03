var params = browser.params;
var jiraNumber = 'GCMSQABANG-2191';


var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
	beforeAll(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});

	/*
	 * 05 - Relationships -Documents rotation - Saved Relationship
	 */
	// 	xit('Relationships -Documents rotation - Saved Relationship', function () {

	// 		browser.waitForAngular();
	// 		browser.driver.manage().window().maximize();
	// 		relationshippage.expandRelationshipTable();
	// 		browser.waitForAngular();
	// 		relationshippage.clearFiltersInRelationshipTable();
	// 		browser.waitForAngular();

	// 		//Select check box & click edit button
	// 		relationshippage.clickCheckboxAtPosition(0);
	// 		relationshippage.clickedit();
	// 		browser.waitForAngular();
	// 		expect(relationshippage.isAddOrEditRelationshipPopUpIsDisplayed()).toEqual(true);

	// 		//Verify rotation icon not displayed for saved relationships.
	// 		expect(relationshippage.isSwitchDirectionImageDispplayed()).toEqual(false);

	// 	});

	// });
	it(' Relationships -Documents rotation - Rotation enabled.' + jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.AddButton);


		//Verify type 
		relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type);

		//Enter mandatory fields in target
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.CodeField, loadedData.code);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.YearField, loadedData.year);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.NumberField, loadedData.number);

		//add unit   to target
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.UnitField, loadedData.unit);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.PartField, loadedData.part);

		//clicking the add button
		relationshippage.clickOnRelPopUpButtons('Add');

		//click on pencil button
		globalpage.clickOnElement(loadedData.pencilbutton);
		browser.sleep(3000);

		// //checking rotation icon present or not

		var elementpresent1 = globalpage.isElementDisplayed(loadedData.rotaion);
		expect(elementpresent1).toEqual(false);
		authorNotes.clickOnButtonForGlobal('Cancel');
		browser.sleep(4000);

		relationshippage.clickOnIcon('collector', 'deleteRela');

		browser.sleep(4000);
		// // add note to target
		// relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.noteField,loadedData.data);


		// 	//Click rotation icon & verify error message

		// relationshippage.clickOnIcon(loadedData.section ,loadedData.rotationIcon);



		// 	expect(relationshippage.getAlertMessage()).toEqual(loadedData.error_msg);


	});

});



