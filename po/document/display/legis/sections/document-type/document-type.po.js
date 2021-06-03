var ExpandableToggle = require('../expandable-toggle.po.js');
var collctiveagreementSection= require('../../../../edition/legis/sections/collective-agreement/collective-agreement.po.js');
var LegislationDocumentTypeSection = function () {
    this.expandable = new ExpandableToggle('linkUncollapseGeneralDataSection', 'linkCollapseGeneralDataSection');
    this.expandableEdit = new ExpandableToggle('linkUncollapseGeneralDataSection', 'linkCollapseGeneralDataSection');
    //this.DocTypeCollctive= new  collctiveagreementSection();
    this.DocTypeCollctive= collctiveagreementSection;
};

LegislationDocumentTypeSection.prototype = Object.create({}, {
    _scrollTo: {
        value: function (webelement) {
            // There are some issues with the double scroll when trying to click some elements
            browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
        }
    },
    title: {
        get: function () {
            return browser.getTitle();
        }
    },
    _documentType: {
        get: function () {
            return element(by.css('[id="textDocumentTypeValueGeneralDataSection"][ng-bind="generalDataController.model.data.document.tipoDisposicion.description"]'));
        }
    },
    _secondLanguagedropDropdown:{
        get: function () {
            return element.all(by.css('select[ng-model="language.idLang"]')).get(1);
        }
    },
    _selectLanguage:{
        get: function (){
            return element.all(by.repeater('language in generalDataController.model.data.document.languages')).last().all(by.css('option[ng-repeat="item in generalDataController.languagesList"]')).last();
        }
    },
    selectlanguage: {
        get: function () {
            return  element.all(by.repeater('language in generalDataController.model.data.document.languages')).last().element(by.css('select[ng-model="language.idLang"]'))

        }
    },

    clickselectLanguage:{
        get: function () {
            return this._selectLanguage.click();
        }

    },
    clicksecondLanguagedropDropdown:{
        get: function () {
            return this._secondLanguagedropDropdown.click();
        }
    },
    _documentTypeEdit: {
        get: function () {
            return element(by.binding('DocumentType.title.documentType'));
        }
    },
    _documentTypeEditvalue: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.subTypes')).get(3);
        }
    },
    _errormessage:{
        get: function () {
            return element(by.css('div.modal-body.modal-confirm-body'))

        }
    },
    //only one value in dropdown list
    _gulfdocumentTypeEditvalue: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.subTypes')).get(0);
        }
    },
    _brdocumentTypeEditvalue: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.subTypes')).get(1);
        }
    },
    _baseLanguage: {
        get: function () {
            return element(by.id('textBaseLanguagueValueGeneralDataSection'));
        }
    },
    _officialLanguageTag: {
        get: function () {

            return element(by.css("span[id^=textLenguagueOfficialValueGeneralDataSection]"));
        }
    },
    _officialLanguageCheckBox:{
        get: function(){
            return element(by.css('label[for^="red-checkbox-input-general-data"]'));
        }
    },
    _isofficialLanguageCheckBox:{
        get: function(){
            return element(by.css('input[ng-model="language.oficial"]'));
        }
    },
    isofficialLanguageCheckBox:{
        get: function(){
            return this._isofficialLanguageCheckBox.isSelected();
        }
    },
    clickofficialLanguageCheckBox:{
        get: function(){
            return this._officialLanguageCheckBox.click();
        }
    },
    clickofficialLanguageTag:{
        get:function (){
            return this._officialLanguageTag.click();
        }
    },

    _OfficiallanguageEditPage: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.languagesList')).get(7);
        }
    },
    _OfficiallanguageEditPage1: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.languagesList')).get(7);
        }
    },

    _GulfofficiallanguageEditPage1: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.languagesList')).get(13);
        }
    },
    _languages: {
        get: function () {
            return element.all(by.repeater('language in generalDataController.model.data.document.languages'));
        }
    },
    //add or create a document in docment type section
    _DocTypeAddButton: {
        get: function () {
            return element.all(by.id('btnAddfixSection')).get(1);
        }
    },
    _DocTypeCopyButton: {
        get: function () {
            return element.all(by.id('btnCopyfixSection'));
        }
    },
    _NewDocPopup: {
        get: function () {
            return element(by.css('span[ng-if="isAddMode()"]'));
        }
    },
    _CopyDocPopup: {
        get: function () {
            return element(by.css('span[ng-if="!isAddMode()"]'));
        }
    },
    _code: {
        get: function () {
            return element(by.model('inputLabel'));
        }
    },
    /*_calculatebutton: {
     get: function () {
     return element(by.css('#contentFormAdDocument')).
     ;
     }
     },*/
    _calculatebutton:{get: function (){return element(by.id('validation-id'));}},
    clickcalculate:{
        get : function (){
            return this._calculatebutton.click();
        }
    },
