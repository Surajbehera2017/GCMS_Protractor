var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');
var authornotessection = function() {
	this.expandableEdit = new ExpandableToggle('collapsed-author-notes-link', 'non-collapsed-author-notes-link');
	//var _edit=element(by.css('[name="R0_C9"] a[ng-click="addAuthorNotes(\'edit\', [$item])"]'));
	
	var _popupWindow = element(by.css('div.modal-dialog.modal-sm div.modal-content'));
	var _searchViewAllLink = element(by.css('div a#authorNotesViewAllLink strong.ng-binding'));
	var _searchDelete = element(by.css('[id="btn-author-note-remove"]'));
	var _cancelActionAuthorNotesSection = element(by.css('[ng-click="deleteAuthorNote($item.id)"]')); 
	var _copyImage = element(by.css('img[ng-src="content/image/duplicate.png"]'));
	var _unitColumnValueAuthorNotesSection = element(by.name('R0_C6'));
	//var _unitColumnValueAuthorNotesSection = element(by.css('div[name="R0_C6"]'));
	var _inputcontextIndextype = element(by.css('input[id="input-filter-author-note-context-type"]'));
	var _inputauthorNotetype = element(by.css('input[id="input-filter-author-note-type"]'));
	var _inputauthorUnit = element(by.css('input[id="input-filter-author-note-unit-detail"]'));
	var _showfilter = element.all(by.css('button[ng-click="showHideFilters()"]')).get(0);
	//var _errormessage = element(by.css('div[name="txtInfoDialog"]'));
	var _errormessage = element(by.name('txtInfoDialog'));
	//var _AddUnitButton = element(by.css('a[name="addUnit"]'));
	var _AddUnitButton = element(by.name('addUnit'));
	var _saveButton = element(by.css('button[id="btnSaveCopy"]'));
	//var _okButton = element(by.css('button[name="btnInfoDialogOk"]'));
	var _okButton = element(by.name('btnInfoDialogOk'));
	var _closeTable = element(by.css('#btn-author-note-close-table'));
	//var _contextIndexTrem = element(by.css('div[name="R0_C3"]'));
	var _contextIndexTrem = element(by.name('R0_C3'));
	var _clickOnEditUnit = element(by.css('[ng-click="addAuthorNotes("edit", $item)"]'));
	var _EditUnit = element(by.css('[ng-click="addAuthorNotes("edit", [$item])"]'));
	var _closeButton = element(by.css('[ng-click="close()"]'));
	var _AddButton = element(by.id('btn-author-note-add'));
	var _AddButtonAuthonotes = element(by.css('ng-click="AuthorNotesAddModalCtrl.addNewAuthorNote()"'));
	var _selectTerm = element.all(by.css('div div div.authorNotes-dot.bento-toggle.ng-isolate-scope.ng-pristine.ng-valid')).get(1);
	var _selectContextIndex = element(by.css('select[ng-model="AuthorNotesAddModalCtrl.selectedContextIndexType"]'));
	var _ContextindexHierarchy = element.all(by.css('div#hierarchyNode98512008.tree-node.tree-node-content.pointerCursor.ng-scope.ng-binding.angular-ui-tree-handle'));
	var _subContextindexHierarchy = element(by.css('#hierarchyNode91585552'));
	var _contextindextermcheckBox = element.all(by.css('[ng-model="term.selected"]'));
	var _AddVisual = element(by.css('[ng-click="AuthorNotesAddModalCtrl.createComplementaryInfo()"]'));
	var _textinAuthorNote = element(by.id('visible-e3'));
	var _FormatTab = element(by.css('#tab-1015-btnInnerEl'));
	var _saveButtonNote = element(by.id('button-1027-btnIconEl'));
	var _selectTypeofNote = element(by.css('[ng-model="AuthorNotesAddModalCtrl.selectedNoteType"]'));
	var _saveButtonCreate = element(by.css('.btn.btn-primary.btn-medium.ng-scope'));
	var _saveButtonEdit = element(by.id('btnSaveEdit'));
	//var _saveDialog = element(by.css('button[name="btnConfirmationDialogAccept"]'));
	var _saveDialog = element(by.name('btnConfirmationDialogAccept'));
	var _selectUnitvalueOther = element.all(by.css('.col-md-3.width-29.unit-tree-node>div')).get(2);
	var _propagate = element.all(by.css('[ng-model="AuthorNotesAddModalCtrl.propagation"]'));
	var _addBibilography = element(by.css('#panel4 div a span.ng-scope.ng-binding'));
	var _popupBibilography = element(by.css('.import-border.ng-scope'));
	var _code = element(by.css('#find-margin-import div div div button.btn.btn-default.dropdown-toggle.input-2-5'));
	var _selectValue = element.all(by.css('[ng-click="typeSelected(item)"]'));
	var _lensImage = element.all(by.css('img[ng-src="content/image/viewdetail-icon.png"]')).get(0);
	var _fristcheckboxnote = element.all(by.css("[ng-model='$item.selected']")).get(0);
	var _allCheckBoxes = element.all(by.model('$item.selected'));
	var _EditNote = element.all(by.css('[ng-click="AuthorNotesAddModalCtrl.editComplementaryInfo()"]'));
	var _errorPopup = element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding'));
	var _yesorNo = element.all(by.id('select-filter-author-note-spread'));
	var _noteType = element.all(by.css('.wj-cell.wj-header.wj-wrap')).get(0);
	var _contextIndexType = element.all(by.css('.wj-cell.wj-header.wj-wrap')).get(1);
	var _note = element.all(by.css('.wj-cell.wj-header')).get(3);
	var _yesNoPropagation = element(by.css("[src='content/image/propagation-icon.png']"));
	var _noContextIndex = element(by.css('[ng-click="authorNotesSumData.viewAuThorNotesDetailWithoutContext()"]'));
	var _tableDisplayed = element(by.css('.modal-content'));
	var _unitColumn = element(by.xpath('.//*[@id="authorTableContainer"]/div[1]/div[12]/div[3]/div/div[7]'));
	var _versionColumn = element(by.xpath('.//*[@id="authorTableContainer"]/div[1]/div[12]/div[3]/div/div[9]'));
	var _actionColumn = element(by.xpath('.//*[@id="authorTableContainer"]/div[1]/div[12]/div[3]/div/div[10]'));
	var _contextIndexLink = element(by.css("[ng-click='authorNotesSumData.viewAuThorNotesDetailWithoutContext()']"));
	var _byType = element(by.css('[ng-show="( expandCollapse.status.authorNotes.open && authorNotesSumData.byTypeOfNote.length > 0 )"]>ul>li>a'));
	var _editXml = element(by.css('[ng-click="AuthorNotesAddModalCtrl.editComplementaryInfoXML()"]'));
	var _xmlnotepopup = element(by.css('.CodeMirror-line'));
	var _acceptXlmLink = element(by.css('[ng-click="editor.accept()"]'));
	var _elementSelectorDropdown = element(by.model("editor.selectedVariableElement"));
	var _selectElementFromSelector = element.all(by.css('[ng-model="editor.selectedVariableElement"] >option'));
	var _closeEditXml = element(by.css('section header div a.close i.bento-icon-close-x'));
	var _selectElementType = element(by.css('[ng-model="editor.selectedVariableElement"]'));
	var _datepopup = element(by.css('div div div div div div.row div.title.col-md-10.ng-scope.ng-binding'));
	var _okindatepopup = element(by.css('.btn.btn-primary.orange-button.pull-right.ng-scope.ng-binding'));
	var _okinementapopup = element(by.css('.btn.btn-primary.orange-button.pull-right.ng-scope.ng-binding'));
	var _textNotepopup = element(by.css('.title.col-md-10.ng-scope.ng-binding'));
	var _ementapopup = element(by.css('.title.col-md-10.ng-scope.ng-binding'));
	var _enterIDField = element(by.id('textfield-1281-inputEl'));
	var _noteHeader = element(by.css('.modal-header.header-import.backround-orange'));
	var _tabHeaderinNote = element(by.id('tabbar-1010-innerCt'));
	var _notePopup = element(by.css('.modal-unit-edit.ng-scope.ng-isolate-scope'));
	var _unitLevel = element(by.css('[ng-click="FatherController.toggleLevelSelector(node)"]'));
	var _unitLevelPopup = element(by.css('[ng-if="FatherController.popoverShown"]'));
	var _versiononUnitLevel = element(by.model('AuthorNotesAddModalCtrl.selectedVersion'));
	var _optioninVersionofUnitLevel = element.all(by.css('[ng-model="AuthorNotesAddModalCtrl.selectedVersion"] >option')).get(0);
	var _unitLevelDropdown = element(by.css('[ng-click="FatherController.getUnitLevels(node)"]'));
	var _optionInUnitLevel = element(by.css('[ng-click="node.unitLevel = unit.valor"]'));
	var _selectAllCheckbox = element(by.css('.wj-cell.wj-header.multi-select>input'));
	var _XMLEditor = element(by.css('div div section div.ng-scope xml-editor.ng-isolate-scope'));
	var _textinDatePopup = element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[1]/input'));
	var _dateinDatePopup = element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input'));
	var _datepopupinAuthorNote = element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]'));
	var _addXML = element(by.css('[ng-click="AuthorNotesAddModalCtrl.createComplementaryInfoXML()"]'));
	var _searchXML = element(by.css('[ng-click="editor.searchCM()"]'));
	var _searchTextBoxinXML = element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[7]/input'));
	var _searchTextHighlight = element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[6]/div[1]/div/div/div/div[5]/div/pre/span/span[4]'));
	var _selectUnitvalue = element.all(by.css('.col-md-3.width-29.unit-tree-node>div>div span.padding-left-5.padding-right-5.ng-binding'));
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.css('div.modal-footer button.btn.btn-primary.ng-binding'));
	var _typeofauthornote = element(by.css('.select-element-large.ng-scope.ng-pristine.ng-valid'));
	var _selectauthornote = element.all(by.css('.select-element-large.ng-scope.ng-pristine.ng-valid>option.ng-scope.ng-binding'));
	var _selectspecificcontentIndex = element.all(by.css('[ng-model="AuthorNotesAddModalCtrl.selectedContextIndexType"] > option'));
	var _firstnavigation = element(by.css('[ng-click="first()"]'));
	var _lastnavigation = element(by.css('[ng-click="last()"]'));
	var _nextnavigation = element(by.css('[ng-click="next()"]'));
	var _prevnavigation = element(by.css('[ng-click="previous()"]'));
	var _replacealllink= element(by.css("[ng-click='editor.replaceAllCM()']"));
	var _replacelink = element(by.css("[ng-click='editor.replaceCM()']"));
	var _replacekeyowrdposition = element(by.css('.CodeMirror-search-field'));
	var _expandall = element(by.css('#collapse-all-collapsed-link>img'));
	var _changehistory = element(by.css("[ng-click='editor.diff()']"));
	//var _addauthornotebutton = element(by.css('[ng-click="authorNotesSumData.addAuthorNotes()"]'));
	var _addauthornotebutton = element(by.css('#btn-author-note-add'));
	var _massdeleteyesbutton = element(by.css('[name="btnConfirmationDialogAccept"]'));
	//var _massdeleteyesbutton = element(by.name('btnConfirmationDialogAccept'));
	var _level=element.all(by.css('.btn-group>input')).get(1);
	var _contextindexHierarchyOther=element(by.css('#hierarchyNode88719640'));
	var _subContextindexHierarchyOther=element.all(by.css('.termsCheckbox.ng-pristine.ng-valid')).get(0);
	var _allxmlelements = element.all(by.css('.CodeMirror-line span'));
	var _anglequote = element.all(by.css('.CodeMirror-line>span'));
	var _allimageoptions = element.all(by.css('.btn.btn-default.xml-editor-img-btn'));
	var _anchortag = element(by.css('.unitLevelButton'));
	var _unitLevelDropdownOptions = element(by.css('[ng-click="FatherController.getUnitLevels(node)"] a.dropdown-toggle.nav-a.btn-dropdown'));
	var _versiondropdown = element(by.css('[ng-click="FatherController.getUnitVersions(node)"] a.dropdown-toggle.nav-a.btn-dropdown'));
	var _versiondropdownoptions = element.all(by.css('.orange-text.cursor-pointer.ng-binding'));
	var _unitleveldropdownoptions = element.all(by.css('[ng-click="node.unitLevel = unit.valor"] a.orange-text.cursor-pointer.ng-binding'));
	var _pasteexternaltextdd=element(by.css('#splitbutton-1038-btnWrap'));
	var _pastefromword=element(by.css('#menuitem-1037-textEl'));
	var _pastefromxml=element(by.css('#menuitem-1036-textEl'))
	var _insertbuttonPastefromWord=element(by.css('#button-1287-btnInnerEl'));
	var _savevisual=element(by.css('#button-1027-btnIconEl'));
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
	this.clickOnSaveVisual=function(){
		_savevisual.click();
	};
	this.clickPasteExternalText=function(){
		_pasteexternaltextdd.click();
		
	};
	//t click on paste dropdown option
	this.clickOnPasteDropdown = function () {
		//var el = element(by.id('splitbutton-1037'));
		var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
		//var el = element(by.css('.x-btn-wrap.x-btn-split.x-btn-split-right'));
		browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
	};
	//select option paste external text
	this.selectOptionFromPasteDropdown = function (i) {
		element.all(by.css('.x-component.x-box-item.x-component-default.x-menu-item')).get(i).click();
	};
	this.clickPasteFromWord=function(){
		_pastefromword.click();
	};
	this.clickPasteFromXML=function(){
		_pastefromxml.click();
	};
	this.clickOnInsertPasteFromWord=function(){
		_insertbuttonPastefromWord.click();
	};
	//click on insert after entering some text/xml in the pop up
	this.clickOnInsertButton = function (i) {
		element.all(by.css('.x-btn.x-unselectable.x-box-item.x-toolbar-item.x-btn-default-small.x-icon-text-left.x-btn-icon-text-left.x-btn-default-small-icon-text-left')).get(0).click();
		browser.sleep(3000);
	};
	this.selectUnitLevelDropdownOption = function(value) {
		return  _unitleveldropdownoptions.get(value).click();
	};

	this.clickUnitLevelDropdownOption = function() {
		return _unitLevelDropdownOptions.click();
	};

	this.selectVersionDropdownOption = function(value) {
		return _versiondropdownoptions.get(value).click();
	};

	this.clickVersionDropdownOption = function() {
		return _versiondropdown.click();
	};

	this.enterValueInLevel=function(){
		_level.sendKeys("Nivel nuevo");
	};

	this.entertextInXML=function(){
		return _replacekeyowrdposition.clear();
		_replacekeyowrdposition.sendKeys("</texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </texto>").sendKeys(protractor.Key.ENTER);
	};
	/*enter the text in the popup (which you get after clicking on paste from external or xml or word)
	*/
	this. enterTextIntoPopup = function (i,value) {

		element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(i).click();
		 browser.sleep(2000);
		 element.all( by.css('.x-form-field.x-form-text.x-form-textarea')).get(i).sendKeys(value);
		browser.sleep(3000);
		// element(by.id('textarea-1307-bodyEl')).click();
		// element(by.id('textarea-1307-bodyEl')).sendKeys(value);
	};

	this.enterSomeTextInXML=function(value){
		return _replacekeyowrdposition.clear();
		_replacekeyowrdposition.sendKeys(value).sendKeys(protractor.Key.ENTER);
	};	
	this.isAnchorTagDisplayed = function() {
		return _anchortag.isDisplayed();
	};

	this.clickImageIcon = function (value) {
		return _allimageoptions.get(value).click();
	};

	this.isElementPresent = function (value) {
		_anglequote.then(function(elements) {
			for(var i=0;i<elements.length;i++)
			{
				elements[i].getText().then(function(elementname) {
					if(elementname === 'value')
					{
						return true;
					}
				})
			}
		})
	};

	this.isTextPresent = function (value) {
		_allxmlelements.then(function(elements) {
			for(var i=0;i<elements.length;i++)
			{
				elements[i].getText().then(function(elementname) {
					if(elementname === 'value')
					{
						return true;
					}
				})
			}
		})
	};

	this.clickParagraphinXML=function(){
		element(by.css('[tooltip="Paragraph"]')).click();	
	};
	this.clickCancelActionAuthorNotesSection = function() 
	{
		_cancelActionAuthorNotesSection.click();
	};

	this.isPresentCancelActionContextIndexSection = function()
	{
		return _cancelActionAuthorNotesSection.isPresent();
	};

	this.isunitColumnValueAuthorNotesSection = function() 
	{
		return _unitColumnValueAuthorNotesSection.getText().then(function (value) {
			return value;

		});

	};
	this.getLevelValue=function() {
		return _level.getText().then(function (value) {
			return value;
		});
		
	};
	this.clickOnEdit=function() {
	//	browser.executeScript("arguments[0].scrollIntoView();", _edit.getWebElement());
	//	_edit.click();
	};
	this.clickViewAllLink = function () {
		browser.executeScript("arguments[0].scrollIntoView();", _searchViewAllLink.getWebElement());
		browser.executeScript("arguments[0].click();", _searchViewAllLink.getWebElement());
	//	browser.executeScript("arguments[0].scrollIntoView();", _searchViewAllLink.getWebElement());
	//	_searchViewAllLink.click();
	};

	this.isViewAllLinkVisible = function () {
		return _searchViewAllLink.isDisplayed();
	};

	this.ispopupWindowVisible =function () {
		return _popupWindow.isDisplayed();
	};

	this.getTextviewall = function () {
		browser.executeScript("arguments[0].scrollIntoView();", _searchViewAllLink.getWebElement());
		return _searchViewAllLink.getText().then(function (count) {
			return parseInt(count.replace("(", "").replace(")", ""));
		});
	};

	this.getcontextIndexTrem = function () {
		return _contextIndexTrem.getText();
	};

	this.Errormessage = function () {
		browser.executeScript("arguments[0].scrollIntoView();",_errormessage);
		return _errormessage.getText();
	};

	this.clickSelectedItem = function (value) {
		_selectItem.get(value).click();
	};

	this.deleteDisplay = function () {
		browser.executeScript("arguments[0].scrollIntoView();",_searchDelete);
		return _searchDelete.isDisplayed();
	};

	this.clickDelete = function () {
		browser.executeScript("arguments[0].scrollIntoView();",_searchDelete);
		_searchDelete.click();
	};

	this.isDeleteButtonDisabled = function () {
		return _searchDelete.getAttribute('disabled').then(function(present) 
			{ 
			if(present==='true')
				return true;
			else
				return false;
			}); 
	};

	this.isDeleteButtonEnable = function (){
		return _searchDelete.isEnabled();
	};

	this.clickcloseTable
	this.clickshowFilter = function (){
		//_showfilter.click();
		return browser.executeScript("arguments[0].click();", _showfilter.getWebElement());
	};

	this.enterContextindexType = function (value) {
		_inputcontextIndextype.clear().sendKeys(value,protractor.Key.ENTER);
	};

	this.enterAuthornoteType = function (value) {
		_inputauthorNotetype.clear().sendKeys(value,protractor.Key.ENTER);
	};

	this.enterAuthorUnit = function (value){
		_inputauthorUnit.clear().sendKeys(value,protractor.Key.ENTER);
	};

	this.UnitValue = function () {
		return element.all(by.css('[id^="unitId"]'));
	};

	this.clicksaveButton = function (){
		return browser.executeScript("arguments[0].click();", _saveButton.getWebElement());
	};

	this.clickokButton = function (){
		_okButton.click();
	};

	this.clickcloseTable = function (){
		//browser.executeScript("arguments[0].click();", _closeTable.getWebElement());
		_closeTable.click();
	};

	this.clickUnitButton = function (){
		return browser.executeScript("arguments[0].click();", _AddUnitButton.getWebElement());
	};

	
	this.getAddedUnitValue = function () {
		return element(by.css('.label.thesaurusTermLabel.ng-scope.ng-binding')).getText();
	};

	this.getEmptyUnitValue = function () {
		return element(by.css('#idTreeSelectedUnitsAN')).getText();
	};

	this.changeUnit = function (element,value){
		element.filter(function (elem) {
			return elem.getText().then(function (text) {
				return text === value;
			});
		}).then(function (filteredElements) {
			// filteredElements is the list of filtered elements
			return filteredElements[0].click();
		});
	};

	this.selectAndEditAuthorNoteHavingUnit = function (){
		return element.all(by.css('[data-column="6"]')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text !== '1#';
			});
		}).first().getAttribute('data-row').then(function(v){
			return element(by.css('[data-row="'+ v +'"]' + '[data-column="9"]' + " " + '[src="content/image/edit-icon.png"]')).click();

		});
	};

	this.clickEditIcon = function (value) {
		browser.executeScript("arguments[0].click();",element(by.css('[data-row="'+ value +'"]' + '[data-column="9"]' + " " + '[src="content/image/edit-icon.png"]')));
	};

	this.clickcopyImage = function (value){
		browser.executeScript("arguments[0].click();",element(by.css('[data-row="'+ value +'"]' + '[data-column="9"]' + " " + '[src="content/image/duplicate.png"]')));
	};

	this.clickOnEditUnit = function () {
		_EditUnit.click();
	};

	this.selectAndEditAuthorNoteType = function (){
		return element.all(by.css('[data-column="1"]')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text !== 'Note Type';
			});
		}).first().getAttribute('data-row').then(function(v){
			return element(by.css('[data-row="'+ v +'"]' + '[data-column="9"]' + " " + '[src="content/image/edit-icon.png"]')).click();

		});
	};
		
	this.deleteUnitOfAuthorNote = function (){
		 //browser.executeScript('return document.querySelector(\'[ng-click="AuthorNotesAddModalCtrl.deleteElemetOflistSelectedNode($index)"]\').click();','');
 		return browser.executeScript("arguments[0].click();",element(by.css('[ng-click="AuthorNotesAddModalCtrl.deleteElemetOflistSelectedNode($index)"]')));
	};

	this.clickOnSaveButtonEdit = function (){
		browser.executeScript("arguments[0].scrollIntoView();",element(by.id('btnSaveEdit')));
		element(by.id('btnSaveEdit')).click();
		//return browser.executeScript('return document.querySelector(\'[id="btnSaveEdit"]\').click();','');
	};

	this.clickOnCancelButtonEdit = function (){
		browser.executeScript("arguments[0].scrollIntoView();",element(by.id('btnCloseAdd')));
		element(by.id('btnCloseAdd')).click();
	};

	this.addAuthorNoteSaveButton = function () {
		browser.executeScript("arguments[0].scrollIntoView();",element(by.id('btnSaveAdd')));
		element(by.id('btnSaveAdd')).click();
	};

	// this.clickBtnConfirmation = function (){
	// 	element(by.css('[name="btnConfirmationDialogAccept"]')).click();
	// };

	this.clickTypeofAuthorNote = function () {
		_typeofauthornote.click();
	};

	this.changeTypeOfNote = function (value){
		return _selectauthornote.get(value).click();
	};

	this.isSelectedApplyToDocument = function (){
		return browser.executeScript('return document.querySelector(\'[ng-model="AuthorNotesAddModalCtrl.applyToAllDoc"]\').checked;','');
	};

	this.getAnalysisDate = function(){
		var _analysisdate=element(by.css('[ng-if="$item.showMoreDate"] [ng-bind-html="$item.dateOfAnalysis"]'));
		//browser.executeScript("arguments[0].scrollIntoView();",_analysisdate.getWebElement());
		return _analysisdate.getText();
	};
	this.getAnalystName = function(){
	return element(by.css('[ng-class="$item.showNote ? \'border-bootom-grey\'\:\'\'"]>div[class="col-md-4 padding-left-15"] span')).getText();
	};
	this.clickOnGlasses = function (){
		return element.all(by.css('[data-column="6"]')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text !== '1#';
			});
		}).first().getAttribute('data-row').then(function(v){
			return element(by.css('[data-row="'+ v + '"]' + '[data-column="9"] ' + " " + '[src="content/image/viewdetail-icon.png"]')).click();

		}); 
	//	element(by.css('[name="R0_C9"] .col-md-4.name-icon-view-table>img')).click();
	};

	this.clickonGlassIcon = function (value) {
		browser.executeScript("arguments[0].click();",element(by.css('[data-row="'+ value +'"]' + '[data-column="9"]' + " " + '[src="content/image/viewdetail-icon.png"]')));
	};

	this.clickonDeleteIcon = function (value) {
		browser.executeScript("arguments[0].click();",element(by.css('[data-row="'+ value +'"]' + '[data-column="9"]' + " " + '[src="content/image/delete-icon.png"]')));
	};

	// this.clickOnOKOperation = function (){
	// 	browser.sleep(15000);
	// 	return browser.executeScript('return document.querySelector(\'[name="btnInfoDialogOk"]\').click();','');
	// };

	this.getAddButtonCaption = function () {
		return  element(by.css('[id="btn-author-note-add"]')).getText(); 
	};

	this.getImportButtonCaption = function () {
		return  element(by.css('[ng-click="import()"]')).getText(); 
	};

	this.getAllFiltersButtonCaption = function () {
		return  element(by.css('[id="btn-author-note-show-filter"]')).getText(); 
	};

	this.EnterValueinAuthorNotesContextTermFeild = function (Text) {
		element(by.css('[id="input-filter-author-note-context-term"]')).sendKeys(Text);
		element(by.css('[id="input-filter-author-note-context-term"]')).sendKeys(protractor.Key.ENTER);
	};

	this.getCountOfRows = function () {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function(c){
			return c;
		});
	};

	this.clickCloseButton = function (){
		_closeButton.click();
	};

	this.clickAddButton = function (){
		_AddButton.click();
	};
	this.addButtonAuthornote = function (){
		var el = element.all(by.css('[ng-click="AuthorNotesAddModalCtrl.addNewAuthorNote()"]'));
		//browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
		browser.sleep(5000);
		el.click();
		
	};

	this.clickUnitValue = function (value){
		_selectUnitvalue.get(value).click();
	};

	this.getUnitValue = function (value){
 		return _selectUnitvalue.get(value).getText();
	};

	this.clickSelectTerm = function (){
		_selectTerm.click();
	};

	this.selectContextIndex = function () {
		_selectContextIndex.click();
	};

	this.clickcontexindexcomBox = function (){
		_selectContextIndex.click();
	};

	this.selectSpecificContexIndex = function (value){
		_selectspecificcontentIndex.get(value).click();
	};


	this.clickContextindexHierarchyItem = function (){
		_ContextindexHierarchy.click();
	};

	this.clickSubContextindexHierarchyItem = function (){
		_subContextindexHierarchy.click();
	};

	this.clickAllcontextindextermcheckBox = function (){
		_contextindextermcheckBox.get(1).click();
	};

	this.clickonAddVisual = function (){
		_AddVisual.click();
	};

	this.enterTextinAuthorNote = function (){
		browser.executeScript("arguments[0].scrollIntoView();", _textinAuthorNote.getWebElement());
		//_textinAuthorNote.clear();
		_textinAuthorNote.sendKeys('Aut');
	};

	this.clickonFormatTab = function (){
		_FormatTab.click();
	};

	this.clickSaveButtoninNote = function (){
		//browser.executeScript("arguments[0].click();", _saveButtonNote.getWebElement());
		//_saveButtonNote.click();
		element(by.id('button-1027-btnEl')).click();
		
	};

	this.isSaveButtoninNotePopupDisplayed = function (){
		return _saveButtonNote.isDisplayed();
	};

	this.selectNote = function (){
		_selectTypeofNote.click();
	};

	this.clickTypeofNote = function (){
		_selectTypeofNote.click();
	};

	this.clicksaveButtonCreate = function (){
		browser.executeScript("arguments[0].scrollIntoView();", _saveButtonCreate.getWebElement());
		_saveButtonCreate.click();
	};

	this.clickSaveButtonEdit = function (){
		browser.executeScript("arguments[0].scrollIntoView();", _saveButtonEdit.getWebElement());
		browser.executeScript("arguments[0].click();", _saveButtonEdit.getWebElement());
		//_saveButtonEdit.click();
	};

	this.clickSaveDialog = function (){
		_saveDialog.click();
	};

	this.clickUnitValueOther = function (){
		_selectUnitvalueOther.click();
	};

	this.clickPropagate = function (){
		_propagate.click();
	};

	this.isAddBibilographylink = function (){
		return _addBibilography.isDisplayed();
	};

	this.clickAddBibilography = function (){
		//browser.executeScript("arguments[0].click();", _addBibilography);
		_addBibilography.click();
	};

	this.isPopUpDisplayed = function (){
		return _popupBibilography.isDisplayed();
	};

	this.selectCode = function(){
		return _code.click().then(function() {
			// return self.legistypevalue(code).click();
			return _selectValue.click();
		});
	};

	this.enterYear = function (year){
		return element(by.css('[id="year"]')).clear().then(function(){
			return element(by.css('[id="year"]')).sendKeys(year);
		});
	};

	this.enterNumber = function (no){
		return element(by.model('NMNBiblio')).clear().then(function(){
			return element(by.model('NMNBiblio')).sendKeys(no);
		});
	};

	this.enterText = function (){
		return element(by.model('NMTBiblio')).clear().then(function(){
			return element(by.model('NMTBiblio')).sendKeys('Autor');
		});
	};

	this.clickLensImage = function (){
		return _lensImage.click();
	};

	this.selectRow = function (value) {
		return _allCheckBoxes.get(value).click();
	};

	this.clickFristCheckbox = function () {
		return _fristcheckboxnote.click();
	};

	this.clickEditNote = function (){
		return _EditNote.click();
	};

	this.enterEditedNoteText = function (){
		browser.executeScript("arguments[0].click();", element(by.id('visible-e3')).getWebElement());
		browser.actions().sendKeys('Ed').perform();
		//element(by.id('visible-e1')).sendKeys('Edit Author');
		//browser.executeScript("arguments[0].sendKeys('Edit Author');", element(by.id('visible-e2')).getWebElement());
		
	};

	this.clearEditNoteText = function (){
		return element(by.css('[id="visible-e3"]')).click().clear();
	};

	this.isErrorPopupDisplayed = function () {
		browser.executeScript("arguments[0].scrollIntoView();", _errorPopup.getWebElement());
		return _errorPopup.isDisplayed();
	};

	this.clickonYesNoDropdown = function () {
		return _yesorNo.click();
	};

	this.isNoteTypeDisplayed = function() {
		return _noteType.isDisplayed();
	};

	this.isContextIndexTypeDisplayed = function() {
		return _contextIndexType.isDisplayed();
	};

	this.isNoteDisplayed = function() {
		return _note.isDisplayed();
	};

	this.isYesNoPropagationDisplayed = function() {
		return _yesNoPropagation.isDisplayed();
	};

	this.clickonNoContextIndex = function() {
		browser.executeScript("arguments[0].scrollIntoView();", _noContextIndex.getWebElement());
		return _noContextIndex.click();
	};

	this.isViewAllTableDisplayed = function() {
		return _tableDisplayed.isDisplayed();
	};

	this.isUnitColumnAvailable = function() {
		return _unitColumn.isDisplayed();
	};

	this.isVersionAvailable = function() {
		return _versionColumn.isDisplayed();
	};

	this.isActionColumnAvailable = function() {
		return _actionColumn.isDisplayed();
	};

	this.clickonContextIndex = function() {
		return _contextIndexLink.click();
	};

	this.clickonByType = function() {
		browser.executeScript("arguments[0].click();", _byType);
		//return _byType.click();
	};

	this.clickonEditXml = function() {
		return _editXml.click();
	};

	this.clickonXmlNotepopup = function() {
		return _xmlnotepopup.click();
	};

	this.enterXml = function (){
		var _el = browser.driver.findElements(by.css('.CodeMirror-line>span'));
		for(var i = 0;i<_el.length; ++i)
		{
			browser.actions().moveToElement(_el[i]).click().perform();
			browser.sleep(5000);
			browser.actions().sendKeys(protractor.Key.DELETE).perform();
			browser.sleep(15000);
		}
		
		browser.actions().sendKeys('<texto><parrafo>New Author Note</parrafo></texto>').perform();
		//return element(by.css('.CodeMirror-line>span')).clear();
		
	};

	this.clickAcceptinEditXml = function() {
		return _acceptXlmLink.click();
	};

	this.isElementSelectorDropdown = function() {
		return _elementSelectorDropdown.isDisplayed();
	};

	this.clickElementSelectorDropdown = function() {
		return _elementSelectorDropdown.click();
	};

	this.chooseValueFromSelector = function(value) {
		return _selectElementFromSelector.get(value).click();
	};

	this.clickCloseinEditXML = function() {
		return _closeEditXml.click();
	};

	this.selectElement = function () {
		return _selectElementType.click();
	};

	this.isDatePopupDisplayed = function() {
		return _datepopup.isDisplayed();
	};

	this.enterTextinDatePopup = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[1]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[1]/input')).sendKeys('Author Text');
		});
	};

	this.enterDateinDatepopup = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).sendKeys('01/02/2015');
		});
	};

	this.clickOKinDatepopup = function () {
		return _okindatepopup.click();
	};

	this.clickOKinEmentapopup = function () {
		return _okinementapopup.click();
	};

	this.isTextNotepopupAvailable = function() {
		return _textNotepopup.isDisplayed();
	};

	this.isEmentapopupAvailable = function() {
		return _ementapopup.isDisplayed();
	};

	this.enterTextFieldinTextNote = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[1]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[1]/input')).sendKeys('Text Author');
		});
	};

	this.enterOfficialinEmenta = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).sendKeys('Author Official');
		});
	};

	this.enterDocumentIDinTextNote = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[2]/input')).sendKeys('340152');
		});
	};

	this.enterOTextFieldinTextNote = function (){
		return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[3]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[5]/div/div/div/div[1]/div[2]/div[3]/input')).sendKeys('abc');
		});
	};

	this.enterIDField = function() {
		return _enterIDField.clear();
		return _enterIDField.sendKeys('123');
	};

	this.isNoteHeaderPopupAvailable = function() {
		return _noteHeader.isDisplayed();
	};

	this.isTabHeaderinNoteAvailable = function() {
		return _tabHeaderinNote.isDisplayed();
	};

	this.isNotepopupAvailable = function() {
		return _notePopup.isDisplayed();
	};

	this.clickUnitLevelButton = function (){
		return _unitLevel.click();
	};

	this.isUnitLevelpopupDisplayed = function() {
		return _unitLevelPopup.isDisplayed();
	};

	this.clickonVersioninUnitLevel = function (){
		return _versiononUnitLevel.click();
	};

	this.clickonoptioninVersionofUnitLevel = function (){
		return _optioninVersionofUnitLevel.click();
	};

	this.clickonUnitLevelDropdown = function (){
		return _unitLevelDropdown.click();
	};

	this.clickonOptionInUnitLevelDropdown = function (){
		return _optionInUnitLevel.click();
	};

	this.clickonSelectAllCheckbox = function (){
		return _selectAllCheckbox.click();
	};

	this.clickonXMLEditor = function (){
		return _XMLEditor.click();
	};

	this.clickonTextinDatePopup = function (){
		return _textinDatePopup.click();
	};

	this.clickDateinDatePopup = function (){
		return _dateinDatePopup.click();
	};
	this.clickContextindexHierarchyItemOther = function (){
		_contextindexHierarchyOther.click();
	};

	this.clickSubContextindexHierarchyItemOther = function (){
		_subContextindexHierarchyOther.click();
	};
	this.clickonDatePopup = function (){
		return _datepopupinAuthorNote.click();
	};

	this.clickonAddXML = function() {
		return _addXML.click();
	};

	this.clickonSearchXML = function() {
		return _searchXML.click();
	};

	this.clickonEmptySearchbutton=function(){
		return element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[7]/input')).sendKeys(protractor.Key.ENTER);
	};
	this.enterSearchKeywordinXML = function (){
		return element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[7]/input')).clear().then(function(){
			return element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[7]/input')).sendKeys('parra');
			return element(by.xpath('.//*[@id="body"]/div[3]/div/div/section/div[1]/xml-editor/div/div[1]/div/div[7]/input')).sendKeys(protractor.Key.ENTER);

		});
	};

	this.isSearchTextBoxAvailableinXML = function() {
		return _searchTextHighlight.isDisplayed();
	};

	this.isSearchTextHighlighted = function() {
		return _searchTextHighlight.isDisplayed();
	};

	this.clickDeleteYesButton = function() {
		browser.executeScript("arguments[0].click();", _massdeleteyesbutton.getWebElement());
		//return element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding')).click();
	};

	this.clickNextNavigation = function () {
	return _nextnavigation.click();
	};

	this.isNextNavigationEnabled = function () {
		return _nextnavigation.isEnabled();
	};

	this.isNextNavigationDisabled = function () {
		return _nextnavigation.getAttribute('disabled').then(function(value) {
			if(value==='true')
			return true;
			else
			return false;
			
		});
	};

	this.clickPreviousNavigation = function () {
		return _prevnavigation.click();
	};

	this.isPreviousNavigationEnabled = function () {
		return _prevnavigation.isEnabled();
	};

	this.isPreviousNavigationDisabled = function () {
		return _prevnavigation.getAttribute('disabled').then(function(value) {
			if(value==='true')
			return true;
			else
			return false;
			
		});
	};

	this.clickLastNavigation = function () {
		return _lastnavigation.click();
	};

	this.isLastNavigationEnabled = function () {
		return _lastnavigation.isEnabled();
	};

	this.clickFirstNavigation = function () {
		return _firstnavigation.click();
	};

	this.isFirstNavigationEnabled = function () {
		return _firstnavigation.isEnabled();
	};

	this.clickReplaceLink = function () {
		return _replacelink.click();
	};

	this.clickReplaceAllLink = function () {
		return _replacealllink.click();
	};

	this.enterReplaceKeywordinXML = function () {
	return _replacekeyowrdposition.clear();
		   _replacekeyowrdposition.sendKeys("</texto>").sendKeys(protractor.Key.ENTER);
	
	};

	this.enterReplacewithKeywordinXML = function () {
		return _replacekeyowrdposition.clear();
		_replacekeyowrdposition.sendKeys("modified</texto>").sendKeys(protractor.Key.ENTER);
 
	};

	this.expandall = function () {
        _expandall.click();
	};

	this.clickonChangeHistory = function () {
		_changehistory.click();
	};

	this.addAuthorNote = function () {
		_addauthornotebutton.click();
	};
};

module.exports = new authornotessection;