var billSection = function() { 

    this.urlLoad=function(user,password){
        
        var loginpopup =  element(by.model('credentials.username'));
        loginpopup.isPresent().then(function(result) {

            if ( result ) {

                
                element(by.model('credentials.username')).sendKeys(user);
                element(by.model('credentials.password')).sendKeys(password);
                element(by.buttonText('Login')).click();

            }
            else{

            }
        });
        
    };

    var _expandButton =  element(by.id('linkUncollapseBillsSection'));
    var _collapseButton =  element(by.id('linkCollapseBillsSection'));
    
    
    this.isExpanded = function() {
        return _collapseButton.isPresent();
               
    };
           
    this.isCollapsed = function() {
        return _expandButton.isPresent();
                   
    };
           
           
    this.expandSection = function() {
        _expandButton.click();
    };
       
    this.collapseSection = function() {
        _collapseButton.click();
     };
    
var _billsSectionUnCollapseIcon = element(by.css('[id="linkUncollapseBillsSection"]'));
     
 
 this.isBillsSectionDisplayed = function() {
         return element(by.css('[key="legislation.document.view.section.bills"]')).isDisplayed();
     };
 
 /*isBillsSectionDisplayedNew= function() {
         return element(by.css('[key="legislation.document.view.section.bills"]')).isDisplayed().then(function(isdisp){
             if(isdisp == true){
                 return true;
             }
             
         },function(err){
             return false;
         
         });
     }
 }, */
 
 var _addButton = element(by.css('[ng-click="sectionBillsController.goToAdd()"]'));
     
 
 this.clickOnAddButton= function() {
     _addButton.click();
     
 };
 
 var _newPublicationButtonOnBillFaseCreation = element(by.css('[name="button.annadirPublicadoEn"]'));
    
 
 this.isNewPublicationButtonOnBillFaseCreationDisplayed = function() {
         return _newPublicationButtonOnBillFaseCreation.isDisplayed();
    
 };
 
 this.isAddButtonDisplayed= function() {
         return _addButton.isDisplayed();
    };
    
 var _legislature = element(by.css('[id="legislatureBillsDataSection"]'));
 
 
 this.isLegislatureDisplayed= function() {
         return _legislature.isDisplayed();
 };
 
 var _fieldsOnBillsSection = element.all(by.css('[key="legislation.document.view.section.bills"]>div>div>div>span'));
     
 this.isProcessingTypeIsDisplayed= function() {
         return _fieldsOnBillsSection.get(2).getText().then(function(txt){
             if(txt.indexOf('Processing Type')!=-1){
                         return true;
                     }else{
                         return false;
                     }
         });
 };
 
 this.isSettingDateIsDisplayed= function() {
         return _fieldsOnBillsSection.get(6).getText().then(function(txt){
             if(txt.indexOf('Setting date')!=-1){
                         return true;
                     }else{
                         return false;
                     }
         });
 };
 
 this.isCompetentCommissionIsDisplayed= function() {
         return _fieldsOnBillsSection.get(8).getText().then(function(txt){
             if(txt.indexOf('Competent Commission')!=-1){
                         return true;
                     }else{
                         return false;
                     }
         });
 };
 
 var _viewAllLink=  element(by.css('[ng-click="sectionBillsController.viewBills(1)"]'));
 
 var _buttonPencil =  element(by.css('[ng-click="addBills()"]'));
     
 this.clickPencil= function() {
         return _buttonPencil.click();
};
 
 var _phaseScreen = element(by.id('texto'));
     
 this.isPhaseScreenDisplayed= function() {
         return _phaseScreen.isDisplayed();
    
 };
 
 var _numberClick = element(by.id('texto'));
     
 this.clearNumber = function() {
         return _numberClick.clear();
 };

 var _numberEnter = element(by.id('texto'));
     
 
 this.enterNumber = function() {
         return _numberEnter.sendKeys("13");
};
 
 
 var _okClick = element(by.className('buttonInform'));
     
 this.clickOk = function() {
 
    _okClick.click();
 };

 var _procedurebutton = element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[2]/tbody/tr[3]/td[1]/input[3]'));
 

this.clickProcedure = function() {
     return _procedurebutton.click();
};

var _popupProcedure = element(by.id('txtFilter'));
 

this.enterPopupProcedure = function() {
     return _popupProcedure.sendKeys("Acuerdo de la Comisión (Senado)");
 
};

this.enterPopupSituation = function() {
     return _popupProcedure.sendKeys("Comisión");
};

var _buttonFilter = element(by.id('btnFilter'));
 
this.clickFilter = function() {
     return _buttonFilter.click();
};

var _slectFilter = element(by.id('lnk___'));
 
this.clickFilterButton= function() {
     return _slectFilter.click();
};

var _situationbutton = element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[2]/tbody/tr[3]/td[3]/input[3]'));
 

this.clickSituation = function() {
     return _situationbutton.click();
};

this.getTotalNoOfRowsInTable= function() {
  return _viewAllLink.getText().then(function(txt){
         var _temp = txt.split(" ");
         var thenum = _temp[0].substring(1);
         return thenum;
     });
};

this.clickViewAllLink= function() {
     return _viewAllLink.click();
};

var _cancelButton =  element(by.css('[value="Cancel"]'));

this.clickCancelButton= function() {
 return _cancelButton.click();
};

var _showfilterButton =  element(by.css('[ng-click="showFilter = !showFilter"]'));
 
this.clickShowfilterButton= function() {
     return _showfilterButton.click();
};

var _tramitEnter = element(by.id('billTramitacion'));
 
this.enterTramitIniciativa= function() {
     return _tramitEnter.sendKeys("Iniciativa");
     return _tramitEnter.sendKeys(protractor.Key.ENTER);
};

var _situationEnter = element(by.id('billSituacion'));
 

this.entersituationComisiComision= function() {
     return _situationEnter.sendKeys("Comision");
 
};

this.enterTramitPercentage= function() {
     return _tramitEnter.sendKeys("A%");
     return _tramitEnter.sendKeys(protractor.Key.ENTER);
};

this.enterTramitPercentagePercentage= function() {
     return _tramitEnter.sendKeys("%%");
     return _tramitEnter.sendKeys(protractor.Key.ENTER);
};

this.enterSituationPercentage= function() {
     return _situationEnter.sendKeys("A%");
};

this.enterSituationPercentagePercentage= function() {
     return _situationEnter.sendKeys("%%");
};


this.clickAddButtonBill = function() {
return browser.executeScript('return document.getElementById(\'btnAddfixSection\').click();',''); 
};

this.clickCopyButtonBill= function() {
return browser.executeScript('return document.getElementById(\'btnCopyfixSection\').click();',''); 
};

this.clickEditButtonBill= function() {
return browser.executeScript('return document.getElementById(\'btnGoToEditMode\').click();',''); 
};

var _clickCodeButton =  element(by.className('bento-icon-arrow-down'));
 

this.clickCodeButton = function() {
     return _clickCodeButton.click();
};

var _clickCodeText =  element(by.css('[ng-model="inputLabel"]'));
 

this.clickCodeText= function() {
     return _clickCodeText.sendKeys("LEG - Legislación");
};

var _clickCalculationButton =  element(by.id('validation-id'));
 

this.clickCalculationButton= function() {
     return _clickCalculationButton.click();
};

var _clickAddPopupButton =  element(by.className('btn btn-primary btn-medium ng-scope'));


this.clickAddPopupButton= function() {
    return _clickAddPopupButton.click();
};

var _clickCopyPopupButton =  element(by.className('btn btn-primary btn-medium ng-scope'));


this.clickCopyPopupButton= function() {
    return _clickCopyPopupButton.click();
};

this.isViewAllIsDisplayed = function() {
    return this._viewAllLink.getText().then(function(txt){
        if(txt.indexOf('View All')!=-1){
                    return true;
                }else{
                    return false;
                }
    });

};

var _billsTable = element(by.css('[class="modal-content"]'));


this.isBillsTableDisplayed= function() {
    return _billsTable.isDisplayed();
};

var _checkBoxColumn = element(by.css('[type="checkbox"]'));


this.isCheckBoxColumnDisplayed= function() {
    return _checkBoxColumn.isDisplayed();

};

_faseColumn = element.all(by.css('[class="wj-colheaders"]>div')).get(1);


this.isFaseColumnDisplayed = function() {
    
    return _faseColumn.isPresent();

};

var _tramitacionColumn = element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));



