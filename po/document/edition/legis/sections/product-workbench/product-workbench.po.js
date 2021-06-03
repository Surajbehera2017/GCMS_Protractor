var ProductWorkbenchManualCollections = require('./collections-manual.po.js');
var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var LegislationProductWorkbenchSection = function () {
	this.collections = {};
	this.collections.manual = new ProductWorkbenchManualCollections();

	this.expandable = new ExpandableToggle('lnkPWCollapsedArrow', 'lnkPWExpandedArrow');
	//this.expandable =new ExpandableToggle('//*[@id="content-section"]/div[5]/div/ul/li/div/div[1]/a[1]/img','//*[@id="content-section""]/div[5]/div/ul/li/div/div[1]/a[2]/img');
};

LegislationProductWorkbenchSection.prototype = Object.create({}, {

	_errorMessage: {get: function () { return element(by.id('txtPWNoEntries')); }},

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

    _viewaall: {get: function () { return element(by.id('btnPWFilterTotalCollections')); }},
   
    clickviewall: {
		get: function () {
			return this._viewaall.click();
		}
	},
    
	isManualButtonVisible: {
		get: function () {
			return this.collections.manual.hasItems
		}
	},
    
    _manual: {
        get: function () { return element(by.id('btnPWFilterManualCollections')); }},
    
    clickManual: {
		get: function () {
			return this._manual.click();
		}
	},
    
    xButton: {
        get: function () { return element(by.css('[ng-click="productWorkbench.deleteFromManualCollections(item)"]')); }},
    
    clickXButton: {
		get: function () {
			return this.xButton.click();
		}
	},
    
    manualCount: {
        get: function () { return element(by.id('txtPWTotalManualCollectionsCounter')); }},
    
    getCountofManual: {
		get: function () {
			return this.manualCount.getText();
		}
	},
    
    _manualPagination: {
        get: function () { return element(by.id('PWManualCollectionsSectionPagination')); }},
    
    isManualPaginationAvailable: {
		get: function () {
			return this._manualPagination.isDisplayed();
		}
	},
    
    _lastpaginationButton: {
        get: function () { return element(by.xpath('.//*[@id="PWManualCollectionsSectionPagination"]/button[4]')); }},
    
    clickonLastPaginationButton: {
		get: function () {
			return this._lastpaginationButton.click();
		}
	},
    
    _xbuttonLastPagination: {
        get: function () { return element(by.xpath('.//*[@id="PWManualCollectionsSection"]/div[3]/a/i')); }},
    
    clickXbuttonLastPagination: {
		get: function () {
			return this._xbuttonLastPagination.click();
		}
	},
    
     _xbuttoninFirstPagination: {
        get: function () { return element(by.xpath('.//*[@id="PWManualCollectionsSection"]/div[11]/a/i')); }},
    
    clickXbuttoninFirstPagination: {
		get: function () {
			return this._xbuttoninFirstPagination.click();
		}
	},
    
     _addcollection: {
        get: function () { return element(by.xpath('.//*[@id="PWManualCollectionsSectionAddCollection"]/div/div[1]/a')); }},
    
    clickonAddCollection: {
		get: function () {
			return this._addcollection.click();
		}
	},
    
     _newCollection: {
        get: function () { return element(by.xpath('.//*[@id="PWManualCollectionsSectionAddCollection"]/div/div[4]/ul/li[5]/a')); }},
    
    clickonNewCollections: {
		get: function () {
			return this._newCollection.click();
		}
	},
    
     _saveButton: {
        get: function () { return element(by.id('btnSaveDocument')); }},
    
    clickSaveButton: {
		get: function () {
			return this._saveButton.click();
		}
	},

});

module.exports = LegislationProductWorkbenchSection;