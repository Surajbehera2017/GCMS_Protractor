var params = browser.params;
var jiraNumber = 'GCMSQABANG-2165';
var jiraNumber1 = 'GCMSQABANG-3765';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);
		browser.driver.manage().window().maximize();
	});
	afterAll(function () {

		relationshippage.clickOnIcon('collector', 'deleteRela');


	});

	/*
	 * 08 - Add relationship Declara carácter basico - Requiered fields
	 */
	it('Add relationship Declara carácter básico - Requiered fields.' + jiraNumber, function () {
		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.AddButton);


		//Verify type is mandatory field
		var typeBorderColor = relationshippage.getBorderColorOfTypeInputField();
		expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)


		//Verify the border color is red for mandatory fields.
		var codeBorderColor = relationshippage.getBorderColorOfCodeInputField();
		var yearBorderColor = relationshippage.getBorderColorOfYearInputField();
		var nBorderColor = relationshippage.getBorderColorOfNInputField();
		expect(codeBorderColor).toEqual(loadedData.redColor);
		expect(yearBorderColor).toEqual(loadedData.redColor);
		expect(nBorderColor).toEqual(loadedData.redColor);

		//Enter mandatory fields 

		relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.CodeField, loadedData.code);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.YearField, loadedData.year);
		relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.NumberField, loadedData.number);

		//Verify the border color red is removed
		codeBorderColor = relationshippage.getBorderColorOfCodeInputField();
		yearBorderColor = relationshippage.getBorderColorOfYearInputField();
		nBorderColor = relationshippage.getBorderColorOfNInputField();
		typeBorderColor = relationshippage.getBorderColorOfTypeInputField();
		expect(codeBorderColor).not.toEqual(loadedData.redColor);
		expect(yearBorderColor).not.toEqual(loadedData.redColor);
		expect(nBorderColor).not.toEqual(loadedData.redColor);
		expect(typeBorderColor).not.toEqual(loadedData.redColor);
	});

	/*
	 * 07 - Add relationship Declara carácter basico - Dayes
	 */
	it('Add relationship Declara carácter básico - Dayes.' + jiraNumber1, function () {
		//This test depends on previous test. 
		//Relationship add window should be open with type Declara carácter básico & mandatory fields filled

		//select unit in Source with date
		relationshippage.sendValueTo(loadedData.SourcePanel, loadedData.UnitField, loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.SourcePanel, loadedData.PartField, loadedData.PartValue);
		relationshippage.sendValueTo(loadedData.SourcePanel, loadedData.DateField, loadedData.DateValue);


		//Click Add button 
		globalpage.clickOnButtonForGlobal(loadedData.AddButton);
		relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

		//Click Add & verify the unit created
		expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);//No error displayed




	});
});