this.isTramitacionColumnDisplayed= function() {
    return _tramitacionColumn.then(function(els){
        return els[1].getText().then(function(txt){
        if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                    return true;
        }else{
                    return false;
        }
    });
    });

};


var _situacionColumn = element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));


this.isSituacionColumnDisplayed= function() {
    return _situacionColumn.then(function(els){
        return els[2].getText().then(function(txt){
        if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                    return true;
        }else{
                    return false;
        }
    });
    });

};

var _numeroColumn = element.all(by.css('[class="wj-cell wj-header wj-wrap"]'));


this.isNumeroColumnDisplayed= function() {
    return _numeroColumn.then(function(els){
        return els[3].getText().then(function(txt){
        if(txt.indexOf('Número: Fecha, Publicación')!=-1){
                    return true;
        }else{
                    return false;
        }
    });
    });
};

var _editIcon = element(by.css('[ng-click="editBills($item.idIniciativa)"]'));

this.isEditIconDisplayed= function() {
    return _editIcon.isDisplayed();
};

this.clickEditIcon= function() {
return _editIcon.click();
};

//var _newPublicationButtonOnBillFaseCreation = element(by.css('[name="button.annadirPublicadoEn"]'));


/*this.isNewPublicationButtonOnBillFaseCreationDisplayed= function() {
    return _newPublicationButtonOnBillFaseCreation.isDisplayed();
};
*/
var _copyIcon =  element(by.css('[ng-click="copyBill($item)"]'));

