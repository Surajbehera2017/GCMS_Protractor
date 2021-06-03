var corrigendassection = function(){

	//Elements
	var _searchViewAllLink = element(by.css('a[ng-click="corrigendasSumCtrl.openCorrigendasDetailTable(corrigendasSumCtrl.docId)"] *[class="ng-binding"]'));
	var _crossButton = element(by.css('[ng-click="deleteCorrigenda($item.id)"]'));
	var _cancelAction = element(by.css('[ng-click="cancel()"]'));
	var _firstPagination = element(by.css('[ng-click="CorrigendasDetaillCtrl.first()"]'));
	var _nextPagination = element(by.css('[ng-click="CorrigendasDetaillCtrl.next()"]'));
	var _previousPagination = element(by.css('[ng-click="CorrigendasDetaillCtrl.previous()"]'));
	var _lastPagination = element(by.css('[ng-click="CorrigendasDetaillCtrl.last()"]'));
	var _addButton = element(by.css('[ng-click="corrigendasSumCtrl.goToAdd()"]'));
	var _addButtonTable = element(by.css('[ng-click="corrigendasSumCtrl.goToAdd()"]'));
	var _glassesButton = element(by.css('[ng-click="toggleDetail($row, dp)"]'));
    var _glassesDetails = element(by.css('.wj-cell.wj-alt.wj-detail'));
	var _selectItem = element(by.model('$item.selected'));
	var _allSelectCheckBoxes = element.all(by.model('$item.selected'));
	var _searchDelete = element(by.css('[ng-click="deleteSelected()"]'));
	var _yesButtonOnDeletePopUp = element(by.css('[ng-click="ok()"]'));
	var _cancelButton = element(by.css('[ng-click="CorrigendasDetaillCtrl.close()"]'));
	var _cancelButtonInEdit = element(by.css('[value="Cancel"].buttonInform'));
	var _marginalnumber = element(by.css('[ng-model="marginalNameInput"]'));
	var _originaltext = element.all(by.css('[ng-click="select()"]')).get(0);
	var _cancelAdd = element(by.css('[value="Cancel"]'));
	var _showAndHideFilter = element(by.css('[ng-click="CorrigendasDetaillCtrl.showFilter = !CorrigendasDetaillCtrl.showfilter"]'));
	var _HideFilter = element.all(by.css('[ng-click="CorrigendasDetaillCtrl.showFilter = !CorrigendasDetaillCtrl.showfilter"]')).get(1);
	var _closeButton = element(by.css('[ng-click="CorrigendasDetaillCtrl.close()"]')); 
	var _multipleLanguage = element(by.css('select[ng-model="languageInput"]')); 
	var _legislation = element(by.id('itemTextLink67')); 
	var _corrigendas = element(by.id('itemTextLink73')); 
	var _search = element(by.id('itemTextLink74')); 
	var _firstDropdown = element(by.css('#searchFields0')); 
	var _secondDropdown = element(by.css('#searchFields1')); 
	var _thirdDropdown = element(by.css('#searchFields2')); 
	var _enterTextSearch = element(by.css('#consulta0')); 
	var _enterYearSearch = element(by.css('#consulta1')); 
	var _enterNumberSearch = element(by.css('#consulta2')); 
	var _searchButton = element(by.css('#btnSearch')); 
	var _XMLTag = element(by.id('btnXMLTag')); 
	var _XMLEditPage = element(by.css('.CodeMirror-lines')); 
	var _OKButtonXML = element(by.id('btnOk')); 
	var _newLanuageButton = element(by.name('button.annadirIdiomas')); 
	var _AddLanguage = element(by.id('rectificacion.idiomasRectificacion.list[1].btnLanguageList')); 
	var _analystList = element(by.id('btnControlDataAnalyst_list')); 
	var _analystselect = element(by.css('#lnk___')); 
	var _enterDateinAnalyst = element(by.css('#rectificacion_fechaAnalisis')); 
	var _languageSelect = element(by.css('#lnk___')); 
	var _incorporatedDropdown = element(by.id('rectificacion.idiomasRectificacion.list[1].incorporada')); 
	var _newPublicationButton = element(by.id('btnNewPublication')); 
	var _newPublicationButtonList = element(by.id('rectificacion.publicacionesOficiales.list[1].PubList')); 
	var _publicationSelect = element(by.css('#lnk___')); 
	var _seriesSelect = element(by.css('#lnk___')); 
	var _seriesSelectList = element(by.id('rectificacion.publicacionesOficiales.list[1].SerList')); 
	var _popupTable = element(by.css('[ng-click="CorrigendasDetaillCtrl.close()"]')); 
	var _editImage = element(by.css('[ng-click="editCorrigenda($item.id)"]>img'));
	var _editFirstImage = element.all(by.css('[ng-click="editCorrigenda($item.id)"]>img')).get(0);
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	var _firstMarginalValue = element(by.css('[data-row="0"][name="R0_C1"]'));
	var _firstLanguageValue = element(by.css('[data-row="0"][name="R0_C3"]'));

	//Definitions
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

	this.clickoriginaltext = function() {
		return _originaltext.click();
	};

	this.clickCancelCorrigendasButton = function() {
		return _cancelButton.click();
	};

	this.isDisplayCancelButton = function() {
		return _cancelButton.isDisplayed();
	};

	this.isVisibleCancelButton = function() {
		return _cancelButton.isPresent();
	};

	this.clickAddButton = function() {
		return _addButton.click();
	};

	this.isDisplayAddButton = function() {
		return _addButton.isDisplayed();
	};

	this.isVisibleAddButton = function() {
		return _addButton.isPresent();
	};

	this.clickCancelAdd = function() {
		return _cancelAdd.click();
	}; 

	this.isVisibleCancelAdd = function() {
		return _cancelAdd.isDisplayed();
	}; 

	this.clickShowAndHideFilter = function() {
		return _showAndHideFilter.click();
	};

	this.isDisplayShowAndHideFilterButton = function() {
		return _showAndHideFilter.isDisplayed();
	};

	this.isVisibleShowAndHideFilter = function() {
		return _showAndHideFilter.isPresent();
	};

	this.isVisibleHideFilter = function() {
		return _HideFilter.isPresent();
	};

	this.enterMarginalNumber = function(Text) {
		return _marginalnumber.clear().then(function(){
			return _marginalnumber.sendKeys(Text).then(function(){
				return _marginalnumber.sendKeys(protractor.Key.ENTER);
			});
		});
	};

	this.clickSelectedItem = function() {
		return _selectItem.click();
	};

	this.deleteDisplay = function() {
		return _searchDelete.isDisplayed();
	}; 

	this.displayOfYesDelete = function() {
		return _yesButtonOnDeletePopUp.isDisplayed();
	}; 

	this.clickDelete = function() {
		return _searchDelete.click();
	}; 

	this.isDeleteButtonDisabled = function() { 
		return _searchDelete.getAttribute('disabled').then(function (disabled) {
			return disabled == null; 
		}); 
	};

	this.isDeleteButtonEnable = function() {
		return _searchDelete.isEnabled();
	}; 

	this.clickGlassesButton = function() {
        //return _glassesButton.click();
        //Normal click is sometimes not working. Hence added javascript click	 
	    browser.executeScript("arguments[0].click();", _glassesButton.getWebElement());
	};

	this.displayGlassesButton = function() {
		return _glassesButton.isDisplayed();
    };
    
    this.isViewDetailsDisplayed = function() {
		return _glassesDetails.isDisplayed();
	};

	this.isPresentAddButton = function() {
		return _addButton.isPresent();
	};

	this.isPresentAddButtonInTable = function() {
		return _addButtonTable.isPresent();
	};

	this.isPresentSearchViewAllLink = function() {
		return _searchViewAllLink.isPresent();
	};

	this.isPresentFirstPagination = function() {
		return _firstPagination.isPresent();
	};

	this.isPresentNextPagination = function() {
		return _nextPagination.isPresent();
	};

	this.isPresentPreviousPagination = function() {
		return _previousPagination.isPresent();
	};

	this.isPresentLastPagination = function() {
		return _lastPagination.isPresent();
	};

	this.clickCancelButton = function() {
		return _cancelAction.click();
	};

	this.isPresentCancelButton = function() {
		return _cancelAction.isPresent();
	};

	//clicking delete icon for the given record.
	this.clickCrossButton = function() {
		var locator = element(by.xpath("//a[@ng-click='deleteCorrigenda($item.id)']"));
		browser.executeScript("arguments[0].click();",locator.getWebElement());
		//locator.click();
	};

	this.displayCrossButton = function() {
		return _crossButton.isDisplayed();
	};

	this.isPresentViewAllLink = function() {
		return _searchViewAllLink.isPresent();
	};	

	this.clickViewAllLink = function() {
		//return _searchViewAllLink.click();
		element(by.xpath("//a[@ng-click='corrigendasSumCtrl.openCorrigendasDetailTable(corrigendasSumCtrl.docId)']//strong[@class='ng-binding']")).click();

	};

	this.displayViewAllLink = function() {
		return _searchViewAllLink.isDisplayed();
	};

	this.getAddButtonCaption = function() { 
		return element(by.css('[ng-click="corrigendasSumCtrl.goToAdd()"]')).getText(); 
	};

	this.getAllFiltersButtonCaption = function() { 
		return  element(by.css('[ng-show="!CorrigendasDetaillCtrl.showFilter"]')).getText(); 
	};

	this.EnterValueinMarginalFeild = function(Text) {
		element(by.css('[id="marginalNameInput"]')).sendKeys(Text);
		return element(by.css('[id="marginalNameInput"]')).sendKeys(protractor.Key.ENTER);
	};

	this.getCountOfRows = function() {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function(c){
			return c;
		});
	};

	this.clickCloseButton = function() {
		return _closeButton.click();
	};

	this.isMultipleLanguageDisplayed = function() {
		return _multipleLanguage.isDisplayed();
	};

	this.selectLanguageFilter = function (language) {
		return _multipleLanguage.click().then(function(){   
			return _multipleLanguage.all(protractor.By.cssContainingText('option',language)).get(0).click().then(function(){   
			});
		});
	};

	this.clickonLegislation = function() {
		return _legislation.click();
	};

	this.clickonCorrigendas = function() {
		return _corrigendas.click();
	};

	this.clickonSearch = function() {
		return _search.click();
	};

	this.selectFirstDropdown = function (positionNum) {
		if (positionNum) {
			_firstDropdown.isDisplayed().then(function(result){   
				//var options = 
					_firstDropdown.all(protractor.By.tagName('option')).then(function (options) {
						options[positionNum].click();
					});
			});
		};

	};

	this.clickonFirstDropdown = function() {
		return _firstDropdown.click();
	};

	this.selectSecondDropdown = function (positionNum) {
		if (positionNum) {
			_secondDropdown.isDisplayed().then(function(result){   
				//var options = 
				_secondDropdown.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
	};

	this.clickonSecondDropdown = function() {
		return _secondDropdown.click();
	};

	this.selectThirdDropdown = function (positionNum) {
		if (positionNum) {
			_thirdDropdown.isDisplayed().then(function(result){   
				//var options = 
				_thirdDropdown.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
	};

	this.clickonThirdDropdown = function() {
		return _thirdDropdown.click();
	};

	this.enterText = function(text) {
		return _enterTextSearch.clear().then(function(){
			return element(by.css('#consulta0')).sendKeys(text);
		});
	};

	this.enterYear = function(year) {
		return _enterYearSearch.clear().then(function(){
			return element(by.css('#consulta1')).sendKeys(year);
		});
	};

	this.enterNumber = function(number) {
		return _enterNumberSearch.clear().then(function(){
			return element(by.css('#consulta2')).sendKeys(number);
		});
	};

	this.clickonSearchButton = function() {
		return _searchButton.click();
	};

	this.selectAndEditCorrigendas = function() {
		//return _editFirstImage.click();
		browser.executeScript("arguments[0].click();",_editFirstImage.getWebElement());
	};

	this.clickonXMLTag = function() {
		return _XMLTag.click();
	};

	this.clickonXMLEditPage = function() {
		return _XMLEditPage.click();
	};

	this.enterNewXMLinEditPage = function(XML) {
		browser.executeScript("arguments[0].click();", _XMLEditPage.getWebElement());
		return _XMLEditPage.clear().then(function(){
			return _XMLEditPage.sendKeys(XML);
		});
	};

	this.clickonOKButtonXML = function() {
		return _OKButtonXML.click();
	};

	this.clickonNewLanguageButton = function() {
		//return _newLanuageButton.click();
		browser.executeScript("arguments[0].click();", _newLanuageButton.getWebElement());
	};

	this.clickonAddNewLanguage = function() {

		//return _AddLanguage.click();
		browser.executeScript("arguments[0].click();", _AddLanguage.getWebElement());
	};

	this.clickonCancelButtonInEdit = function() {
		return _cancelButtonInEdit.click();
	};

	this.clickonAnalysyList = function() {
		return _analystList.click();
	};

	this.SelectAnalyst = function() {
		return _analystselect.click();
	};

	this.enterDateAnalyst = function(date) {
		return _enterDateinAnalyst.clear().then(function(){
			return _enterDateinAnalyst.sendKeys(date);
		});
	};

	this.SelectLanguage = function() {
		//return _languageSelect.click();
		browser.executeScript("arguments[0].click();", _languageSelect.getWebElement());
		
	};

	this.clickonIncorporatedDropdown = function() {
		return _incorporatedDropdown.click();
	};

	this.selectDropdownIncorporated = function (positionNum) {
		if (positionNum) {
			_incorporatedDropdown.isDisplayed().then(function(result){   
				//var options = 
				_incorporatedDropdown.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};

	};

	this.clickonNewPublication = function() {
		return _newPublicationButton.click();
	};

	this.clickonNewPublicationList = function() {
		return _newPublicationButtonList.click();
	};

	this.SelectPublication = function() {
		return _publicationSelect.click();
	};

	this.selectSeries = function() {
		return _seriesSelect.click();
	};

	this.clickonSeriesList = function() {
		return _seriesSelectList.click();
	};

	this.closePopUpTable = function() {
		return _popupTable.click();
	};

	this.getCountOfRowsDisplayedInTable = function() {
		return _allSelectCheckBoxes.count().then(function(count){
			return count;
		},
		function(error){
			return 0;
		});
	};

	this.getFirstMarginalNumber = function() {
		return _firstMarginalValue.getText();
	};

	this.getFirstLanguageText = function() {
		return _firstLanguageValue.getText();
	};

};
module.exports = new corrigendassection;