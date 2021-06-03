var params = browser.params;
var rightpanelpage = function () {

	var _OkButton_DuplicateStructurePopUp = $('[ng-click="actionDuplicate()"]');

	this.urlLoad = function (user, password) {

		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {

			if (result) {

				element(by.model('credentials.username')).sendKeys(user);
				element(by.model('credentials.password')).sendKeys(password);
				element(by.buttonText('Login')).click();

			}
			else {

			}
		});
	};

	//Explixit wait function

	var waitForElementusingXPathIsDisplayed = function (webElement) {
		return browser.wait(function () {
			return element(by.xpath(webElement)).isPresent();
		}, 5000);
	};


	//Explixit wait function
	var waitForElementAndClick = function (webElement) {
		return browser.wait(function () {
			var loc = webElement;
			browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
			return loc.click();
		}, 5000);
	};


	//Explixit wait function
	var clickForElementusingXPath = function (webElement) {
		return browser.wait(function () {
			var loc = element(by.xpath(webElement));
			browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
			return loc.click();
		}, 5000);
	};

	/* Checks if the xml text contains the new '<parrafo>' tag for Note in unit popup 
	* Element selector : 'Espaciado (Spacing)'- we cannot use common function fo this because
	* xml tag text is varying
	*/

	this.isParaffoTagDisplayedInXMLText = function (expectedtag) {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text.includes(expectedtag);

		},
			function (error) {
				console.log("Error in isParaffoTagDisplayedInXMLText");
				return false;
			});
	};

	// Click on any of one Original link passing parameter depends on Unit Name.
	this.ClickOnOriginalUnit = function (expectedUnit, version) {
		if (expectedUnit.includes('[')) {
			element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]")).click();
		} else {
			element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//following:: span[text()='" + version + "'][1]")).click();
		}
	};


	// Right Click on any of one Original link and select Edit Layer passing parameter depends on Unit Name.
	this.rightClickOnOrignalVisualAndEditLayer = function (expectedUnit, version) {
		if (expectedUnit.includes('[')) {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]"));
			browser.actions().mouseMove(el).perform();
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().click(el, protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 25 }).click().perform();
		} else {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//following:: span[text()='" + version + "'][1]"));
			browser.actions().mouseMove(el).perform();
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().click(el, protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 25 }).click().perform();

		}
	};

	//Click on Edit Visual Link
	this.clickOnEditVisual = function () {
		browser.waitForAngular();
		browser.sleep(5000);
		element(by.xpath("//a[@ng-click='editText()']")).click();
	};

	//Click on Edit XML Link
	this.clickOnEditXML = function () {
		element(by.xpath("//a[@ng-click='editXml()']")).click();
	};

	// Right Click on any of one Original link and select XML Layer passing parameter depends on Unit Name.
	this.rightClickOnOrignalAndXmlLayer = function (expectedUnit, version) {
		if (expectedUnit.includes('[')) {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]"));
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 50 }).click().perform();
		} else {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//following:: span[text()='" + version + "'][1]"));
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 50 }).click().perform();

		}
		//browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());

	};

	// Right Click on any of one Original link and select Delete Layer passing parameter depends on Unit Name.
	this.rightClickOnOrignalAndDeleteLayer = function (expectedUnit, version) {
		if (expectedUnit.includes('[')) {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 75 }).click().perform();
		} else {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//following:: span[text()='" + version + "'][1]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove(el, { x: 25, y: 75 }).click().perform();

		}
	};

	//Right click on Unit and select Import XML
	this.rightClickOnUnitAndSelectImportXML = function (expectedUnit) {
		if (expectedUnit.includes('[')) {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 50, y: 150 }).click().perform();
			browser.sleep(5000);
		} else {

			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 50, y: 150 }).click().perform();
			browser.sleep(5000);
		}
	};

	//Expand the Parent as well child Unit
	this.expandUnit = function (expectedUnit) {
		if (expectedUnit.includes('[')) {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//preceding::i[1]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			el.click();
		} else {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//preceding::i[1]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			el.click();
		}

	};
	//Click on specific data type inside Text window and do Right click.
	this.rightClickonSpecificDataType = function (performOption) {
		element(by.xpath("//*[@data-type='" + performOption + "']")).click();
		browser.actions().click(protractor.Button.RIGHT).perform();
	};

	//Click on specific data type inside Text window
	this.clickonSpecificDataType = function (performOption) {
		element(by.xpath("//*[@data-type='" + performOption + "']")).click();
	};

	//Check if specific data type is present
	this.isSpecificDataTypePresent = function (performOption) {
		return waitForElementusingXPathIsDisplayed("//*[@data-type='" + performOption + "']");
	};

	//Click on Right panel Tab(DOCUMENT STRUCTURE, DOCUMENT TEXT, ORIGINAL TEXT)
	this.clickOnRightPanelTab = function (tabName) {
		var el = element(by.xpath("//*[@ng-click='select()'][text()='" + tabName + "']"));
		browser.wait(protractor.ExpectedConditions.presenceOf(el), 4000);
		el.click();

	};
	//var locator = element.all(by.css('.col-md-2.name-icon-copy-table.table-icons>img'));
	//browser.executeScript("arguments[0].click();",locator.getWebElement());



	//Click on any Tab of General , Format and Table
	this.clickOnTabInsideVisualEditor = function (tabName) {
		var el = element(by.xpath("//*[@class='x-tab-button']//span[contains(text(),'" + tabName + "')]"));
		//browser.wait(protractor.ExpectedConditions.presenceOf(el), 4000);
		el.click();
	};

	//click on the 1st icon that is enabled after clicking on table tab

	this.clickOnFirstoptionofTable = function (idNumber) {
		//var el = element(by.xpath("//*[@class='x-tab-button']//span[contains(text(),'" + option + "')]"));
		var el = element(by.xpath("//span[contains(@id,'" + idNumber + "')]"));
		//browser.wait(protractor.ExpectedConditions.presenceOf(el), 4000);
		el.click();
	};


	this.clickOnAddorCancelinTable = function (button) {
		var el = element(by.xpath("//div[@class='x-css-shadow']//following:: span[text()='" + button + "']"));
		el.click();
	}

	//Fill Mandatory fields on Attirbute Section.
	this.fillMandotoryAttributeFields = function (fieldName, fieldTextName, value) {
		var e1 = element(by.xpath("//*[@class='x-form-field x-form-text']//following:: label[text()='" + fieldName + "']//following:: input[@name='" + fieldTextName + "']"));
		browser.executeScript("arguments[0].scrollIntoView();", e1.getWebElement());
		e1.click();
		e1.sendKeys(value);
	};


	//only for GCMSQABANG-1670
	this.elementToCheck = function () {
		return element(by.xpath("//*[@class='x-form-field x-form-text']//following:: label[text()='mark']//following:: input[@name='mark']"));
	}

	//Click Captexto or other tabs in BreadCrumb
	this.clickCapatextoAndChildTabs = function (tabName) {
		var el = element(by.xpath("//*[@class='x-box-inner ']//span[text()='" + tabName + "']"));
		el.isPresent().then(function () {
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).click().perform();
		});

	};

	//Select the insert element from the Breadcrumb
	this.moveToInsertAndSelectElement = function (elementName) {
		var el = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='Insert element']"));
		el.isPresent().then(function () {
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			browser.actions().mouseMove(el).perform();
			browser.sleep(2000);
			var el1 = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='" + elementName + "']"));
			browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
			browser.actions().mouseMove(el1).click().perform();
		});
	};

	//click on the tab and select insert break option

	this.clickOnTabAndSelectInserBreak = function (tabname) {

		//click on the tab
		var el = element(by.xpath("//*[@class='x-box-inner ']//span[text()='" + tabname + "']"));
		browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
		browser.actions().mouseMove(el).click().perform();
		browser.sleep(2000);
		//select insert break option
		var el1 = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='Insert break']"));
		browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
		browser.actions().mouseMove(el1).click().perform();

	};

	//Select Data type and do actions like (Delete, Remove Mark up .. etc)
	this.selectDataTypeAndPerform = function (dataType, elementName) {
		var el = element(by.xpath("(//*[@class='x-btn-button']//span[text()='" + dataType + "'])"));
		//*[@class='x-btn-button']//span[text()='notatexto']
		browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
		browser.actions().mouseMove(el).click().perform();
		browser.sleep(2000);
		var el1 = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='" + elementName + "']"));
		browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
		browser.actions().mouseMove(el1).click().perform();
	};

	//click on 
	//Change the Word format (Bold,Italic,.. etc)
	this.changeTheWordFormat = function (format) {
		if (format.includes('32')) {
			element(by.xpath("//*[@class='x-btn-icon-el icon-text_" + format + " ']")).click();
		} else {
			element(by.xpath("//*[@class='x-btn-icon-el gcms2-" + format + " ']")).click();
		}
	};


	//click on structure action and select particular action from the drop down menue
	this.ClickOnStrucureActionAndSelectAction = function (expectedAction) {
		element(by.xpath("//*[@class='dropdown-text ng-binding']")).click();
		browser.sleep(2000);
		element(by.xpath("//*[@class='dropdown-menu not-overflow-y']//a[text()='" + expectedAction + "']")).click();
	};



	//click on structure action and select Add Analysis action from the drop down menue and select particular sub-menue
	this.ClickOnStrucureActionAddAnalysisSelectSubAction = function (expectedAction) {
		element(by.xpath("//span[@class='dropdown-text ng-binding']")).click();
		browser.actions().mouseMove(element(by.xpath("//a[@class='text-capitalize ng-binding'][contains(text(),'Add Analysis')]"))).perform();
		var allelement = element.all(by.xpath("//a[@class='text-capitalize ng-binding']")).each(function (element1) {

			element1.getText().then(function (text) {
				if (text.toUpperCase() === expectedAction.toUpperCase()) {
					//browser.executeScript("arguments[0].scrollIntoView();", element1.getWebElement());
					element1.click();
				}
			});
		});
	};

	// click on structure actions

	this.clickStructureActions = function () {
		return $('button .dropdown-text.ng-binding').click();
	};

	this.selectversion = (value => {
		var select = element(by.id('combo-version'));
		select.$('[value="' + value + '"]').click();
	});

	this.isSelectverionDisplayed = (value => {
		var select = element(by.id('combo-version'));
		return select.$('[value="' + value + '"]').isDisplayed().then(result => {
			return result;
		})
	})

	//check particular option available in dropdown

	this.isOptionDisplayedInStructureActionsMenu = function (expOption) {
		return element
			.all(by.cssContainingText('.dropdown-menu.not-overflow-y>li.ng-scope', expOption))
			.get(0).isDisplayed().then(function (displayed) {
				return displayed;
			},
				function (error) {
					console.log("Error in isOptionDisplayedInStructureActionsMenu");
					return false;
				});
	};

	//Click on Paste drop down icon
	this.clickOnPasteDropdown = function () {
		var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
		browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
	};

	//Select the option to the paste format
	this.selectOptionFromPasteDropdown = function (pasteFormat) {
		element(by.xpath("//a[@class='x-menu-item-link ']//span[text()='" + pasteFormat + "']")).click();
	};

	//right click on unit and select add 
	this.rightClickOnUnitAndSelectAdd = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.actions().mouseMove(element, { x: 50, y: 100 }).click().perform();
				}
			});
		});
	};

	//right click on unit and select add xml
	this.rightClickOnUnitAndSelectAddXml = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.actions().mouseMove(element, { x: 50, y: 125 }).click().perform();
				}
			});
		});
	};


	//to select  authr note from add analysis
	this.rightClickOnUnitAndSelectAddAnalysisAuthorNote = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.actions().mouseMove({ x: 50, y: 375 })
						.mouseMove({ x: 250, y: 0 })
						.mouseMove({ x: 0, y: -75 })
						.click().perform();
					browser.sleep(5000);

				}
			});
		});
	};
	//to select the contextindex  from add analysis
	this.rightClickOnUnitAndSelectAddAnalysisContextIndex = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.sleep(1000)
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.sleep(1000)
					browser.actions().mouseMove({ x: 50, y: 375 })
						.mouseMove({ x: 250, y: 0 })
						.mouseMove({ x: 0, y: -50 })
						.click().perform();
					browser.sleep(5000);

				}
			});
		});
	};
	//to select he relationshp from add analysis
	this.rightClickOnUnitAndSelectAddAnalysisRelationship = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.actions().mouseMove({ x: 50, y: 375 })
						.mouseMove({ x: 250, y: 0 })
						.mouseMove({ x: 0, y: -25 })
						.click().perform();
					browser.sleep(5000);

				}
			});
		});
	};
	//to select he thesaurus from add analysis
	this.rightClickOnUnitAndSelectAddAnalysisThesaurus = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.actions().mouseMove({ x: 50, y: 375 })
						.mouseMove({ x: 250, y: 0 }).click().perform();
					browser.sleep(5000);

				}
			});
		});
	};
	//to check for except statements
	this.isAddUnitPopUpDisplayed = function () {
		return element(by.css('[ng-class="{\'modal-unit-view\': viewMode, \'modal-unit-edit\': !viewMode}"]')).isPresent();
	};
	//to get the info message from the editor
	this.getMessageFromInfoBoxPopUp = function () {
		return element(by.css('[name="txtInfoDialog"]')).getText().then(function (text) {
			return text;
		},
			function (error) {
				return "";
			});
	};

	// enter text

	this.enterText = function () {
		var e = element(by.xpath('//li[@data-type="listitem"]/div/span'));
		browser.actions().click(e).sendKeys('hello').perform();
	};

	// check if itemized list updated to required value or not
	this.itemizedlistUpdatedTo = (expectedValue) => {
		return element(by.xpath('//ul[@data-attrvalue-mark="cuadradon"]')).isPresent().then(value => {
			return value;
		});
	};

	this.verifyAttributValue = (expectedValue) => {
		var expvalue = element(by.xpath("//*[@class='x-form-field x-form-text']//following:: label[text()='mark']//following:: input[@name='mark']"));
		return expvalue.getAttribute('value').then(value => {
			if (value == expectedValue) {
				return true;
			}
			else
				return false;
		});
	}

	// to enter the unit id int he add unit id window
	this.writeUnitIDInAddUnitPopUp = function (value) {
		var e = element(by.xpath("//*[@ng-model='unitName']"));
		e.click();
		browser.sleep(400);
		e.sendKeys(value);
		// .sendKeys(value).then(function (result) {
		//       return true;
		// 	},
		// 		function (error) {
		// 			console.log("Error in sendKeys() in writeUnitIDInAddUnitPopUp");
		// 		});
	};
	//to write rubric
	this.writeRubricInAddUnitPopUp = function (value) {

		browser.driver.findElement(by.id('visible-e9')).isDisplayed().then(function (result) {
			var el = browser.driver.findElement(by.id('visible-e9'));
			browser.actions().click(el).sendKeys(value).perform();
		},
			function (error) {
				console.log("Error in sendKeys() in writeRubricInAddUnitPopUp");
			});

	};


	this.writeEditorialRubricInAddUnitPopUp = function (value) {
		//element(by.xpath('.//*[@data-type="titulorubricaficticia"]/*[@id="visible-e13"]')).sendKeys(value);
		browser.driver.findElement(by.id('visible-e12')).isDisplayed().then(function (result) {
			//element(by.id('visible-e9')).isDisplayed().then(function(result){
			var el = browser.driver.findElement(by.id('visible-e12'));
			browser.actions().click(el).sendKeys(" ").sendKeys(value).perform();
		},
			function (error) {
				console.log("Error in isDisplayed() in writeEditorialRubricInAddUnitPopUp");
			});
	};
	//to witr paragraph in the edit unit pop up editor
	this.writeParagraphOneInAddUnitPopUpAndPressEnter = function (value) {
		browser.driver.findElement(by.id('visible-e10')).isDisplayed().then(function (result) {
			var el = browser.driver.findElement(by.id('visible-e10'));
			browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
		},
			function (error) {
				console.log("Error in isDisplayed() in writeParagraphOneInAddUnitPopUpAndPressEnter");
			});
	};
	//right clicking on secong paragraph and selecting hr option as test case is specifying particularly tot do
	this.rightClickOnSecondParagraphinFrameTextFieldAndSelectHROption = function () {

		element(by.id('visible-e16')).isPresent().then(function (result) {
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 10, y: 20 }).perform();
			browser.sleep(4000);
			browser.actions().mouseMove({ x: 200, y: 0 }).perform();
			browser.sleep(4000);
			browser.actions().mouseMove({ x: 150, y: -20 }).click().perform();
			browser.sleep(4000);
		},
			function (error) {
				console.log("Error in rightClickOnSecondParagraphinFrameTextFieldAndSelectHROption");
			});
	};

	//for except statements	
	this.isThesaurusHierarchyPresent = function () {
		return element.all(by.css('.titlePanelThesaurus.ng-binding')).get(0).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Error in isThesaurusHierarchyPresent");
				return false;
			});
	};
	//for except statements	
	this.getTextofThesaurusHierarchy = function () {
		return element.all(by.css('.titlePanelThesaurus.ng-binding')).get(0).getText().then(function (text) {
			console.log("thesaurus" + text);
			return text;
		},
			function (error) {
				console.log("Error in getTextofThesaurusHierarchy");
				return false;
			});
	};
	this.clickRelationSource = function () {
		element(by.css('.margin-left-17.ng-binding')).click();
	};
	//thesaurus-position,author-note
	this.clickOnModuleImageAsPerUnit = function (unitName, section) {

		if (section === 'thesaurus' || section === 'ci') {
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + unitName + "] ']//following::  div[@class='icon-analysis icon-" + section + "-position'][1]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			el.click();

		} else if (section === 'relationships') {

			var loc = ("//div[@id='structure-display']//span[text()='[" + unitName + "] ']//following::  div[@class='icon-analysis icon-" + section + "-position-no-consolidation'][1]");
			if (loc.includes('consolidation')) {
				var el1 = element(by.xpath("//div[@id='structure-display']//span[text()='[" + unitName + "] ']//following::  div[@class='icon-analysis icon-" + section + "-position-no-consolidation'][1]"))
				browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
				el1.click();
				//element(by.xpath("//*[@class='border-bottom-grey ng-binding'][1]")).click();
				//console.log('relationships consolidation');
			} else {
				var el1 = element(by.xpath("//div[@id='structure-display']//span[text()='[" + unitName + "] ']//following::  div[@class='icon-analysis icon-" + section + "-position'][2]"));
				browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
				el1.click();
				element(by.xpath("//*[@class='border-bottom-grey ng-binding'][1]")).click();
				console.log('relationships');
			}
		}
		else {
			console.log('author notes');
			var el = element(by.xpath("//div[@id='structure-display']//span[text()='[" + unitName + "] ']//following::  div[@class='icon-analysis icon-" + section + "-position'][2]"));
			browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
			el.click();

		}


	};

	//to click on the options inside relationship green icon
	//test data: 'Relationships (all)' 'Source' 'Target' 'Annotations' etc
	this.clickoptionrelationshipgreenicon = function (option) {
		var el = element(by.xpath("//a[contains(.,'" + option + "')]"));
		return el.isDisplayed().then(function (result) {
			if (result == true) {
				//return true;
				el.click();

			}
			else {
				console.log("error in clickoptionrelationshipgreenicon");
				return false;
			}

		}, function (error) {
			console.log(error);
		});


	};


	//right click on unit and select delete
	this.rightClickOnUnitAndSelectDeleteDropdown = function (expectedUnit) {
		console.log("inside func");
		element.all(by.xpath("//*[@id='structure-display']//span[text()='[" + expectedUnit + "] ']")).each(function (element, index) {
			//console.log(insideDelete);
			element.getText().then(function (text) {
				console.log(text);
				// if ((text.contains(expectedUnit) || (text.contains('[' + expectedUnit + ']')))) {

				if ((text.includes(expectedUnit) || (text.includes('[' + expectedUnit + ']')))) {
					//console.log(insideIf);
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					console.log(expectedUnit);
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.sleep(1000);
					browser.actions().mouseMove({ x: 50, y: 325 }).click().perform();
					browser.sleep(5000);
				}
			});
		});
	};
	//right click on a unit and select edit unit id
	this.rightClickOnUnitAndSelectEditUnitId = function (expectedUnit) {
		element.all(by.xpath("//*[@id='structure-display']//span[text()='[" + expectedUnit + "] ']")).each(function (element, index) {
			element.getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click(protractor.Button.RIGHT).perform();
					browser.sleep(2000);
					browser.actions().mouseMove({ x: 50, y: 195 }).click().perform();

				}
			});
		});
	};

	//right click on version and select delete
	this.rightClickOnVersionAndSelectDeleteLayer = function (expectedUnit, version) {

		element.all(by.css('#structure-table-scrollable tr')).each(function (rowElement, index) {

			rowElement.all(protractor.By.tagName('td.col-md-3.width-29.td-structure.ng-scope div span')).get(0).getText().then(function (text) {
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					rowElement.all(protractor.By.css('.ng-scope.ng-binding')).each(function (versionEl, versionIndex) {
						versionEl.getText().then(function (versionText) {
							if (versionText === version) {
								browser.executeScript("arguments[0].scrollIntoView();", versionEl.getWebElement());
								browser.actions().mouseMove(versionEl).perform();
								browser.actions().click(protractor.Button.RIGHT).perform();
								browser.actions().mouseMove(versionEl, { x: 50, y: 75 }).click().perform();
							}
						},
							function (error) {
							});
					},
						function (error) {
						});
				}
			},
				function (error) {
				});
		},
			function (error) {
			});
	};
	this.expandUnitInStructure = function (expectedUnit) {
		element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div')).each(function (element, index) {
			var unitElement = element.all(protractor.By.css('span')).get(0);
			unitElement.getText().then(function (text) {
				console.log("Text:: " + text + '' + 'expectedUnit:' + expectedUnit);
				if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
					browser.executeScript("arguments[0].scrollIntoView();", unitElement.getWebElement());
					element.all(protractor.By.css('a')).get(0).click().then(function (result) {
						browser.waitForAngular();
					},
						function (error) {
							console.log("Error in expandUnitInStructure");
						});
				}
			},
				function (error) {
					console.log("Error in expandUnitInStructure");
				});
		},
			function (error) {
				console.log("Error in expandUnitInStructure");
			});
	};
	this.isUnitIDContainerPopUpDisplayed = function () {
		return element(by.css('#UnitIDContainer')).isPresent();
	};
	//to enter the unit id in the pop up
	this.writeUnitInUnitIDContainerPopUp = function (unit) {
		element(by.css('[ng-model="UnitIdEditionCtrl.unitName"]')).clear();
		element(by.css('[ng-model="UnitIdEditionCtrl.unitName"]')).sendKeys(unit);
	};
	// this.clickYesButtonInDeleteUnitPopUp = function () {
	// 	element(by.css('[ng-click="ok()"]')).click().then(function () {
	// 	},
	// 		function (error) {
	// 			console.log("Error in clickYesButtonInDeleteUnitPopUp");
	// 		});
	// };
	//	this.clickOKButtonInCommonPopUp = function () {
	//		return $('[ng-click="ok()"]').click();
	//	};

	//to check for greencolor tick mark
	this.isGreenTickDisplayedInUnitIDContainer = function () {
		return element(by.css('.bento-icon-checkmark.color-green')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};
	//to check the rex cross mark displayed after deleting the unit from pop up for except statement
	this.isRedCrossDisplayedInUnitIDContainer = function () {
		return element(by.css('.bento-icon-close-x.color-red')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};
	//to check the save button enabled in unit id using for expect statements
	this.isSaveButtonEnabledInUnitIDContainerPopUp = function () {
		return element(by.css('#btnSaveAdd')).isEnabled();
	};

	this.isSaveButtonDisplayedInModalUnitEditPopUp = function () {
		return element(by.css('[ng-click="addUnit()"]')).isDisplayed();
	};
	//to click the cancel button in unit id pop up
	// this.clickCancelInUnitIDContainerPopUp = function () {
	// 	element(by.css('#btnCloseAdd')).click();
	// };
	//Click on Document Structure Tab
	this.clickDocumentStructure = function () {
		element(by.xpath("//a[@ng-click='select()'][text()='DOCUMENT STRUCTURE']")).click();

	};

	/*
 * Checks if the 'Font Size' selector is displayed in unit popup 
 */
	this.isFontSizeSelectorDisplayedInUnitPopUp = function () {
		return element(by.css('[ng-model="editor.fontSize"]')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isFontSizeSelectorDisplayedInUnitPopUp");
				return false;
			});
	};

	//Click on Insert or Cancel button
	this.clickOnInsertOrCancel = function (option) {
		//element(by.xpath("//span[text()='"+option+"']")).isPresent();
		element(by.xpath("//span[@class='x-btn-button']//span[text()='" + option + "']")).click();
		//element(by.xpath("//span[text()='"+option+"']")).click();
	};

	//Select option from Mandatory Drop down Fields.
	this.selectOptionFromDropDown = function (titleName, fieldName, option) {
		element(by.xpath("//label[text()='" + titleName + "']//following:: td/input[@name='" + fieldName + "'][1]//..//following-sibling:: td")).click();
		element(by.xpath("//li[text()='" + option + "']")).click();
	};


	//Click on Apply or Close or Edit or refresh or save button in document structure,Document text Language pop up window (save/close)
	this.clickOnApplyOrCloseButton = function (buttonOption) {
		element(by.xpath("//*[@ng-click='" + buttonOption + "()']")).click();
	};

	// verify text color of selected tab in document structure

	this.isTextColorOfSelectedTabEquals = function (expColor) {
		return element(by.css('.ng-isolate-scope.active>a')).getCssValue('color').then(value => {
			if (expColor === value) {
				return true;
			} else {
				return false;
			}
			return false;
		},
			function (error) {
				return false;
			});
	};
	// verif bg color of Original structure

	this.isBGColorOfOriginalStructureEquals = function (expColor) {
		return element(by.css('.selectedStructure')).getCssValue('background-color').then(function (value) {
			console.log("Expected Code:", value);
			if (expColor === value) {
				return true;
			} else {
				return false;
			}
			return false;
		},
			function (error) {
				return false;
			});
	};

	// verify bg color of in force structure
	this.isBGColorOfInForceStructureEquals = function (expColor) {
		return element(by.css('.inForce')).getCssValue('background-color').then(function (value) {
			if (expColor === value) {
				return true;
			} else {
				return false;
			}
			return false;
		},
			function (error) {
				return false;
			});
	};



	this.isMultipleStructureVersionsDisplayed = function () {
		var elementsList = element.all(by.css('.carousel-versions.ng-scope>ul>li'));
		return elementsList.get(0).isPresent() && elementsList.get(1).isPresent();
	};

	this.isInForceStructureDisplayed = function () {
		return element(by.css('.inForce')).isPresent();
	};

	this.isInForceStructureDisplayedAsFirstStructure = function () {
		var firstStructure = element.all(by.css('.noselect.ng-scope>li')).get(0);
		return firstStructure.all(protractor.By.tagName('span.inForce')).get(0).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};

	this.isNextArrowDisplayedInStructureNavigation = function () {
		return element(by.css('[ng-click="nextSlide()"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};

	this.clickNextArrowInStructureNavigation = function () {
		element(by.css('[ng-click="nextSlide()"]')).click();
		//element(by.css('.rn-carousel-control.rn-carousel-control-next.ng-scope')).click();
	};


	this.isColorOfHighlightedTabEquals = function (expColor) {
		return element(by.css('.ng-isolate-scope.active>a')).getCssValue('color').then(function (value) {
			if (expColor === value) {
				return true;
			} else {
				return false;
			}
			return false;
		},
			function (error) {
				return false;
			});
	};


	this.isPreviousArrowDisplayedInStructureNavigation = function () {
		browser.sleep(2000);

		return element(by.css('[ng-click="prevSlide()"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};

	this.clickPreviousArrowInStructureNavigation = function () {
		//element(by.css('.rn-carousel-control.rn-carousel-control-prev.ng-scope')).click();
		//Normal click is failing. Hence trying javascript click
		var elementArrow = element(by.css('[ng-click="prevSlide()"]'));
		browser.executeScript("arguments[0].click();", elementArrow);

	};

	this.isArrowDisplayedInStructureNavigation = function () {
		return element(by.css('[ng-click="prevSlide()"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};




	////////////////////// XML EDITOR Page locators ////////////////////////////


	//Click on any of word format option in xmlEdiot page
	this.fontFormatOptionsOnXMLeditor = function (formatOption) {
		var el = element(by.xpath("//*[@tooltip='" + formatOption + "']"));
		browser.executeScript("arguments[0].click();", el.getWebElement());


	};

	this.isfontFormatOptionpresent = function (formatOption) {
		return element(by.xpath("//*[@tooltip='" + formatOption + "']")).isPresent();

	};

	//select options from drop down list in addxml editor page.
	this.dropDownOptionsOnXMLeditor = function (option) {
		browser.sleep(1000);
		console.log(option);
		element(by.xpath("//*[@ng-model='editor.selectedVariableElement']")).click();
		browser.sleep(1000);
		var el = element(by.xpath("//*[@ng-model='editor.selectedVariableElement']//option[text()='" + option + "']"));
		el.click();
		//browser.executeScript("arguments[0].click();", el.getWebElement());

	};
	/*
 * Checks if the 'xmleditor-insert-modal window' is displayed in unit popup 
 * to check the expect statements
 */
	this.isXMLEditorInsertModalWindowDisplayed = function () {
		return element(by.css('.xmleditor-insert-modal')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isXMLEditorInsertModalWindowDisplayed");
				return false;
			});
	};
	/*
	 * Checks if the xml text contains the expected document id note text & tag text for Note in unit popup 
	 * Element selector : 'Text Note'
	 */
	this.isTextNoteAndTagInXMLTextEquals = function (expDocumentID, expText) {
		if (params.BU == 'gulf') {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<text-note ref="' + expDocumentID + '" orig-text="">' + expText + '</text-note>');
			},
				function (error) {
					console.log("Error in isNoteAndTagTextInXMLTextEquals");
					return false;
				});
		} else {
			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<nota.texto ref="' + expDocumentID + '" o="">' + expText + '</nota.texto>');
			},
				function (error) {
					console.log("Error in isNoteAndTagTextInXMLTextEquals");
					return false;
				});
		};
	};
	/*
	 * Checks if the xml text contains the expected document id text & tag text for Note in unit popup
	 * Element selector : 'Note' 
	 */
	// this.isNoteAndTagTextInXMLTextEquals = function (expDocumentID, expText) {
	// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
	// 		return text.includes('<nota ref="' + expDocumentID + '" o=""/>' + expText);
	// 	},
	// 		function (error) {
	// 			console.log("Error in isNoteAndTagTextInXMLTextEquals");
	// 			return false;
	// 		});
	// };

	this.isNoteAndTagTextInXMLTextEquals = function (expDocumentID, expText) {

		if (params.BU == 'gulf') {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<note ref="' + expDocumentID + '" o=""/>' + expText);
			},
				function (error) {
					console.log("Error in isNoteAndTagTextInXMLTextEquals");
					return false;
				});

		}

		else {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<nota ref="' + expDocumentID + '" o=""/>' + expText);
			},
				function (error) {
					console.log("Error in isNoteAndTagTextInXMLTextEquals");
					return false;
				});


		}
	};
	/*
	 * Checks if the xml text contains the expected figura id & tag text for Note in unit popup 
	 * Element selector : 'Image' we cannot use common function
	 */
	this.isImageIDTextAndTagInXMLTextEquals = function (expID, expText) {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text.includes('<figura ref="' + expID + '">' + expText + '</figura>');

		},
			function (error) {
				console.log("Error in isClauseIDTextAndTagInXMLTextEquals");
				return false;
			});
	};
	/*
	 * Checks if the xml text contains the expected Clause id & tag text for Note in unit popup 
	 * Element selector : 'Clause'
	 */
	this.isClauseIDTextAndTagInXMLTextEquals = function (expID, expText) {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text.includes('<clause id="' + expID + '">' + expText + '</clause>');

		},
			function (error) {
				console.log("Error in isClauseIDTextAndTagInXMLTextEquals");
				return false;
			});
	};



	/*
	 * Checks if the xml text contains the expected paragraph id & tag text for Note in unit popup 
	 * Element selector : 'Section'
	 */
	// this.isParagraphIDTextAndTagInXMLTextEquals = function (expID, expText) {
	// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
	// 		return text.includes('<paragraph id="' + expID + '">' + expText + '</paragraph>');

	// 	},
	// 		function (error) {
	// 			console.log("Error in isParagraphIDTextAndTagInXMLTextEquals");
	// 			return false;
	// 		});
	// };

	this.isParagraphIDTextAndTagInXMLTextEquals = function (expID, expText) {

		if (params.BU == 'gulf') {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<section id="' + expID + '">' + expText + '</section>');

			},
				function (error) {
					console.log("Error in isParagraphIDTextAndTagInXMLTextEquals");
					return false;
				});
		}

		else {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('<paragraph id="' + expID + '">' + expText + '</paragraph>');

			},
				function (error) {
					console.log("Error in isParagraphIDTextAndTagInXMLTextEquals");
					return false;
				});


		}
	};



	//to check the given xml tag present for dropdown options in the xml editor
	this.isXmlTagsArePresent = function (tagName) {
		return element(by.xpath("(//div[@class='CodeMirror-sizer']//following:: span[text()='" + tagName + "'])[2]")).getText().then(function (text) {
			return text.includes(tagName);
		},
			function (error) {
				console.log("Error in xml tag " + tagName);
				return false;
			});
	};
	/*
 * Checks if the xml text contains the new '<parrafo>' tag for Note in unit popup 
 * Element selector : 'Espaciado (Spacing)'- we cannot use common function fo this because
 * xml tag text is varying
 */
	// this.isParaffoTagDisplayedInXMLText = function () {
	// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
	// 		return text.includes('<parrafo espaciado-anterior="simple"></parrafo>');

	// 	},
	// 		function (error) {
	// 			console.log("Error in isParaffoTagDisplayedInXMLText");
	// 			return false;
	// 		});
	//	 };
	/*
	 * Checks if the xml text contains the expected date in unit popup 
	 */
	// this.isDateValueInXMLTextEquals = function (expDate) {
	// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
	// 		return text.includes('fecha valor="' + expDate + '"');
	// 	},
	// 		function (error) {
	// 			console.log("Error in isDateValueInXMLTextEquals");
	// 			return false;
	// 		});
	// };

	this.isDateValueInXMLTextEquals = function (expDate) {

		if (params.BU == 'gulf') {
			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('date value="' + expDate + '"');
			},
				function (error) {
					console.log("Error in isDateValueInXMLTextEquals");
					return false;
				});
		}

		else {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes('fecha valor="' + expDate + '"');
			},
				function (error) {
					console.log("Error in isDateValueInXMLTextEquals");
					return false;
				});

		}
	};


	/* we cannot use the common function
	 * Checks if the xml text contains the expected name for date (fecha) in unit popup 
	 */
	// this.isDateTagTextInXMLTextEquals = function (expTextForDate) {
	// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
	// 		return text.includes(expTextForDate + '</fecha>'); //verify text + end tag
	// 	},
	// 		function (error) {
	// 			console.log("Error in isDateTagTextInXMLTextEquals");
	// 			return false;
	// 		});
	// };

	this.isDateTagTextInXMLTextEquals = function (expTextForDate) {

		if (params.BU == 'gulf') {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes(expTextForDate + '</date>'); //verify text + end tag
			},
				function (error) {
					console.log("Error in isDateTagTextInXMLTextEquals");
					return false;
				});

		}

		else {

			return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
				return text.includes(expTextForDate + '</fecha>'); //verify text + end tag
			},
				function (error) {
					console.log("Error in isDateTagTextInXMLTextEquals");
					return false;
				});


		}


	};



	//checks for ementa tag and value present in the xml.. for this we can't use common function
	this.isEmentaTextAndTagInXMLTextEquals = function (ementaOfficial, expText) {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text.includes('<ementa oficial="' + ementaOfficial + '"><parrafo>' + expText + '</parrafo></ementa>');

		},
			function (error) {
				console.log("Error in isEmentaTextAndTagInXMLTextEquals");
				return false;
			});
	};
	// to fill the feilds in the pop up when we select a option from element selector
	this.sendKeysToXMLEditorInsertModalWindow = function (value, position) {
		element.all(by.css('[ng-model="models[element.id]"]')).get(position).isDisplayed().then(function (displayed) {
			element.all(by.css('[ng-model="models[element.id]"]')).get(position).clear();
			element.all(by.css('[ng-model="models[element.id]"]')).get(position).sendKeys(value);
		},
			function (error) {
				console.log("Error in sendKeysToXMLEditorInsertModalWindow");
				return false;
			});
	};
	//Fill the text field values on Pop up window in XML EDITOR(Drop down fields pop up window)
	this.fillTextFieldsOfPopUpWindowInXMLEditor = function (fieldName, value) {


		element(by.xpath("//span[text()='" + fieldName + "']//following-sibling:: input[@ng-model='models[element.id]']")).clear();
		element(by.xpath("//span[text()='" + fieldName + "']//following-sibling:: input[@ng-model='models[element.id]']")).sendKeys(value);
	};

	//Fill the text field values on Pop up window for Titulo
	this.fillFieldTextinPopUpWindow = function (fieldName, value) {
		element(by.xpath("//td[@class='x-field-label-cell']//label[text()='" + fieldName + "']//following:: input[1]")).click();
		browser.sleep(2000);
		element(by.xpath("//td[@class='x-field-label-cell']//label[text()='" + fieldName + "']//following:: input[1]")).sendKeys(value);
	};

	//Check wheather the pop window is displaying the name as same as what User selected from dropdown in xmlEditor
	this.popUpWindowIsDispayed = function (windowName) {
		return element(by.xpath("//*[@ng-if='title'][text()='" + windowName + "']")).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				return false;
			});
	};

	// this.clickRadioButtonInAddUnitPopUp = function (value) {
	//     element(by.xpath('//span[contains(text(),"' + value + '")]//following:: div[@class="radio-button"][1]')).isPresent().then(valur => {
	//     element(by.xpath('//span[contains(text(),"' + value + '")]//following:: div[@class="radio-button"][1]')).click();
	//     });
	// };

	/*
	* click on OK button in validate pop up
	*/
	this.clickOKButtonDisplayedinErrorValidation = function (option) {
		return element(by.xpath("//button[@ng-click='" + option + "()']")).click().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Error in clickOKButtonDisplayedinErrorValidation");
				return false;
			});
	};

	//to check the confirmation messgae dislayed for expect statements
	this.isDeleteUnitConfirmationPopUpDisplayed = function () {
		return element(by.css('.modal-body.modal-confirm-body.ng-scope')).isPresent();
	};

	this.enterTextIntoPopup = function (value) {

		var el = element(by.css('.x-form-field.x-form-text.x-form-textarea'));
		browser.sleep(3000);

		el.sendKeys(value);

	};

	//select all and delete in edit(visual) window
	this.selectAllAndDelete = function () {
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').keyUp(protractor.Key.CONTROL).perform();
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.DELETE).perform();
	};


	//Click on side bar button in XML editor page
	this.clickOnSideBarButton = function (fieldName) {
		element(by.xpath("//button[@type='button'][text()='" + fieldName + "']")).click();
	};

	//checking the side bar button is dispalyed in xml editor page
	this.isdisplayedofSideBarButton = function (fieldName) {
		return element(by.xpath("//button[@type='button'][text()='" + fieldName + "']")).isDisplayed();
		//return waitForElementusingXPathIsDisplayed("//button[@type='button'][text()='" + fieldName + "']");
	};

	//Expand any of one section in Left Panel
	this.expandSectionInLeftPanel = function (sectionName) {
		var loc = element(by.xpath("//strong[@class='ng-binding'][text()='" + sectionName + "']//preceding::a[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
		//waitForElementusingXPathIsDisplayed(loc);
		loc.click();
	};
	//to click on world icon inside editorialnotes section
	this.clickonWordicon = function () {
		element.all(by.id('editPrintEditorialNotesBtn')).get(0).click();
	};
	//this function is particular to Editorial notes section to click on create note inside the editorial section
	this.clickonCreateNota = function () {
		element.all(by.css('[ng-click="create(lang)"]')).get(0).click();
	};
	//button displayed in Edit mode (Exit edition mode , Save)
	this.buttonDisplayedInEditMode = function (button) {
		//return element(by.xpath("(//*[text()='"+button+"'])[2]")).isPresent();
		return waitForElementusingXPathIsDisplayed("(//*[text()='" + button + "'])[2]");
	};


	//button  in Edit mode (Add,Copy,Edit,Delete,Exit edition mode , Save)
	this.clickOnbuttonInEditMode = function (button) {
		browser.sleep(2000);
		element(by.xpath("(//*[text()='" + button + "'])[2]")).click();
		//element(by.xpath("(//div[@id='panel-fixed-minified']//*[contains(text(),'"+ button +"')])")).click();
	};

	//Subject of the grant
	this.worldIconImage = function (fieldName) {
		return element(by.xpath("(//span[text()='" + fieldName + "']//following:: img[@ng-if='iconImg'])[1]")).click();
	};

	//Fill in  the language editor window ((Español)
	this.editInLanguageWindow = function (lang, value) {
		element(by.xpath("//*[@id='containerLanguague']//label[text()='" + lang + "']// following:: textarea[1]")).clear();
		element(by.xpath("//*[@id='containerLanguague']//label[text()='" + lang + "']// following:: textarea[1]")).click();
		element(by.xpath("//*[@id='containerLanguague']//label[text()='" + lang + "']// following:: textarea[1]")).sendKeys(value);
		//browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(value).perform();
	};

	this.getTextFromSectionsField = function (fieldName) {
		var text = element(by.xpath("//span[text()='" + fieldName + "']//following:: div[@class='ng-scope'][2]")).getAttribute('getText()').then(function (text) {
			console.log("text Value::" + text);
			return text;
		},
			function (error) {
				console.log("Error in getTextFromSectionsField");
				return false;
			});

	};

	//check wheather document tab is displayed.
	this.isDocumentStructureTabDisplayedInRightPanel = function () {
		return waitForElementusingXPathIsDisplayed("//a[@ng-click='select()'][text()='DOCUMENT STRUCTURE']").then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in in isDocumentStructureTabDisplayedInRightPanel");
				return false;
			});
	};

	/*
	 * Checks if the First Unit Present in Document Structure
	 */
	this.checkUnitIsPresent = function (expectedUnit) {
		return element(by.xpath("//*[@id='structure-display']//span[text()='[" + expectedUnit + "] ']")).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Error in checkUnitIsPresent");
				return false;
			});
	};
	/*
		 * Checks if the version Selector dropdown displayed
		 */

	this.isVersionSelectorDropDownDisplayed = function () {
		return element(by.model('rightPanel.selPreviewDate')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isVersionSelectorDropDownDisplayed");
				return false;
			});
	};
	/*
		 * Checks if the Language Selector dropdown displayed
		 */
	this.isLanguageSelectorDropDownDisplayed = function () {
		return element(by.model('rightPanel.selPreviewLang')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isLanguageSelectorDropDownDisplayed");
				return false;
			});
	};
	/*
   * Checks if the Preview Button displayed
   */
	this.isPreviewButtonDisplayed = function () {
		return element(by.id('btnPreviewText')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isPreviewButtonDisplayedInRightPanel");
				return false;
			});
	};
	/*
	  * Checks if the Refresh button displayed
	  */
	this.isRefreshTextButtonDisplayed = function () {
		return element(by.id('btnRefreshText')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRefreshTextButtonDisplayedInRightPanel");
				return false;
			});
	};

	this.isTextDisplayedInRightPanel = function () {
		return element(by.id('marginalInfo')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isTextDisplayedInRightPanel");
				return false;
			});
	};


	//upload the file path into Import XML window
	this.browseXMLFile = function (absolutePath) {
		element(by.id('btnImportOriginalTextFileXmlUnit')).isPresent().then(function (present) {
			element(by.id('fileUploadUnitStructure')).sendKeys(absolutePath);
		});
	};

    /*
	 * Checks if the file is displayed in the list of Original Text upload 
	 */
	this.isFileAddedForUploadingXMLFile = function (fileName) {
		return element(by.cssContainingText('#originaltext-text-add', fileName)).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isFileAddedForUploadingXMLFile");
				return false;
			});
	};
	/*
* Checking the Import XML pop up window is displayed.
*/
	this.browseXMLPopupWindowIsPresented = function () {
		return element(by.css('[ng-click="addUnitStructureCtrl.uploaderXML.queue[0].upload()"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in clickOKBrowseXMLPopupError");
				return false;
			});
	};
	/*
	* check Radio Button in Browse XML Present
	*/
	this.isRadioButtonPresentBrowseXML = function () {
		return element(by.id('radio-button-0')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Error in isRadioButtonPresentBrowseXML");
				return false;
			});
	};

	//Click on the Radio button for choose the sibling
	this.clickRadioButtonInAddUnitPopUp = function (value) {
		element(by.xpath('//span[contains(text(),"' + value + '")]//following:: div[@class="radio-button"][1]')).isPresent().then(valur => {
			element(by.xpath('//span[contains(text(),"' + value + '")]//following:: div[@class="radio-button"][1]')).click();
		});
	};

	this.writeDateInPopUp = function (value) {
		element(by.css('[datepicker-popup="dd/MM/yyyy"]')).clear();
		element(by.css('[datepicker-popup="dd/MM/yyyy"]')).sendKeys(value);
	};
	// get message form popup
	this.getMessageOnPopUp = function () {
		return element(by.css('[ng-bind="message | translate"]')).getText();
	};

	//Checking the radio button for sibiling is displayed
	this.radioButtonInDisplayedForAddUnit = function (value) {
		return element(by.xpath('//span[contains(text(),"' + value + '")]//following:: div[@class="radio-button"][1]')).isDisplayed();
	};

	//Check wheater Import button is enabled or not
	this.isPopUpButtonEnabled = function (value) {
		return element(by.xpath("//*[text()='" + value + "']")).isEnabled().then(function (result) {
			return result;
		});
	};


	//click on button (Import,Cancel,Save, etc)

	this.clickOnButtonForGlobal = function (buttonName) {

		var e = element(by.xpath("(//button[text()='" + buttonName + "'])[1]"));

		e.isDisplayed().then(value => {
			if (value == true) {
				browser.actions().click(e).perform();
			}

		}, function (error) {
			console.log("error in clickOnButtonForGlobal");
		});
	};





	/*
	 * Get text of import xml pop up error
	 */
	this.getTextImportpopupError = function () {
		return element(by.xpath("//div[@class='wrapwords col-md-10 ng-scope ng-binding']")).getText().then(function (text) {
			//return element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding')).getText().then(function (text) {
			console.log("Import text error:::::>>>>>" + text);
			return text;
		},
			function (error) {
				console.log("Error in getTextImportpopupError");
				return "";
			});
	};

	//Fill the text field values on Pop up window for Titulo
	this.fillFieldTextinPopUpWindow = function (fieldName, value) {
		element(by.xpath("//td[@class='x-field-label-cell']//label[text()='" + fieldName + "']//following:: input[1]")).click();
		browser.sleep(2000);
		element(by.xpath("//td[@class='x-field-label-cell']//label[text()='" + fieldName + "']//following:: input[1]")).sendKeys(value);
	};

	//Select Add or Cancel button for Insert Table in faltatable
	this.selectAddOrCancelInInsertTable = function (option) {
		element(by.xpath("//div//span[@class='x-btn-inner x-btn-inner-center'][contains(text(),'" + option + "')]")).click();

	};

	//Select Insert or Cancel button  in Paste format Pop up window.
	this.clickOnInsertorCancelInPastePopUpWindow = function (option) {
		element(by.xpath("//*[@class='x-btn-inner x-btn-inner-center'][text()='" + option + "']")).click();
	};

	//selecting a text inside the frame 2
	this.selectAText = function (par_option) {
		browser.sleep(1000);
		var el = element(by.css("[data-type='" + par_option + "']"));
		browser.actions().mouseMove(el).click().perform();
		browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.HOME)).perform();
		browser.sleep(3000);
	};

	/////////////////////////////////////////Till Here Latest function///////////////////////////////////////////////////
	//to check the  edit unit po up displayed for except stattement
	this.isModalUnitEditPopUpDisplayed = function () {
		return element(by.css('.ng-scope.ng-isolate-scope.modal-unit-edit')).isPresent();
	};
	//to verify the element selector dropdown for expect statements
	this.isElementSelectorDropdownDisplayedInUnitPopUp = function () {
		return element(by.css('[ng-model="editor.selectedVariableElement"]')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isElementSelectorDropdownDisplayedInUnitPopUp");
				return false;
			});
	};


	// Checks if the 'Element Selector' drop down contains the given option 

	this.isOptionPresentInElementSelectorDropDownInUnitPopUp = function (expOption) {
		return element
			.all(by.cssContainingText('[ng-change="editor.insertElementFromSelect()"]>option', expOption))
			.get(0).isDisplayed().then(function (displayed) {
				return displayed;
			},
				function (error) {
					console.log("Error in isOptionPresentInElementSelectorDropDownInUnitPopUp");
					return false;
				});
	};
	//to verify the side bar buttons displyed for except stattement
	this.isSidebarButtonsDisplayedInModalUnitEditPopUp = function () {
		return element(by.xpath('(//div[@class="xmleditor-sidebar"])[1]')).isDisplayed();
	};

	//to check whether the unit id displayed in the op up for except statement
	this.isUnitIDDisplayedInAddUnitPopUp = function (value) {
		return element(by.css('[ng-model="unitName"]')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				return false;
			});
	};



	//maximize the xeditor window
	this.clickonXEditorExpandButton = function () {
		element(by.css('[ng-click="resizeFull()"]')).click().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in clickonXEditorExpandButton");
				return false;
			});
	};
	// function related to XEditor window 
	this.isOrderListPresentXEditor = function () {
		return element(by.css('[data-type="orderedlist"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isOrderListPresentXEditor");
				return false;
			});
	};

	this.isItemizedListPresentXEditor = () => {
		return element(by.xpath('//*[@data-type="itemizedlist"]')).isPresent().then(displayed => {
			return displayed;
		},
			function (error) {
				console.log("Error in isItemizedListPresentXEditor");
				return false;
			});
	};

	this.isSecondItemizedListPresentInXEditor = function () {
		return element.all(by.css('[data-type="listitem"]')).get(1).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSecondItemizedListPresentInXEditor");
				return false;
			});
	};

	/*
	 * Right click on first itemized list , and insert: listitem > Insert Item > itemizedlist
	 */
	this.addItemizedListForFirstExistingItemizedListPresentXEditor = function () {
		element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
			//Right click on current position
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 10, y: 40 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 200, y: 0 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 150, y: 0 }).click().perform();
			browser.sleep(1000);
		},
			function (error) {
				console.log("Error in addItemizedListForFirstExistingItemizedListPresentXEditor");
			});
	};

	/*
	 * Right click on first itemized list , and insert: listitem > Insert Item > orderedlist
	 */
	this.addOrderedListForFirstExistingItemizedListPresentXEditor = function () {
		element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
			//Right click on current position
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 10, y: 40 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 200, y: 0 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 150, y: 25 }).click().perform();
			browser.sleep(1000);
		},
			function (error) {
				console.log("Error in addOrderedListForFirstExistingItemizedListPresentXEditor");
			});
	};

	/*
	 * Right click on first itemized list , and insert: listitem > Insert Item > paraffo
	 */
	this.addParaffoForFirstExistingItemizedListPresentInXEditor = function () {
		element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
			//Right click on current position
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 10, y: 40 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 200, y: 0 }).perform();
			browser.sleep(2000);
			browser.actions().mouseMove({ x: 150, y: 50 }).click().perform();
			browser.sleep(1000);
		},
			function (error) {
				console.log("Error in addParaffoForFirstExistingItemizedListPresentXEditor");
			});
	};

	this.isParaffoPresentInFirstExistingItemizedListPresentInXEditor = function () {
		var firstList = element.all(by.css('[data-type="listitem"]')).get(0);
		return firstList.all(protractor.By.css('[data-type="parrafo"]')).get(0).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isParaffoPresentInFirstExistingItemizedListPresentInXEditor");
				return false;
			});
	};



	//click on cancel button
	this.isStructureActionsMenuDisplayed = function () {
		return element(by.css('.dropdown-menu.not-overflow-y')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDisplayed() in isStructureActionsMenuDisplayed");
				return false;
			});
	};



	/*
	 * Replaces the xml content in unit popup with the given content
	 * This uses Replace Button functionality
	 */
	this.replaceWholeXMLTextInUnitPopUpUsingReplaceButton = function (text) {
		element(by.css('.CodeMirror-line>span')).getText().then(function (actualText) {
			//Enter whole text in search field
			element(by.css('.CodeMirror-search-field')).sendKeys(actualText).then(function (result) {
				element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
				//Enter new text in replace with field
				element(by.css('.CodeMirror-search-field')).sendKeys(text).then(function (result) {
					element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
					element(by.css('.CodeMirror-dialog.CodeMirror-dialog-bottom>button')).click().then(function (result) {

					},
						function (error) {
							console.log("Error in replaceWholeXMLTextInUnitPopUp - Yes Button");
						});
				},
					function (error) {
						console.log("Error in replaceWholeXMLTextInUnitPopUp - Replace With");
					});
			},
				function (error) {
					console.log("Error in replaceWholeXMLTextInUnitPopUp - Search");
				});
		},
			function (error) {
				console.log("Error in replaceWholeXMLTextInUnitPopUp");
			});
	};

	/*
	 * returns the xml content in unit popup 
	 */
	this.getXMLTextInUnitPopUp = function () {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getXMLTextInUnitPopUp");
				return "";
			});
	};

	/*
	 * Select first tag(start to end) in xml content in unit popup 
	 * [Start tag should not have any inner tags]
	 */
	this.selectFirstTagInXMLTextInUnitPopUp = function () {
		element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '<')).get(0).getText().then(function (result) {
			element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '/>')).get(0).getText().then(function (result) {
				var startEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "<")).get(0);
				var endEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "\>")).get(0);
				browser.sleep(1000);
				browser.actions()
					.mouseMove(startEl, { x: 0, y: 0 })
					.mouseDown()
					.mouseMove(endEl, { x: 15, y: 0 })
					.mouseUp().perform();
				browser.sleep(1000);
			},
				function (error) {
					console.log("Error in selectFirstTagInXMLTextInUnitPopUp - end tag greater than  ");
				});
		},
			function (error) {
				console.log("Error in selectFirstTagInXMLTextInUnitPopUp - start tag less than ");
			});
	};

	// this.clickCancelButtonInModalUnitEditPopUp = function () {
	// 	element(by.css('[ng-click="cancelEdition()"]')).isDisplayed().then(function (result) {
	// 		browser.executeScript("arguments[0].scrollIntoView();", element(by.css('[ng-click="cancelEdition()"]')).getWebElement());
	// 		element(by.css('[ng-click="cancelEdition()"]')).click();
	// 	},
	// 		function (error) {
	// 			console.log("Error in click() in clickCancelButtonInModalUnitEditPopUp");
	// 		});
	// };

	this.clickCancelButtonInModalUnitEditPopUp = function () {
		var el = element(by.xpath("//button[@name='btnConfirmationDialogCancel']"));
		return el.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(el).perform();

			} else {
				console.log("Error in clickCancelButtonInModalUnitEditPopUp");
				return false;
			}
		});

	};


	//click on ok button in validation confirmation popup

	this.clickOnOKConfirmationPopup = function () {
		var el = element(by.xpath("//button[@name='btnConfirmationDialogAccept'][text()='Ok']"));
		return el.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(el).perform();

			} else {
				console.log("Error in clickOnOKConfirmationPopup");
				return false;
			}
		});
	};

	this.isCancelButtonDisplayedInModalUnitEditPopUp = function () {
		return element(by.css('[ng-click="cancelEdition()"]')).isDisplayed().then(function (result) {
			return true;
		},
			function (error) {
				console.log("Error in isCancelButtonDisplayedInModalUnitEditPopUp");
			});
	};
	// to enter some text using protracotr in any text  box(it may not work for some text boxes)
	this.enteringTextUsingProtractor = function (value) {
		browser.sleep(2000);
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(value).keyUp(protractor.Key.CONTROL).perform();


	};

	/*
 * Get Text of Error message of validation pop up
 */
	this.getTextofErrorValidation = function () {
		return element(by.css('.input-element.wrapwords.ng-scope.ng-binding')).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getTextofErrorValidation");
				return "";
			});
	};

	this.isPasteDropdownPresentXEditor = function () {
		return element(by.id('splitbutton-1037')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isPasteDropdownPresentXEditor");
				return false;
			});
	};
	//enter the text in the replace search box and replace it with new text
	this.enterTextInReplaceSearchBox = function (actualtext, newtext) {
		//var e = element(by.css('.CodeMirror-search-field'));
		var e = element(by.xpath('//*[@class="CodeMirror-search-field"]'));

		e.isPresent().then(() => {
			browser.actions().click(e).sendKeys(actualtext).perform();

			browser.actions().click(e).sendKeys(protractor.Key.ENTER).perform();

			//Enter new text in replace with field
			browser.actions().click(e).sendKeys(newtext).perform();
			browser.sleep(2000);
			browser.actions().click(e).sendKeys(protractor.Key.ENTER).perform();

			element(by.css('.CodeMirror-dialog.CodeMirror-dialog-bottom>button')).click();


		});


		// browser.sleep(500);
		// element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);

	};

	//select all the text
	this.selectAllText = function () {
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').keyUp(protractor.Key.CONTROL).perform();
		browser.sleep(1000);

	};


	//Delete pop up is displayed while deleting Unit
	this.isDeleteUnitPopUpDisplayed = function () {
		return element(by.css('.modal-confirm-message.ng-scope.ng-binding')).isPresent();
	};

	/*
	 * Sends text to 'Search Input Field' in unit popup 
	 */
	this.sendKeyToSearchInputFieldAndPressEnter = function (searckKey) {
		element(by.css('.CodeMirror-search-field')).sendKeys(searckKey).then(function (result) {
			element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
		},
			function (error) {
				console.log("Error in sendKeyToSearchInputFieldAndPressEnter");
			});
	};


	this.isPasteWordDialogBoxDisplayed = function () {
		// return element(by.id('window-1403_header_hd-textEl')).isPresent().then(function (displayed) {
		return element(by.xpath("//span[@class='x-header-text x-window-header-text x-window-header-text-default']")).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isPasteWordDialogBoxDisplayed");
				return false;
			});
	};

	this.sendWordKeyIntoDialogBoxWord = function (value) {
		element(by.css('html')).click();
		element(by.css('html')).clear();
		element(by.css('html')).sendKeys(value);
	};


	this.clickInsertButtonPasteDialogBox = function () {

		element(by.id('button-1405-btnInnerEl')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in clickInsertButtonPasteDialogBox");
			});
	};


	this.enterTextIntoWordPopup = function (value) {

		element.all(by.id('window-1303-body')).click();
		browser.sleep(2000);
		element.all(by.css('window-1303-body')).sendKeys(value);
		browser.sleep(3000);
		// element(by.id('textarea-1307-bodyEl')).click();
		// element(by.id('textarea-1307-bodyEl')).sendKeys(value);
	};
	/*
This method assumes the test is taking care of having some text in the clipboard 
*/
	// this.enteringTextUsingProtractor = function (value) {
	// 	browser.sleep(2000);
	// 	browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(value).perform();

	// };

	this.switchingFrameintoPasteOffice = function (value) {
		element(by.xpath("//body[@onload='initPasteIframe()']")).sendKeys(value);

	};

	this.isUnitOrTextXMLFilePopUpDisplayed = function () {
		return element(by.xpath("//span[@tooltip='A.1 (original)']")).isPresent();
	};


	//click on edit button

	this.clickOnEditButton = function () {
		element(by.css('#panel-fixed-minified #btnGoToEditMode')).click();
	};

	/*
	 * Checks if the 'given value' is highlighted in xml text 
	 */
	this.isGivenValueHighlightedInXMLContentInUnitPopUp = function (value) {
		return element.all(by.css('.cm-cm-overlay.cm-searching')).get(0).isPresent().then(function (result) {
			return element.all(by.css('.cm-cm-overlay.cm-searching')).get(0).getText().then(function (actualText) {
				console.log(actualText);
				if (actualText === value) {
					return true;
				} else {
					return false;
				}
			},
				function (error) {
					console.log("Error in isGivenValueHighlightedInXMLContentInUnitPopUp");
					return false;
				});
		},
			function (error) {
				console.log("Error in isGivenValueHighlightedInXMLContentInUnitPopUp");
				return false;
			});
	};


	this.writeParagraphTwoInAddUnitPopUpAndPressEnter = function (value) {
		browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
			var el = browser.driver.findElement(by.id('visible-e16'));
			browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
		},
			function (error) {
				console.log("Error in isDisplayed() in writeParagraphTwoInAddUnitPopUpAndPressEnter");
			});
	};


	/*
	 * Checks if the 'Search Field Input' is displayed in unit popup 
	 */
	this.isSearchFieldInputDisplayedInUnitPopUp = function () {
		return element(by.css('.CodeMirror-search-field')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSearchFieldInputDisplayedInUnitPopUp");
				return false;
			});
	};

	//click on global icon

	this.clickOnGlobalIcon = function () {
		element.all(by.css('.multilang-ico')).get(0).click();
	};

	this.isModalWindowDisplayed = function () {
		return element(by.css('.modal-content')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSearchFieldInputDisplayedInUnitPopUp");
				return false;
			});
	};

	// //after clicking global icon-you click on edit in edit abstracts

	// this.clickOnEditButtonInAbstract = function () {
	// 	element(by.css('[ng-click="statuteData.editAbstractUniqueLang()"]')).click();
	// };

	/*
	* Checks if the error pop up displayed
	*/
	this.isImportUnitXMLPopUPErrorDisplayed = function (fileName) {
		return element(by.css('.modal-content')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isImportUnitXMLPopUPErrorDisplayed");
				return false;
			});
	};

	/*
	 * click on cancel or close(X) button in Browse XML
	 */
	// this.clickCancelButtonBrowseXML = function () {
	// 	return element(by.css('button[ng-click="close()"]')).click().then(function (present) {
	// 		return present;
	// 	},
	// 		function (error) {
	// 			console.log("Error in clickCancelButtonBrowseXML");
	// 			return false;
	// 		});
	// };

	//Write the paragraph in inside text
	this.writeParagraphTwoInAddUnitPopUp = function (value) {//Do not press enter after input
		browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
			var el = browser.driver.findElement(by.id('visible-e16'));
			browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
		},
			function (error) {
				console.log("Error in isDisplayed() in writeParagraphTwoInAddUnitPopUp");
			});
	};


	/*
	 * This function returns true if the version found for the given unit
	 */
	this.isVersionExistForUnit = function (expectedUnit, version) {//[RB.1/TIT.I] (1)
		var text = "//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]"
		if (expectedUnit.includes('[')) {
			var versionFound = element(by.xpath("//div[@id='structure-display']//span[text()='" + expectedUnit + " ']//following:: span[text()='" + version + "'][1]"));
			return versionFound.isDisplayed().then(found => {
				console.log("verson founded:", found);
				return found;
			});
		} else {
			var versionFound = element(by.xpath("//div[@id='structure-display']//span[text()='[" + expectedUnit + "] ']//following:: span[text()='" + version + "'][1]"));
			return versionFound.isDisplayed().then(found => {
				console.log("verson founded:", found);
				return found;
			});
		}

	};


	this.isOriginalStructureDisplayed = function () {
		return element(by.css('.originalStructure')).isPresent();
	};

	//this function is only used to fill the mandatory fields in ref* and o* for any Datatype (Notatexto, nota..etc)
	this.fillMandatoryFieldsofNota = function (datatype, fieldName, value) {

		element(by.xpath("(//div[text()='" + datatype + "']//following:: label[text()='" + fieldName + "']//following:: input[@type='text'])[1]")).click();
		element(by.xpath("(//div[text()='" + datatype + "']//following:: label[text()='" + fieldName + "']//following:: input[@type='text'])[1]")).sendKeys(value);
		browser.sleep(2000);

	};

	/*
	 * Checks if the structure visible in the doc structure page
	 */
	this.isStructureNameVisibleInRightPanelHeader = function (expDate) {

		return element
			.all(by.cssContainingText('[ng-class="structure.inForce ? \'color-orange\' : \'\'"]', expDate))
			.get(0).isPresent().then(function (displayed) {
				return displayed;
			},
				function (error) {
					console.log("Error in isStructureNameVisibleInRightPanelHeader");
					return false;
				});
	};


	this.writeFieldInInnerTitleEditPopUp = function (value, i) {
		element.all(by.css('.x-form-field.x-form-text')).get(i).click().then(function (result) {
			element.all(by.css('.x-form-field.x-form-text')).get(i).sendKeys(value).then(function (result) {

			},
				function (error) {
					console.log("Error in sendKeys() in writeFieldInInnerTitleEditPopUp");
				});
		},
			function (error) {
				console.log("Error in click() in writeFieldInInnerTitleEditPopUp");
			});
	};


	/*
      To verify if image of particular child or sibling shown on modal or not
	*/


	this.isImageShowforUpperSibling = function () {
		return $('.add-structure-unit-upper-sibling-image.ng-scope').isDisplayed().then(result => {
			return result;
		});
	},

		this.isImageShowforLowerSibling = function () {
			return $('.add-structure-unit-lower-sibling-image.ng-scope').isDisplayed().then(result => {
				return result;
			});
		},
		this.isImageShowforChild = function () {
			return $('.add-structure-unit-child-image.ng-scope').isDisplayed().then(result => {
				return result;
			});
		},


		// Click on the language dropdown and select a language in right panel

		this.clickOnLanguageDropdownAndSelectALanguage = function (lableName, option) {
			element(by.xpath("//*[@class='text-features-values']//*[text()='" + lableName + ":']//following:: select[1]")).click();
			element(by.xpath("//*[@class='text-features-values']//*[text()='" + lableName + ":']//following:: *[text()='" + option + "']")).click();

		};


	/*
	 * Checks if the given text exist in the whole xml content in unit popup 
	 */
	this.isXMLTextInUnitPopUpContains = function (expText) {
		return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
			return text.includes(expText);
		},
			function (error) {
				console.log("Error in isXMLTextInUnitPopUpContains");
				return false;
			});
	};


	this.isRightPanelTabDisplayed = function (tabName) {
		return element(by.xpath("//*[@ng-click='select()'][text()='" + tabName + "']")).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in in isRightPanelTabDisplayedInRightPanel");
				return false;
			});
	};

	this.isHighlightedTabInRightPanelEquals = function (expText) {
		return element(by.xpath("//*[@class='ng-isolate-scope active']//a[text()='" + expText + "']")).getText().then(function (actualText) {
			if (expText === actualText) {
				return true;
			} else {
				return false;
			}
		},
			function (error) {
				return false;
			});
	};

	this.clickonEnterdata = function (data) {
		element(by.css('.x-form-field.x-form-text.x-form-textarea')).click();
		element(by.css('.x-form-field.x-form-text.x-form-textarea')).sendKeys(data);
	};


	/*
 * Move the cursor to the end of xml content in unit popup 
 * Note: this moves the cursor to the end of tag (finds by text '>')
 */
	this.moveCursorToTheEndOfTagInXMLText = function (index) {
		element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '>')).get(index).getText().then(function (result) {
			var endEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '>')).get(index);
			browser.actions()
				.mouseMove(endEl, { x: 10, y: 0 })
				.mouseDown()
				.mouseUp().perform();
		},
			function (error) {
				console.log("Error in moveCursorToTheEndOfXMLText");
				return false;
			});
	};


	this.rightClickOniFrameTextFieldAndSelectfataTableParent = function () {

		return element(by.id('visible-e3')).click().then(function (result) {
			browser.actions().click(protractor.Button.RIGHT).perform();
			browser.actions().mouseMove({ x: 10, y: 45 }).perform();
			browser.sleep(4000);
			browser.actions().mouseMove({ x: 200, y: 0 }).perform();
			browser.sleep(4000);
			browser.actions().mouseMove({ x: 150, y: 30 }).click().perform();
			browser.sleep(4000);

			return result;
		},
			function (error) {
				console.log("Error in rightClickOniFrameTextFieldAndSelectfataTableParent");
				return false;
			});
	};

	//click on table link

	this.clickTableLink = function () {
		element(by.css('[data-type="faltatable"]')).click();

	};


};

module.exports = new rightpanelpage();