this.isCopyIconDisplayed = function() {
    return _copyIcon.isDisplayed();
};

var _deleteIcon = element(by.css('[ng-click="deleteBills($item.idIniciativa)"]'));

this.isDeleteIconDisplayed = function() {
    return _deleteIcon.isDisplayed();
};

this.paginationNext= function() {
    return element(by.css('[ng-click="next()"]')).click();

};

this.paginationPrevious= function() {
    return element(by.css('[ng-click="previous()"]')).click();

};

this.paginationLast= function() {
    return element(by.css('[ng-click="last()"]')).click();

};

this.paginationFirst= function() {
    return element(by.css('[ng-click="first()"]')).click();

}; 

this.closeTable= function() {
    return element(by.css('[ng-click="close()"]')).click();

};

this.deleteMultipleRowsFromTable= function() {
        return _multipleRowsFromTable.then(function(els){
          return els[0].click().then(function(){
                return els[1].click().then(function(){
                    browser.findElement(by.css('[data-button-id="3"]')).click();
                    
                });
          });
       });
        
  };

this.deleteFirst2RowsFromTable_New= function() {
        return _multipleRowsFromTable.then(function(els){
            return els[0].click().then(function(){
                return els[1].click().then(function(){
                    browser.findElement(by.css('[data-button-id="3"]')).click();
                });
                
            });
        });     
};

this.deleteFirstRowFromTable = function() {
    
return _deleteIcon.click();
};

//var _deleteOKOnConfirm = element(by.css('[ng-click="ok()"]')).click();
var _deleteOKOnConfirm = element(by.css('[ng-click="ok()"]'));

//var _deleteCancelOnConfirm = element(by.css('[ng-click="cancel()"]')).click();
var _deleteCancelOnConfirm = element(by.css('[ng-click="cancel()"]'));

