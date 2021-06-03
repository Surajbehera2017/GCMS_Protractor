var Pagination = require('./pagination.po.js');

var LegislationProductWorkbenchManual = function () {
	this.pagination = new Pagination("PWManualCollectionsSectionPagination", 10);
	this.edition = {};
};

LegislationProductWorkbenchManual.prototype = Object.create({}, {

	_showButton: {get: function () { return element(by.id('btnPWFilterManualCollections')); }},
	_quantityLabel: {get: function () { return element(by.id('txtPWTotalManualCollectionsCounter')); }},
	_listContainer: {get: function () { return element(by.id('PWManualCollectionsSection')); }},
	_listItems: {get: function () { return element.all(by.repeater('item in productWorkbench.manualsCollections.collections.list')); }},

	show: {
		get: function () {
			return this._showButton.click();
		}
	},

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
			return this.edition.deleteButtonList.click();
		}
	},

	add: {
		value: function (value) {
			var self = this;
			return self.edition.addCollectionLink.click().then(function () {
				return self.edition.filterInput.sendKeys(value).then(function () {
					return self.edition.filterButton.click().then(function () {
						return self.edition.itemList.click();
					});
				});
			});
		}
	}

});

module.exports = LegislationProductWorkbenchManual;