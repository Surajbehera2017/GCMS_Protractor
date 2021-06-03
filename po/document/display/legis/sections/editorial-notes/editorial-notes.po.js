var ExpandableToggle = require('../expandable-toggle.po.js');

var LegislationEditorialNoteSection = function () {
	this.expandable = new ExpandableToggle('collapsed-editorial-notes-link', 'non-collapsed-editorial-notes-link');
};

LegislationEditorialNoteSection.prototype = Object.create({}, {

	_printProductsLabel: {get: function () { return element(by.xpath('.//*[normalize-space(text())="Editorial Notes"]/../span[text()="(Print Products)"]')); }},
	_digitalProductsLabel: {get: function () { return element(by.xpath('.//*[normalize-space(text())="Editorial Notes"]/../*[text()="(Digital Products)"]')); }},
	_internalNoteLabel: {get: function () { return element(by.xpath('.//*[@ng-bind="\'EditorialNote.title.internalNote\' | translate"]')); }},
	_printProductViewAllLink: {get: function () { return element(by.xpath('//*[text()=\'(Print Products)\']/../../..//a[text()=\'View more\']')); }},
	_printProductCreateNoteLink: {get: function () { return element(by.xpath('//*[normalize-space(text())=\'(Print Products)\']/../../..//a[text()=\'Create note\']')); }},
	_printProductEditLink: {get: function () { return element(by.xpath('//*[normalize-space(text())=\'(Print Products)\']/../../..//a[text()=\'Edit\']')); }},
	_digitalProductViewAllLink: {get: function () { return element(by.xpath('//*[text()=\'(Digital Products)\']/../../..//a[text()=\'View more\']')); }},
	_digitalProductCreateNoteLink: {get: function () { return element(by.xpath('//*[text()=\'(Digital Products)\']/../../..//a[text()=\'Create note\']')); }},
	_internalNoteViewAllLink: {get: function () { return element(by.xpath('//*[text()=\'Internal Note\']/../..//a[text()=\'View more\']')); }},
	_modalContent: {get: function () { return element(by.css('.modal-content')); }},
	_closeModalContent: {get: function () { return element(by.css('.btn.btn-primary.ng-binding')); }},
	_modalContentOKButton: {get: function () { return element(by.css('.btn.btn-primary.ng-scope')); }},
	_modalContentErrorMessage: {get: function () { return element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding')); }},
	_publishedInDigitalProductsCheckBox: {get: function () { return element(by.xpath('.//*[@for="IdnotaAplicaPECheckBox"]')); }},
	_xEditorTextBox: {get: function () { return element(by.id('visible-e2')); }},
	_xEditorSaveButton: {get: function () { return element(by.id('button-1027-btnIconEl')); }},
	_internalNoteEditTextBox: {get: function () { return element(by.xpath('.//*[@ng-model="editorialNotes.model.data.document.notaInterna"]')); }},
	//_editorialNoteIconOnDocStructureAXIV: {get: function () { return element(by.xpath('.//*[@id=\'nodeId-52281009\']/td[3]/div[2]/div/a[4]/div]')); }},
	_editorialNoteIconOnDocStructureAXIV: {get: function () { return element.all(by.xpath('.//*[@ng-click="structureCtrl.viewEditorialNote(layer,$parent)"]/div[@class="icon-analysis icon-editorial-note-position"]')); }},
	
	
	_editorialNoteTitleInPopup: {get: function () { return element(by.xpath('.//*[@disabled=\'disabled\']/a[text()=\'EDITORIAL NOTE\']')); }},
	_editorialNoteTextInPopup: {get: function () { return element(by.xpath('html/body/blockquote/font/p')); }},
	_closePopUpWindow: {get: function () { return element.all(by.css('.bento-icon-close-x')); }},
	
	isEditorialNoteDisplayedInPopup: {
        get: function (){
        	return this._editorialNoteTitleInPopup.isDisplayed().then(function(isdisp){
                 if(isdisp == true){
                     return true;
                 }
             },function(err){
                 return false;
             
             });
        }
    },
    
	clickEditorialNoteIconOnDocStructureAXIV: {
        get: function (){
        	this._scrollTo(this._editorialNoteIconOnDocStructureAXIV.get(0));
        	return this._editorialNoteIconOnDocStructureAXIV.get(0).click();
        }
    },
    
    clickClosePopUp: {
        get: function (){
        	return this._closePopUpWindow.get(1).click();
        },
    },
    
    isDisplayedEditorialNoteIconOnDocStructureAXIV: {
        get: function (){
        	this._scrollTo(this._editorialNoteIconOnDocStructureAXIV.get(0));
        	return this._editorialNoteIconOnDocStructureAXIV.get(0).isDisplayed();
        }
    },
    
	clickXEditorSaveButton: {
        get: function (){
        	return this._xEditorSaveButton.click();
        }
    },
    
	writeXEditorTextBox:{
		value: function (value) {
			var self = this;
			return self._xEditorTextBox.clear().sendKeys(value,protractor.Key.ENTER);
		}
	},
	
	modalContentErrorMessage:{
        get : function (){
            return this._modalContentErrorMessage.getText();
        }
    },
    
    clickPrintProductCreateNoteLink: {
        get: function (){
        	return this._printProductCreateNoteLink.click();
        }
    },
    
    clickDigitalProductCreateNoteLink: {
        get: function (){
        	return this._digitalProductCreateNoteLink.click();
        }
    },
    
    clickPublishedInDigitalProductsCheckBox: {
        get: function (){
        	return this._publishedInDigitalProductsCheckBox.click();
        }
    },
    
    clickModalContentOKButton: {
        get: function (){
        	return this._modalContentOKButton.click();
        }
    },
    
	getInternalNoteEditBoxText: {
        get: function (){
        	return this._internalNoteEditTextBox.getText();
        }
    },
    
    isInternalNoteDisplayed:{
		value: function (value) {
			return element(by.xpath('//*[text()=\'Internal Note\']/../..//*[text()=\''+value+'\']')).isDisplayed();
		}
	},
	
	isPrintNoteDisplayed:{
		value: function (value) {
			return element(by.xpath('//*[text()=\'(Print Products)\']/../..//*[text()=\''+value+'\']')).isDisplayed();
		}
	},
	
	isDigitalNoteDisplayed:{
		value: function (value) {
			return element(by.xpath('//*[text()=\'(Digital Products)\']/../..//*[text()=\''+value+'\']')).isDisplayed();
		}
	},
    
    appendToInternalNoteEditBoxText: {
        get: function (appendText){
        	return this._internalNoteEditTextBox.sendKeys(appendText);
        }
    },
    
    writeInternalNoteEditBoxText:{
		value: function (value) {
			var self = this;
			return self._internalNoteEditTextBox.clear().sendKeys(value,protractor.Key.ENTER);
		}
	},
	
       
	_scrollTo: {
		value: function (webelement) {
			// There are some issues with the double scroll when trying to click some elements
			browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
            
		}
	},
	
	closeModalContent: {
        get: function (){
        	this._scrollTo(this._closeModalContent);
        	return this._closeModalContent.click();
        }
    },
    
	isModalContentDisplayed: {
        get: function (){
        	return this._modalContent.isDisplayed().then(function(isdisp){
                 if(isdisp == true){
                     return true;
                 }
             },function(err){
                 return false;
             
             });
        }
    },
    
    isPrintProductsLabelDisplayed: {
        get: function (){
        	return this._printProductsLabel.isDisplayed();
        }
    },
    
    isPrintProductViewAllLinkDisplayed: {
        get: function (){
        	return this._printProductViewAllLink.isDisplayed();
        }
    },
    
    isPrintProductEditLinkDisplayed: {
        get: function (){
        	return this._printProductEditLink.isDisplayed();
        }
    },
    
    clickPrintProductViewAllLink: {
        get: function (){
        	return this._printProductViewAllLink.click();
        }
    },
    
    isDigitalProductsLabelDisplayed: {
        get: function (){
            return this._digitalProductsLabel.isDisplayed();
        }
    },
    
    isDigitalProductViewAllLinkDisplayed: {
        get: function (){
            return this._digitalProductViewAllLink.isDisplayed();
        }
    },
    
    clickDigitalProductViewAllLink: {
        get: function (){
            return this._digitalProductViewAllLink.click();
        }
    },
    
    isInternalNoteLabelDisplayed: {
        get: function (){
            return this._internalNoteLabel.isDisplayed();
        }
    },
    
    isInternalNoteViewAllLinkDisplayed: {
        get: function (){
            return this._internalNoteViewAllLink.isDisplayed();
        }
    },
    
    clickInternalNoteViewAllLink: {
        get: function (){
            return this._internalNoteViewAllLink.click();
        }
    }

});

module.exports = LegislationEditorialNoteSection;