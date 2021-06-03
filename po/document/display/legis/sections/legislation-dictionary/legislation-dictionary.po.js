var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');


var legislationdictionarysection = function() {


	var _searchViewAllLink = element(by.css('[ng-click="legDictionary.openLegDictionaryTable()"]'));
	var _legisDecallview = element(by.css('[ng-click="legDictionary.openLegDictionaryTable()"]'));
	var _legisDeceditPencil = element.all(by.css('[ng-click="editEntry($item.rowId)"]')).first();
	var _editlegislationDec = element(by.linkText('Edit Legislation Dictionary'));
	var _editButton = element(by.linkText('Edit'));
	var _nmdpOnAddPage = element(by.id('nmdp'));
	var _lastKeywordOnAddLegDict = element.all(by.css('.thesaurusTerm ng-binding')).last();
	var _ndl = element(by.css('[value="NDL"]'));
	var _nmdnOnAddPage = element(by.id('nmdn'));
	var _nmdtOnAddPage = element(by.id('nmdt'));
	var _nmdxOnAddPage = element(by.id('nmdx'));
	var _nmdaOnAddPage = element(by.id('nmda'));
	var _unit = element(by.css('[id="unit"]'));
	var _elementcount = element.all(by.css('[wj-part="cells"]>div'));
	var _closeButton = element(by.css('[ng-click="close()"]'));
	var _addentry = element(by.css('[ng-click="addEntry()"]'));
	var _showfilter = element(by.css('[id="modal.legislationDictionary.checkModel.show.filters"]'));
	var _fullCheckboxOnAddPage = element(by.id('full'));
	var _ChronologicalCheckboxOnAddPage = element(by.id('chrono'));
	var _searchOnAddPage = element.all(by.css('a[name="lnkSearchDropdownNav"]')).last();
	var _selectSearchValueOnAddPage = element.all(by.css('[ng-click="select(item)"]')).get(3);
	var _nextPagination = element(by.css('[ng-click="next()"]'));
	var _prevoiusPagination = element(by.css('[ng-click="previous()"]'));
    var _lastPagination = element(by.css('[ng-click="last()"]'));
	var _firstPagination = element(by.css('[ng-click="first()"]'));
	var _importButton = element(by.linkText('Edit'));
	var _addButton = element(by.css('[ng-click="addEntry()"]'));
	var _plusIconOnAddPage = element(by.css('div[name="addEntry"]'));
	var _add = element(by.css('[ng-click="addEntry()"]'));
	var _itemList = element.all(by.repeater('item in choices'));
	var _countKeyword = element.all(by.repeater('item in legDictionary.legDictionaryList | orderBy: \'value\' | limitTo:5 | unique:\'value\''));
	var _showFiltersButton = element(by.css('[ng-click="show = !show"]'));
	var _addOnSection = element(by.css('[ng-click="legDictionary.addEntry()"]'));
	var _selectedSectionAddPage = element(by.css('[class="label legDicTermLabel"]'));
	var _crossButtonOnAddPage = element(by.css('[ng-click="closeAdd()"]'));
	var _cancelButtonOnAddPage = element(by.id('btnCloseAdd'));
	var _nextPaginationOnAddPage = element(by.css('[ng-click="LegDictionaryAddModalCtrl.next()"]'));
	var _previousPaginationOnAddPage = element(by.css('[ng-click="LegDictionaryAddModalCtrl.previous()"]'));
	var _firstPaginationOnAddPage = element(by.css('[ng-click="LegDictionaryAddModalCtrl.first()"]'));
	var _lastPaginationOnAddPage = element(by.css('[ng-click="LegDictionaryAddModalCtrl.last()"]'));
	var _unit = element.all(by.css('[ng-click="FatherController.toggleExpand(node);"]')).get(2);
	var _unitOther = element.all(by.css('[ng-click="FatherController.toggleExpand(node);"]')).get(1);
	var _ngrepeater = element.all(by.repeater('term in LegDictionaryAddModalCtrl.dictionaryTerms.list')).get(1);
	var _selectunit = element.all(by.css('[ng-click="LegDictionaryAddModalCtrl.hideAllUnitLevelInputs()"]')).get(2);
    var _selectunit = element(by.css('[id="unitId-18540000"]'));
	var _addunit = element(by.name('addUnit'));
	var _serachunitvalue = element(by.model('[ng-click="LegDictionaryAddModalCtrl.search"]'));  
	var _searchButton = element(by.id('btnSearchUnit'));
	var _displayedunit = element(by.id('label thesaurusTermLabel ng-binding'));    
	var _addselectedunit = element(by.css('[ng-click="LegDictionaryAddModalCtrl.addEntriesCOPYEDIT()"]'));    
	var _saveButton = element(by.id('btnSaveAdd'));      
	var _cancelButton = element(by.id(' btnCloseAdd'));    
	var _okButton = element(by.css('[ng-click="ok()"]'));
	var _gobackButton = element(by.id('btnGoBack'));
	var _displayMessage = element(by.name('txtInfoDialog'));    
	var _unitidentifier = element(by.xpath("//SPAN[@class='feact'and contains(@onclick,'CCUtility.crtCtrla')]"));
	var _deleteentry = element(by.css('[ng-click="LegDictionaryAddModalCtrl.removeEntry(entry)"]'));
	var _copyLegislationDictionary = element(by.css('[ng-if="LegDictionaryAddModalCtrl.copyMode"]')); 
	var _closeButton = element(by.css('[ng-click="closeAdd()"]')); 
	var _closeTable = element(by.id('modal.legislationDictionary.close'));
	var _selectItem = element.all(by.model('$item.selected')).get(0);
	var _selectItemOnAddPage = element.all(by.model('term.selected')).get(1);  
	var _cancelButton = element(by.css(''));
	var _searchDelete = element(by.css('[ng-click="deleteEntryMassive()"]'));
	var _TotalViewcount = element(by.css('[ng-click="legDictionary.openLegDictionaryTable()"]'));
	var _nextButton = element(by.css('[ng-click="next()"]'));	
	var _previousButton = element(by.css('[ng-click="previous()"]'));	
	var _pencilIcon = element(by.css('[ng-click="editEntry($item.rowId)"]'));
	var _okDialogAddPage = element(by.css('[ng-click="ok()"]'));
	var _closeLegDicTable = element(by.css('[ng-click="close()"]'));
	var _hashButtonOnAdd = element(by.css('[ng-click="FatherController.toggleLevelSelector(node)"]'));	
	var _hashTextOnAdd = element(by.model('node.level'));	
	var _addUnit = element(by.css('[ng-click="FatherController.newSubItem(node)"]'));
	var _removeAddedUnit = element(by.css('[ng-click="LegDictionaryAddModalCtrl.deleteElemetOflistSelectedNode($index)"]'));
	var _errorOnSave = element.all(by.css('.col-md-10')).last();
	var _keywordsection = element.all(by.repeater('term in LegDictionaryAddModalCtrl.dictionaryTerms.list')).get(1).element(by.model('term.selected'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));

	this.LegislationDictionarySection = function () {
	//this.tresaurus=new Tresaurus();
	expandable = new ExpandableToggle('linkUncollapseLegislationDictionarySection', 'linkCollapseLegislationDictionarySection');

	};

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

	this.isPresentViewAllLink = function () {
			return _searchViewAllLink.isPresent();
	};	
	
    this.gettextViewAllLink = function () {
			return _searchViewAllLink.getText();
	};	
	
	this.getTextLastKeywordOnAddLegDict = function () {
			return _lastKeywordOnAddLegDict.innerHtml();
	};
	
	this.isPresentNmdpOnAddPage = function () {
			return _nmdpOnAddPage.isPresent();
	};
	
	this.clickNmdpOnAddPage = function () {
			return _nmdpOnAddPage.click();
	};
	
	this.selectValueNmdpOnAddPage = function () {
		return _ndl.click();
	};
     
	this.clearNmdnOnAddPage = function () {
			return _nmdnOnAddPage.clear();
	};
	
	this.isPresentNmdnOnAddPage = function () {
			return _nmdnOnAddPage.isPresent();
	};
     
	this.isPresentNmdtOnAddPage = function () {
			return _nmdtOnAddPage.isPresent();
	};
	
	this.isPresentNmdtOnAddPage = function () {
		return _nmdxOnAddPage.isPresent();
	};
	
	this.isPresentNmdaOnAddPage = function () {
		return _nmdaOnAddPage.isPresent();
	};
	
	this.isPresentFullOnAddPage = function () {
		return _fullCheckboxOnAddPage.isPresent();
	};
	
	this.isPresentChronoCheckbox = function () {
		return _ChronologicalCheckboxOnAddPage.isPresent();
	};
	
    this.isPresentEditButton = function () {
		return _editButton.isPresent();
	};
	
	this.clickSearchOnAddPage = function () {
		return _searchOnAddPage.click();
	};
	
	this.clickSelectSearchValueOnAddPage = function () {
		return _selectSearchValueOnAddPage.click();
	};
	
	this.isExpandedUnitOnAddPage = function () {
		return _selectSearchValueOnAddPage.isDisplayed();
	};
	
	this.clickNextPagination = function () {
		return _nextPagination.click();
	};
	
	this.isDisplayNextPagination = function () {
		return _nextPagination.isDisplayed();
	};
	
	this.clickPrevoiusPagination = function () {
		return _prevoiusPagination.click();
	};
	
	this.isDisplayPrevoiusPagination = function () {
		return _prevoiusPagination.isDisplayed();
	};
	
	this.clickLastPagination = function () {
		return _lastPagination.click();
	};
	
	this.isDisplayLastPagination = function () {
		return _lastPagination.isDisplayed();
	};
	
	this.clickFirstPagination = function () {
		return _firstPagination.click();
	};
	
	this.isDisplayFirstPagination = function () {
		return _firstPagination.isDisplayed();
	};
	
    this.isPresentImportButton = function () {
		return _importButton.isPresent();
	};	
	
    this.isPresentAddButton = function () {
		return _addButton.isPresent();
	};	
	
   	this.clickShowFilterButton = function () {
		return _showFiltersButton.click();
	};
	
	this.isDisplayShowFilterButton = function () {
		return _showFiltersButton.isDisplayed();
	};
	
    this.isPresentShowFilterButton = function () {
		return _showFiltersButton.isPresent();
	};
	
	this.countKeyword = function () {
		return _keyword.count();
	};
	
	this.clickAddOnSection = function () {
		return _addOnSection.click();
	};	
	
	this.isDisplayAddOnSection = function () {
		return _addOnSection.isDisplayed();
	};	
	
	this.clickAdd = function () {
		return _add.click();
	};	
	
	this.isDisplayAdd = function () {
		return _add.isDisplayed();
	};	

	this.clickPlusIconOnAddPage = function () {
		return _plusIconOnAddPage.click();
	};	

	this.isPresentPlusIconOnAddPage = function () {
		return _plusIconOnAddPage.isPresent();
	};

	this.isPresentCrossButtonOnAddPage = function () {
		return _crossButtonOnAddPage.isPresent();
	};	
	
	this.clickCrossButtonOnAddPage = function () {
		return _crossButtonOnAddPage.click();
	};

	this.isPresentSelectedSectionAddPage = function () {
		return _selectedSectionAddPage.isPresent();
	};

	this.isPresentCancelButtonOnAddPage = function () {
		return _cancelButtonOnAddPage.isPresent();
	};
	
	this.clickCancelButtonOnAddPage = function () {
		return _cancelButtonOnAddPage.click();
	};

	this.isPresentNextPaginationOnAddPage = function () {
		return _nextPaginationOnAddPage.isPresent();
	};
	
	this.isDisplayNextPaginationOnAddPage = function () {
		return _nextPaginationOnAddPage.isDisplayed();
	};
	
	this.clickNextPaginationOnAddPage = function () {
		return _nextPaginationOnAddPage.click();
	};
	
	this.clickPreviousPaginationOnAddPage = function () {
		return _previousPaginationOnAddPage.click();
	};
	
	this.isDisplayPreviousPaginationOnAddPage = function () {
		return _previousPaginationOnAddPage.isDisplayed();
	};
	
	this.isPresentPreviousPaginationOnAddPage = function () {
		return _previousPaginationOnAddPage.isPresent();
	};
	
	this.isPresentFirstPaginationOnAddPage = function () {
		return _firstPaginationOnAddPage.isPresent();
	};
	
	this.isDisplayFirstPaginationOnAddPage = function () {
		return _firstPaginationOnAddPage.isDisplayed();
	};
	
	this.clickFirstPaginationOnAddPage = function () {
		return _firstPaginationOnAddPage.click();
	};
	
	this.isDisplayLastPaginationOnAddPage = function () {
		return _lastPaginationOnAddPage.isDisplayed();
	};
	
	this.isPresentLastPaginationOnAddPage = function () {
		return _lastPaginationOnAddPage.isPresent();
	};
	
	this.clickLastPaginationOnAddPage = function () {
		return _lastPaginationOnAddPage.click();
	};

	this.clickunit = function () {
		return _unit.click();
	};												   
	
	this.clickUnitOther = function () {
		return _unitOther.click();
	};	
	
	this.clickSelectedItemOnAddPage = function () {
		return _selectItemOnAddPage.click();
	};

	this.clickEnterUnit = function () { 
		return element(by.id('unit')).click();
	};
    
    this.enterUnit = function () { 
		return element(by.id('unit')).sendKeys(protractor.Key.ENTER);
	};
    
    this.clickEnterNmdd = function () { 
		return element(by.id('nmdd')).click();
	};
    
    this.enterNmdd = function () { 
		return element(by.id('nmdd')).sendKeys(protractor.Key.ENTER);
	};
    
	this.clickEnterKeyword = function () { 
		return element(by.id('keyword')).click();
	};
    
    this.enterKeyword = function () { 
		return element(by.id('keyword')).sendKeys(protractor.Key.ENTER);
	};
                                          
    this.clickOkDialogAddPage = function () {
		return _okDialogAddPage.click();
	};

	this.clickCloseLegDicTable = function () {
		return _closeLegDicTable.click();
	}; 
	
	this.clickPencilIcon = function () {
		return _pencilIcon.click();
	};
	
	this.clickAddUnit = function () {
		return _addUnit.click();
	};
	
	this.isVisibleAddUnit = function () {
		return _addUnit.isDisplayed();
	};
	
	this.clickRemoveAddedUnit = function () {
		return _removeAddedUnit.click();
	};
	
	this.isVisibleRemoveAddedUnit = function () {
		return _removeAddedUnit.isDisplayed();
	};
	
	this.clickHashButton = function () {
		return _hashButtonOnAdd.click();
	};
	
	this.isVisibleHashButton = function () {
		return _hashButtonOnAdd.isDisplayed();
	};
	
	this.getTextErrorOnSave = function () {
		return _errorOnSave.getText();
	};
	
	this.clickNextButton = function () {
		return _nextButton.click();
	};
	
	this.clickPreviousButton = function () {
		return _previousButton.click();
	};
	
	this.displayNextButton = function () {
		return _nextButton.isDisplayed();
	};
	
	this.displayPreviousButton = function () {
		return _previousButton.isDisplayed();
	};
	
    this.clickSelectedItem = function () {
		return _selectItem.click();
	};
    
    this.displayViewAllLink = function () {
		return _searchViewAllLink.isDisplayed();
	};
	
	this.getTextViewAllLink = function () {
		return _searchViewAllLink.getText();
	};

	this.clickViewAllLink = function () {
      // _scrollTo(_searchViewAllLink)
	   return _searchViewAllLink.click();
	};
    
	
    
	this.deleteDisplay = function () {
		return _searchDelete.isDisplayed();
	}; 
    
	this.clickDelete = function () {
		return _searchDelete.click();
	}; 
    
	this.isDeleteButtonDisabled = function () { 
		return _searchDelete.getAttribute('disabled').then(function (disabled) { 
			return disabled == null; 
		}); 
	};
    
    this.isDeleteButtonEnable = function () {
		return _searchDelete.isEnabled();
	}; 
    
	this.clicklegisDecallview = function () {
       return _legisDecallview.click();
	};

	this.clickkeywordsection = function () {
        return _keywordsection.click();
	};
	
    this.clicklegisDeceditPencil = function () {
        return _legisDeceditPencil.click();
    };
    
    this.clickngrepeater = function () {
        return _ngrepeater.click();
    };
         
	this.clickselectunit = function () {
        return _selectunit.click();
	};
	
    //unt add button       
  	this.clickaddunit = function () {
        return _addunit.click();
	};
	
    //orenge add button
    this.clickaddselectedunit = function () {
        return _addselectedunit.click();
    };
    
    this.clicksave = function () {
        return _saveButton.click();
    };
	
    this.clickcancel = function () {
        return _cancelButton.click();
    };
	
    this.clickOk = function () {
        _scrollTo(_okButton);
        return _okButton.click();
	};
	
    this.clickgobackButton = function () {
        _scrollTo(_gobackButton);
        return _gobackButton.click();
	};
	
    this.clickunitidentifier = function () {
        return _unitidentifier.click();
	};
	
    this.clickdeleteentry = function (){
         return _deleteentry.click();
    };
    
    this.clicklegisDeccopyButton = function () {
        _scrollTo(_legisDeccopyButton);
        return _legisDeccopyButton.click();
	};
	
    this.clickcloseButton = function () {
        return _closeButton.click();
	};
	
    this.clickcancelButton = function () {
        return _cancelButton.click();
	};
	
    this.clickcloseDicTable = function () {
        return _closeTable.click();
    };    
    
    this.displayMessage = function () {
		return _displayMessage.getText();
	};	

    this.totalViewcount = function (){
        return _TotalViewcount.getText();
	};
	
    this.haseditlegislationDec = function () {
		return _editlegislationDec.isDisplayed();
	};

	this.hasdisplayedunit = function () {
		return _displayedunit.isDisplayed();
	};

	this.hasdeleunitentry = function(){
        return _deleteentry.isPresent();
	};
	
    this.hasokbutton = function() {
        return _okButton.isPresent();        
	};
	    
    this.hascopyLegislationDictionary = function (){
        return _copyLegislationDictionary.isPresent();
	};
	
    this.hascloseButton = function(){
         return _closeButton.isPresent();
	};
	
	this.hascancelButton = function(){
        return _cancelButton.isPresent();
	};
	
    this.hascloseDicTable = function () {
         return _closeTable.isPresent();
    };
    
    this.getAddButtonCaption = function () { 
		return  _addentry.getText();
	};
    
    this.getAllFiltersButtonCaption = function () { 
		return  _showfilter.getText();
	};
    
    this.EnterValueinUnitFeild = function (Text) {
		_unit.sendKeys(Text);
        return _unit.sendKeys(protractor.Key.ENTER);
    };
    
    this.getCountOfRows = function () {
        return _elementcount.count().then(function(c){
            return c;
        });
    };
    
    this.clickCloseButton = function () {
        return _closeButton.click();
	};
	
	this.legisDeccopyButton = function () {
		return browser.actions().doubleClick(element(by.css('div[name="R3_C5"]')).element(by.css('[ng-click="copyEntry($item.rowId)"]'))).perform();
	};
	  
	this._scrollTo = function (webelement) {
		// There are some issues with the double scroll when trying to click some elements
		browser.executeScript(function (element) { 
		element.scrollIntoView(false);; webelement.getWebElement()});
	};
    
};

module.exports = new legislationdictionarysection(); 