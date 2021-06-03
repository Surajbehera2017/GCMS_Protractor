var generaldatapagedisplay = function() {
  
  this.urlLoad=function(){
        
        var loginpopup =  element(by.model('credentials.username'));
        loginpopup.isPresent().then(function(result) {
        
        if ( result ) {
         
        element(by.model('credentials.username')).sendKeys('UX001254');
        element(by.model('credentials.password')).sendKeys('Naveen#92');
        element(by.buttonText('Login')).click();
  
        }
        else{
            
        }
    });
    };


    this.clickEditButton= function() {
      element.all(by.id('btnGoToEditMode')).get(1).click();
    };
  
    
    this.clickUncollaspedGeneraldata= function() {
       element(by.id('linkUncollapseGeneralDataSection')).click(); 
    };
    
     this.isUncollaspedGeneraldataVisible= function() {
       element(by.id('linkUncollapseGeneralDataSection')).isPresent(); 
    };
    
    this.isDocumentTypepresent= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Document Type')).isPresent();
    };
      this.isBaselanguagePresent= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Base Language')).isPresent();
    };
      this.isLanguagePresent= function() {
      element(by.cssContainingText('.class-title-body.ng-binding','Language')).isPresent();
    };
     this.isJurisdictionPresent= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Jurisdiction')).isPresent();
    };
      this.isOfficialPresent= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Official :')).isPresent();
    };
    
    
    this.Officialornot= function() {
       element(by.cssContainingText('.detail-value.ng-scope.ng-binding','Yes')).getText();
    };
    
    this.isDocumentTypepresentspanish= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Tipo de documento')).isPresent();
    };
      this.isBaselanguagePresentspanish= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Idioma base')).isPresent();
    };
      this.isLanguagePresentspanish= function() {
      element(by.cssContainingText('.class-title-body.ng-binding','Idioma')).isPresent();
    };
     this.isJurisdictionPresentspanish= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Ámbito/Jurisdicción')).isPresent();
    };
      this.isOfficialPresentspanish= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Oficial :')).isPresent();
    };
    
    this.isDocumentTypepresentportugese= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Tipo de documento')).isPresent();
    };
      this.isBaselanguagePresentportugese= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Idioma base')).isPresent();
    };
      this.isLanguagePresentportugese= function() {
      element(by.cssContainingText('.class-title-body.ng-binding','Idioma')).isPresent();
    };
     this.isJurisdictionPresentportugese= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Âmbito territorial')).isPresent();
    };
      this.isOfficialPresentportugese= function() {
       element(by.cssContainingText('.class-title-body.ng-binding','Oficial :')).isPresent();
    };
    
     this.isOfficialPresent1= function() {
       element(by.id('textLenguagueOfficialValueGeneralDataSection0')).isPresent();
    };
    
     this.isOfficialPresent2= function() {
       element(by.id('textLenguagueOfficialValueGeneralDataSection1')).isPresent();
    };
   
   
    this.Officialornot= function() {
       element(by.cssContainingText('.detail-value.ng-scope.ng-binding','No')).getText();
    };
    
    
   
   this.getSelectedLanguage= function() {
    
    return element.all(by.css('.col-md-5.detail-value')).get(1).getText();
    
      };
    
    
        
    this.getOfficialLanguage= function(){
       // return element(by.css('.detail-value.ng-scope.ng-binding')).getText();
       console.log('the lanuage is catalan');
       return element.all(by.css('.col-md-5.detail-value')).get(1).getText();
    };

    
   
    

   this.clickAddMainPage= function(){
        element.all(by.id('btnAddfixSection')).get(1).click();
    }; 
    
    
  
    
    this.enterNumberPopup= function(data){
        element(by.model('model.number')).sendKeys(data);
        element(by.model('model.number')).sendKeys(protractor.Key.ENTER);
    }; 
    
     this.clickCalculateButton= function(){
        element(by.id('validation-id')).click();
         }; 

         this.clickDropdownButton= function(){
        element(by.css('[ng-click="onDownArrowClick(false, $event)"]')).click();
            }; 
    
    
    
        
          this.clickAddPopupe= function(){
        element.all(by.css('.btn.btn-primary.btn-medium.ng-scope')).click();
    }; 
    
    
              
       this.selectLegDropdown= function(){
        element.all(by.css('.bento-combobox-container-label.ng-binding')).get(2).click();
    }; 
    
};

module.exports = new generaldatapagedisplay();