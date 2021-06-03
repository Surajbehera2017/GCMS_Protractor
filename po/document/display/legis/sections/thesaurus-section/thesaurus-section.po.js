var thesauruspage = function () {

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


	    //clicking on show filters and hide filters in thesaurus table
this.clickOnFiltersInThesaurusTable = function(button){
	var loc = element(by.xpath("//button[@ng-click='showHideFilters()'][contains(text(),'" + button + "')]"));
	 return loc.isDisplayed().then(function(el){
		 if(el == true){
			 loc.click();
		 }
		 else{
			console.log("" + button + "is not visible");
			return false; 
		 }
		}, function(error){
			console.log("error in clickOnFiltersInThesaurusTable");
			return false;
		
	 });
};


	//clicking on the Add button in the add thesaurus window to add the thesaurus

	this.clickOnAddButtonInThesaurus = function(){
		var el = element(by.xpath("//div[@class='col-md-2 padding-top-1']//button[@id='btnSaveAdd']"));
		return el.isPresent().then(function(present){
			if(present == true){
				el.click();
				return present;

			}
			else{
				return false;
			}

		}, function (error) {
			console.log("error in clickOnAddButtonInThesaurus");
			return false;		
		});

	};



	//validate whether the duplicate error message is displayed after clicking on add button
	//e.g,: There is already an entry associated with this concept.
	this.validateDuplicationMessage = function(errormsg){

		var loc = element(by.xpath("//div[@name='txtInfoDialog']//li[contains(text(),'" + errormsg + "')]"));
		return loc.getText().then(function(text) {
		if(text == errormsg){

			return true;
		} 
		else{
			return false;
		}
	}, function (error) {
		console.log("error in validateDuplicationMessage ");
		return false;
	});
};




	//Click on button inside section table (Add, Edit , Show Filters, ...etc)
	this.clickOnbuttonInsideSectionTable = function (buttonName) {
		var loc = element(by.xpath("//div[@class='modal-content']//following:: *[text()='" + buttonName + "']"));
		browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
		loc.isEnabled().then(function (result) {
			if (result == true) {
				loc.click();
			} else {
				console.log(buttonName + " button Of " + sectionName + " is Disabled");
			}
		});
	};

	//click on given thesaurus type after expanding thesaurus section
	this.clickOnGiveThesaurusType = function (thesaurusType) {
		element.all(by.css('[ng-click="thesaurus.viewThesaurusDetail(1, t.name)"]')).each(function (element, index) {
			element.getText().then(function (text) {
				if (text.indexOf((thesaurusType)) !== -1) {
					element.click();
				}

				// else {
				// 	console.log("Error in clickOnGiveThesaurusType");
				// 	return false;
				// }

			});
		});
	};

	//to enter the marginal data in import pop up : test data mentioned below
	//ex: 'Code','RCL'; 'Year','1947';  'N°','476'
	this.enterMarginalIdImport = function (option, value) {
		if (option.includes('Code')) {
			element(by.xpath("(//div[contains(@class,'import')]//*[contains(@class,'dropdown-toggle') or @name='lnkSearchDropdownNav'])[1]")).click();
		//	element(by.xpath("//div[@class='import-fields']//a[@name='lnkSearchDropdownNav']")).click();
			var el = element(by.xpath("//div[@class='import-fields']//input[@name='txtdropdownsearch']"));
			return el.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(el).sendKeys(value).perform();
					browser.actions().click(el).sendKeys(protractor.Key.ENTER).perform();
					return result;
				}

			}, function (error) {
				console.log("error in enterMarginalIdImport: code " + value, error);
				return false;
			});
		}
		else if (option.includes('Year')) {
			var loc = element(by.xpath("//div[@class='import-fields']//input[@ng-model='model.year']"));
			return loc.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(loc).sendKeys(value).perform();
					return result;
				}

			}, function (error) {
				console.log("error in enterMarginalIdImport: year  " + value, error);
				return false;
			});

		}
		else {
			var loc2 = element(by.xpath("//div[@class='import-fields']//input[@ng-model='model.number']"));
			return loc2.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(loc2).sendKeys(value).perform();
					return result;
				}
			}, function (error) {
				console.log("error in enterMarginalIdImport: number  " + value, error);
				return false;
			});

		}
	};
	//choose entries from the import popup
	this.selectEntriesInImportPopup = function (expectedType) {

		var el = element(by.xpath("//*[contains(text(),'" + expectedType + "')]//following-sibling::input"));
		return el.isPresent().then(function (present) {
			if (present === true) {
				el.click();
				return present;
			}
			else {
				return false;
			}
		}, function (error) {
			console.log("error in selectEntriesInImportPopup ");
			return false;
		});

	};

	//click on "+" icon  and add a new unit
	this.clickOnPlusButton = function () {

		var el = element(by.xpath("//button[@id='btnSearchUnit']//span[@class='glyphicon glyphicon-plus']"));
		return el.isPresent().then(function (present) {
			if (present === true) {
				el.click();
				return present;
			}
			else {
				return false;
			}
		}, function (error) {
			console.log("error in clickOnPlusButton ");
			return false;
		});

	};


	//to enter the unit id in the add unit id pop up
	this.enterUnitIDInPopup = function (value) {
		element(by.xpath("//div[@id='unitEditionContainer']//input[@ng-model='UnitIdEditionCtrl.unitName']")).click().then(function (result) {
			element(by.xpath("//div[@id='unitEditionContainer']//input[@ng-model='UnitIdEditionCtrl.unitName']")).sendKeys(value);
		},

			function (error) {
				console.log("Error in entering unit ID");

			});
	};

	//click on complemenatry dropdown in the add unit pop up
	this.clickOnComplementDropdown = function () {

		var el = element(by.xpath("//div[@id='unitEdit.complement.selector']//a[@name='lnkSearchDropdown']"));
		return el.isPresent().then(function (present) {
			if (present === true) {
				el.click();
				return present;
			}
			else {
				return false;
			}
		}, function (error) {
			console.log("error in clickOnComplementDropdown ");
			return false;
		});
	};

	// to select the number from complemenatry dropdown in the add unit pop up
	this.selectNumberFromComplement = function (value) {
		element(by.xpath("//div[@id='unitEdit.complement.selector']//input[@name='txtdropdownsearch']")).click();
		element(by.xpath("//div[@id='unitEdit.complement.selector']//input[@name='txtdropdownsearch']")).sendKeys(value).then(function (sentdata) {
			element(by.xpath("//div[@id='unitEdit.complement.selector']//input[@name='txtdropdownsearch']")).sendKeys(protractor.Key.ENTER);
			element(by.xpath("//div[@id='unitEdit.complement.selector']//a[@ng-click='select(item)']")).click();
		},

			function (error) {
				console.log("Error in selecting the complement");
			});
	};

	/* this function is used to add the required unit by searching it from the unit dropdown
	  and click on the resulted unit and check for the searched unit present and click on plus button next to it */
	this.clickAndSearchAUnit = function (value) {
		element(by.model('model[property]')).click();
		element(by.model('searchtext')).click();
		element(by.model('searchtext')).sendKeys(value);
		element(by.model('searchtext')).sendKeys(protractor.Key.ENTER);
		element.all(by.css('.padding-left-5.padding-right-5.ng-binding')).each(function (listOfElements) {
			listOfElements.getText().then(function (text) {
				if (text.indexOf(value) != -1) {
					element(by.css('.glyphicon.glyphicon-plus')).click();
				}
			});

		});

	};

