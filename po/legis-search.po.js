

var LegislationSearchPage = function () {
   
    var _searchTextBox= element(by.css('[id="consulta0"]')); 
    var _searchBtn=element(by.css('[id="btnSearch"]')); 	
    var _singleSearchResult=element(by.css('[class="referencia"]')); 
    var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
    var _usename=element(by.css('.ContentHeader>input[name="username"]'));
    var _pwd=element(by.css('.ContentHeader>input[name="password"]'));
    var _portugues=element(by.css('#selectedLanguage>option[label="Português"]'));
    var _languagedropdown=element(by.css('#selectedLanguage'));
    var _signbutton=element(by.css('.buttonInform'));
    var _usermenudropdown=element(by.css('a[class="dropdown-toggle btn "]>span[class="dropdown-icon user-menu"]'));
    var _selectportugues=element.all(by.css('a[class="ng-scope"]')).get(2);
    var _selectspanish=element.all(by.css('a[class="ng-scope"]')).get(1);
    var _welcomedetails=element.all(by.css('.user-menu.ng-binding')).get(1);
    this.urlLoad=function(user,password){
        
                var loginpopup =  element(by.model('credentials.username'));
                loginpopup.isPresent().then(function(result) {
                    if (result) {
                        _loginUserName.sendKeys(user);
                        _loginPassword.sendKeys(password);
                        _loginButton.click();
                    }else{
                     /*   _usename.sendKeys(user);
                        _pwd.sendKeys(password);
                        _languagedropdown.click();
                        _portugues.click();
                        _signbutton.click(); */

                    }
                });
            };

    this.get = function (docId) {
        return browser.get('static/gcms-ui/index.html#/document?docId=' + docId);
       // https://qc-gcms-arz.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=1572021
      //  return browser.get('GCMSWeb/legis/doMenu.do?dispatch=cons');
    };

    this.getTitle = function () {
        return browser.getTitle();
    };

    this.clickSearchResult=function () {
        return _singleSearchResult.click(); 
    }; 

	this.clickSearchBtn= function () {
        return _searchBtn.click();
    };

	this.enterMarginalID= function (marginal) {
        _searchTextBox.clear();
        return _searchTextBox.sendKeys(marginal);
    };

    this.ClickUserDropDown= function () {
        return _usermenudropdown.click();
    };
    this.selectPortugues= function () {
        browser.executeScript("arguments[0].scrollIntoView();", _selectportugues.getWebElement());
        return _selectportugues.click();
    };
    this.selectSpanish= function () {
        browser.executeScript("arguments[0].scrollIntoView();", _selectspanish.getWebElement());
        return _selectspanish.click();
    };

    this.isExpectedDetailsDisplayed=function(exp_details){
        return _welcomedetails.getText().then (function(actualdetails){
            if(actualdetails.includes(exp_details))
            {
                return true;
            }else{
                return false;
            }
        }
    )};

};

module.exports = new  LegislationSearchPage;