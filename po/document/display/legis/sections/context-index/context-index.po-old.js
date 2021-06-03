var contextindexpage = function() {

	var _searchDelete = element(by.css('[ng-click="deleteSelected()"]'));
	var _cancelButton = element(by.css('[ng-click="cancel()"]'));
	var _selectItem = element.all(by.model('$item.selected')).get(0);
	var _deleteSelectedContextIndex = element.all(by.css('[ng-click="deleteContextIndex($item.idFicha)"]')).get(0); 
	var _AddButton = element(by.css('button[id="context.index.summarization.add"]'));
	var _selectUnitvalue = element.all(by.css('#panelContainer-ci #panel1 div tree-dnd table tbody tr td div div')).get(1);
	var _AddUnitButton = element(by.css('[ng-click="FatherController.newSubItem(node)"]'));
	var _selectContextIndex= element.all(by.css('select[ng-model="ContextIndexAddModalCtrl.selectedContextIndexType"]')).get(0);
	var _ContextindexHierarchy= element.all(by.css('li[ng-repeat="node in node.items.list"]')).get(0);
	//var _subContextindexHierarchy= element(by.css('#hierarchyNode138188890'));
	var _subContextindexHierarchy= element.all(by.css('.termsCheckbox.ng-pristine.ng-valid')).get(1);
	var _contextindextermcheckBox= element.all(by.css('[ng-model="term.selected"]')).get(0);
	var _InternalNote= element(by.id('internalNoteTextArea'));
	var _codexsystematicIndexcomboBox= element.all(by.css('[ng-model="ContextIndexAddModalCtrl.selectedSystematicIndex"]')).get(0);
	var _saveButton = element(by.css('[ng-click="ContextIndexAddModalCtrl.addContextIndexEntry()"]'));
	var _okButton = element(by.css('button[name="btnInfoDialogOk"]'));
	var _lensImage= element.all(by.css('img[ng-src="content/image/viewdetail-icon.png"]')).get(0);
	var _deleteImage = element.all(by.css('a[ng-click="deleteContextIndex($item.idFicha)"]')).get(0);
	var _searchViewAllLink = element(by.id('contextIndexViewAllLink')); 
	var  _ContextindexHierarchyEdit= element.all(by.css('[ng-if="!node.isIncompleteList"]')).get(1);
	var _subContextindexHierarchyEdit= element(by.css('#hierarchyNode138188890'));
	var _allSelectCheckBoxes = element.all(by.model('$item.selected'));
	var _firstContextTypeValue = element(by.css('[name="R1_C2"]'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	
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

	this.clickViewAllLink= function() {
		browser.executeScript("arguments[0].click();", _searchViewAllLink.getWebElement());
		//_searchViewAllLink.click(); 
	};

	this.isViewAllLinkVisible= function() {
		return _searchViewAllLink.isPresent(); 
	};

	this.isSuggestionsDisplayed= function() {
		element(by.css('div:nth-of-type(1006)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(9)>div:nth-of-type(1)>div:nth-of-type(9)>div:nth-of-type(1)>div:nth-of-type(1)')).isPresent();
	};

	this.clickShowFilters= function() {
		//element.all(by.css('[class="btn btn-default btn-header ng-scope ng-binding"]')).click(); 
		var locator = element.all(by.css('[class="btn btn-default btn-header ng-scope ng-binding"]')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendContextType = function() {
		element(by.id('typeName')).clear();
		element(by.id('typeName')).sendKeys("TOPICS");
	};

	this.writeContextType = function(data) {
		element(by.id('typeName')).clear();
		element(by.id('typeName')).sendKeys(data);
	};

	this.enterContextType= function(){
		element(by.id('typeName')).sendKeys(protractor.Key.ENTER);
	};

	this.getCountOfRowsDisplayedInTable = function() {
		return _allSelectCheckBoxes.count().then(function(count){
			return parseInt(count);
		},
		function(error){
			return 0;
		});
	};

	this.getFirstContextType = function() {
		return _firstContextTypeValue.getText();
	};

	this.clickBlankField= function(){
		//element(by.css('div[name="R1_C3"]')).click();
		var locator = element(by.css('div[name="R1_C3"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickTableCheckBoxFirst= function(){
		//element.all(by.css('[ng-model="$item.selected"]')).get(0).click();
		var locator = element.all(by.css('[ng-model="$item.selected"]')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickTableCheckBoxSecond= function(){
		//element.all(by.css('[ng-model="$item.selected"]')).get(1).click();
		var locator = element.all(by.css('[ng-model="$item.selected"]')).get(1);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickBlankField= function(){
		//element(by.css('div[name="R1_C3"]')).click();
		var locator = element(by.css('div[name="R1_C3"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickCopyButton= function(){
		var locator = element.all(by.css('.col-md-2.name-icon-copy-table.table-icons>img')).get(0);
		browser.executeScript("arguments[0].click();",locator.getWebElement());
	};

	this.clickonUnitDropdown= function() {
		//element(by.css('.dropdown-toggle.nav-a')).click();  
		var locator = element(by.css('.dropdown-toggle.nav-a'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendNewUnitContextIndex = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.2');

	};

	this.clickSearchUnit= function() {
		//element(by.xpath('.//*[@id="panel1"]/div[2]/dynamic-dropdown/div/div/div/div/ul/li[1]/div/span/button')).click(); 
		var locator = element(by.xpath('.//*[@id="panel1"]/div[2]/dynamic-dropdown/div/div/div/div/ul/li[1]/div/span/button'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickAddUnit1=function() {
		//element.all(by.css('[ng-click="FatherController.newSubItem(node)"]')).get(0).click();
		var locator =element.all(by.css('[ng-click="FatherController.newSubItem(node)"]')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickCancelButton= function() {
		//element(by.id('btnCloseAdd')).click();  
		var locator = element(by.id('btnCloseAdd'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.closeViewAll= function(){
		//element(by.css('.btn.btn-thesaurus-table.bento-icon-close-x')).click();
		var locator = element(by.css('[ng-click="close()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickAllCheckBox= function(){
		//element(by.css('.wj-cell.wj-header.multi-select>input')).click();
		var locator = element(by.css('.wj-cell.wj-header.multi-select>input'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isDeleteButtonEnabledViewAll= function(){
		return element(by.css('[ng-click="deleteSelected()"]')).isEnabled();
	};

	this.getDeleteBtnAttribute= function(deleteBtnStatus){
		return element(by.xpath('.//a[@ng-click="deleteSelected()"]')).getAttribute(deleteBtnStatus);
	};

	this.clickNextPage= function(){
		//element(by.css('[ng-click="next()"]')).click();
		var locator = element(by.css('[ng-click="next()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickPreviousPage= function(){
		//element(by.css('[ng-click="previous()"]')).click();
		var locator = element(by.css('[ng-click="previous()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isContextIndexTypePresent= function(){
		return element(by.css('div[name="R1_C2"]')).isDisplayed();
	};

	this.clickLensButton= function(){
		//element.all(by.css('.col-md-2.name-icon-view-table.table-icons>img')).get(0).click();
		var locator = element.all(by.css('.col-md-2.name-icon-view-table.table-icons>img')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isLensButtonPresent= function() {
		return	element(by.css('.col-md-2.name-icon-view-table.table-icons>img')).isDisplayed(); 
	};

	this.isLensContentPresent= function() {
		var lenscontentdetails=element.all(by.css('.col-md-8.padding-left-40')).get(0);
		return  lenscontentdetails.isDisplayed();
	};

	this.clickHierarchyFolder1= function(){
		//element(by.id('hierarchyNode105965588')).click();
		var locator = element(by.id('hierarchyNode105965588'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	/*
	This method clicks on the sub folder of the context index hierarchy 
	*/
	this.clickHierarchyFolder2= function(){
		//element.all(by.id('hierarchyNode105965669')).click();
		var locator = element.all(by.id('hierarchyNode105965669')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isHierarchyFolder2= function(){
		return element.all(by.css('[ng-if="!node.isIncompleteList"]')).get(2).isPresent();
	};

	this.clickCheckBoxinTerm= function(i){
		//element.all(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]')).get(i).click();
		var locator = element.all(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]')).get(i);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickRadioButtonTerm= function(){
		//element(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]')).click();
		var locator = element(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isRadioButtonTermDisplayed= function(){
		return element(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]')).isPresent().then(function(present)
		{
		  return present;	
		},
		function(error){
			return false;
		});
	};
	

	this.sendInternalNotesContext = function() {
		element(by.id('internalNoteTextArea')).clear();
		element(by.id('internalNoteTextArea')).sendKeys('This is for Testing');

	};

	this.isCodexSystematicIndexPresent= function(){
		element(by.css('.select-element-full.ng-pristine.ng-valid')).isPresent();
	};

	this.clickSaveButton= function(){
		//element(by.id('btnSaveAdd')).click();
		var locator = element(by.id('btnSaveAdd'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendContextTypeJournal = function() {
		element(by.id('typeName')).clear();
		element(by.id('typeName')).sendKeys("JOURNAL");
	};

	this.sendContextTypeOther = function() {
		element(by.id('typeName')).clear();
		element(by.id('typeName')).sendKeys("OTHER");
		
	};

	/*
	This method retrives the analyst information like analyst name, analysis date, internal note
	Method takes the index number to identify whiich information to be retrived.
	*/
	this.getAnalystInfo= function(i){
		return element.all(by.css('.left.ng-scope.ng-binding')).get(i).getText().then(function(text) {
		return text.trim();
		});

	};

	this.isStringEmpty = function isEmpty(value) {
		return (!value || 0 === value.length);
	};

	
	this.clickDeleteinViewTable= function(){
		//element(by.css('.col-md-2.name-icon-delete-table.table-icons>img')).click();
		var locator = element(by.css('.col-md-2.name-icon-delete-table.table-icons>img'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};
//click on yes button on delete confirmation pop up
	this.clickYesButton= function(){
		//element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding')).click();
		var locator =element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickAddButtonViewTable= function(){
		//element(by.css('[ng-click="addContextIndex()"]')).click();
		var locator = element(by.css('[ng-click="addContextIndex()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendNewUnitContextIndexA8 = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.8');

	};

	this.clickHierarchyFolderOne= function(){
		//element.all(by.css('[ng-if="!node.isIncompleteList"]')).get(1).click();
		var locator =element.all(by.css('[ng-if="!node.isIncompleteList"]')).get(1);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendContextTypeOthers = function() {
		element(by.id('typeName')).clear();
		element(by.id('typeName')).sendKeys("OTHER");
	};

	this.clickEditButton= function(){
		var el = element.all(by.css('.col-md-2.name-icon-edit-table.table-icons>img')).get(0);
		browser.executeScript("arguments[0].click();", el.getWebElement());
	};

	this.sendNewUnitContextIndexA5 = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.5');

	};


	this.clickDeleteOldUnit= function(){
		//element.all(by.css('.color-blue.pointer')).get(0).click();
		var locator = element.all(by.css('.color-blue.pointer')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickOKPopup= function(){
		//element(by.css('.btn.btn-primary.ng-scope')).click();
		var locator = element(by.css('.btn.btn-primary.ng-scope'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isPresentOKPopup= function(){
		return element(by.css('.btn.btn-primary.ng-scope')).isPresent().then(function(present){
			return present;
		},
		function(error){
			return false;
		});
	};

	this.sendUnitViewTable = function() {
		element(by.css('#unitName')).clear();
		element(by.css('#unitName')).sendKeys('A.5');

	};

	this.enterUnitName= function(){
		element(by.css('#unitName')).sendKeys(protractor.Key.ENTER);
	};

	this.clickCancelButtonEdit= function(){
		//element(by.id('btnCloseAdd')).click();
		var locator = element(by.id('btnCloseAdd'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendUnitViewTableTITPR = function() {
		element(by.css('#unitName')).clear();
		element(by.css('#unitName')).sendKeys('TIT.PR');

	};

	this.enterUnitNameTITPR= function(){
		element(by.css('#unitName')).sendKeys(protractor.Key.ENTER);
	};

	this.clickDeleteButtonViewAll= function(){
		//element(by.css('div[name="R1_C4"]>div:nth-of-type(1)>div>a:nth-of-type(3)>img')).click();
		var locator = element(by.css('div[name="R1_C4"]>div:nth-of-type(1)>div>a:nth-of-type(3)>img'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickCancelButtonDelete= function(){
		//element(by.css('[ng-click="cancel()"]')).click();
		var locator = element(by.css('[ng-click="cancel()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isCancelButtonDelete= function(){
		element(by.css('[ng-click="cancel()"]')).isPresent();
	};

	this.expandContextIndex= function(){
		//element(by.id('collapsed-context-index-link')).click();
		var locator = element(by.id('collapsed-context-index-link'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	/* The above 2 method needs to be deleted once the references are updated with below method */
	this.clickByTypeLinkToExpand= function(i){
		//element.all(by.css('[ng-click="contextIndexSumData.viewContextIndexDetailType(1, ci.name)"]')).get(i).click();
		var locator = element.all(by.css('[ng-click="contextIndexSumData.viewContextIndexDetailType(1, ci.name)"]')).get(i);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.clickDeleteButtonViewAllTop= function(){
		//element(by.css('[ng-click="deleteSelected()"]')).click();
		var locator = element(by.css('[ng-click="deleteSelected()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};
	this.clickDeleteButton= function(){
		//element.all(by.css('.col-md-2.name-icon-delete-table.table-icons>img')).get(0).click();
		var locator = element.all(by.css('.col-md-2.name-icon-delete-table.table-icons>img')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};
	this.clickDeletePopupYes= function(){
		//element(by.css('[ng-click="ok()"]')).click();
		var locator = element(by.css('[ng-click="ok()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.collapseContextIndex= function(){
		//element(by.id('non-collapsed-context-index-link')).click();
		var locator = element(by.id('non-collapsed-context-index-link'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendNewUnitContextIndexRB = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('RB');

	};

	this.sendNewUnitContextIndexA2 = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.2');

	};

	this.isHashtagPresent= function(){
		return	element(by.css('a[name="level"]>span')).isDisplayed();
	};

	this.clickHashtagPresent= function(){
		//element(by.css('a[name="level"]>span')).click();
		var locator = element(by.css('a[name="level"]>span'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isHashtagPopupPresent= function(){
		element(by.css('[ng-if="FatherController.popoverShown"]')).isPresent();
	};

	this.clickVersionDropdowninHashtag= function(){
		//element(by.css('[ng-click="FatherController.getUnitVersions(node)"]')).click();
		var locator = element(by.css('[ng-click="FatherController.getUnitVersions(node)"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.selectOriginalVersion= function(){
	 //	element(by.css('[ng-click="node.unidadDTO.date = version.value"]')).click();
	 var locator = element(by.css('[ng-click="node.unidadDTO.date = version.value"]'));
	 browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendLevelinVersion = function() {
		element(by.css('[ng-model="node.level"]')).clear();
		element(by.css('[ng-model="node.level"]')).sendKeys('Level New');

	};

	this.clickTratadoFolder= function(){
		//element(by.id('hierarchyNode91585552')).click();
		var locator = element(by.id('hierarchyNode91585552'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.sendInternalNotesContextNota = function() {
		element(by.id('internalNoteTextArea')).clear();
		element(by.id('internalNoteTextArea')).sendKeys('Internal Note');

	};

	this.isByTypeHeaderPresent= function(){
		var typeheader= element.all(by.css('.detail-value-no-height.contextIndexType.ng-binding')).get(0);
		return typeheader.isDisplayed();
	};

	this.isByContextIndexHeaderPresent= function(){
		var contextindexheader=	element.all(by.css('.detail-value-no-height.contextIndexType.ng-binding')).get(1);
		return contextindexheader.isDisplayed();
	};

	this.getTextByTypeHeader= function(){
		return	element.all(by.css('.detail-value-no-height.contextIndexType.ng-binding')).get(0).getText();
	};

	this.getTextByContextHeader= function(){
	return 	element.all(by.css('.detail-value-no-height.contextIndexType.ng-binding')).get(1).getText();
	};

	// code push upto

	this.isNextPageLinkPresent= function(){
	return 	element(by.css('[ng-click="next()"]')).isDisplayed();
	};

	this.isPreviousPageLinkPresent= function(){
		return 	element(by.css('[ng-click="previous()"]')).isDisplayed();
	};

	this.isDeleteEntryTextPresent= function(){
	return	element(by.css('.modal-confirm-message.ng-binding')).isDisplayed();
	};

	this.isTableCheckBoxFirstPresent= function(){
		return element.all(by.css('[ng-model="$item.selected"]')).get(0).isDisplayed();
	};

	this.isTermTabPresent= function(){
		return	element.all(by.css('[ng-click="select()"]')).get(1).isDisplayed();
	};

	this.clickTermTab= function(){
		//element.all(by.css('[ng-click="select()"]')).get(1).click();
		var locator =element.all(by.css('[ng-click="select()"]')).get(1);
		browser.executeScript("arguments[0].click();", locator.getWebElement());

	};

	this.sendTextTermBox = function() {
		element(by.id('search-term')).clear();
		element(by.id('search-term')).sendKeys("1");
	};

	this.enterTextTermBox= function(){
		element(by.id('search-term')).sendKeys(protractor.Key.ENTER);
	};

	this.isTermDetailPresent= function(){
		element(by.css('[ng-if="ContextIndexEditModalCtrl.isSearch"]')).isPresent();
	};

	this.isLastPaginationEnabled= function(){
		return element(by.css('[ng-click="last()"]')).isEnabled();
	};

	this.clickLastPaginationViewAll= function(){
		//element(by.css('[ng-click="last()"]')).click();
		var locator = element(by.css('[ng-click="last()"]'));
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.isCancelButtonPresent= function() {
		element(by.id('btnCloseAdd')).isPresent();  
	};

	this.isDeletePopupYesPresent= function(){
	return	element(by.css('[ng-click="ok()"]')).isDisplayed();
	};

	this.isSaveButtonPresent= function(){
		element(by.id('btnSaveAdd')).isPresent();
	};

	this.isDeleteButtonDisabled= function() {
		return _searchDelete.getAttribute('disabled').then(function (disabled) { 
			return disabled === 'true'; 
		},function(error){
			return false;
		});
	};

	this.clickSelectedItem= function() {
		//return _selectItem.click();
		browser.executeScript("arguments[0].click();",_selectItem.getWebElement());
	};

	this.isDeleteButtonEnable= function() {
		return _searchDelete.isEnabled();
	};

	this.clickDelete= function() {
		browser.executeScript("arguments[0].click();",_searchDelete.getWebElement());
	};

	this.deleteDisplay= function() {
		return _searchDelete.isDisplayed();
	};

	this.deleteSelectedContextIndex= function() {
		browser.executeScript("arguments[0].click();", _deleteSelectedContextIndex.getWebElement());
	};

	this.isPresentDeleteSelectedContextIndex= function() {
		return _deleteSelectedContextIndex.isPresent();
	};

	this.clickCancel= function() {
		//return _cancelButton.click();
		browser.executeScript("arguments[0].click();",_cancelButton.getWebElement());
	};

	this.isDisplayedCancelButton= function() {
		return _cancelButton.isPresent();
	};

	this.clickAddButton= function() {
		//return _AddButton.click();
		browser.executeScript("arguments[0].click();",_AddButton.getWebElement());
		
	};

	this.clickUnitValue= function() {
		//return _selectUnitvalue.click();
		browser.executeScript("arguments[0].click();",_selectUnitvalue.getWebElement());
	}; 

	this.clickUnitButton= function() {
		//return _AddUnitButton.click();
		browser.executeScript("arguments[0].click();",_AddUnitButton.getWebElement());
	};

	this.clickcontexindexcomBox= function() {
		//return _selectContextIndex.click();
		browser.executeScript("arguments[0].click();",_selectContextIndex.getWebElement());
	};

	this.selectContextIndex = function (positionNum) {
		if (positionNum) {
			browser.executeScript("arguments[0].click();",_selectContextIndex.getWebElement()).then(function(result){   
				//var options = 
				_selectContextIndex.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
	};

	this.clickContextindexHierarchyItem= function() {
	//	return _ContextindexHierarchy.click();
		browser.executeScript("arguments[0].click();",_ContextindexHierarchy.getWebElement());
	}; 

	this.clickSubContextindexHierarchyItem= function() {
		//return _subContextindexHierarchy.click();
		browser.executeScript("arguments[0].click();",_subContextindexHierarchy.getWebElement());
	};

	this.clickAllcontextindextermcheckBox= function() {
		//return _contextindextermcheckBox.click();
		browser.executeScript("arguments[0].click();",_contextindextermcheckBox.getWebElement());
	};

	this.EnterinternalNote= function(value) {
		return _InternalNote.sendKeys(value);
	};

	this.clickcodexsystematicIndexcomboBox= function() {
		//return _codexsystematicIndexcomboBox.click();
		browser.executeScript("arguments[0].click();",_codexsystematicIndexcomboBox.getWebElement());
	};

	this.selectcodexsystematicIndexcomboBox = function (positionNum) {
		if (positionNum) {
			
			_codexsystematicIndexcomboBox.click().then(function(result){   
				//var options = 
				_codexsystematicIndexcomboBox.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
	};

	this.clicksaveButton= function() {
		//return _saveButton.click();
		browser.executeScript("arguments[0].click();",_saveButton.getWebElement());
	};

	this.isSaveButtonDisplayed= function() {
		return _saveButton.isDisplayed().then(function(displayed){
			return displayed;
		},function(error){
			return false;
		});
	};

	this.clickokButton= function() {
		//return _okButton.click();
		browser.executeScript("arguments[0].click();",_okButton.getWebElement());
	};

	this.clickLensImage= function() {
		//return _lensImage.click();
		browser.executeScript("arguments[0].click();",_lensImage.getWebElement());

	};

	this.clickDeleteImage= function() {
		browser.executeScript("arguments[0].click();", _deleteImage.getWebElement());
	};

	this.ContextIndexTotal= function() {
		return _searchViewAllLink.getText().then(function (count) {
			return parseInt(count.replace("(", "").replace(")", ""));
		});
	};

	this.clickContextindexHierarchyEditItem= function() {
		//return _ContextindexHierarchyEdit.click();
		browser.executeScript("arguments[0].click();", _ContextindexHierarchyEdit.getWebElement());
	};

	this.clickSubContextindexHierarchyEditItem= function() {
		//return _subContextindexHierarchyEdit.click();
		browser.executeScript("arguments[0].click();", _subContextindexHierarchyEdit.getWebElement());
	};

	this.clickradioButton= function() {
		var locator = element.all(by.css('[ng-change="ContextIndexAddModalCtrl.selectTerm(term)"]')).get(0);
		browser.executeScript("arguments[0].click();", locator.getWebElement());
	};

	this.EnterValueinContextIndextermFeild = function(value) {
		element(by.css('#termName')).clear();
		element(by.css('#termName')).sendKeys(value);
		element(by.css('#termName')).sendKeys(protractor.Key.ENTER);

	};

	this.getAddButtonCaption= function() {
		return element(by.id('context.index.summarization.add')).getText();
	};

	this.getImportButtonCaption= function() {
		return element.all(by.css('[class="clicksDisabled btn-default btn-section btn-section-space ng-binding"]')).get(3).getText();
	};

	this.getCountOfRows = function () {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function(c){
			return c;
		});
	};

};

module.exports = new contextindexpage;