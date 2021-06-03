var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var LegislationPublicationSection = function () {
	
	this.expandableEdit = new ExpandableToggle('collapsed-publication-link', 'non-collapsed-publication-link');
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));
	var _firstpublicationName=element.all(by.css('div.col-md-8.right-label-height-grey.border-sides-detail-border-top.input-publication')).get(0);
	var _secondpublicationName=element.all(by.css('div.col-md-8.right-label-height-grey.border-sides-detail-border-top.input-publication')).get(1);
	var _subblockdateDeleteseries=element(by.id('publication.edit.section.deletePublicationDataSet.11')) ;
	var _addPublication= element(by.id('addPublication')); 
	var _addDateseries=element(by.css('[id="publication.edit.section.addNumberSeries0"]'));
	//to check the duplicate date
	var _addDuplicateDateseriesButton=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(0).all(by.repeater('dataSet in docPublication.dataSet')).get(1).element(by.id('publication.edit.section.addNumberSeries2'));
	var _addchangeDateseriesdate=element(by.id('publication.edit.section.date.00')).element(by.css('a[name="lnkSearchDropdown"]'));
	var _addDateseriesdate=element(by.css('[id="publication.edit.section.date.01"] input')); 
	var _addDuplicateDateseries=element(by.id('publication.edit.section.date.12')).element(by.css('a[name="lnkSearchDropdown"]'));
	var _addPublicationdate=element.all(by.css('li[ng-repeat="docPublication in publication.groupedBySameCodeCriteriaList"]')).get(1).element(by.css('li[ng-repeat="dataSet in docPublication.dataSet"]')) .element(by.id('publication.edit.section.date.10'));
	var _delteexistdate= element(by.id('publication.edit.section.deletePublicationDataSet.12'));
	//var _serchPublictionLink=element.all(by.css('li[ng-repeat="docPublication in publication.groupedBySameCodeCriteriaList"]')).get(1).element(by.id('publication.edit.section.description1'));
	var _serchPublictionLink=element(by.xpath(".//*[@id='publication.edit.section.description1']/div[1]/a"));
	//this element is requried for edition test case
	//var _changePublication=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(0).element(by.id('publication.edit.section.description0'));
	var _changePublication=element.all(by.css('div[model="docPublication.publicacion"]>div>a')).get(0);
	var _changeDateseriesdate=element(by.id('publication.edit.section.date.00')).element(by.css('a[name="lnkSearchDropdown"]')); 
	var _changefilterInput=element(by.css('div[id="publication.edit.section.description0"] input[ng-model="searchtext"]'));
	var _changefilterButton=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(0).all(by.css('button[ng-click="search($event)"]')).get(0);
	var _changefilterInputdate=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(0).element(by.repeater('dataSet in docPublication.dataSet')).element(by.model('searchtext'));
	var _changefilterdateButton= element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(0).element(by.repeater('dataSet in docPublication.dataSet')).element(by.css('button[ng-click="search($event)"]'));
	var _duplicationmessage=element(by.name('txtInfoDialog'));
	var _checkPublication=element(by.css('.class-title-secondary.ng-scope.ng-binding'));
	var _publicationDeleteButtons=element.all(by.css('.input-publication .button-delete'));
	var _dateseriesDateButtons= element.all(by.css('.col-md-8 right-label-height-50 border-sides-detail ng-scope .button-delete'));
	var _principal=element.all(by.css('[ng-show="docPublication.principal"]')).get(0);
	var _delteDateseries= element(by.css('[id="publication.edit.section.date.00"] button[ng-click="deleteItem()"]'));
	var _addpublicationText=element.all(by.css('div[onselect="publication.addPublicationTypes"]')).get(1);
//	var _filterInput=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.css('input[ng-keypress="searchOnEnter($event)"]')).get(0);
	var _filterInput=element(by.xpath(".//*[@id='publication.edit.section.description1']//input"));
	var _filterButton=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.css('button[ng-click="search($event)"]')).get(0);
