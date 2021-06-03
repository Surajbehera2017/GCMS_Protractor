var LegislationDocumentDisplayPage = function () {

	var _addButton= element.all(by.css('#btnAddfixSection')).get(1);
	var _copyButton=element(by.css('#panel-fixed-minified #btnCopyfixSection'));
	var _copyButtonOnCopyDocPopup= element(by.css('button[translate="Common.Copy"]'));
	var _editButton= element.all(by.id('btnGoToEditMode')).get(1); 
	var _deleteButton= element.all(by.id('btnDeletefixSection')).get(1);
	var _gobackButton=element.all(by.id('btnGoBack')).get(1);
	var _confirmDeleteButton=element(by.css('button[name="btnConfirmationDialogAccept"]'));
	var _cancelDeleteButton= element(by.css('[name="btnConfirmationDialogCancel"]'));
	var _cancelDeleteExportButton=element(by.xpath('.//*[@id="body"]/div[2]/div/div/form/div[4]/button[1]')); 
	var _closeDeleteConfirmationButton=element(by.css('button[ng-click="cancel()"]'));
	var _printButton= element(by.xpath('//div[@class="col-md-10"]//*[@id="btnPrintfixSection"]'));    
	var _exportButton=element.all(by.id('btnExportfixSection')).get(1);  
	var _languageSelect=element(by.id('document-lenguage-combo'));
	var _navigationInput=element.all(by.id('textNavigationNumberfixSection')).get(1); 
	var _navigationButton= element(by.id('document-header-paged-btn'));
	var _firstDocumentButton=element.all(by.id('btnfirstNavigationfixSection')).get(1); 
	var _previousDocumentButton= element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="btnPreviusNavigationfixSection"]')); 
	var _nextDocumentButton= element.all(by.id('btnNextNavigationfixSection')).get(1); 
	var _lastDocumentButton=element.all(by.id('btnLastNavigationfixSection')).get(1);
	var _blockandunlockstaus=element.all(by.xpath('//*[@ng-model="blockDocCtrl.lockStatus"]')).get(1); 
	var _contentToggleBlock= element.all(by.xpath('.//*[@id="contentToggleBlock"]/div/div')).get(1);
	var _unlockpad=element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="contentToggleBlock"]/i[2]')); 
	var _lockpad=element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="contentToggleBlock"]/i[1]'));
	var _lockpadButton=element(by.xpath('.//*[@id="contentToggleBlock"]/div'));    
	var _popupOkButton=element(by.css('button[ng-bind="primaryOption | translate"]')); 
	var _acceptOkButton=element(by.css('button[ng-bind="acceptOption | translate "]')); 
	var _popupColseButton=element(by.css('button[ng-bind="defaultOption | translate"]'));
	var _printoption=element(by.xpath('//td[@align="center"]//*[@class="buttonInform"]'));
	var _gobackButton=element(by.id('btnGoBack'));	
	var _subMessage= element(by.id ('successMessage')); 
	var _code=element(by.model('inputLabel'));
	var _calculatebutton=element(by.id('validation-id'));
	var _add=element(by.css('button[translate="Common.Add"]'));
	var _addpopup=element(by.xpath('//div[@class="modal-footer btn-import"]//*[@class="btn btn-primary btn-medium ng-scope"]'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	var _expandCollapseButton= element(by.id('collapse-all')); 	
    var _collapseImage=element(by.id('collapse-all-collapsed-link'));
	var _displayMessage=element(by.css('[class="tab-pane ng-scope active"] .header.ng-scope')); 
	var	_displayMessageNew= element(by.xpath('//div[@class="right-tab-content ng-scope"]//*[@class="rightpanel-notext ng-scope"]'));
	var _reporttitle=element(by.css('td[class="ContentHeader"]'));
	var _printinputfrom=element(by.css('#parametros_desde'));
	var _printinputto=element(by.css('#parametros_hasta'));
	var _printchecklist=element.all(by.css('.buttonInform')).get(0);
	
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

	this.get=function (docId) {
		return browser.get('static/gcms-ui/index.html#/document?docId=' + docId);
	};

	this.sections = {};

	this.title=function() {
		return browser.getTitle();
	};

	this.enterPrintFromInput=function(value){
		return _printinputfrom.sendKeys(value);
	};

	this.enterPrintToInput=function(value){
		return _printinputto.sendKeys(value);
	};

	this.selectPrintOptions=function(){
		return _printchecklist.click();
	};

	this.getReportTitle=function() {
		return _reporttitle.getText();
	};
	
	this.subMessage=function(){
		return _subMessage.getText();
	};
		
		this.displayMessageNew=function () {
				return _displayMessageNew.getInnerHtml();
		};
	
		this.displayMessage=function () {
				return _displayMessage.getText();
		};
		
		this.displayMessagee=function (expmessage) {
			return _displayMessage.getText().then(function(actualmessage){
				console.log(actualmessage);
				console.log(expmessage);
				if(expmessage.includes(actualmessage))
				{
					return true;
				}else{
					return false;
				}
			});
	};

	this.isExpanded= function () {
		browser.executeScript("arguments[0].scrollIntoView();", _collapseImage.getWebElement());
			return _collapseImage.isDisplayed();
	};

	this.expandFixedSection=function() {
		browser.actions().mouseMove(element(by.css('#title-fix-section-minified>[ng-bind="documentheader.documentDetail | translate"]'))).perform();
	}

	this.isFixedSectionExpanded= function () {
		var _ele=element(by.css('#document-publication>span'));
		browser.executeScript("arguments[0].scrollIntoView();", _ele.getWebElement());
			return _ele.isDisplayed();
	};
	this.collapseFixedSection=function() {
		browser.actions().mouseMove(_expandCollapseButton).perform();
	}

	this.expandAll=function () {
			
			return isExpanded.then(function (isExpanded) {
				if (!isExpanded)
					return _expandCollapseButton.click();
			})
			};

	this.collapseAll=function () {
		
			return isExpanded.then(function (isExpanded) {
				if (isExpanded)
					return _expandCollapseButton.click();
			})
		};

		
	this.marginal=function() {
		return element(by.binding('documentheader.documentation.data.document.marginal.numeroMarginal')).getAttribute('textContent').then(function(text) {
			return text;
	
		});
	};

	this.range=function() {
			return element(by.binding('documentheader.documentation.data.document.rangos.list[0].rango.description')).getAttribute('textContent').then(function(text) {
			return text;
	
		});
	};

	this.docnum =function() {
			return element(by.binding('documentheader.documentation.data.document.rangos.list[0].numeros.list[0].numdn')).getAttribute('textContent').then(function(text) {
			return text;
	
		});
	};

	this.lawarea=function() {
		return element(by.binding('documentheader.documentation.findAreaPracticeMain()')).getAttribute('textContent').then(function(text) {
		return text;
		});
	};

	this.splitdisplay =function() {
		return element(by.css('#content-document div div div')).getText();
	} ;                                      

	this.abstract=function(){
		return element(by.binding('documentheader.abstractHeader | plaintext')).getText();
	} ;     

	this.text=function(){
		return element(by.id('previewDoc')).getText();
	};

	this.hasAddButton=function(){
		return _addButton.isDisplayed();
	};

	this.getAddButton=function() {
		return  _addButton;
	};

	this.isAddButtonEnabled= function () { 
		return _addButton.getAttribute('disabled').then(function (disabled) {
			return disabled == null; 
		});
	};

	this.clickAddButton=function(){
		return browser.executeScript('return document.getElementById(\'btnAddfixSection\').click();','');
	};

	this.hasCopyButton=function() {
		return _copyButton.isDisplayed();
	} ;

	this.isCopyButtonEnabled=function() {
		return _copyButton.getAttribute('disabled').then(function (disabled) {
			return disabled == null;
		});
	};

	this.clickCopyButton=function() {
		//return browser.executeScript('return document.getElementById(\'btnCopyfixSection\').click();',''); 
		return  _copyButton.click();
	};

	this.getCopyButton=function() {
		return  _copyButton;
	};

	this.isCopyButtonDisplayed=function() {
		return  _copyButton.isDisplayed().then(function(result){
			return result;
		},function(error){
			return false;
		});
	};

	this.clickCopyOnCopyDocPopup=function() {
		return _copyButtonOnCopyDocPopup.click();
	};

	this.hasEditButton=function(){
		return _editButton.isDisplayed();
	};

	this.isEditButtonEnabled=function(){
		return _editButton.getAttribute('disabled').then(function (disabled) {
			return disabled == null; 
		});
	};

	this.clickEditButton=function() {
		return _editButton.click();
	};

	this.hasDeleteButton=function() {
		return  _deleteButton.isDisplayed().then(function(result){
			return result;
		},function(error){
			return false;
		});
	};

	this.isDeleteButtonEnabled=function() {
		return _deleteButton.getAttribute('disabled').then(function (disabled) { 
			return disabled == null;
		});
	} ;

	this.clickDeleteButton=function(){
		return element(by.xpath('//div[@class="col-md-10"]//*[@id="btnDeletefixSection"]')).click();
	};

	this.hasbackButton=function(){
		return _gobackButton.isDisplayed();
	};

	this.clickgobackButton=function(){
		return _gobackButton.click();
	};

	this.hasDeleteModal=function(){
		return _confirmDeleteButton.isPresent();
	};

	this.clickConfirmDeleteButton=function(){
		return _confirmDeleteButton.click();
	};

	this.clickCancelDeleteButton=function(){
		return _cancelDeleteButton.click();
	};

	this.clickCancelDeleteExportButton=function(){
		return _cancelDeleteExportButton.click();
	};

	this.clickCloseDeleteConfirmationButton=function(){
		return _closeDeleteConfirmationButton.click();
	};

	this.hasPrintButton=function(){
		return _printButton.isDisplayed();
	};

	this.isPrintButtonEnabled=function(){
		return _printButton.getAttribute('disabled').then(function (disabled) { 
			return disabled == null;
		});
	};

	this.clickPrintButton=function(){
		return _printButton.click();
	};

	this.hasExportButton=function(){
		return _exportButton.isPresent();
	};

	this.isExportButtonEnabled= function () { 
		return _exportButton.getAttribute('disabled').then(function (disabled) {
			return disabled == null;
		}); 
	};

	this.clickExportButton=function(){
		return _exportButton.click();
	};

	this.package=function(){
		return element(by.model('packagingSubType')).getText();
	};

	this.hasLanguageSelect=function(){
		return _languageSelect.isDisplayed();
	};

	this.hasLanguageOption=function(){
		return false;
	};

	/*languageOption: {
		this.get= function () {
            return false;
        }, // TODO
		this.set= function (value) {
            return false;
        } // TODO
	};*/

	this.hasNavigationInput=function(){
		return _navigationInput.isDisplayed();
	};

	this.isNavigationInputEnabled=function(){
		return _navigationInput.getAttribute('disabled').then(function (disabled) { 
			return disabled == null;
		}); 
	};

	this.navigationInput =function () {
		return _navigationInput.getText();
	},
	this.set=function (value) {
		return _navigationInput.sendKeys(value);
	};

	this.hasFirstDocumentButton= function () {
		return _firstDocumentButton.isDisplayed();
	};

	this.isFirstDocumentButtonEnabled= function () {
		return !browser.executeScript('return arguments[0].hasAttribute("disabled");',_firstDocumentButton);
	};

	this.clickFirstDocumentButton= function () {
		return _firstDocumentButton.click();
	};

	this.hasPreviousDocumentButton=function(){
		return _previousDocumentButton.isDisplayed();
	};

	this.isPreviousDocumentButtonEnabled=function () { 
		return !browser.executeScript('return arguments[0].hasAttribute("disabled");',_previousDocumentButton);
	};

	this.clickPreviousDocumentButton= function () {
		return _previousDocumentButton.click();
	};


	this.hasNextDocumentButton=function () {
		return _nextDocumentButton.isDisplayed(); 
	};

	this.isNextDocumentButtonEnabled= function () {
		return !browser.executeScript('return arguments[0].hasAttribute("disabled");',_nextDocumentButton);
	};

	this.clickNextDocumentButton= function () {
		return _nextDocumentButton.click();
	};

	this.hasLastDocumentButton= function () {
		return _lastDocumentButton.isDisplayed(); 
	};

	this.isLastDocumentButtonEnabled= function () { 
		return !browser.executeScript('return arguments[0].hasAttribute("disabled");',_lastDocumentButton);
	};

	this.clickLastDocumentButton= function () {
		return _lastDocumentButton.click();
	};

	this.isAddButtonDisabled= function () {
		return _addButton.getAttribute('disabled').then(function (disabled) { 
			return disabled == true; });
	};

	this.hasblockandunlockstaus= function () {
		return _blockandunlockstaus.isDisplayed();
	};

	this.clickblockandunlockstaus=function () {
		return _blockandunlockstaus.click(); 
	};

	this.clickcontentToggleBlock= function () {
		return _contentToggleBlock.click();
	};

	this.hasunlockpad= function () {
		return _unlockpad.isDisplayed();
	}

	this.haslockpad=function () {
		return _lockpad.isDisplayed();
	}

	this.clickLockpad=function () {
		return _lockpadButton.click(); 
	};

	this.haspopupOkButton=function () {
		return _lockpad.isDisplayed();
	};

	this.clickpopupOkButton= function () {
		return _popupOkButton.click();
	};

	this.hasAcceptOkButton=function () {
		return _acceptOkButton.isPresent();
	};

	this.clickacceptOkButton=function () {
		return _acceptOkButton.click();
	};

	this.haspopupColseButton=function () {
		return _popupColseButton.isPresent(); 
	};

	this.clickpopupColseButton=function () {
		return _popupColseButton.click();
	};

	this.clickPrintOption=function () {
		return _printoption.click();
	};

	//added by punit joshi 24/05/2016

	this.selectcode=function(code){
		return _code.click().then(function () {
			return _code.sendKeys(code).then(function(){
				return element(by.cssContainingText('li[ng-click="onItemClick($index)"]>span',code)).click();
			});
		});
	};


	this.legistypevalue=function (code){
		return element.all(by.css('li[ng-click="onItemClick($index)"]>span')).filter(function(elem, index){
			return browser.executeScript('return arguments[0].innerHTML;',elem.getWebElement()).then(function(txt){
				return (txt<code?false:(txt>code?false:true));
			});

		}).first();
	};


	this.clickcalculate =function (){
		return _calculatebutton.click();
	};

	this.clickadd=function (){
		return _add.click();
	};


	this.clickaddpopup=function (){
		return _addpopup.click();
	};

	this.errorMessageCopyDoc=function (){
		return element(by.css('[ng-bind="messageError"]')).getText();
	};

	this.enterNumberOnCopyDocPopup=function (){
		return element(by.css('[ng-model="model.number"]')).sendKeys('3');
	};

	this.clickCancelOnCopydocPopup=function (){
		return element(by.css('[translate="Common.Cancel"]')).click();
	};

	this.isCancelOnAddDocPopupDisplayed=function (){
		return element(by.css('[translate="Common.Cancel"]')).isDisplayed();
	};

	this.isPopUpDisplayed=function (){
		return element(by.id('contentFormAdDocument')).isDisplayed().then(function(result){
			return result;
		},function(error){
			return false;
		});
	};

	this.isPopupNotDisplayed=function (){
		return browser.executeScript('return document.getElementById(\'contentFormAdDocument\')===null;','');
	};

	this.clickOnOkDeleteNotPossible=function (){
		return element(by.css('[name="btnInfoDialogOk"]')).click();
	};

	this.errorMsgOnDeletingDocumentHavingRelationships=function (){
		return element(by.css('[name="txtInfoDialog"]')).getText();
	};

	this.isMarginalNumberDisplayed=function (){
		return element(by.css('[id="addDocumentFile"]>div>select')).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			return false;
		}); 
	};

	this.isImportDisplayed=function (){
		return element(by.css('[translate="AddNewDocument.import"]')).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			return false;
		}); 
	};

	this.isMarginalNumberEnabled=function (){
		return element(by.css('[id="addDocumentFile"]>div>select')).isEnabled().then(function(present){
			return present;
		},
		function(error){
			return false;
		}); 
	};

	this.isImportEnabled=function (){
		return element(by.css('[translate="AddNewDocument.import"]')).isEnabled().then(function(present){
			return present;
		},
		function(error){
			return false;
		}); 
	};

	this.isPopupDisplayed=function (){
		return element(by.css('[class="modal-header header-import"]')).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			return false;
		}); 
	};

	this.enterYear=function (year){
		return element(by.css('[id="year"]')).clear().then(function(){
			return element(by.css('[id="year"]')).sendKeys(year);
		});
	};

	this.getNumber=function (){
		return element(by.css('[ng-model="model.number"]')).getAttribute('value').then(function(number){
			return parseInt(number);//return as integer
		});
	};

	this.enterNumber=function (no){
		return element(by.css('[ng-model="model.number"]')).clear().then(function(){
			return element(by.css('[ng-model="model.number"]')).sendKeys(no);
		});
	};

	this.getMarginalNumber=function (){
		return element.all(by.css('[ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).get(1).getText();
	};

	this.getMarginalNumber2=function (){
		return element.all(by.css('[ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).get(2).getText();
	};

	this.enterText=function (){
		return element(by.css('[ng-model="model.text"]')).clear().then(function(){
			return element(by.css('[ng-model="model.text"]')).sendKeys('Test');
		});
	};

	this.enterGivenText=function (text){
		return element(by.css('[ng-model="model.text"]')).clear().then(function(){
			return element(by.css('[ng-model="model.text"]')).sendKeys(text);
		});
	};

	this.getErrorMsg=function (){
		return element.all(by.css('[class="toast-message"]')).get(0).getText();
	};

	this.getErrorMsg1=function (){
		return element.all(by.css('[class="toast-message"]')).get(2).getText();
	};

	this.getErrorMsg2=function (){
		return element.all(by.css('[class="toast-message"]')).get(1).getText();
	};

	this.selectLanguage=function (){
		return element.all(by.css('[class="dropdown-icon user-menu"]')).get(1).click().then(function(){
			return element(by.css('[ng-click="menu.changeLanguage(\'es\')"]')).click();
		});
	};
};
module.exports = new LegislationDocumentDisplayPage;