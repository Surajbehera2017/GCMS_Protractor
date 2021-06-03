var originaltextpage = function() {
   
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.css('div.modal-footer button.btn.btn-primary.ng-binding'));
	var _clickoriginaltext = element.all(by.css('[ng-click="select()"]')).get(2);
	var _isdisplayimportpdf = element(by.id('btnImportOriginalTextFilePdf'));
	var _originattextpdftitle = element(by.css('[class="original-text-pdf-title"]'));
	var _pdficon = element(by.css('.icon-pdf'));
	var _removebutton = element(by.id('originalTextRemoveBtn-0'));
	var _cnfmodalwindow = element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding'));
	var _confmmsg = element(by.css('.modal-confirm-message.ng-scope.ng-binding'));
	var _cancelbutton = element(by.css('[ng-click="cancel()"]'));
	var _clickyesbutton = element(by.xpath('//button[@ng-click="ok()"]'));
		
	
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
    
    this.clickOriginalText=function(){
    	_clickoriginaltext.click();
    };
    
    this.isDisplayImportPDF=function(){
    	return _isdisplayimportpdf.isDisplayed().then(function(result){
			return result;
		},
		function(error){
			console.log("Error in isDisplayImportPDF");
			return false;
		}); 
    };

    this.isOriginalTextPDFTitleDisplayed=function(){
    	return _originattextpdftitle.isDisplayed().then(function(result){
			return result;
		},
		function(error){
			console.log("Error in isOriginalTextPDFTitleDisplayed");
			return false;
		}); 
    };
    
    this.isPDFIconDisplayed=function(){
    	browser.sleep(1000);
    	return _pdficon.isPresent().then(function(result){
			return result;
		},
		function(error){
			console.log("Error in isPDFIconDisplayed");
			return false;
		}); 
    }; 
    
    this.isRemoveButtonDisplayed=function(){
        return _removebutton.isDisplayed().then(function(result){
			return result;
		},
		function(error){
			console.log("Error in isRemoveButtonDisplayed");
			return false;
		});  
    }; 
    
    this.clickRemoveButtonForFirstItem=function(){
        _removebutton.click(); 
    };
    
    this.isConfirmationModalWindowDisplayed=function(){

		return element(by.xpath('//div[@name="txtInfoDialog"]')).isPresent().then(function(result){
			return result;
		},
		function(error){
			console.log("Error in isConfirmationModalWindowDisplayed");
			return false;
		}); 

    }; 
	
	this.isConfirmationMessageDisplayed=function(){
		return element(by.xpath('//*[@class="modal-confirm-message ng-scope ng-binding"]')).isPresent();
	}
    this.getConfirmationMessage=function(value){
    	return _confmmsg.getText(); 
    }; 
    
    this.clickCancelButton=function(){
        _cancelbutton.click(); 
    };
    
    this.clickYesButton=function(){
        _clickyesbutton.click(); 
    };


	this.importFilePDF=function(absolutePath){
		_isdisplayimportpdf.isPresent().then(function(present){
			$('input[uploader="originalText.uploader"]').sendKeys(absolutePath);
		});
	};
	
	/*
	 * Checks if the file is displayed in the list of Original Text upload 
	 */
	this.isFileAddedForUploadingOriginalText = function(fileName) {
		return element(by.cssContainingText('.ng-scope.row.originalText-list',fileName)).isPresent().then(function(displayed){
			return displayed;
		},
		function(error){
			console.log("Error in isFileAddedForUploadingOriginalText");
			return false;
		}); 
	};
	
	/*
	 * Clicks on red button displayed in the list of Original Text upload 
	 */
	this.clickRedDeleteButtonForUploadingItem = function(fileName) {
		element(by.cssContainingText('.ng-scope.row.originalText-list',fileName)).isDisplayed().then(function(displayed){
			var rowElement =element(by.cssContainingText('.ng-scope.row.originalText-list',fileName));
			rowElement.all(protractor.By.css('[ng-click="originalText.itemRemove(item)"]')).get(0).click().then(function(result) {
			},
			function(error){
				console.log("Error in clickRedDeleteButtonForUploadingItem");
			});
		},
		function(error){
			console.log("Error in clickRedDeleteButtonForUploadingItem");
		}); 
	};
	
	/*
	 * Clicks on green button displayed in the list of Original Text upload 
	 */
	this.clickGreenUploadButtonForUploadingItem = function(fileName) {
		element(by.cssContainingText('.ng-scope.row.originalText-list',fileName)).isDisplayed().then(function(displayed){
			var rowElement =element(by.cssContainingText('.ng-scope.row.originalText-list',fileName));
			rowElement.all(protractor.By.css('[ng-click="item.upload()"]')).get(0).click().then(function(result) {
			},
			function(error){
				console.log("Error in clickGreenUploadButtonForUploadingItem");
			});
		},
		function(error){
			console.log("Error in clickGreenUploadButtonForUploadingItem");
		}); 
	};
      
	/*
	 * Checks if language field displayed for the item in the list of Original Text upload 
	 */
	this.isLanguageDisplayedForUploadingItem = function(fileName) {
		return element(by.cssContainingText('.ng-scope.row.originalText-list',fileName)).isDisplayed().then(function(displayed){
			var rowElement =element(by.cssContainingText('.ng-scope.row.originalText-list',fileName));
			return rowElement.all(protractor.By.css('[ng-change="originalText.changeLang()"]')).get(0).isDisplayed().then(function(result) {
				return result;
			},
			function(error){
				console.log("Error in isLanguageDisplayedForUploadingItem");
				return false;
			});
		},
		function(error){
			console.log("Error in isLanguageDisplayedForUploadingItem");
			return false;
		}); 
	};
	
	/*
	 * Clicks on remove pdf button 
	 */
	this.clickRemoveButtonForFirstPDF = function() {
		_removebutton.click().then(function(result){
			
		},
		function(error){
			console.log("Error in clickRemoveButtonForFirstPDF");
		}); 
	};
      
};

module.exports = new originaltextpage();