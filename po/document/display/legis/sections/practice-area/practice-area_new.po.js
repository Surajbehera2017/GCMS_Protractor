var fix_section = function () {
    
    var _loginUserName = element(by.model('credentials.username'));
    var _loginPassword = element(by.model('credentials.password'));
    var _loginButton = element(by.css('div.modal-footer button.btn.btn-primary.ng-binding'));

    this.urlLoad = function (user, password) {
        
                var loginpopup = element(by.model('credentials.username'));
                loginpopup.isPresent().then(function (result) {
                    if (result) {
                        _loginUserName.sendKeys(user);
                        _loginPassword.sendKeys(password);
                        _loginButton.click();
                    } else {
        
                        console.log("Error in URL load")
        
                    }
                });
            };

        };
        