var rightpanelpage = function() {

	this.urlLoad=function(user,password){

		var loginpopup =  element(by.model('credentials.username'));
		loginpopup.isPresent().then(function(result) {

			if ( result ) {

				element(by.model('credentials.username')).sendKeys(user);
				element(by.model('credentials.password')).sendKeys(password);
				element(by.buttonText('Login')).click();

			}
			else{

			}
		});
        
    };
    
    this.clickonExpandEditorialnotes=function(){
        element.all(by.id('collapsed-editorial-notes-link')).get(0).click();
        
    };
        
    this.clickonWordicon=function(){
        element.all(by.id('editPrintEditorialNotesBtn')).get(0).click();
    };  
    
    this.clickonCrearNota=function(){
        element.all(by.css('[ng-click="create(lang)"]')).get(0).click();
    };  
    
    this.enterdatainXML=function(data){
        element(by.css('.x-form-field.x-form-text.x-form-textarea')).sendKeys(data);
    };
    
    this.clickonEnterdata=function(){
        element(by.css('.x-form-field.x-form-text.x-form-textarea')).sendKeys(data);
    };
    
    this.clickonInsertButton=function(){
         element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(47).sendKeys(data);
    }
    
    
    this.clickPasteDropdownPresentXEditor = function() {
        
	element(by.id('splitbutton-1038-btnWrap')).isPresent().then(function(result){
            var el = element(by.id('splitbutton-1037'));
            browser.actions().mouseMove(el,{x: 30, y: 0}).click().perform();
	},
	function(error){
	console.log("Error in clickPasteDropdownPresentXEditor");
	});
	};    
        
        
        
	
};

module.exports = new rightpaneleditpage();