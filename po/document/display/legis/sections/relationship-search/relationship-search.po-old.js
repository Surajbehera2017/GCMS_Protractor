var relationshipsearchpage = function() {

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

	this.get = function(){
		return browser.get('static/gcms-ui/index.html#/consolidation/search');
	};

	this.isRelationshipSearchPagePresent= function(){
		element(by.css('.amending-form.search-form')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isRelationshipSearchPagePresent");
			return false;
		});
	};

	this.clickMarginalDropdown= function(){
		element.all(by.css('.dropdown-toggle.nav-dropdown')).get(3).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickMarginalDropdown");
			return false;
		});
	};

	this.clickSearchMarginal= function(){
		element.all(by.css('[ng-click="search($event)"]')).get(4).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickSearchMarginal");
			return false;
		});
	};

	this.sendMarginal = function(marginal_id) {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys(marginal_id);
	};

	this.sendYear = function(marginal_year) {
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).get(0).clear();
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).get(0).sendKeys(marginal_year);
	};

	this.sendNumber = function(marginal_number) {
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber" ]')).get(0).clear();
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber"] ')).get(0).sendKeys(marginal_number);
	};

	this.clickSearchButtonRelationship = function(){
		element(by.css('[ng-click="searchConsolidationCtrl.search()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickSearchButtonRelationship");
			return false;
		});
	};

	this.isRelationshipTablePresent= function(){
		element(by.css('.table.table-hover.data-grid>tbody')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isRelationshipTablePresent");
			return false;
		});
	};

	this.clickCheckBoxRelationshipTable = function(){
		element(by.css('.common-checkbox.cursor-pointer')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCheckBoxRelationshipTable");
			return false;
		});

	};

	this.clickCheckBoxRelationshipTableThirdRow = function(){
		element.all(by.css('.common-checkbox.cursor-pointer')).get(2).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCheckBoxRelationshipTableThirdRow");
			return false;
		});

	};

	this.clickSourceBox = function(){
		element(by.css('.sourceMargCell>div')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickSourceBox");
			return false;
		});
	};

	this.clickEyeIcon = function(){
		element(by.css('[ng-click="searchResults.viewDetailDocument(item.marginalAmending, true)"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEyeIcon");
			return false;
		});

	};

	this.isEyeIconPopUpDisplayed= function(){
		element(by.css('.content-main.ng-scope')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isEyeIconPopUpDisplayed");
			return false;
		});
	};

	this.verifyNonconsolidated= function(){
		return element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(0).isSelected().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in verifyNonconsolidated");
			return false;
		});

	};

	this.verifyconsolidated= function(){
		return element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(1).isSelected().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in verifyconsolidated");
			return false;
		});

	};

	this.verifyDiscarded= function(){
		return element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(2).isSelected().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in verifyDiscarded");
			return false;
		});

	};

	this.clickCheckBoxNonConso = function(){
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(0).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCheckBoxNonConso");
			return false;
		});

	};

	this.clickCheckBoxConso = function(){
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(1).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCheckBoxConso");
			return false;
		});

	};

	this.clickCheckBoxDiscarded = function(){
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(2).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCheckBoxDiscarded");
			return false;
		});

	};

	this.sendMarginalLEG = function(marginal_leg) {
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys(marginal_leg);
	};

	this.sendYear1 = function(marginal_year1) {
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).get(0).clear();
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).get(0).sendKeys(marginal_year1);
	};

	this.sendNumber1 = function(marginal_number1) {
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber" ]')).get(0).clear();
		element.all(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber"] ')).get(0).sendKeys(marginal_number1);
	};

	
	this.isMarginalNumberPresent= function(){
		element(by.css('.sourceMargCell>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isMarginalNumberPresent");
			return false;
		});

	};

	this.isUnitPresent= function(){
		element(by.css('th:nth-of-type(3)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isUnitPresent");
			return false;
		});

	};

	this.isLevelPresent= function(){
		element(by.css('th:nth-of-type(4)>div>span')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isLevelPresent");
			return false;
		});

	};

	this.isRelacionTabPresent= function(){
		element(by.css('th:nth-of-type(6)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isRelacionTabPresent");
			return false;
		});

	};

	this.isMarginalNumberTargetPresent= function(){
		element(by.css('tbody>tr:nth-of-type(1)>td:nth-of-type(10)>div>span:nth-of-type(1)')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isMarginalNumberTargetPresent");
			return false;
		});

	};

	this.isUnitTargetPresent= function(){
		element(by.css('th:nth-of-type(11)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isUnitTargetPresent");
			return false;
		});

	};

	this.isLevelTargetPresent= function(){
		element(by.css('th:nth-of-type(12)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isLevelTargetPresent");
			return false;
		});

	};

	this.isNewUnitTargetPresent= function(){
		element(by.css('th:nth-of-type(15)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isNewUnitTargetPresent");
			return false;
		});

	};

	this.isNewLevelTargetPresent= function(){
		element(by.css('th:nth-of-type(16)>div>span')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isNewLevelTargetPresent");
			return false;
		});

	};

	this.clickClearAllButton = function(){
		element(by.css('[ng-click="searchConsolidationCtrl.resetModel()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickClearAllButton");
			return false;
		});

	};

	this.isActionColumnPresent= function(){
		element(by.css('th:nth-of-type(18)>div')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isActionColumnPresent");
			return false;
		});

	};

	this.clickActionButtonFirstRow = function(){
		element(by.css('[ng-click="searchResults.consolidationForm([item.idRela], item)"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickActionButtonFirstRow");
			return false;
		});

	};

	this.isActionPopupDisplayed= function(){
		element(by.css('.modal-content')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isActionPopupDisplayed");
			return false;
		});

	};

	this.clickAcceptButton = function(){
		element(by.css('[ng-click="ok()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickAcceptButton");
			return false;
		});

	};

	this.isSourcePanelPresent= function(){
		element(by.css('.panel-left-relas.width-36p.height-320')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isSourcePanelPresent");
			return false;
		});

	};

	this.isTargetPanelPresent= function(){
		element(by.css('#panel3')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isTargetPanelPresent");
			return false;
		});

	};

	this.isConsolidateFormPresent= function(){
		element(by.css('.header-orange-display')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isConsolidateFormPresent");
			return false;
		});

	};

	this.clearUnitTargetPanel = function(){
		element(by.css('div[name="precu-dest"]>dynamic-dropdown-ctx>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clearUnitTargetPanel");
			return false;
		});

	};

	this.clearUnitTargetPanel = function(){
		element(by.css('div[name="precp-dest"]>dynamic-dropdown-ctx>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clearUnitTargetPanel");
			return false;
		});

	};

	this.isRefreshButtonPresent= function(){
		element.all(by.css('.btn.btn-default.lg-icon.bento-icon-refresh.ng-scope')).get(0).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isRefreshButtonPresent");
			return false;
		});

	};

	this.clickRefreshButton= function(){
		element.all(by.css('.btn.btn-default.lg-icon.bento-icon-refresh.ng-scope')).get(0).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickRefreshButton");
			return false;
		});

	};

	this.clickCancelButtonConsolidateForm= function(){
		element.all(by.css('.btn.white-button.btn-default.btn-header.btn-padding.ng-scope.ng-binding')).get(0).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickCancelButtonConsolidateForm");
			return false;
		});

	};

	this.clickActionButtonThirdRow = function(){
		element.all(by.css('[ng-click="searchResults.consolidationForm([item.idRela], item)"]')).get(2).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickActionButtonThirdRow");
			return false;
		});

	};

	this.clickEditXMLSource = function(){
		element(by.css('[ng-click="formConsolidationCtrl.setSourceXmlEditMode()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEditXMLSource");
			return false;
		});

	};

	this.isXMLFieldPresent= function(){
		element(by.css('div div #consolidationSource div div div div div xml-editor div div div div div div div div div div pre span')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isXMLFieldPresent");
			return false;
		});

	};

	this.clickEditXMLTarget = function(){
		element(by.css('[ng-click="formConsolidationCtrl.setTargetXmlEditMode()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEditXMLTarget");
			return false;
		});

	};

	this.isXMLTargetFieldPresent= function(){
		element(by.css('div #consolidation-form-container div div #consolidationTarget div div div.tab-content div.tab-pane.ng-scope.active')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isXMLTargetFieldPresent");
			return false;
		});

	};

	this.clickEditVisualSource = function(){
		element(by.css('[ng-click="formConsolidationCtrl.setSourceVisualEditMode()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEditVisualSource");
			return false;
		});

	};

	this.isXeditorFieldPresent= function(){
		element(by.id('visible-e2')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isXeditorFieldPresent");
			return false;
		});

	};

	this.isJurisdictionDropdownPresent= function(){
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isJurisdictionDropdownPresent");
			return false;
		});

	};

	this.clickJurisDropdown = function(){
		element.all(by.css('.dropdown-toggle.nav-dropdown')).get(0).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickJurisDropdown");
			return false;
		});

	};

	this.clickJurisOptionDropdown = function(){
		element.all(by.css('[ng-click="doSelect(item)"]')).get(6).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickJurisOptionDropdown");
			return false;
		});

	};

	this.sendJurisSearchWord = function(juris_word) {
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).click();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).sendKeys(juris_word);
	};

	this.isJurisSuggestionPresent= function(){
		element(by.id('typeahead-38B-3012')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isJurisSuggestionPresent");
			return false;
		});

	};

	this.sendJurisSearchWordSecond = function(juris_second) {
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).click();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).sendKeys(juris_second);
	};

	this.sendJurisSearchWordThirdKey = function(juris_third) {
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).click();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).sendKeys(juris_third);
	};


	this.clickEstatalDropdownOption = function(){
		element.all(by.css('.ng-scope.ng-binding')).get(4).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEstatalDropdownOption");
			return false;
		});

	};

	this.getTextofJurisEsta = function(){
		return element.all(by.model('model[property]')).get(0).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofJurisEsta");
			return false;
		});

	};

	this.tabJurisDropdown= function(){
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).sendKeys(protractor.Key.TAB);
	};

	this.sendJurisSearchWordFourthKey = function(juris_fourth) {
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).click();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear();
		element(by.css('div[name="searchConsolidationCtrl.form"]>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="model[property]"]')).sendKeys(juris_fourth);
	};

	this.sendPublicationKeywordSecond = function(publication_second) {
		element.all(by.model('searchvalue')).get(1).click();
		element.all(by.model('searchvalue')).get(1).clear();
		element.all(by.model('searchvalue')).get(1).sendKeys(publication_second);
	};

	this.isPublicationFieldPresent = function(){
		element(by.css('div:nth-of-type(15)>div:nth-of-type(2)>typeahead-dropdown>div:nth-of-type(1)>input[ng-model="searchvalue"]')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isPublicationFieldPresent");
			return false;
		});

	};

	this.sendPublicationKeyword = function(publication_first) {
		element.all(by.model('searchvalue')).get(1).click();
		element.all(by.model('searchvalue')).get(1).clear();
		element.all(by.model('searchvalue')).get(1).sendKeys(publication_first);
	};

	this.isPublicationSuggestionPresent = function(){
		element(by.id('typeahead-00P-3379')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isPublicationSuggestionPresent");
			return false;
		});

	};

	this.sendPublicationKeywordThird = function(publication_third) {

		element.all(by.model('searchvalue')).get(1).click();
		element.all(by.model('searchvalue')).get(1).clear();
		element.all(by.model('searchvalue')).get(1).sendKeys(publication_third);
	};

	this.enterPublicationKeywordThird= function(){
		element.all(by.model('searchvalue')).get(1).sendKeys(protractor.Key.ENTER);
	};

	this.isPublicationAddedTabPresent = function(){
		element(by.css('div:nth-of-type(8)>div>span:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isPublicationAddedTabPresent");
			return false;
		});

	};

	this.getTextofAddedPublication = function(){
		return element(by.css('div:nth-of-type(8)>div>span:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)')).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofAddedPublication");
			return false;
		});

	};

	// Push

	this.isProductWorkbenchPresent = function(){
		element.all(by.css('[ng-show="!multiple"]')).get(2).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isProductWorkbenchPresent");
			return false;
		});

	};

	this.clickProductWorkbenchDropdown = function(){
		element.all(by.css('.padding-none-important.btn.btn-icon.pull-right')).get(3).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickProductWorkbenchDropdown");
			return false;
		});

	};

	this.sendKeystoProductWorkbench = function(product_first) {

		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).clear();
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys(product_first);
	};

	this.enterProductWorkbench= function(){
		element(by.css('.form-control.ng-pristine.ng-valid.has-focus')).sendKeys(protractor.Key.ENTER);
	};

	this.clickSearchProductWorkbench= function(){
		element.all(by.css('[ng-click="search($event)"]')).get(3).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickSearchProductWorkbench");
			return false;
		});

	};



	this.getTextofProductWorkbench = function(){
		element.all(by.css('[ng-show="!multiple"]')).get(2).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofProductWorkbench");
			return false;
		});

	};

	this.sendKeyProductWorkbenchSecond = function(product_second) {

		element.all(by.css('[ng-show="!multiple"]')).get(2).clear();
		element.all(by.css('[ng-show="!multiple"]')).get(2).sendKeys(product_second);
	};

	this.isProductworkbenchSuggestionPresent = function(){
		element.all(by.css('.ng-scope.ng-binding')).get(4).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isProductworkbenchSuggestionPresent");
			return false;
		});

	};

	this.sendKeyProductWorkbenchThird = function(product_third) {

		element.all(by.css('[ng-show="!multiple"]')).get(2).clear();
		element.all(by.css('[ng-show="!multiple"]')).get(2).sendKeys(product_third);
		element.all(by.css('[ng-show="!multiple"]')).get(2).sendKeys(protractor.Key.ENTER);
	};

	this.enterProductWorkBenchField= function(){
		element(by.xpath('.//*[@id="panel-section-container"]/div[2]/div[3]/div[3]/div[2]/typeahead-dropdown/div/input[1]')).sendKeys(protractor.Key.ENTER);
	};

	this.isAbbrevationFieldPresent = function(){
		element.all(by.model('model[property]')).get(5).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isAbbrevationFieldPresent");
			return false;
		});

	};

	this.clickAbbreviationDropdown = function(){
		element.all(by.css('.dropdown-toggle.nav-dropdown')).get(4).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickAbbreviationDropdown");
			return false;
		});

	};

	this.sendKeyAbbreveiation = function(abbreviation_id) {

		element.all(by.model('searchtext')).get(5).clear();
		element.all(by.model('searchtext')).get(5).sendKeys(abbreviation_id);
		element.all(by.model('searchtext')).get(5).sendKeys(protractor.Key.ENTER);
	};

	this.clickSearchButtonAbbreveiation = function(){
		element.all(by.css('[ng-click="search($event)"]')).get(5).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickSearchButtonAbbreveiation");
			return false;
		});

	};

	this.getTextofAbbrrevationField = function(){
		return element.all(by.model('model[property]')).get(5).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofAbbrrevationField");
			return false;
		});

	};

	this.sendKeyAbbreveiationFirst = function(abbreviation_first) {

		element.all(by.model('searchtext')).get(5).clear();
		element.all(by.model('searchtext')).get(5).sendKeys(abbreviation_first);
	};

	this.isAbbreveiationSuggestionPresent = function(){
		element(by.id('typeahead-018-5568')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isAbbreveiationSuggestionPresent");
			return false;
		});

	};

	this.sendKeyAbbreveiationSecond = function(abbreviation_second) {

		element.all(by.model('searchtext')).get(5).clear();
		element.all(by.model('searchtext')).get(5).sendKeys(abbreviation_second);
	};

	this.isAbbreveiationSuggestionPresentSecond = function(){
		element(by.id('typeahead-01B-4033')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isAbbreveiationSuggestionPresentSecond");
			return false;
		});

	};

	this.sendKeyAbbreveiationThird = function(abbreviation_third) {

		element.all(by.model('searchtext')).get(5).clear();
		element.all(by.model('searchtext')).get(5).sendKeys(abbreviation_third);
		element.all(by.model('searchtext')).get(5).sendKeys(protractor.Key.ENTER);
	};

	this.enterAbbreviationfield= function(){
		element(by.xpath('.//*[@id="panel-section-container"]/div[2]/div[3]/div[6]/div[2]/typeahead-dropdown/div/input[1]')).sendKeys(protractor.Key.ENTER);
	};

	this.isMarginalFieldPresent = function(){
		element.all(by.model('model[property]')).get(4).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isMarginalFieldPresent");
			return false;
		});

	};

	this.sendKeysMarginalField = function(marginal_key) {

		element.all(by.model('model[property]')).get(4).clear();
		element.all(by.model('model[property]')).get(4).sendKeys(marginal_key);
	};

	// Move

	this.sendKeysMarginalFirst = function(marginal_first) {

		element.all(by.model('model[property]')).get(4).clear();
		element.all(by.model('model[property]')).get(4).sendKeys(marginal_first);
	};

	this.isMarginalSuggestionPresent = function(){
		element(by.id('typeahead-01D-8504')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isMarginalSuggestionPresent");
			return false;
		});

	};

	this.sendKeysMarginalSecond = function(marginal_second) {

		element.all(by.model('model[property]')).get(4).clear();
		element.all(by.model('model[property]')).get(4).sendKeys(marginal_second);
	};

	this.isMarginalSuggestionPresentSecond = function(){
		element(by.id('typeahead-014-8785')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isMarginalSuggestionPresentSecond");
			return false;
		});

	};

	this.sendKeysMarginalThird = function(marginal_third) {

		element.all(by.model('model[property]')).get(4).clear();
		element.all(by.model('model[property]')).get(4).sendKeys(marginal_third);
		element.all(by.model('model[property]')).get(4).sendKeys(protractor.Key.ENTER);

	};



	this.getTextofMarginalField = function(){
		return element.all(by.model('model[property]')).get(4).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofMarginalField");
			return false;
		});

	};

	this.isWarningSymbolDisplayed=function(sourceUnit){

		return element.all(by.css('.table.table-hover.data-grid>tbody>tr')).each(function(rowElement, index) {
			return rowElement.all(protractor.By.tagName('.table.table-hover.data-grid>tbody>tr>td.sourceMargCell span.ng-binding')).get(0).getText().then(function(text) {
				if(text === sourceUnit){
					return rowElement.all(protractor.By.tagName('td.consolidation-error span.gcms2-notification.ng-scope')).get(0).isPresent().then(function(displayed) {
						return displayed;
					},
					function(error){
					});
				}
				//return false; 
			},
			function(error){
			});

			//return false; 
		},
		function(error){
		});
		//return false;
	};

	this.isWarningDisplayed = function(){
		element.all(by.css('.table.table-hover.data-grid>tbody>tr>td.consolidation-error span.gcms2-notification.ng-scope')).get(2).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isWarningDisplayed");
			return false;
		});

	};

	this.sendYearSecond = function(marginal_year_second) {
		element(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).clear();
		element(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromYear"]')).sendKeys(marginal_year_second);
	};

	this.sendNumberSecond = function(marginal_number_second) {
		element(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber" ]')).clear();
		element(by.css('[ng-model="searchConsolidationCtrl.searchModel.amended.marginalFromNumber" ]')).sendKeys(marginal_number_second);
	};

	this.isWarningDisplayedSecond = function(){
		element(by.css('.table.table-hover.data-grid>tbody>tr>td.consolidation-error span.gcms2-notification.ng-scope')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isWarningDisplayedSecond");
			return false;
		});

	};

	this.isWarningDisplayedThird = function(){
		element.all(by.css('.table.table-hover.data-grid>tbody>tr>td.consolidation-error span.gcms2-notification.ng-scope')).get(3).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isWarningDisplayedThird");
			return false;
		});

	};

	this.clearPartTargetPanel = function(){
		element(by.css('div[name="precp-dest"]>dynamic-dropdown-ctx>div:nth-of-type(1)>input[ng-model="model[property]"]')).clear().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clearPartTargetPanel");
			return false;
		});
	};

	this.isItemPresentInTable = function(position){
		return element.all(by.model('item.selected')).get(position).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isItemPresentInTable");
			return false;
		});
	};

	this.clickCheckboxByPosition = function(position){
		element.all(by.model('item.selected')).get(position).isDisplayed().then(function(present){
			//Normal click is sometimes not working. Hence added javascript click	 
			browser.executeScript("arguments[0].click();", element.all(by.model('item.selected')).get(position).getWebElement());
		},
		function(error){
			console.log("Error in clickCheckboxByPosition");
		});
	};

	this.clickDeleteButtonInHeader = function(){
		element(by.css('[ng-click="searchResults.deleteRelationships()"]')).click().then(function(present){
		},
		function(error){
			console.log("Error in clickDeleteButtonInHeader");
		});
	};

	this.clickYesInConfirmationPopUp = function(){
		element(by.css('[name="btnConfirmationDialogAccept"]')).click().then(function(present){
		},
		function(error){
			console.log("Error in clickYesInConfirmationPopUp");
		});
	};

	this.isAcceptConfirmationPopUpDisplayed = function(){
		return element(by.css('[name="btnConfirmationDialogAccept"]')).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			return false;
			console.log("Error in isAcceptConfirmationPopUpDisplayed");
		});
	};

	this.openRelationshipStartDatePicker = function(){
		element.all(by.css('.relationship-form [ng-click="open($event)"]')).get(0).click().then(function(present){
		},
		function(error){
			console.log("Error in openRelationshipStartDatePicker");
		});
	};

	this.openRelationshipEndDatePicker = function(){
		element.all(by.css('.relationship-form [ng-click="open($event)"]')).get(1).click().then(function(present){
		},
		function(error){
			console.log("Error in openRelationshipEndDatePicker");
		});
	};

	this.clickTodaysDateFromRelationshipStartDateCalendar = function(){
		element.all(by.css('.relationship-form button.btn.btn-default.btn-sm.active')).get(0).click().then(function(present){
        },
		function(error){
			console.log("Error in clickTodaysDateFromRelationshipEndDateCalendar");
		});
	};

	this.clickViewMoreDotsImageAtPosition = function(position){
		element.all(by.css('.gcms2-more')).get(position).isDisplayed().then(function(present){
			//Normal click is sometimes not working. Hence added javascript click	 
			browser.executeScript("arguments[0].click();", element.all(by.css('.gcms2-more')).get(position).getWebElement());
		},
		function(error){
			console.log("Error in clickViewMoreDotsImageAtPosition");
		});
	};

	this.clickDeleteItemAtPosition = function(position){
		element.all(by.css('[ng-click="searchResults.deleteRelationships([item.idRela])"]')).get(position).isDisplayed().then(function(present){
			//Normal click is sometimes not working. Hence added javascript click	 
			browser.executeScript("arguments[0].click();", element.all(by.css('[ng-click="searchResults.deleteRelationships([item.idRela])"]')).get(position).getWebElement());
		},
		function(error){
			console.log("Error in clickDeleteItemAtPosition");
		});
	};

	this.clickFirstAbbrevationOption = function(){
		element.all(by.css('[ng-click="doSelect(item)"]')).get(0).click().then(function(present){
			
		},
		function(error){
			console.log("Error in clickFirstAbbrevationOption");
			return false;
		});

	};

	this.clickConsolidateButtonInHeader = function(){
		element(by.css('[ng-click="searchResults.multipleConsolidations()"]')).click().then(function(present){
		},
		function(error){
			console.log("Error in clickConsolidateButtonInHeader");
		});
	};

	this.isSourceSummaryDocDisplayedInConsolidationForm = function(){
		return element(by.css('#consolidationSource [ng-bind="DocSummaryCtrl.summary.marginal.numeroMarginal"]')).isDisplayed().then(function(present){
			return present;
		},
		function(error){
			return false;
			console.log("Error in isSourceSummaryDocDisplayedInConsolidationForm");
		});
	};

	this.clickCancelInConsolidationForm = function(){
		var elCss = '[ng-show="formConsolidationCtrl.visibleTopPanel"] [ng-click="formConsolidationCtrl.cancelConsolidation()"]';
		element(by.css(elCss)).click().then(function(){
		},
		function(error){
			console.log("Error in clickCancelInConsolidationForm");
		});
	};

	this.isPaginationPresentRelationSearch = function(){
		return element(by.css('[class="table-pagination ng-isolate-scope"] [class="ng-binding"]')).isPresent().then(function(present){
			return present;
		},
		function(error){
			return false;
			console.log("Error in isPaginationPresentRelationSearch");
		});
	};

	this.getTextofPaginationResultRelationSearch = function(){
		return element(by.css('[class="table-pagination ng-isolate-scope"] [class="ng-binding"]')).getText().then(function(text){
			return text;
		},
		function(error){
			return false;
			console.log("Error in getTextofPaginationResultRelationSearch");
		});
	};

	this.clickBackButtonRelationshipSearch = function(){
		element.all(by.css('[ng-click="back()"]')).click().then(function(present){
			
		},
		function(error){
			console.log("Error in clickBackButtonRelationshipSearch");
			return false;
		});

	};


};

module.exports = new relationshipsearchpage();