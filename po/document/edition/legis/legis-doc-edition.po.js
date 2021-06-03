var LegislationDocumentDisplayPage = require('../../display/legis/legis-doc-display.po.js');
var LegislationProductWorkbench = require('./sections/product-workbench/product-workbench.po.js');
var LegislationPublicationSection = require('./sections/publication-section/publication-section.po.js');
var LegislativeBodySection =require('./sections/legislative-body/legislative-body.po.js');
var LegislativeDateInForceSection =require('./sections/date-in-force/date-in-force.po.js');
var LegislationGrantsAndSubsidiesSection = require('./sections/grants-subsidies/grants-subsidies.po.js');
var LegislationBillsSection = require('./sections/bills-section/bills.po.js');
var legislationPracticeArea = require('./sections/practice-area/practice-area.po.js');

var LegislationStatuteDataSection = require('./sections/statute-data/statute-data.po.js');
var DocumentTypeSection = require('../../display/legis/sections/document-type/document-type.po.js');
var LegislationDocumentEditionPage = function () {
	this.get = function (docId) {
		this.docId = docId;
		return browser.get('static/gcms-ui/index.html#/documentEdit/' + docId);
	};
	this.refresh = function () {
		return browser.get('static/gcms-ui/index.html#/documentEdit/' + this.docId);
	};
	this.sections = {};

	this.sections.productWorkbench = new LegislationProductWorkbench();
	this.sections.publicationSection = LegislationPublicationSection;
	//this.sections.LegislationAuthorNoteSection =new LegislationAuthorNoteSection();
	this.sections.legislativeBodySection =LegislativeBodySection;
    this.sections.dateInForceSection =new LegislativeDateInForceSection();
  //  this.sections.grantSubsidiesSection = new LegislationGrantsAndSubsidiesSection();
    this.sections.billsSection = new LegislationBillsSection();
    this.sections.statuteData = LegislationStatuteDataSection;
    this.sections.documentType =new DocumentTypeSection ();
    this.sections.practiceArea =legislationPracticeArea;//new legislationPracticeArea(); 
};

LegislationDocumentEditionPage.prototype = Object.create({}, {
	title: {get: function () { return browser.getTitle(); }},

	_saveButton: {get: function () { return element.all(by.css('[id="btnSaveDocument"]')).get(1); }},
    _saveButtonClick: {get: function () {  
                     return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();','');              
                                   }},
	_confirmSaveButton: {get: function () { return element(by.css('button[name="btnConfirmationDialogAccept"]')); }},
	_cancelSaveButton: {get: function () { return element(by.css('button[name="btnConfirmationDialogCancel"]')); }},
    _okButton: {get: function () { return element(by.css('button[name="btnInfoDialogOk"]')); }},
	clickonOk:{
		get: function () {
			var self = this;
			return self._okButton.click();
		}
	},
	save: {
		get: function () {
			var self = this;
			return self._saveButtonClick.then(function () {
				return self._confirmSaveButton.click().then(function () {
					//return new LegislationDocumentDisplayPage();
				});
			});
		}
                                              
	},
    saveAndVerifyErrorForDateInForce:{
		get: function () {
			var self = this;
			return self._saveButton.click().then(function () {
				//return self._confirmSaveButton.click().then(function () {
					return element(by.css('[name="txtInfoDialog"]')).getText().then(function(txt){
                        if(txt.indexOf('**La nota de temporalidad sólo existe si existe temporalidad')!=-1){
                            return true;
                        }else{
                            return false;
                        }
                    });
				//});
			});
		}
	},
    
    cancel: {
		get: function () {
			var self = this;
			return self._saveButton.click().then(function () {
				return self._cancelSaveButton.click().then(function () {
					return new LegislationDocumentDisplayPage();
				});
			});
		}
	},
    
    displaySaveButton: {get: function () { return this._saveButton.isPresent(); }},
    
    clickOkButton: {
		get: function () {
			var self = this;
			return self._saveButton.click().then(function () {
				return self._okButton.click().then(function () {
					return new LegislationDocumentDisplayPage();
				});
			});
		}
	},
    
    _createButton: {get: function () { return element(by.css('[id="btnSaveDocument"]')); }},
    
    clickCreate:  {
		get: function () {
			
			return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();','');
		}
	},
    
    clickSaveButton: {
		get: function () {
			return this._saveButton.click();
            
		}
	},
     
    clickSavePopup: {
		get: function () {
			return this._confirmSaveButton.click();
		}
	},

});

module.exports = LegislationDocumentEditionPage;