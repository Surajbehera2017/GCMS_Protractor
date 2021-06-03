var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

describe('Fix section', function () {
      beforeEach(function () {
       browser.ignoreSynchronization = false;        
	   LegislationDocumentDisplayPage.get(testData.legislation.sections.fix_section_and_general.marginal_id);
       browser.waitForAngular();
	   LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
       browser.sleep(5000);
       browser.waitForAngular();
    });

	

	it('should delete the document', function () {
      
		expect(LegislationDocumentDisplayPage.marginal()).toEqual(testData.legislation.sections.fix_section_and_general.document_no);
		LegislationDocumentDisplayPage.clickDeleteButton();
		expect(LegislationDocumentDisplayPage.hasDeleteModal()).toBe(true);
		LegislationDocumentDisplayPage.clickConfirmDeleteButton();
		expect(LegislationDocumentDisplayPage.hasDeleteModal()).toBe(false);
				// Document takes some time load, so wait until it's done.
				return browser.driver.wait(function () {
					return browser.driver.getCurrentUrl().then(function (url) {
						return /index/.test(url);
					});
				},30000);
				expect(LegislationDocumentDisplayPage.hasDeleteModal()).toBe(false);

		
	});


});
