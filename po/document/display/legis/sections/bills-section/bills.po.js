var ExpandableToggle = require('../expandable-toggle.po.js');
var params = browser.params;
//var testData = require('../../../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
 
var LegislationBillsSection = function () {
	this.expandable = new ExpandableToggle('linkUncollapseBillsSection', 'linkCollapseBillsSection');
  //  this.get = function () { return browser.get('/GCMSWeb/legis/billsAction.do?action=add&idDoc='+testData.legislation.sections.bills.marginal_id_without_fases); };
	  this.get = function () { return browser.get('/GCMSWeb/legis/billsAction.do?action=add&idDoc=12224080'); };
    
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
            return element(by.css('[key="legislation.document.view.section.bills"]')).isDisplayed();
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
            return element.all(by.css('[key="legislation.document.view.section.bills"]>div>div>div>span'));
        }
    },
    
   
    
    isProcessingTypeIsDisplayed: {
        get: function (){
            return this._fieldsOnBillsSection.get(2).getText().then(function(txt){
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
            return this._fieldsOnBillsSection.get(8).getText().then(function(txt){
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
            return element(by.css('[ng-click="sectionBillsController.viewBills(1)"]'));
        }
    },
    
    _buttonPencil:{
    	get: function(){
    		 //return element(by.xpath('//div[@id="billsTableContainer"]/div[1]/div[7]/div[1]/div[1]/div[12]//div[@class="ng-scope"]/div[1]/span[1]'));
    		return element(by.css('[ng-click="addBills()"]'));
    	}
    },
    
    clickPencil:{
    	get: function(){
    		return this._buttonPencil.click();
    	}
    },
    
    _phaseScreen:{
    	get: function(){
    		return element(by.id('texto'));
    	}
    },
    
    isPhaseScreenDisplayed:{
    	get: function(){
    		return this._phaseScreen.isDisplayed();
    	}
    },
    
    _numberClick:{
    	get: function(){
    		return element(by.id('texto'));
    	}
    },
    
    clearNumber:{
    	get: function(){
    		return this._numberClick.clear();
    	}
    },
    _numberEnter:{
    	get: function(){
    		return element(by.id('texto'));
    	}
    },
    
    enterNumber:{
    	get: function(){
    		return this._numberEnter.sendKeys("13");
    	}
    },
    
    
    _okClick:{
    	get: function(){
    		return element(by.className('buttonInform'));
    	}
    },
    
    clickOk:{
    	get: function(){
    		return this._okClick.click();
    	}
    },
    
    _procedurebutton:{
    	get: function(){
    		//return element(by.className('buttonInform'));
    		return element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[2]/tbody/tr[3]/td[1]/input[3]'));
    	}
    },
    
    clickProcedure:{
    	get: function(){
    		return this._procedurebutton.click();
    	}
    },
   
    _popupProcedure:{
    	get: function(){
    		//return element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[2]/tbody/tr[3]/td[1]/input[3]'));
    		return element(by.id('txtFilter'));
    	}
    },
    
    enterPopupProcedure:{
    	get: function(){
    		return this. _popupProcedure.sendKeys("Acuerdo de la Comisión (Senado)");
    	}
    },
    
    enterPopupSituation:{
    	get: function(){
    		return this. _popupProcedure.sendKeys("Comisión");
    	}
    },
    _buttonFilter:{
    	get: function(){
    		return element(by.id('btnFilter'));
    	}
    },
    
    clickFilter:{
    	get: function(){
    		return this._buttonFilter.click();
    	}
    },
    
    _slectFilter:{
    	get: function(){
    		return element(by.id('lnk___'));
    	}
    },
    
    clickFilterButton:{
    	get: function(){
    		return this._slectFilter.click();
    	}
    },
    
    _situationbutton:{
    	get: function(){
    		//return element(by.className('buttonInform'));
    		return element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[2]/tbody/tr[3]/td[3]/input[3]'));
    	}
    },
    
    clickSituation:{
    	get: function(){
    		return this._situationbutton.click();
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
    
    _cancelButton:{
    	get: function(){
    		return element(by.css('[value="Cancel"]'));
    	}
    },
    
    clickCancelButton:{
    	get: function(){
    		return this._cancelButton.click();
    	}
    },
    
    _showfilterButton:{
    	get: function(){
    		return element(by.css('[ng-click="showFilter = !showFilter"]'));
    	}
    },
    
    clickShowfilterButton:{
    	get: function(){
    		return this._showfilterButton.click();
    	}
    },
    
    _tramitEnter:{
    	get: function(){
    		return element(by.id('billTramitacion'));
    	}
    },
    
    enterTramitIniciativa:{
    	get: function(){
    		return this. _tramitEnter.sendKeys("Iniciativa");
    	}
    },
    
    _situationEnter:{
    	get: function(){
    		return element(by.id('billSituacion'));
    	}
    },
    
    entersituationComisiComision:{
    	get: function(){
    		return this. _situationEnter.sendKeys("Comision");
    	}
    },
    
    enterTramitPercentage:{
    	get: function(){
    		return this. _tramitEnter.sendKeys("A%");
    	}
    },
    
    enterTramitPercentagePercentage:{
    	get: function(){
    		return this. _tramitEnter.sendKeys("%%");
    	}
    },
    
    enterSituationPercentage:{
    	get: function(){
    		return this. _situationEnter.sendKeys("A%");
    	}
    },
    
    enterSituationPercentagePercentage:{
    	get: function(){
    		return this. _situationEnter.sendKeys("%%");
    	}
    },
    
   
    clickAddButtonBill: {get: function () {return browser.executeScript('return document.getElementById(\'btnAddfixSection\').click();',''); }},
    
    clickCopyButtonBill: {get: function () {return browser.executeScript('return document.getElementById(\'btnCopyfixSection\').click();',''); }},
    
    clickEditButtonBill: {get: function () {return browser.executeScript('return document.getElementById(\'btnGoToEditMode\').click();',''); }},
    
    _clickCodeButton:{
    	get: function(){
    		return element(by.className('bento-icon-arrow-down'));
    	}
    },
    
    clickCodeButton:{
    	get: function(){
    		return this. _clickCodeButton.click();
    	}
    },
    
    _clickCodeText:{
    	get: function(){
    		return element(by.css('[ng-model="inputLabel"]'));
    	}
    },
    
    clickCodeText:{
    	get: function(){
    		return this. _clickCodeText.sendKeys("LEG - Legislación");
    	}
    },
    
     _clickCalculationButton:{
    	get: function(){
    		return element(by.id('validation-id'));
    	}
    },
    
     clickCalculationButton:{
    	get: function(){
    		return this. _clickCalculationButton.click();
    	}
    },
    
    _clickAddPopupButton:{
    	get: function(){
    		return element(by.className('btn btn-primary btn-medium ng-scope'));
    	}
    },
    
     clickAddPopupButton:{
    	get: function(){
    		return this. _clickAddPopupButton.click();
    	}
    },
    
    _clickCopyPopupButton:{
    	get: function(){
    		return element(by.className('btn btn-primary btn-medium ng-scope'));
    	}
    },
    
     clickCopyPopupButton:{
    	get: function(){
    		return this. _clickCopyPopupButton.click();
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
    
    clickEditIcon:{
        get: function (){
            return this._editIcon.click();
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
    _faseOnAddFasePage:{
        get: function (){
            return browser.driver.findElement(by.css('[name="faseIniciativa.texto"]'));
        }
    },
    enterFase:{
        value: function (str){
            return this._faseOnAddFasePage.sendKeys(str);
        }
    },
    
    editFase:{
        value: function (str){
            //return this._faseOnAddFasePage.clear(function(){
                //browser.sleep(5000);
                return browser.executeScript('return arguments[0].value=arguments[1];',this._faseOnAddFasePage,str).then(function(){
                    
                });
            //});
            
        }
    },
    
    clickGoBack:{
        get: function (){
            return browser.driver.findElement(by.css('[value="Go back"]')).click();
        }
    },
    _procedureAuxButton:{
        get: function (){
            return browser.driver.findElement(by.css('[name="faseIniciativa.tramitacion.description"] + [class="buttonInform"]'));
            
        }
    },
    clickOnProcedureAuxButton: {
        get: function (){
            return this._procedureAuxButton.click();
        }
    },
    _searchTextBoxOfProcedure:{
        get: function (){
            return browser.driver.findElement(by.css('[id="txtFilter"]'));
        }
    },
    enterValueInProcedureList:{
        value: function (str){
            return this._searchTextBoxOfProcedure.sendKeys(str);
        }
    },
    _procedureFilterButton:{
        get: function (){
            return browser.driver.findElement(by.css('[id="btnFilter"]'));
        }
    },
    clickOnFilterProcedure:{
        get: function (){
            return this._procedureFilterButton.click();
        }
    },
    _arrowIconProcedure:{
        get: function (){
            return browser.driver.findElement(by.css('a[id="lnk___"]'));
        }
    },
    clickOnArrowOfFilteredProcedure:{
        get: function (){
            return this._arrowIconProcedure.click();
        }
    },
    selectProcedure:{
        value: function (str){
            
            return this.clickOnProcedureAuxButton.then(function(){
                browser.sleep(5000);
                return browser.getAllWindowHandles().then(function (handles){
                    
                    newWindowHandle = handles[1];
                    return browser.switchTo().window(newWindowHandle).then(function(){
                        
                        
                         return browser.driver.findElement(by.css('[id="txtFilter"]')).sendKeys(str).then(function(){
                             return browser.driver.findElement(by.css('[id="btnFilter"]')).click().then(function(){
                                return browser.driver.findElement(by.css('a[id="lnk___"]')).click().then(function(){
                                    return browser.switchTo().window(handles[0]).then(function(){
                                        
                                    });
                                });
                            });
                        });
                    });

                });
               
            });
        }
    },
    _situationAuxButton:{
        get: function (){
            return browser.driver.findElement(by.css('[id="situacion"] + [class="buttonInform"]'));
        }
    },
    _searchTextBoxOfSituation:{
        get: function (){
            return browser.driver.findElement(by.css('[id="txtFilter"]'));
        }
    },
    enterValueInSituationList:{
        value: function (str){
            return this._searchTextBoxOfSituation.sendKeys(str);
        }
    },
    _situationFilterButton:{
        get: function (){
            return browser.driver.findElement(by.css('[id="btnFilter"]'));
        }
    },
    clickOnFilterSituation:{
        get: function (){
            return this._situationFilterButton.click();
        }
    },
    _arrowIconSituation:{
        get: function (){
            return browser.driver.findElement(by.css('a[id="lnk___"]'));
        }
    },
    clickOnArrowOfFilteredSituation:{
        get: function (){
            return this._arrowIconSituation.click();
        }
    },
    selectSituation:{
        value: function (str){
            
            return this._situationAuxButton.click().then(function(){
                browser.sleep(5000);
                return browser.getAllWindowHandles().then(function (handles){
                    newWindowHandle = handles[1];
                    return browser.switchTo().window(newWindowHandle).then(function(){
                        return browser.driver.findElement(by.css('[id="txtFilter"]')).sendKeys(str).then(function(){
                            return browser.driver.findElement(by.css('[id="btnFilter"]')).click().then(function(){
                                return browser.driver.findElement(by.css('a[id="lnk___"]')).click().then(function(){
                                    return browser.switchTo().window(handles[0]).then(function(){
                                        
                                    });
                                });
                            });
                        });
                    });

                });
            });
        }
    },
    
    clickNewPublication:{
        get: function (){
            return browser.driver.findElement(by.css('[name="button.annadirPublicadoEn"]')).click();
        }
    },
    _publicationAuxButton:{
        get: function (){
            return browser.driver.findElement(by.css('[property="AAA"]'));
        }
    },
    _searchTextBoxOfPublication:{
        get: function (){
            return browser.driver.findElement(by.css('[id="txtFilter"]'));
        }
    },
    enterValueInPublicationList:{
        value: function (str){
            return this._searchTextBoxOfPublication.sendKeys(str);
        }
    },
    _publicationFilterButton:{
        get: function (){
            return browser.driver.findElement(by.css('[id="btnFilter"]'));
        }
    },
    clickOnFilterPublication:{
        get: function (){
            return this._publicationFilterButton.click();
        }
    },
    _arrowIconPublication:{
        get: function (){
            return browser.driver.findElement(by.css('a[id="lnk___"]'));
        }
    },
    clickOnArrowOfFilteredPublication:{
        get: function (){
            return this._arrowIconPublication.click();
        }
    },
    selectPublication:{
        value: function (str){
            return browser.executeScript('return arguments[0].click();',browser.driver.findElement(by.css('[id="PubClear"]'))).then(function(){
            return browser.executeScript('return arguments[0].click();',browser.driver.findElement(by.css('[alt="buscar"][class="buttonInform"]'))).then(function(){
            //return browser.driver.findElement(by.css('[alt="buscar"][class="buttonInform"]')).click().then(function(){
                function windowCount(count) {
                                        return function () {
                                            return browser.getAllWindowHandles().then(function (handles) {
                                                return handles.length >= count;
                                            });
                                        };
                                    };
                
                
                return browser.getAllWindowHandles().then(function (handles){
                    browser.wait(windowCount(2),20000);
                    newWindowHandle = handles[1];
                    return browser.switchTo().window(newWindowHandle).then(function(){
                        
                        return browser.driver.findElement(by.css('[title="Next"]>img')).click().then(function(){
                    
                        return browser.driver.findElement(by.css('[id="txtFilter"]')).sendKeys(str).then(function(){
                            return browser.driver.findElement(by.css('[id="btnFilter"]')).click().then(function(){
                                return browser.actions().click(browser.driver.findElement(by.css('a[id="lnk___"]>img[align="absMiddle"]'))).perform().then(function(){
                                    
                                    
                                    
                                    
                                
                                    browser.wait(windowCount(1),10000);
                                    return browser.switchTo().window(handles[0]).then(function(){
                                    
                                    });
                                });
                            });
                        });
                    });

                });
            });
            });
            
            });
            
            
        }
    },
    _seriesAuxButton:{
        get: function (){
            return browser.driver.findElement(by.css('[id="SerList"]'));
        }
    },
    
    _arrowIconSeries:{
        get: function (){
            return browser.driver.findElement(by.css('a[id="lnk___"]'));
        }
    },
    clickOnArrowOfFilteredSeries:{
        get: function (){
            return this._arrowIconSeries.click();
        }
    },
    selectSeries:{
        get: function (){
            return browser.executeScript('return arguments[0].click();',browser.driver.findElement(by.css('[id="SerList"]'))).then(function(){
            //return this._seriesAuxButton.click().then(function(){
                browser.sleep(5000);
                return browser.getAllWindowHandles().then(function (handles){
                    newWindowHandle = handles[1];
                    return browser.switchTo().window(newWindowHandle).then(function(){
                        return browser.driver.findElement(by.css('a[id="lnk___"]')).click().then(function(){
                            return browser.switchTo().window(handles[0]).then(function(){
                                        
                            });           
                        });
                    });

                });
            });
        }
    },
    _pageNoAddFasePage:{
        get: function (){
            return browser.driver.findElement(by.css('#numeroPagina'));
        }
    },
    enterPageNo:{
        value: function (str){
            return this._pageNoAddFasePage.sendKeys(str);
        }
    },
    _orderAddFasePage:{
        get: function (){
            return browser.driver.findElement(by.css('#orden'));
        }
    },
    enterOrder:{
        value: function (str){
            return this._orderAddFasePage.sendKeys(str);
        }
    },
    _orderPositionAddFasePage:{
        get: function (){
            return browser.driver.findElement(by.css('#ordenDisposicion'));
        }
    },
    enterOrderPosition:{
        value: function (str){
            return this._orderPositionAddFasePage.sendKeys(str);
        }
    },
    _okBtnOnNewFasePage:{
        get: function (){
            return browser.driver.findElement(by.css('[value="Ok"]'));
        }
    },
    clickOkOnNewFasePage:{
        get: function (){
            return this._okBtnOnNewFasePage.click();
        }
    },
    selectcode:{
        value:function(code){
            var self = this;
            
            return self._code.click().then(function () {
                return self.legistypevalue(code).click();
            });
        }
    },

    
    
    _code:{get:function(){return element(by.model('inputLabel'));}},
    
    
    
    legistypevalue:{value:function (code){
        return element.all(by.css('li[ng-click="onItemClick($index)"]>span')).filter(function(elem, index){
            return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
                //return txt.indexOf(code,0)!=-1;
                
                return (txt<code?false:(txt>code?false:true));
            });
            
        }).first();
    }},
    
    _expandGeneral:{
        get: function (){
            return element(by.id('linkUncollapseGeneralDataSection'));
        }
    },
    clickGeneral:{
        get: function (){
            return this._expandGeneral.click();
        }
    },
    
    selectDocument:{
        get:function(){
    return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).sendKeys("A");
      return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).click();      
        }
    },
    
    isBillsDisplay:{
        get:function(){
            return element(by.id('collapse-all-collapsed-link')).isDisplayed();
        }
    },
    
    clickBillsNextAddButton:{
        get:function(){
            return element(by.css('.btn-default.btn-section.float-right.ng-binding')).click();
        }
    },
    
    clickJurisdiction:{
        get:function(){
            return element(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).click();
              
            
            
        }
    },
    
    enterJurisdictionSearchText:{
        get: function(){
            return element(by.css('[ng-model="searchtext"]')).sendKeys("Estatal");  
        }
    },
    
    clickJurisdictionSearch:{
     get: function(){
    return element(by.css('[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
  }
},
                                                  
 selectJurisdictionSearch:{
            get:function(){
                return element(by.css('[ng-click="select(item)"]')).click();
            }                                      
                         },   
    
    clickGeneralExpand:{
        get:function(){
            return element(by.id('linkCollapseGeneralDataSection')).click();
      }
    },
    
    clickStatuteData:{
        get:function(){
            return element(by.id('collapsed-legislation-link')).click();
      }
    },
    
    clickLegislativeBody:{
        get:function(){
            return element(by.id('legislativeMainBody')).click();
        }
         },
    
    enterLegislativeBodyText:{
        get: function(){
            return element(by.css('[ng-model="searchtext"]')).sendKeys("Gobierno");  
        }
    },
    
    clickLegislativeBodySearch:{
     get: function(){
    return element(by.css('[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
  }
},
                                                  
 selectLegislativeBodySearch:{
            get:function(){
                return element(by.css('[ng-click="select(item)"]')).click();
            }                                      
                         }, 
    
    changelegislativeBody: {
		value: function (value) {
			var self = this;
			return self.ClicklegislativeSecondaryBody.then(function () {
                self._scrollTo(self._legistxtdropdownsearch);
                browser.driver.actions().mouseUp(self._legistxtdropdownsearch).perform();
				return self._legistxtdropdownsearch.sendKeys(value).then(function () {
					return self.legisserachButton.click().then(function () { 
						return self.itemList.click();    

					});
				});
			});
		}
	},
    
    _legislativeSecondaryBody:{get: function (){ return element(by.css('[id="legislativeMainBody"]')).element(by.css('a[name="lnkSearchDropdown"]'))}},  
    _abbrevationList:{get: function (){ return element(by.css('[id="abrebitation-input"]')).element(by.css('a[name="lnkSearchDropdown"]'))}},
    
    ClicklegislativeSecondaryBody:{
        get: function (){
            return this._legislativeSecondaryBody.click();
        }
    },
    
    _legistxtdropdownsearch:{get: function (){ return element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0).element(by.css('input[ng-keypress="searchOnEnter($event)"]'))}},
    
    _scrollTo: {
        value: function (webelement) {
            // There are some issues with the double scroll when trying to click some elements
            browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
        }
    },
    
    legisserachButton: {get: function () { return element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0).element(by.css('button[ng-click="search($event)"]'))}},
    itemList: {get: function () { return element.all(by.repeater('item in choices')); }},
    
    changeStatueType: {
		value: function (value) {
			var self = this;
          
			return self.clickstatueType.then(function () {
            
                self._scrollTo(self._legisstatueTypedropbox);
                browser.driver.actions().mouseUp(self._legisstatueTypedropbox).perform();
				return self._legisstatueTypedropbox.sendKeys(value, protractor.Key.ENTER).then(function () {
                 //browser.actions().sendKeys(protractor.Key.ENTER);
                     
				      return self.itemList.click();    
                      
					
				});
			});
		}
	},
    
    clickstatueType: {
 get:function(){
   var EC = protractor.ExpectedConditions;
// Waits for the element with id 'abc' to be visible on the dom.
   browser.wait(EC.visibilityOf(this._statueType), 10000);
   this._scrollTo(this._statueType); 
   this._scrollTo(this._statueType);
   this._scrollTo(this._statueType);
   return this._statueType.click();
        }
},
    
    _statueType:{get:function(){return element(by.css('#legislativeBodyStatueType0 a[name="lnkSearchDropdown"]'))}}, 
    
    _legisstatueTypedropbox:{get : function () { return element(by.id('legislativeBodyStatueType0')).element(by.css('input[ng-keypress="searchOnEnter($event)"]'))}},
    
    clickprovisonDateButton: {
        get:function(){
            return this._provisonDateButton1.click();
        }
    },
    
    _provisonDateButton1:{get: function () {return element(by.id('add.provision.date-0-'))}},
    
    clickconnectorComboBox:{
         get:function(){
            return this._connectorComboBox.click();
        }
    },
    
    _connectorComboBox:{get : function () {return element.all(by.css('div[id^="connetor-col-1"]')).get(0)}},
    
    selectconnector: {
        get: function () {
            return element(by.css('div[id^="connetor-col-1"]'));
        }
    },
    
    clickMainKeyWordcolobule: {
        get: function () {
            this._scrollTo(this._MainKeyWordcolobule);
            return this._MainKeyWordcolobule.sendKeys("Poder Judicial");

        }
    },
    
     _MainKeyWordcolobule:{get:function (){return element(by.css('.form-control.ng-valid.has-visited.ng-dirty'));}},
    
    clickMainKeyWord:{
     get: function(){
    return element(by.css('.form-control.ng-valid.has-visited.ng-dirty')).sendKeys(protractor.Key.ENTER);
  }
},
   
    legismainKeyword: {
        value: function (value) {
            var self = this;
            return self._mainKeyword.clear().sendKeys(value);
        }
    },
    
    _mainKeyword:{get: function () { return element(by.css('div[id="keyword-container"]')).element(by.css('input[name="txtdropdownsearch"]'))}},
    
    clickCreateButton:{
     get: function(){
    return element(by.id('btnSaveDocument')).click();
  }
},
    
    clickBillsAddButton:{
     get: function(){
    return element(by.css('[ng-click="sectionBillsController.goToAdd()"]')).click();
  }
},
    
    clickNewPublicationButton:{
     get: function(){
    return element(by.css('[name="button.annadirPublicadoEn"]')).click();
  }
},
    //itemList: {get: function () { return element.all(by.repeater('item in choices')); }},
    /*windowCount:{
        value: function (count) {
            return browser.getAllWindowHandles().then(function (handles) {
                return handles.length >= count;
            });
        }
    }*/
        
clickEditButton:{
     get: function(){
    return element(by.id('btnGoToEditMode')).click();
  }
},
  
    exitButton:{
       get:function(){
           return element(by.id('btnExitEditMode')).click();
       }
   },
    
     yesButton:{
       get:function(){
           return element(by.css('[ng-click="ok()"]')).click();
       }
   },
    
});

module.exports = LegislationBillsSection;