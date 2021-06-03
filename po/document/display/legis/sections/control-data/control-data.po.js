var controldatasection = function() {

	var _analyst = element(by.id('textAnalystValueControlDataSection'));
	var _analisysDate = element(by.id('textAnalystDateValueControlDataDisplaySection'));
	var _fileName = element(by.id('textFileNameValueControlDataSection'));
	var _relevantChange = element(by.id('textRelevantChangeValueControlDataSection'));
	var _collapseButton = element(by.id('linkCollapseControlDataSection'));
	var _expandButton = element(by.id('linkUncollapseControlDataSection'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));

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
		//return _collapseButton.isPresent();
		return element(by.id('linkCollapseControlDataSection')).isDisplayed();
	};

	this.expandSection = function() {
		_expandButton.click();
	};

	this.analyst= function() {
		return _analyst.getText();
	};

	this.analisysDate= function() {

		return _analisysDate.getText();
	};
	
	this.isAnalisysDateDisplayed= function() {

		return _analisysDate.isDisplayed();
	};

	this.fileName= function() {

		return _fileName.getText();
	};

	this.relevantChange= function() {

		return _relevantChange.getText();
	};

};

module.exports = new controldatasection;