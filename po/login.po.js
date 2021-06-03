var WIPPage = require('./wip.po.js');

var LoginPage = function () {
	this.get = function () { //return browser.get('sso/logon.do'); 
                           return browser.get('GCMSWeb/sso/logon.do');
                           };
};

LoginPage.prototype = Object.create({}, {
	_usernameInput: {get: function () { return element(by.css('input[name="username"]')); }},

	_passwordInput: {get: function () { return element(by.css('input[name="password"]')); }},

	_loginButton: {get: function () { return element(by.css('.buttonInform')); }},

	_errorMessage: {get: function () { return element(by.css('.colorError')); }},

	_languageDropdown: {get: function () { return element(by.css('select[id="selectedLanguage"]')); }},

	title: {get: function () { return browser.getTitle(); }},

	errorMessage: {get: function () {return this._errorMessage.getText(); }},

	setUsername: {value: function (str) {return this._usernameInput.sendKeys(str);}},

	setPassword: {value: function (str) {return this._passwordInput.sendKeys(str); }},
    

	//changing languages reloads the login page
	setLanguage: {
		value: function (lang_id) {
            
			return this._languageDropdown.element(by.css('[value="' + lang_id + '"]')).click().then(function () {
				return new LoginPage();
			});
		}
	},

	loginWithValidCredentials: {
		value: function (username, password) {

			var self = this;
            browser.sleep(3000);
			return self.setUsername(username).then(function () {
				return self.setPassword(password).then(function () {
					return self._loginButton.click().then(function () {
						return new WIPPage();
					});
				});
			});
		}
	},

	//THIS METHOD SHOULD BE USED WITH INVALID CREDENTIALS ONLY
	loginWithInvalidCredentials: {
		value: function (username, password) {

			return this.setUsername(username).then(function () {
				this.setPassword(password).then(function () {
					this.loginButton.click().then(function () {
						return new LoginPage();
					});
				});
			});
		}
	}

});

module.exports = LoginPage;
