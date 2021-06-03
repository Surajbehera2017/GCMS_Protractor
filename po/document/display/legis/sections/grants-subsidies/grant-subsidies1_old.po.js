

var mainpage = function() {
   
    this.loginusername= function(){
        element(by.model('credentials.username')).sendKeys('UX007885');
    };
     this.loginpassword= function(){
         element(by.model('credentials.password')).sendKeys('Welcome4');
     };   
        
    this.clicklogin= function(){
        element(by.buttonText('Login')).click();
    };
  
    this.clickexpandgrantsubsidies= function(){
        element(by.id('linkUncollapseGrantsAndSubsidiesSection')).click();
    };
    
    this.clickviewmore= function(){ 
        element.all(by.css('[name="linkMoreMinifiedDirective"]')).get(6).click();
     };
    
    this.getgrantsubsidies= function(){ 
        element(by.cssContainingText('.ng-scope','Prestaciones económicas de especial urgencia para el pago del alquiler, de cuotas de amortización hipotecaria en situaciones especiales, y para atender a personas que han perdido la vivienda a consecuencia de un proceso de desahucio o de ejecución hipotecaria (Cataluña)')).getText();
     };
    
    this.clickclose= function(){ 
        element(by.buttonText('Close')).click();
     };
                     
    this.clickunexpandgrantsubsidies= function(){
        element(by.id('linkCollapseGrantsAndSubsidiesSection')).click();
    };           
    
    this.openthesaurus= function(){
        element(by.id('thesaurusViewAllLink')).click();
    }; 
    
    
    this.thesaurusshowfilter= function(){
        element(by.buttonText('Show Filters')).click();
    };
    
    this.enteranalystname= function(){
        element(by.model('analystInput')).sendKeys('%Emma%');
        element(by.model('analystInput')).sendKeys(protractor.Key.ENTER);
    };
    
    this.closethesaurus= function(){
        element(by.id('modal.thesaurus.close')).click();
    };
    
    this.clickdelete= function(){
        element.all(by.id('btnDeletefixSection')).get(1).click();
    };
    
    this.clickNodelete= function(){
        element(by.buttonText('No')).click();
    };
    
    this.openrelationship= function(){
        element(by.id('relationshipViewAllLink')).click();
    };
    
    this.enterunit= function(){
        element(by.model('targetBodyUnitLevel')).sendKeys('PT.4');
        element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
    };
    
    this.clickrelationshipclose= function(){ 
        element(by.css('[ng-click="close()"]')).click();
     };
    
    this.relationshipadd= function(){
        element(by.id('relationships.summarization.addSingle')).click();
    };
    
    this.relationshipswitch= function(){ 
       //  element(by.css('img.switch-direction-img')).click();
       // element(by.css('[ng-show="RelationshipsAddModalCtrl.relationship.idRelacion == 0"]')).click();
       //  element(by.css('button.switch-direction-button')).click();
    //  element(by.xpath('//div[@class="modal-dialog ui-draggable"]//button[@class="switch-direction-button"]')).click();
        element.all(by.css('[name="datosRelacion.tipo"]')).click();
     };
    
    
    this.relationipclose= function(){ 
        element.all(by.css('[ng-click="RelationshipsAddModalCtrl.closeConfirmationModal()"]')).get(1).click();
     };
    
    this.relationipminimize= function(){ 
        //selement(by.model('txtField')).sendKeys('Test');
        browser.sleep(3000);
        element(by.id('relaTypeDrop')).element(by.css('a[name="lnkSearchDropdownNav"]')).click;
     };
    
    
    this.addbutton= function(){
       element.all(by.css('[ng-click="metaDataCtrl.addNewDocument()"]')).get(1).click();
      //  element(by.buttonText('Add')).click();
    };
    this.copybutton= function(){
      //  element(by.id('btnCopyfixSection')).click();
         element.all(by.id('btnCopyfixSection')).get(1).click();
    };
    this.editbutton= function(){
      //  element(by.id('btnGoToEditMode')).click();
         element.all(by.id('btnGoToEditMode')).get(1).click();
    };
    
     this.relationyear= function(){
   
       //  driver.navigate().refresh();
         if (
             
             element(by.id('panel3')).element(by.css('input[name="afectado.marginal.nota"]')).isEnabled()
             &&
             element(by.id('panel3')).element(by.css('input[name="afectado.marginal.nota"]')).isDisplayed()
            ){
             console.log('reached1')
            // element(by.id('panel3')).element(by.css('input[name="afectado.marginal.nota"]')).sendKeys('Test');
              console.log('reached2')
             }
      };
    
    this.topicsubtopic= function(){
        element(by.id('topicSubtopicViewAllLink')).click();
    };
    
    this.topicacceptcare= function(){
        element(by.css('a[ng-click="changeAnalyst()"]')).click();
    };
    
    this.selectfirst= function(){
        element.all(by.model('$item.selected')).get(0).click();
    };
    
     this.clickcancel= function(){ 
        element(by.buttonText('Cancel')).click();
     };
    this.documentno= function(){ 
        element.all(by.binding('documentheader.documentation.data.document.marginal.numeroMarginal')).get(1).getText();
     };
    
    this.expandall= function(){ 
        element(by.id('collapse-all-collapsed-link')).click();
     };
    this.unexpandall= function(){ 
        element(by.id('collapse-all-non-collapsed-link')).click();
     };
    
    
    
};

module.exports = new mainpage() ;