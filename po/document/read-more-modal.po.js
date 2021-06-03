var ReadMoreModal = function () {
};

ReadMoreModal.prototype = Object.create({}, {

	_titleLabel: {get: function () { return element(by.css('[name="titleReadMoreDirective"]')); }},
	_descriptionLabel: {get: function () { return element(by.css('[name="contentMessageReadMoreDirective"]')); }},
	_closeButton: {get: function () { return element(by.css('[name="btnCloseReadMoreDirective"]')); }},

	isDisplayed: {get: function () { return this._titleLabel.isPresent();}},
	title: {get: function () { return this._titleLabel.getText();}},
	description: {get: function () { return this._descriptionLabel.getText();}},
	close: {get: function () { return this._closeButton.click();}}

});

module.exports = ReadMoreModal;