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

     //to click on ok button of block popup 
     this.clickonokOfBlock = function(){
   element(by.xpath("//button[@ng-click='accept()']")).click();


     };

     //to enter the marginal data in import pop up : test data mentioned below
	//ex: 'Code','RCL'; 'Year','1947';  'N°','476'
	this.enterMarginalIdInAdd = function (option, value) {
		if (option.includes('Code')) {
            console.log("inside Code");
           var el =  element(by.xpath("//div[@ng-click='onDownArrowClick(false, $event)']"));
           el.click();
			//var el = element(by.xpath("//div[@id='publicationTypeCombo']"));
			return el.isDisplayed().then(function (result) {
				if (result === true) {
                     var input = element(by.xpath("//input[@name='comboxInput']"));
                     input.click().sendKeys(value);
                    // browser.sleep(1000);
                    //browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    // element(by.xpath("//li[@ng-click='onItemClick($index)']//span[contains(text(),'"+value+"')]")).click();
                    browser.sleep(2000);
					//
					return result;
				}

			}, function (error) {
				console.log("error in enterMarginalIdImport: code " + value, error);
				return false;
			});
		}
		else if (option.includes('Year')) {
			var loc = element(by.xpath("//input[@ng-model='model.year']"));
			return loc.isDisplayed().then(function (result) {
				if (result === true) {
                    browser.actions().click(loc).perform();
                     loc.clear();
                     browser.actions().click(loc).perform();
                      browser.actions().sendKeys(value).perform();

                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
					return result;
				}

			}, function (error) {
				console.log("error in enterMarginalIdImport: year  " + value, error);
				return false;
			});

		}
		else if (option.includes('Number')){
			var loc2 = element(by.xpath("//input[@ng-model='model.number']"));
			return loc2.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(loc2).sendKeys(value).perform();
					return result;
				}
			}, function (error) {
				console.log("error in enterMarginalIdImport: number  " + value, error);
				return false;
			});

        }
        
        else if(option.includes('Text')){
            var loc3 = element(by.xpath("//input[@ng-model='model.text']"));
            return loc3.isDisplayed().then(function(result){
                if (result === true){
                    browser.actions().click(loc3).sendKeys(value).perform();
                    return result;
                }
                },function (error) {
                    console.log("error in enterMarginalIdImport: number  " + value, error);
                    return false;
            
        });
    };

        };

        //to click on Cancel button in add pop up
        this.clickOnCancelOfAdd = function(){
           element(by.xpath("(//button[@ng-click='close()'])[2]")).click();
        };

        //expanding and collapsing the fixed section 
        this.expandAndCollapseFixSection = function(){
        element(by.xpath("//div[@id='collapse-all']//a[@class='decoration-none']")).click();
        };

        //selecting the Language from the user drop down
        this.selectLanguageFromUserDropdown = function(language){

          var langDropDown= element(by.xpath("(//span[@class='dropdown-icon user-menu'])[2]"));
          var dropDowOptions= element(by.xpath("//ul[@class='dropdown-menu dropdown-menu-right']//following::a[text()='"+language+"']"));
         return  langDropDown.isDisplayed().then(function(result){
            if(result){
                langDropDown.click();
                var dropDowOptions= element(by.xpath("//ul[@class='dropdown-menu dropdown-menu-right']//following::a[text()='"+language+"']"));
                dropDowOptions.isDisplayed().then(function(result){
                    if(result){
                    dropDowOptions.click();
                }
                },function (error) {
                    console.log("error in selectLanguageFromUserDropdown: ", error);
                    return false;
                 });

            }
         },function (error) {
            console.log("error in selectLanguageFromUserDropdown: ", error);
            return false;
         });

        };
        //
        this.isWelcomeTextDisplayed = function(welcomemsg){
           var el = element(by.xpath("//span[contains(text(),'"+welcomemsg+"')]"));
           return el.isDisplayed().then(function (present) {
            if (present) {
                return present; 
        }
        else {
            console.log("text is not getting displayed");
            return false;
        }
    }, function (error) {
        console.log("error in isWelcomeTextDisplayed");
        return false;
    });

};

};

        module.exports = new fix_section();