
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber = 'GCMSQABANG-2262';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

//rotationIcon:'Rotation',

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loaded.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});


	// TC01 - Show juris text on consolidation form
    //issue with the test data so do not run this test case
	it('Show source text on consolidation form.' + jiraNumber, function () {


		browser.waitForAngular();
		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);

		//select the relationship type
		relationshippage.clickandSelect(loaded.TypeField, loaded.relation_type);

		//enter the marginal in target section
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, loaded.code);
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.YearField, loaded.year);
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.NumberField, loaded.number);

		//click on document structure and add the unit
		relationshippage.clickUnitLinkInDocStructureIcon(loaded.TargetPanel,loaded.unit_name);


		//Verify current marginal id is displayed as disabled in source section
		expect(relationshippage.isCurrentMarginalIdDisabledInSource()).toEqual(true);

		//Click rotation icon & verify current marginal id is displayed as disabled in target section
		relationshippage.clickOnIcon(loaded.rel_section, loaded.rotate_icon);
		browser.waitForAngular();
		expect(relationshippage.isCurrentMarginalIdDisabledInTarget()).toEqual(true);
		browser.waitForAngular();

		//click on ok button in the popup
		globalpage.clickOnButtonForGlobal(loaded.ok_button);

		//Click Add 
		relationshippage.clickOnRelPopUpButtons(loaded.AddButton);

		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);
		browser.waitForAngular();

		//close add relationship window
		relationshippage.closeAddorEditRelationshipPopup();

		browser.actions().mouseMove(element(by.css('.block.font-19.ng-binding'))).perform();
		relationshippage.clickOnBackButton();
		browser.ignoreSynchronization = true;
		browser.sleep(2000);

		//click on legislation tab
		relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
		browser.sleep(1000);

		//click on consolidation tab
		relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation);
		browser.sleep(1000);

		//click on relationship pending consolidation inside consolidation
		relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation_option);
		browser.sleep(2000);

		var ispagepresent = relationshipsearch.isRelationshipSearchPagePresent();
		expect(ispagepresent).toEqual(true);
		browser.sleep(1000);

		//click on clear form button
		relationshipsearch.clickOnTheButton(loaded.clearform_button);
		browser.sleep(1000);

		//click on marginal dropdown
		relationshipsearch.clickOnDropdown(loaded.Section_name, loaded.field_name);
		browser.sleep(1000);

		//enter the marginal id 
		relationshipsearch.enterDataAndSelectValue(loaded.Section_name, loaded.field_name, loaded.code);
		browser.sleep(1000);
		relationshipsearch.fillTheYearAndNumFields('from', loaded.field_year, loaded.field_num, loaded.year, loaded.number);
		browser.sleep(1000);

		//enter the current date in textbox next to "date of load"
		var todaysdate = relationshipsearch.getcurrentDate();
		browser.sleep(1000);
		relationshipsearch.enterDate('first', loaded.last_section, loaded.field_name_3, todaysdate);
		browser.sleep(1000);

		//click on search button
		relationshipsearch.clickOnTheButton(loaded.search_button);
		browser.sleep(1000);

		var table_header = relationshipsearch.isTableHeaderPresent();
		expect(table_header).toEqual(true);
		browser.sleep(2000);
		var resultedtable = relationshipsearch.isResultListTablePresent();
		expect(resultedtable).toEqual(true);
		browser.sleep(1000);

		//click on consolidation icon of that row
		relationshipsearch.clickOnIconsInActions(loaded.consolidation_icon);
		browser.sleep(5000);

		//click on the cancel button to close the consolidation form
		globalpage.clickOnButtonForGlobal(loaded.cancel_button);
		browser.sleep(2000);

		//click on the checkbox of the row
		relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
		browser.sleep(1000);

		//click on delete button
		relationshipsearch.clickButtonsInsideTable(loaded.delete_button);
		browser.sleep(1000);
		globalpage.clickOnButtonForGlobal(loaded.yes_button);
		browser.sleep(2000);
		
		relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
		browser.sleep(1000);
		relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
		browser.sleep(1000);
		relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
		browser.sleep(1000);

	});

});