//This method takes the Thesaurus type value to select from dropdown and clicks on the given value.

this.selectThesarusTypeFromDropdown = function (givenText) {

	//var _selectThesaurusType = element(by.model('TsAddModalCtrl.selectedThesaurus')).click();
	var _selectThesaurusType = element(by.xpath('//select[contains(@ng-model,"AddModalCtrl")][1]')).click();
	var selectThesaurusvalue = element.all(by.xpath("//option[@class='ng-scope ng-binding']")).each(function (types) {
	types.getText().then(function (result) {
		if (result == givenText) {

			types.click();
			return result;
			}
		else {
		return false;
		console.log("error in selectThesarusTypeFromDropdown")
		}

		});

	  });
	};


    /*
	 This method takes the Thesaurus hierarchy text and clicks on the respective value on the page
	 */

	this.selectThesaurusHierarchy = function (expectedHierarchy) {

		element.all(by.css('.tree-node.tree-node-content.pointerCursor.ng-scope.ng-binding.angular-ui-tree-handle')).each(function (element) {
			element.getText().then(function (text) {
				if (text === expectedHierarchy) {
					browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
					browser.actions().mouseMove(element).perform();
					browser.actions().click().perform();
					browser.sleep(2000);

				}
			});
		});
	};

	/*
	 This method takes the thesaurus hierarchy term text and compares the text value
	 and clicks on the respective checkbox
	*/
	this.getIndexAndClickOnThesaurusTerm = function (expectedTerm) {

		var indexOfTerm = 0;
		element.all(by.css('.thesaurusTerm.ng-binding')).each(function (listOfElements) {
			listOfElements.getText().then(function (text) {

				if (text === expectedTerm) {

					element.all(by.css('.blue-borde-checkbox-thesaurus.cursor-pointer')).get(indexOfTerm).click();
					browser.sleep(3000);
					return;
				}
				else {
					indexOfTerm = indexOfTerm + 1;
				}
			});
		});
		return;

	};

	//to enter the unit id in the show filter search
	this.enterUnitId = function (unitid) {

		//element(by.xpath('//div[@id="filter-thesaurus-1"]//input[@ng-model="marginalNameInput"]')).click();
		element(by.xpath('//div[@id="filter-thesaurus-1"]//input[@ng-model="marginalNameInput"]')).sendKeys(unitid);
		element(by.xpath('//div[@id="filter-thesaurus-1"]//input[@ng-model="marginalNameInput"]')).sendKeys(protractor.Key.ENTER);

	};

	//to enter the unit lever in show filter search
	this.enterUnitLevel = function (unitlevel) {

		element(by.xpath('//div[@id="filter-thesaurus-2"]//input[@ng-model="unitLevelInput"]')).sendKeys(unitlevel);
		element(by.xpath('//div[@id="filter-thesaurus-2"]//input[@ng-model="unitLevelInput"]')).sendKeys(protractor.Key.ENTER);
	};

	//to enter the thesaurus term in the show filters search
	this.enterThesaurusTerm = function (thesaurusterm) {
		element(by.xpath('//div[@id="filter-thesaurus-3"]//input[@ng-model="thesaurusTermInput"]')).sendKeys(thesaurusterm);
		element(by.xpath('//div[@id="filter-thesaurus-3"]//input[@ng-model="thesaurusTermInput"]')).sendKeys(protractor.Key.ENTER);

	};

	//to enter the Analyst name in the show filters search
	this.enterAnalystName = function (analystname) {
		element(by.xpath('//div[@id="filter-thesaurus-6"]//input[@ng-model="analystInput"]')).sendKeys(analystname);
		element(by.xpath('//div[@id="filter-thesaurus-6"]//input[@ng-model="analystInput"]')).sendKeys(protractor.Key.ENTER);
	};

	//to select the yes or no from the principal dropdown in show filter
	this.selectOptionPrincipal = function (option) {
		element(by.xpath('//div[@id="filter-thesaurus-5"]//option[contains(text(),"' + option + '")]')).click()

	};

	//seleting multiple rows in the all sections tables
	//testdata 'All' or '1' or '10' or '5'
	this.selectNoOfRows = function (noofrows) {

		if(noofrows.includes('All')){
			var el= element(by.xpath('//*[contains(@class,"multi-select")]//input[@type="checkbox"]'));
			return el.isDisplayed().then(function(displayed){
				if(displayed===true){
					el.click();
					return displayed;
				}
				else {
					return false;
				}
			}, function (error) {
				console.log("error in selectNoOfRows: seletcAll");
				return false;
			});
		}
		else {
			var e = element.all(by.xpath('//input[@type="checkbox"][contains(@ng-model,"item.selected")]'));
			e.each(function (element, index) {
				if (index < noofrows) {
					element.click();
				}

			}, function (error) {
				console.log("error in selectNoOfRows: selectnoofrows");
				return false;
			});
		}
	};

	/*
    To delete , edit  and copy particular record in actions column thesaurus table
	*/
	this.thesaurusAction = function (action) {

		if (action == 'delete')
			element(by.xpath("//a[@ng-click='" + action + "Thesaurus(item.idFicha)']")).click();
		else
			element(by.xpath("//a[@ng-click='" + action + "Thesaurus(item)']")).click();

	};

	//Click on a link, Ex-'Add complementary info','Edit'
	this.clickOnLinkForGlobal = function (linkName) {
		var e = element(by.xpath("//a[text()='" + linkName + "']"));
		e.click();
	};

	//to write text in the xeditor after clicking complementary info link
	//test data - datatype:'parrafo','text'
	this.enterTextSpecificDatatype = function (datatype, value) {
		var el = element(by.xpath("//div[@data-type='" + datatype + "']"));
		return el.isPresent().then(function (result) {
			if (result === true) {

				console.log(value);
				browser.actions().click(el).sendKeys(value).perform();

				return result;
			}
			else {

				console.log("error in enterTextSpecificDatatype");
				return false;
			}
		});
	};


	//select all and delete in edit(visual) window
	this.selectAllAndDelete = function () {
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').keyUp(protractor.Key.CONTROL).perform();
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.DELETE).perform();
	};
	
	//click on the '...' icon next to complementary info column in thesaurus table
	this.clickOnComplementaryInfoIcon = function () {

		element(by.xpath("//div[@id='thesaurusTableContainer']//span[@ng-click='toggleAllDetails()']")).click();
	};


	//click on viewmore link to expand the complementary info
	this.clickOnViewMoreLink = function (viewmore) {

		var el = element(by.xpath("//div[@ng-if='item.texto']//strong[text()='" + viewmore + "']"));
		return el.isPresent().then(function (result) {
			if (result == true) {
				el.click();
			} else {
				console.log("View More link is not present");
			}
		}, function (error) {
			console.log("error in clickOnViewMoreLink");
			return false;
		});
	};

	//click on 'x' button to collapse the complementary info section
	this.collapseComplementaryInfo = function () {

		
		var el = element(by.xpath("//div[@id='thesaurusTableContainer']//i[@ng-click='toggleDetail($index)']"));
		return el.isPresent().then(function (result) {
			if (result === true) {
				el.click();
				return result;
			} else {
				console.log("View More link is not present");
				return false;
			}
		}, function (error) {
			console.log("error in collapseComplementaryInfo");
			return false;
		});

	};

	//to validate the error message in the import popup
	this.ValidateErrormessage = function (errortext) {
		var el = element(by.xpath("//span[@ng-bind='messageError']"));
		return el.getText().then(function (text) {
			if (text === errortext) {
				return true;
			}
			else {
				return false;
			}
		},
			function (error) {
				console.log("error in ValidateErrormessage");
				return false;
			}
		);

	};

	//to validate the error message after importing thesaurus entries
	this.validateErrormessageAfterImport = function (errortext) {

		var el = element(by.xpath("//*[@class='block ng-binding'][contains(text(),'" + errortext + "')]"));
		return el.getText().then(function (result) {

			if (result === errortext) {
				return true;
			}
			else {
				return false;
			}
		},
			function (error) {
				console.log("error in validateErrormessageAterImport");
				return false;
			}

		);
	};


	//to validate the error message after click on save popup
	this.ValidateErrormessagAfterSave = function (errortext) {
		var el = element(by.xpath("//*[@name='txtInfoDialog']/li"));
		return el.getText().then(function (text) {
			if (text === errortext) {
				return true;
			}
			else {
				return false;
			}
		},
			function (error) {
				console.log("error in ValidateErrormessagAfterSave");
				return false;
			}
		);

	};

	/*Click on tabs inside X-Editor
	TD:General,Format,Table	
	*/
	this.clickOnTabXeditor = function (tabName) {
		var e = element(by.xpath("//*[@class='x-tab-inner x-tab-inner-center' and text()='" + tabName + "']"));
		e.click();

	};


	// to enter some text using protracotr in any text  box(it may not work for some text boxes)
	this.enteringTextUsingProtractor = function (value) {
		browser.sleep(2000);
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(value).perform();


	};

	//Click on Insert or Cancel button
	this.clickOnInsertOrCancel = function (option) {

		element(by.xpath("//span[@class='x-btn-button']//span[text()='" + option + "']")).click();

	};

	/*Click on actions available under general X-Editor
	TD:Save,Undo,Redo,Cut,Copy,Paste	
	*/
	this.clickOnActionsInGeneralTab = function (action) {

		browser.driver.findElement(by.xpath("//a[@data-qtip='" + action + "']/span/span")).isDisplayed().then(function (result) {
			var e = element(by.xpath("//a[@data-qtip='" + action + "']/span/span"));
			e.click();
		},
			function (error) {
				console.log("Error in clickOnActionsInGeneralTab");
			});

	};

	/*click on 
	Change the Word format (Bold,Italic,.. etc)
	TD:bold,italic,bolditalic_32,underline,overline,strikethrough,superscript2,subscript2,subscript,superscript
	,paragraph-left,paragraph-right,paragraph-center,paragraph-justify
	*/
	this.changeTheWordFormat = function (format) {
		if (format.includes('32')) {
			element(by.xpath("//*[@class='x-btn-icon-el icon-text_" + format + " ']")).click();
		} else {
			browser.driver.findElement(by.xpath("//*[@class='x-btn-icon-el gcms2-" + format + " ']")).isDisplayed().then(function () {
				element(by.xpath("//*[@class='x-btn-icon-el gcms2-" + format + " ']")).click();
			},
				function (error) {
					console.log("Error in changeTheWordFormat")
				}
			);
		}
	};



	//Click on heirarchy and enter value in textbox and click on enter
	this.clickHierarchyEnterText = function (value) {
		this.clickOnLinkForGlobal('HIERARCHY');
		element(by.xpath("//*[@class='tab-pane ng-scope active']/input")).sendKeys(value);
		browser.sleep(1000);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();

	};

	
