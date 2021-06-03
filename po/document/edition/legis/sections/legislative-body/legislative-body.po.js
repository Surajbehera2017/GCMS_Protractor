var LegislationBodyEdition = function() {

    var _expandButton =  element(by.id('collapsed-legislation-link'));
    var _collapseButton =  element(by.id('non-collapsed-legislation-link'));
        
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
    
        var _StatuteNotecolorblue = element(by.id('editStatueNoteId-0'));
        var _EditStatuteNote = element(by.css('.modal-header.header-import'));
      
        this.hasEditStatuteNote= function() {
        return _EditStatuteNote.isDisplayed();
        };
    
        var _EntertextStatuteNoteInput = element.all(by.css('#containerLanguague div input'));
        var _ClickApply = element(by.css('.btn.btn-primary.ng-scope'));
        var _EditedStauteValue = element(by.binding('statuteType.rangoMultilang.list | multilang'));
        
        var _MainKeyWordcolobule = element(by.css('div #keyword-container div div.ng-isolate-scope'));
        var _EditPageMainKeyWord = element(by.css('.modal-header.header-import'));
        var _SearchMainkeyWord = element.all(by.id('freetext-button')).get(0);
        var _ListofvalueforMainKeyWord = element(by.css('a[ng-click="selection(item)"]'));
        
          this.title= function() { 
          return browser.getTitle(); 
          };
          
        var verifyEntertextStatuteNoteInput = element(by.model('item.description'));
        var _legisaddButton = element(by.id('add.leg.body'));
        var _legistxtdropdownsearch = element.all(by.css('[name="txtdropdownsearch"]')).get(4);
        var _addStatutetypePlusButton = element(by.css('[id="add-statute-type"]'));
        var _addProvisondatePlusButton = element(by.css('[id="add-statute-type"]'));
        var _connectorComboBox = element.all(by.css('div[id^="connetor-col-1"]')).get(0);
        var _vidRankingComboBox = element(by.id('combo-vid'));
        var _legisNumberconnectorComboBox = element(by.id('leg-number.connector-1-0'));
        var _statueType = element(by.css('#legislativeBodyStatueType1 a[name="lnkSearchDropdown"]'));  
        var _statueTypeFirst = element(by.css('#legislativeBodyStatueType0 a[name="lnkSearchDropdown"]'));  
        var _legisstatueTypedropbox = element(by.css('#legislativeBodyStatueType1 [class="col-md-8"] [name="lnkSearchDropdown"]'));
        var _legisstatueTypedropboxFirst = element(by.css('#legislativeBodyStatueType0 [class="list-unstyled ng-isolate-scope"] [name="txtdropdownsearch"]'));

        var _provisonDateButton = element.all(by.repeater('statuteType in statuteData.statuteList ')).get(1).element(by.id('add.provision.date-1-'));
        var _provisonDateButton1 = element(by.id('buttonPlusProvisionDate-1-0'));
        var _deleteprovisonDateButton = element(by.id('provision-delete-0-0'));
        var _deletelegisNumButton = element(by.id('delete-comosition-1-0')).all(by.css('i.button-delete.bento-icon-close-circle')).get(0);
        var _previousnote = element.all(by.css('input[ng-model="(statuteData.viewBaseLang(num.numdnpMultilang.list)).description"]')).get(1);
        var _note = element.all(by.css('input[ng-model="(statuteData.viewBaseLang(num.numdntMultilang.list)).description"]')).get(1);
        var _deletestatuetypeButton = element(by.className('button-block-delete bento-icon-close-circle'));
        var _legisNumberButton = element(by.id('add.leg-number2-0-0'));
        var _legisnumModel = element(by.id('addModelComboBoxInput-1-0'));
        var _legisNumInput = element.all(by.css('input[ng-model="num.numdn"]')).get(1);
        var _legisYearInput = element.all(by.css('input[placeholder="yyyy"]')).get(1);
        var _deletelegisBody = element(by.className('button-delete bento-icon-close-circle'));
        var _provisonDateEditBox = element(by.xpath("//*[@class='data-picker-prevision-date ng-isolate-scope']//input"));
        //var _provisonDateEditBox = element(by.css('datepickr[name="data-picker-prevision-date-1-0"]')).all(by.css('input[ng-model="date"]')).get(0);
        var _provisonCalenderButton = element(by.css('datepickr[name="data-picker-prevision-date-1-0"]')).element(by.css('.bento-icon-calendar.data-picker-icon'));
    
        var _legsalias = element(by.css('input[id^="mainAlias"]'));
        var _mainKeyword = element.all(by.css('#containerLanguague [model="item.description"] [name="txtdropdownsearch"]')).get(0);
        var _documentName = element(by.css('span[ng-bind^="statuteData.documentNameMultilang"]'));
        
       this.documentName= function() {
                return _documentName.getText();
        };
        
    
        this.haslegisaddButton= function() {
                return _legisaddButton.isDisplayed();
           };
         
        this.hasstatueType= function() {
                return _statueType.isDisplayed();
        };
        
        this.hasprovisonDateButton= function() {
                return _provisonDateButton.isDisplayed();
        };
     
         
        this.hasaddStatutetypePlusButton= function() {
                return _addStatutetypePlusButton.isDisplayed();
            };
            
        this.hasconnectorComboBox= function() {
                return _connectorComboBox.isDisplayed();
        };
        
        this.hasvidRankingComboBox= function() {
                return _vidRankingComboBox.isDisplayed();
            };
        
        this.haslegisNumberconnectorComboBox= function() {
                return _legisNumberconnectorComboBox.isDisplayed();
            };
            
        this.haslegisnumModelComboBox= function() {
                return _legisnumModel.isDisplayed();
            };
       
        this.haspreviousnote= function() {
                return _previousnote.isDisplayed();
            };
      
        this.hasnote= function() {
                return _note.isDisplayed();
            };
       
       this.clickconnectorComboBox= function() {
                return _connectorComboBox.click();
            };
       
        this.clickvidRankingComboBox= function() {
                return _vidRankingComboBox.click();
            };
        
        this.clicklegisNumberconnectorComboBox= function() {
                _legisNumberconnectorComboBox.click();
        };
        
        this.clicklegisnumModelComboBox= function() {
                return _legisnumModel.click();
            };
        
        this.clickaddStatutetypePlusButton= function() {
                return _addStatutetypePlusButton.click();
            };
        
        this.clickprovisonCalenderButton= function() {
                return _provisonCalenderButton.click();
            };
        
        this.clickaddProvisondatePlusButton= function() {
                return _provisonCalenderButton.click();
            };
            
        this.clickprovisonDateforstatueButton= function() {
                 
                return _provisonDateButton.click();
            };
        
        this.clickprovisonDateButton= function() {
                return _provisonDateButton1.click();
            };
        
        this.ClicklegisaddButton= function() {
                return _legisaddButton.click();
            };
        
        this.ClicklegisNumberButton= function() {
                return _legisNumberButton.click();
            };
        
        var _legislativeSecondaryBody = element(by.css('#legislativeSecondaryBody1 [class="col-md-8"] [name="lnkSearchDropdown" ]'));
        var _abbrevationList = element(by.css('[id="abrebitation-input"]')).element(by.css('a[name="lnkSearchDropdown"]'));
        var _abbrevationDropdownsearch = element(by.css('[id="abrebitation-input"]')).element(by.css('input[ng-keypress="searchOnEnter($event)"]'));
                                                                      
        this.haslegislativeSecondaryBody= function() {
                return _legislativeSecondaryBody.isDisplayed();
            };
        
        this.ClicklegislativeSecondaryBody= function() {
                return _legislativeSecondaryBody.click();
            };
        
        this.ClickabbrevationList= function() {
                return _abbrevationList.click();
            };
        
        this.clickstatueType= function() {
       
       return _statueType.click();
            };

        this.clickstatueTypeFirst= function() {
                
            return _statueTypeFirst.click();
        };
            
        var _selectconnector = element(by.css('div[id^="connetor-col-1"]'));
        var _selectvidRanking = element(by.css('select[id^="combo-vid"]'));
        var _selectlegisNumberConnector = element(by.id('leg-number.connector-1-0'));
        var _selectlegisNumberModel = element(by.id('addModelComboBoxInput-1-0'));
        var selectstatuetype = element(by.css('div[id^="statute.data.type"]'));
        
        this.selectvidRanking = function (positionNum) {
            if (positionNum) {
                _selectvidRanking.click().then(function(result){   
                    //var options = 
                    _selectvidRanking.all(protractor.By.tagName('option')).then(function (options) {
                        options[positionNum].click();
                    });
                });
            };
        };
        
        this.selectconnector = function (positionNum) {
            if (positionNum) {
                _selectconnector.click().then(function(result){   
                    //var options = 
                    _selectconnector.all(protractor.By.tagName('option')).then(function (options) {
                        options[positionNum].click();
                    });
                });
            };
        };

        this.selectlegisNumberConnector = function (positionNum) {
            if (positionNum) {
                _selectlegisNumberConnector.click().then(function(result){   
                    //var options = 
                    _selectlegisNumberConnector.all(protractor.By.tagName('option')).then(function (options) {
                        options[positionNum].click();
                    });
                });
            };
        };

        this.selectlegisNumberModel = function (positionNum) {
            if (positionNum) {
                _selectlegisNumberModel.click().then(function(result){   
                    //var options = 
                    _selectlegisNumberModel.all(protractor.By.tagName('option')).then(function (options) {
                        options[positionNum].click();
                    });
                });
            };
        };
        
        this.hasEntertextStatuteNote= function() {
                return _EntertextStatuteNoteInput.isDisplayed();
            };
        
        this.ClearOldTextEntertextStatuteNote= function() {
                return _EntertextStatuteNoteInput.clear();
            };
    
        this.hasSetTextinStatuteNote= function() {
                return _EntertextStatuteNoteInput.isDisplayed();
            };
    
        this.clickStatuteNotecolorblue= function() {
               
                return _StatuteNotecolorblue.click();
            };
        
    
        this.ClickApply= function() {
                return _ClickApply.click();
            };
        
        _scrollTo = function(webelement) {  
                // There are some issues with the double scroll when trying to click some elements
                browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
            };
        
        
        this.add= function(value) {
                
            //return _EntertextStatuteNoteInput.clear();  
            return _EntertextStatuteNoteInput.sendKeys(value);
            };
        
        this.legisNumber= function(value) {
                
                 _legisNumInput.clear()
                return _legisNumInput.sendKeys(value);
            };
       
        this.legismainKeyword= function(value) {
               
                 _mainKeyword.clear();
                return _mainKeyword.sendKeys(value);
            };
        
        this.provisonDateEditBox= function(value) {
               
                 _provisonDateEditBox.clear();
                return _provisonDateEditBox.sendKeys(value);
            };
        
        this.legisYear= function(value) {
                
                 _legisYearInput.clear();
                return _legisYearInput.sendKeys(value);
            };
        
        this.legispreviousNote= function(value) {
                
                 _previousnote.clear();
                return _previousnote.sendKeys(value);
            };
        
        this.legisNote= function(value) {
                
                 _note.clear();
                return _note.sendKeys(value);
            };
        
        
        this.clickMainKeyWordcolobule= function() {
                
                return _MainKeyWordcolobule.click();
    
            };
        
        this.isVisibleEditPageMainKeyWord= function() {
        
                return _EditPageMainKeyWord.isPresent();
            };
            
        this.hasSearchMainkeyWord= function() {
                return _SearchMainkeyWord.isDisplayed();
            };
          
        this.hasListofvalueforMainKeyWord= function() {
                return _ListofvalueforMainKeyWord.isPresent();
            };
          
         
        this.clickSearchMainkeyWord= function() {
                
                return _SearchMainkeyWord.click();
    
            };
        
        this.clickListofvalueforMainKeyWord= function() {
                
                return _ListofvalueforMainKeyWord.click();
    
            };
        
        this.getvalueStatuteNote= function() {
            
            return _EntertextStatuteNoteInput.get(0).getAttribute('value');
              };
        
        var _enterValueInSecondMainKeyword = element.all(by.css('[id="containerLanguague"] [name="txtdropdownsearch"]'));
        
        this.enterValueInSecondMainKeyword= function() {
                _enterValueInSecondMainKeyword.get(1).clear();
                return _enterValueInSecondMainKeyword.get(1).sendKeys(this._enterValueInSecondMainKeyword.get(0).getAttribute('value'));   
                
              };
        
        var legisserachButton = element.all(by.css('li[ng-repeat^="element in statuteData.organosEmisoresList"] button[ng-click="search($event)"]')).get(1);
        var _statueTypeserachButton =  browser.element(by.id('statute.data.type.1')).element(by.css('button[ng-click="search($event)"]'));
        var itemList = element(by.css('[name="dropdown-item"]'));
        
        this.addlegislativebody= function(value) {
                
            return _legistxtdropdownsearch.sendKeys(value);
            
        };

        this.clickSearchButtonLegislativeSecondaryBody = function() {
            legisserachButton.click();
        };

        this.clickItemList = function() {
            itemList.click(); 
        };
        
        this.changelegislativeBody= function(value) {
                
                return _legistxtdropdownsearch.sendKeys(value);
                 legisserachButton.click();
                //return itemList.click();    
    };
        
        this.modifyAbbreviation= function(value) {
                
                 _abbrevationDropdownsearch.sendKeys(value);
                return _abbrevationDropdownsearch.sendKeys(protractor.Key.ENTER);
                 
        };
        
        this.modifyAlias= function(value) {
                
                 _legsalias.clear();
                return _legsalias.sendKeys(value);
            };
        
        this.clickStatuteType= function() {

            _legisstatueTypedropbox.click();
        };
        
        this.addstatueType= function(value) {
                
            return element(by.css('#legislativeBodyStatueType1 [class="dropdown-menu"] [class="padding"] [name="txtdropdownsearch"]')).sendKeys(value);
            //return _legisstatueTypedropbox.sendKeys(protractor.Key.ENTER);
        };

        this.clickSearchBtnStatuteType= function() {
            
            element(by.css('#legislativeBodyStatueType1 [class="dropdown-menu"] [class="padding"] [class="input-group-btn"] [name="btndropdownsearch"]')).click();
        };
        
        this.changeStatueType= function(value) {
                
            return _legisstatueTypedropbox.sendKeys(value, protractor.Key.ENTER);
    };

    this.changeStatueTypeFirst= function(value) {
        
    return _legisstatueTypedropboxFirst.sendKeys(value, protractor.Key.ENTER);
};
    
        
        this.deletestatueType= function() {
                
                _deletestatuetypeButton.click();
    
            };
        
        this.deleteprovisonDate= function() {
                
            _deleteprovisonDateButton.click();
    
            };
        
        this.deletelegisNumber= function() {
                
                _deletelegisNumButton.click();
    
        };
        
        this.deletelegislativeBody= function() {
                
            _deletelegisBody.click();
    
            };
        
        this.pluralSelect= function() {
            return element(by.id('red-checkbox-input-0')).isSelected();
       };
    
        
        this.clickPlural= function() {
            element.all(by.css('.borde-checkbox')).get(1).click();
       };

       this.clickEditPopup = function() {
        element(by.css('[ng-click="statuteData.editAbstractUniqueLang()"]')).click();
     };

    this.exitEditMode = function(){
        element.all(by.id('btnExitEditMode')).get(1).click();
        
    };

    this.clickYes = function(){
        element(by.name('btnConfirmationDialogAccept')).click();
    };

    this.addButton = function(){
        element.all(by.id('btnAddfixSection')).get(1).click();
        
    };

    this.clickDeleteLegislativeBodyList = function() {
        element.all(by.css('.button-delete.bento-icon-close-circle')).get(1).click();
   };

   this.clickAddBtnConnector = function() {
    element(by.id('add.leg-number2-0-0')).click();
   };

   this.clickWorldIconMainKeyword = function() {
    element(by.xpath('.//*[@id="keyword-container"]/div[2]/a')).click();
   };

   this.isMainKeywordPopupDisplayed = function() {
    element(by.css('.modal-content')).isPresent();
   };

   this.clickApplyBtnMainKeyword = function() {
    element(by.css('[ng-click="save()"]')).click();
   };

    
    
    };
    module.exports = new LegislationBodyEdition();