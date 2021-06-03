var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2416';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Thesaurus', function () {//('Thesaurus-section delete the last entry', function () {

	beforeEach(function () {


		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_idthes_1);
		thesauruspage.urlLoad(params.valid_username, params.valid_password);

	});
	afterEach(function () {
		browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[0]);
			for (var i = 1; i < handles.length; i++) {
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				}, function (error) {
					browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});

	//08 - Delete the last entry of a Thesaurus Type
	it('should delete last record from thesaurus table.'+jiraNumber, function () {
		global.clickOnSectionButton('Thesaurus', 'viewall');
		expect(global.isTablePresent()).toEqual(true);
		
		//filter perticular unit
		thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
		thesauruspage.enterUnitId(loadedData.unit);

		//click on delete button in actions
		thesauruspage.thesaurusAction('delete');
		expect(global.isTablePresent()).toEqual(true);

		global.clickOnNavigationOrCloseButton('cancel');
		global.clickOnNavigationOrCloseButton('close');
		
	});
});