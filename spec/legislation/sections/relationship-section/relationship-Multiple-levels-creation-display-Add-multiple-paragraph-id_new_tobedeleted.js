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
	 * TC01 - Multiple levels creation display - Add multiple paragraph id
	 */
	it('Multiple levels creation display - Add multiple paragraph id', function () {

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
		relationshippage.getNumberOfUnitInParagraphIdPopup().then(function(count){
			console.log('count is '+count);
			relationshippage.selectUnitByPositionInParagraphIdPopup(0);
			relationshippage.clickSaveParagraphIdPopupInRelationship();
			//verify 1 unit selected from paragraph unit popup
			expect(relationshippage.isNumberOfUnitSelectedEquals(1)).toEqual(true);
			//Add more units
			for(var row=1;row<10;row++){
				var limitReached = false;
				relationshippage.clickAddUnitPlusImageInSource();
				relationshippage.selectUnitByPositionInParagraphIdPopup(row);
				relationshippage.clickSaveParagraphIdPopupInRelationship();
				relationshippage.isCountOfUnitSelectedDisplayed().then(function(displayed){
					if(displayed === true){
						//Verify no more units are displayed. only count is displayed
						expect(relationshippage.isNumberOfUnitSelectedEquals(1)).toEqual(false);
					}
				});
			}
		});

	});

});




