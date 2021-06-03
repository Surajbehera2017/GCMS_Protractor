var LegislationCollectiveAgreementSection = function () {
         this.get = function (docId) {
            this.docId = docId;
            return browser.get('static/gcms-ui/index.html#/documentEdit/' + docId);
        };
        this.refresh = function () {
            return browser.get('static/gcms-ui/index.html#/documentEdit/' + this.docId);
        };

     var _collapseButton = element(by.id('non-collapsed-collective-edit-link'));
    var _expandButton = element(by.id('collapsed-collective-edit-link'));
    var _searchSector =element(by.css('[ng-click="collectiveAgreementsController.openModalSector(0)"]'));
    var _periodoDeUltraactividadIcon=element(by.css('#fieldFechafinultraactividad i[class^="bento-icon-calendar data-picker-icon"]'));
	var _saveEspanolEditButton =element(by.id('editBtn-apply-Periododeultraactividad'));
    var _espanolEditText=element.all(by.repeater('item in model.list  | orderBy:orderList')).get(0).element(by.model('item.description'));
	var _firstCompanyFieldValue=element(by.linkText('112 Asturias'));
	var _sectoresFolder=element(by.id('hierarchyNode52032')); 
    var _sectoresSubFolder=element(by.id('hierarchyNode39210474'));
    var _sectoresRadioButton=element(by.model('term.selected'));
    var _saveSectorsButton=element(by.css('#btnSaveAdd'));
    var _deleteSector=element(by.css('[ng-click="collectiveAgreementsController.cleanSectorSubSector(collectiveAgreementsController.model.data.document.conveniosColectivos.sectores.list[0], collectiveAgreementsController.model.data.document.conveniosColectivos.subsectores.list[0])"]'));
  	var _companyField=element.all(by.css('div[property="valor"]'));
	var _deleteCompanyField=element.all(by.css('[ng-click="deleteItem()"]')).get(12); 
    var _códigodeconvenio=element(by.model('collectiveAgreementsController.model.data.document.conveniosColectivos.codigoConvenio'));
	var _subrange=element(by.css('.dropdown-toggle.ng-binding'));
	var _creatNewDocument=element(by.id('btnCreateNewDoc'));
	var _code=element(by.model('inputLabel'));
	var _calculatebutton=  element(by.id('validation-id'));
    var _add=element(by.css('button[translate="Common.Add"]'));
	var _periododDeUltraactividad=element(by.css('#collectiveAgreementsPeriodoUltraActividad > input'));
	var _sectorandsubsector=element(by.css('a[ng-click="collectiveAgreementsController.openModalSector(0)"]'));
    var _leafterm=element(by.id('hierarchyNode52032'));
    var _sectorradiobutton=element.all(by.repeater('term in SectorModalCtrl.thesaurusTerms.list')).get(0).element(by.model('term.selected'));
    var _selectButton=element(by.id('btnSaveAdd'));
	var _fechaDeUltraactividad=  element.all(by.id('collectiveAgreementsUltraActivityDate')).get(0).element(by.css('input[ng-blur="onblur()(date)"]')); 
	var _fechaFinDeUltraactividad=element.all(by.css('.select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-required.ng-valid.ng-valid-date')).get(6);
    var _fechaFinDeDenuncia=element.all(by.css(".select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-required.ng-valid.ng-valid-date")).get(5);
    var _fechaFinDevigor=element.all(by.css('.select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-required.ng-valid.ng-valid-date')).get(4);
	var _jornadaField=element(by.model('collectiveAgreementsController.model.data.document.conveniosColectivos.workday'));
    var _Períododeultraactividad =element(by.model('(collectiveAgreementsController.viewBaseLangPeriodoUltraActividad(collectiveAgreementsController.model.data.document.conveniosColectivos.periodUltraActivityMultilang.list)).description'));
    var _itemlistforcompany=element.all(by.repeater('item in choices'));    
    var _itemlistforcompanynew=element(by.css('[model="element.empresa"]')).all(by.repeater('item in choices'));
    var _companySelect=element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(12);
    var _Selectsubrange=element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20);
	var _searchDocumentType=element(by.model('generalDataController.model.data.document.tipoDisposicion.code'));
    var _companysearchButton=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).element(by.css('button[ng-click="search($event)"]'));
    var _errorMessage=element(by.name('txtInfoDialog'));
	var _jurisdiction=element(by.css('div[model="generalDataController.model.data.document.ambito"]'));   
    var _changeCompany=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).element(by.css('input[name="txtdropdownsearch"]'));
    var _addworkcenter=element.all(by.model("wc.description")).get(6);
    var _addworkcentericon=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).element(by.css('[ng-click="collectiveAgreementsController.addWorkcenterToCompany(element.centrosDeTrabajo.list)"]'));
    var _addworkcenter2=element.all(by.model("wc.description")).get(7);
    var _deleteworkcenter=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).all(by.repeater('wc in element.centrosDeTrabajo.list')).get(0).element(by.css('[ng-click="collectiveAgreementsController.removeItem(element.centrosDeTrabajo.list,$index)"]'));
    var _deleteworkcenter2=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).all(by.repeater('wc in element.centrosDeTrabajo.list')).get(1).element(by.css('[ng-click="collectiveAgreementsController.removeItem(element.centrosDeTrabajo.list,$index)"]'));
    var _freetext1=element.all(by.model('wc.description')).get(0);
    var _freetext2=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).all(by.repeater('wc in element.centrosDeTrabajo.list')).get(1).element(by.model('wc.description'));
    var _freetext3=element.all(by.repeater('element in collectiveAgreementsController.model.data.document.conveniosColectivos.empresas.list')).get(0).all(by.repeater('wc in element.centrosDeTrabajo.list')).get(2).element(by.model('wc.description'));
    var _saveButton=element(by.id('btnSaveDocument'));    
    var _precisiondate=element(by.id('add.provision.date2-0-0'));
    var _mainKeyword=element(by.css('[id="keyword-container"]')).element(by.css('[name="txtdropdownsearch"]')); 
    var _addpublication=element(by.css('[model="docPublication.publicacion"]')); 
    var _practicearea=element(by.css('[onselect="practiceArea.addManualCollection"]')); 
    var _saveButton=element.all(by.css('[id="btnSaveDocument"]')).get(1); 
    var _subrangeBody= browser.element(by.xpath('.//*[@id="formNuevaFaseIniciativa"]/table[4]/tbody/tr[3]/td/input'));
    var _subrangedropdownsearch=element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20);
    var _expandGeneral=element(by.id('linkUncollapseGeneralDataSection'));
	var _datenumberseries=element(by.id('publication.edit.section.date.00'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	var _selectsubrangevaule=element.all(by.css('[ng-click="select(item)"]')).get(2);

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
    
    
	
    this.getSelectedDocumentType= function () {
        //to be implemented.
        //return selected type
        return element(by.model('generalDataController.model.data.document.tipoDisposicion.code')).$('[value="2"]').getText();
    };    

    this.collectivesectionisdisplayed= function () {
        return element(by.model('generalDataController.model.data.document.tipoDisposicion.code')).$('[value="2"]').getText();
    };

    this.selectDocumentType = function (positionNum) {
        var _type = element(by.model('generalDataController.model.data.document.tipoDisposicion.code'));
        if (positionNum) {
            _type.click().then(function(result){   
                    //var options = 
                    _type.all(protractor.By.tagName('option')).then(function (options) {
                    options[positionNum].click();
                });
            });
        };
    };
	
	this.expandGeneralData=function(){
		element(by.id('linkUncollapseGeneralDataSection')).click();      
        
    };
    
    this.expandStatuteData=function(){
		element(by.css('[ng-click="expandCollapse.status.statuteData.open=!expandCollapse.status.statuteData.open"]')).click();      
    };

    this.expandPublicationData=function(){
		element(by.css('[ng-click="expandCollapse.status.publication.open=!expandCollapse.status.publication.open"]')).click();      
    };

    this.expandPracticeArea=function(){
		element(by.css('[ng-click="expandCollapse.status.practiceArea.open=!expandCollapse.status.practiceArea.open"]')).click();      
    };
        
	this.clickSearchSector=function(){
		_searchSector.click();
        };
      
    this.selectStatuteType=function(){
        element.all(by.name("lnkSearchDropdown")).get(4).click();
        element.all(by.name("txtdropdownsearch")).get(4).sendKeys("Convenio");
        element.all(by.css('[ng-click="search($event)"]')).get(4).click();
        element(by.css('[ng-click="select(item)"]')).click();
    }
        
    this.addProvisionDate=function(){
        element(by.css('[ng-click="statuteData.addProvisionDate(statuteType.fechas.list)"]')).click();
        element.all(by.css(".select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid")).get(1).clear();
        element.all(by.css(".select-element-small.input-border.ng-isolate-scope")).get(1).sendKeys('05/11/2017');
    }

    this.addMainKeyword=function(){
    element(by.name("btnfretextsearch")).click();
    element.all(by.css('[ng-click="selection(item)"]')).get(5).click();
    }

this.isExpanded = function() {
	//return _collapseButton = element(by.id('collapsed-collective-link'))
	return _collapseButton.isDisplayed();
	};

	this.expandSection = function() {
	_expandButton.click();
    };
    
    this.collapseSection = function() {
        _collapseButton.click();
    };

   /* this.selectDocumentType1=function(){ 
	element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]'));
	};  */ 
    
    this.displaySearchSector=function(){
		return _searchSector.isDisplayed();
		};
	
	this.clickPeriodoDeUltraactividad=function(){
            var PeriodoDeUltraactividadIcon=_periodoDeUltraactividadIcon;
            browser.executeScript("arguments[0].scrollIntoView();", _periodoDeUltraactividadIcon.getWebElement());
			return PeriodoDeUltraactividadIcon.click();
		};
	
	this.displayPeriodoDeUltraactividad=function(){
		_periodoDeUltraactividadIcon.isDisplayed();
		};
	
	this.clickSaveEspanoEditButton=function(){
		_saveEspanolEditButton.click();
		};
	
	this.isVisibleSaveEspanolEditButton=function(){
		_saveEspanolEditButton.isPresent();
		}; 
    
	this.isVisibleEspanolEditText=function(){
		_espanolEditText.isPresent();
		};
    
    this.EnterTextEspanolEdit= function (Text) {
            
            return _espanolEditText.sendKeys(Text);
            //return _espanolEditText.sendKeys(protractor.Key.ENTER);
	};
    
	this.isVisibleFirstCompanyFieldValue=function(){ 
	  _firstCompanyFieldValue.isPresent();
		};
    
	this.clickSectoresFolder=function(){ 
	_sectoresFolder.click();
		};
	
    this.displaySectoresFolder=function(){
		return _sectoresFolder.isDisplayed();
		};

    this.clickSectoresSubFolder=function(){
		_sectoresSubFolder.click();
		};
	
    this.displaySectoresSubFolder=function(){
		return _sectoresSubFolder.isDisplayed();
		};
	
    this.clickSectoresRadioButton=function(){
		_sectoresRadioButton.click();
		};
	
    this.isVisibleSectoresFolder=function(){
		return _sectoresRadioButton.isPresent();
		};
	
	this.clickSaveSectoresButton=function(){
		_saveSectorsButton.click();
		};
	
	this.clickDeleteSectore=function(){
		_deleteSector.click();
		};
	
    this.isVisibleDeleteSector=function(){
		return _deleteSector.isPresent();
		};
	
    this.compayFieldValue=function(){
		_companyField.getText().then(function (value) { 
        if(value == "")
            return value;
        }); 
	};
	
	this.deleteCompanyField=function(){
		_deleteCompanyField.click();
		};
    
        this.cancel=function(){
            element.all(by.css('.bento-icon-close-circle')).get(11).click();
            };

	this.selectDocumentType1 = function (positionNum) {
        var docTypeEl = element(by.model('generalDataController.model.data.document.tipoDisposicion.code'));
		if (positionNum) {
			docTypeEl.click().then(function(result){   
				//var options = 
				docTypeEl.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
	};
	
	this.clearCódigodeconvenioField=function(){
		_códigodeconvenio.clear();
		};
	
    this.hascreatNewDocument=function(){
		return _creatNewDocument.isPresent();
	};
    
    this.clickcreatNewDocument=function(){
		_creatNewDocument.click();
	};    

    this.clicktoselectcode=function(){
          element.all(by.model('inputLabel')).get(0).click();
          
};	   

this.selectcode=function(){
element.all(by.css('.bento-combobox-container-label.ng-binding')).get(2).click();
};
    this.selectthecode=function(){
    element.all(by.css('.bento-combobox-container-label.ng-binding')).get(0).click();
    };
     
	this.legistypevalue=function(){ 
	element.all(by.css('li[ng-click="onItemClick($index)"]')).get(11);
	};
	
	this.clickcalculate=function(){
		 _calculatebutton.click();
     };
	 
	this.clickadd=function(){
		_add.click();
	}; 
	
    this.clickselectButton= function(){
            browser.executeScript("arguments[0].scrollIntoView();", _selectButton.getWebElement());
            return _selectButton.click();
			};	
			
	this.clicksectorandsubsector=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _sectorandsubsector.getWebElement());
            return _sectorandsubsector.click();
			};

	this.clickleafterm=function(){
			browser.executeScript("arguments[0].scrollIntoView();", _leafterm.getWebElement());
            return _leafterm.click();
			};
			
	this.selectsectorradioButton=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _sectorradiobutton.getWebElement());
            return _sectorradiobutton.click();
			};

    this.isVisblePeriododDeUltraactividad=function(){
		return _periododDeUltraactividad.isPresent();
    };    
   
	this.EnterValueinDeUltaactividadField= function (Text1) {
            browser.executeScript("arguments[0].scrollIntoView();", _fechaDeUltraactividad.getWebElement());
			_fechaDeUltraactividad.sendKeys(Text1);
           
	};

    this.isVisibleFechaDeUltraactividad=function(){
		return this._fechaDeUltraactividad.isPresent();
		};

    this.EnterValueinFechaFinDeUltraactividadField= function (Text) {
            browser.executeScript("arguments[0].scrollIntoView();",_fechaFinDeUltraactividad.getWebElement());
			_fechaFinDeUltraactividad.sendKeys(Text);
           
	};   
    
    this.EnterValueinFechaFinDeDenunciaField= function (Text) {
        element.all(by.css('.select-element-small.input-border.ng-isolate-scope')).get(6).sendKeys(Text);
	};    
    
    this.clearFechaFinDeDenunciaField= function () {
        browser.executeScript("arguments[0].scrollIntoView();",_fechaFinDeDenuncia.getWebElement());
        _fechaFinDeDenuncia.click().clear();
       
    };  

this.clearFechaFinDevigorField= function () {
    browser.executeScript("arguments[0].scrollIntoView();",_fechaFinDevigor.getWebElement());
    _fechaFinDevigor.click().clear();
   
    };  

    this.EnterValueinFechaFinDevigorField= function (Text1) {
        element.all(by.css('.select-element-small.input-border.ng-isolate-scope')).get(5).sendKeys(Text1);
    };
        
	this.isVisbleFechaFinDeDenuncia=function(){
		return _fechaFinDeDenuncia.isPresent();
	};   
    
    this.isVisbleFechaFinDevigor=function(){
		_fechaFinDevigor.isPresent();
	};
    
    this.isVisbleFechaFinDeUltraactividad=function(){
		return _fechaFinDeUltraactividad.isPresent();
	};		
    
	this.hasjurisdiction=function(){
		_jurisdiction.isPresent();
	};
    
    this.addjurisdiction= function () {
        element.all(by.model("searchtext")).get(0).sendKeys("Barcelona");
        element.all(by.css('[ng-click="selectPage(page + 1)"]')).get(0).click();
        element(by.css('[ng-click="select(item)"]')).click();
	};
	
    this.addPublication=function(){
        element.all(by.name("lnkSearchDropdown")).get(6).click();
        element.all(by.name("txtdropdownsearch")).get(7).sendKeys('BO. Barcelona');
        element.all(by.css(".input-group-btn")).get(15).click();
        element(by.css('[ng-click="select(item)"]')).click();
    }
     
    this.addPracticeArea=function(){
        element.all(by.name("lnkSearchDropdown")).get(8).click();
        element.all(by.css('[ng-click="select(item)"]')).get(4).click();
    }
    this.adddatenumberseries=function(){
        element.all(by.name("lnkSearchDropdown")).get(7).click();
        element.all(by.css('[ng-click="select(item)"]')).get(4).click();
    }

    this.itemListForLegislativeBody=function(){
		element(by.id('legislativeMainBody')).all(by.css('[ng-repeat="item in choices"]')).get(0);
	};       
    
    this.filterInput=function(){
		element.all(by.css('[model="generalDataController.model.data.document.ambito"]')).get(0).element(by.name('txtdropdownsearch'));
	};    
    
    this.filterButton=function(){
		element.all(by.css('.dropdown-search')).get(1).element(by.name('btndropdownsearch'));
           };
		   
	this.clickjurisdiction=function(){
		_jurisdiction.click();
	};

    this.EnterValueinJornadaField= function (Text) {
             
            _jornadaField.sendKeys(Text);
           
	};   

    this.EnterValueinPeríodoField= function (Text) {
            
            _Períododeultraactividad.sendKeys(Text);
          
	};
	
	this.isPresentJornadaField=function(){
		return _jornadaField.isPresent();
	};

    this.enterDigitInCodigodeconvenioField= function (Text) {
             
            _códigodeconvenio.sendKeys(Text);
            return _códigodeconvenio.sendKeys(protractor.Key.ENTER);
	};
	
	this.isPresentCodigodeconvenioField=function(){
		return _códigodeconvenio.isPresent();
	};
        
    this.oneDigitCodigodeconvenio=function(){
		_códigodeconvenio.sendKeys("1");
	};

    this.sevenDigitCodigodeconvenio=function(){
		_códigodeconvenio.sendKeys("234567");
	};

    this.blankDigitCodigodeconvenio=function(){
		_códigodeconvenio.sendKeys("");
    };
    
    this.clearCodigodeconvenioField=function(){
        _códigodeconvenio.clear();
    }
	
	this.clickitemlistforcompany=function(){
            //this._scrollTo(this._itemlistforcompany);
            _itemlistforcompany.click();
            };
        
    this.clickitemlistforcompanynew=function(){
            //this._scrollTo(this._itemlistforcompany);
            _itemlistforcompanynew.click();
    }; 
	
	this.SelectSubRangeActa=function(){
		element.all(by.css('[ng-click="select(item)"]')).get(0).click();
        };
		
	this.createAbstractLink=function(){
		element(by.css('[ng-click="statuteData.createUniqueAbstract()"]'));
	};
	
    this.clickOnCreateAbstract=function(){
		createAbstractLink.click();
	};	
	
	this.createAbstractText=function(){
		clickOnCreateAbstract.then(function(){
                browser.ignoreSynchronization = true;
                browser.getAllWindowHandles().then(function (handles){
                    console.log('Total # of windows = ' + handles.length);
                    for (var i = 0; i < handles.length; i++) {
                        browser.switchTo().window(handles[i]).then(function(){
                            browser.getTitle().then(function(currentTitle){
                                if(currentTitle.indexOf('Xeditor') != -1) {
                                    console.log('window title is' +currentTitle);
                                    browser.driver.manage().window().maximize(); 
                                    browser.sleep(10000);
                                                                                                                        
                                    //browser.switchTo().defaultContent().then(function(el){
                                    browser.driver.switchTo().frame(0).then(function(el){
                                       console.log(el); browser.executeScript('arguments[0].innerText=arguments[1];',browser.findElement(by.id('visible-e4')),'This is for testing abstract').then(function(){
                                        //browser.findelement(by.css('[id="visible-e4"]')).sendKeys('This is //for testing abstract').then(function(){
                                            browser.switchTo().defaultContent().then(function(){
                                                browser.findElement(by.css('[id="button-1027-btnIconEl"]')).click();
                                                browser.ignoreSynchronization = false;
                                                browser.sleep(15000);
                                                
                                            });
                                            
                                        }); 
                                    }); 
                                                                                    
                                                                                
                                }
                            });
                        });             
                                                
                    }
                                //if we get to this point we did not find any window with the specified window title
                });
                 

            });
        };
	
	this.clicksubrange=function(){
           // browser.executeScript("arguments[0].scrollIntoView();", _Selectsubrange.getWebElement());
            return _Selectsubrange.click();
	}; 

    this.errorMessage=function(){
		_errorMessage.getText();
    };
    
    this.clickaddCompanyButton=function(){
        element.all(by.css('.btn.btn-default.btn-plus.right')).get(0).click();
    };

    this.clickcompanySelect1=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20).click();
    };
    
    this.clickcompanySelect2=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(21).click();
    };

    this.clickcompanySelect3=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(22).click();
    };

    this.clickcompanySelect4=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(23).click();
    };
    this.clickcompanySelect5=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(24).click();
    };
    this.clickcompanySelect6=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(25).click();
    };
    this.clickcompanySelect7=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(26).click();
    };
    this.clickcompanySelect8=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(27).click();
    };
    this.clickcompanySelect9=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(28).click();
    };
    this.clickitemlistforcompany1=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20).click();
    };

    this.clickitemlistforcompany2=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(21).click();
    };

    this.clickitemlistforcompany3=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(22).click();
    };

    this.clickitemlistforcompany4=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(23).click();
    };
    this.clickitemlistforcompany5=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(24).click();
    };
    this.clickitemlistforcompany6=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(25).click();
    };
    this.clickitemlistforcompany7=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(26).click();
    };
    this.clickitemlistforcompany8=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(27).click();
    };
    this.clickitemlistforcompany9=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(28).click();
    };

    this.clickonSubRange=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20).click();
    };

    this.subRange=function(){
      return element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20).getText();
    };

    this.addsubRange=function(){
        element.all(by.model('searchtext')).get(20).sendKeys('Decreto Foral');
    };

    this.addsubRange1=function(){
        element.all(by.model('searchtext')).get(20).sendKeys("Convenio Colectivo");
    };

    this.addsubRange2=function(){
        element.all(by.name('lnkSearchDropdown')).get(11).click();
        element.all(by.name('dropdown-item')).get(8).click();
    };

    this.clickonsearchButton=function(){
        element.all(by.css('[ng-click="search($event)"]')).get(21).click();
    };

    this.clickonSelectedsubRange=function(){
        element(by.css('[ng-click="select(item)"]')).click();
    };

    this.addcompany1=function(company1){
        element.all(by.model('searchtext')).get(20).sendKeys(company1);
    };

    this.addcompany2=function(company2){
        element.all(by.model('searchtext')).get(21).sendKeys(company2);
    };

    this.addcompany3=function(company3){
        element.all(by.model('searchtext')).get(22).sendKeys(company3);
    };

    this.addcompany4=function(company4){
        element.all(by.model('searchtext')).get(23).sendKeys(company4);
    };
    this.addcompany5=function(company5){
        element.all(by.model('searchtext')).get(24).sendKeys(company5);
    };
    this.addcompany6=function(company6){
        element.all(by.model('searchtext')).get(25).sendKeys(company6);
    };
    this.addcompany7=function(company7){
        element.all(by.model('searchtext')).get(26).sendKeys(company7);
    };
    this.addcompany8=function(company8){
        element.all(by.model('searchtext')).get(27).sendKeys(company8);
    };
    this.addcompany9=function(company9){
        element.all(by.model('searchtext')).get(28).sendKeys(company9);
    };

    this.clickcompanysearchButton1=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(12).click();
    };

    this.clickcompanysearchButton2=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(13).click();
    };
    
    this.clickcompanysearchButton3=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(14).click();
    };

    this.clickcompanysearchButton4=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(15).click();
    };
    this.clickcompanysearchButton5=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(16).click();
    };
    this.clickcompanysearchButton6=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(17).click();
    };
    this.clickcompanysearchButton7=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(18).click();
    };
    this.clickcompanysearchButton8=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(19).click();
    };
    this.clickcompanysearchButton9=function(){
        element.all(by.css('.search-dropdown-c.dropdown-toggle.ng-binding')).get(20).click();
    };

    this.hascompanysearchButton=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _companysearchButton.getWebElement());
            return _companysearchButton.isDisplayed();
			};
			
    this.containsItem= function () {
      //return element.all(by.name('lnkSearchDropdown')).get(testData.legislation.sections.collective_agreement.locator_id_company).getText();
            return element(by.css('[model="element.empresa"]')).element(by.name('lnkSearchDropdown')).getText();
    };
	
	this.clickcompanysearchButton=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _companysearchButton.getWebElement());
            return _companysearchButton.click();
			};

    this.clickSearchDocumentType=function(){
		_searchDocumentType.click();
	}; 

    this.selectsubrangevaule=function(){
		element(by.linkText('Decreto Foral'));
	};
	
	this.title= function(){
		return browser.getTitle();
	};
	
	this.hasworkcenterfreetext1=function(){
        return _freetext1.isDisplayed()
    };
        
    this.hasworkcenterfreetext2=function(){
        return _addworkcenter.isDisplayed()};
        
    this.hasworkcenterfreetext3=function(){
        return _addworkcenter2.isDisplayed()};
        
    this.haschangeCompanyserchbox=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _changeCompany.getWebElement());
            return _changeCompany.isDisplayed();
	};   
    
	this.hasaddworkcenter=function(){_addworkcenter2.isPresent()};
	
	this.hasaddworkcentericon=function(){
        return _addworkcentericon.isPresent()};
        
	this.clickcompanySelect= function(){
            browser.executeScript("arguments[0].scrollIntoView();", _companySelect.getWebElement());
            return _companySelect.click();
    };
    
    this.clickaddworkcentericon=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _addworkcentericon.getWebElement());
            return _addworkcentericon.click();
	};   

    this.clickaddworkcenter=function(){
	browser.executeScript("arguments[0].scrollIntoView();", _addworkcenter.getWebElement());
    return _addworkcenter.click();
	};
	
	this.clickaddworkcenter2=function(){
           browser.executeScript("arguments[0].scrollIntoView();", _addworkcenter2.getWebElement());
            return _addworkcenter2.click();
	};
	
    this.clickdeleteworkcenter=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _deleteworkcenter.getWebElement());
            return _deleteworkcenter.click();
	}; 
	
    this.clickdeleteworkcenter2=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _deleteworkcenter2.getWebElement());
            return _deleteworkcenter2.click();
	};
	
    this.addfreetext1= function () {
            browser.executeScript("arguments[0].scrollIntoView();", _freetext1.getWebElement());
            return _freetext1.sendKeys('text1');
	};

    this.addfreetext2= function () {
            browser.executeScript("arguments[0].scrollIntoView();", _addworkcenter.getWebElement());
            return _addworkcenter.sendKeys("text1");
	};

    this.addfreetext3= function () {
             browser.executeScript("arguments[0].scrollIntoView();", _addworkcenter2.getWebElement());
           return _addworkcenter2.sendKeys("text2");
	};
	
	this.changecompany= function () {
            browser.executeScript("arguments[0].scrollIntoView();",_changeCompany.getWebElement());
            return _changeCompany.sendKeys('112 Asturias');
	};
        
    //selecting subrange value Calendario laboral
    this.selectsubrange=function(){
            browser.executeScript("arguments[0].scrollIntoView();", _selectsubrangevaule.getWebElement());
            return _selectsubrangevaule.click();
	};

    this.save=function(){
	return _saveButton.click();
    }; 

    this.clickonsavebutton=function(){
       element(by.css('[ng-click="ok()"]')).click();
        };

    this.legislativebody=function(){ element(by.id('legislativeMainBody'));};
   
    this.addlegislativebody= function (value) {
			 
			return legislativebody.click().then(function () {				
                return legislativebodyfilterInput.sendKeys(value).then(function () {  
                   
					return legislativebodyfilterButton.click().then(function () {
						return itemListForLegislativeBody.click();
                         
					});
				});
			});
	};

    this.legislativebodyfilterInput= function(){
		element(by.id('legislativeMainBody')).element(by.name('txtdropdownsearch'));
	};        
		
    this.legislativebodyfilterButton= function(){
		element(by.id('legislativeMainBody')).all(by.name('btndropdownsearch')).get(1);
           };
       
    this.addstatutetype= function (value) {
			 
			return statutetype.click().then(function () {				
                return StatutetypefilterInput.sendKeys(value).then(function () {  
                   
					return StatutetypefilterButton.click().then(function () {
						return itemListForStatuteType.click();
                         
					});
				});
			});
	};
	
    this.itemListForStatuteType= function(){
		element(by.id('legislativeBodyStatueType0')).all(by.css('[ng-repeat="item in choices"]')).get(0);
		};
    
    this.statutetype= function(){
		element(by.id('legislativeBodyStatueType0'));};
		
    this.StatutetypefilterInput= function(){
		element(by.id('legislativeBodyStatueType0')).element(by.name('txtdropdownsearch'));
	};
	
    this.StatutetypefilterButton=function(){
		element(by.id('legislativeBodyStatueType0')).all(by.name('btndropdownsearch')).get(1);
           };	
		   
	this.clickprecisiondate=function(){this._precisiondate.click();};
	
    this.selectmainKeyword= function (){
    browser.executeScript("arguments[0].scrollIntoView();", _mainKeyword.getWebElement());
    return _mainKeyword.click().then(function () {
    return mainkeywordvalue.click();
        
	});
	};
    
    this.mainkeywordvalue=function(){
		element.all(by.css('li[ng-repeat="item in choices"]')).get(0).element(by.css('a[ng-click="selection(item)"]'));};
    
   
    
   this.publicationfilterInput= function(){
	   element(by.css('[model="docPublication.publicacion"]')).element(by.name('txtdropdownsearch'));
   };
   
   this.publictionfilterButton= function(){
	   element(by.css('[model="docPublication.publicacion"]')).all(by.css('[name="btndropdownsearch"]')).get(1);
           };	   
	
	this.addpubliction= function (value) {
			
			return _addpublication.click().then(function () {				
                return publicationfilterInput.sendKeys(value).then(function () {  
                   
					return publictionfilterButton.click().then(function () {
                        
						return itemList1.click();
                         
					});
				});
			});
	};
	
    this.itemList1=function(){
	element(by.css('[model="docPublication.publicacion"]')).all(by.css('[ng-repeat="item in choices"]')).get(0).element(by.css('[ng-click="select(item)"]'));
            };
                
    this.itemList2=function(){
		element(by.id('publication.edit.section.date.00')).all(by.repeater('item in choices')).get(0);
            };
                
    this.publicationfilterInput=function(){element(by.id('publication.edit.section.description0')).element(by.name('txtdropdownsearch'));};
         
    this.publictionfilterButton=function(){
        element(by.id('publication.edit.section.description0')).element(by.name('btndropdownsearch'));
           };
       
    this.datefilterInput=function(){element(by.id('publication.edit.section.date.00')).element(by.name('txtdropdownsearch'));};
         
    this.datefilterButton=function(){element(by.id('publication.edit.section.date.00')).element(by.name('btndropdownsearch'));
           };
	
   
    this.practiceareafilterInput=function(){
	element(by.css('[onselect="practiceArea.addManualCollection"]')).element(by.name('txtdropdownsearch'));};
         
    this.practiceareafilterButton=function(){
		element(by.css('[onselect="practiceArea.addManualCollection"]')).all(by.name('btndropdownsearch')).get(1);
           };
       
   
	
	this.itemList3=function(){
		element(by.css('[onselect="practiceArea.addManualCollection"]')).all(by.repeater('item in choices')).get(0).element(by.css('[ng-click="select(item)"]'));
            };
                
    //to create a new document 
    this.create=function(){
            return _saveButton.click();
			};  
    
    this.AddCompany=function(){
		element(by.css('[ng-click="collectiveAgreementsController.addCompany()"]')).click();
       };
   
    
    this.EnterWorkcenter=function(){
		element(by.css('[ng-model="wc.description"]')).sendKeys();
       };
   
    this.changeSubrange= function () {
        browser.executeScript("arguments[0].scrollIntoView();", _subrangedropdownsearch.getWebElement());
			return _subrangedropdownsearch.click();
		};
	
	this.ClicksubrangeBody=function(){
        _subrangeBody.click();};   
    
    this.subrangeserachButton=function(){
        element.all(by.css('[ng-click="search($event)"]')).get(21).click();
    };
    
	this.itemList=function(){
        element.all(by.css('[ng-click="select(item)"]')).get(0).click();
     };
    
    this.clickGeneral=function(){
        _expandGeneral.click();};
        
    
    this.selectDocument=function(){
     element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).$('[value="2"]').click();
      };    
    
    this.isCollectiveAgreementDisplay=function(){
		return element(by.css('[ng-click="expandCollapse.status.collective.open=!expandCollapse.status.collective.open"]')).isDisplayed();
	};
    
    this.clickAddButtonBill=function(){
      element.all(by.css('[ng-click="metaDataCtrl.addNewDocument()"]')).get(1).click();
    };

    this.clickCopyButtonBill=function(){
        element.all(by.css('[ng-click="metaDataCtrl.copyDocument()"]')).get(1).click();
      };

    this.clickOnExitEditionmode=function(){
        element.all(by.css('[ng-click="metaDataCtrl.cancelPopUp()"]')).get(1).click();
      };

    this.clickCalculationButton=function(){
        element(by.id("validation-id")).click();
      };

      this.clickOK=function(){
        element(by.css('[ng-click="ok()"]')).click();
      };

      this.clickAddPopupButton=function(){
        element(by.css('.btn.btn-primary.btn-medium.ng-scope')).click();
      };
      
    this.isDisplayNotaSubrange=function(){
		element(by.id('collectiveAgreementsSubrangoNoteInput')).isDisplayed();
	};
     
    this.clickPlus=function(){
        element(by.css('[ng-click="generalDataController.addLanguage()"]')).click();
       };
   
    this.selectLangauge=function(){
		element(by.xpath('.//*[@id="content-section"]/div[2]/div/div[4]/div[2]/div[2]/div[1]/select')).sendKeys("Aleman");
       };
   
    this.clickNotadelSubrange=function(){
        element(by.id('collectiveAgreementsSubrangoNoteMultilang')).click();
       };
   
    
    this.langaugeText=function(){
       return element(by.xpath('.//*[@id="containerLanguague"]/div[2]/label')).getText();
       };
   
    this.selectDocument=function(){
    return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).sendKeys("");
      return element(by.css('[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]')).click();      
	};
    
    this.copyButton=function(){element(by.css('[ng-click="metaDataCtrl.copyDocument()"]')).click();};
      
    this.exitButton=function(){element(by.id('btnExitEditMode')).click();
       };
   
    this.yesButton=function(){element(by.css('[ng-click="ok()"]')).click();
       };
    
    this.selectSubrange= function(data){
        element(by.css('[onload="collectiveAgreementsController.searchCollection"] a[name="lnkSearchDropdown"]')).click();
        element(by.css('[onload="collectiveAgreementsController.searchCollection"] input[ng-model="searchtext"]')).sendKeys(data);
        element(by.css('[onload="collectiveAgreementsController.searchCollection"] input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
        element(by.cssContainingText('[onload="collectiveAgreementsController.searchCollection"] [ng-click="select(item)"]',data)).click();
    };
	
 };

module.exports =new  LegislationCollectiveAgreementSection;