var _deleteButton = element(by.css('[data-button-id="3"]'));

var _firstRowFromTable = element(by.css('[ng-model="$item.selected"]'));

var _multipleRowsFromTable = element.all(by.css('[ng-model="$item.selected"]'));

//var _faseOnAddFasePage = browser.driver.findElement(by.css('[name="faseIniciativa.texto"]'));
var _faseOnAddFasePage = element(by.css('[name="faseIniciativa.texto"]'));

this.enterFase = function(str) {
    return _faseOnAddFasePage.sendKeys(str);

};

this.editFase = function(str) {
    //return this._faseOnAddFasePage.clear(function(){
        //browser.sleep(5000);
        return browser.executeScript('return arguments[0].value=arguments[1];',_faseOnAddFasePage,str).then(function(){
            
        });
    //});
};

this.clickGoBack= function() {
    element(by.css('[value="Cancel"]')).click();
};

//var _procedureAuxButton = browser.driver.findElement(by.css('[name="faseIniciativa.tramitacion.description"] + [class="buttonInform"]'));
var _procedureAuxButton = element(by.css('[name="faseIniciativa.tramitacion.description"] + [class="buttonInform"]'));
    
this.clickOnProcedureAuxButton = function() {

return _procedureAuxButton.click();
};

//var _searchTextBoxOfProcedure = browser.driver.findElement(by.css('[id="txtFilter"]'));
var _searchTextBoxOfProcedure = element(by.css('[id="txtFilter"]'));

this.enterValueInProcedureList = function(str) {
    return _searchTextBoxOfProcedure.sendKeys(str);

};
//var _procedureFilterButton = browser.driver.findElement(by.css('[id="btnFilter"]'));
var _procedureFilterButton = element(by.css('[id="btnFilter"]'));

this.clickOnFilterProcedure= function() {
    return _procedureFilterButton.click();
};

//var _arrowIconProcedure = browser.driver.findElement(by.css('a[id="lnk___"]'));
var _arrowIconProcedure = element(by.css('a[id="lnk___"]'));

this.clickOnArrowOfFilteredProcedure= function() {
    return _arrowIconProcedure.click();
};

this.selectProcedure = function(str) {
    
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

};

//var _situationAuxButton = browser.driver.findElement(by.css('[id="situacion"] + [class="buttonInform"]'));
var _situationAuxButton = element(by.css('[id="situacion"] + [class="buttonInform"]'));

//var _searchTextBoxOfSituation = browser.driver.findElement(by.css('[id="txtFilter"]'));
var _searchTextBoxOfSituation = element(by.css('[id="txtFilter"]'));
  
this.enterValueInSituationList = function(str) {
      return _searchTextBoxOfSituation.sendKeys(str);
};

//var _situationFilterButton = browser.driver.findElement(by.css('[id="btnFilter"]'));
var _situationFilterButton = element(by.css('[id="btnFilter"]'));
 
this.clickOnFilterSituation = function() {
      return _situationFilterButton.click();
  
};

var _arrowIconSituation =  element(by.css('a[id="lnk___"]'));
  
this.clickOnArrowOfFilteredSituation= function() {

      return _arrowIconSituation.click();
};

this.selectSituation = function(str) {
      
      return _situationAuxButton.click();
          browser.sleep(5000);
          return browser.getAllWindowHandles().then(function (handles){
              newWindowHandle = handles[1];
              return browser.switchTo().window(newWindowHandle).then(function(){
                  return browser.driver.findElement(by.css('[id="txtFilter"]')).sendKeys(str);
                      return browser.driver.findElement(by.css('[id="btnFilter"]')).click();
                          return browser.driver.findElement(by.css('a[id="lnk___"]')).click();
                              return browser.switchTo().window(handles[0]).then(function(){
                                  
                              });
                          });

                      });
                  };

this.clickNewPublication= function() {
      return browser.driver.findElement(by.css('[name="button.annadirPublicadoEn"]')).click();
  };
  
