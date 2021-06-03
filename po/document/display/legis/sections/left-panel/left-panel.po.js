var leftpanelpage = function() {
  
  this.urlLoad=function(){
        
        var loginpopup =  element(by.model('credentials.username'));
        loginpopup.isPresent().then(function(result) {
        
        if ( result ) {
         
        element(by.model('credentials.username')).sendKeys('UX001254');
        element(by.model('credentials.password')).sendKeys('Naveen@trnet17');
        element(by.buttonText('Login')).click();
  
        }
        else{
            
        }
    });
    };
    
    this.clickExpandAllButton= function() {
       element(by.id('collapse-all-collapsed-link')).click(); 
    };
    
    this.clickCollapseAllButton= function() {
       element(by.id('collapse-all-non-collapsed-link')).click(); 
    };
    
    this.isExpandAllButtonPresent= function() {
       element(by.id('collapse-all-collapsed-link')).isPresent(); 
    };
    
    this.isGeneralDataExpanded= function() {
       element(by.css('[ng-click="expandCollapse.status.general.open=!expandCollapse.status.general.open"]')).isPresent(); 
    };
    
    this.clickEditButton= function() {
       element.all(by.id('btnGoToEditMode')).get(1).click(); 
    };
    
    this.isExitButtonAvailable= function() {
       element.all(by.id('btnExitEditMode')).get(1).isPresent(); 
    };
    
    this.isGeneralDataPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(0).isPresent(); 
    };
    
    this.isProductCollectionsPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(1).isPresent(); 
    };
    
     this.isControlDataPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(2).isPresent(); 
    };
    
     this.isStatueDataPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(3).isPresent(); 
    };
    
    this.isPublicationDataPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(4).isPresent(); 
    };
    
    this.isCorrigendasPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(5).isPresent(); 
    };
    
    this.isValidityPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(7).isPresent(); 
    };
    
    this.isEditorialNotesPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(11).isPresent(); 
    };
    
    this.isPracticeAreaPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(8).isPresent(); 
    };
    
    this.isTopicSubtopicPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(9).isPresent(); 
    };
    
     this.isThesaurusPresent= function() {
       element.all(by.css('#panelLeft div #content-section div div div div span.class-title strong.ng-binding')).get(12).isPresent(); 
    };
    
    this.isAddButtonPresent= function() {
       element(by.css('[ng-click="corrigendasSumCtrl.goToAdd()"]')).isPresent(); 
    };
    
    this.isAddMainButtonPresent= function() {
       element.all(by.id('btnAddfixSection')).get(1).isPresent(); 
    };
    
    

};

module.exports = new leftpanelpage();