//clickcalculate: {get: function () { return browser.executeScript('return document.getElementById(\'validation-id\').click();',''); }},

    _add: {
        get: function () {
            return element(by.css('button[translate="Common.Add"]'));
        }
    },
    _copyButton: {
        get: function () {
            return element(by.css('button[translate="Common.Copy"]'));
        }
    },
    _deletelanguage:{
        get: function (){
            return element.all(by.repeater('language in generalDataController.model.data.document.languages')).last().element(by.css('[ng-click="generalDataController.removeLanguage(language)"]'));
        }
    },
    clicksecondlanguage:{
        get: function () {
            return this._deletelanguage.click();
        }
    },
    hassecondlanguage:{
        get: function () {
            return this._deletelanguage.isPresent();
        }
    },
    legistypevalue: {
        get: function () {
            return element.all(by.css('li[ng-click="onItemClick($index)"]'));
        }
    },

    //_languages: {get: function () { return element.all(by.repeater('language in generalDataController.model.data.document.languages')); }},
    _addnewlanguage: {
        get: function () {
            return element(by.id('btn-plus'))
        }
    },
    _baseLanguageEditPage: {
        get: function () {
            return element.all(by.repeater('item in generalDataController.languagesList')).get(13);
        }
    },
    //gluf base language 
    _baseLanguageEditPage1: {
        get: function () {
            return element.all(by.id('textBaseLanguagueValueGeneralDataSection'));
        }
    },

    _Jurisdiction: {
        get: function () {
            return element(by.css('span[ng-bind="generalDataController.model.data.document.ambito.description"]'));

        }
    },
    _JurisdictionEdit: {
        get: function () {
            return element(by.css('div[model^="generalDataController.model.data.document.ambito"]'))
        }
    },

    documentType: {
        get: function () {
            return this._documentType.getText();
        }
    },
    documentTypeEditvalue:{
        get: function () {
            return this._documentTypeEditvalue.getText();
        }
    },
    gulfdocumentTypeEditvalue:{
        get: function () {
            return this._gulfdocumentTypeEditvalue.getText();
        }
    },
    brdocumentTypeEditvalue:{
        get: function () {
            return this._brdocumentTypeEditvalue.getText();
        }
    },
    baseLanguage: {
        get: function () {
            return this._baseLanguage.getText();
        }
    },
    officialLanguage: {
        get: function () {
            return this._officialLanguageTag.getText();
        }
    },
    Jurisdiction: {
        get: function () {
            return this._Jurisdiction.getText();
        }
    },

    baseLanguageEditPage: {
        get: function () {
            return this._baseLanguageEditPage.getText();
        }
    },
    baseLanguageEditPage1: {
        get: function () {
            return this._baseLanguageEditPage1.getText();
        }
    },
    OfficiallanguageEditPage1: {
        get: function () {
            return this._OfficiallanguageEditPage1.getText();
        }
    },
    GulfofficiallanguageEditPage1: {
        get: function () {
            return this._GulfofficiallanguageEditPage1.getText();
        }
    },
    JurisdictionDisplay: {
        get: function () {
            return this._Jurisdiction.getText();
        }
    },
    JurisdictionEdit: {
        get: function () {
            return this._JurisdictionEdit.getText();
        }
    },
    errormessage:{
        get: function (){
            return this._errormessage.getText();
        }
    },
    hasDocumentTypeEditvalue:{
        get: function () {
            return this._documentTypeEditvalue.isDisplayed();
        }
    },
    hasOfficialLanguage: {
        get: function () {
            return this._officialLanguageTag.isDisplayed();
        }
    },
    hasOfficiallanguageEditPage: {
        get: function () {
            return this._OfficiallanguageEditPage.isDisplayed();
        }
    },
    hasOfficiallanguageEditPage1: {
        get: function () {
            return this._OfficiallanguageEditPage1.isDisplayed();
        }
    },
    hasLanguage: {
        value: function (languageToCheck) {
            return this.languages.then(function (languageNames) {
                return languageNames.indexOf(languageToCheck) >= 0;
            })
        }
    },
    hasaddnewlanguage: {
        get: function () {
            return this._addnewlanguage.isDisplayed();
        }
    },

    languages: {
        get: function () {
            return this._languages.getText().then(function (languageNames) {
                var array = [];
                for (var i = 0; i < languageNames.length; i++) {
                    //array.push(languageNames[i].replace(/\s*Oficial/g, ""));
                    //array.push(languageNames[i].replace(/\s*Oficial/g, ""));

                    array.push(languageNames[i].replace(/\s*Official/g, ""));

                }
                return array;
            })
        }
    },

    languagesQuantity: {
        get: function () {
            return this._languages.count();
        }
    },
    clickDocTypeAddButton: {
        get: function () {
            return this._DocTypeAddButton.click();
        }
    },
    clickDocTypeCopyButton: {
        get: function () {
            return this._DocTypeCopyButton.click();
        }
    },

    selectcode: {
        get: function () {
            var self = this;
            self._scrollTo(self._code);
            return self._code.click().then(function () {
                return self.legistypevalue.click();
            });
        }
    },
    selectLanguage: {
        value: function (value) {
            var self = this;
            self._scrollTo(self._selectLanguage);
            return self._selectLanguage.sendKeys(value);
        }
    },
    clickadd: {
        get: function () {
            return this._add.click();
        }
    },
    clickCopyButton: {
        get: function () {
            return this._copyButton.click();
        }
    },
    /*clickcalculate: {
     get: function () {
     this._scrollTo(this._calculatebutton);
     return this._calculatebutton.click();
     }
     },*/
    clickaddnewlanguage:{
        get: function () {
            return this._addnewlanguage.click();
        }
    },

    hasDocTypeAddButton: {
        get: function () {
            return this._DocTypeAddButton.isDisplayed();
        }
    },
    hasDocTypeCopyButton: {
        get: function () {
            return this._DocTypeCopyButton.isDisplayed();
        }
    },
    hasNewDocPopup: {
        get: function () {
            return this._NewDocPopup.isDisplayed();
        }
    },
    hasCopyDocPopup: {
        get: function () {
            return this._CopyDocPopup.isDisplayed();
        }
    },
    hasJurisdiction: {
        get: function () {
            return this._Jurisdiction.isDisplayed();
        }
    },
    hasJurisdictionEdit: {
        get: function () {
            return this._JurisdictionEdit.isDisplayed();
        }
    },
    hasDocumentTypeEdit: {
        get: function () {
            return this._documentTypeEdit.isDisplayed();
        }
    },
    
    clickMenu: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="all"]/header/div/div/div[2]/span[3]/a[1]/span[2]')).click();
        }
    },
  selectLangaugeEnglish: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="all"]/header/div/div/div[2]/span[3]/ul/li[1]/a')).click();
        }
    },
    
    selectLangaugeSpanish: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="all"]/header/div/div/div[2]/span[3]/ul/li[2]/a')).click();
        }
    },
    
    selectLangaugePortuguese: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="all"]/header/div/div/div[2]/span[3]/ul/li[3]/a')).click();
        }
    },
   displayDocumentType: {
        get: function () {
            
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[2]/div[1]')).isDisplayed();
        }
    },
    displayBaseLangauge: {
        get: function () {
            return element(by.id('textBaseLanguagueValueGeneralDataSection')).isDisplayed();
        }
    },
    displayLangauge: {
        get: function () {
            return element(by.css('[ng-repeat="language in generalDataController.model.data.document.languages"]')).isDisplayed();
        }
    },
    displayJurisdiction : {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[5]/div[1]/span')).isDisplayed();
        }
    },
    
    displayOfficialLangague:{
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[3]/div[2]')).isDisplayed();
        }
    },
    
    displayOfficial:{
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div/div[2]/div[2]/span')).isDisplayed();
        }
    },
    
    clickLangagaue:{
        get: function () {
            return browser.element(by.xpath('.//*[@id="btn-plus"]')).click();
        }
    },
    
    displaySecondLangagaue:{
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[1]/select')).isDisplayed();
        }
    },
    
    clickEdit:{
        get: function () {
            return browser.executeScript('return document.getElementById(\'btnGoToEditMode\').click();','');
        }
    },
    
 expandGeneralData: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[1]/div[1]')).click();
        }
    },
    
    displayDocumentTypeText: {
        get: function () {
            
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[2]/div[1]/span')).getText();
        }
    },
    displayBaseLangaugeText: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[3]/div[1]/span')).getText();
        }
    },
    displayLangaugeText: {
        get: function () {
            return browser.element(by.css('[ng-if="$first"]')).getText();
        }
    },
    displayJurisdictionText: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[5]/div[1]/span')).getText();
        }
    },
    
    selectLangauge: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[1]/select/option[1]')).sendKeys("A");
        }
    },
    
    clickListLangauge: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[1]/select/option[1]')).click();
        }
    },
    
    _saveButtonClick: {get: function () {  
                     return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();',''); }},
    
    Save: {
		get: function () {
			var self = this;
			return self._saveButtonClick.then(function () {
				//return self._confirmSaveButton.click().then(function () {
					//return new LegislationDocumentDisplayPage();
				});
			}
		},
       
    clickCheckBoxLangauge: {
        get: function () {
            return browser.element(by.id('red-checkbox-input-general-data-1')).click();
        }
    },
    
    deleteLangauge: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[2]/a/i')).click();
        }
    },
    
    deleteLangaugeNotDisplayed: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[1]')).isDisplayed();
        }
    },
	
    clickListJurisdiction: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[5]/div[2]/div/div[1]/a')).click();
        }
    },
    
     selectJurisdiction: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[5]/div[2]/div/div[1]/a')).sendKeys("A");
        }
    },
    
    clickBaseLanguage: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[3]/div[2]/select')).click();
        }
    },
    
     selectBaseLanguage: {
        get: function () {
            return browser.element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[3]/div[2]/select')).sendKeys("A");
        }
    },
});

module.exports = LegislationDocumentTypeSection;