


var LegislationGrantsAndSubsidiesSection = function() {
    

        var _loginUserName = element(by.model('credentials.username'));
	    var _loginPassword = element(by.model('credentials.password'));
	    var _loginButton = element(by.buttonText('Login'));
        var _noEntriesFound=element(by.css('[ng-show="grandAndSubsidies.isNoEntriesFound"]'));   
        var _subjectOfTheGrantField=element.all(by.css('[ng-show="expandCollapse.status.grantsAndSubsidies.open && !grandAndSubsidies.isNoEntriesFound"]>div')).get(0);	
       // var _subjectOfTheGrantText=element.all(by.css('[ng-show="expandCollapse.status.grantsAndSubsidies.open && !grandAndSubsidies.isNoEntriesFound"]>div')).get(1);	
        var _beneficiariesField=element.all(by.css('[ng-show="expandCollapse.status.grantsAndSubsidies.open && !grandAndSubsidies.isNoEntriesFound"]>div')).get(2);   
      //  var _beneficiariesText=element.all(by.css('[ng-show="expandCollapse.status.grantsAndSubsidies.open && !grandAndSubsidies.isNoEntriesFound"]>div')).get(3);   
         var _subjectOfTheGrantText= element(by.css("[popuptitle='GrantsAndSubsidies.title.Grants'] div div.ng-scope"))
     // var _subjectOfTheGrantText=element.all(by.css('div.css-abstract-field.margin-left-1875em > div[name="contentDinameTextDiretiveMore"] > div.ng-scope')).get(1);  
        var _beneficiariesText=element(by.css("[popuptitle='GrantsAndSubsidies.title.Beneficiaries'] div div.ng-scope"));
        var _subjectofthegrantvalue=element(by.css('[name="contentMessageReadMoreDirective"]>div'));
        
        var _close=element(by.css('.btn.btn-primary.ng-binding'));
        var _addButton=element.all(by.id('btnAddfixSection')).get(1);    
        var _selectLeg=element(by.xpath('//div[@class="input-mediun-import"]//*[@class="bento-combobox bento-select ng-isolate-scope form-control"]'));	
        var _code=element(by.model('inputLabel'));
        var _addclickagain=element(by.xpath('//div[@class="modal-footer btn-import"]//*[@class="btn btn-primary btn-medium ng-scope"]'));
        var _copyButton= element.all(by.id('btnCopyfixSection')).get(1);
        var _editButton=element.all(by.id('btnGoToEditMode')).get(1);
        var _calculate=element(by.id('validation-id')); 
        var _copyclickagain=element(by.xpath('//div[@class="modal-footer btn-import"]//*[@class="btn btn-primary btn-medium ng-scope"]'));
        var _grantsandsubsidies=element(by.css('#linkUncollapseGrantsAndSubsidiesEditSection'));
        
        
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
        
        this.
        isGrantsAndSubsidiesSectionDisplayed = function() {
            return _grantsandsubsidies.isDisplayed();
            };
        
        
        this.grantsAndSubsidiesSection = function() {
        return browser.executeScript('return document.getElementById(\'linkUncollapseGrantsAndSubsidiesSection\')===null;','');
        };
        
        this.addbutton = function() {
         _addButton.click();
            };
        
        this.selectLeg = function() {
        _selectLeg.click();
            };
        
        
        this.clickselectLeg = function() {
        _selectLeg.click();
            };
         
       
        this.legistypevalue = function() {
         return element.all(by.css('li[ng-click="onItemClick($index)"]>span')).filter(function(elem, index){
                return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
                    //return txt.indexOf(code,0)!=-1;
                    
                    return (txt<code?false:(txt>code?false:true));
                });
                
            }).first();
            };
        
        
        
        this.selectcode= function(text) {
                _code.sendKeys(text);
        };
              
       
        this.editbutton = function() {
            browser.executeScript("arguments[0].click();", _editButton.getWebElement());
            //_editButton.click();
             };
      
         
       
        this. clickaddagain = function() {
        _addclickagain.click();
         };
        
        
         this.copybutton = function() {
         _copyButton.click();
          };
        
        this.clickcalculate = function() {
        _calculate.click();
        }
        
        
       this.clickcopyagain = function() {
       
        _copyclickagain.click();
        };
        
        
        this.subjectOfTheGrantField = function() {
        return _subjectOfTheGrantField.getText();
        };
        
        this.subjectOfTheGrantText = function() {
            browser.executeScript("arguments[0].scrollIntoView();", _subjectOfTheGrantText.getWebElement());
            return _subjectOfTheGrantText.getText();
            };
            
        this.beneficiariesText = function() {
            browser.executeScript("arguments[0].scrollIntoView();", _beneficiariesText.getWebElement());
        return _beneficiariesText.getText();
            };
            
       
        this.beneficiariesField = function() {
        return _beneficiariesField.getText();
            };
            
        this.beneficiariesText = function() {
         return _beneficiariesText.getText();
        };
        
       this.noEntriesFoundMsg = function() {
        
        return _noEntriesFound.getText();
            };
       
            this.enterbeneficiarytext= function(text) {
                _beneficiariesText.sendKeys(text);
        };
         
        
    
    };
    
    module.exports = new LegislationGrantsAndSubsidiesSection;