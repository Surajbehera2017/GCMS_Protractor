// var NavbarPart = require('./navbar.part.po.js');
// var WIPLeftPanePart = require('./wip-left-pane.part.po.js');

var WIPPage = function () {
	this.get = function () { return browser.get('commons/Init.do'); };
	//this.navbar = new NavbarPart();
	//this.wipLeftPane = WIPLeftPanePart();
};

WIPPage.prototype = Object.create({}, {
	title: {get: function () { return browser.getTitle() }},
});

module.exports = WIPPage;