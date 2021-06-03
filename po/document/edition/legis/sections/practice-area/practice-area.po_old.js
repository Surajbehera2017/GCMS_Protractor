var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var practiceAreaDocEdition = function () {
    this.expandable = new ExpandableToggle('practice.area.edit.collapseLink', 'practice.area.edit.NoncollapseLink');

     var _practiceAreaValue= element.all(by.css('.borde-checkbox')).last();
	//var _addPracticeArea= element(by.id('practice.area.edit.addPracticeArea'));
    var _addPracticeArea= element(by.id('addPublication'));
    var _clickOnPracticeAreaField = element.all(by.css('lnkSearchDropdown')).get(15);
    var _enterSearchText =element.all(by.css('txtdropdownsearch')).get(15);
    var _selectFilteredValue = element(by.css('[ng-class="{\'required-invalid\':practiceArea.invalid.area[$index]}"] [ng-click="select(item)"]'));
    //var _practiceAreaField=  element.all(by.css('[class="line-height-50 btn-group search-dropdown ng-isolate-scope"][name=""]>div[class="col-md-8"]>a[name="lnkSearchDropdown"]')).first();
	var _practiceAreaField=  element(by.css('[ng-class="{\'required-invalid\':practiceArea.invalid.area[$index]}"] a[name=\'lnkSearchDropdown\']')); 
	var _deletePractice= element(by.css('[ng-click="practiceArea.removePrecticeaArea(area)"]'));
	var _principalCheckbox= element.all(by.css('.borde-checkbox')).last();
	var _practiceAreaFieldValue= element.all(by.css('[ng-click="select(item)"]')).get(1);
    var _savepopup= element(by.css("[name='btnConfirmationDialogAccept']"));
    var _saveButton=element(by.id('btnSaveDocument'));    
    var _firstAreaSearchDropDown = element(by.css('[onselect="practiceArea.addManualCollection"] a[name="lnkSearchDropdown"]'));
    var _firstAreaSearchField = element(by.css('[onselect="practiceArea.addManualCollection"] input[ng-model="searchtext"]'));
    var _firstAreaSelectItem = element(by.css('[onselect="practiceArea.addManualCollection"] [ng-click="select(item)"]'));
    var _searchterm = element(by.css('[ng-class="{\'required-invalid\':practiceArea.invalid.area[$index]}"] input[ng-model="searchtext"]'));
    var _savecnfbutton = element(by.css('.btn.btn-primary.orange-button.pull-right.ng-scope.ng-binding'));
    var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
    var _loginButton = element(by.buttonText('Login'));
    var _clickaddpracticearea = element(by.css('[ng-click="practiceArea.addPrecticeArea()"]'));
    var _deletepracticearea = element(by.css('[ng-if=" !$first && expandCollapse.status.practiceArea.open"] [ng-click="practiceArea.removePrecticeaArea(area)"]'));
    var _clickPrincipalchkbox = element(by.css('[ng-if=" !$first && expandCollapse.status.practiceArea.open"] input[ng-model="area.principal"]'));

	//Logging in with given username and password
	this.urlLoad=function(user,password){

		var loginpopup =  element(by.model('credentials.username'));
		loginpopup.isPresent().then(function(result) {
			if (result) {
				_loginUserName.sendKeys(user);
				_loginPassword.sendKeys(password);
				_loginButton.click();
			}
		});
	};
    
    this.deleteFirstPractice = function() {
       return _deletePractice.click();
    };

	this.deletePractice =function() {
        return _deletepracticearea.click();
    };
	
        this._scrollTo = function (webelement) {
			// There are some issues with the double scroll when trying to click some elements
			browser.executeScript("arguments[0].scrollIntoView();", webelement.getWebElement());
		};
	
        this.clickPrincipalCheckbox =function() {
            return _principalCheckbox.click();
        };
	
        this.isVisiblePrincipalCheckbox =function() {
            return _principalCheckbox.isPresent();
        };
    
       
        this.clickPracticeAreaField =function() {
            return _practiceAreaField.click();
        };
	
        this.selectPracticeAreaFieldValue = function() {
            return _practiceAreaFieldValue.click();
        }; 
	
        this.clickAddPracticeArea =function () {
            browser.executeScript("arguments[0].scrollIntoView();", _addPracticeArea.getWebElement());
            return _addPracticeArea.click();
        };

        this.isConfirmationSaveDisplayed = function()
        {
            return _savepopup.isPresent();
        };

        this.isErrorDisplayedOnPopup = function() {
            return element(by.css('.toast.toast-error')).isPresent().then(function(displayed){
            return displayed;
            },
            function(error){
            console.log("Error in isErrorDisplayedOnPopup");
            return false;
            }); 
            };
     
        this.clickOnSaveOnConfirmationPopup =function() {
            return _savepopup.click();
        };

        this.clickSaveButton = function()
        {
        	return _saveButton.click();
		 };
	
	
        this.EnterValueinPracticeArea = function (Text) {
        _addPracticeArea.sendKeys(Text);
            return _addPracticeArea.sendKeys(protractor.Key.ENTER);
        };

        this.entervalueforPracticeArea = function (text) {
            _searchterm.sendKeys(text);
            return _searchterm.sendKeys(protractor.Key.ENTER);
        };
        
        this.clickSelectedValue = function () {
            _selectFilteredValue.click();
        };
         this.addNewPracticeArea = function (value) {
			//var self = 
			browser.driver.actions().mouseUp(_addPracticeArea).perform();
			return _addPracticeArea.click().then(function () {
				//this._scrollTo(filterInput);
                //browser.driver.actions().mouseUp(filterInput).perform();
                _clickOnPracticeAreaField.click();
                _enterSearchText.sendKeys(value);
                _enterSearchText.sendKeys(protractor.Key.ENTER);
                _selectFilteredValue.click();
				});
            }; 
    
    this.selectFirstPracticeArea= function(data){
        _firstAreaSearchDropDown.click();
        _firstAreaSearchField.sendKeys(data);
        _firstAreaSearchField.sendKeys(protractor.Key.ENTER);
        _firstAreaSelectItem.click();
    };
       
    this.clickAddAnotherPracticeArea = function() {
        _clickaddpracticearea.click();
    };

    this.clickPrincipalcheckbox = function() {
        _clickPrincipalchkbox.click();
    };
	
};

module.exports = new practiceAreaDocEdition();