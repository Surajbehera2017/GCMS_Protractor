var PageObject = require('../../../../../page-object.po.js');

var LegislationProductWorkbenchPagination = function (containerId, resultsPerPage) {
	this.containerId = containerId;
	this.resultsPerPage = resultsPerPage;
};

LegislationProductWorkbenchPagination.prototype = Object.create(new PageObject(), {

	_container: {get: function () { return element(by.id(this.containerId))}},
	_current: {get: function () {return element(by.css('#' + this.containerId + ' [name="txtPagCurrentPage"]'));}},
	_quantity: {get: function () { return element(by.css('#' + this.containerId + ' [name="txtPagTotalPages"]')); }},
	_first: {get: function () { return element(by.css('#' + this.containerId + ' [name="btnPagFirst"]')); }},
	_previous: {get: function () { return element(by.css('#' + this.containerId + ' [name="btnPagPrevious"]')); }},
	_next: {get: function () { return element(by.css('#' + this.containerId + ' [name="btnPagNext"]')); }},
	//_nextManual: {get: function () { return element.all(by.css('[name="btnPagNext"]')).get(0); }},
	_last: {get: function () { return element(by.css('#' + this.containerId + ' [name="btnPagLast"]')); }},

	hasPagination: {get: function () { return this._container.isDisplayed();}},

	goToFirst: {
		get: function () {
			this._scrollTo(this._first);
			return this._first.click();
		}
	},
	goToPrevious: {
		get: function () {
			this._scrollTo(this._previous);
			return this._previous.click();
		}
	},

	goToNext: {
		get: function () {
			this._scrollTo(this._next);
			return this._next.click();
		}
	},

	goToLast: {
		get: function () {
			this._scrollTo(this._last);
			return this._last.click();
		}
	},

	currentPage: {
		get: function () {
			this._scrollTo(this._current);
			return this._current.getAttribute('value').then(function (text) {return Number(text);});
		}
	},

	setPage: {
		value: function (pageNumber) {
			this._scrollTo(this._current);
			return this._current.sendKeys(pageNumber);
		}
	},

	pages: {
		get: function () {
			this._scrollTo(this._quantity);
			return this._quantity.getText().then(function (text) {
				return Number(text.replace("/", ""));
			});
		}
	}

});

module.exports = LegislationProductWorkbenchPagination;