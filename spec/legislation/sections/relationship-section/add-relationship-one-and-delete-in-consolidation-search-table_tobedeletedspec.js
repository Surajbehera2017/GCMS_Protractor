var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var relationshipsearchpage = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../po/relationshipsearch.po.js');
var loadedData = testData.legislation.sections.relationShip;

describe('Relationship', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.creation_by_type.marginal_id_rcl);
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 * TC02 - Create a non consolidated relationship and delete in the result table of consolidation using the delete feature for handling many relationships
	 */
	it('Create one non consolidated relationships and delete in the result table of consolidation', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();
        
        //Select type 'Modifica'
		relationshippage.clickTypeFieldRelationshipPopup();
		relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.modifica_type);
		relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
		
		///Add one relationship 
		//Enter mandatory fields in target
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code_rcl);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year_rcl);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number_rcl);
		//Select Unit
		relationshippage.clickStructureTargetImage();
		relationshippage.selectUnitByNameInStructurePopupInRelationship(loadedData.creation_by_type.target_unit_rcl_1);
		relationshippage.clickSaveStructurePopupInRelationship();
		//Click Add & verify the relationship created
		relationshippage.clickAddButtonEditRelationshipPopUp();
		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);//No error displayed
		relationshippage.closeConfirmationDisplayedInRelationshipPopup();
		
		//Goto relationship search, and verify the relations are displayed
		relationshipsearchpage.get();
		relationshipsearchpage.urlLoad(params.valid_username,params.valid_password);
		relationshipsearchpage.clickClearAllButton();
		relationshipsearchpage.sendKeysMarginalField(loadedData.creation_by_type.target_code_rcl);
		relationshipsearchpage.sendYear(loadedData.creation_by_type.target_year_rcl);
		relationshipsearchpage.sendNumber(loadedData.creation_by_type.target_number_rcl);
		relationshipsearchpage.openRelationshipStartDatePicker();
		browser.waitForAngular();
		relationshipsearchpage.clickTodaysDateFromRelationshipStartDateCalendar();
		browser.waitForAngular();
		relationshipsearchpage.clickSearchButtonRelationship();
		expect(relationshipsearchpage.isItemPresentInTable(0)).toEqual(true);
		//Delete the relationship
		relationshipsearchpage.clickCheckboxByPosition(0);
		relationshipsearchpage.clickDeleteButtonInHeader();
		relationshipsearchpage.clickYesInConfirmationPopUp();
		browser.waitForAngular();

	});

});




