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
    legisDocDisplayPage.get(testData.legislation.sections.productcollection.marginal_collection);
    productworkbench.urlLoad(params.valid_username,params.valid_password);
       
   });

	xit('should expand the Product workbench section', function () {

		browser.waitForAngular();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
	});

	xit('should have correct quantity of manual and automatic collections', function () {
		var section = new LegislationDocumentDisplayPage().sections.productWorkbench;

		var collectionsQuantity = section.collections.quantity;
		var manualQuantity = productworkbench.quantityManual();
		console.log(manualQuantity+"aaa");
		var automaticQuantity = productworkbench.quantityAutomatic();
		console.log(automaticQuantity+"aaa");
		expect(collectionsQuantity).toEqual(23);
		});
		
	xit('should display only the product workbench collections', function () {
		var paginationpresent=globalpo.isElementDisplayed(loaded.pagination);
		if(paginationpresent){

		}
		else{
			
		}
		});
	
	});

