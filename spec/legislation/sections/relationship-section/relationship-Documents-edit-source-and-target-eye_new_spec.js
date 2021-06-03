var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.relationShip;
var legisDocDisplayPage = new LegislationDocumentDisplayPage();

describe('Relationship', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		
		legisDocDisplayPage.get(loadedData.document_rotation.juris_marginal.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * 04 - Relationship - edit -  Target
	 */
	it('Relationships - edit - Target - Eye view GCMSQABANG-2279', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.expandRelationshipTable();
		browser.waitForAngular();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
        
         //Edit first relationship
         relationshippage.clickOn1stArrowButton();
         relationshippage.clickEditfirstrelationship();
         browser.waitForAngular();

		//Enter mandatory fields in target
		relationshippage.clickCodeDropdownTarget();
		browser.waitForAngular();
		relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_code);
		relationshippage.clickSearchBtnPartTextFieldTarget(); 
		relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_year);
		relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_number);
        
        //Verify target eye icon is visible
		expect(relationshippage.isTargetDocumentEyeIconDisplayed()).toEqual(true);
        //Click target eye icon & verify details summary not available
        relationshippage.clickTargetDocumentEyeIcon();
        browser.waitForAngular();
        expect(relationshippage.isSummaryDisplayedInViewEyePopUp()).toEqual(true);
        browser.waitForAngular();
		relationshippage.eyeIconDisplayClose();
		browser.waitForAngular();
	});


	/*
	 * 05 - Relationship - edit -  Source
	 */
	it(' Relationships - edit - Source - Eye view - disabled GCMSQABANG-2280', function () {
		
		browser.waitForAngular();
		/*
		//This part can be skipped if run depends on previous tests. Hence commented.
		browser.driver.manage().window().maximize();
		relationshippage.expandRelationshipTable();
		browser.waitForAngular();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
		//Edit first relationship
		relationshippage.clickOn1stArrowButton();
		relationshippage.clickEditfirstrelationship();
		browser.waitForAngular();

		//Enter mandatory fields in target
		relationshippage.clickCodeDropdownTarget();
		browser.waitForAngular();
		relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_code);
		relationshippage.clickSearchBtnPartTextFieldTarget(); 
		relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_year);
		relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.document_rotation.juris_marginal.target_number);
		browser.waitForAngular();
		*/

		//Verify switch image & target eye disabled & source eye icon is visible
		expect(relationshippage.isSourceDocumentEyeIconDisplayed()).toEqual(false);
		expect(relationshippage.isSwitchDirectionImageDisplayed()).toEqual(false);
		expect(relationshippage.isTargetDocumentEyeIconDisplayed()).toEqual(true);
		
	});

});




