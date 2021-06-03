
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber1 = 'GCMSQABANG-3808';
var jiraNumber2 = 'GCMSQABANG-3807';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loaded.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});


	//TC03 - Ensure chronological order - No newer versions of Relationships already consolidated - consolidated pointing to the same amended-added-unit and with a date-of-new version later than date-of-effect of current relationship
	//TC04 - Ensure chronological order - No newer versions of Relationships already consolidated - consolidated in two languages pointing to the same amended-unit and with a date-of-new version later than date-of-effect of current relationship

	it('Ensure chronological order - No newer versions of Relationships already consolidated - one.' + jiraNumber1 + '.' + jiraNumber2, function () {


		browser.waitForAngular();

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);

		//select the relationship type
		relationshippage.clickandSelect(loaded.TypeField, loaded.relation_type);

		//enter the marginal in target section
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, loaded.code);
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.YearField, loaded.year);
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.NumberField, loaded.number);

		//fill the unit and part fields
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.unitfield, loaded.unit_name);
		relationshippage.sendValueTo(loaded.TargetPanel, loaded.partfield, loaded.part_name);

		//click on ok button in the popup
		globalpage.clickOnButtonForGlobal(loaded.ok_button);

		//Click Add 
		relationshippage.clickOnRelPopUpButtons(loaded.AddButton);
		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);
		browser.sleep(2000);

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

		//select the current date next to "date of load"

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();
		browser.sleep(1000);
		relationshipsearch.clickonCalendarIcon(loaded.last_section, loaded.field_name_3);
		browser.sleep(1000);
		relationshipsearch.clickOnTheCurrentDay(loaded.last_section, loaded.field_name_3, dd);
		browser.sleep(1000);

		//click on search button
		relationshipsearch.clickOnTheButton(loaded.search_button);
		browser.sleep(15000);

		var table_header = relationshipsearch.isTableHeaderPresent();
		expect(table_header).toEqual(true);
		browser.sleep(2000);
		var resultedtable = relationshipsearch.isResultListTablePresent();
		expect(resultedtable).toEqual(true);
		browser.sleep(1000);

		
		//select the checkbox of the row
		relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
		browser.sleep(1000);

		//click on delete button
		relationshipsearch.clickButtonsInsideTable(loaded.delete_button);
		browser.sleep(1000);
		globalpage.clickOnButtonForGlobal(loaded.yes_button);
		browser.sleep(2000);

		relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
		browser.sleep(2000);
		relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
		browser.sleep(2000);
		relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
		browser.sleep(1000);

	});
});