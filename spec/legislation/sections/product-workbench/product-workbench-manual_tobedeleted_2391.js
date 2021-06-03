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
    legisDocDisplayPage.get(testData.legislation.sections.productworkbench.marginal_id_manual);
    productworkbench.urlLoad(params.valid_username,params.valid_password);
       
   });

	xit('should expand the Product workbench section', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		
	});

	xit('should display only the product workbench manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);

		section.collections.manual.show;
			expect(section.collections.manual.isVisible).toEqual(true);
			expect(section.collections.automatic.isVisible).toEqual(false);
			expect(section.products.isVisible).toEqual(false);
		
	});

	xit('should display only the pagination of product workbench manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);

		var manualQuantity = section.collections.manual.quantity;
			var pagination = section.collections.manual.pagination;
			if (manualQuantity > pagination.resultsPerPage) {
				expect(section.collections.manual.pagination.hasPagination).toEqual(true);
				var pageQuantity = Math.floor(manualQuantity / pagination.resultsPerPage) + 1;
				expect(pagination.pages).toEqual(pageQuantity);
			} else {
				expect(section.collections.manual.pagination.hasPagination).toEqual(true);
			}
		
	});

	xit('should go the next page of manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		browser.waitForAngular();
		var pagination = section.collections.manual.pagination;
        var firstItem = section.collections.manual.firstItem;
		var originalPage =	pagination.currentPage;
				pagination.goToNext;
					expect(section.collections.manual.firstItem).not.toEqual(firstItem);
					expect(pagination.currentPage).not.toEqual(originalPage);
					//expect(pagination.currentPage).toEqual(originalPage + 1);
					expect(pagination.currentPage).toEqual(2);
		});
			
	xit('should go the previous page of manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);

		var pagination = section.collections.manual.pagination;
        var firstItem =section.collections.manual.firstItem;
		var originalPage =	pagination.currentPage;
		browser.waitForAngular();
		       pagination.goToNext;
				pagination.goToPrevious;
					//expect(section.collections.manual.firstItem).not.toEqual(firstItem);
					expect(section.collections.manual.firstItem).toEqual(firstItem);
					//expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(originalPage);
					//expect(pagination.currentPage).toEqual(originalPage - 1);
					expect(pagination.currentPage).toEqual(1);
				});
			

	 xit('should go the last page of manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);

		var pagination = section.collections.manual.pagination;
        var firstItem =section.collections.manual.firstItem;
		var originalPage =	pagination.currentPage;
		browser.waitForAngular();
				pagination.goToLast;
					expect(section.collections.manual.firstItem).not.toEqual(firstItem);
					expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(pagination.pages);
				});
		

	xit('should go the first page of manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);

		var pagination = section.collections.manual.pagination;
        var firstItem =section.collections.manual.firstItem;
		var originalPage =	pagination.currentPage;
		browser.waitForAngular();
		        pagination.goToLast;
				pagination.goToFirst;
					//expect(section.collections.manual.firstItem).not.toEqual(firstItem);
					expect(section.collections.manual.firstItem).toEqual(firstItem);
					//expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(1);
				});
});
		