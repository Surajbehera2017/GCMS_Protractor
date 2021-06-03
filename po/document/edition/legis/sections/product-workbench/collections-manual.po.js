var Pagination = require('../../../../display/legis/sections/product-workbench/pagination.po.js');

var LegislationProductWorkbenchManualEdition = function () {
	this.pagination = new Pagination("PWManualCollectionsSectionPagination", 10);
};

LegislationProductWorkbenchManualEdition.prototype = Object.create({}, {

	_showButton: {get: function () { return element(by.id('btnPWFilterManualCollections')); }},
	_quantityLabel: {get: function () { return element(by.id('txtPWTotalCollectionsCounter')); }},
	_listContainer: {get: function () { return element(by.id('PWManualCollectionsSection')); }},
	_listItems: {get: function () { return element.all(by.repeater('item in productWorkbench.manualsCollections.collections.list')); }},

	addCollectionLink: {get: function () { return element(by.css('#PWManualCollectionsSectionAddCollection a[name="lnkSearchDropdown"]')); }},
	filterInput: {get: function () { return element(by.css('#PWManualCollectionsSectionAddCollection input[name = "txtdropdownsearch"]')); }},
	filterButton: {get: function () { return element(by.css('#PWManualCollectionsSectionAddCollection button[name="btndropdownsearch"]'));}},
	itemList: {get: function () { return element.all(by.repeater('item in choices')); }},
	deleteButtonList: {get: function () { return element.all(by.css('[name="btnDeletePWManualCollectionItem"]')); }},
   

	show: {
		get: function () {
			return this._showButton.click();
		}
	},
    
   //_viewaall: {get: function () { return element(by.id('btnPWFilterTotalCollections')); }},
    /*clickviewall: {
		get: function () {
			return this._viewaall.click();
		}
	},*/

	isVisible: {
		get: function () {
			return this._listContainer.isDisplayed();
		}
	},

	hasItems: {
		get: function () {
			return this._showButton.isDisplayed();
		}
	},

	hasItem: {
		value: function (itemName) {
			return this._listItems.getText().then(function (listNames) {
				return listNames.indexOf(itemName) >= 0;
			})
		}
	},

	quantity: {
		get: function () {
			return this._quantityLabel.getText().then(function (text) {
				return Number(text);
			});
		}
	},

	firstItem: {
		get: function () {
			return this._listItems.first().getText();
		}
	},

	deleteAll: {
		get: function () {
			return this.deleteButtonList.click();
		}
	},
    deleteSingle: {
		get: function () {
			return this.deleteButtonList.get(0).click();
		}
	},

	add: {
		value: function (value) {
			var self = this;
			return self.addCollectionLink.click().then(function () {
				return self.filterInput.sendKeys(value,protractor.Key.ENTER).then(function () {
					//return self.filterButton.click().then(function () {
						return self.itemList.click();
					//});
				});
			});
		}
	}

});

module.exports = LegislationProductWorkbenchManualEdition;