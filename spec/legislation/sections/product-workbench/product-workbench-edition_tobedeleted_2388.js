var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var productworkbench = require('../../../../po/document/display/legis/sections/product-workbench/product-workbench-new.po.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');

describe('Product Workbench', function () {

	beforeEach(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocEditionPage = new LegislationDocumentEditionPage();
    legisDocEditionPage.get(testData.legislation.sections.productworkbench.marginal_id_noResult);
    productworkbench.urlLoad(params.valid_username,params.valid_password);
       
   });
	

	xit('should have an no results message', function () {
		var section = new LegislationDocumentEditionPage().sections.productWorkbench;
		browser.waitForAngular();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		//expect(productworkbenchEdition.hasErrorMessage()).toEqual(I18n.productWorkbench.no_results);
          
	});

	xit('should add a Product workbench manual collection', function () {
		var page = new LegislationDocumentEditionPage();
		var section = page.sections.productWorkbench;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		browser.waitForAngular();
		productworkbench.expandSection();
			section.collections.manual.add('BCM');
				//expect(section.collections.manual.hasItem('BCM')).toEqual(true);
				page.save;
					browser.waitForAngular();
					sectionDisplay = legisDocDisplayPage.sections.productWorkbench;
					productworkbench.expandSection();
						//expect(section.collections.manual.hasItem('BCM')).toEqual(true);
						expect(sectionDisplay.collections.quantity).toEqual(16);
						expect(sectionDisplay.collections.manual.quantity).toEqual(1);
		});
	
	xit('should delete the recently added product workbench manual collection', function () {
		var page = new LegislationDocumentEditionPage();
		var section = page.sections.productWorkbench;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		productworkbench.expandSection();
			section.collections.manual.deleteAll;
				expect(section.collections.manual.hasItem('BCM')).toEqual(false);
				page.save;
				browser.waitForAngular();
				sectionDisplay = legisDocDisplayPage.sections.productWorkbench;
				productworkbench.expandSection();
				expect(sectionDisplay.collections.manual.hasItem('BCM')).toEqual(false);
				expect(sectionDisplay.collections.quantity).toEqual(15);
				expect(sectionDisplay.collections.manual.quantity).toEqual(0);
		
		});
});
	