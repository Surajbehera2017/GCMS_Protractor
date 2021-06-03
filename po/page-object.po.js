var PageObject = function () {
};

PageObject.prototype._scrollTo = function (webelement) {
	// There are some issues with the double scroll when trying to click some elements
	browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
};

module.exports = PageObject;