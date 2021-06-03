var ProductWorkbenchSection = require('./product-workbench/product-workbench.po.js');
var DocumentTypeSection = require('./document-type/document-type.po.js');
var ControlDataSection = require('./control-data/control-data.po.js');
var DateInForceSection = require('./date-in-force/date-in-force.po.js');
var PracticeAreaSection = require('./practice-area/practice-area.po.js');
var PublicationSection = require('./../../../edition/legis/sections/publication-section/publication-section.po.js');
var ThesaurusSection = require('./thesaurus-section/thesaurus-section.po.js');
var RelationshipSection = require('./relationship-section/relationship-section.po.js');
var TopicSubtopicSection= require('./topic-subtopic/topic-subtopic.po.js');
var LegislationDictionarySection=require('./legislation-dictionary/legislation-dictionary.po.js');
// var LegislationGrantsAndSubsidiesSection = require('./grants-subsidies/grants-subsidies.po.js');
// var LegislationGrantsAndSubsidiesSection1 = require('./grants-subsidies/grant-subsidies1.po.js');
var LegislationLoadTextSection = require('./load-text-section/load-text.po.js');
var LegislationBillsSection = require('./bills-section/bills.po.js');
var CorrigendasSection = require('./corrigendas/corrigendas.po.js');
var EditorialNotesSection = require('./editorial-notes/editorial-notes.po.js');
var Labels = require('./labels/labels.po.js');

var LegislationSections = function () {
	this.productWorkbench = new ProductWorkbenchSection();
	this.documentType = new DocumentTypeSection();
	this.controlData = new ControlDataSection();
	this.dateInForce = new DateInForceSection();
	this.publicationSection =new PublicationSection();
	this.practiceareaSection = new PracticeAreaSection();
	this.thesaurussection = new ThesaurusSection();
	this.relationshipsection = new RelationshipSection();
    this.topicSubtopicSection=new TopicSubtopicSection();
    this.legislationDictionary=new LegislationDictionarySection();
    this.grantsSubsidies = new LegislationGrantsAndSubsidiesSection();
    this.grantsSubsidies1 = new LegislationGrantsAndSubsidiesSection1();
    this.loadText = new LegislationLoadTextSection();
    this.bills = new LegislationBillsSection();
    this.corrigendasSection= new CorrigendasSection();
    this.editorialNotes = new EditorialNotesSection();
    this.labels = new Labels();
    
};

LegislationSections.prototype = Object.create({}, {

	_expandCollapseButton: {get: function () { return element(by.id('collapse-all')); }},
	//_collapseImage: {get: function () { return element(by.xpath('//div[@id="panelLeft"]//*[@id="collapse-all-collapsed-link"]')); }},
    _collapseImage: {get: function () { return element(by.id('collapse-all-collapsed-link')); }},

	isExpanded: {
		get: function () {
			return this._collapseImage.isDisplayed();
		}
	},

	expandAll: {
		get: function () {
			var self = this;
			return self.isExpanded.then(function (isExpanded) {
				if (!isExpanded)
					return self._expandCollapseButton.click();
			})
		}
	},

	collapseAll: {
		get: function () {
			var self = this;
			return self.isExpanded.then(function (isExpanded) {
				if (isExpanded)
					return self._expandCollapseButton.click();
			})
		}
	}

});

module.exports = LegislationSections;