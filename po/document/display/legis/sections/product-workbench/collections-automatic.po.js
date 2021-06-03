var Pagination = require('./pagination.po.js');

var LegislationProductWorkbenchAutomatic = function () {
	this.pagination = new Pagination("PWAutomaticCollectionsSectionPagination", 40);
};

LegislationProductWorkbenchAutomatic.prototype = Object.create({}, {

	_showButton: {get: function () { return element(by.id('btnPWFilterAutomaticCollections')); }},
	_quantityLabel: {get: function () { return element(by.id('txtPWTotalAutomaticCollectionsCounter')); }},
	_listContainer: {get: function () { return element(by.id('PWAutomaticCollectionsSection')); }},
	_listItems: {get: function () { return element.all(by.repeater('element in productWorkbench.showingDataAutoProducts')); }},

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

module.exports = LegislationProductWorkbenchAutomatic;