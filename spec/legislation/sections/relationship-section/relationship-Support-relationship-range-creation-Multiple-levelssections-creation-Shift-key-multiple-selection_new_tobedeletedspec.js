var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.relationShip;
var legisDocDisplayPage = new LegislationDocumentDisplayPage();

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		
		legisDocDisplayPage.get(loadedData.addmultiple_paragraph.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * TC08 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation -  Shift key multiple selection
	 */
	it('Multiple levels-sections - Relationship creation -  Shift key multiple selection', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
        browser.waitForAngular();
        
        //Click structure image in source
		relationshippage.clickStructureSourceImage();
		
		//Select unit from structure image
		var unit = loadedData.addmultiple_paragraph.unit_many_paragraph_id;
		relationshippage.selectUnitByNameInStructurePopupInRelationship(unit);
		relationshippage.clickSaveStructurePopupInRelationship();
		expect(relationshippage.isHeaderDisplayedInDocStructurePopUp()).toEqual(false);
		
        //Click on + button next to anchor image & select multiple paragraph ids
        //Keep Level & Inciso fields empty
		relationshippage.clickAddUnitPlusImageInSource();
        
        //Select first 5 paragraph id,Keep Level & Inciso fields empty
        //Select range using shift key
		relationshippage.selectRangeOfUnitByPositionUsingShiftKeyInParagraphIdPopup(1,5);
		browser.waitForAngular();
		
		//Save popup
		relationshippage.clickSaveParagraphIdPopupInRelationship();
		browser.waitForAngular();
		expect(relationshippage.isNumberOfUnitSelectedEquals(5)).toEqual(true);
        browser.waitForAngular();
	});

});
