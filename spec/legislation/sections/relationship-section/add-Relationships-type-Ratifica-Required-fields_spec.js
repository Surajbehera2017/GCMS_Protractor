var params = browser.params;
var jiraNumber = 'GCMSQABANG-2181';
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

	});

	/*
	 * TC07 - Relationships - Add Relationships - Aceptaciones - Ratifica - Required fields
	 */
	it('Relationships - Add Relationships - Aceptaciones - Ratifica - Required fields.' + jiraNumber, function () {

		// click on add button on relationship section 
		globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.AddButton);


		//Verify type as Ratifica 
		relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type);


		//Verify the border color is red for mandatory fields.
		var codeBorderColor = relationshippage.getBorderColorOfCodeInputField();
		var yearBorderColor = relationshippage.getBorderColorOfYearInputField();
		var nBorderColor = relationshippage.getBorderColorOfNInputField();
		expect(codeBorderColor).toEqual(loadedData.redColor);
		expect(yearBorderColor).toEqual(loadedData.redColor);
		expect(nBorderColor).toEqual(loadedData.redColor);

		// verify new section is disabled.
		expect(relationshippage.isTabEnabled(loadedData.New_Section)).toEqual(false);

	});

});




