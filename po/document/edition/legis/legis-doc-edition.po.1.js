var LegislationDocumentEditionPage = function () {

	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	this.urlLoad = function (user, password) {

		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {
			if (result) {
				_loginUserName.sendKeys(user);
				_loginPassword.sendKeys(password);
				_loginButton.click();
			} else {

			}
		});
	};


	this.get = function (docId) {
		return browser.get('static/gcms-ui/index.html#/documentEdit/' + docId);
	};

	this.refresh = function () {
		return browser.get('static/gcms-ui/index.html#/documentEdit/' + docId);
	};

	this.sections = {};

	this.title = function () {
		return browser.getTitle();
	};

	var _saveButton = element.all(by.css('[id="btnSaveDocument"]')).get(1);

	this.saveButtonClick = function () {
		return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();', '');
	};


	var _confirmSaveButton = element(by.css('button[name="btnConfirmationDialogAccept"]'));

	var _cancelSaveButton = element(by.css('button[name="btnConfirmationDialogCancel"]'));

	var _okButton = element(by.css('button[name="btnInfoDialogOk"]'));
	var _toastError = element.all(by.css('.toast.toast-error>.toast-message')).get(0);
	var _toastError2 = element.all(by.css('.toast.toast-error>.toast-message')).get(1);

	this.clickonOk = function () {
		_okButton.click();
	};

	this.isOkButtonDisplayed = function () {
		return _okButton.isDisplayed().then(function (result) {
			return result;
		}, function (error) {
			return false;
		});
	};

	this.save = function () {
		browser.executeScript("arguments[0].scrollIntoView();", _saveButton.getWebElement());
		return _saveButton.click().then(function () {
			return _confirmSaveButton.click().then(function () {
			});
		});
	};

	this.saveWIConfirm = function () {
		return _saveButton.click().then(function () {

		});
	};

	this.saveAndVerifyErrorForDateInForce = function () {
		return _saveButton.click().then(function () {
			return element(by.css('[name="txtInfoDialog"]')).getText().then(function (txt) {
				if (txt.indexOf('**La nota de temporalidad sólo existe si existe temporalidad') != -1) {
					return true;
				} else {
					return false;
				}
			});

		});

	};

	this.cancel = function () {

		return _saveButton.click().then(function () {
			return _cancelSaveButton.click().then(function () {
				return new LegislationDocumentDisplayPage();
			});
		});
	};


	this.displaySaveButton = function () {
		return _saveButton.isPresent();
	};

	this.clickOkButton = function () {
		return _saveButton.click().then(function () {
			return _okButton.click().then(function () {
				return new LegislationDocumentDisplayPage();
			});
		});
	};


	var _createButton = element(by.css('[id="btnSaveDocument"]'));

	this.clickCreate = function () {
		return browser.executeScript('return document.getElementById(\'btnSaveDocument\').click();', '');
	};

	this.clickSaveButton = function () {
		return _saveButton.click();
	};

	this.clickSavePopup = function () {
		return _confirmSaveButton.click();
	};

	this.getFirstSaveErrorMessage = function () {
		return _toastError.getText();
	};

	this.get2ndSaveErrorMessage = function () {
		return _toastError2.getText();
	};
	
};

module.exports = new LegislationDocumentEditionPage;