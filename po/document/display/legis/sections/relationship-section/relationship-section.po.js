//var ProductWorkbenchManualCollections = require('./collections-manual.po.js');
var ExpandableToggle = require('../expandable-toggle.po.js');

var LegislationRelationshipSection = function () {
    //this.collections = {};
   //this.collections.manual = new ProductWorkbenchManualCollections();

    this.expandable = new ExpandableToggle('collapsed-relationship-link', 'non-collapsed-relationship-link');

};

LegislationRelationshipSection.prototype = Object.create({}, {


    _buttonAddSingle: {get: function () { return element(by.css('[ng-click="relationshipsSumData.addNewRelationship()"]')); }},
    _buttonAddMultiple: {get: function () { return element(by.css('[ng-click="relationshipsSumData.addRelationshipsGroup()"]')); }},
    _buttonImport: {get: function () { return element(by.css('.col-md-8.right.content-button')); }},
    _viewAll: {get: function () { return element(by.id('relationshipViewAllLink')); }},
    _relationShipWindow: {get: function () { return element(by.css('.marginSides')); }},
    //_showFilters: {get: function () { return element(by.css('[ng-show="!show"]')); }},
    
    _showFilters: {get: function () { return element(by.css('[ng-show="!showFilter"]')); }},
    _unitLevelFeild: {get: function () { return element(by.css('[ng-show="columnVis[1].visible"]')); }},
    _dateFeild: {get: function () { return element(by.model('sourceDate')); }},
    _marginalUnitTable: {get: function () { return element(by.css('.marginal-table-column')); }},
    _marginalDateTable: {get: function () { return element(by.model('$item.selected')); }},
    _newDateFeild: {get: function () { return element(by.model('newDate')); }},
    _sourceIdFeild: {get: function () { return element(by.model('sourceMarginalId')); }},


    _selUnit: {get: function () { return element(by.css('.col-md-8.right.content-button')); }},
    _closeRelationshipWindow: {get: function () { return element(by.model('[ng-model="$item.selected"]')); }},
    _actionDropDown: {get: function () { return element(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')); }},
    _confirmYes: {get: function () { return element(by.css('[ng-click="ok()"]')); }},
    _confirmOk: {get: function () { return element(by.name('btnInfoDialogOk')); }},
    _relationshipErrorMessage: {get: function () { return element(by.name('txtInfoDialog')); }},
    _allCheckBox: {get: function () { return element(by.css('div.wj-colheaders div.wj-cell.wj-header.multi-select input')); }},
    _unCheckBox: {get: function () { return element(by.css('div[wj-part="cells"] div.wj-cell input:last')); }},
    _deleteRelationship: {get: function () { return element(by.css('[id="btn-relationships-remove"]')); }},
    _checkBox: {get: function () { return element(by.model('$item.selected')); }},
    _relationshipTypeField: {get: function () { return element(by.css('[ng-model="typeRelationship"]')); }},
    _consolidationStatus: {get: function () { return element(by.css('[ng-model="spread"]')); }},
    _targetUnitLevelField: {get: function () { return element(by.css('[ng-model="targetBodyUnitLevel"]')); }},
    hasErrorMessage: {
        get: function () {
            return this._errorMessage.isDisplayed();
        }
    },
    
    displayViewAllLink:{
        get: function () {
            return this._viewAll.isDisplayed();
        }
    },
    
    clickCheckBox:{
        get: function () {
            return this._checkBox.click();
        }
    },

    errorMessage: {
        get: function () {
            return this._errorMessage.getText();
        }
    },

    isManualButtonVisible: {
        get: function () {
            return this.collections.manual.hasItems
        }
    },

    buttonAddSingleClick: {
        get: function () {
            return this._buttonAddSingle.click();
        }
    },
    
    buttonAddMultipleClick: {
        get: function () {
            return this._buttonAddMultiple.click();
        }
    },

    buttonImportExist: {
        get: function() {
            return this._buttonImport.getText();
        }
    },

    buttonAddMultipleExist: {
        get: function() {
            return this._buttonAddMultiple.getText();
        }
    },

    buttonAddSingleExist:{
        get:function(){
            return this._buttonAddSingle.getText();
        }
    },
    viewAllLinkClick: {
        get: function () {
            return this._viewAll.click();
        }
    },

    verifyRelationship: {
        get: function () {
            return this._relationShipWindow.getText();
        }
    },
    ClickShowFilters: {
        get: function () {

            return this._showFilters.click();
        }
    },
    EnterValueinUnitLevelFeild: {
        value: function (Text) {
            var self = this;
            self._unitLevelFeild.sendKeys(Text);
            return self._unitLevelFeild.sendKeys(protractor.Key.ENTER);
        }
    },
    
    EnterValueinTargetUnitLevelField: {
        value: function (Text) {
            var self = this;
            self._targetUnitLevelField.sendKeys(Text);
            return self._targetUnitLevelField.sendKeys(protractor.Key.ENTER);
        }
    },
    
    EnterValueInRelationshipTypeField:{
        value: function(text){
            var self = this;
            self._relationshipTypeField.sendKeys(text);
            return self._relationshipTypeField.sendKeys(protractor.Key.ENTER);
        }
    },
    
    SelectConsolidationStatus:{
        value: function(text){
            var self = this;
            return self._consolidationStatus.sendKeys(text);
            //return self._relationshipTypeField.sendKeys(protractor.Key.ENTER);
        }
    },
    HasMarginalUnitTable: {
        get: function () {
            return this._marginalUnitTable.isPresent();
        }
    },
    HasMarginalDateTable: {
        get: function () {
            return this._marginalDateTable.isPresent();
        }
    },
    EnterValueinDateFeild: {
        value: function (Text) {
            var self = this;
            self._dateFeild.sendKeys(Text);
            return self._dateFeild.sendKeys(protractor.Key.ENTER);
        }
    },
    CloseRelationshipWindow: {
        get: function () {

            return this._closeRelationshipWindow.click();
        }
    },
    ClickActionDropDown: {
        get: function () {

            return this._actionDropDown.click();
        }
    },
    ClickDeleteRelationship: {
        get: function () {

            return this._deleteRelationship.click();
        }
    },
    ClickConfirmYes:{
        get: function () {

            return this._confirmYes.click();
        }
    },
    ClickConfirmOk:{
        get: function () {

            return this._confirmOk.click();
        }
    },
    EnterValueinNewDateFeild: {
        value: function (Text) {
            var self = this;
            self._newDateFeild.sendKeys(Text);
            return self._newDateFeild.sendKeys(protractor.Key.ENTER);
        }
    },



    RelationShipErrorMessage: {
        get: function () {

            return this._relationshipErrorMessage;




        }
    },
    SelectAllCheckBox:{
        get: function () {

            return this._allCheckBox.click();
        }
    },
    UnCheckLastCheckBox:{
        get: function () {

            return this._unCheckBox.click();
        }
    },
   

    EnterValueinSourceIdFeild: {
        value: function (Text) {
            var self = this;
            self._sourceIdFeild.sendKeys(Text);
            return self._sourceIdFeild.sendKeys(protractor.Key.ENTER);
        }
    },
    UnCheckAnyCheckBox:{
        get: function () {

            return this._checkBox.click();
        }
    },
    
    displayDelete:{
        get: function () {
            return this._deleteRelationship.isDisplayed();
        }
    },
    
    isDeleteButtonDisabled: {get: function () { return this._deleteRelationship.getAttribute('disabled').then(function (disabled) { return disabled == null; }); }},
    
    isDeleteButtonEnable: {
		get: function () {
			return this._deleteRelationship.isEnabled();
		}
	},
    
    DeleteAllRelationShipAll: {
        get: function(){
            browser.executeScript('document.getElementById("btn-relationships-remove").disabled=false;', '');
            return browser.executeScript('document.getElementById("btn-relationships-remove").click();', '');
            //return this._deleteRelationship.click();
        }
    },
 rightpanelTabs:{get: function () { return element.all(by.css('a[ng-click="select()"]')); }},
   _RelationIcon:{get: function () { return element.all(by.css('.dropdown-toggle.plain-text')).get(1).element(by.css('div.icon-analysis.icon-relationships-position-no-consolidation')); }},
   _optionRelationAll:{get: function () { return element(by.css('a[ng-click="structureCtrl.viewRelationShipAllNoConsolidate(false,node)"]')); }},
   //_optionEffectiveness:{get: function () { return element(by.css('a[ng-click^="structureCtrl.viewRelationShipTypeNoConsolidate"]')); }},
    optionFilter:{get: function () { return element.all(by.css('a[ng-click^="structureCtrl.viewRelationShipType"]')); }},
  
clickrightpanelTabs:{
    value:function (element,value) {
    'use strict';
    //Select all context index elements and apply filter function
    element.filter(function (elem) {
	//Return the element or elements
        return elem.getText().then(function (text) {
	    //Match the text
            return text === value;
        });
    }).then(function (filteredElements) {
	//filteredElements is the list of filtered elements
        return filteredElements[0].click();
		browser.sleep(20000);
    });
    }
},
	ClickRelationIcon:{
        get: function () {

            return this._RelationIcon.click();
        }
    },
	ClickoptionRelationAll:{
        get: function () {

            return this._optionRelationAll.click();
        }
    },
	ClickoptionEffectiveness:{
        get: function () {

            return this._optionEffectiveness.click();
        }
    },
	//Table view test case
	relationshipType:{get: function () { return element.all(by.css('[ng-click^="relationshipsSumData.viewRelationShip"]')); }},
	Tablecount:{
		get:function () {
	return element.all(by.css('[wj-part="cells"]>div[data-column="0"]')).filter(function(elem, index) {
  
		return true;
            
}).count();
		}
	},
clickrelationshipType:{
    value:function (element,value) {
    'use strict';
    //Select all context index elements and apply filter function
    element.filter(function (elem) {
	//Return the element or elements
        return elem.getText().then(function (text) {
	    //Match the text
            return text === value;
        });
    }).then(function (filteredElements) {
	//filteredElements is the list of filtered elements
        return filteredElements[0].click();
		//browser.sleep(20000);
    });
    }
},
 _downarrowButton:{get: function () { return element(by.id('relaTypeDrop')).element(by.css('a[name="lnkSearchDropdownNav"]')); }},
 _downarrowcodeButton:{get: function () { return element(by.id('relaDataNMPDrop')).element(by.css('a[name="lnkSearchDropdownNav"]')); }},

	ClickdownarrowButton:{
        get: function () {

            return this._downarrowButton.click();
        }
    },
	ClickdownarrowforcodeButton:{
        get: function () {

            return this._downarrowcodeButton.click();
        }
    },

_relationshiptypefromPopup:{get: function () { return element(by.id('relaTypeDrop')).element(by.css('input[ng-model="searchtext"]')); }},
_relationshipcodefromPopup:{get: function () { return element(by.name('afectado.marginal.tipo')); }},
	
	
  EnterrelationshiptypefromList: {
        value: function (Text) {
            var self = this;
            self._relationshiptypefromPopup.sendKeys(Text);
            return self._relationshiptypefromPopup.sendKeys(protractor.Key.ENTER);
        }
    },	
  EnterrelationshipcodefromList: {
        value: function (Text) {
            var self = this;
            self._relationshipcodefromPopup.sendKeys(Text);
            return self._relationshipcodefromPopup.sendKeys(protractor.Key.ENTER);
        }
    },
	_year:{get: function () { return element(by.css('input[name="afectado.marginal.ano"]')); }},
	_number:{get: function () { return element(by.css('input[name="afectado.marginal.numero"]')); }},
 
	Enteryear: {
        value: function (Text) {
            var self = this;
            return self._year.sendKeys(Text);
            
        }
    },
	Enternumber: {
        value: function (Text) {
            var self = this;
            return self._number.sendKeys(Text);
            
        }
    },
    
    getAddButtonCaption: {get: function () { return  element(by.css('[id="btn-relationships-addSingle"]')).getText(); }},
    
    //getImportButtonCaption: {get: function () { return  element(by.css('[ng-click="import()"]')).getText(); }},
    
    getAllFiltersButtonCaption: {get: function () { return  element(by.css('[ng-show="!showFilter"]')).getText(); }},
    
    
    
    getCountOfRows: {
        get: function () {
            return element.all(by.css('[wj-part="cells"]>div')).count().then(function(c){
                return c;
            });
        }
    },
    
    _closeButton:{get: function () { return element(by.css('[ng-click="close()"]')); }},
	
	clickCloseButton:{
        get: function () {
            return this._closeButton.click();
        }
    },
    

});

module.exports = LegislationRelationshipSection;