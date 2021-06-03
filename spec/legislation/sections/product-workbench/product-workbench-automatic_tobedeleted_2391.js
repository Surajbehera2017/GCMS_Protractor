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
		browser.waitForAngular();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
	});

	xit('should display only the product workbench automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

		section.collections.automatic.show.then(function () {
			expect(section.collections.manual.isVisible).toEqual(false);
			expect(section.collections.automatic.isVisible).toEqual(true);
			expect(section.products.isVisible).toEqual(false);
		});
	}); 

	xit('should display only the pagination of product workbench automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		browser.sleep(3000);
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		
		var automaticQuantity = section.collections.automatic.quantity;
			var pagination = section.collections.automatic.pagination;
			if (automaticQuantity > pagination.resultsPerPage) {
				expect(pagination.hasPagination).toEqual(true);
				var pageQuantity = Math.floor(automaticQuantity / pagination.resultsPerPage) + 1;
				expect(pagination.pages).toEqual(pageQuantity);
			} else {
				//expect(section.collections.automatic.pagination.hasPagination).toEqual(false);
			}
	
	}); 

	 xit('should go the next page of automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		browser.sleep(3000);
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
	    var pagination = section.collections.automatic.pagination;
        var firstItem = section.collections.automatic.firstItem;
			pagination.currentPage.then(function (originalPage) {
				pagination.goToNext.then(function () {
					expect(section.collections.automatic.firstItem).not.toEqual(firstItem);
					expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(originalPage + 1);
				});
			});
		
	}); 

	xit('should go the previous page of automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
		browser.sleep(3000);
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		
		var pagination = section.collections.automatic.pagination;
        var firstItem = section.collections.automatic.firstItem;
			pagination.currentPage.then(function (originalPage) {
				pagination.goToNext.then(function () {
				pagination.goToPrevious.then(function () {
					expect(section.collections.automatic.firstItem).toEqual(firstItem);
					expect(pagination.currentPage).toEqual(originalPage);
					expect(pagination.currentPage).toEqual(originalPage);
				});
			});
		});
	});

	xit('should go the last page of automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        browser.sleep(3000);
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		var pagination = section.collections.automatic.pagination;
        var firstItem = section.collections.automatic.firstItem;
			pagination.currentPage.then(function (originalPage) {
				pagination.goToLast.then(function () {
					expect(section.collections.automatic.firstItem).not.toEqual(firstItem);
					expect(pagination.currentPage).not.toEqual(originalPage);
					expect(pagination.currentPage).toEqual(pagination.pages);
				});
			});
		
	}); 

	 xit('should go the first page of automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;
        browser.sleep(3000);
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		var pagination = section.collections.automatic.pagination;
        var firstItem = section.collections.automatic.firstItem;
			pagination.currentPage.then(function (originalPage) {
				pagination.goToLast.then(function () {
				pagination.goToFirst.then(function () {
					expect(section.collections.automatic.firstItem).toEqual(firstItem)
					expect(pagination.currentPage).toEqual(originalPage);
					expect(pagination.currentPage).toEqual(1);
				});
			});
		});
	}); 

});
