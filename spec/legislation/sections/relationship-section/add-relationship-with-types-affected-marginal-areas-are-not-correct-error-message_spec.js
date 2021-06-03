var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.relationShip;
var legisDocDisplayPage = new LegislationDocumentDisplayPage();

describe('Relationship', function () {

	beforeEach(function () {//This is required before each test

		browser.ignoreSynchronization = false;
		
		legisDocDisplayPage.get(loadedData.creation_by_type.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * 13 - Add relationship Declara inválido - Requiered fields
	 */
	it('Add relationship Declara inválido - Requiered fields GCMSQABANG-2170', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();
        
        //Verify type is mandatory field
        var typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)

		//Select type 'Declara inválido'
		relationshippage.clickTypeFieldRelationshipPopup();
		relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.declare_invalid_type);
		relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
		
		//Verify the border color is red for mandatory fields.
		var codeBorderColor = 
			relationshippage.getBorderColorOfCodeInputField();
		var yearBorderColor =
			relationshippage.getBorderColorOfYearInputField();
		var nBorderColor =
			relationshippage.getBorderColorOfNInputField();
		expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
		expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
		expect(nBorderColor).toEqual('rgb(255, 0, 0)');
		
		//Enter mandatory fields in target & Verify red border is removed
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number);
        
        //Verify the border color red is removed
		codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(codeBorderColor).not.toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(typeBorderColor).not.toEqual('rgb(255, 0, 0)');

        //Verify new section tab is disabled
        expect(relationshippage.isNewSectionDisabledInTarget()).toEqual(true);
        browser.waitForAngular();

        //Click Add button & verify error message
        var expectedError = I18n.relationshipsection.affected_marginal_error;
		relationshippage.clickAddButtonEditRelationshipPopUp();
		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//Expect error displayed
		relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
		var actualError = relationshippage.getMessageFromInfoDialogueBox();
		expect(actualError).toEqual(expectedError);
        relationshippage.clickOkpopup();
        browser.waitForAngular();
        relationshippage.clickCloseButtonEditRelationshipPopup();
	    browser.waitForAngular();
	});

	/*
	 * 14 - Add relationship Declara inválido en lo referente - Requiered fields
	 */
	it('Add relationship Declara inválido en lo referente - Requiered fields GCMSQABANG-2171', function () {
        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        relationshippage.clickAddRelationship();
        browser.waitForAngular();
        
        //Verify type is mandatory field
        var typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)

        //Select type 'Declara inválido en lo referente '
        relationshippage.clickTypeFieldRelationshipPopup();
        relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.declare_invalid_reference_type);
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        
        //Verify the border color is red for mandatory fields.
        var codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        var yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        var nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).toEqual('rgb(255, 0, 0)');
        
        //Enter mandatory fields in target & Verify red border is removed
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number);
        
        //Verify the border color red is removed
        codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(codeBorderColor).not.toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(typeBorderColor).not.toEqual('rgb(255, 0, 0)');

        //Verify new section tab is disabled
        expect(relationshippage.isNewSectionDisabledInTarget()).toEqual(true);
        browser.waitForAngular();

        //Click Add button & verify error message
        var expectedError = I18n.relationshipsection.affected_marginal_error;
        relationshippage.clickAddButtonEditRelationshipPopUp();
        expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//Expect error displayed
        relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
        var actualError = relationshippage.getMessageFromInfoDialogueBox();
        expect(actualError).toEqual(expectedError);
        relationshippage.clickOkpopup();
        browser.waitForAngular();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular();
    });

    /*
	 * 15 - Add relationship Declara titularidad de competencias - Requiered fields
     * Note: Relationship is getting created for this tests. Hence it is failing.
	 */
	it('Add relationship Declara titularidad de competencias - Requiered fields GCMSQABANG-2172', function () {
        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        relationshippage.clickAddRelationship();
        browser.waitForAngular();
        
        //Verify type is mandatory field
        var typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)

        //Select type 'Declara titularidad de competencias'
        relationshippage.clickTypeFieldRelationshipPopup();
        relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.declare_ownership_competencies_type);
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        
        //Verify the border color is red for mandatory fields.
        var codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        var yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        var nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).toEqual('rgb(255, 0, 0)');
        
        //Enter mandatory fields in target & Verify red border is removed
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number);
        
        //Verify the border color red is removed
        codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(codeBorderColor).not.toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(typeBorderColor).not.toEqual('rgb(255, 0, 0)');

        //Verify new section tab is disabled
        expect(relationshippage.isNewSectionDisabledInTarget()).toEqual(true);
        browser.waitForAngular();

        //Click Add button & verify error message
        var expectedError = I18n.relationshipsection.affected_marginal_error;
        relationshippage.clickAddButtonEditRelationshipPopUp();
        expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//Expect error displayed
        relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
        var actualError = relationshippage.getMessageFromInfoDialogueBox();
        expect(actualError).toEqual(expectedError);
        relationshippage.clickOkpopup();
        browser.waitForAngular();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular();
    });

    /*
	 * 17 - Add relationship Doctrina legal- Requiered fields
	 */
	it('Add relationship Doctrina legal - Requiered fields GCMSQABANG-2174', function () {
        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        relationshippage.clickAddRelationship();
        browser.waitForAngular();
        
        //Verify type is mandatory field
        var typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)

        //Select type 'Doctrina legal'
        relationshippage.clickTypeFieldRelationshipPopup();
        relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.doctrina_legal_type);
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        
        //Verify the border color is red for mandatory fields.
        var codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        var yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        var nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).toEqual('rgb(255, 0, 0)');
        
        //Enter mandatory fields in target & Verify red border is removed
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number);
        
        //Verify the border color red is removed
        codeBorderColor = 
            relationshippage.getBorderColorOfCodeInputField();
        yearBorderColor =
            relationshippage.getBorderColorOfYearInputField();
        nBorderColor =
            relationshippage.getBorderColorOfNInputField();
        typeBorderColor =
            relationshippage.getBorderColorOfTypeInputField();
        expect(codeBorderColor).not.toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
        expect(yearBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(nBorderColor).not.toEqual('rgb(255, 0, 0)');
        expect(typeBorderColor).not.toEqual('rgb(255, 0, 0)');

        //Verify new section tab is disabled
        expect(relationshippage.isNewSectionDisabledInTarget()).toEqual(true);
        browser.waitForAngular();

        //Click Add button & verify error message
        var expectedError = I18n.relationshipsection.affected_marginal_error;
        relationshippage.clickAddButtonEditRelationshipPopUp();
        expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//Expect error displayed
        relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
        var actualError = relationshippage.getMessageFromInfoDialogueBox();
        expect(actualError).toEqual(expectedError);
        relationshippage.clickOkpopup();
        browser.waitForAngular();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular();
    });

});