//var _publicationAuxButton =  browser.driver.findElement(by.css('[property="AAA"]'));
var _publicationAuxButton =  element(by.css('[property="AAA"]'));
  
//var _searchTextBoxOfPublication =  browser.driver.findElement(by.css('[id="txtFilter"]'));
var _searchTextBoxOfPublication =  element(by.css('[id="txtFilter"]'));
  
this.enterValueInPublicationList = function(str) {
      return _searchTextBoxOfPublication.sendKeys(str);
};

//var _publicationFilterButton =  browser.driver.findElement(by.css('[id="btnFilter"]'));
var _publicationFilterButton =  element(by.css('[id="btnFilter"]'));
  
this.clickOnFilterPublication= function() {
      return _publicationFilterButton.click();
};

//var _arrowIconPublication =  browser.driver.findElement(by.css('a[id="lnk___"]'));
var _arrowIconPublication =  element(by.css('a[id="lnk___"]'));
 
this.clickOnArrowOfFilteredPublication= function() {
      return _arrowIconPublication.click();
};

this.selectPublication = function(str)  {
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
      
      
  };


//var _seriesAuxButton =  browser.driver.findElement(by.css('[id="SerList"]'));
var _seriesAuxButton =  element(by.css('[id="SerList"]'));
  
//var _arrowIconSeries =  browser.driver.findElement(by.css('a[id="lnk___"]'));
var _arrowIconSeries =  element(by.css('a[id="lnk___"]'));
 
this.clickOnArrowOfFilteredSeries= function() {
      return this._arrowIconSeries.click();
};

this.selectSeries =  function() {
browser.executeScript('return arguments[0].click();',browser.driver.findElement(by.css('[id="SerList"]'))).then(function(){
      //return this._seriesAuxButton.click().then(function(){
          browser.sleep(5000);
          return browser.getAllWindowHandles().then(function (handles){
              newWindowHandle = handles[1];
              return browser.switchTo().window(newWindowHandle).then(function(){
                  return browser.driver.findElement(by.css('a[id="lnk___"]')).click();
                      return browser.switchTo().window(handles[0]).then(function(){
                                  
                      });           
              });

          });
      });
  };


//var _pageNoAddFasePage =  browser.driver.findElement(by.css('#numeroPagina'));
var _pageNoAddFasePage =  element(by.css('#numeroPagina'));
 
enterPageNo = function(str) {
      return _pageNoAddFasePage.sendKeys(str);
};

//var _orderAddFasePage =  browser.driver.findElement(by.css('#orden'));
var _orderAddFasePage =  element(by.css('#orden'));
 
this.enterOrder = function(str) {
      return this._orderAddFasePage.sendKeys(str);
};

var _orderPositionAddFasePage =  element(by.css('#ordenDisposicion'));

this.enterOrderPosition = function(str) {
    return this._orderPositionAddFasePage.sendKeys(str);
};

//var _okBtnOnNewFasePage =  browser.driver.findElement(by.css('[value="Ok"]'));
var _okBtnOnNewFasePage =  element(by.css('[value="Ok"]'));

this.clickOkOnNewFasePage= function() {
    return _okBtnOnNewFasePage.click();
};

/*selectcode = function(code) {
    
    return _code.click();
    return legistypevalue(code).click();
    
};*/

var _code = element(by.model('inputLabel'));


legistypevalue = function(code) {
return element.all(by.css('li[ng-click="onItemClick($index)"]>span')).filter(function(elem, index){
    return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
        //return txt.indexOf(code,0)!=-1;
        
        return (txt<code?false:(txt>code?false:true));
    });
    
}).first();
};

var _expandGeneral =  element(by.id('linkUncollapseGeneralDataSection'));

this.clickGeneral= function() {
return _expandGeneral.click();
};

this.selectDocument = function() {
return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).sendKeys("A");
return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).click();      

};

this.isBillsDisplay= function() {
    return element(by.id('collapse-all-collapsed-link')).isDisplayed();
};

