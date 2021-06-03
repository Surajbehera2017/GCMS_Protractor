var authornotessection = function () {
	var _loginUserName = element(by.model('credentials.username'));
	var _loginPassword = element(by.model('credentials.password'));
	var _loginButton = element(by.css('div.modal-footer button.btn.btn-primary.ng-binding'));


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


	//Expand any of one section in Left Panel
	this.expandSectionInLeftPanel = function (sectionName) {
		var loc = element(by.xpath("//strong[@class='ng-binding'][text()='" + sectionName + "']//preceding::a[2]"));
		return loc.isPresent().then(function (result) {
			if (result == true) {
				browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
				loc.click();
				return result;

			} else {
				console.log("Error in expandSectionInLeftPanel");
				return false;
			}
		});
	};


	//to click on actions in the Author-notes table(edit,copy,share...etc)
	this.selectActionFromTable = function (action) {

		var x = element(by.xpath("(//a[contains(@class,'" + action + "')])[1]"));
		return x.isEnabled().then(function (result) {
			browser.executeScript("arguments[0].click();", x);
			//browser.actions().click(x).perform();
			return result;
		}, function (error) {
			console.log("error in selectActionFromTable ", error);
			return false;
		});

	};


	//Click on any button in Any of one sections (Example- Add, Suggest,Delete, section(index))
	this.clickOnSectionButton = function (sectionName, buttonName) {

		if (buttonName.includes('view')) {
			var loc = element(by.xpath("(//strong[@class='ng-binding'][text()='" + sectionName + "']//following:: *[contains(text(),'(')])[1]"));

			return loc.isEnabled().then(function (result) {
				console.log("element enabled: ", result);
				browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
				if (result == true) {
					loc.click();
					return result;
				} else {
					console.log(buttonName + " button Of " + sectionName + " is Disabled");
					return false;
				}
			},
				function (error) {
					console.log("error in clickOnSectionButton:", error);
					return false;
				});

		} else {
			var loc = element(by.xpath("(//strong[@class='ng-binding'][text()='" + sectionName + "']//following:: *[contains(text(),'" + buttonName + "')])[1]"));
			return loc.isEnabled().then(function (result) {
				console.log("element enabled: ", result);
				if (result == true) {
					browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
					loc.click();
					return result;
				} else {
					console.log(buttonName + " button Of " + sectionName + " is Disabled");
					return false;
				}
			},
				function (error) {
					console.log("error in clickOnSectionButton:", error);
					return false;
				});
		}
	};

	//Click on button inside section table (Add, Edit , Show Filters, ...etc)
	this.clickOnbuttonInsideSectionTable = function (buttonName) {
		var loc = element(by.xpath("//div[@class='modal-content']//following:: *[text()='" + buttonName + "']"));
		//var loc= element(by.xpath("//div[@class='modal-content']//following::*[contains(text(),'" + buttonName + "')]"));
		return loc.isEnabled().then(function (result) {
			if (result == true) {
				browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
				loc.click();
				return result;
			} else {
				console.log(buttonName + " button is Disabled");
				return false;
			}
		},
			function (error) {
				console.log("error in clickOnbuttonInsideSectionTable:", error);
				return false;
			});

	};

	// // Click on Navigation or Close Button in view all table(first page , last page , close table etc)
	// this.clickOnNavigationOrCloseButton = function (buttonOption) {
	// 	var loc = element(by.xpath("//*[@ng-click='" + buttonOption + "()']"));
	// 	return loc.isEnabled().then(function (result) {
	// 		if (result == true) {
	// 			browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
	// 			loc.click();
	// 			return result;
	// 		} else {
	// 			console.log(buttonName + "  is Disabled ");
	// 			return false;
	// 		}
	// 	},
	// 		function (error) {
	// 			console.log("error in clickOnNavigationOrCloseButton:", error);
	// 			return false;
	// 		});
	// };

	//Below function will work on Version,Context Index Type,HIERARCHY,Term,Type of Note
	//Relevance / Visualization,Order , Propogate
	//pass the Valid field names : order ,Term , HIERARCHY, prop
	//Pass the value depends on the field erquirement
	this.selectSearchNameAndValue = function (fieldName, Value) {

		if (fieldName.includes('HIERARCHY') || fieldName.includes('Term')) {
			if (fieldName == 'HIERARCHY') {
				var updatedfieldname = 'Hierachy';
			}
			else {
				var updatedfieldname = 'Term';
			}

			var detectFieldName = element(by.xpath("//*[@id='searchAuthorNotesContainer']//*[contains(text(),'" + fieldName + "')]"));
			var textValue = element(by.xpath("(//*[contains(text(),'HIERARCHY')]//following:: *[contains(@ng-model,'" + updatedfieldname + "')])[1]"));
			return detectFieldName.isEnabled().then(function (result) {
				if (result == true) {

					detectFieldName.getAttribute('class').then(classname => {
						if (!(classname.includes('active'))) {
							browser.executeScript("arguments[0].scrollIntoView();", detectFieldName.getWebElement());
							detectFieldName.click();
						}
						browser.actions().click(textValue).sendKeys(Value).perform();
						browser.actions().sendKeys(protractor.Key.ENTER).perform();
						return result;
					});
				}
			},
				function (error) {
					console.log("error in selectSearchNameAndValue: on " + detectFieldName + " : ", error);
					return false;
				});


		} else if (fieldName.includes('order')) {
			var textValue = element(by.xpath("(//*[contains(text(),'HIERARCHY')]//following:: *[contains(@ng-model,'" + fieldName + "')])[1]"));
			return textValue.isPresent().then(function (result) {
				if (result == true) {
					browser.actions().click(textValue).sendKeys(Value).perform();
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
					return result;
				}
				else {
					console.log("error in selectSearchNameAndValue: on " + fieldName + " : ", error);
					return false;
				}

			});

		}
		else if (fieldName.includes('prop')) {

			var textValue = element(by.xpath("(//*[contains(text(),'HIERARCHY')]//following:: *[contains(@ng-model,'" + fieldName + "')])[1]"));
			return textValue.isPresent().then(function (result) {
				if (result == true) {
					browser.executeScript("arguments[0].scrollIntoView();", textValue.getWebElement());
					textValue.click();
					return true;
				}
				else {
					console.log("error in selectSearchNameAndValue: on " + fieldName + " : ", error);
					return false;
				}

			});

		}
		//this block is to select the type of note test data : 'Type of Note:','Doctrina-comentario'
		//also selects the context index type also testdata: 'Context Index Type:', 'CODEX'
		else {
			var detectFieldName1 = element(by.xpath("(//*[contains(text(),'" + fieldName + "')]// following:: select)[1]"));
			var selectValue = element(by.xpath("//*[contains(text(),'" + fieldName + "')]// following:: option[contains(text(),'" + Value + "')]"));
			return detectFieldName1.isPresent().then(function (result) {
				if (result == true) {
					browser.executeScript("arguments[0].scrollIntoView();", detectFieldName1.getWebElement());
					detectFieldName1.click();

					browser.executeScript("arguments[0].scrollIntoView();", selectValue.getWebElement());
					selectValue.click();
					return result;
				} else {
					console.log("Error in selectSearchNameAndValue");
					return false;
				}
			});
		}

	};

	//Click on Button (example: Add,Cancel, Import,Save....)
	this.clickOnButtonForGlobal = function (buttonName) {
		var loc = element(by.xpath("//button[text()='" + buttonName + "']"));
		return loc.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(loc).perform();
			} else {
				console.log("Error in clickOnButtonForGlobal");
				return false;
			}
		});
	};

	//Select the Analyst Name
	this.selectAnalyst = function (analystName) {
		var loc = element(by.xpath("// *[contains(text(),'Analyst')]/following:: a[@name='lnkSearchDropdown']"));
		var selectAnalystName = element(by.xpath("//div[@name='dropdown-directive']//a[contains(text(),'" + analystName + "')]"));
		loc.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(loc).perform();
				browser.sleep(2000);
				browser.actions().click(selectAnalystName).perform();
				return result;
			} else {
				console.log("Analyst role has already been set");
				return false;
			}
		});
	};

	//Select and Add unit from Add Hierarchy 
	//pass the value of unitName as A.2 and for action,  send value : 'addUnit','level'
	this.selectAndAddUnitFromDropDown = function (unitName, action) {
		var mainDropDown = element(by.xpath("//*[@id='panel1']//input[@ ng-click='$event.stopPropagation()']"));
		//  var mainDropDown= element(by.xpath("//*[@class='dropdown-toggle  nav-a']"));
		// var searchAndEnter = element(by.xpath("//input[@ng-model='searchtext']"));
		var searchAndEnter = element(by.xpath("//input[@name='txtdropdownsearch']"));
		var unitOrLevel = element(by.xpath("//*[@name='" + action + "']"));
		return mainDropDown.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(mainDropDown).perform();
				browser.sleep(2000);
				browser.actions().click(searchAndEnter).sendKeys(unitName).perform();
				browser.sleep(2000);
				browser.actions().sendKeys(protractor.Key.ENTER).perform();
				//console.log("20000");
				browser.sleep(2000);
				return unitOrLevel.isDisplayed().then(function (result1) {
					browser.actions().click(unitOrLevel).perform();
					return result1;
				});
				//return result;
			}

			else {
				console.log("error in selectAndAddUnitFromDropDown: on " + unitName + " : ", error);
				return false;
			}
		},
			function (error) {
				console.log("error in selectAndAddUnitFromDropDown: on " + unitName + " : ", error);
				return false;
			});


	};

	//Below function will check the added Unit is displayed or not
	this.isAddedUnitDisplayed = function (unitName) {
		var loc = element(by.xpath("//div[contains(@id,'idTreeSelected')]//*[contains(text(),'" + unitName + "')]"));
		return loc.isDisplayed().then(function (result) {
			return result;
		}, function (error) {
			console.log("Error in isAddedUnitDisplayed on : " + error);
			return false;
		});
	};

	//filling the version,level,unit.L fields in '#' popup

	this.enterDataInHashPopup = function (fieldname, value) {
		//var dropdown1 = element(by.xpath("(//div[contains(@ng-if,'Version')]//a)[1]"));
		//var dropdown2 = element(by.xpath("(//div[contains(@ng-if,'Unit')]//a)[1]"));Version

		if (fieldname == 'version') {
			var selectvalue = element(by.xpath("//div[contains(@class,'dropdown-menu')]//a[text()='" + value + "']"));
			var dropdown1 = element(by.xpath("(//div[contains(@ng-if,'Version')]//a)[1]"));
			dropdown1.click();
			selectvalue.click();
		}
		else if (fieldname == 'unit') {
			var dropdown1 = element(by.xpath("(//div[contains(@ng-if,'Unit')]//a)[1]"));
			var selectvalue = element(by.xpath("//div[contains(@class,'dropdown-menu')]//a[text()='" + value + "']"));
			dropdown1.click();
			selectvalue.click();
		}
		else {
			//enter data in level field
			element(by.xpath("//input[@ng-model='node.level']")).sendKeys(value);
		}

	};

	//click on "plus" icon to add the unit
	this.clickOnPlusIcon = function () {

		var el = element(by.xpath("//a[@name='addUnit']//i"));
		return el.isDisplayed().then(function (result) {
			if (result === true) {
				browser.actions().click(el).perform();
				return result;
				console.log("unit is dispalyed");
			}
			else {
				return false;
				console.log(" unit is not Displayed");
			}

		});

	};




	//Select Value from Context Index.
	this.selectValueFromContextIndexTerm = function (indexValue) {
		var splitValue = indexValue.split(',');
		console.log("Length:: " + splitValue.length);
		for (var row = 0; row < splitValue.length; row++) {
			var loc = element(by.xpath("(//*[@id='panel3']//input//preceding::div[contains(text(),'" + splitValue[row] + "')]//following:: input)[1]"));
			console.log("index Value:: " + splitValue[row]);
			browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
			browser.actions().click(loc).perform();
		}
	};

	//Select Index Value in Context Index Hierarchy
	this.selectContextIndexHierarchy = function (expectedHierarchy) {
		var ele = element(by.xpath("//*[@id='panel2']//li//div[contains(.,'" + expectedHierarchy + "')]"));
		browser.executeScript("arguments[0].scrollIntoView();", ele);
		browser.actions().mouseMove(ele).perform();
		browser.actions().click().perform();


		// element.all(by.css('#panel2 li div')).each(function (element) {
		// 	element.getText().then(function (text) {
		// 		console.log("text " + text);
		// 		if (text === expectedHierarchy) {
		// 			browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
		// 			browser.actions().mouseMove(element).perform();
		// 			browser.actions().click().perform();
		// 			browser.sleep(4000);

		// 		}
		// 	});
		// });
	};

	// to click on visual and XML  for add and edit and for addbibilography send 'Add Bibliography Marginal'
	this.clickonXMLorVisual = function (value) {
		var x = element(by.xpath("(//*[contains(text(),'" + value + "')])[1]"));
		return x.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(x).perform();
				return result;
			}
			else {
				console.log("error in clickonXMLorVisual ", value);
				return false;
			}
		});

	};

	/*
	 * Replaces the xml content in unit popup with the given content
	 * This uses Replace Button functionality
	 */
	this.replaceWholeXMLTextInUnitPopUpUsingReplaceButton = function (text) {
		element(by.css('.CodeMirror-line>span')).getText().then(function (actualText) {
			//Enter whole text in search field
			console.log(actualText);
			element(by.xpath("//button[@ng-click='editor.replaceAllCM()']")).click();

			element(by.css('.CodeMirror-search-field')).sendKeys(actualText).then(function (result) {
				element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
				//Enter new text in replace with field
				element(by.css('.CodeMirror-search-field')).sendKeys(text).then(function (result) {
					element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);

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

	//Click on any of word format option in xmlEdit page
	this.fontFormatOptionsOnXMLeditor = function (formatOption) {
		var el = element(by.xpath("//*[@tooltip='" + formatOption + "']"));
		browser.executeScript("arguments[0].click();", el.getWebElement());

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

	//entering the text in "notetype" filter

	this.enterNoteType = function (value) {

		element(by.xpath('//input[@ng-model="noteType"]')).sendKeys(value);
		element(by.xpath('//input[@ng-model="noteType"]')).sendKeys(protractor.Key.ENTER);
	};

	//entering text in "unit" filter

	this.enterUnit = function (value) {

		element(by.xpath('//input[@ng-model="unitDetail"]')).sendKeys(value);
		element(by.xpath('//input[@ng-model="unitDetail"]')).sendKeys(protractor.Key.ENTER);
	};

	//Click on side bar button in XML editor page
	this.clickOnSideBarButton = function (fieldName) {
		var el = element(by.xpath("//button[@type='button'][text()='" + fieldName + "']"));
		return el.isDisplayed().then(function (result) {
			if (result === true) {
				browser.actions().click(el).perform();
				return result;
				console.log("sidebarbutton is dispalyed");
			}
			else {
				return false;
				console.log(" sidebarbutton is not Displayed");
			}

		});
	};



	//Click on button inside section table (Add, Edit , Show Filters, ...etc)
	this.isButtonInsideSectionTableDisplayed = function (buttonName) {
		var loc = element(by.xpath("//div[@class='modal-content']//following::*[contains(text(),'" + buttonName + "')]"));
		return loc.isPresent().then(function (result) {
			if (result == true) {
				browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());

				return result;
			} else {
				console.log(buttonName + " button is Disabled");
				return false;
			}
		},
			function (error) {
				console.log("error in isButtonInsideSectionTableDisplayed:", error);
				return false;
			});

	};
	//select all and delete in edit(visual) window
	this.selectAllAndDelete = function () {
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').keyUp(protractor.Key.CONTROL).perform();
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.DELETE).perform();
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

	//to enter bibilogrphy marginal inside AddBibilographymarginal link in add authornotes
	this.enterBibilographyMarginal = function (option, value) {

		if (option.includes('code')) {
			element(by.xpath("//*[@class='btn btn-default dropdown-toggle input-2-5']")).click();
			var selectvalue = element(by.xpath("//*[@ng-click='typeSelected(item)']"));
			return selectvalue.isDisplayed().then(function (result) {
				if (result === true) {
					selectvalue.click();
					return result;
				}
				else {
					return false;
				}
			}, function (error) {
				console.log("error in enterBibilographyMarginal: code " + value, error);
				return false;
			});
		}

		else if (option.includes('year')) {
			var yearloc = element(by.xpath("//*[@ng-model='NMABiblio']"));
			return yearloc.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(yearloc).sendKeys(value).perform();
					return result;
				}

			}, function (error) {
				console.log("error in enterBibilographyMarginal: year  " + value, error);
				return false;
			});
		}
		else {
			var numloc = element(by.xpath("//*[@ng-model='NMNBiblio']"));
			return numloc.isDisplayed().then(function (result) {
				if (result === true) {
					browser.actions().click(numloc).sendKeys(value).perform();
					return result;
				}
			}, function (error) {
				console.log("error in enterBibilographyMarginal: number  " + value, error);
				return false;
			});
		}
	};
	//click add button in add bibilographymarginal pop up
	this.clickAddBibilography = function () {
		element(by.xpath("//*[@data-ng-click='add()']")).click();
	};

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
				console.log(today);

				date.getText().then(function (text) {
					console.log(text)
					if (text.includes(today)) {
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

	//get the text in level field
	//delete the unit assigned to the author note in the edit author note window
	this.deleteUnitInEditAuthorNotePopUp = function () {
		var xbutton = element(by.xpath("//span[@ng-click='AuthorNotesAddModalCtrl.deleteElemetOflistSelectedNode($index)']"));
		return xbutton.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(xbutton).perform();

			} else {
				console.log("Error in deleteUnitInEditAuthorNotePopUp");
				return false;
			}
		});
	};

	this.getLevelValue = function () {
		return element(by.xpath("//input[@ng-model='node.level']")).getText().then(function (value) {
			return value;
		},
			function (error) {
				console.log("error in getLevelValue");
			});
	};


	//click on Save/Cancel button in the confirmation pop up that appears upon trying to edit (delete unit) the author note
	this.clickToSaveOrCancel = function (button) {
		var confirm = element(by.xpath("//div[@class='modal-footer']//button[text()='" + button + "']"));
		return confirm.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(confirm).perform();

			} else {
				console.log("Error in clickToSaveOrCancel")
			}
		});
	};


	//click on xbutton of XML or Visual windows
	this.clickOnXbutton = function () {

		var el = element(by.xpath("//a[@ng-click='AuthorNotesEditText.close()']"));
		return el.isPresent().then(function (present1) {
			if (present1 === true) {
				browser.actions().click(el).perform();
				return true;
			}
		},
			function (error) {
				console.log("error in clickOnXbutton");
				return false;
			});
	};
	//entering text into paste from word pop up

	this.enterTextIntoWordPopup = function (value) {

		element.all(by.id('window-1303-body')).click();
		browser.sleep(2000);
		element.all(by.css('window-1303-body')).sendKeys(value);
		browser.sleep(3000);
		// element(by.id('textarea-1307-bodyEl')).click();
		// element(by.id('textarea-1307-bodyEl')).sendKeys(value);
	};

	//Click on any Tab of General , Format and Table
	this.clickOnTabInsideVisualEditor = function (tabName) {
		var el = element(by.xpath("//*[@class='x-tab-button']//span[contains(text(),'" + tabName + "')]"));
		//browser.wait(protractor.ExpectedConditions.presenceOf(el), 4000);
		el.click();
	};

	//selecting a text inside the frame 2
	this.selectAText = function () {
		browser.sleep(1000);
		var el = element(by.css('[data-type="parrafo"]'));
		browser.actions().mouseMove(el).click().perform();
		browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.HOME)).perform();
		browser.sleep(3000);
	};


};

module.exports = new authornotessection;
