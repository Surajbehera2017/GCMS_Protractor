var expandableToggle = function (expandButton, collapseButton) {
	var _expandButton = element(by.id(expandButton));
	var _collapseButton = element(by.id(collapseButton));

	this.isExpanded	=function () {
			return _collapseButton.isDisplayed();
	};

	this.expand =function () {
			browser.executeScript("arguments[0].scrollIntoView();", _expandButton.getWebElement());
			return _expandButton.click();
		};

	this.collapse =function () {
			browser.executeScript("arguments[0].scrollIntoView();", _expandButton.getWebElement());
			return _collapseButton.click();
		};
	
};

module.exports = expandableToggle;