//var ProductWorkbenchManualCollections = require('./collections-manual.po.js');
var ExpandableToggle = require('../expandable-toggle.po.js');

var LegislationRelationshipSection = function () {
  
    this.expandable = new ExpandableToggle('collapsed-relationship-link', 'non-collapsed-relationship-link');

};

LegislationRelationshipSection.prototype = Object.create({}, {


    _buttonAddSingle: {get: function () { return element(by.css('[ng-click="relationshipsSumData.addNewRelationship()"]')); }},
    _buttonAddMultiple: {get: function () { return element(by.css('[ng-click="relationshipsSumData.addRelationshipsGroup()"]')); }},
    _buttonImport: {get: function () { return element(by.css('.col-md-8.right.content-button')); }},
    _viewAll: {get: function () { return element(by.id('relationshipViewAllLink')); }},
    _relationShipWindow: {get: function () { return element(by.css('.marginSides')); }},
    _showFilters: {get: function () { return element(by.css('[ng-show="!show"]')); }},
    _unitLevelFeild: {get: function () { return element(by.css('[ng-show="columnVis[1].visible"]')); }},
    _dateFeild: {get: function () { return element(by.model('sourceDate')); }},
    _marginalUnitTable: {get: function () { return element(by.css('.marginal-table-column')); }},
    _marginalDateTable: {get: function () { return element(by.model('$item.selected')); }},

    _selUnit: {get: function () { return element(by.css('.col-md-8.right.content-button')); }},
    _closeRelationshipWindow: {get: function () { return element(by.model('[ng-model="$item.selected"]')); }},
    _actionDropDown: {get: function () { return element(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')); }},
    _deleteRelationship: {get: function () { return element(by.css('[ng-click="deleteRelationship($item.idRelacion)"]')); }},
    _confirmYes: {get: function () { return element(by.css('[ng-click="ok()"]')); }},
    _confirmOk: {get: function () { return element(by.name('btnInfoDialogOk')); }},
    
    //GCMS 1.0 Test Objects
    _relationshiplist: {get: function () { return element(by.id('btnRelationshipList')); }},
    //_relationtext:{get: function () { return element(by.id('relacion.datosRelacion.tipoRelacion.description')); }},
    _searchrelationship:{get: function () { return element(by.id('txtPattern')); }},
    _searchButton:{get: function () { return element(by.id('btnSearch')); }},
    _selectrelationship:{get: function () { return element(by.id('sel1')); }},
     _relationship:{get: function () { return element(by.id('relacion.datosRelacion.tipoRelacion.description')); }},
    _code:{get: function () {return element(by.css('.dropnav-input.ng-pristine.ng-invalid.ng-invalid-required')).get(1) }},
    _year:{get: function () {return element(by.name('.font-size-1-3em.relaDataInput.ng-pristine.ng-invalid.ng-invalid-required'));}},
    _num:{get: function () {return element(by.name('.font-size-1-3em.relaDataInput.ng-pristine.ng-invalid.ng-invalid-required')).get(1) }},
    _selectunit:{get: function () {return element(by.id('btnSelUnit'));}},
    _unitvalue: {get: function () { return element(by.cssContainingText('A.18.BIS')); }},
    _ok:{get: function () {return element(by.id('btnOk'));}},
    _goback:{get: function () {return element(by.id('btnGoBack'));}},
       
    _consolidationsview:{get: function () { return element(by.css('[ng-click^="relationshipsSumData.viewRelationShipType"]'))}},
      _annotationsview:{get: function () { return element(by.css('[ng-click=" relationshipsSumData.viewRelationShipType("annotations")"]'))}},
       
_Affectedcode: {get :function () { return element(by.name('relacion.afectado.marginal.descripcionNmp'))}},
_Affectedyear: {get :function () { return element(by.id('afectado_nma'))}},
_Affectednum: {get :function () { return element(by.id('afectado_nmn'))}},
_Unitidentifercode: {get :function() { return element(by.id('relacion.afectado.unidad.precu'))}},
_newunitcode: {get :function() { return element(by.id('relacion.nuevo.nuevaUnidad.precu'))}},
 _newunitpart: {get :function() { return element(by.id('relacion.nuevo.nuevaUnidad.precpDesc'))}},
_Unitidentiferpart: {get :function() { return element(by.id('afectado_precpDesc'))}},
_greenicon:{get :function () { return element(by.id('botonGuardar'))}},
 _selectunitlistvalue:{get : function () { return element.all(by.css('span.feact')).get(0)}},
_relationshipData:{get :function () { return element(by.id('relacion.datosRelacion.tipoRelacion.description'))}},
_relationshipviewall:{get : function (){return element(by.id('relationshipViewAllLink'))}},
_addmultipuleButton:{get: function(){return element(by.css('[ng-click="addRelationshipsGroup()"]')) }},
    _relationshipTable:{get: function(){ return element(by.css('button[ng-click="close()"]'))}},
 _deleteAllRelationship: {get: function () { return element(by.id('btn-relationships-remove')) }},
   _Higherlevel:{get:function (){return element(by.id('relacion.afecta.unidad.precs'))}},
    _scrollTo: {
        value: function (webelement) {
            // There are some issues with the double scroll when trying to click some elements
            browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
        }
    },
    _relationshipcheckbox:{get: function(){ return element.all(by.css('input[type="checkbox"]')).get(5)}},
    
    clickrelationshipcheckbox:{
        get: function(){
            return this._relationshipcheckbox.click();
        }
    },
    hasrelationshipcheckbox:{
        get:function(){
             return this._relationshipcheckbox.isDisplayed();
        }
    },
    clickrelationshipTable:{
    get: function(){
        
        return this._relationshipTable.click();
    }
},
    clickaddmultipuleButton:{
    get: function (){
            //this._scrollTo(this._relationshipviewall);
            return this._addmultipuleButton.click();
        }
       
   },
    hasaddmultipuleButton: {
        get: function () {
            return this._addmultipuleButton.isDisplayed();
        }
    },
    Affectedcode:{
          value: function (value) {
	      this._Affectedcode.clear();
           
            return this._Affectedcode.sendKeys(value);
										
		}
     },
Affectedyear:{
          value: function (value) {
	     this._Affectedyear.clear();
            return this._Affectedyear.sendKeys(value);
										
		}
     },
         Affectednum:{
          value: function (value) {
		    this._Affectednum.clear();
            return this._Affectednum.sendKeys(value);
										
		}
     },
    Affectedunitidentifercode:{
          value: function (value) {
		this._Unitidentifercode.clear();
            return this._Unitidentifercode.sendKeys(value);
										
		}
     },
    
          Affectedunitidentiferpart:{
          value: function (value) {
		   this._Unitidentiferpart.clear();
            return this._Unitidentiferpart.sendKeys(value);
										
		}
     },
    
    NewunitCodeIdentifier:{
          value: function (value) {
		this._newunitcode.clear();
            return this._newunitcode.sendKeys(value);
										
		}
     },
    NewunitpartIdentifier:{
          value: function (value) {
		this._newunitpart.clear();
            return this._newunitpart.sendKeys(value);
										
		}
     },
    Affectedrelationshipdata:{
          value: function (value) {
		  this._relationshipData.clear();
            return this._relationshipData.sendKeys(value);
										
		}
     },
  
     Higherlevel:{
          value: function (value) {
		  this._Higherlevel.clear();
            return this._Higherlevel.sendKeys(value);
										
		}
     },
    clickgreenicon:{
          get: function () {
		
            return this._greenicon.click();
										
		}
     },
    clickselectunitlistvalue:{
       get: function () {
		
            return this._selectunitlistvalue.click();
										
		}
     },
  
     getconsolidationsview:{
       get: function (){
            this._scrollTo(this._consolidationsview);
            return this._consolidationsview.getText();
        }
       
   },
       getannotationsview:{
       get: function (){
            this._scrollTo(this._annotationsview);
            return this._annotationsview.getText();
        }
       
   },
      getrelationshipviewall:{
       get: function (){
            this._scrollTo(this._relationshipviewall);
            return this._relationshipviewall.getText();
        }
       
   },
   clickrelationshipviewall:{
       get: function (){
           
            //this._scrollTo(this._relationshipviewall);
            //return viewAllLink.click();
            return this._relationshipviewall.click();
        }
       
   },
     clickrelationlist:{
         get: function (){
             return this._relationshiplist.click();
         }
     },
    clickselectunit:{
         get: function (){
             return this._selectunit.click();
         }
     },
    clickunitvalue:{
         get: function (){
             return this._unitvalue.click();
         }
    },
    clickok:{
        get: function (){
             return this._ok.click();
         }
    },
    clickgoback:{
        get: function (){
             return this._goback.click();
         }
    },
    searhrelationshiptext:{
       value: function (value) {
		
            return this._searchrelationship.sendKeys(value);
										
		}
     },
     relationshiptext:{
       value: function (value) {
		
            return this._relationship.sendKeys(value);
										
		}
     },
     code:{
          value: function (value) {
		
            return this._code.sendKeys(value);
										
		}
     },
     year:{
          value: function (value) {
		
            return this._year.sendKeys(value);
										
		}
     },
    num:{
          value: function (value) {
		
            return this._num.sendKeys(value);
										
		}
     },
    clicksearchButton:{
        get: function (){
            return this._searchButton.click();
        }
    },
    clickselectrelationshipLink:{
        get: function (){
            return this._selectrelationship.click();
        }
    },
    //End of the GCMS 1.0 Objects
    hasErrorMessage: {
        get: function () {
            return this._errorMessage.isDisplayed();
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
    
    clickDelete:{
        get: function () {
            return this._deleteAllRelationship.click();
        }
    },
    displayDelete:{
        get: function () {
            return this._deleteRelationship.isDisplayed();
        }
    },
    
    relationshipType:{
        value: function (value) {
			var self = this;
			return self.clickRelationshipType.then(function () {
                self._scrollTo(self._dropdownSearch);
                browser.driver.actions().mouseUp(self._dropdownSearch).perform();
				return self._dropdownSearch.sendKeys(value).then(function () {
                  return self.searchButtonType.click().then(function () {
                      
                      
                  });
                });
                
            });
            
        }
        
    },
    
    
        
        isNewlyAddedRelation: { get: function () { return element(by.css('div div.relationshipsCollector.ng-scope div#relationshipsCollectorContainer.ng-scope div.bento-flex-grid.ng-isolate-scope.wj-control.wj-flexgrid.wj-content')).isPresent(); }
            
        },
        
        searchButtonType: {get: function () { return element(by.css('div ul li div span button.btn.btn-default')); }},
    
    _dropdownSearch: {get: function () { return element(by.css('div ul li div input.form-control.ng-pristine.ng-valid.has-visited')); }},
    
    _relationshipType: {get: function () { return element(by.css('.dropnav-input.ng-pristine.ng-invalid.ng-invalid-required')).get(0) }},
    
    //_relationshipType: {get: function () { return element(by.css('header.modal-header.header-orange div.inline-block.float-right a.resize-icon.decoration-none i.gcms2-minus')); }},
    
    clickRelationshipType:{
        get: function () {
            return this._relationshipType.click();
        }
    },
    
    _addButton: {get: function () { return element(by.css('.btn.orange-button.btn-header.btn-padding.btn-save-color.ng-scope.ng-binding')); }},
    
    clickAddButton:{
        get: function () {
            return this._addButton.click();
        }
    },
    
    _relationshipTab: {get: function () { return element(by.css('RelationshipsAddModalCtrl.closeConfirmationModal')).get(1) }},
    
    closeRelationshiptab:{
        get: function () {
            return this._relationshipTab.click();
        }
    },
    
  /*  _Note: {get: function () { return element.all(by.css('div div.multilang-txt-field-input textarea.relaDataInput.ng-pristine.ng-valid')).get(2) }},
    
    clickNote:{
        get: function () {
            return this._Note.click();
        }
    }, */
    
  /*  _productLink: {get: function () { return element(by.css('#previewDoc div div div div div div div div #relaTypeDrop div input.dropnav-input.ng-pristine.ng-invalid.ng-invalid-required.has-visited')); }},
    
    clickProductLink:{
        get: function () {
            return this._productLink.click();
        }
    }, */
     
                                                           
                                                           
    
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
    }
});

module.exports = LegislationRelationshipSection;