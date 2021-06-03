var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var LegislationDateInForceSection = function () {
this.expandable = new ExpandableToggle('linkUncollapseValidityDataSection', 'linkCollapseValidityDataSection');
};

LegislationDateInForceSection.prototype = Object.create({}, {
    
   

	_DateForce:{get: function () { return element(by.binding('Validity.title.dateForce')); }},
	_EffectiveType: {get: function () {return element(by.binding('Validity.title.effectiveType'));}},
	_IneffectiveDate:{get: function () {return element(by.binding('Validity.title.ineffectiveDate'));}},
	_ineffectiveNote:{get:  function () {return element(by.binding('Validity.title.ineffectiveNote'))}},
    _dateCalculator:{get:  function () {return element(by.css('[ng-click="sectionValidityController.calculateDate()"]'))}},
    

	
    isVisibleEffectiveType:  {get: function () { return this._EffectiveType.isPresent();}},
    isVisibleDateForce:  {get: function () { return this._DateForce.isPresent();}},
    isVisibleIneffectiveDate:  {get: function () { return this._IneffectiveDate.isPresent();}},
    isVisibleineffectiveNote:  {get: function () { return this._ineffectiveNote.isPresent();}},
    isVisibleDateCalculator:  {get: function () { return this._dateCalculator.isPresent();}},
    
    //added by Punit Joshi - 23/05/2016
    
    _DateForceNew:{get: function () { return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')); }},
	_EffectiveTypeNew: {get: function () {return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.temporalidad.code"]'));}},
	_IneffectiveDateNew:{get: function () {return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [id="inoperateDate"]'));}},
	_ineffectiveNoteNew:{get:  function () {return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]'));}},
    _dateCalculatorNew:{get:  function () {return element(by.css('[ng-click="sectionValidityController.calculateDate()"]'))}},
    
    
	
    isVisibleEffectiveTypeNew:  {get: function () { return this._EffectiveTypeNew.isDisplayed();}},
    isVisibleDateForceNew:  {get: function () { return this._DateForceNew.isDisplayed();}},
    isVisibleIneffectiveDateNew:  {get: function () { return this._IneffectiveDateNew.isDisplayed();}},
    isVisibleineffectiveNoteNew:  {get: function () { return this._IneffectiveDateNew.isDisplayed();}},
    isVisibleDateCalculatorNew:  {get: function () { return this._dateCalculatorNew.isDisplayed();}},
    
    setEffectiveTypeToBlank:{get: function () {
        return this._EffectiveTypeNew.click().then(function(){
            return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.temporalidad.code"]>option')).click();
        }); 
    }},
    
    
    
    changeAndVerifyEffectiveType:{get: function () {
        return this._EffectiveTypeNew.click().then(function(){
            return element(by.css('[ng-repeat="type in sectionValidityController.effectiveTypesList"][ng-selected="false"]')).click();
        }); 
    }},
    
	changeInEffectiveNote: {get: function () {
        return this._ineffectiveNoteNew.clear().then(function(){
            return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]')).sendKeys('This is for testing');
        });
         
    }},
    
    enterIneffectiveNote:{value: function (note) {
        return this._ineffectiveNoteNew.clear().then(function(){
            return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]')).sendKeys(note);
        });
         
    }},
    
    changeIneffectiveType:{value: function (ineffectivetypeoptions) {
        return this._EffectiveTypeNew.click().then(function(){
            return element.all(by.css('[ng-repeat="type in sectionValidityController.effectiveTypesList"]')).filter(function(elem, index){
            return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
                //return txt.indexOf(code,0)!=-1;
                
                return (txt<ineffectivetypeoptions?false:(txt>ineffectivetypeoptions?false:true));
            });
            
        }).first().click();
        }); 
         
    }},
    
    enterdateIntoIneffectiveDate:{get: function () {
        
        return this._IneffectiveDateNew.sendKeys('01/01/2016');
       
    }},
    
    changeInDateInForce:{value: function (dt) {
        return this._DateForceNew.clear().then(function(){
            return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')).sendKeys(dt);
        });
         
    }},
    
    getValueOfDateInForce:{get: function () {
        
        return element(by.id('textDateForceValueValidityDataSection')).getText();
       
    }},
    
    _saveButton: {get: function () { return element(by.id('btnSaveDocument')); }},
    
    clickSaveBtn: {get: function () {
        
        return this._saveButton.click();
       
    }},
    
     _savePopup: {get: function () { return element(by.id('btnConfirmationDialogAccept')); }},
    
    clickSavePopup:{get: function () {
        
        return this._savePopup.click();
       
    }},
    
    
    
    
    
    getMessageOnPriorDateInForce: {get: function () {
        
        return element.all(by.css('[ng-repeat="item in messages"]')).get(0).getText();
       
    }},
    
      _dateCalculator: {get: function () { return element(by.xpath('.//*[@id="content-section"]/div[8]/div/div[2]/div[2]/div[2]/a/span')); }},
    
    clickonDateCalculator:{get: function () {
        
        return this._dateCalculator.click();
       
    }},
    
     _radioButton: {get: function () { return element(by.xpath('.//*[@id="body"]/div[1]/div/div/section/div[4]/div[3]/label/input')); }},
    
    isRadioButtonSelected:{get: function () {
        
        return this._radioButton.isSelected();
       
    }},
    
    _closePopup: {get: function () { return element(by.css('.bento-icon-close-x')); }},
    
    clickonClosepopup:{get: function () {
        
        return this._closePopup.click();
       
    }},
    
     _originalData: {get: function () { return element(by.css('[ng-model="date"]')); }},
    
    getOriginalDate:{get: function () {
        
        return this._originalData.getText();
       
    }},
    
     _monthRadioButton: {get: function () { return element(by.xpath('.//*[@id="body"]/div[1]/div/div/section/div[3]/div[2]/label/input')); }},
    
    clickonMonthRadioButton:{get: function () {
        
        return this._monthRadioButton.click();
       
    }},
    
    _dateRadioButton: {get: function () { return element(by.xpath('.//*[@id="body"]/div[1]/div/div/section/div[4]/div[2]/label/input')); }},
    
    clickonDateRadioButton:{get: function () {
        
        return this._dateRadioButton.click();
       
    }},
    
     _calculate: {get: function () { return element(by.css('.btn.grey-button.btn-default.btn-header.btn-padding.float-right.ng-binding')); }},
    
    clickCalculateButton:{get: function () {
        
        return this._calculate.click();
       
    }},
    
     _setDateButton: {get: function () { return element(by.css('.btn.orange-button.btn-header.btn-padding.btn-save-color.ng-scope')); }},
    
    clickSetDateButton:{get: function () {
        
        return this._setDateButton.click();
       
    }},
    
     _newDate: {get: function () { return element(by.css('[ng-model="date"]')); }},
    
    getNewDate:{get: function () {
        
        return this._newDate.getText();
       
    }},
    
});

module.exports = LegislationDateInForceSection;