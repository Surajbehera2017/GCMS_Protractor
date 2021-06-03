var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.relationShip;

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.addmultiple_paragraph.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * TC02 - Multiple levels creation display - Link appears
	 */
	it('Multiple levels creation display - Link appears', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();

		//Click structure image in source
		relationshippage.clickStructureSourceImage();

		//Verify select given unit from structure popup
		var unit = loadedData.addmultiple_paragraph.unit_to_add;
		relationshippage.selectUnitByNameInStructurePopupInRelationship(unit);
		relationshippage.clickSaveStructurePopupInRelationship();
		//Select date - Original
		relationshippage.clickSourceDateArrowInRelationship();
		relationshippage.clickFirstValueInDateDropdown();

		//Keep adding paragraph, until the allocated space is filled.
		relationshippage.clickAddUnitPlusImageInSource();
		
		//Add 10 units until the display of link
		for(var row=0;row<10;row++){//Selects 10 units
			relationshippage.selectUnitByPositionInParagraphIdPopup(row);
		}
		
		//Save and verify count of units is displayed as a link
		relationshippage.clickSaveParagraphIdPopupInRelationship();
		expect(relationshippage.isCountOfUnitSelectedDisplayed()).toEqual(true);

	});

});