//to check the scenario of "no hierarchy found" and "no term found"
	this.isNoResultDisplayed = function (parameter, errortext) {

		if (parameter.includes('hierarchy')) {

		var el = element(by.xpath("//*[contains(@ng-show,'hierarchySearchNoResults')]"));
		//browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
		return el.getText().then(function (text) {
		console.log("text:", text);
			if (text === errortext) {
		return true;
		}
		else {

		return false;
		}
		},
		function (error) {
		console.log("error in isNoResultDisplayed:hierarchy");
		return false;
		});
	}

	else {
		var el = element(by.xpath("//*[contains(@ng-show,'termSearchNoResults')]"));
		return el.getText().then(function (result) {
		if (result === errortext) {
	    return true;
	}
		else {
		return true;
	}
	},
			function (error) {
			console.log("error in isNoResultDisplayed:term");
			return false;
	});

	}
	};



	this.clickTermEnterText = function (value) {
		this.clickOnLinkForGlobal('Term');
		element(by.xpath("//*[@class='tab-pane ng-scope active']/input")).sendKeys(value);
		browser.sleep(1000);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};

	//click on "x" button in classification entry popup or import popup

	this.clickOnXbutton = function (Xbutton) {

		if (Xbutton.includes('classification')) {

			var loc = element(by.xpath("//*[@class='col-sm-1 right-3']//button"));
			return loc.isPresent().then(function (present) {
				if (present === true) {
					browser.actions().click(loc).perform();
					return true;
				}
			},
				function (error) {
					console.log("error in clickOnXbutton:classification");
					return false;
				});
		}

		else {

			var el = element(by.xpath("//a[@ng-click='close()']"));
			return el.isPresent().then(function (present1) {
				if (present1 === true) {
					browser.actions().click(el).perform();
					return true;
				}
			},
				function (error) {
					console.log("error in clickOnXbutton:import");
					return false;
				});
		}

	};

	/*clicks on element using class attribute
	TD:value of Class
	*/
	this.clickOnElementClass = function (loc) {
		var ele = element(By.xpath("//*[@class='" + loc + "']"));
		return ele.isPresent().then(function (ele1) {
			if (ele1) {
				ele.click();
				return ele1;
			}
			else {
				console.log("error in clickOnElementClass");
				return false;
			}

		}, function (error) {
			console.log("error in clickOnElementClass, unable to find the element " + loc);
			return false;
		});

	};
	//verify current date is displayed in  last modified colomn in the table and 
	//testdata: object of the element
	this.getDateAndVerify = function (prop) {
		var date = element(by.xpath(prop));

		return date.isDisplayed().then(function (ele) {
			if (ele) {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth() + 1; //January is 0!
				var yyyy = today.getFullYear();

				if (dd < 10) {
					dd = '0' + dd
				}

				if (mm < 10) {
					mm = '0' + mm
				}

				today = dd + '/' + mm + '/' + yyyy;
				//console.log(today);

				date.getText().then(function (text) {
					//console.log(text)
					if (text===today) {
						return ele;
					}
					else {
						console.log("element does not have current date");
					}
				});

			}

		}, function (error) {
			console.log("error in getDateAndVerify: element is not displayed");
		});

	};

	//this function is used to click on import button inside the import popup

	 this.clickImportInPopup = function(){

		var ele = element(By.xpath("//button[text()='Import']"));
		return ele.isPresent().then(function (ele1) {
			if (ele1) {
				ele.click();
				return ele1;
			}
			else {
				console.log("element is not present");
				return false;
			}

		}, function (error) {
			console.log("error in clickImportInPopup");
			return false;
		});

	 };
	
};

module.exports = new thesauruspage();