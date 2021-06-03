var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var productworkbench = require('../../../../po/document/display/legis/sections/product-workbench/product-workbench-new.po.js');
var LoginPage = require('../../../../po/login.po.js');

describe('Product Workbench', function () {

	beforeEach(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(testData.legislation.sections.productworkbench.marginal_id);
    productworkbench.urlLoad(params.valid_username,params.valid_password);
       
   });

	xit('should expand the Product workbench section', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

	productworkbench.expandSection();
	expect(productworkbench.isExpanded()).toEqual(true);
	});

	xit('should not have any content', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        expect(section.isVisible).not.toContain(true);
	});

	xit('should have an no results message', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		//expect(productworkbench.errorMessage()).toEqual(I18n.productWorkbench.no_results);
	});

});
