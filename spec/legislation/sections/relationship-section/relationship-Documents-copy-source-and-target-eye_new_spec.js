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
	 * 07 - Relationship - copy -  Target
	 */
	it('Relationships - copy - Target - Eye view GCMSQABANG-2282', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.expandRelationshipTable();
		browser.waitForAngular();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
		
        //copy first relationship
        relationshippage.clickOn1stArrowButton();
        relationshippage.clickCopyfirstrelationship();
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
	 * 06 - Relationship - Copy -  Source
	 */
	it(' Relationships - Copy - Source - Eye view GCMSQABANG-2281', function () {
		
		browser.waitForAngular();
        //This tests depends on previous test
        
        //Click switch & Verify source eye icon is visible
        relationshippage.clickSwitchDirectionImage();
        relationshippage.isSwitchDirectionConfirmationDisplayed().then(function(displayed){
            relationshippage.acceptSwitchDirectionConfirmation();
        });
		expect(relationshippage.isSourceDocumentEyeIconDisplayed()).toEqual(true);
        //Click target eye icon & verify details summary not available
        relationshippage.clickSourceDocumentEyeIcon();
        browser.waitForAngular();
        expect(relationshippage.isSummaryDisplayedInViewEyePopUp()).toEqual(true);
        browser.waitForAngular();
		relationshippage.eyeIconDisplayClose();
		browser.waitForAngular();
		
	});

});




