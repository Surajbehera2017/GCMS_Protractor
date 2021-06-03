var ProductWorkbenchCollections = require('./collections.po.js');
var ProductWorkbenchProducts = require('./products.po.js');
var ExpandableToggle = require('../expandable-toggle.po.js');
//var ExpandableToggleMain = require('../expandable-toggle.po.js');

var LegislationProductWorkbenchSection = function () {
	this.collections = new ProductWorkbenchCollections();
	this.products = new ProductWorkbenchProducts();
	this.expandable = new ExpandableToggle('lnkPWCollapsedArrow','lnkPWExpandedArrow');

};

LegislationProductWorkbenchSection.prototype = Object.create({}, {

	_errorMessage: {get: function () { return element(by.id('txtPWNoEntries')); }},
	_allButton: {get: function () { return element(by.id('btnPWFilterViewAll')); }},

	_displayMessage: {get: function () { return element(by.css('[ng-if="rightPanel.versions.length == 0"]')); }},

    _displayMessageNew: {
        get: function () { return element(by.xpath('//div[@class="right-tab-content ng-scope"]//*[@class="rightpanel-notext ng-scope"]')); }},
    
    displayMessageNew: {
		get: function () {
			return this._displayMessageNew.getInnerHtml();
		}
	},

	displayMessage: {
		get: function () {
			return this._displayMessage.getText();
		}
	},
	hasErrorMessage: {
		get: function () {
			return this._errorMessage.isDisplayed();
		}
	},

	errorMessage: {
		get: function () {
			return this._errorMessage.getText();
		}
	},

	showAll: {
		get: function () {
			return this._allButton.click();
		}
	},

	isVisible: {
		get: function () {
			return this.collections.isVisible || this.products.isVisible;
		}
	},

	isShowAllButtonVisible: {
		get: function () {
			return this._allButton.isDisplayed();
		}
	},

	isCollectionsButtonVisible: {
		get: function () {
			return this.collections.hasItems;
		}
	},

	isManualButtonVisible: {
		get: function () {
			return this.collections.manual.hasItems
		}
	},

	isAutomaticButtonVisible: {
		get: function () {
			return this.collections.automatic.hasItems;
		}
	},

	isProductButtonVisible: {
		get: function () {
			return this.products.hasItems;
		}
	},
    
     _collections: {
        get: function () { return element(by.id('txtPWTotalCollectionsCounter')); }},
    
    clickCollections: {
		get: function () {
			return this._collections.click();
		}
	},
    
     _collectionPagination: {
        get: function () { return element(by.id('PWManualCollectionsSectionPagination')); }},
    
    isCollectionPaginationAvailable: {
		get: function () {
			return this._collectionPagination.isDisplayed();
		}
	},
    
    _manual: {
        get: function () { return element(by.id('btnPWFilterManualCollections')); }},
    
    clickManual: {
		get: function () {
			return this._manual.click();
		}
	},
    
    _manualPagination: {
        get: function () { return element(by.id('PWManualCollectionsSectionPagination')); }},
    
    isManualPaginationAvailable: {
		get: function () {
			return this._manualPagination.isDisplayed();
		}
	},
    
    _automaticFilter: {
        get: function () { return element(by.id('btnPWFilterAutomaticCollections')); }},
    
    clickAutomaticFilter: {
		get: function () {
			return this._automaticFilter.click();
		}
	},
    
    _automaticPagination: {
        get: function () { return element(by.id('PWAutomaticCollectionsSectionPagination')); }},
    
    isAutomaticPaginationAvailable: {
		get: function () {
			return this._automaticPagination.isDisplayed();
		}
	},
    
    _productFilter: {
        get: function () { return element(by.id('btnPWFilterProducts')); }},
    
    clickProductFilter: {
		get: function () {
			return this._productFilter.click();
		}
	},
    
    _productPagination: {
        get: function () { return element(by.id('PWProductsSectionPagination')); }},
    
    isProductPaginationAvailable: {
		get: function () {
			return this._productPagination.isDisplayed();
		}
	},
    
    
    
    isCollectionsAvailable: {
		get: function () {
			return this._collections.isDisplayed();
		}
	},


 
    
    isManualButtonAvailable: {
		get: function () {
			return this._manual.isDisplayed();
		}
	},


    
    isAutomaticButtonButtonAvailable: {
		get: function () {
			return this._automaticFilter.isDisplayed();
		}
	},

 
    
    isProductButtonAvailable: {
		get: function () {
			return this._productFilter.isDisplayed();
		}
	},
    

});

module.exports = LegislationProductWorkbenchSection;