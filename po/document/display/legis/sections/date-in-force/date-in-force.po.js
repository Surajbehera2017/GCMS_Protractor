var ExpandableToggle = require('../expandable-toggle.po.js');
var ReadMoreModal = require('../../../../read-more-modal.po.js');

var LegislationDateInForceSection = function () {
	this.expandable = new ExpandableToggle('linkUncollapseValidityDataSection', 'linkCollapseValidityDataSection');
	this.readMoreModal = new ReadMoreModal();
};

LegislationDateInForceSection.prototype = Object.create({}, {

	_inForceDate: {get: function () { return element(by.id('textDateForceValueValidityDataSection')); }},
	_temporality: {get: function () { return element(by.id('textEffectiveTypeValueValidityDataSection"]')); }},
	_ineffectiveNoteText: {get: function () { 
        this._scrollTo(this._ineffectiveNote);
        
        
        //return element(by.css('[name="contentDinameTextDiretiveMore"][dynamic="originaltext"]')).getWebElement().getInnerHtml();
        
        return browser.findElement(by.css('[id="textIneffectiveNoteValueValidityDataSection"]')).getInnerHtml();
        
        
    }},
	_seeMoreLink: {get: function () { return element(by.css('#textIneffectiveNoteValueValidityDataSection [name="linkMoreMinifiedDirective"]')); }},

	_DateForce:{get: function () { return element(by.binding('Validity.title.dateForce')); }},
	_EffectiveType: {get: function () {return element(by.binding('Validity.title.effectiveType'));}},
	_IneffectiveDate:{get: function () {return element(by.binding('Validity.title.ineffectiveDate'));}},
	_ineffectiveNote:{get:  function () {return element(by.binding('Validity.title.ineffectiveNote'))}},

	_scrollTo: {
		value: function (webelement) {
			// There are some issues with the double scroll when trying to click some elements
			browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
            
		}
	},
    
    _hasAttr: {
        value: function(el,att){
            browser.executeScript("return arguments[0].hasAttribute(arguments[1]);", el.getWebElement(),att);
        }
    },

	inForceDate: {get: function () { return this._inForceDate.getText();}},
	temporality: {get: function () { return this._temporality.getText();}},
	ineffectiveNote: {get: function () { return this._ineffectiveNote.getText();}},
    ineffectiveNoteText: {get: function(){return this._ineffectiveNoteText;}},
	hasSeeMoreLink: {get: function () { return this._seeMoreLink.isDisplayed();}},

	DateForce:{get: function () { return this._DateForce.getText(); }},
	EffectiveType: {get: function () {return this._EffectiveType.getText();}},
	IneffectiveDate:{get: function () {return this._IneffectiveDate.getText();}},
	IneffectiveNote:{get: function () {return this._ineffectiveNote.getText();}},
	clickSeeMoreLink: {
		get: function () {
			this._scrollTo(this._seeMoreLink);
			return this._seeMoreLink.click();
		}
	}

});

module.exports = LegislationDateInForceSection;