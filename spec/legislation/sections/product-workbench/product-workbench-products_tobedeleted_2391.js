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

	it('should expand the product workbench section', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

		productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		
	});

	it('should display only the product workbench products', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

        
		productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		section.products.show.then(function () {
			expect(section.collections.isVisible).toEqual(false);
			expect(section.products.isVisible).toEqual(true);
		});
	});

	  it('should display only the pagination of product workbench manual collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		section.products.quantity.then(function (productsQuantity) {
			var pagination = section.products.pagination;
			if (productsQuantity > 10) {
				expect(section.products.pagination.hasPagination).toEqual(true);
				var pageQuantity = Math.floor(productsQuantity / pagination.resultsPerPage) + 1;
				expect(pagination.pages).toEqual(pageQuantity);
			} else {
				expect(section.products.pagination.hasPagination).toEqual(false);
			}
		});
	});

	it('should go the next page of products', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		var pagination = section.products.pagination;

        productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);

		var firstItem = section.products.firstItem;
		var originalPage =	pagination.currentPage;
				pagination.goToNext;
					expect(section.products.firstItem).not.toEqual(firstItem);
					//expect(section.products.firstItem).toEqual(firstItem);
					expect(pagination.currentPage).not.toEqual(originalPage);
					//expect(pagination.currentPage).toEqual(originalPage + 1);
					expect(pagination.currentPage).toEqual(2);
				});
			
	it('should go the previous page of products', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

        productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		var pagination = section.products.pagination;

		var firstItem =section.products.firstItem;
		var originalPage =	pagination.currentPage;
		        pagination.goToNext;
				pagination.goToPrevious;
					//expect(section.products.firstItem).not.toEqual(firstItem);
					expect(section.products.firstItem).toEqual(firstItem);
					//expect(pagination.currentPage).not.toEqual(originalPage);
					//expect(pagination.currentPage).toEqual(originalPage - 1);
					expect(pagination.currentPage).toEqual(1);
				});
			

	it('should go the last page of products', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        
        productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		var pagination = section.products.pagination;

		var firstItem =section.products.firstItem;
		var originalPage =	pagination.currentPage;
				pagination.goToLast;
					expect(section.products.firstItem).not.toEqual(firstItem);
					
					expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(pagination.pages);
		});
			


	it('should go the first page of products', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        productworkbench.expandSection();
        expect(productworkbench.isExpanded()).toEqual(true);
		var pagination = section.products.pagination;

		var firstItem = section.products.firstItem;
		var originalPage =	pagination.currentPage;
		pagination.goToLast;
				pagination.goToFirst;
					//expect(section.products.firstItem).not.toEqual(firstItem);
					expect(section.products.firstItem).toEqual(firstItem);
					//expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(1);
				});
});
		