var ProductWorkbenchManual = require('./collections-manual.po.js');
var ProductWorkbenchAutomatic = require('./collections-automatic.po.js');

var LegislationProductWorkbenchCollections = function () {
	this.manual = new ProductWorkbenchManual();

	this.automatic = new ProductWorkbenchAutomatic();
};

LegislationProductWorkbenchCollections.prototype = Object.create({}, {

	_showButton: {get: function () { return element(by.id('btnPWFilterTotalCollections')); }},
	_quantityLabel: {get: function () { return element(by.id('txtPWTotalCollectionsCounter')); }},

	show: {
		get: function () {
			return this._showButton.click();
		}
	},

	isVisible: {
		get: function () {
			var self = this;
			return self.manual.isVisible.then(function (manualIsVisible) {
				return self.automatic.isVisible.then(function (automaticIsVisible) {
					return (manualIsVisible || automaticIsVisible);
				});
			});
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
	}

});

module.exports = LegislationProductWorkbenchCollections;