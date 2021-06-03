//var ExpandableToggle = require('../expandable-toggle.po.js');


var LegislationTopicSubtopicSection = function () {


	//this.expandable = new ExpandableToggle('collapsed-topic-link', 'non-collapsed-topic-link');
	var _clickOkButton = element(by.css('[ng-click="ok()"]'));
	var _clickCancelPopup = element.all(by.css('[ng-click="cancel()"]'));
	var _clickAcceptCare = element(by.css('[ng-click="changeAnalyst()"]'));
	var _firstCheckBox = element.all(by.model('$item.selected')).first();
	var _lastCheckBox = element.all(by.model('$item.selected')).last();
	var _lastCheckBox1 = element.all(by.model('$item.selected')).get(2);
	var _deleteButton = element(by.css('[ng-click="deleteSelected()"]'));
	var _getAnalystName = element.all(by.css('[ng-bind="$item.analystName"]')).first();
	var _getAnalystNamelast = element.all(by.css('[ng-bind="$item.analystName"]')).get(2);
	var _elementpresent = element(by.xpath('//div[@id="subtopicPanel"]//*[@class="termsCheckbox ng-pristine ng-valid"]'));
	var _addpopupbutton = element(by.css('[ng-click="TopicSubtopicAddModalCtrl.saveTopicSubtopic()"]'));
	var _expandButton = element(by.id('collapsed-topic-link'));
	//To search Add button present on ADD Topic/Subtopic page after click on Add link in threasaurus table
	var _addTopicSubtopicButton = element(by.id('btnSaveAdd'));

	var _checkaddbutton = element(by.id('btnSaveAdd'));

	//To search Add link in Thresaurus table
	var _addButton = element(by.css('[ng-click="topicSubtopic.add()"]'));
	var _clickminimize = element.all(by.css('[ng-click="modalCommonCtrl.minimize()"]')).get(1);


	//To search plusIcon present on ADD Topic/Subtopic page after click on Add link in threasaurus table
	var _plusIcon = element(by.css('[ng-click="TopicSubtopicAddModalCtrl.addTopicSubtopicTerm()"]'));


	var _geterrormessage = element(by.css('[ng-show="TopicSubtopicAddModalCtrl.subtopicSearchNoResults"]'));

	//To search ViewAllLink present on thesaurus section with zero record
	var _searchViewAllLinkZeroRecord = element(by.id('topicSubtopicViewAllLink'));

	//To search next button present in thesaurus table for viewing next page records
	var _nextButtonPage = element(by.css('[ng-click="next()"]'));

	//To search ViewAllLink present under thesaurus section with more than zero records
	//var _searchViewAllLink = element(by.css('[ng-click="topicSubtopic.viewTopicSubtopicDetailAll(1, null)"]'));
	var _closeButton = element(by.css('[ng-click="close()"]'));
	//var _selectall = element(by.xpath('//div[@id="topicSubtopicTableContainer"]//*[@class="wj-cell wj-header multi-select"]'));
	var _selectall = element(by.css('.wj-cell.wj-header.multi-select'));

	var _clicknext = element(by.css('[ng-click="next()"]'));

	var _clickback = element(by.css('[ng-click="previous()"]'));

	var _searchViewAllLink = element(by.id('topicSubtopicViewAllLink'));
	var _analystButton = element(by.css('div[name="R3var _C6"] .acceptCaRE-image-button'));

	// var _principalButton = element(by.css('div[name="R0var _C7"] .topic-principal-image-button'));
	var _firstprincipalButton = element.all(by.css('[ng-click="editPrincipal($item)"]')).first();
	var _clicksecondprincipal = element.all(by.css('[ng-click="editPrincipal($item)"]')).get(1);
	var _clickSavePopup = element(by.css('[ng-click="accept()"]'));
	var _principalButton = element(by.css('[ng-click="editPrincipal($item)"]'));
	var _savePrincipalButton = element(by.css('[ng-click="accept()"]'));
	var _okPrincipalButton = element(by.css('[ng-click="ok()"]'));
	var _sectors = element.all(by.repeater('term in TopicSubtopicAddModalCtrl.topics.list')).get(3).element(by.id('radio-button-topicsubtopic-3'));
	var _selectItem = element(by.model('term.selected'));


	//var _addSectorsButton:{get: function () {return element(by.css('#topic-subtopic-add-section > div > button > span'));

	var _addSectorsButton = element.all(by.repeater('term in TopicSubtopicAddModalCtrl.subtopics.list')).get(3).element(by.model('term.selected'));

	//login variables
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.buttonText('Login'));


	this.urlLoad = function (user, password) {

		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {
			if (result) {
				_loginUserName.sendKeys(user);
				_loginPassword.sendKeys(password);
				_loginButton.click();
			} else {

			}
		});
	};

	/*not using so commented

    var _scrollTo: {
		value: function (webelement) {
			// There are some issues with the double scroll when trying to click some elements
			browser.executeScript(function (element) { element.scrollIntoView(false);}, webelement.getWebElement());
		}
	},*/


	this.isExpanded = function () {
		//return _collapseButton.isPresent();
		return element(by.id('non-collapsed-topic-link')).isDisplayed();
		//return element(by.id('collapsed-topic-link')).isDisplayed();
	};

	this.expandSection = function () {
		_expandButton.click();
	};


	this.geterrormessage = function () {
		return _geterrormessage.getText();
	};


	//clicking minimize button again 

	this.clickOnMinimizeButtonAgain = function () {

		element.all(by.css('[ng-click="modalCommonCtrl.minimize()"]')).get(0).click();
	};

	//click on add button in the topic subtopic table
	this.clickOnAddButton = function () {

		element(by.css('[ng-click="addTopicSubtopic()"]'));
	};

	this.checkaddbutton = function () {
		return _checkaddbutton.isEnabled();
	};
	this.clickaddpopup = function () {
		return _elementpresent.click();
	};


	this.elementclick = function () {
		return _elementpresent.click();
	};
	this.elementpresent = function () {
		return _elementpresent.isPresent();
	};
	this.clickCancelPopup = function () {
		return _clickCancelPopup.click();
	};

	this.clickLastCheckBox1 = function () {
		return _lastCheckBox1.click();
	};

	this.getAnalystName = function () {
		return _getAnalystName.getText();

	};
	this.getAnalystNamelast = function () {
		return _getAnalystNamelast.getText();
	};

	this.clickDelete = function () {
		return _deleteButton.click();
	};

	this.displayDelete = function () {
		return _deleteButton.isDisplayed();
	};


	this.isDeleteButtonDisabled = function () {

		return _deleteButton.getAttribute('disabled').then(function (disabled) {

			if (disabled === 'true')
				return true;
			else
				return false;
		});
	};

	this.isDeleteButtonEnable = function () {
		return _deleteButton.isEnabled();

	};


	this.clickOkButton = function () {
		return _clickOkButton.click();
	};



	this.clickFirstCheckBox = function () {
		return _firstCheckBox.click();
	};


	this.clickAcceptCare = function () {
		return _clickAcceptCare.click();
	};


	this.clickLastCheckBox = function () {
		return _lastCheckBox.click();
	};

	this.clickAddButton = function () {

		var addButton = _addButton;
		browser.executeScript("arguments[0].scrollIntoView();", _addButton.getWebElement());
		return addButton.click();
	};

	this.clickAddTopicSubtopicButton = function () {
//		browser.actions().mouseDown(element(by.xpath("//*[@class='modal-header header-orange']")).mouseMove({x: 0, y: 20}).mouseUp().perform());
browser.actions().dragAndDrop(element(by.xpath("//*[@class='modal-header header-orange']")),{x: 0, y: -50}).mouseUp().perform();
		browser.executeScript("arguments[0].scrollIntoView();", _addTopicSubtopicButton.getWebElement());
		return _addTopicSubtopicButton.click();
	};


	// click on mercantil (otras cuestiones) checkbox 

	this.selectMercantilCheckbox = function () {

		element(by.model('term.selected')).click();
	};

	//clear the subtopic code entered in search box of subtopic by clicking on X button

	this.clearSearchOfTemplate = function () {

		element(by.css('[ng-click="TopicSubtopicAddModalCtrl.clearSearchesSubtopic()"]')).click();
	};



	this.clickAddmainpage = function () {
		return _addButton.click();
	};


	this.clickminimize = function () {
		return _clickminimize.click();
	};



	this.clickPlusIcon = function () {
		return _plusIcon.click();
	};


	this.displayAddButton = function () {
		return _addButton.isDisplayed();
	};



	this.isPresentSearchViewAllLinkZeroRecord = function () {
		return _searchViewAllLinkZeroRecord.isPresent();
	};



	this.clickNextButtonPage = function () {
		return _nextButtonPage.click();
	};

	this.dispalyNextButtonPage = function () {
		return _nextButtonPage.isDisplayed();
	};



	this.clickViewAllLink = function () {
		var viewAllLink = _searchViewAllLink;

		browser.executeScript("arguments[0].scrollIntoView();", _searchViewAllLink.getWebElement());
		return viewAllLink.click();
	};

	this.displayViewAllLink = function () {
		return _searchViewAllLink.isDisplayed();
	};




	this.clickAnalystButton = function () {
		var analystButton = _analystButton;

		// _scrollTo(analystButton)
		browser.executeScript("arguments[0].scrollIntoView();", _analystButton.getWebElement());

		return analystButton.click();
	};
	this.displayAnalystButton = function () {
		return _analystButton.isDisplayed();
	};



	this.clickfirstprincipal = function () {
		return _firstprincipalButton.click();

	};

	this.clicksecondprincipal = function () {
		return _clicksecondprincipal.click();
	};


	this.clickSavePopup = function () {
		return _clickSavePopup.click();

	};



	this.clickPrincipalButton = function () {

		return _principalButton.click();
	};

	/*  displayPrincipalButton: {
		  get: function () {
			  return  _principalButton.isDisplayed();
		  }
	  },
	  
	  */
	// clickPrincipalButton:{value: function (Value) { return element(by.css(Value)).click();     }},

	this.displayPrincipalButton = function (Value) {
		return element(by.css(Value)).isDisplayed();
	};

	this.clickSavePrincipalButton = function () {
		return _savePrincipalButton.click();
	};

	this.displaySavePrincipalButton = function () {
		return _savePrincipalButton.isDisplayed();
	};


	this.clickOkPrincipalButton = function () {
		return _okPrincipalButton.click();
	};

	this.displayOkPrincipalButton = function () {
		return _okPrincipalButton.isPresent();
	};


	this.clickSectors = function () {
		return _sectors.click();
	};

	this.displaySectors = function () {
		return _sectors.isPresent();
	};




	this.clickSelectedItem = function () {
		return _selectItem.click();
	};

	this.isVisibleSelectedItem = function () {
		return _selectItem.isPresent();
	};


	this.clickSectorAddButton = function () {
		return _addSectorsButton.click();
	};

	this.isVisibleAddButton = function () {
		return _addSectorsButton.isPresent();
	};

	this.getAddButtonCaption = function () {

		return element(by.css('[ng-click="addTopicSubtopic()"]')).getText();
	};

	this.getImportButtonCaption = function () {

		return element(by.css('[ng-click="import()"]')).getText();
	};

	this.getAllFiltersButtonCaption = function () {

		return element(by.css('[ng-click="showHideFilters()"]')).getText();
	};

	this.EnterValueinTopiccodeFeild = function (Text) {
		var self = this;
		element(by.css('[id="tcode"]')).sendKeys(Text);
		return element(by.css('[id="tcode"]')).sendKeys(protractor.Key.ENTER);
	};

	this.EnterValueinTopicFeild = function (Text) {
		var self = this;
		element(by.css('[id="topic"]')).sendKeys(Text);
		return element(by.css('[id="topic"]')).sendKeys(protractor.Key.ENTER);
	};

	this.EnterValueinSubtopicFeild = function (Text) {
		var self = this;

		element(by.css('[id="subtopic"]')).sendKeys(Text);
		return element(by.css('[id="subtopic"]')).sendKeys(protractor.Key.ENTER);
	};

	//clear the entered text in subtopic field
	this.clearSubtopicField = function () {
		element(by.css('[id="subtopic"]')).clear();
	};
	//select checkbox4

	this.selectCheckbox4 = function () {
		element.all(by.model('$item.selected')).get(3).click();
	};


	this.clearTcodeField = function () {
		return element(by.model('tcodeInput')).clear();
	};


	this.EnterValueinSearchTopiccode = function (Text) {
		element.all(by.css('[name="search-term"]')).get(0).clear();
		element.all(by.css('[name="search-term"]')).get(0).sendKeys(Text).sendKeys(protractor.Key.ENTER);
	};


	this.EnterValueinSearchSubTopiccode = function (Text) {

		// element.all(by.css('[name="search-term"]')).get(1).then(function(element){
		// 	element.sendKeys(Text);
		// 	return element.all(by.css('[name="search-term"]')).get(1).sendKeys(protractor.Key.ENTER);
		// });

		element.all(by.css('[name="search-term"]')).get(1).sendKeys(Text).sendKeys(protractor.Key.ENTER);
	};



	this.getCountOfRows = function () {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function (c) {
			return c;
		});
	};


	this.clickCloseButton = function () {
		return _closeButton.click();
	};

	this.clickshowFilter = function () {
		//return element(by.css('[ng-show="!show"]')).click();
		//return element(by.css('[ng-click="next()"]')).click().then(function(){
		return element(by.css('[ng-show="!show"]')).click();
		//});
		//return browser.executeScript('return arguments[0].click();',element(by.css('[ng-show="!show"]')));
		//return browser.actions().click(element(by.css('[ng-show="!show"]'))).perform();
	};


	this.selectall = function () {
		return _selectall.click();
	};



	this.clicknext = function () {
		return _clicknext.click();
	};


	this.clickback = function () {
		return _clickback.click();
	};

	this.clickOnShowFilters = function () {
		var showFilter = element(by.xpath("//button[contains(text(),'Show Filters')]"));
		showFilter.click();
	};

	this.clickOnFilterAndSelectPrinciple = function (value) {

		return element(by.xpath("//select[@id='principal']")).click().then(function (ele) {
			if (value == 'Y' || value == 'Yes') {
				element(by.xpath("//option[text()='Yes']")).click();
				return ele;
			}
			else if (value == 'N' || value == 'No') {
				element(by.xpath("//option[text()='No']")).click();
				return ele;
			}
		});
	};

	this.isAddWindowDisplayed = function () {
		var window = element(by.xpath("//*[@class='content-main ng-scope']"));
		return window.isDisplayed().then(function (ele) {
			if (ele) {
				return true;
			}
			else { return false; }

		}, function (error) {
			console.log("Error in isAddWindowDisplayed: " + error)
			return false;
		});
	};

	this.addMultipleTopicSubtopic = function (numberOfTerms) {
		var select = element.all(by.xpath("//input[contains(@class,'termsCheckbox')]"));
		for (var i = 0; i < numberOfTerms; i++) {

			select.get(i).click();

		}
	}

};

module.exports = new LegislationTopicSubtopicSection; 