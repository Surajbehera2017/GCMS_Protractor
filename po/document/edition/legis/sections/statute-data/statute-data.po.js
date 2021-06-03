var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var params = browser.params;


var LegislationStatuteDataSection = function () {

	/*********************/
	//this function takes id property as input and returns the text of the particular element
	this.getTextFieldIdProperty = function (idProperty) {

		return element.all(by.xpath("//*[@id='"+idProperty+"']//a")).get(0).getText();

	}

	//this function takes id property as input and returns the text of the particular element
	this.isFieldDisplayedUsingId = function (idProperty) {
		return element.all(by.xpath("//*[@id='" + idProperty + "']")).get(0).isDisplayed();
	}

	//this function takes ng-bind property as input and returns the text of the particular element
	this.getTextField = function (ng_bindProperty) {

		return element.all(by.binding("LegislationBody.title." + ng_bindProperty + "")).get(0).getText();

	}

	/*This method will select option from dropdown 
	TD:nodeidproperty and option value
	*/

	this.selectvaluefromdropdown=function(nodeidproperty,value){
		var clickdropdown=element(by.xpath("//*[@id='"+nodeidproperty+"']//a"));
		return clickdropdown.isPresent().then(function(result){
			if(result==true){
			   clickdropdown.click();
			  var textbox= element(by.xpath("//*[@id='"+nodeidproperty+"']//input"));
			  browser.actions().click(textbox).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
			   browser.sleep(2000);
			   var selectvalue=element(by.xpath("//a[contains(text(),'"+value+"')]"));
			   selectvalue.click();
			   return result;
			}
			else{
			   console.log("error in dropdownValueSelect ");
			   return false;
   
			}
   
		},function(error){
			console.log(error);
		});
   
	};

	/*
	This Method is used to enter the field value for legislative Number 
	TD: idProperty of the parent div and value need to be entered.
	*/
	this.enterTextBox = function(idProperty,value){
	element(by.xpath("//*[@id='"+idProperty+"']//input")).sendKeys(value);
	}

	/*
	This Method is used to get the field value for legislative Number 
	TD: idProperty of the parent div 
	*/
	this.getTextBox = function(idProperty){
		return element(by.xpath("//*[@id='"+idProperty+"']//input")).getText();
		}


/*********************/
	this.expandableEdit = new ExpandableToggle('collapsed-legislation-link', 'non-collapsed-legislation-link');

	var _addProvisionDateIcon = element(by.css('[ng-click="statuteData.addProvisionDate(statuteType.fechas.list)]'));
	var _mainKeyword = element(by.css('[on-enter="searchOnPressEnter()"]'));

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

	this.clickOnAddProvisionDateIcon = function () {
		return browser.executeScript('return document.getElementById(\'add.provision.date-0-\').click();', '');
	};

	this.enterMainKeyword = function () {
		return _mainKeyword.sendKeys('keyword');
	};

	this.legislativebodyTitle = function () {
		return element.all(by.binding('LegislationBody.title')).get(0).getText();
	};

	this.statuteTypeTitle = function () {
		return element.all(by.binding('LegislationBody.title.typeStatute')).get(0).getText();
	};

	this.statuteTypeContentDisplayed = function () {
		return element.all(by.id('legislativeBodyStatueType0')).isDisplayed();
	};

	this.statuteNoteTitle = function () {
		return element.all(by.binding('LegislationBody.title.statuteNote')).get(0).getText();
	};

	this.statutePluralDisplayed = function () {
		return element.all(by.css('#pluralStatueType-span-0')).get(0).isDisplayed();
	};

	this.provisionDateTitle = function () {
		return element.all(by.binding('LegislationBody.title.provisionDate')).get(1).getText();
	};

	this.clickAddStatuteType = function () {

		return element.all(by.id('add-statute-type')).get(0).click();
	};

	this.statuteConnectorDisplayed = function () {
		return element.all(by.id('statueTypeConnector1')).get(0).isDisplayed();
	};

	this.statuteConnectorTitle = function () {
		return element.all(by.id('statueTypeConnector1')).get(0).getText();
	};


	this.clickAddProvisionDate = function () {
		return element.all(by.id('add.provision.date2-0-0')).get(0).click();
	};

	this.provisionDateConnectorDisplayed = function () {
		return element.all(by.id('provisionDateConnector1-0')).get(0).isDisplayed();
	};

	this.provisionDateConnectorTitle = function () {
		return element.all(by.id('provisionDateConnector1-0')).get(0).getText();
	};

	this.abbreviationInputDisplayed = function () {
		return element.all(by.id('abrebitation-input')).get(0).isDisplayed();
	};

	this.abbreviationTitle = function () {
		return element.all(by.binding('LegislationBody.title.abbreviation')).get(0).getText();
	};

	this.aliasInputDisplayed = function () {

		if(params.BU == 'gulf'){
			return element.all(by.id('multilangAliasDiv')).get(0).isDisplayed();

		}else{
		return element.all(by.id('aliasDiv')).get(0).isDisplayed();
		}
	};

	this.aliasTitle = function () {
		return element.all(by.binding('LegislationBody.title.aliasMultilang')).get(0).getText();
	};

	this.vidRankingInputDisplayed = function () {
		return element.all(by.id('combo-vid')).get(0).isDisplayed();
	};

	this.vidRankingTitle = function () {
		return element.all(by.binding('LegislationBody.title.vidRanking')).get(0).getText();
	};

	this.keywordInputDisplayed = function () {
		return element.all(by.xpath('.//*[@id=\'keyword-container\']//input')).get(0).isDisplayed();
	};

	this.keywordTitle = function () {
		return element.all(by.binding('LegislationBody.title.keyword')).get(0).getText();
	};

	this.summaryAbstractInputDisplayed = function () {
		return element.all(by.css('.col-md-8.right-label-abstract-120.border-sides-detail-border-top')).get(0).isDisplayed();
	};

	this.summaryAbstractTitle = function () {
		return element.all(by.css('.class-title-body.ng-scope')).get(0).getText();
	};

	this.numberTitle = function () {
		return element.all(by.binding('LegislationBody.title.legislativeNumber')).get(1).getText();
	};

	this.numberNumberDisplayed = function () {
		return element.all(by.id('comp-number-0-0')).get(0).isDisplayed();
	};

	this.numberNotesDisplayed = function () {
		return element.all(by.id('composition-0-0')).get(0).isDisplayed() &&
			element.all(by.id('comp-number-input-0-0-0')).get(0).isDisplayed();
	};

	this.numberYearDisplayed = function () {
		return element.all(by.id('col-input-text-year-0-0')).get(0).isDisplayed();
	};

	this.numberModalDisplayed = function () {
		return element.all(by.id('addModelComboBoxInput-0-0')).get(0).isDisplayed();
	};

	this.clickAddNumber = function () {
		return element.all(by.id('add.leg-number2-0-0')).get(0).click();
	};

	this.numberConnectorDisplayed = function () {
		return element.all(by.id('leg-number.connector-1-0')).get(0).isDisplayed() &&
			element.all(by.id('add.leg-number-conector-1-0')).get(0).isDisplayed();
	};

	this.numberConnectorTitle = function () {
		return element.all(by.id('legislativeNumberConnector1-0')).get(0).getText();
	};


	this.valueInLegislationBody = function (value) {
		return element.all(by.css('.div-table.span-resize.margin-top-15.detail-value-principal.margin-bottom-0.ng-binding')).get(value).getText().then(function (result) {
			return result;
		}, function (err) {
			return null;
		});
	};

	this.dragAndDropMainBodyToSecondaryPosition = function () {
		browser.sleep(500);
		browser.actions().mouseDown(element(by.id('legislativeMainBody'))).perform();
		browser.sleep(1000);
		browser.actions().mouseMove(element(by.id('legislativeSecondaryBody1'))).perform();
		browser.sleep(1000);
		browser.actions().mouseUp().perform();
		browser.sleep(1000);
		return element(by.id('legislativeMainBody')).isDisplayed();
	};

	this.valueInStatuteType = function (value) {
		return element.all(by.binding('statuteType.rangoMultilang.list | multilang')).get(value).getText().then(function (result) {
			return result;
		}, function (err) {
			return null;
		});
	};

	this.dragAndDropSecondStatuteTypeToFirstPosition = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element(by.id('legislativeBodyStatueType1'))).perform();
		browser.sleep(500);
		browser.actions().mouseMove(element(by.id('legislativeBodyStatueType0'))).perform();
		browser.sleep(500);
		browser.actions().mouseUp().perform();
		browser.sleep(500);
		return element(by.id('legislativeBodyStatueType0')).isDisplayed();
	};

	this.clickFirstStatuteConnectorComboBox = function () {
		return element.all(by.id('combo-connector-1')).get(0).click();
	};

	this.selectFirstStatuteConnector = function (positionNum) {
		if (positionNum) {
			element(by.id('combo-connector-1')).click().then(function (result) {
				//var options = 
				element(by.id('combo-connector-1')).all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};

	};

	this.valueInProvisionDateForStatuteType = function (position) {
		return element.all(by.binding('statuteData.formatDate(dates, true)')).get(position).getText().then(function (result) {
			return result;
		}, function (err) {
			return null;
		});
	};

	this.dragAndDropSecondPrecisionDateToFirstPosition = function () {
		browser.actions().mouseDown(element(by.id('span-precision-text-1-0'))).perform();
		browser.actions().mouseMove({ x: 0, y: -100 }).perform();
		browser.actions().mouseUp().perform();
		return element(by.id('span-precision-text-0-0')).isDisplayed();
	};

	this.clickFirstProvisionDateConnectorComboBox = function () {
		return element.all(by.id('combo-connector-1-0')).get(0).click();
	};

	this.selectFirstProvisionDateConnector = function (positionNum) {
		if (positionNum) {
			element(by.id('combo-connector-1-0')).click().then(function (result) {
				//var options = 
				element(by.id('combo-connector-1-0')).all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};

	};

	this.valueInNumberFieldForStatuteType = function (position) {
		return element.all(by.binding('numero.numdn')).get(position).getText().then(function (result) {
			return result;
		}, function (err) {
			return null;
		});
	};

	this.dragAndDropFirstStatuteTypeSecondNumberToFirstPosition = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element.all(by.id('legislativeNumberConnector1-0')).get(0)).perform();
		browser.actions().mouseMove({ x: 0, y: -100 }).perform();
		browser.actions().mouseUp().perform();
		return element(by.id('comp-number-0-0')).isDisplayed();
	};

	this.clickFirstNumberConnectorComboBox = function () {
		return element.all(by.id('leg-number.connector-1-0')).get(0).click();
	};

	this.selectFirstNumberConnector = function (positionNum) {
		if (positionNum) {
			element(by.id('leg-number.connector-1-0')).click().then(function (result) {
				//var options = 
				element(by.id('leg-number.connector-1-0')).all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};

	};

	this.dragAndDropProvisionDateInSecondStatuteTypeToFirstStatuteType = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element(by.id('span-precision-text-0-1'))).perform();
		browser.sleep(1000);
		browser.actions().mouseMove(element(by.id('span-precision-text-0-0'))).perform();
		browser.sleep(1000);
		browser.actions().mouseUp().perform();
		return element(by.id('span-precision-text-0-1')).isDisplayed();
	};

	this.dragAndDropProvisionDateInFirstStatuteTypeToSecondStatuteType = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element(by.id('span-precision-text-0-0'))).perform();
		browser.sleep(1000);
		browser.actions().mouseMove(element(by.id('span-precision-text-0-1'))).perform();
		browser.sleep(1000);
		browser.actions().mouseUp().perform();
		return element(by.id('span-precision-text-0-0')).isDisplayed();
	};

	this.dragAndDropFirstStatuteTypeNumberToSecondStatuteType = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element.all(by.binding('LegislationBody.title.legislativeNumber')).get(1)).perform();
		browser.sleep(1000);
		browser.actions().mouseMove(element(by.id('comp-number-0-1'))).perform();
		browser.sleep(10000);
		browser.actions().mouseUp().perform();
		browser.sleep(5000);
		return element(by.id('comp-number-0-0')).isDisplayed();
	};

	this.dragAndDropFirstStatuteTypeAboveLegislativeBody = function () {
		browser.sleep(1000);
		browser.actions().mouseDown(element(by.id('legislativeBodyStatueType0'))).perform();
		browser.actions().mouseMove(element(by.id('legislativeMainBody'))).perform();
		browser.actions().mouseMove({ x: 0, y: -150 }).perform();
		browser.actions().mouseUp().perform();
		return element(by.id('legislativeBodyStatueType0')).isDisplayed();
	};

	this.selectFirstLegislativeBody = function (data) {
		element(by.css('#legislativeMainBody a[name="lnkSearchDropdown"]')).click();
		element(by.css('#legislativeMainBody input[ng-model="searchtext"]')).sendKeys(data);
		element(by.css('#legislativeMainBody input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
		element(by.cssContainingText('#legislativeMainBody [ng-click="select(item)"]', data)).click();
	};

	this.selectFirstStatuteType = function (data) {
		element(by.css('#legislativeBodyStatueType0 a[name="lnkSearchDropdown"]')).click();
		element(by.css('#legislativeBodyStatueType0 input[ng-model="searchtext"]')).sendKeys(data);
		element(by.css('#legislativeBodyStatueType0 input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
		element(by.cssContainingText('#legislativeBodyStatueType0 [ng-click="select(item)"]', data)).click();
	};

	this.clickCreateAbstractLink = function (data) {
		element(by.css('[ng-click="statuteData.createUniqueAbstract()"]')).click();
	};

	this.sendDataToCreateAbstractWindow = function (data) {
		browser.driver.findElement(by.id('visible-e3')).isDisplayed().then(function (result) {
			var el = browser.driver.findElement(by.id('visible-e3'));
			browser.actions().click(el).sendKeys(data).perform();
		});
	};

	this.clickSaveInXEditor = function () {
		element(by.css('.x-btn-icon-el.gcms2-floppy-disk')).click();
	};


};

module.exports = new LegislationStatuteDataSection();