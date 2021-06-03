var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

 
var LegislationBillsSection = function () {
	this.expandable = new ExpandableToggle('linkUncollapseBillsSection', 'linkCollapseBillsSection');
    
};

LegislationBillsSection.prototype = Object.create({}, {
    
    _scrollTo: {
		value: function (webelement) {
			// There are some issues with the double scroll when trying to click some elements
			browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
            
		}
	},
    
    _billsSectionUnCollapseIcon : {
        get: function (){
            return element(by.css('[id="linkUncollapseBillsSection"]'));
        }
    },
    
    
    
    isBillsSectionDisplayed: {
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"]')).isDisplayed();
        }
    },
    
    isBillsSectionDisplayedNew: {
        get: function (){
            return element(by.css('[key="legislation.document.view.section.bills"]')).isDisplayed().then(function(isdisp){
                if(isdisp == true){
                    return true;
                }
                
            },function(err){
                return false;
            
            });
        }
    },
    
    _addButton: {
        get: function (){
            return element(by.css('[ng-click="sectionBillsController.goToAdd()"]'));
        }
    },
    
    clickOnAddButton: {
        get: function (){
            return this._addButton.click();
        }
    },
    
    _newPublicationButtonOnBillFaseCreation: {
         get: function (){
            return element(by.css('[name="button.annadirPublicadoEn"]'));
        }
    },
    
    isNewPublicationButtonOnBillFaseCreationDisplayed: {
         get: function (){
            return this._newPublicationButtonOnBillFaseCreation.isDisplayed();
         }
    },
    
    isAddButtonDisplayed: {
        get: function (){
            return this._addButton.isDisplayed();
        }
    },
    _legislature: {
        get: function (){
            return element(by.css('[id="legislatureBillsDataSection"]'));
        }
    },
    
    isLegislatureDisplayed: {
        get: function (){
            return this._legislature.isDisplayed();
        }
    },
    
    _fieldsOnBillsSection: {
        
        get: function (){
            return element.all(by.css('[key="legislation.document.edit.section.bills"]>div>div>div>span'));
        }
    },
    
   
    
    isProcessingTypeIsDisplayed: {
        get: function (){
            return this._fieldsOnBillsSection.get(4).getText().then(function(txt){
                if(txt.indexOf('Processing Type')!=-1){
                            return true;
                        }else{
                            return false;
                        }
            });
        }
    },
    
    isSettingDateIsDisplayed: {
        get: function (){
            return this._fieldsOnBillsSection.get(6).getText().then(function(txt){
                if(txt.indexOf('Setting date')!=-1){
                            return true;
                        }else{
                            return false;
                        }
            });
        }
    },
    
    isCompetentCommissionIsDisplayed: {
        get: function (){
            return this._fieldsOnBillsSection.get(10).getText().then(function(txt){
                if(txt.indexOf('Competent Commission')!=-1){
                            return true;
                        }else{
                            return false;
                        }
            });
        }
    },
    
    _viewAllLink: {
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"]>div>div>div>span>a'));
        }
    },
    
    getTotalNoOfRowsInTable:{
        get: function (){
            return this._viewAllLink.getText().then(function(txt){
                var _temp = txt.split(" ");
                var thenum = _temp[0].substring(1);
                return thenum;
            });
        }
    },
    
    clickViewAllLink: {
        get: function (){
            return this._viewAllLink.click();
        }
    },
    
    isViewAllIsDisplayed: {
        get: function (){
            return this._viewAllLink.getText().then(function(txt){
                if(txt.indexOf('View All')!=-1){
                            return true;
                        }else{
                            return false;
                        }
            });
        }
    },
    
    _billsTable: {
        get: function (){
            return element(by.css('[class="modal-content"]'));
        }
        
    },
    
    isBillsTableDisplayed: {
        get: function (){
            return this._billsTable.isDisplayed();
        }
    },
    
    _checkBoxColumn:{
        get: function (){
            return element(by.css('[type="checkbox"]'));
        }
        
    },
    
    isCheckBoxColumnDisplayed:{
        get: function (){
            return this._checkBoxColumn.isDisplayed();
        }
    },
    
    _faseColumn:{
        get: function (){
            return element.all(by.css('[class="wj-colheaders"]>div')).get(1);
        }
        
    },
    
    isFaseColumnDisplayed:{
        get: function (){
            return this._faseColumn.getInnerHtml().then(function(txt){
                if(txt.indexOf('Fase')!=-1){
                            return true;
                }else{
                            return false;
                }
            });
        }
    },
    
    _tramitacionColumn:{
        get: function (){
            element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));
        }
        
    },    
        
    
    isTramitacionColumnDisplayed:{
        get: function (){
            return this._tramitacionColumn.then(function(els){
                return els[1].getText().then(function(txt){
                if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                            return true;
                }else{
                            return false;
                }
            });
            });
        }
    },
    
    
    _situacionColumn:{
        get: function (){
            element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));
        }
        
    }, 
    
    isSituacionColumnDisplayed:{
        get: function (){
            return this._situacionColumn.then(function(els){
                return els[2].getText().then(function(txt){
                if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                            return true;
                }else{
                            return false;
                }
            });
            });
        }
    },
    
    _numeroColumn:{
        get: function (){
            return element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));
        }
        
    }, 
    
    isNumeroColumnDisplayed:{
        get: function (){
            return this._numeroColumn.then(function(els){
                return els[3].getText().then(function(txt){
                if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                            return true;
                }else{
                            return false;
                }
            });
            });
            
        }
    },
    
    _editIcon:{
        get: function (){
            return element(by.css('[ng-click="editBills($item.idIniciativa)"]'));
        }
        
    }, 
    
    isEditIconDisplayed:{
        get: function (){
            return this._editIcon.isDisplayed();
        }
    },
    
    _copyIcon:{
        get: function (){
            return element(by.css('[ng-click="copyBill($item)"]'));
        }
        
    }, 
    
    isCopyIconDisplayed:{
        get: function (){
            return this._copyIcon.isDisplayed();
        }
    },
    
    _deleteIcon:{
        get: function (){
            return element(by.css('[ng-click="deleteBills($item.idIniciativa)"]'));
        }
        
    }, 
    
    isDeleteIconDisplayed:{
        get: function (){
            return this._deleteIcon.isDisplayed();
        }
    },
    
    
    paginationNext:{
        get: function (){
            return element(by.css('[ng-click="next()"]')).click();
        }
        
    }, 
    
    paginationPrevious:{
        get: function (){
            return element(by.css('[ng-click="previous()"]')).click();
        }
        
    }, 
    
    paginationLast:{
        get: function (){
            return element(by.css('[ng-click="last()"]')).click();
        }
        
    }, 
    
    paginationFirst:{
        get: function (){
            return element(by.css('[ng-click="first()"]')).click();
        }
        
    }, 
    
    closeTable: {
        get: function (){
            return element(by.css('[ng-click="close()"]')).click();
        }
    },
    
    deleteMultipleRowsFromTable: {
        get: function (){
                return this._multipleRowsFromTable.then(function(els){
                    return els[0].click().then(function(){
                        return els[1].click().then(function(){
                            browser.findElement(by.css('[data-button-id="3"]')).click();
                            
                        });
                    });
                });
                
                
        }
    },
    
    deleteFirst2RowsFromTable_New: {
        get: function (){
                return this._multipleRowsFromTable.then(function(els){
                    return els[0].click().then(function(){
                        return els[1].click().then(function(){
                            browser.findElement(by.css('[data-button-id="3"]')).click();
                        });
                        
                    });
                });     
        }
    },
    
    deleteFirstRowFromTable:{
        get: function (){
            
                return this._deleteIcon.click();
                
        }
    },
    _deleteOKOnConfirm: {
        
        get: function (){
            return element(by.css('[ng-click="ok()"]')).click();
        }
    },
    
    _deleteCancelOnConfirm: {
        
        get: function (){
            return element(by.css('[ng-click="cancel()"]')).click();
        }
    },
    _deleteButton: {
        
        get: function (){
            
            return element(by.css('[data-button-id="3"]'));
        }
    },
    
    _firstRowFromTable:{
        get: function (){
            return element(by.css('[ng-model="$item.selected"]'));
        }
    },
    _multipleRowsFromTable:{
        get: function (){
            return element.all(by.css('[ng-model="$item.selected"]'));
        }
    },
    
    _legislatureList:{
        
        get: function (){
            return element.all(by.css('[ng-repeat="legislature in sectionBillsController.legislatureList"]'));
        }
    },
    
    numberOfEntriesInLegislature:{
        get: function (){
            return this._legislatureList.count();
        }
    },
    
    _processingTypeList:{
        
        get: function (){
            return element.all(by.css('[ng-repeat="type in sectionBillsController.processingTypeList"]'));
        }
    },
    
    numberOfEntriesInProcessingType:{
        get: function (){
            return this._processingTypeList.count();
        }
    },
    
    _nextpreviousPageCompetentCommissionListCount:{
        get: function (){
            return browser.findElements(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] [ng-if="directionLinks"]')).then(function(els){
                return els.length;
            });
        }
    },
    
    _nextpreviousPageCompetentCommissionList:{
        get: function (){
            return element.all(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] [ng-if="directionLinks"]'));
        }
    },
    
    _competentCommisionAuxLixt: {
        get: function (){
            return element(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"]>div>a'));
        }
    },
    
    numberOfEntriesInCompetentCommission:{
        get: function (){
            return this._competentCommisionAuxLixt.click().then(function(){
                
                         for(var i=0,j=10; i<5;i++){
                              j = j + element.all(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] [ng-if="directionLinks"]>a')).get(1).click().then(function(){
                                  return element.all(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] [ng-click="select(item)"]')).count().then(function(c){
                                      return c;
                                  });
                            });
                             return j;
                         }
                            
                             
                        
                           
                        });
                        
                    
                    
                
            
        }
    },
    
    clearFieldSettingDate:{
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"] input[ng-model="date"]')).clear();
        }
    },
    
    enterFieldSettingDate: {
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"] input[ng-model="date"]')).sendKeys('10/10/2014');
        }
    },
    
    clearCompetentCommission:{
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"] [ng-click="deleteItem()"]')).click();
        }
    },
    
    save:{
        get: function (){
            return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();','').then(function(){
                
            });
        }
    },
    
    saveAndConfirm:{
        get: function (){
            return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();','').then(function(){
                return element(by.css('[name="btnConfirmationDialogAccept"]')).click();
            });
        }
    },
    errorMsgSettingDate:{
        get: function (){
            return element(by.css('[class="toast-message"]')).getText();
        }
    },
    
    errorMsgCompetentCommission:{
        get: function (){
            return element(by.css('[class="toast-message"]')).getText();
        }
    },
    
    editLegislature:{
        get: function (){
            return this._legislatureList.then(function(els){
                return els[1].click();
            });
        }
    },
    editProcessingType:{
        get: function (){
            return this._processingTypeList.then(function(els){
                return els[1].click();
            });
        }
    },
    editSettingDate:{
        get: function (){
            return element(by.css('[key="legislation.document.edit.section.bills"] input[ng-model="date"]')).clear().then(function(){
                return element(by.css('[key="legislation.document.edit.section.bills"] input[ng-model="date"]')).sendKeys('07/04/2008');
            });
            
        }
    },
    editCompetentCommission:{
        get: function (){
            return this._competentCommisionAuxLixt.click().then(function(){
                return element(by.css('[ng-click="select(item)"]')).click();
            });
        }
    },
    
    clickCancelOnBillFaseCreation:{
        
        get: function (){
            
            return element(by.css('[value="Cancel"]')).click();
            
        }
    },
});

module.exports = LegislationBillsSection;