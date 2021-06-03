var params = browser.params;
var jiraNumber = 'GCMSQABANG-2266';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);
		browser.driver.manage().window().maximize();

	});

	/*
	 * TC07 - Create a non consolidated relationship and edit in the result table of consolidation
	 */
	it('Create a non consolidated relationship and edit in the result table of consolidation.' + jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.AddButton);


		//select  type  as Modifica
		relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type);

		//Enter mandatory fields in target (Enter  margin)
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.CodeField, loadedData.code);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.YearField, loadedData.year);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.NumberField, loadedData.number);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.UnitField, loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.PartField, '1');

		//Click Add 
		relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);
		// verify if Relationship created or not
		expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);


		// close add rel popup 
		// browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

		relationshippage.closeAddorEditRelationshipPopup();
		// edit the newly created non-consolidated relationship
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

		globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
		browser.waitForAngular();
		relationshippage.filterbyRelType(loadedData.relation_type);
		browser.waitForAngular();
		globalpage.selectNoOfRows('1');
		relationshippage.clickonEditButtonInRelTable();
		browser.waitForAngular();


		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.UnitField, loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.PartField, loadedData.PartValue);



		//save changes
		relationshippage.clickOnRelPopUpButtons('Save');

		// verify if Relationship added to collector or not after changes
		expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
		browser.sleep(3000);

		//delete this relationship and close relationship table
		relationshippage.deleteEditrelationshipInpopup('delete');
		browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

		globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);

	});

});




