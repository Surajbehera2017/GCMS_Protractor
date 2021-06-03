
var LegislationGrantsAndSubsidiesSection = function () {
	
    
    var _subjectOfTheGrantField = element(by.xpath('.//*[@id="content-section"]/div[12]/div/div[2]/div[1]/span'));
    var _beneficiariesField = element(by.xpath('.//*[@id="content-section"]/div[12]/div/div[3]/div[1]/span'));
    var _subjectOfTheGrantWorldIcon= element.all(by.css('[listlanguague="grandAndSubsidies.document.data.document.languages"]')).get(0);
    var _beneficiariesWorldIcon= element.all(by.css('[listlanguague="grandAndSubsidies.document.data.document.languages"]')).get(1);
    var _expandall=element(by.css('#collapse-all-collapsed-link>img'));
    var _subjectofgrant=element(by.xpath('//*[@class="col-md-4  left-label"]//*[@class="class-title-body font-size-90p ng-binding"]'));
    var _code =element(by.model('inputLabel'));
    var _clickcreate=element.all(by.id('btnSaveDocument')).get(1);
    var _selectDocumentType=  element(by.xpath('//*[@class="col-md-8 right-label height-50 border-sides-detail-border-top"]//*[@ng-model="generalDataController.model.data.document.tipoDisposicion.code"]'));
    var _popupForEditSubjectOfTheGrant= element(by.css('[class="modal-header header-import"]'));  
    var _popupForBeneficiaries= element(by.css('[class="modal-header header-import"]'));
    var _textBoxesEditSubject=element(by.css('[ng-bind="(grandAndSubsidies.viewBaseLang(grandAndSubsidies.document.data.document.grant.subjectMultilang.list)).description"]'));
    var _textBoxesOnPopupOfEditSubject= element.all(by.css('[ng-model="item.description"]')); 
	var _textBoxesOnPopupOfEditBeneficiaries= element.all(by.css('[ng-model="item.description"]'));   
    var _addsubjectofgrant=  element(by.xpath('//div[@ng-show="grandAndSubsidies.showSection()"]//*[@ng-model="(grandAndSubsidies.viewBaseLang(grandAndSubsidies.document.data.document.grant.subjectMultilang.list)).description"]'));
    var _addbeneficiaries=  element(by.xpath('//div[@ng-show="grandAndSubsidies.showSection()"]//*[@ng-model="(grandAndSubsidies.viewBaseLang(grandAndSubsidies.document.data.document.grant.granteeMultilang.list)).description"]'));
    var _legislativebody= element(by.id('legislativeMainBody'));      
    var _legislativebodyfilterInput=element(by.id('legislativeMainBody')).element(by.name('txtdropdownsearch'));
    var _itemListForStatuteType=  element(by.id('legislativeBodyStatueType0')).all(by.css('[ng-repeat="item in choices"]')).get(0);    
    var  _statutetype= element(by.id('legislativeBodyStatueType0'));    
	var _StatutetypefilterInput=  element(by.id('legislativeBodyStatueType0')).element(by.name('txtdropdownsearch'));        
    var  _StatutetypefilterButton= element(by.id('legislativeBodyStatueType0')).all(by.name('btndropdownsearch')).get(1);         
    var  _addpublication= element(by.xpath('//li[@ng-repeat="docPublication in publication.groupedBySameCodeCriteriaList"]//*[@class="search-dropdown-publication line-height-50 btn-group search-dropdown ng-isolate-scope"]'));
    var  _publicationfilterInput= element(by.css('[model="docPublication.publicacion"]')).element(by.name('txtdropdownsearch'));        
    var _publictionfilterButton=  element(by.css('[model="docPublication.publicacion"]')).all(by.css('[name="btndropdownsearch"]')).get(1);             
	var  _legislativebodyfilterButton=  element(by.id('legislativeMainBody')).all(by.name('btndropdownsearch')).get(1);    
	var _itemListForLegislativeBody=  element(by.id('legislativeMainBody')).all(by.css('[ng-repeat="item in choices"]')).get(0);
    var _itemList1= element(by.css('[model="docPublication.publicacion"]')).all(by.css('[ng-repeat="item in choices"]')).get(0).element(by.css('[ng-click="select(item)"]'));    
	var _datenumberseries=element(by.id('publication.edit.section.date.00'));
	var _datefilterInput=element(by.id('publication.edit.section.date.00')).element(by.name('txtdropdownsearch'));
    var _datefilterButton=  element(by.id('publication.edit.section.date.00')).element(by.name('btndropdownsearch'));
    var _itemList2= element(by.id('publication.edit.section.date.00')).all(by.repeater('item in choices')).get(0);      
    var _practicearea= element(by.css('[onselect="practiceArea.addManualCollection"]'));    
	var _practiceareafilterInput=  element(by.css('[onselect="practiceArea.addManualCollection"]')).element(by.name('txtdropdownsearch'));        
    var _practiceareafilterButton= element(by.css('[onselect="practiceArea.addManualCollection"]')).all(by.name('btndropdownsearch')).get(1);
    var _itemList3=  element(by.css('[onselect="practiceArea.addManualCollection"]')).all(by.repeater('item in choices')).get(0).element(by.css('[ng-click="select(item)"]'));
    var _jurisdiction= element(by.css('[model="generalDataController.model.data.document.ambito"]>div>a'));
	var _itemList=  element.all(by.repeater('item in choices'));
    var _filterInput= element.all(by.css('[model="generalDataController.model.data.document.ambito"]')).get(0).element(by.name('txtdropdownsearch'));    
    var _filterButton=  element.all(by.css('.dropdown-search')).get(1).element(by.name('btndropdownsearch'));
    var _applyButtonOnPopup= element(by.id('editBtn-apply-Subjectofthegrant'));        
    var _saveButton=  element.all(by.css('[id="btnSaveDocument"]')).get(1);     
    var _confirmSaveButton= element(by.css('button[name="btnConfirmationDialogAccept"]')); 





    this.urlLoad=function(user,password){
        
                var loginpopup =  element(by.model('credentials.username'));
                loginpopup.isPresent().then(function(result) {
                    if (result) {
                        _loginUserName.sendKeys(user);
                        _loginPassword.sendKeys(password);
                        _loginButton.click();
                    }else{
        
                    }
                });
            };


     this.expandall = function () {
        
             _expandall.click();
        };
    
  
     this.subjectofgrant= function () {
       
            return _subjectofgrant.isDisplayed();
        };
 
     this.selectcode = function () {
         
            return self._code.click().then(function () {
                return self.legistypevalue(code).click();
            });
        };
   

      this.clickcreate = function () {
            _clickcreate.click();
        };
    
	
      
	 
        selectDocumentType = function (positionNum) {
            if (positionNum) {
                _selectDocumentType.click().then(function(result){            
                    _selectDocumentType.all(protractor.By.tagName('option')).get(0).then(function (options) {
                        options[positionNum].click();
                    });
                });
            };
    
        };
    
    
     this.clickDocumentType= function () {
        _selectDocumentType.click();
        };
    
    
    

    this.selectDocumentTypeFromComboBox = function (positionNum) {
	    if (positionNum) {
	    _selectDocumentType.click().then(function(result){   
	    //var options = 
	    _selectDocumentType.all(protractor.By.tagName('option')).then(function (options) {
	    options[positionNum].click();
	});
	});
    }
    };

    this.subjectOfTheGrantField= function () {
        browser.executeScript("arguments[0].scrollIntoView();", _subjectOfTheGrantField.getWebElement());
		return _subjectOfTheGrantField.getText();
        };
    
    
    this.beneficiariesField = function () {
        browser.executeScript("arguments[0].scrollIntoView();", _beneficiariesField.getWebElement());
		return _beneficiariesField.getText();
        }
   
    
    this.clickSubjectOfTheGrantWorldIcon= function () {
       
             _subjectOfTheGrantWorldIcon.click();
        };
   
    
    this.clickBeneficiariesWorldIcon= function () {
        
           _beneficiariesWorldIcon.click();
        };
   
    
		
    
    this.isDisplayedPopupForEditSubjectOfTheGrant= function () {
        
            return _popupForEditSubjectOfTheGrant.isDisplayed();
        };
  
    
    this.isDisplayedPopupForBeneficiaries= function () {
       
            return _popupForBeneficiaries.isDisplayed();
        };
   
    this.countOfTextBoxesOnPopupOfEditSubject= function () {
       
            return _textBoxesOnPopupOfEditSubject.count();
        };

    
    
    this.countOfTextBoxesOnPopupOfEditBeneficiaries=function() {
      
            return _textBoxesOnPopupOfEditBeneficiaries.count();
        };
   
    
    this.enterTextInSubjectOfGrant= function () {
       
            return _textBoxesOnPopupOfEditSubject.then(function(els){
                for(var i=0; i<els.length; i++){
                    els[i].clear();
                    els[i].sendKeys('Grant');
                }
            });
            
        };
   
    
    this.enterTextInSubjectOfBeneficiaries= function () {
       
            return _textBoxesOnPopupOfEditBeneficiaries.then(function(els){
                for(var i=0; i<els.length; i++){
                    els[i].clear();
                    els[i].sendKeys('Beneficiaries');
                }
            });
            
        };
    
    
    
   
    this.addsubjectofgrant=function(value) {
        browser.executeScript("arguments[0].scrollIntoView();", _addsubjectofgrant.getWebElement());
        return _addsubjectofgrant.sendKeys(value);
    };
  
    
    
    this.addbeneficiaries= function (value) {
        browser.executeScript("arguments[0].scrollIntoView();",  _addbeneficiaries.getWebElement());
        return _addbeneficiaries.sendKeys(value);
        };
    
    
    
    this.verifyTextInSubjectOfGrant= function () {
       
            return _textBoxesOnPopupOfEditSubject.then(function(els){
                for(var i=0; i<els.length; i++){
                    
                    expect(els[i].getText()).toEqual('Grant');
                }
            });
            
        };
  
        this.verifySubjectOfGrantText= function () {
            
                 return _textBoxesEditSubject.getText();
              
        };
    
	
	
    this.addlegislativebody= function (value) {
		
			return _legislativebody.click().then(function () {				
                return _legislativebodyfilterInput.sendKeys(value).then(function () {  
                   
					return _legislativebodyfilterButton.click().then(function () {
						return _itemListForLegislativeBody.click();
                         
					});
				});
			});
		};
	
       this.save=  function () {
               return saveButtonClick.then(function () {
                    return _confirmSaveButton.click();
                     
                });
            };
                                                  
           this.saveButtonClick= function () {  
                return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();','');              
                              };

       this.confirmSaveButton= function() {
        return _confirmSaveButton.click();
       };
    
    
      this.addstatutetype = function (value) {
		
			return _statutetype.click().then(function () {				
                return _StatutetypefilterInput.sendKeys(value).then(function () {  
                   
					return _StatutetypefilterButton.click().then(function () {
						return _itemListForStatuteType.click();
                         
					});
				});
			});
		};
	
    
    
    this.addpubliction= function (value) {
		
			return _addpublication.click().then(function () {				
                return _publicationfilterInput.sendKeys(value).then(function () {  
                   return _publictionfilterButton.click().then(function () {
                       return _itemList1.click();
                         
					});
				});
			});
		};
	
		
    
    this.adddatenumberseries= function(value) {
        return _datenumberseries.click().then(function () {				
                return _datefilterInput.sendKeys(value).then(function () {                     
					return _datefilterButton.click().then(function () {
						return _itemList2.click();
                         
					});
				});
			});
		};
	
    
    
    this.clickprecisiondate= function() {
        
            _precisiondate.click();
        };
   
    
    
      
    
     this.addpracticearea= function(value) {
		
			return _practicearea.click().then(function () {				
                return _practiceareafilterInput.sendKeys(value).then(function () {  
                 return _practiceareafilterButton.click().then(function () {                     
						return _itemList3.click();
                         
					});
				});
			});
		};
	
    
       
    
 
     
    this.hasjurisdiction= function () {
       
              return _jurisdiction.isPresent();
        };
  
    
    /*this.addjurisdiction= function(value){
		
		return	_jurisdiction.click();				
                return _filterInput.sendKeys(value)();       
					return _filterButton.click()();
						return _itemList.click();
				
        }; */
        this.addjurisdiction= function(value){
            browser.executeScript("arguments[0].scrollIntoView();", _jurisdiction.getWebElement());
            return	_jurisdiction.sendKeys(value);  				
                    
            };
        
	
       this.clickjurisdiction= function() {
			_jurisdiction.click();
        }
   
    
    
   
    
    
    this.verifyTextInBeneficiaries= function() {
       
            return _textBoxesOnPopupOfEditBeneficiaries.then(function(els){
                for(var i=0; i<els.length; i++){
                    
                    expect(els[i].getText()).toEqual('Beneficiaries');
                }
            });
            
        };
  
   
       
    
    this.clickOnApply= function() {
       
            return _applyButtonOnPopup.click();
        };
   
    this.isGrantsAndSubsidiesSectionDisplayed= function() {
       
            return element(by.css('#linkUncollapseGrantsAndSubsidiesEditSection')).isDisplayed();
        };
  
   this.grantsAndSubsidiesSection=function() {
       
            
            return browser.executeScript('return document.getElementById(\'linkUncollapseGrantsAndSubsidiesEditSection\')===null;','');
            
        };
  

};

module.exports = new LegislationGrantsAndSubsidiesSection;