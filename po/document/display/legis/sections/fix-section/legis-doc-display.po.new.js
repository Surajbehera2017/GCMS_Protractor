var LegislationDocumentDisplayPage = function () {
    
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
        
     //toggle between the unlock and lock options in fix section 
     this.clickOnToggleButton = function(){
        
         var ele=element(by.xpath("(//div[@id='contentToggleBlock']//div[@ng-model='blockDocCtrl.lockStatus'])[2]"));
         return ele.isPresent().then(function(result){
              if(result == true){

                browser.actions().click(ele).perform();
                return result;
              }
        else{
            console.log("error in clickOnToggleButton");
            return false;

        }

         });
     };




































        };
        module.exports = LegislationDocumentDisplayPage;