this.clickBillsNextAddButton= function() {
    return element(by.css('.btn-default.btn-section.float-right.ng-binding')).click();
};

this.clickJurisdiction= function() {
    return element(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).click();
};

this.enterJurisdictionSearchText= function() {
    return element(by.css('[ng-model="searchtext"]')).sendKeys("Estatal");  
};

this.clickJurisdictionSearch= function() {
return element(by.css('[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
};
                                          
this.selectJurisdictionSearch = function() {
 element(by.css('[ng-click="select(item)"]')).click();
};   

this.clickGeneralExpand= function() {
     element(by.id('linkCollapseGeneralDataSection')).click();
};

this.clickStatuteData= function() {
     element(by.id('collapsed-legislation-link')).click();
};

this.clickLegislativeBody= function() {
 element(by.id('legislativeMainBody')).click();
};

this.enterLegislativeBodyText= function() {
    return element(by.css('[ng-model="searchtext"]')).sendKeys("Gobierno");  
};

this.clickLegislativeBodySearch= function() {
return element(by.css('[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
};
                                          
this.selectLegislativeBodySearch= function() {
 element(by.css('[ng-click="select(item)"]')).click();
};

this.changelegislativeBody = function() {
    
     _legislativeSecondaryBody().click();
        _scrollTo(_legistxtdropdownsearch);
        browser.driver.actions().mouseUp(_legistxtdropdownsearch).perform();
        return _legistxtdropdownsearch.sendKeys(value).then(function () {
            return legisserachButton.click().then(function () { 
                return itemList.click();    

            });
        });
};

//var _legislativeSecondaryBody = element(by.css('[id="legislativeMainBody"]')).element(by.css('a[name="lnkSearchDropdown"]'));  
var _legislativeSecondaryBody = element(by.css('[id="legislativeMainBody"]'));

var _abbrevationList = element(by.css('[id="abrebitation-input"]')).element(by.css('a[name="lnkSearchDropdown"]'));

this.ClicklegislativeSecondaryBody= function() {
return _legislativeSecondaryBody.click();
};

//var _legistxtdropdownsearch = element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0).element(by.css('input[ng-keypress="searchOnEnter($event)"]'));
var _legistxtdropdownsearch = element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0);

//_scrollTo = browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());


//var legisserachButton = element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0).element(by.css('button[ng-click="search($event)"]'));
var legisserachButton = element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"]')).get(0);

var itemList = element.all(by.repeater('item in choices'));

this.changeStatueType = function(value) {
    
  
    return clickstatueType.then(function () {
    
        _scrollTo(_legisstatueTypedropbox);
        browser.driver.actions().mouseUp(_legisstatueTypedropbox).perform();
        return _legisstatueTypedropbox.sendKeys(value, protractor.Key.ENTER);
         //browser.actions().sendKeys(protractor.Key.ENTER);
             return itemList.click();    
              
    });
};

this.clickstatueType = function() {
    var EC = protractor.ExpectedConditions;
 // Waits for the element with id 'abc' to be visible on the dom.
    browser.wait(EC.visibilityOf(this._statueType), 10000);
    this._scrollTo(this._statueType); 
    this._scrollTo(this._statueType);
    this._scrollTo(this._statueType);
    return this._statueType.click();
         
 };
     
     var _statueType = element(by.css('#legislativeBodyStatueType0 a[name="lnkSearchDropdown"]')); 
     
     var _legisstatueTypedropbox = element(by.id('legislativeBodyStatueType0')).element(by.css('input[ng-keypress="searchOnEnter($event)"]'));
     
     this.clickprovisonDateButton= function() {
         return _provisonDateButton1.click();
     };
     
     var _provisonDateButton1 = element(by.css('[id="add.provision.date-0-"] [class="glyphicon glyphicon-plus"]'));
     
     this.clickconnectorComboBox= function() {
             return _connectorComboBox.click();
     };
     
     var _connectorComboBox = element.all(by.css('div[id^="connetor-col-1"]')).get(0);
     
     this.selectconnector = function() {
             return element(by.css('div[id^="connetor-col-1"]'));
     };
     
     this.clickMainKeyWordcolobule= function() {
             _scrollTo(_MainKeyWordcolobule);
             return _MainKeyWordcolobule.sendKeys("Poder Judicial");
 
     };
     
     var _MainKeyWordcolobule = element(by.css('.form-control.ng-valid.has-visited.ng-dirty'));
     
     this.clickMainKeyWord= function() {
     return element(by.css('.form-control.ng-valid.has-visited.ng-dirty')).sendKeys(protractor.Key.ENTER);
     };
    
     this.legismainKeyword= function(value) {
             
             return _mainKeyword.clear();
             return _mainKeyword.sendKeys(value);
     };
     
    var _mainKeyword = element(by.css('[class="input-group freetext-search"] [ng-model="model"]'));
     
     this.clickCreateButton = function() {
     return element(by.id('btnSaveDocument')).click();
   };
     
     this.clickBillsAddButton= function() {
     element(by.css('[ng-click="sectionBillsController.goToAdd()"]')).click();
    };
     
     this.clickNewPublicationButton= function() {
     element(by.css('[name="button.annadirPublicadoEn"]')).click();
   };
     
         
     this.clickEditButton= function() {
      element(by.id('btnGoToEditMode')).click();
     };
   
     this.exitButton= function() {
        element(by.id('btnExitEditMode')).click();
     };
     
      this.yesButton= function() {
             element(by.css('[ng-click="ok()"]')).click();
     };

     
     
 
 this.clickBlankField= function() {
    element.all(by.css('.wj-cell.wj-wrap')).get(1).click();
     
 };

 this.selectcode = function(value) {  
element(by.xpath("//input[@ng-model='inputLabel']")).sendKeys(value);
		return element(by.xpath("//input[@ng-model='inputLabel']")).sendKeys(protractor.Key.ENTER);
};

this.clickLegislativeBodyNew = function() {  
    
element(by.css('#legislativeMainBody .col-md-8 [name="lnkSearchDropdown"]')).click();

};

this.sendKeyToLegislativeBody = function(value) {  
    
element.all(by.css('[class="input-group dropdown-search"] [ng-model="searchtext"]')).get(3).clear();
element.all(by.css('[class="input-group dropdown-search"] [ng-model="searchtext"]')).get(3).sendKeys(value);


};

this.clickSearchBtnLegislativeBody = function() {  
    
return element.all(by.css('[class="input-group-btn"] [ng-click="search($event)"]')).get(3).click();

};

this.clickonSelectedOptionLegislativeBody = function() {  
    
element(by.css('[name="dropdown-item"] [ng-click="select(item)"]')).click();

};

this.clickonStatusType = function() {  
    
element(by.css('#legislativeBodyStatueType0 a[name="lnkSearchDropdown"]')).click();

};

this.sendKeyToStatusType = function(value) {  
    
element.all(by.css('[class="input-group dropdown-search"] [ng-model="searchtext"]')).get(4).clear();
element.all(by.css('[class="input-group dropdown-search"] [ng-model="searchtext"]')).get(4).sendKeys(value);

};

this.clickSearchBtnStatueType = function() {  
    
element.all(by.css('[class="input-group-btn"] [ng-click="search($event)"]')).get(4).click();

};

this.clickSelectedOptionStatusType = function() {  
    
element(by.css('[class="search-item ng-scope"] [ng-click="select(item)"]')).click();

};

this.isBillsSectionDisplayedNew = function() {  
    
return element(by.css('.modal-content')).isPresent();

};

this.clickDeleteConfirmBtn = function() {

    element(by.css('[ng-click="ok()"]')).click();
};

this.clickCancelButtonDelete = function() {

    element(by.css('[ng-click="cancel()"]')).click();
};




};

module.exports = new billSection();