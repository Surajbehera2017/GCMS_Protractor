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
		
		legisDocDisplayPage.get(loadedData.document_rotation.annotation.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * 01 - Relationships -Documents rotation - Annotations
	 */
	it('Relationships -Documents rotation - Annotations', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();
		
		//Select type
		relationshippage.clickTypeFieldRelationshipPopup();
		browser.waitForAngular();
		relationshippage.sendKeystoTypeinRelationshipTab(loadedData.document_rotation.annotation.type);
		relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
		
		//Enter mandatory fields in target
		relationshippage.clickCodeDropdownTarget();
		browser.waitForAngular();
		relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.document_rotation.annotation.target_code);
		relationshippage.clickSearchBtnPartTextFieldTarget(); 
		relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.document_rotation.annotation.target_year);
		relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.document_rotation.annotation.target_number);
		
		var unit = loadedData.document_rotation.annotation.unit_to_add;
		//Click structure image in source & select given unit from structure popup
		relationshippage.clickStructureSourceImage();
		var unit = loadedData.document_rotation.annotation.unit_to_add;
		relationshippage.selectUnitByNameInStructurePopupInRelationship(unit);
		relationshippage.clickSaveStructurePopupInRelationship();
		//Select date - Original
		relationshippage.clickSourceDateArrowInRelationship();
		relationshippage.clickFirstValueInDateDropdown();

		//Click + button in source & select first unit from structure popup
		relationshippage.clickAddUnitPlusImageInSource();
		relationshippage.selectUnitByPositionInParagraphIdPopup(0);
		relationshippage.clickSaveParagraphIdPopupInRelationship();
		browser.waitForAngular();
		
		//Click rotation icon
		relationshippage.clickSwitchDirectionImage();
		
		//Click Add & verify the unit created
		relationshippage.clickAddButtonEditRelationshipPopUp();
		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);//No error displayed
		relationshippage.closeConfirmationDisplayedInRelationshipPopup();
		relationshippage.clickCloseButtonEditRelationshipPopup();
		browser.waitForAngular();
		
		//Go to relationship table and delete the added relationship
		legisDocDisplayPage.get(loadedData.document_rotation.annotation.marginal_id);
		relationshippage.urlLoad();
		relationshippage.expandRelationshipTable();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
		//Filter by expected values
		var targetDoc = loadedData.document_rotation.annotation.target_code+'\\'+loadedData.document_rotation.annotation.target_year+'\\'+loadedData.document_rotation.annotation.target_number;
	    relationshippage.clickShowRelationshipfilter();
	    relationshippage.enterSourceDocDate1(targetDoc); //target moved to source after rotation
	    relationshippage.enterRelationshipTypeFilter(loadedData.document_rotation.annotation.type);
	    relationshippage.selectConsildatedFilterNo();
	    relationshippage.enterTargetMarginalIdAndPressEnter(loadedData.document_rotation.annotation.document_name);//source moved to target after rotation
	    relationshippage.enterTargetUnitField(unit);
	    expect(relationshippage.isChecKBoxPresent()).toEqual(true); //verify Relationship is created earlier
	    //delete the filtered relation (added in this test)
	    relationshippage.clickCheckboxAtPosition(0);
	    relationshippage.clickDeleteRelationShip();
	    relationshippage.clickOnYesButton();
	    browser.waitForAngular();
	    
	});

});




