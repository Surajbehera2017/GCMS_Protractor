var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-1883';
var jiraNumber2 = 'GCMSQABANG-2237';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var LoadedData = testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(LoadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);

	});


	/*
	 * 01- Copy the relationship
	 */
	it('Copy the relationship.'+jiraNumber1+'.'+jiraNumber2, function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();
		
		//Select type
		relationshippage.clickTypeFieldRelationshipPopup();
		relationshippage.sendKeystoTypeinRelationshipTab(LoadedData.modifica_type);
		relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
		//Enter mandatory fields in target
		relationshippage.clickCodeDropdownTarget();
		relationshippage.sendKeystoCodeinRelationshipPopupTarget(LoadedData.target_code);
		relationshippage.clickSearchBtnPartTextFieldTarget(); 
		relationshippage.sendKeysinYearFieldRelationshipPopupTarget(LoadedData.target_year);
		relationshippage.sendKeystoNumberinRelationshipPopupTarget(LoadedData.target_number);
        //Select unit in target
        relationshippage.clickStructureTargetImage();
        relationshippage.selectUnitByNameInStructurePopupInRelationship(LoadedData.target_unit_to_add);
        relationshippage.clickSaveStructurePopupInRelationship();
        //Click Add
        relationshippage.clickAddButtonEditRelationshipPopUp();
        relationshippage.closeConfirmationDisplayedInRelationshipPopup();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular();
        
		//Go to relationship table and copy the added relationship
		legisDocDisplayPage.get(LoadedData.marginal_id);
		relationshippage.urlLoad();
		relationshippage.expandRelationshipTable();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
		//Filter by expected values
		relationshippage.clickShowRelationshipfilter();
	    relationshippage.enterSourceDocDate1(LoadedData.document_name);
	    relationshippage.enterRelationshipTypeFilter(LoadedData.modifica_type);
        relationshippage.selectConsildatedFilterNo();
        var targetDoc = LoadedData.target_code+'\\'+LoadedData.target_year+'\\'+LoadedData.target_number;
        relationshippage.enterTargetMarginalIdAndPressEnter(targetDoc);
        relationshippage.enterunitlevelOfTarget(LoadedData.target_unit_to_add);
        expect(relationshippage.isChecKBoxPresent()).toEqual(true); //Relationship is created
        
        //Copy the newly created relationship
        relationshippage.clickOn1stArrowButton();
        relationshippage.clickCopyfirstrelationship();
        browser.waitForAngular();
        //Make some changes & save (edit type)
        relationshippage.clickTypeFieldRelationshipPopup();
		relationshippage.sendKeystoTypeinRelationshipTab(LoadedData.vease_type);
		relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        //Click Add & verify the unit saved
        relationshippage.clickAddButtonEditRelationshipPopUp();
        expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);//No error displayed
        relationshippage.closeConfirmationDisplayedInRelationshipPopup();
        expect(relationshippage.isItemPresentInCollectorContainer()).toEqual(true);
        
        //Delete the Unit
        relationshippage.clickDeleteImageInCollectorContainerRow(0);
        relationshippage.clickOnYesButton();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular();

        //Go to relationship table and delete the added relationship
		legisDocDisplayPage.get(LoadedData.marginal_id);
		relationshippage.urlLoad();
		relationshippage.expandRelationshipTable();
		relationshippage.clearFiltersInRelationshipTable();
		browser.waitForAngular();
		//Filter by expected values
		relationshippage.clickShowRelationshipfilter();
	    relationshippage.enterSourceDocDate1(LoadedData.document_name);
	    relationshippage.enterRelationshipTypeFilter(LoadedData.modifica_type);
        relationshippage.selectConsildatedFilterNo();
        relationshippage.enterTargetMarginalIdAndPressEnter(targetDoc);
        relationshippage.enterunitlevelOfTarget(LoadedData.target_unit_to_add);
        //delete the filtered relation (added in this test)
	    relationshippage.clickCheckboxAtPosition(0);
	    relationshippage.clickDeleteRelationShip();
	    relationshippage.clickOnYesButton();
		browser.waitForAngular();
		globalpage.clickOnNavigationOrCloseButton('close');
	});

});




