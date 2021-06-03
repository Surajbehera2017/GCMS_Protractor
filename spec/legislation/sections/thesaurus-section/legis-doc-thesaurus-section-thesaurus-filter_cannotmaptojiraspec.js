var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
//test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');



describe('Thesaurus', function () {//('should verify the functionality of thesaurus filters ', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		new LegislationDocumentDisplayPage().get(testData.legislation.sections.thesaurus_section.marginal_id);


		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {

			if (result) {
				element(by.model('credentials.username')).sendKeys(params.valid_username);
				element(by.model('credentials.password')).sendKeys(params.valid_password);

				element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
				browser.waitForAngular();
			}
		});
		// if result closing


	}); // beforeAll closing


	//02 Filter Thesaurus-

	it('should show the Thesaurus term value in  the table while entering an existing Thesaurus thesauruspage', function () {


		if (testData.legislation.sections.thesaurus_section.section_links.length > 1) {
			thesauruspage.clickViewAllLink();
			browser.waitForAngular();
			thesauruspage.ClickShowFilters();
			thesauruspage.EnterValueinThesaurustermFeild(testData.legislation.sections.thesaurus_section.thesaurus_search_term);
			expect(thesauruspage.HasCheckBox()).toEqual(true);
			thesauruspage.clickImportCancelButton();


		} // end of if block

	}); // end of it block


	//01 Filter Thesaurus-Internationalization

	xit('should not show the Thesaurus term value in  the table while entering a non existing Thesaurus thesauruspage', function () {
		// var thesauruspage = new
		// LegislationDocumentDisplayPage().sections.thesaurussection;
		if (testData.legislation.sections.thesaurus_section.section_links.length > 1) {
			thesauruspage.clickViewAllLink();
			browser.waitForAngular();
			thesauruspage.ClickShowFilters();
			thesauruspage.EnterValueinThesaurustermFeild('Ayuntamiento vde Alicante');
			expect(thesauruspage.HasCheckBox()).toEqual(false);


		} // end of if block
	}); // end of it block

});
