var PageObject = require('../../../../page-object.po.js');

var ExpandableTogglewithxpath = function (expandButton, collapseButton) {
    //this._expandButton = element(by.id(expandButton));
    //this._collapseButton = element(by.id(collapseButton));
    //this._expandButton = element(by.css(expandButton));
    //this._collapseButton = element(by.css(collapseButton));
    //below locator  usefull for publication section
    this._expandButton = element(by.xpath(expandButton));
    this._collapseButton = element(by.xpath(collapseButton));
};

ExpandableTogglewithxpath.prototype = Object.create(new PageObject(), {

    isExpanded: {
        get: function () {
            this._scrollTo(this._collapseButton);
            return this._collapseButton.isDisplayed();
        }
    },

    expand: {
        get: function () {
            var self = this;
            self._scrollTo(this._expandButton);
            return self.isExpanded.then(function (isExpanded) {
                if (!isExpanded)
                    return self._expandButton.click();
            })
        }
    },

    collapse: {
        get: function () {
            var self = this;
            self._scrollTo(this._collapseButton);
            return self.isExpanded.then(function (isExpanded) {
                if (isExpanded)
                    return self._collapseButton.click();
            })
        }
    }

});

module.exports = ExpandableTogglewithxpath;
