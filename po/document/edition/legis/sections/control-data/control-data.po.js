var controldatasection = function() {

	var _collapseButton = element(by.id('linkCollapseControlDataSection'));
	var _expandButton = element(by.id('linkUncollapseControlDataSection'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	var _generaldataButton = element(by.id('linkUncollapseGeneralDataSection'));
	var _selectDocumentType = element(by.css('select[ng-model="generalDataController.model.data.document.tipoDisposicion.code"]'));

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

	this.isExpanded = function() {
		return _collapseButton.isPresent();
	};

	this.expandSection = function() {
		_expandButton.click();
	};

	this.clickonGeneralData = function() {

		return _generaldataButton.click();

	};

	this.selectOptionDocumentType = function() {

		return _selectDocumentType.click();

	};

	this.clickonDocumentTypeDropdown = function() {
		return _selectDocumentType.click();
	};

	this.selectDocumentTypeFromComboBox = function (positionNum) {
		if (positionNum) {
			_selectDocumentType.click().then(function(result){   
				//var options = 
				_selectDocumentType.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};

	};

};

module.exports = new controldatasection;