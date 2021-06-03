var collectiveAgreementSection = function () {

	//var _OkButton_DuplicateStructurePopUp = $('[ng-click="actionDuplicate()"]');

	this.urlLoad = function (user, password) {

		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {

			if (result) {

				element(by.model('credentials.username')).sendKeys(user);
				element(by.model('credentials.password')).sendKeys(password);
				element(by.buttonText('Login')).click();

			}
			else {

			}
        });
        
    };

    //to enter the value in the feilds of 1.Código de Convenio,2. Nota del subrango,3.Periodo de ultraactividad & 4.Jornada (en horas)
    //test data 1.CodigoConvenio 2.Subrango  3. UltraActividad 4. Morkday
    this.enterTextinFeilds = function(feildname,value){
        var el= element(by.xpath("//*[contains(@id,'"+feildname+"')]"));
        browser.executeScript('arguments[0].scrollIntoView()', el);
       return el.isPresent().then(function(result){
            if(result===true){
                console.log("entered loop");
                browser.actions().click(el).perform(); 
            
                
                browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').keyUp(protractor.Key.CONTROL).perform();
                browser.actions().sendKeys(protractor.Key.DELETE).perform();   
               
                browser.actions().click(el).sendKeys(value).perform();
                
                
                return result;
            }
            else{
                return false;
                console.log("error in enterTextinFeilds : " );
            }
        },function(error){
            console.log("error in enterTextinFeilds : " + error);
        });


    }
    //  to select the value of company and subrango from dropdown
    //as a workaround used the index element
    this.selectCompanySubrangeDropdown= function(feildname,value){
        element(by.xpath("(//*[contains(text(),'" +feildname+"')]//..//..//following::div//a[@name='lnkSearchDropdown'])[1]")).click();
        browser.sleep(2000);
        var clicktextbox= element(by.xpath("(//input[@name='txtdropdownsearch'])[9]"));
       //var clicktextbox=element(by.xpath("(//input[@name='txtdropdownsearch'])//..//following::div//input[contains(@class,'has-visited')]"));
        return clicktextbox.isPresent().then(function(result){
            console.log("present",result);
            if(result===true){
                browser.actions().sendKeys(value).perform();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                var selectvalue=element(by.xpath("//a[contains(text(),'"+value+"')]"));
                browser.actions().click(selectvalue).perform();
                return result;
            }
            else{
                return false;
                console.log("error in selectCompanySubrangeDropdown");
            }


        },function(error){
            console.log("error in selectCompanySubrangeDropdown: " +error);
        });
    }

    //to select the thesaurus term: Sectores / Actividades diversas 
    //testdata: 1. 'Sector','Sectores','Agricultura' 2. 'Subsector','Protección Civil','Brigadas rurales de'
    this.selectThesaurusTerm= function(feildname,expectedhierarchy,expectedterm){
        if(feildname==='Sector')
            element(by.xpath("//*[@ng-click='collectiveAgreementsController.openModalSector(0)']")).click();
        
        else{
            element(by.xpath("//*[@ng-click='collectiveAgreementsController.openModalSector(1)']")).click();
        }
      
        element.all(by.xpath("//div[contains(@ng-click,'collapsed')]")).each(function(result){

             result.getText().then(function(text){
                console.log("text : "+text);
                if(text==expectedhierarchy){
                    console.log("term: "+ text);
                    result.click();}
            });
            });
                    element.all(by.xpath("//div[contains(text(),'"+expectedterm+"')]")).each(function(resultterm){
                        resultterm.getText().then(function(termtext){
                            console.log("termtext:" , termtext);
                            if(termtext.includes(expectedterm)){
                                element(by.xpath("//div[contains(text(),'"+expectedterm+"')]/following-sibling::div")).click();
                                 
                                console.log("expected term is : "+termtext);
                            }
                            else{
                                 
                                console.log("error in clicking the term");
                        
                            }
                        });
                    });

    }
    //to delete the feild values for subrango, multiple comapny values,
    //testdata: comapany feild value/sunrango feild value: '112 Asturias' / 'Acta'
    this.deleteFeildValues=function(feildvalue){
        var el = element(by.xpath("//*[contains(text(),'"+feildvalue+"')]//..//..//div//button[contains(@ng-click,'deleteItem()')]"));
        return el.isPresent().then(function(result){
            if(result==true){
                browser.actions().click(el).perform();
                return result;
            }
            else{
                return false;
                console.log("error in deleteFeildValues: "+result);
            }
        },function(error){
            console.log(error);
        });
    };

    //to remove the (previous date and enter the date) or to enter the date in the date feilds
    //test data: 'Fecha de Suscripción','15/12/2010'
    this.enterDate=function(feildname,date){
        var el=element(by.xpath("//span[contains(text(),'"+feildname+"')]//..//..//div//input[@ng-model='date']"));
        return el.isPresent().then(function(result){
            if(result==true){
                console.log("entered loop");
                browser.actions().click(el).perform(); 
                el.clear(); 
                el.sendKeys(date);
                return result;
            }
            else{
                return false;
                console.log("error in enterDate: ");
            }
        },function(error){
            console.log(error);
        });

    };
    
    //to remove the feild after adding
    //testdata: 1.'Comapany' 2. 'Sector'
    this.toDeletetheFeilds=function(feildname){
        if(feildname==='Company'||feildname==='Collections'){
            var el=element(by.xpath("//*[contains(text(),'"+feildname+"')]//..//..//a/i"));
           
        }
        else if(feildname==='Sector'){
            var el=element(by.xpath("(//*[contains(text(),'Sector')]//..//..//a/i)[1]"));
            
        }
        else{
           var el= element(by.xpath("(//*[contains(text(),'Sector')]//..//..//a/i)[2]"));
            
        }

        browser.executeScript("arguments[0].scrollIntoView();", el);
        el.click();
    };

    //to click on exitediting mode and save 
    this.clickSaveExitEdit=function(buttontext){
        var el=element(by.xpath("(//button[text()='"+buttontext+"'])[2]"));
        return el.isPresent().then(function(result){
            if(result===true){
                el.click();
            }
            else{
                return false;
                console.log("error in clickSaveExitEdit: ");
            }
        },function(error){
            console.log(error);

        });
    };

    //to enter the marginal data in import pop up : test data mentioned below
	//ex: 'Code','RCL'; 'Year','1947';  'N°','476'
	this.enterMarginalIdImport = function (option, value) {
		if (option.includes('Code')) {
           var el =  element(by.xpath("//div[@ng-click='onDownArrowClick(false, $event)']"));
           el.click();
			//var el = element(by.xpath("//div[@id='publicationTypeCombo']"));
			return el.isDisplayed().then(function (result) {
				if (result === true) {
                    // el.click().sendKeys(value);
                    // browser.sleep(1000);
                    //browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    element(by.xpath("//li[@ng-click='onItemClick($index)']//span[contains(text(),'"+value+"')]")).click();
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
            loc.clear();
			return loc.isDisplayed().then(function (result) {
				if (result === true) {
                    browser.actions().click(loc).perform();
                     loc.clear();
                      browser.actions().sendKeys(value).perform();

                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
					return result;
				}

			}, function (error) {
				console.log("error in enterMarginalIdImport: year  " + value, error);
				return false;
			});

		}
		else {
			var loc2 = element(by.xpath("//[@ng-model='model.number']"));
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
    };
    
    //click add in add marginal window
    this.clickAddCopy=function(buttonname){
       
        if(buttonname=='Add'){
        var el=element(by.xpath("//*[@data-ng-click='add()']"));
        el.click();
        }
        else{
            var el2=element(by.xpath("//*[@data-ng-click='copy()']"));
            el2.click();
        }

    }

    //to click on search and take value froom dropdown of keyword feild and to click on remove(x) button
    
    this.selectvalueSearchRemoveKeyword=function(button,value){
       
       if(button=='Search'){
            var feildname=element(by.xpath("//*[text()='Main-Keyword']"));
            browser.executeScript("arguments[0].scrollIntoView();", feildname.getWebElement());
            var searchbutton=element(by.xpath("//button[@name='btnfretextsearch']"));
             return searchbutton.isPresent().then(function(result){
                 if(result==true){
                   // browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                     var entervalue=element(by.xpath("//a[contains(text(),'"+value+"')]"));
                     var search=element(by.xpath("//input[@ng-model='model']"));
                     search.click().sendKeys(value).sendKeys(protractor.Key.ENTER);
                     entervalue.click();
                    
                 }
                 else{
                     console.log("error in selectvalueSearchRemoveKeyword: search");
                 }

        },function(error){
            console.log(error);
        })
    }
    else{
        element(by.xpath("//button[@name='btnfretextremove']")).click();
    }
    };

   this.enterTextLanguagepopup=function(language,text){

        var el=element(by.xpath("//label[contains(text(),'"+language+"')]//..//*[@ng-model='item.description']"));
        return el.isPresent().then(function(result){
            if(result==true){
                
                el.click();
                el.clear();
                el.sendKeys(text);
            }
            else{
                return false;
                console.log("error in enterTextLanguagepopup");
            }
        },function(error){
            console.log(error);
        });
   };

    





























};

module.exports = new collectiveAgreementSection();