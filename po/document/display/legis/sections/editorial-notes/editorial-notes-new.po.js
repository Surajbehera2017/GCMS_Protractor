var editorialNotes = function() {

  
   var _printProductsLabel=  element(by.xpath('.//*[normalize-space(text())="Editorial Notes"]/../span[text()="(Print Products)"]'));
   var _digitalProductsLabel=  element(by.xpath('.//*[normalize-space(text())="Editorial Notes"]/../*[text()="(Digital Products)"]'));
   var _internalNoteLabel=  element(by.xpath('.//*[@ng-bind="\'EditorialNote.title.internalNote\' | translate"]'));
   var _printProductViewAllLink=  element(by.xpath('//*[text()=\'(Print Products)\']/../../..//a[text()=\'View more\']'));
   var _printProductCreateNoteLink=  element(by.xpath('//*[normalize-space(text())=\'(Print Products)\']/../../..//a[text()=\'Create note\']'));
   var _printProductEditLink=  element.all(by.id('btnExitEditMode')).get(1);
   var _digitalProductViewAllLink=  element(by.xpath('//*[text()=\'(Digital Products)\']/../../..//a[text()=\'View more\']'));
   var _digitalProductCreateNoteLink=  element(by.xpath('//*[text()=\'(Digital Products)\']/../../..//a[text()=\'Create note\']'));
   var _internalNoteViewAllLink=  element(by.xpath('//*[text()=\'Internal Note\']/../..//a[text()=\'View more\']'));
   var _modalContent=  element(by.css('.modal-content'));
   var _closeModalContent=  element(by.css('.btn.btn-primary.ng-binding'));
   var _modalContentOKButton=  element(by.css('.btn.btn-primary.ng-scope'));
   var _modalContentErrorMessage=  element(by.css('.toast-message'));
   var _publishedInDigitalProductsCheckBox=  element(by.xpath('.//*[@for="IdnotaAplicaPECheckBox"]'));
   var _xEditorTextBox=  element(by.id('visible-e2'));
   var _xEditorSaveButton=  element(by.id('button-1027-btnIconEl'));
   var _internalNoteEditTextBox=  element(by.model('editorialNotes.model.data.document.notaInterna'));
   var _editorialNoteIconOnDocStructureAXIV=  element.all(by.xpath("(.//*[@ng-click='structureCtrl.viewEditorialNote(layer,$parent)'']/div[@class='icon-analysis icon-editorial-note-position'])[9]"));
   var _editorialNoteTitleInPopup=  element(by.xpath('.//*[@disabled=\'disabled\']/a[text()=\'EDITORIAL NOTE\']'));
   var _editorialNoteTextInPopup=  element(by.xpath('html/body/blockquote/font/p'));
   var _closePopUpWindow=  element.all(by.css('.bento-icon-close-x'));
   var _documentStructureTab =  element(by.css('[active="rightPanel.viewTabs.structure"]'));
   var _expandButton =  element(by.id('collapsed-editorial-notes-link'));
   var _collapseButton =  element(by.id('non-collapsed-editorial-notes-link'));

   

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

/********/

//This takes property as argument and enter text in field
    this.enterText = function(property,value){
        var field = element(by.xpath(property))
        field.clear();
        field.sendKeys(value);
        
    }

    this.clickOnElement = function(property){
      element(by.xpath(property)).click();
    }

   


/********/
    this.isEditorialNoteDisplayedInPopup = function() {
       
        	return _editorialNoteTitleInPopup.isDisplayed();
                
    }; 
    
	this.clickEditorialNoteIconOnDocStructureAXIV= function() {
        
        _editorialNoteIconOnDocStructureAXIV.get(0).click();
        
    }; 
    
    this.clickClosePopUp = function() {
        
        	 _closePopUpWindow.get(1).click();
        
    }; 
    
    this.isDisplayedEditorialNoteIconOnDocStructureAXIV = function() {
        
        	return _editorialNoteIconOnDocStructureAXIV.get(0).isDisplayed();
        
    }; 
    
	this.clickXEditorSaveButton = function() {
        
             //_xEditorSaveButton.click();
        return element(by.css('[class="x-btn x-unselectable x-btn-toolbar x-box-item x-toolbar-item x-btn-default-toolbar-medium x-icon x-btn-icon x-btn-default-toolbar-medium-icon"]')).click();
        
    }; 

    this.isXEditorSaveButtonPresent = function() {
        
        	return _xEditorSaveButton.isPresent();
        
    }; 

   this.writeXEditorTextBox = function(value){
	      //click on the editor from the frame2 and enter text
       // element(by.css('[data-type="parrafo"]')).sendKeys(value);
         var locator = browser.driver.findElement(by.css('[data-type="parrafo"]'));
		  browser.actions().click(locator).sendKeys(value).perform();
				
    };
    
    this.clickOnPasteDropdown = function () {
		//var el = element(by.id('splitbutton-1037'));
		var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
		browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
    };
    
    this.selectOptionFromPasteDropdown = function (i) {
        element.all(by.css('.x-component.x-box-item.x-component-default.x-menu-item')).get(i).click();
    };

    
    this.clickOnInsertButton = function (i) {
		element.all(by.css('.x-btn.x-unselectable.x-box-item.x-toolbar-item.x-btn-default-small.x-icon-text-left.x-btn-icon-text-left.x-btn-default-small-icon-text-left')).get(0).click();
    };
    
	this.enterTextIntoPopup = function (i, value) {

		element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(i).click();
		browser.sleep(2000);
		element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(i).sendKeys(value);
		browser.sleep(3000);
		// element(by.id('textarea-1307-bodyEl')).click();
		// element(by.id('textarea-1307-bodyEl')).sendKeys(value);
	};
	
	this.modalContentErrorMessage = function(){
        
            return _modalContentErrorMessage.getText();
        
    };

    this.clickOnCreateNoteLink = function(i){

        return element.all(by.css('[ng-click="create(lang)"]')).get(i).click();
    };
    
    this.clickPrintProductCreateNoteLink = function() {
       element(by.id('editPrintEditorialNotesBtn')).click();
        
    };
    
    this.clickDigitalProductCreateNoteLink = function() {
        
        	_digitalProductCreateNoteLink.click();
        
    };
    
    this.clickPublishedInDigitalProductsCheckBox = function() {
        
        	_publishedInDigitalProductsCheckBox.click();
        
    };
    
    this.clickModalContentOKButton = function() {
        
        	_modalContentOKButton.click();
        
    };
    
	this.getInternalNoteEditBoxText = function() {
        
        	return _internalNoteEditTextBox.getText();
        
    };
    
    this.isInternalNoteDisplayed = function(i, value){
        var innerText = element.all(by.css('[name="contentDinameTextDiretiveMore"]')).get(i).getAttribute('innerText');
        return innerText.includes(value);
	  		
	};
	
	this.isPrintNoteDisplayed = function(){
		
			return element(by.xpath('//*[text()=\'(Print Products)\']/../..//*[text()=\''+value+'\']')).isDisplayed();
		
	};
	
	this.isDigitalNoteDisplayed = function(){
		
			return element(by.xpath('//*[text()=\'(Digital Products)\']/../..//*[text()=\''+value+'\']')).isDisplayed();
		
	};
    
    this.appendToInternalNoteEditBoxText = function(value) {
        
        	return _internalNoteEditTextBox.sendKeys(appendText);
        
    };
    
    this.writeInternalNoteEditBoxText = function(value){
		
         element(by.model('editorialNotes.model.data.document.notaInterna')).clear();
         element(by.model('editorialNotes.model.data.document.notaInterna')).sendKeys(value);
		
	};
	
       
	/*_scrollTo = function() {
		
			// There are some issues with the double scroll when trying to click some elements
            browser.executeScript(function (element) { element.scrollIntoView(false);}, 
            webelement.getWebElement());
            
		
	}; */
	
	this.closeModalContent = function() {
        
        	 _closeModalContent.click();
        
    };
    
	this.isModalContentDisplayed = function() {
        
        	return _modalContent.isDisplayed();
                
    };
    
    this.isPrintProductsLabelDisplayed = function() {
        
        	return _printProductsLabel.isDisplayed();
        
    };
    
    this.isPrintProductViewAllLinkDisplayed = function() {
        
        	return _printProductViewAllLink.isDisplayed();
        
    };
    
    this.isPrintProductEditLinkDisplayed = function() {
        
        	return _printProductEditLink.isDisplayed();
        
    };
    
    this.clickPrintProductViewAllLink = function() {
        
        	_printProductViewAllLink.click();
        
    };
    
    this.isDigitalProductsLabelDisplayed = function() {
        
            return _digitalProductsLabel.isDisplayed();
        
    };
    
    this.isDigitalProductViewAllLinkDisplayed = function() {
        
            return _digitalProductViewAllLink.isDisplayed();
        
    };
    
    this.clickDigitalProductViewAllLink = function() {
        
             _digitalProductViewAllLink.click();
        
    };
    
    this.isInternalNoteLabelDisplayed = function() {
        
            return _internalNoteLabel.isDisplayed();
        
    };
    
    this.isInternalNoteViewAllLinkDisplayed = function() {
        
            return _internalNoteViewAllLink.isDisplayed();
        
    };
    
    this.clickInternalNoteViewAllLink = function() {
        
            _internalNoteViewAllLink.click();
        
    };

    this.clickOnDocumentStructureTab = function() {
        
             _documentStructureTab.click();
        
    };

    this.isExpanded = function() {
        return _collapseButton.isPresent();
        };
    
        this.isCollapsed = function() {
            return _expandButton.isPresent();
            };
    
    
        this.expandSection = function() {
        _expandButton.click();
        };

        this.collapseSection = function() {
            _collapseButton.click();
            };

            var _editButton =  element.all(by.id('btnGoToEditMode')).get(1); 
            
            this.clickEditButton = function() { 
            _editButton.click(); 
        };

        this.isEditButtonEnabled = function() {
            return _editButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); 
        };

        this.save = function() {        
            return element.all(by.id('btnSaveDocument')).get(1).click();     
        };
        
        this.acceptNoteChanges = function() {        
            return element(by.css('[name="btnConfirmationDialogAccept"]')).click();     
        };



       
 };
 
 module.exports = new editorialNotes() ;