//	var _filterInputdate= element.all(by.css('li[ng-repeat="docPublication in publication.groupedBySameCodeCriteriaList"]')).get(1).element(by.css('li[ng-repeat="dataSet in docPublication.dataSet"]')).element(by.css('input[ng-keypress="searchOnEnter($event)"]'));
	var _filterInputdate=element(by.xpath(".//*[@id='publication.edit.section.date.10']/div[1]/a"));
	var _filterdateButton=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).element(by.repeater('dataSet in docPublication.dataSet')).element(by.css('button[ng-click="search($event)"]'));
	//to add additional date series for the publication
	var _filterInputdateseries=element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.repeater('dataSet in docPublication.dataSet')).get(1).all(by.model('searchtext')).get(0);
	var _dateseriesItem1=element(by.css('[id="publication.edit.section.date.00"] a[name="lnkSearchDropdown"]'));
	var _dateseriesItem2= element(by.id('publication.edit.section.date.10')); 
	var _itemList= element.all(by.repeater('item in choices')); 
	var _publicationitemList=element(by.css('[id="publication.edit.section.description0"] a[name="lnkSearchDropdown"]'));
	var _publicationitemList2=element(by.css('[id="publication.edit.section.description1"] a[name="lnkSearchDropdown"]')); 
	//delete date series-duplicate date checking
	var _saveButton=element.all(by.id('btnSaveDocument')).get(1); 
	var _cancelSaveButton= element(by.css('button[name="btnConfirmationDialogCancel"]')); 
	var _exitButton=element(by.id('btnExitEditMode')); 
	var _confirmExitButton=element(by.css('button[name="btnConfirmationDialogAccept"]')); 
	var _okButton=element(by.css('button[name="btnInfoDialogOk"]')); 
	var _positionpage= element.all(by.binding('Publication.title.pageNumber')).get(0);
	var _datenumberseries= element.all(by.binding('Publication.title.series')).get(0);
	var _expandall=element(by.css('#collapse-all-collapsed-link>img'));
	var _editButton=element.all(by.id('btnGoToEditMode')).get(1);
	var _publicationlist=element.all(by.xpath(".//*[@id='publication.edit.section.description1']//a")).get(1);
	var _datenumberlist=element.all(by.xpath(".//*[@id='publication.edit.section.date.10']//a")).get(1);
	var _datenumberlink=element(by.xpath(".//*[@id='publication.edit.section.date.10']/div[1]/a"));
	var _editpublicationname=element.all(by.css('div[id="publication.edit.section.description0"]>div[name="dropdown-directive"] .ng-binding')).get(1);
	var _editdateseriesname=element.all(by.css('[onselect="publication.setDateNumberAndSeries"] a')).get(1);
	var _deleteexistingpublication=element(by.css('div[id="publication.edit.section.description0"]>div[ng-hide="hidebtndelete"]>span>button'))
	var _changepublicationfilter=element(by.css('div[id="publication.edit.section.description0"]>div[name="dropdown-directive"] input[ng-model="searchtext"]'));
	var _addDateseriesdatelink=element(by.css('[id="publication.edit.section.date.01"]>div[class="col-md-8"]>a'));
	var _selectdataseries=element.all(by.css('[id="publication.edit.section.date.01"] a')).get(1);
	var _firstpubname=element.all(by.css('[onload="publication.searchPublicationTypes"] a[name="lnkSearchDropdown"]')).get(0);
	var _secondpubname=element.all(by.css('[onload="publication.searchPublicationTypes"] a[name="lnkSearchDropdown"]')).get(1);
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
	this.clickFirstItemInPublicationList=function(){
		browser.executeScript("arguments[0].scrollIntoView();", _serchPublictionLink.getWebElement());
		browser.sleep(5000);
		_serchPublictionLink.click();
		browser.sleep(5000);
		_publicationlist.click();	
	}

	this.clickFirstItemInDateNumberList=function(){
		browser.executeScript("arguments[0].scrollIntoView();", _datenumberlink.getWebElement());
		browser.sleep(5000);
		_datenumberlink.click();
		browser.sleep(5000);
		_datenumberlist.click();	
	}
	this.expandall = function () {
		browser.executeScript("arguments[0].click();", _expandall.getWebElement());
		_expandall.click();
	};

	this.editbutton = function() {
		browser.executeScript("arguments[0].click();", _editButton.getWebElement());
		//_editButton.click();
	};

	this.valueInPublicationType = function(value) {
		var _pubname=element.all(by.css('[onload="publication.searchPublicationTypes"] a[name="lnkSearchDropdown"]')).get(value);
		browser.executeScript("arguments[0].scrollIntoView();", _pubname.getWebElement());
		return _pubname.getText().then(function(result){
			
			return result;
		},function(err){
			return null;
		});
	};

	this.dragAndDropFirstPublicationTypeToSecondPosition = function() {
		browser.sleep(500);
		browser.actions().mouseDown(_firstpubname).perform();
		browser.sleep(500);
		browser.actions().mouseMove(_secondpubname).perform();
		browser.sleep(500);
		browser.actions().mouseUp().perform();
		browser.sleep(1000);
		return element(by.id('publication.edit.section.description0')).isDisplayed();
	};

	this.deleteExistingPublication=function () {
			browser.executeScript("arguments[0].scrollIntoView();", _deleteexistingpublication.getWebElement());
				_deleteexistingpublication.click();
			}
	this.hascheckPublication=function () { 
		return _checkPublication.isDisplayed;
	};


	this.filterdateseriesButton= function () { 
		return element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.repeater('dataSet in docPublication.dataSet')).get(1).element(by.css('button[ng-click="search($event)"]')).get(0);
	};

	//to add duplicate date series for the same publication
	this.filterInputdupdateseries= function () {
		return element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.repeater('dataSet in docPublication.dataSet')).get(2).all(by.model('searchtext')).get(0);
	};

	this.filterdupdateseriesButton= function () {
		return element.all(by.repeater('docPublication in publication.groupedBySameCodeCriteriaList')).get(1).all(by.repeater('dataSet in docPublication.dataSet')).get(2).element(by.css('button[ng-click="search($event)"]')).get(0);
	};

	this.title=function () { 
		return browser.getTitle();
	};
	this.principal=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _principal.getWebElement());
		return _principal.getText();
	};

	this.positionpage=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _positionpage.getWebElement());
		return _positionpage.getText();
	};

	this.datenumberseries=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _datenumberseries.getWebElement());
		return _datenumberseries.getText();
	};

	this.hasduplicatemessage=function () {
		return _duplicationmessage.isDisplayed();
	};


	this.duplicatemessage=function () {
		return _duplicationmessage.getText();
	};

	this.scrollTo=function (webelement) {
		// There are some issues with the double scroll when trying to click some elements
		browser.executeScript("arguments[0].scrollIntoView();", webelement.getWebElement());
		//	browser.executeScript(function (element) { element.scrollIntoView();}, webelement.getWebElement());
	};
	this.hasaddpublication=function () {
		return _addPublication.isPresent();
	};

	this.haschangepublication=function () {
		return  _changePublication.isDisplayed();
	};

	this.hasdeleteDateseries=function () {
		return _delteDateseries.isPresent();
	};

	this.clickaddpublication=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _addPublication.getWebElement());
		//	scrollTo(_addPublication);
		return _addPublication.click();
	};

	this.clicklinkpublication=function () {
		scrollTo(_serchPubliction);
		return _serchPubliction.click();
	};
	//click on the Icon under publication which not principal one
	this.clickaddDateseries=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _addDateseries.getWebElement());
					return _addDateseries.click();
	};
	//click the on the ICon to check duplication of the data.
	this.clickaddDuplicateDateseries=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _addDuplicateDateseriesButton.getWebElement());
		return _addDuplicateDateseriesButton.click();
	};

	this.clicklinkpublicationdate=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _addPublicationdate.getWebElement());
		return _addPublicationdate.click();
	};

	this.clickOkButton=function () {
		return _okButton.click();
	};

	this.addnewPublication= function (value) {

		browser.executeScript("arguments[0].scrollIntoView();", _serchPublictionLink.getWebElement());
		// scrollTo(_serchPublictionLink);
		browser.sleep(10000);
		_serchPublictionLink.click();
		browser.sleep(10000);

		//	browser.executeScript("arguments[0].scrollIntoView();", _filterInput.getWebElement());
		//	scrollTo(_filterInput);				
		//_filterInput.sendKeys(value);                  
		//	_filterButton.click();                        
		//	_itemList.click();

	};
	this.addnewPublicationdate=function (value) {
		//_scrollTo(_addPublicationdate);
		browser.executeScript("arguments[0].scrollIntoView();", _addPublicationdate.getWebElement());
		_addPublicationdate.click();
		//_scrollTo(self.filterInputdate);
		browser.executeScript("arguments[0].scrollIntoView();", _filterInputdate.getWebElement());
		_filterInputdate.sendKeys(value);
		// _filterdateButton.click();
		//  _itemList.click();

	};

	this.changepublication=function (value) {
		browser.executeScript("arguments[0].scrollIntoView();", _changePublication.getWebElement());
		//	browser.driver.actions().mouseUp(_changePublication).perform();
		_changePublication.click();
		browser.executeScript("arguments[0].scrollIntoView();", _changefilterInput.getWebElement());
		//	browser.driver.actions().mouseUp(changefilterInput).perform();
		_changefilterInput.sendKeys(value);
		_changefilterButton.click();
		-itemList.click();

	};
	this.changepublicationNAme=function () {
		
			browser.executeScript("arguments[0].scrollIntoView();", _changePublication.getWebElement());
			_changePublication.click();
			browser.sleep(5000);
			browser.executeScript("arguments[0].scrollIntoView();", _editpublicationname.getWebElement());
			browser.sleep(5000);
			_editpublicationname.click();
			
	
		};
	this.addchangeDateseriesdate=function (value) {
		browser.executeScript("arguments[0].scrollIntoView();", _addchangeDateseriesdate.getWebElement());
		_addchangeDateseriesdate.click();
		browser.executeScript("arguments[0].scrollIntoView();", _changefilterInputdate.getWebElement());
		_changefilterInputdate.sendKeys(value);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.executeScript("arguments[0].scrollIntoView();", _editdateseriesname.getWebElement());
		browser.sleep(5000);
		_editdateseriesname.click();

	};

	this.changeDateseriesdate=function (value) {
		browser.executeScript("arguments[0].scrollIntoView();", _changeDateseriesdate.getWebElement());
		_changeDateseriesdate.click();
		browser.executeScript("arguments[0].scrollIntoView();", _changefilterInputdate.getWebElement());
		browser.driver.actions().mouseUp(_changefilterInputdate).perform();
		_changefilterInputdate.sendKeys(value);
		//_changefilterdateButton.click();
		//_itemList.click();

	};



	this.addDateseriesdate=function (value) {
		browser.executeScript("arguments[0].scrollIntoView();", _addDateseriesdatelink.getWebElement());
		_addDateseriesdatelink.click();
		browser.executeScript("arguments[0].scrollIntoView();", _addDateseriesdate.getWebElement());
		//_addDateseriesdate.sendKeys(value);
	//	browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.executeScript("arguments[0].scrollIntoView();", _selectdataseries.getWebElement());
		browser.sleep(5000);
	    _selectdataseries.click();

	};

	this.addDuplicateDateseriesdate=function (value) {
		_scrollTo(_addDuplicateDateseries);
		_addDuplicateDateseries.click();
		scrollTo(_filterInputdupdateseries);
		browser.driver.actions().mouseUp(self.filterInputdupdateseries).perform();
		_filterInputdupdateseries.sendKeys(value);
		_filterdupdateseriesButton.click();
		_.itemList.click();

	};

	this.clickfristpublicationDelete=function () {
		_fristpublicationDelete.click();
	};

	this.clicklastpublicationDelete=function () {
		_lastpublicationDelete.click();
	};

	this.hasremoveFirstPublication=function () {
		// From the element list, get the fist one
		var publication = _publicationDeleteButtons.first();
		// Call the inherited method.
		scrollTo(publication);
		// Perform the relevant action for the test
		return publication.isDisplayed();
	};

	this.removeFirstPublication=function () {
		// From the element list, get the fist one
		var publication = _publicationDeleteButtons.first();
		// Call the inherited method.
		scrollTo(publication);
		// Perform the relevant action for the test
		return publication.click();
	};

	this.removeLastPublication=function () {
		var publication = _publicationDeleteButtons.last();
		browser.executeScript("arguments[0].scrollIntoView();", publication.getWebElement());
		return publication.click();
	};


	this.hasremovePublication=function (publicationIndex) {
		var publication = _publicationDeleteButtons.get(publicationIndex);
		scrollTo(publication);
		return publication.isDisplayed();
	};

	this.removePublication=function (publicationIndex) {
		var publication = _publicationDeleteButtons.get(publicationIndex);
		scrollTo(publication);
		return publication.click();
	};

	this.removeLastSubblockDateSries=function () {
		scrollTo(_subblockdateDeleteseries);
		return _subblockdateDeleteseries.click();
	};

	this.haslastSubblockDateSries=function () {
		_scrollTo(_subblockdateDeleteseries);
		return _subblockdateDeleteseries.isDisplayed();
	};

	this.hasdelteDateseries=function () {
		return _delteDateseries.isPresent();
	};

	this.clickdelteDateseries=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _delteDateseries.getWebElement());
		return _delteDateseries.click();
	};

	this.isPublicationNamePesent=function () {
		return _changePublication.isPresent();
		};
	this.hasPublicationItem=function (itemName) {

		browser.executeScript("arguments[0].scrollIntoView();",_serchPublictionLink.getWebElement());
		return _serchPublictionLink.getText().then(function (listNames) {
			return listNames.indexOf(itemName) >= 0;
		})
	};

	this.changePublication=function(value)
		{
			browser.executeScript("arguments[0].scrollIntoView();", _changePublication.getWebElement());
			_changePublication.click();
			browser.sleep(5000);
			browser.executeScript("arguments[0].scrollIntoView();", _changepublicationfilter.getWebElement());
			_changepublicationfilter.sendKeys(value);
			browser.actions().sendKeys(protractor.Key.ENTER).perform();
			browser.executeScript("arguments[0].scrollIntoView();", _editpublicationname.getWebElement());
			browser.sleep(5000);
			_editpublicationname.click();
	
		}


	this.haschangePublicationItem=function (itemName) {
		browser.executeScript("arguments[0].scrollIntoView();", _changePublication.getWebElement());
		return _changePublication.getText().then( function(listNames){
			if(listNames===itemName) {
					return true;
			}else{
				return false;
			}
		})
	};

	this.isPublicationNameUpdated=function(item){
	return element(by.css('[id="publication.edit.section.description0"] a[name="lnkSearchDropdown"]')).getText().then(function(result){
		if(result===item){
			return true;
		}else{
			return false;
		}
		},function(error){
		return false;
		});
		};		
		
	this.hasDateseriesItem=function (item) {
		var _date=element(by.css('[id="publication.edit.section.date.10"] a[name="lnkSearchDropdown"]'));
		browser.executeScript("arguments[0].scrollIntoView();", _date.getWebElement());
		return _date.getText().then(function(result){
			if(result===item){
				return true;
				}else{
					return false;
				}
			});
	};	

	this.isDateSeriesUpdated=function(item){
		return element(by.css('[id="publication.edit.section.date.00"] a[name="lnkSearchDropdown"]')).getText().then(function(result){
					if(result===item){
						return true;
						}else{
							return false;
						}
					},function(error){
						return false;
					});
				};			
	this.haschangeDateseriesItem=function (itemName) {
		browser.executeScript("arguments[0].scrollIntoView();", _dateseriesItem1.getWebElement());
		return	_dateseriesItem1.getText().then(function (listNames) {
			if(listNames===itemName) 
			{
				return true;
			}else{
				return false;
			}
			});	
		
	};

	this.save=function () {
		browser.executeScript("arguments[0].scrollIntoView();", _saveButton.getWebElement());
		_saveButton.click();
	};

	this.exit=function () {
		_exitButton.click();
		_confirmExitButton.click();
	};


	this.ClickOk=function () {
		_okButton.click();
	};

	this.haspublicationItem1=function (itemName) {
		return	_publicationitemList.getText().then(function (listNames) {
			if(listNames===itemName) 
			{
				return true;
			}else{
				return false;
			}
			});
	};

	this.haspublicationItem2= function (itemName) {
		return	_publicationitemList2.getText().then(function (listNames) {
		if(listNames===itemName) 
		{
			return true;
		}else{
			return false;
		}
		});	
	};

	this.hasdateseriesItem1=function (itemName) {
		return	_dateseriesItem1.getText().then(function (listNames) {
			if(listNames===itemName) 
			{
				return true;
			}else{
				return false;
			}
		})
	};

	this.hasdateseriesItem2=function () {
		_dateseriesItem2.getText();
	};

	this.drangfristpublication=function () {
		_firstpublicationName.click();
	};

	this.getfristpublicationName=function () {
		_firstpublicationName.getText();
	};

	this.getsecondpublicationName=function () {
		
		_secondpublicationName.getText();
	};

	this.selectFirstPublication= function(data){
		element(by.css('[id="publication.edit.section.description0"] a[name="lnkSearchDropdown"]')).click();
		element(by.css('[id="publication.edit.section.description0"] input[ng-model="searchtext"]')).sendKeys(data);
		element(by.css('[id="publication.edit.section.description0"] input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
		element(by.cssContainingText('[id="publication.edit.section.description0"] [ng-click="select(item)"]',data)).click();
	};

	this.selectFirstDateNumberSeries= function(data){
		element(by.css('[id="publication.edit.section.date.00"] a[name="lnkSearchDropdown"]')).click();
		element(by.css('[id="publication.edit.section.date.00"] input[ng-model="searchtext"]')).sendKeys(data);
		element(by.css('[id="publication.edit.section.date.00"] input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
		element(by.cssContainingText('[id="publication.edit.section.date.00"] [ng-click="select(item)"]',data)).click();
	};

};

module.exports = new LegislationPublicationSection;