var LegislationDateInForceSection = function() {  

    
    var _DateForce= element(by.binding('Validity.title.dateForce')); 
	var _EffectiveType= element(by.binding('Validity.title.effectiveType'));
	var _IneffectiveDate= element(by.binding('Validity.title.ineffectiveDate'));
	var _ineffectiveNote= element(by.binding('Validity.title.ineffectiveNote'));
    //var _dateCalculator= element(by.css('[ng-click="sectionValidityController.calculateDate()"]'));

	
    this.isVisibleEffectiveType=  function () { 
        return _EffectiveType.isPresent();
    };

    this.isVisibleDateForce=  function () { 
        return _DateForce.isPresent();
    };
        
    this.isVisibleIneffectiveDate =  function() { 
        return _IneffectiveDate.isPresent();
    };
            
    this.isVisibleineffectiveNote=  function() { 
          return _ineffectiveNote.isPresent();
    };
            
    this.isVisibleDateCalculator=  function() { 
         return _dateCalculator.isPresent();
    };
    
    //added by Punit Joshi - 23/05/2016
    
    var _DateForceNew= element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')); 
	var _EffectiveTypeNew= element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.temporalidad.code"]'));
	var _IneffectiveDateNew= element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [id="inoperateDate"]'));
	var _ineffectiveNoteNew= element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]'));
    var _dateCalculatorNew= element(by.css('[ng-click="sectionValidityController.calculateDate()"]'));
    
	
    this.isVisibleEffectiveTypeNew = function() { return _EffectiveTypeNew.isDisplayed();};
    this.isVisibleDateForceNew = function() { return _DateForceNew.isDisplayed();};
    this.isVisibleIneffectiveDateNew = function() { return _IneffectiveDateNew.isDisplayed();};
    this.isVisibleineffectiveNoteNew = function() { return _ineffectiveNoteNew.isDisplayed();};
    this.isVisibleDateCalculatorNew = function() { return _dateCalculatorNew.isDisplayed();};


    this.setEffectiveTypeToBlank = function() {  
         _EffectiveTypeNew.click();
        return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.temporalidad.code"]>option')).click();
    };
    
    
    
    this.changeAndVerifyEffectiveType = function() {
         _EffectiveTypeNew.click();
        return element(by.css('[ng-repeat="type in sectionValidityController.effectiveTypesList"][ng-selected="false"]')).click();
        
    };
    
	this.changeInEffectiveNote = function() {
         _ineffectiveNoteNew.clear();
        return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]')).sendKeys('This is for testing');
       
    };
    
    this.enterIneffectiveNote  = function(value) {
         _ineffectiveNoteNew.clear();
        return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.notaTemporalidad"]')).sendKeys(value);
    };
    
    this.changeIneffectiveType = function (ineffectivetypeoptions) {
         _EffectiveTypeNew.click();
        return element.all(by.css('[ng-repeat="type in sectionValidityController.effectiveTypesList"]')).filter(function(elem, index){
        return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
                //return txt.indexOf(code,0)!=-1;
        return (txt<ineffectivetypeoptions?false:(txt>ineffectivetypeoptions?false:true));
            });
            
        }).first().click();
    };
    
    this.enterdateIntoIneffectiveDate = function() {
        return _IneffectiveDateNew.sendKeys('01/01/2016');
           
        };
        
        this.changeInDateInForce = function (value) {

             _DateForceNew.clear();
            return element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')).sendKeys(value);
            
        };
        
        this.getValueOfDateInForce = function() {
            
            return element(by.id('textDateForceValueValidityDataSection')).getText();
           
        };
        
        
        
        this.clickSaveBtn  = function(i) {
            
          var ele=  element.all(by.id('btnSaveDocument')).get(i);
          ele.click();
           
        };
        
        
        
        this.clickSavePopup = function() {

            var ele = element(by.xpath("//div[@class='modal-content']//button[text()='Save']"));
                 ele.click();


            // var ele = element.all(by.css('[ng-click="ok()"]')).get(i);
            // ele.click();
            // var loc = element.all(by.xpath("//button[text()='Save']")).get(i);
            // return loc.isPresent().then(function (result) {
            //     if (result == true) {
            //         browser.actions().click(loc).perform();
            //     } else {
            //         console.log("Error in clickSavePopup");
            //         return false;
            //     }
            // });
        }
           
        
        
        this.getMessageOnPriorDateInForce = function() {
            
            return element.all(by.css('[ng-repeat="item in messages"]')).get(0).getText();
           
        };
        
        var _dateCalculator = element(by.xpath("//span[@class='ng-binding'][contains(text(),'Date Calculator')]"));
        
        this.clickonDateCalculator = function() {
            
            return _dateCalculator.click();
           
        };
        
        _radioButton = element.all(by.css('[type="radio"]')).get(5);
        
        this.isRadioButtonSelected = function() {
            
            return element.all(by.css('[type="radio"]')).get(5).isPresent();
            
           
        };
        
        _closePopup = element.all(by.css('.bento-icon-close-x')).get(1);
        
        this.clickonClosepopup = function() {
            
             _closePopup.click();
           
        };
        
        _originalData = element(by.css('[ng-model="date"]'));
        
        this.getOriginalDate = function() {
            
            return _originalData.getText();
           
        };
        
        _monthRadioButton = element(by.xpath('.//*[@id="body"]/div[1]/div/div/section/div[3]/div[2]/label/input'));
        
        this.clickonMonthRadioButton = function() {
            
            return _monthRadioButton.click();
           
        };
        
        _dateRadioButton = element(by.xpath('.//*[@id="body"]/div[1]/div/div/section/div[4]/div[2]/label/input'));
        
        this.clickonDateRadioButton = function() {
            
            return _dateRadioButton.click();
           
        };
        
         _calculate = element(by.css('.btn.grey-button.btn-default.btn-header.btn-padding.float-right.ng-binding'));
        
        this.clickCalculateButton = function() {
            
            return _calculate.click();
           
        };
        
        _setDateButton = element(by.css('.btn.orange-button.btn-header.btn-padding.btn-save-color.ng-scope'));
        
        this.clickSetDateButton = function() {
            
            return _setDateButton.click();
           
        };
        
        _newDate = element(by.css('[ng-model="date"]'));
        
        this.getNewDate = function() {
            
            return _newDate.getText();
           
        };

        var _expandButton =  element(by.id('linkUncollapseValidityDataSection'));
        var _collapseButton =  element(by.id('linkCollapseValidityDataSection'));
        
        
        this.isExpanded = function() {
                   return _collapseButton.isPresent();
                   };
               
                   this.isCollapsed = function() {
                       return _expandButton.isPresent();
                       };
               
               
                   this.expandSection = function() {
                  return _expandButton.click();
                   };
           
                   this.collapseSection = function() {
                       return _collapseButton.click();
                       };

        this.urlLoad=function(user,password){
                        
                        var loginpopup =  element(by.model('credentials.username'));
                        loginpopup.isPresent().then(function(result) {
                
                            if ( result ) {
                
                                //element(by.model('credentials.username')).sendKeys(user);
                               // _printProductsLabel.sendKeys(user);
                                element(by.model('credentials.username')).sendKeys(user);
                                element(by.model('credentials.password')).sendKeys(password);
                                element(by.buttonText('Login')).click();
                
                            }
                            else{
                
                            }
                        });
                        
                    };

    this.isEffectiveTypePresent = function(){
                        
        return element(by.css('.select-element-large.select-element.input-border.ng-pristine.ng-valid')).isPresent();
                    
    };

    this.isDateINForceFieldPresent = function(){
        
       return element(by.css('[date="sectionValidityController.document.data.document.fechaEntradaEnVigor"] [class="select-element-small input-border ng-isolate-scope ng-pristine ng-valid-required ng-valid ng-valid-date"]')).isPresent();
    
};

this.isInEffectiveDatePresent = function(){
    
   return element(by.css('#inoperateDate')).isPresent();

};

this.isDateCalculatorPresent = function(){
    
   return element(by.css('[ng-click="sectionValidityController.calculateDate()"]')).isPresent();

};

this.changeInDateInForceNew = function(value){

    element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')).clear();    
    element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]')).sendKeys(value);
    
    };


    
};

module.exports = new LegislationDateInForceSection();