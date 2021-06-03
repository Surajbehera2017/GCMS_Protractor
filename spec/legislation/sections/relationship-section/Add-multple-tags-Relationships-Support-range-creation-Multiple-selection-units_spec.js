var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2229';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {

		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		relationshippage.urlLoad(params.valid_username, params.valid_password);
		browser.driver.manage().window().maximize();

	});


	/*
	 * TC03 Relationships - Support relationship range creation - Multiple selection of units - Add multple tags
	 */
	it('Relationships - Support relationship range creation - Multiple selection of units - Add multple tags.' + jiraNumber, function () {

		//click on add relationship button and then click on source structure	
		globalpage.clickOnSectionButton('Relationships','Add');
		browser.sleep(1000);
		relationshippage.clickOnIcon('Source','openStructure');
		// verify if source structure is opened or not
		expect(relationshippage.isModalPresent('Document Structure')).toEqual(true);
		// select multiple checkbox abd save
		relationshippage.clickMultipleCheckBoxDocumentStructure();
		globalpage.clickOnButtonForGlobal('Ok');
		// verify if selected checkbox values are displayed or not
		expect(relationshippage.isMultipleTagsPresent()).toBe(true);


	});

});




