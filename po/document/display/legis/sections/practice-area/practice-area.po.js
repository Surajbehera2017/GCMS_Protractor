var ExpandableToggle = require('../expandable-toggle.po.js');

var practiceAreaDocDisplay = function () {
    this.expandable = new ExpandableToggle('linkUncollapsePracticeAreaSection', 'linkCollapsePracticeAreaSection');

    var _analyst= element(by.id('textAnalystNoPrincipalValuePracticeAreaSection0'));
   var _deletePractice= element(by.css('a[ng-click^="practiceArea.removePrecticeaArea(area)"]'));
  var _listdeletePractice= element.all(by.css('a[ng-click^="practiceArea.removePrecticeaArea(area)"]'));
   var _checkprincipal= element(by.css('.col-md-4.padding-none.line-height-40>span'));
  var _valueWithoutAccept= element.all(by.css('[class="col-md-8 right-label border-sides-detail-border-top row-margin-clear"]')).last();
  var _practiceAreaText= element(by.id('textTextNoPrincipalValuePracticeAreaSection0'));
  var _editDocument =  element.all(by.id('btnGoToEditMode')).get(1);
    var _acceptButton= element(by.id('acceptAnalystButtonPracticeAreaSection0'));
    var _principal= element(by.id('textPrincipalValuePracticeAreaSection'));
    var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));

 //Logging with given username and password
    this.urlLoad=function(user,password){
				
						var loginpopup =  element(by.model('credentials.username'));
						loginpopup.isPresent().then(function(result) {
							if (result) {
								_loginUserName.sendKeys(user);
								_loginPassword.sendKeys(password);
								_loginButton.click();
							}
						});
					}
				
    // this._scrollTo = function (webelement) {
	// 		// There are some issues with the double scroll when trying to click some elements
	// 		browser.executeScript("arguments[0].scrollIntoView();", webelement.getWebElement());
	// 	};

        // this.clickOnEditDocument = function()
        // {
        //     _editDocument.click();   
        // };

        this.isPresentPrincipal=function () {
            return _principal.isPresent();
         };

         this.countPrincipalNo =function () {
            return element.all(by.id('textPrincipalValuePracticeAreaSection')).count();
        };

         this.isVisibleAcceptButton=function () {
            return _acceptButton.isPresent();
        };
	
        this.practiceAreaText=function () {
            return _practiceAreaText.getText();
        };
	
        this.analyst=function () {
            return _analyst.getText();
        };
   
        this.deletePractice= function (){
        browser.driver.manage().window().maximize();
        return _deletePractice.isPresent();
    };
    
  this.clickDeletePractice= function (){
	browser.driver.manage().window().maximize();
    return _deletePractice.cick();
};
    

this.TotalPracticearea= function (){
    return _listdeletePractice.isPresent();
};

this.getTextValueWithoutAccept=function () {
            return _valueWithoutAccept.getText();
        };


};
module.exports = new practiceAreaDocDisplay();
