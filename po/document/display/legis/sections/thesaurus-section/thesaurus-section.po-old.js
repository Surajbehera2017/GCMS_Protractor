var thesauruspage = function() {

	var _errorMessage= element(by.id('txtPWNoEntries')); 
	var _listLinks= element.all(by.css('[ng-repeat="t in thesaurus.thesaurus"]')); 
	//var _viewAllLink= element(by.css('[ng-show="(thesaurus.thesaurus.length > 1)"]')); 
	//var _viewAllLink= element(by.css('[ng-controller="DocumentThesaurus as thesaurus"] [ng-click="thesaurus.viewThesaurusDetail(1, null)"]')); 
	var _viewAllLink= element(by.css('[ng-click="thesaurus.noData || thesaurus.viewThesaurusDetail(1, null)"]'));
	//var _viewAllLink= element(by.xpath('//div[@ng-controller="DocumentThesaurus as thesaurus"]//*[@id="thesaurusViewAllLink"]')); 
	var _viewAllLink= element(by.xpath('//div[@ng-controller="DocumentThesaurus as thesaurus"]//*[@id="thesaurusViewAllLink"]')); 
    var _getAnalystName = element.all(by.css('[ng-bind="item.analystName"]')).first();
	var _selectThesaurusType= element(by.model('TsAddModalCtrl.selectedThesaurus')); 
	//var _selectThesaurusType= element(by.css('.select-element-large.ng-pristine.ng-valid'));

	var _showFilters= element(by.id('modal.thesaurus.checkModel.show.filters')); 
	var _hideFilters= element(by.id('modal.thesaurus.checkModel.hide.filters')); 
	var _analystFilterField= element(by.id('analyst')); 
	var _viewAllList= element(by.css('[ng-show="thesaurus.length > 1"]')); 
	var _thesaurusDropdown= element(by.css('[ng-click="actions.testAdd()"]')); 
	var _checkBox=  element.all(by.model('item.selected')).get(0);
	var _complementaryFilterField= element(by.model('complementaryInfoInput')); 
	var _thesaurusTermFilterFeild= element(by.model('thesaurusTermInput')); 
	var _unitFilterFeild= element(by.xpath('//div[@id="filter-thesaurus-1"]//*[@ng-model="marginalNameInput"]')); 
	var _deleteButton= element(by.id('btn-thesaurus-delete')); 
	//var _unitColumnValueThesaurusSection= element(by.css('div[name="R1var _C2"]')); 
	var _unitColumnValueThesaurusSection= element.all(by.model('item.selected')).get(0); 

	var _unitFilterValueThesaurusSection= element(by.css('div[name="R1var _C1"]')); 

	var _thesaurusTableRowCount= element.all(by.css('wj-cell wj-alt wj-wrap')); 


	var _upOrderAnalyst= element(by.id('modal.thesaurus.analyst.upOrder')); 
	var _downOrderAnalyst= element(by.id('modal.thesaurus.analyst.downOrder')); 
	//var _selecteditThesaurus= element(by.css('select[ng-model="TsEditModalCtrl.selectedThesaurus"]'))
	var _selecteditThesaurus= element(by.css('div #selectTheSaurusContainer select.select-element-large.ng-pristine.ng-valid'));
	
	var  _pencilIconInThesaurusTable= element.all(by.xpath('//div[@class="display-flex justify-content-space-around  ng-scope"]//*[@ng-click="editThesaurus(item)"]')).get(0);
	var _pencilIconThesaurusTable= element(by.css('[ng-click="editThesaurus(item)"]'));
	var _thesaurusSection= element(by.css('.ng-binding')); 
	var _importButton= element(by.css('[ng-click="thesaurus.import()"]'));

	var _addButton= element(by.id('thesaurus.summarization.add')); 
	var _addthesaurusButton= element(by.id('btn-thesaurus-add')); 

	var _addButtonThesaurus= element(by.id('btn-thesaurus-add')); 
	//var _addButtonThesaurus= element(by.id('btn-thesaurus-add')); 

	var _importCancelButton= element(by.css('[ng-click="close()"]')); 
	//var _importCancelButton= element(by.css('[translate="Common.Cancel"]')); 
	var _thesaurusHierarchyCNAE= element.all((by.css('[id^="hierarchyNode"]  a  span'))).get(1);  
	var _thesaurusHierarchy2009= element.all((by.css('[id^="hierarchyNode"]  a  span'))).get(0); 

	var _thesaurusHierarchyA= element.all((by.css('[id^="hierarchyNode"]  a  span'))).get(2); 
	var _thesaurusTermAradiobutton= element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(0); 

	var _savethesaurusButton= element(by.id('btnSaveEdit')); 
//	var _listItems= element.all(by.repeater('type in TsAddModalCtrl.thesaurusTypes | orderBy:')); 
	var _listItems= element.all(by.repeater('type in TsAddModalCtrl.thesaurusTypes | orderBy:')).get(1); 
	var _listEditItems= element.all(by.repeater('type in TsEditModalCtrl.thesaurusTypes | orderBy:')); 
	var _selectaddThesaurus= element(by.css('select[ng-model="TsAddModalCtrl.selectedThesaurus"]')); 

	var _closeButton= element(by.css('[ng-click="close()"]')); 

	var _getTextNoEntriesFound= element(by.css('[ng-show="thesaurus.noData"]'));
	var _lastEntry= element.all(by.model('item.selected')).last();

	var _Xbutton=element.all(by.css('[ng-click="deleteThesaurus(item.idFicha)"]')).last();
	var _deleteConfirm= element.all(by.css('[ng-click="ok()"]')).last();
	var _confirmAdd= element(by.css('[ng-click="ok()"]')); 
	var _expandButton = element(by.id('collapsed-thesaurus-link'));

	//login variables
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


	this.clickOnAddThesaurusTable = function() {
	
	    element(by.id('btn-thesaurus-add')).click();
	};	


	/*this.loginusername= function(){
		element(by.model('credentials.username')).sendKeys('UX001254');
	};
	this.loginpassword= function(){
		element(by.model('credentials.password')).sendKeys('Naveen#92');
	};   

	this.clicklogin= function(){
		element(by.buttonText('Login')).click(); 
	}; */

	this.isExpanded = function() {
		//return _collapseButton.isPresent();
		return element(by.id('non-collapsed-thesaurus-link')).isDisplayed();
	};

	this.expandSection = function() {
		_expandButton.click();
	};

	this.getAnalystName= function() {
		return  _getAnalystName.getText();
	
    };




	this.clickAddButtonThesaurus= function() {

		element(by.css('[ng-click="thesaurus.addThesaurus()"]')).click(); 
	};



	this.selectThesarusTypeFromDropdown =  function (positionNum){

		if (positionNum) {

			_selectThesaurusType.click().then(function(result){   

				_selectThesaurusType.all(protractor.By.tagName('option')).then(function (options) {

					options[positionNum].click();
				});
			});
		}

	};

	this.selectTextFromSelectThesarusField =  function (){


        //_selectThesaurusType.click();
		//element(by.css('[ng-click="thesaurus.addThesaurus()"]')).click();
		var sameVal = element(by.model('TsAddModalCtrl.selectedThesaurus')).getText();
		console.log('Selected Text in PO: ' + sameVal );
		return sameVal;
		};

	this.clickadd= function() {
		element(by.id('thesaurus.summarization.add')).click(); 
	};


	this.clickMainUnit1= function() {
		element.all(by.css('[ng-click="FatherController.toggleExpand(node);"]')).get(0).click();
	};

	this.clickAddUnit1=function() {
		element.all(by.css('[ng-click="FatherController.newSubItem(node)"]')).get(0).click();
	};

	this.clickMainUnit2=function() {
		element.all(by.css('[ng-click="FatherController.toggleExpand(node);"]')).get(1).click();
	};

	this.clickAddUnit2=function() {
		element.all(by.css('[ng-click="FatherController.newSubItem(node)"]')).get(0).click();
	};


	this.selectElement=function() {
		element(by.css('[ng-model="editor.selectedVariableElement"]')).click();
	};

	this.clickElementSelectorDropdownFirst= function() {
		element.all(by.css('[ng-model="editor.selectedVariableElement"]')).get(0).click();  
	};

	this.clickElementSelectorDropdownSecond= function() {
		element.all(by.css('[ng-model="editor.selectedVariableElement"]')).get(1).click();  
	};

	this.clickElementSelectorDropdownThird= function() {
		element.all(by.css('[ng-model="editor.selectedVariableElement"]')).get(2).click();  
	};

	this.clickElementSelectorDropdownFourth= function() {
		element.all(by.css('[ng-model="editor.selectedVariableElement"]')).get(3).click();  
	};

	this.getFirstTextDropdown= function() {
		element(by.css('[ng-model="editor.selectedVariableElement"]')).getText();  
	};

	this.getSecondTextDropdown= function() {
		element(by.css('[ng-model="editor.selectedVariableElement"]')).getText();  
	};

	this.getThirdTextDropdown= function() {
		element(by.css('[ng-model="editor.selectedVariableElement"]')).getText();  
	};

	this.getFourthTextDropdown= function() {
		element(by.css('[ng-model="editor.selectedVariableElement"]')).getText();  
	};

	this.sendTermKeyword= function(){
		element(by.id('search-term')).sendKeys('%indice%');

	};

	this.enterKeyTerm= function(){
		element(by.id('search-term')).sendKeys(protractor.Key.ENTER);
	};

	this.clickonThesaurusTerm= function() {
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(0).click();  
	};

	this.clickAddThesaurus= function() {
		element(by.id('btnSaveAdd')).click();  
	};



	this.clickOKinPopup= function() {
		element(by.css('[ng-click="ok()"]')).click();  
	};

	this.clickCancelButton= function() {
		element(by.id('btnCloseAdd')).click();  
	};


	this.clickOnPlusIcon=function () {

		element(by.id('btnSearchUnit')).click(); 

	};



	this.sendUnitID=function (text) {

		element(by.model('UnitIdEditionCtrl.unitName')).click(); 
		element(by.model('UnitIdEditionCtrl.unitName')).sendKeys(text); 

	};

	this.clickComplementDropdown=function () {

		element(by.css('[name="lnkSearchDropdown"]')).click(); 
	};

	this.clickOnCodeDropdown = function()
	{
		//element(by.css("" + elementName + "")).click();
		element(by.css('.bluedropdown a[name="lnkSearchDropdownNav"]')).click();

	};

	this.selectNumberFromComplement=function () {

		element.all(by.css('[ng-click="select(item)"]')).get(0).click(); 

	};

	this.clickOnSaveUnit= function() {
		element.all(by.id('btnSaveAdd')).get(1).click();  
	};






	this.cancelbuttonPresent= function() {
		element(by.id('btnCloseAdd')).isPresent();  
	};

	/*this.clickViewAllLink=  function() {
		element(by.id('thesaurusViewAllLink')).click();  
	};*/


	this.clickShowFilters= function() {
		element(by.id('modal.thesaurus.checkModel.show.filters')).click(); 
	};

	this.enterKeyFilter= function(){
		element(by.model('analystDate')).sendKeys(protractor.Key.ENTER);
	};

	this.selectAllCheckBox= function(){
		element(by.css('.wj-cell.wj-header.multi-select>input')).click();
	};

	this.clickDelete= function(){
		element(by.css('#btn-thesaurus-delete')).click();
	};

	//click on the x button to delete the row

	 this.clickDeleteButtonOfRow= function(){
		  return   _Xbutton.click();
	};

	this.clickYesToDelete= function(){
		element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding')).click();
	};

	this.closeViewAll= function(){
		element(by.id('modal.thesaurus.close')).click();
	};


	this.openthesaurus= function(){
		element(by.id('thesaurusViewAllLink')).click();
	};

	this.thesaurusshowfilter= function(){
		element(by.buttonText('Show Filters')).click();
	};

	this.enteranalystname= function(){
		element(by.model('thesaurusTermInput')).sendKeys('%Civil%');
		element(by.model('analystInput')).sendKeys(protractor.Key.ENTER);
	};

	this.closethesaurus= function(){
		element(by.id('modal.thesaurus.close')).click();
	};

	this.sendComplementary = function() {
		element(by.id('complementaryInfo')).clear();
		element(by.id('complementaryInfo')).sendKeys("Transporte");
	};

	this.enterKeyFilterComplementary= function(){
		element(by.id('complementaryInfo')).sendKeys(protractor.Key.ENTER);
	};

	this.isViewAllTableDisplayed= function(){
		element(by.css('.bento-flex-grid.ng-isolate-scope.wj-control.wj-flexgrid.wj-content')).isPresent();
	};

	this.sendTermKeywordIndice= function(){
		element(by.id('search-term')).sendKeys('%Responsabilidad contractual%');

	};

	this.getTextofError= function(){
		element(by.css('.display-font-size08.ng-scope.ng-binding')).getText();

	};

	this.isErrorTextAvailable= function(){
		element(by.css('.display-font-size08.ng-scope.ng-binding')).isPresent();

	};

	this.clickonHierarchyFolder= function(){
		element(by.css('#hierarchyNode85851')).click();
	};

	this.clickonThesaurusTermFirst= function() {
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(0).click();  
	};

	this.clickonThesaurusTermSecond= function() {
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(1).click();  
	};

	this.clickImport= function() {
		element(by.id('thesaurus.summarization.import')).click();  
	};

	this.isImportPopUpDisplayed= function() {
		element(by.css('.import-border.ng-scope')).isPresent();  
	};

	this.sendCodeImport = function() {
		//element(by.css('.dropnav-input.ng-pristine.ng-animate.ng-valid.ng-valid-required')).click();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('RCL');
	};

	this.sendYearImport = function() {
		element.all(by.css('.importDataInput.ng-pristine.ng-valid')).get(0).clear();
		element.all(by.css('.importDataInput.ng-pristine.ng-valid')).get(0).sendKeys('2013');
	};

	this.sendNumberImport = function() {
		element.all(by.xpath('.//*[@id="body"]/div[1]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).clear();
		element.all(by.xpath('.//*[@id="body"]/div[1]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).sendKeys('669');
	};

	this.sendNumberImportTable = function() {
		element.all(by.xpath('.//*[@id="body"]/div[2]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).clear();
		element.all(by.xpath('.//*[@id="body"]/div[2]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).sendKeys('669');
	};

	this.clickSearchImport= function() {
		element(by.id('importsearch-id')).click();  
	};

	this.clickonCheckboxImport= function() {
		element.all(by.css('.float-right.ng-pristine.ng-valid')).get(1).click();  
	};

	this.clickImportButton= function() {
		element(by.css('.btn.orange-button.btn-header.btn-padding.btn-save-color.ng-scope')).click();  
	};

	this.isImportClassificationPopupDisplayed= function() {
		 return element(by.css('.modal-content')).isPresent();  
	};

   /* this function is used to check the thesaurus import error message
	which occurs beacuse of duplication of data */
	this.isImportErrormsgDisplayed=function(){
		return element(by.css('.import-entries-table-name.border-none.porcent-70')).isPresent();
	};

	this.clickClosepopUp= function() {
		element(by.css('.close')).click();  
	};

	this.clickCodeDropdown= function() {
		element.all(by.css('.dropdown-toggle.nav-a')).get(1).click();  
	};

	this.clickSearchinCode= function() {
		element(by.xpath('.//*[@id="dataNMPDrop"]/div/div/div/div/ul/li[1]/div/span/button')).click();  
	};

	this.clickImportViewTable= function() {
		element(by.id('btn-thesaurus-import')).click();  
	};

	this.expandThesaurusModule= function() {
		element(by.id('collapsed-thesaurus-link')).click();  
	};

	this.clickIndiceComunLink= function() {
		element(by.css('[ng-click="thesaurus.viewThesaurusDetail(1, t.name)"]')).click();  
	};

	this.clickEdit= function() {
		element.all(by.css('.col-md-2.name-icon-edit-table.table-icons>img')).get(0).click();  
	};

	this.clickDeleteforUnit= function() {
		element(by.css('.color-blue.pointer')).click();  
	};

	this.clickonUnitDropdown= function() {
		element(by.css('.dropdown-toggle.nav-a')).click();  
	};

	this.sendNewUnit = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.12');

	};

	this.clickSearchUnit= function() {
		element(by.xpath('.//*[@id="panel1"]/div[2]/dynamic-dropdown/div/div/div/div/ul/li[1]/div/span/button')).click();  
	};

	this.clickSaveEditButton= function() {
		element(by.id('btnSaveEdit')).click();  
	};

	this.sendNewUnitFirst = function() {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('A.14');

	};

	this.sendNewUnitSecond = function() {
		element(by.css('.form-control.ng-valid.ng-dirty.has-visited.has-focus')).clear();
		element(by.css('.form-control.ng-valid.ng-dirty.has-visited.has-focus')).sendKeys('A.15');

	};

	this.sendKeyComplimentary = function() {
		element(by.id('complementaryInfo')).clear();
		element(by.id('complementaryInfo')).sendKeys('All changed');

	};

	this.enterKeyComplementary= function(){
		element(by.id('complementaryInfo')).sendKeys(protractor.Key.ENTER);
	};

	this.clickCheckBoxComplimentaryInfo= function() {
		element(by.css('.borde-checkbox')).click();  
	};

	this.clickSecondFolderHierarchy= function() {
		element(by.id('hierarchyNode44667540')).click();  
	};

	this.clickIndiceAyuda= function() {
		element(by.xpath('.//*[@id="content-section"]/div[15]/div/div[2]/div[2]/ul/li[2]/a')).click();  
	};

	this.clickSecondCheckBox= function() {
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(1).click();  
	};

	this.isDeleteDisabled= function() {
		element(by.id('btn-thesaurus-delete')).isEnabled();  
	};

	this.isAddButtonDisplayed= function() {
		element(by.id('btn-thesaurus-add')).isPresent();  
	};

	this.isAddButtonEnabled= function() {
		element(by.id('btn-thesaurus-add')).isEnabled();  
	};

	this.isEditButtonPresent= function() {
		element.all(by.css('.col-md-2.name-icon-edit-table.table-icons>img')).get(0).isPresent();  
	};

	this.isThesaurusAvailable= function() {
		element(by.id('collapsed-thesaurus-link')).isPresent();  
	};

	this.isThesaurusDropdownAvailable= function() {
		element(by.css('[ng-click="actions.testAdd()"]')).isPresent();  
	};

	this.isDeleteButtonDisplayed= function() {
		element(by.id('btn-thesaurus-delete')).isPresent();  
	};

	this.isOKButtonAvailable= function() {
		element(by.id('btn-thesaurus-accept')).isPresent();  
	};

	this.isImportButtonAvailable= function() {
		element(by.id('btn-thesaurus-import')).isPresent();  
	};

	this.isShowHideColumnAvailable= function() {
		element.all(by.xpath('//a[@class="dropdown-toggle ng-binding"]')).get(1).isPresent();  
	};

	this.isShowFiltersAvailable= function() {
		element(by.id('modal.thesaurus.checkModel.show.filters')).isPresent(); 
	};

	this.isEditButtonAvailable= function() {
		element(by.css('[ng-click="editThesaurus($item)"]')).isPresent(); 
	};

	this.isCopyButtonAvailable= function() {
		element(by.css('[ng-click="copyThesaurus($item)"]')).isPresent(); 
	};

	this.isDeleteButtonAvailable= function() {
		element(by.css('[ng-click="deleteThesaurus($item.idFicha)"]')).isPresent(); 
	};

	this.isComplementaryInfoPresent= function() {
		element.all(by.css('div div div.wj-colheaders div.wj-cell.wj-header.wj-wrap div.ng-scope.ng-binding')).get(1).isPresent(); 
	};

	this.isViewMoreLinkPresent= function() {
		element(by.css('[ng-click="toggleDetail($row, dp)"]')).isPresent(); 
	};

	/* this.clickCancelButton= function() {
       element(by.css('[ng-click="cancel()"]')).click(); 
    }; */

	this.sendCodeImportBiblo = function() {
		//element(by.css('.dropnav-input.ng-pristine.ng-animate.ng-valid.ng-valid-required')).click();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('BIB');
	};

	this.sendYearImportBiblo = function() {
		element.all(by.css('.importDataInput.ng-pristine.ng-valid')).get(0).clear();
		element.all(by.css('.importDataInput.ng-pristine.ng-valid')).get(0).sendKeys('2010');
	};

	this.sendNumberImportTableBiblo = function() {
		element.all(by.xpath('.//*[@id="body"]/div[2]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).clear();
		element.all(by.xpath('.//*[@id="body"]/div[2]/div/div/section/form/div/div[1]/div[1]/div[3]/input')).sendKeys('2');
	};

	this.clickCodeDropdownBiblo= function() {
		element(by.css('.dropdown-toggle.nav-a')).click();  
	};

	this.clickCancelButtonImport= function() {
		element(by.css('[ng-click="close()"]')).click();  
	};

	/*this.sendTermKeywordNoTerm= function(){
        element(by.id('search-term')).sendKeys('%abdf%');

    }; */

	this.isNoTermTextPresent= function() {
		element(by.css('[ng-show="TsAddModalCtrl.termSearchNoResults"]')).isPresent(); 
	};

	this.clickHierarchyTab= function() {
		element(by.css('[ng-click="select()"]')).click();  
	};

	this.sendTermKeywordNoTerm= function(){
		element(by.id('search-hierarchy')).sendKeys('%###%');

	};

	this.isNoHierarchyTextPresent= function() {
		element(by.css('[ng-show="TsAddModalCtrl.hierarchySearchNoResults"]')).isPresent(); 
	};

	this.enterKeyTermHierarchy= function(){
		element(by.id('search-hierarchy')).sendKeys(protractor.Key.ENTER);
	};

//	Code push 26-Jun

	this.clickComplementaryInfoTable= function() {
		element(by.css('[ng-click="toggleAll(dp)"]')).click(); 
	};

	this.isComplementaryInfoTablePresent= function() {
		element(by.css('[ng-click="toggleAll(dp)"]')).isPresent(); 
	};

	this.isComplemantaryInfoTextDisplayed= function() {
		element(by.css('div div div div div.wj-cell.wj-alt.wj-detail div div.ng-scope strong.ng-binding')).isPresent(); 
	};

	this.isComplementaryCloseButtonDisplayed= function() {
		element(by.css('.bento-icon-close-circle.closeInfoTable')).isPresent(); 
	};

	this.clickComplementaryCloseFirst= function() {
		element.all(by.css('.bento-icon-close-circle.closeInfoTable')).get(0).click(); 
	};

	this.clickComplementaryCloseSecond= function() {
		element.all(by.css('.bento-icon-close-circle.closeInfoTable')).get(1).click(); 
	};

	this.clickEditComplementary= function() {
		element(by.css('[ng-click="edit()"]')).click(); 
	};

	this.clickSaveButtoniFrame= function() {
		element(by.id('button-1027-btnIconE1')).click(); 
	};

	this.clickFirstCheckBox= function() {
		element(by.xpath('.//*[@id="thesaurusTableContainer"]/div[1]/div[11]/div[1]/div/div[2]/div/input')).click(); 
	};

	this.clickPagination= function() {
		element(by.id('modal.thesaurus.checkModel.middle.right')).click(); 
	};

	this.clickCopyButton= function() {
		element(by.css('[ng-click="copyThesaurus($item)"]')).click(); 
	};


	this.clickTableCheckBox1= function(){
		element.all(by.css('[ng-model="$item.selected"]')).get(1).click();
	};

	this.clickTableCheckBox2= function(){
		element.all(by.css('[ng-model="$item.selected"]')).get(2).click();
	};

	this.clickTableCheckBox3= function(){
		element.all(by.css('[ng-model="$item.selected"]')).get(3).click();
	};

	this.clickTableCheckBox8= function(){
		element.all(by.css('[ng-model="$item.selected"]')).get(2).click();
	};

	this.clickTablePencil= function(){
		element.all(by.css('[ng-click="editThesaurus($item)"]')).get(1).click();
	};

	this.clickMainUnit= function(){
		element(by.name('lnkSearchDropdownNav')).click();
	};

	this.clickSubUnit= function(){
		element(by.css('[ng-model="model[property]"]')).click();
	};

	this.enterUnit= function(){
		element(by.name('txtdropdownsearch')).sendKeys('DT');
	};

	this.clickMainThesaurus= function(){
		element(by.id('[ng-repeat="node in node.items.list"]')).click();
	};

	this.clickSubThesaurus= function(){
		element.all(by.css('[ng-repeat="node in node.items.list"]')).get(2).click();
	};

	this.clickCheckBoxThesaurus= function(i){
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(i).click();
	};

	this.clickCheckBoxPrincipal= function(){
		element(by.id('principalContainer')).click();
	};

	this.clickOnApply= function(){
		element(by.id('btnSaveEdit')).click();
	};

	this.clickCrossButton= function(){
		element(by.id('modal.thesaurus.close')).click();
	};

	this.clickOkButton= function(){
		element(by.name('btnInfoDialogOk')).click();
	};

	/* this.clickEditButton= function(){
        element(by.name('linkMoreMinifiedDirective')).click();
    }; */



	this.clickEditButton= function() {
		element(by.id('btnSaveEdit')).click();  
	};
	this.clickindicecolumn = function(){
		element(by.id('hierarchyNode85851')).click();
	};

	this.enterText= function(){
		element(by.id('visible-e3')).clear().sendKeys('Hipotecas');
	};

	this.clickSave= function(){
		element(by.id('button-1027')).click();
	};

	this.clickDeleteTable= function(){
		element.all(by.css('[ng-click="deleteThesaurus($item.idFicha)"]')).get(1).click();
	};

	this.clickPopupSave= function(){
		element.all(by.name('btnConfirmationDialogCancel')).click();
	};




	this.clickDeleteViewAllTable= function() {
		element(by.css('[ng-click="deleteThesaurus($item.idFicha)"]')).click(); 
	};



	this.enterYearLeg= function(){
		element(by.css('[ng-model="model.year"]')).sendKeys('2013');
	};

	this.enterNumberLeg= function(){
		element(by.css('[ng-model="model.number"]')).sendKeys('1642');
	};

	this.enterYearLegs= function(){
		element(by.css('[ng-model="model.year"]')).sendKeys('2004');
	};

	this.enterNumberLegs= function(){
		element(by.css('[ng-model="model.number"]')).sendKeys('8340');
	};

	this.enterYearLan= function(){
		element(by.css('[ng-model="model.year"]')).sendKeys('2010');
	};

	this.enterNumberLan= function(){
		element(by.css('[ng-model="model.number"]')).sendKeys('74');
	};

	this.enterYearLcat= function(){
		element(by.css('[ng-model="model.year"]')).sendKeys('2014');
	};

	this.enterNumberLcat= function(){
		element(by.css('[ng-model="model.number"]')).sendKeys('16');
	};

	this.sendCodeLeg = function() {
		//element(by.css('.dropnav-input.ng-pristine.ng-animate.ng-valid.ng-valid-required')).click();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('LEG');

	};

	this.sendCodeLan = function() {
		//element(by.css('.dropnav-input.ng-pristine.ng-animate.ng-valid.ng-valid-required')).click();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('LAN');

	};

	this.sendCodeLcat = function() {
		//element(by.css('.dropnav-input.ng-pristine.ng-animate.ng-valid.ng-valid-required')).click();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys('LCAT');

	};

	this.clickTableImport= function(){
		element(by.id('btn-thesaurus-import')).click();
	};



	this.isTermCheckBoxPresent= function() {
		element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(1).isPresent();  
	};

	this.clickCancelDelete= function() {
		element(by.css('[ng-click="cancel()"]')).click(); 
	}; 


	this.sendComplementaryUnitLevel = function() {
		element(by.id('marginalUnitLevel')).clear();
		element(by.id('marginalUnitLevel')).sendKeys("%");
	};

	this.enterKeyFilterComplementaryUnitLevel= function(){
		element(by.id('marginalUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.isUnitLevelFieldPresent= function(){
		element.all(by.css('.wj-cell.wj-alt.wj-wrap')).get(1).isPresent();
	};

	this.clickEditButton= function() {
		element(by.id('btnSaveEdit')).click();  
	};

	this.sendTermKeywordNoTermError= function(){
		element(by.id('search-term')).sendKeys('%abdf%');

	};

	this.isDisplayedData= function(){
		element(by.className('modal-confirm-message ng-scope ng-binding')).isDisplayed();

	};

	this.isDisplayedText= function(){
		element(by.className('wrapwords col-md-10 ng-scope ng-binding')).isDisplayed();

	};

	this.clickTableCheckBoxFirst= function(){
		element.all(by.css('[ng-model="$item.selected"]')).get(0).click();
	};

	this.clickBlankField= function(){
		element(by.xpath('//*[@id="thesaurusTableContainer"]/div[1]/div[11]/div[1]/div/div[18]')).click();
	};

	this.isApplyButtonPresent= function() {
		element(by.id('btnSaveEdit')).isPresent();  
	};

	this.isAddThesaurusPresent= function() {
		element(by.id('btnSaveAdd')).isPresent();  
	};

	this.isImportViewTablePresent= function() {
		element(by.id('btn-thesaurus-import')).isPresent();  
	};

	this.isCancelButtonImport= function() {
		element(by.css('[ng-click="close()"]')).isPresent();  
	};

	this.isYesToDelete= function(){
		element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding')).isPresent();
	};

	this.isViewAllPresent= function(){
		element(by.id('modal.thesaurus.close')).isPresent();
	};

	this.isCancelDeletePresent= function() {
		element(by.css('[ng-click="cancel()"]')).isPresent(); 
	};

	this.isOKinPopupPresent= function() {
		element(by.css('[ng-click="ok()"]')).isPresent();  
	};

	this.clickCancelButton1= function() {
		element(by.id('btnCloseEdit')).click();  
	};

	this.cancelbuttonPresent1= function() {
		element(by.id('btnCloseEdit')).isPresent();  
	};

	this.isDeletePresent= function(){
		element(by.id('btn-thesaurus-delete')).isPresent();
	};

	//Adding converted methods or functions from old thesaurus po files

	this.thesaurusTableSectionRowCount=function () {

		return _thesaurusTableRowCount.count(); 
	};

	this.isVisibleAddThesaurusButton=function(){
		return _addButtonThesaurus.isPresent();
	};


	this.clickUpOrderAnalyst= function(){
		return _upOrderAnalyst.click();
	};

	this.clickDownOrderAnalyst=function(){
		return _downOrderAnalyst.click();
	};


	this.isVisibleUpOrderAnalyst=function(){
		return _upOrderAnalyst.isPresent();
	};

	this.isVisibleDownOrderAnalyst=function(){
		return _downOrderAnalyst.isPresent();
	};


	this.isVisibleThesaurusSection=function(){
		return _thesaurusSection.isPresent();
	};


	this.clickImportButton=function(){
		return _importButton.click();
	};

	this.isDisplayImportButton=function(){
		return _importButton.isDisplayed();
	};

	this.isVisibleImportButton=function(){
		return _importButton.isPresent();
	};


	this.isVisibleAddButton=function(){
		return _addButton.isPresent();
	};



	this.clickImportCancelButton= function () {
		return _importCancelButton.click();
	};

	this.isDisplayImportCancelButton= function () {
		return _importCancelButton.isDisplayed();
	};

	this.isVisibleImportCancelButton= function () {
		return _importCancelButton.isPresent();
	};

	this.isVisibleViewAllLink=function () {
		return _viewAllLink.isPresent();
	};



	this.clickpencilIconThesaurusTable=function () {

		//return   _pencilIconInThesaurusTable.click(); 
		 browser.executeScript("arguments[0].click();",_pencilIconInThesaurusTable.getWebElement());         
	};

	this.displayPencilIconThesaurusTable=function () {
		return _pencilIconThesaurusTable.isPresent();
	};  




	this.clickthesaurusHierarchyCNAE=function () {
		return _thesaurusHierarchyCNAE.click();
	};
	this.displayThesaurusHierarchyCNAE=function () {
		return _thesaurusHierarchyCNAE.isPresent();
	};


	this.clickthesaurusHierarchy2009=function () {
		return _thesaurusHierarchy2009.click();
	};

	this.displayThesaurusHierarchy2009=function () {
		return _thesaurusHierarchy2009.isPresent();
	};


	this.clickthesaurusHierarchyA=function () {
		return _thesaurusHierarchyA.click();
	};

	this.displayThesaurusHierarchyA=function () {
		return _thesaurusHierarchyA.isPresent();
	};



	this.clickthesaurusTermAradiobutton=function () {
		return _thesaurusTermAradiobutton.click();
	};

	this.displayThesaurusTermAradiobutton=function () {
		return _thesaurusTermAradiobutton.isPresent();
	};


	this.clicksavethesaurusButton=function () {
		return _savethesaurusButton.click();
	};

	this.displaySavethesaurusButton=function () {
		return _savethesaurusButton.isPresent();
	};


	/* var _scrollToLink= function (webelement) {
            // There are some issues with the double scroll when trying to click some elements
            //browser.executeScript(function (element) { element.scrollIntoView(false);}, //webelement.getWebElement());
            browser.executeScript('arguments[0].scrollIntoView(false)', webelement.getWebElement());
        };
	 */



	this.hasErrorMessage= function () {
		return _errorMessage.isDisplayed();
	};


	this.hasItem=function (itemName) {
		console.log('Item Name' +itemName);
		return _listItems.getText().then(function (listNames) {
			return listNames.indexOf(itemName) >= 0;
		});
	};




	this.hasEditItem=function (itemName) {
		return _listEditItems.getText().then(function (listNames) {
			return listNames.indexOf(itemName) >= 0;
		});
	};

	this.errorMessage= function () {
		return _errorMessage.getText();
	};

	this.countLinks=function () {
		return _listLinks.length;
	};


	this.hasLink = function (itemName) {
		return _listLinks.getText().then(function (listNames) {
			return listNames.indexOf(itemName) >= 0;
		});
	};

	this.clickViewAllLink= function () {
		browser.executeScript("arguments[0].click();",_viewAllLink.getWebElement());
	};


	this.clickaddthesaurusButton=function () {

		browser.executeScript("arguments[0].click();",_addthesaurusButton.getWebElement());
		//return _addthesaurusButton.click();
		//element(by.css('[ng-click="addThesaurus()"]')).click();
		
	};

	this.clickeditthesauruscombox=function () {
		return _selecteditThesaurus.click();
	};

	this.displayViewAllLink=function () {
		return _viewAllLink.isDisplayed();
	};

	this.HasMenuItem= function () {

		return _menuItem.getText();
	};



	this.clickselectthesauruscombox= function () {
		return  _selectThesaurusType.click();
	};


	this.ClickShowFilters= function () {

		return _showFilters.click();
	};

	this.ClickHideFilters= function () {

		return _hideFilters.click();
	};

	this.hasAnalystTextfilterfeild= function () {
		return _analystFilterField.isDisplayed();
	};

	this.ViewAllListClick= function () {

		return _viewAllList.click();
	};

	this.ClickThesaurusDropdown= function() {
		return _thesaurusDropdown.click();
	};

	this.HasCheckBox= function () {
		return _checkBox.isPresent();
	};

	this.clickCheckBox= function () {
		return _checkBox.click();
	};

	this.clickDelete= function () {
		return _deleteButton.click();
	};

	this.displayDelete= function () {
		return _deleteButton.isDisplayed();
	};

	this.isDeleteButtonDisabled= function () {

		return _deleteButton.getAttribute('disabled').then(function (disabled) { 

			if(disabled==='true')
				return true;
			else
				return false;
		}); 
	};

	this.isDeleteButtonEnable = function () {
		return _deleteButton.isEnabled();
	};

	this.EnterValueinAnalystFeild= function (Text) {
		_analystFilterField.sendKeys(Text);
		return  _analystFilterField.sendKeys(protractor.Key.ENTER);
	};

	this.EnterValueinComplementaryFeild= function (Text) {
		_complementaryFilterField.sendKeys(Text);
		return _complementaryFilterField.sendKeys(protractor.Key.ENTER);
	};

	this.isunitColumnValueThesaurusSection= function() {

		return _unitColumnValueThesaurusSection.getText().then(function (value) { 
			if(value == "")
				return value;

		}); 
	};


	this.EnterValueinThesaurustermFeild= function (Text) {
		_thesaurusTermFilterFeild.sendKeys(Text);
		return _thesaurusTermFilterFeild.sendKeys(protractor.Key.ENTER);
	};

	this.getCountOfRows= function () {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function(c){
			return c;
		});
	};

	this.EnterValueinUnitFeild= function (Text) {
		_unitFilterFeild.sendKeys(Text);
		return _unitFilterFeild.sendKeys(protractor.Key.ENTER);
	};

	this.gettextViewAllLink=function () {
		return _viewAllLink.getText();
	};

	this.selectAllCheckBox= function () {

		element.all(by.css('[type="checkbox"]')).then(function(els){
			return els[els.length-1].click();
		}); 
	};


	this.clickCloseButton=function () {
		return _closeButton.click();
	};



	this.getTextNoEntriesFound=function () {
		return _getTextNoEntriesFound.getText();
	};



	this.clickLastEntry=function () {
		return _lastEntry.click();
	};



	this.clickDeleteConfirm=function () {
		return _deleteConfirm.click();
	};

	this.clickIndiceComunFolder= function () {

		//browser.executeScript('return document.getElementById(\'hierarchyNode85851\').click();'); 
		element(by.id("hierarchyNode85851")).click();

	};



	    this.clickPlusIcon= function () { 

				element.all(by.css('[ng-click="FatherController.toggleExpand(node);"]')).get(0).click();
				element(by.css('[ng-click="FatherController.newSubItem(node)"]')).click();

			};
		




	this.clickSelectThesaurusTermAddPage= function () {


		//browser.executeScript('return document.querySelectorAll(\'[ng-model="term.selected"]\')[0].click();',''); 
		element.all(by.css(".blue-borde-checkbox-thesaurus.cursor-pointer")).get(3).click();
	};


	this.clickAddIcon= function () {
		//browser.executeScript('return document.getElementById(\'btnSaveAdd\').click();',''); 
		element(by.css(".btn.btn-header.btn-padding.btn-save-thesaurus.ng-scope.ng-binding")).click();
	};



	this.clickConfirmAdd= function () {
		return _confirmAdd.click();
	};

	this.clickCloseAddPage= function () {

		browser.executeScript('return document.querySelector(\'[ng-click="closeAdd()"]\').click();',''); 
	};


	this.clickOnUnitAddPage= function () {
		browser.executeScript('return document.querySelectorAll(\'[id^="unitId-"]\')[2].click();',''); 
	};

	this.clickOnAddUnitAddPage= function () {
		browser.executeScript('return document.querySelector(\'[name="addUnit"]\').click();',''); 
	};

	this.clickOnOtherUnitAddPage= function () {
		browser.executeScript('return document.querySelectorAll(\'[id^="unitId-"]\')[3].click();',''); 
	};

	this.clickApplyButtonEdit= function () {
		browser.executeScript('return document.getElementById(\'btnSaveEdit\').click();',''); 

	};
	/*clickRadioEdit=  browser.executeScript('return document.querySelectorAll(\'[id="TsTerms"] [ng-model="term.selected"]\')[0].click();',''); 
	 */

	this.selectCode = function (value1) { 
		return element(by.model('model.publicationType')).all(by.tagName('option')).get(value1).click(); 
	};


	this.yearValue=  function () {

		element(by.id('year')); 
	};

	this.numberValue=function () {
		element(by.model('model.number')); 
	};

	this.clickValidateID=function () {  
		element(by.id('validation-id')).click(); 
	};


	this.clickImportButtonImpPage=function () {
		element(by.css('[data-ng-click="import()"]')).click(); 
	};

	this.clickOnCrossImport=function () {
		element(by.css('[ng-click="close()"]')).click(); 
	}; 

	this.getAddButtonCaption= function () {
		return element(by.id('thesaurus.summarization.add')).getText(); 
	};

	this.getImportButtonCaption=function () {
		return element(by.id('thesaurus.summarization.import')).getText(); 
	};

	this.getAllFiltersButtonCaption=function () {
		return element(by.css('[id="modal.thesaurus.checkModel.show.filters"]')).getText(); 


	};	



};

module.exports = new thesauruspage();