var Pagination = require('./pagination.po.js');

var LegislationProductWorkbenchProducts = function () {
	this.pagination = new Pagination("PWProductsSectionPagination", 10);
};

LegislationProductWorkbenchProducts.prototype = Object.create({}, {

	_showButton: {get: function () { return element(by.id('btnPWFilterProducts')); }},
	_quantityLabel: {get: function () { return element(by.id('txtPWProductsCounter')); }},
	_listContainer: {get: function () { return element(by.id('PWProductsSection')); }},
	_listItems: {get: function () { return element.all(by.repeater('item in productWorkbench.automaticProducts.products')); }},

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
	}

});

module.exports = LegislationProductWorkbenchProducts;