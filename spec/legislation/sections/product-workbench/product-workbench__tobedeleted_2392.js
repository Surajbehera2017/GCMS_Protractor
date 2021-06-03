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
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
		productworkbench.expandSection();
		expect(productworkbench.isExpanded()).toEqual(true);
		});
	 

	it('should have all the collections and products visible', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
		productworkbench.showAll();
			//expect(section.isVisible).not.toContain(false);
	}); 

	 it('should have the See all button', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
        var btn = productworkbench.isShowAllButtonVisible();
		expect(btn).toBe(true);
	
	}); 

	it('should have the Collections button', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
		var collection = productworkbench.isCollectionsButtonVisible();
		expect(collection).toBe(true);
	});

	it('should have the Manual button', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
        var manual = productworkbench.isManualButtonVisible();
		expect(manual).toBe(true);
	});

 	it('should have the Automatic button', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
		var automatic = productworkbench.isAutomaticButtonVisible();
		expect(automatic).toBe(true);
	}); 

	it('should have the Product button', function () {
		browser.waitForAngular();
		productworkbench.clickDocumentStructureTab();
		var product = productworkbench.isProductButtonVisible();
		expect(product).toBe(true);
	});
});
