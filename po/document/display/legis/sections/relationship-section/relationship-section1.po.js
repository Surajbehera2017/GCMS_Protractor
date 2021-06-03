var params = browser.params;
var relationshippage = function () {

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


	//Removing the product present in Modify product popup
	this.removeProductInModifyProductpopup = function () {

		var ele = element(by.xpath("//span[@ng-click='RelProdRemCtrl.deleteElementOfCurrentListSelectedNode($index, item)']"));
		return ele.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(ele).perform();
				return result;
			}
			else {

				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in removeProductInModifyProductpopup");
				return false;

			});
	};

	/*
	* Checks if the common accept button is disabled
	*/
	this.isCommonAcceptButtonDisabled = function () {
		return element(by.css('[translate="Common.Accept"]')).getAttribute('disabled').then(function (disabled) {
			if (disabled === 'true') {
				return true;
			} else {
				return false;
			}
		},
			function (error) {
				console.log("Error in isCommonAcceptButtonDisabled");
				return false;
			});
	};

	/*
	 * Clicks X button - displayed under existing products in 'Modify Product PopUp'
	 */
	this.removeExistingProductInModifyPopUp = function (value) {
		element(by.cssContainingText('#find-margin-import-exist .label.relationshipProductLabel', value)).isPresent().then(function (result) {
			if (result === true) {
				var item = element(by.cssContainingText('#find-margin-import-exist .label.relationshipProductLabel', value));
				item.all(by.css('.color-orange.pointer')).get(0).click().then(function () {

				},
					function (error) {
						console.log("Error in click() in removeExistingProductInModifyPopUp");
					});
			}
		},
			function (error) {
				console.log("Error in removeExistingProductInModifyPopUp");
			});
	};



    /*
	 * Checks if given product displayed under existing products in 'Modify Product PopUp'
	 */
	this.isValueDisplayedInExistingProductsInModifyPopUp = function (value) {
		return element(by.cssContainingText('#find-margin-import-exist .label.relationshipProductLabel', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isValueDisplayedInExistingProductsInModifyPopUp");
				return false;
			});
	};


	/*
	  * Click on product drop down arrow in 'Add Product PopUp' 
	  */
	this.clickDropDownArrowInAddProductFormPopUp = function () {
		element(by.css('#contentFormAdDocument .dropdown-toggle')).click().then(function (result) {
		},
			function (error) {
				console.log("Error in clickDropDownArrowInAddProductFormPopUp");
			});
	};




	/*
	* Checks if 'Modify Product PopUp' is displayed 
	*/
	this.isModifyProductFormPopUpIsDisplayed = function () {
		return element(by.css('#contentFormAdDocument.modal-body')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isModifyProductFormPopUpIsDisplayed");
				return false;
			});
	};


	//filtering the relationship by new unit level in target document

	this.filterByNewUnitLevel = function (newunitlevel) {
		element(by.xpath("(//*[@id='relationships-filters-11']//input)[1]")).click();
		element(by.xpath("(//*[@id='relationships-filters-11']//input)[1]")).sendKeys(newunitlevel);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();

	};



	/*
	 * Selects the value displayed in Product dropdown
	 */
	/*this.selectValueDisplayedInProductDropDownInRelationshipLayer = function (value) {

		//element(by.xpath("//div[@id='addDocumentFile']//input[@name='txtdropdownsearch']")).sendKeys(value);

		if (params.BU == "mexico" && params.env ==  "qc") {

			//element(by.xpath("(//*[@class='input-group dropdown-search'])[11]//input")).sendKeys(value);
			element(by.xpath("(//*[@class='input-group dropdown-search'])[4]//input")).sendKeys(value);

			browser.actions().sendKeys(protractor.Key.ENTER).perform();
		}
		else {
			element(by.xpath("(//*[@class='input-group dropdown-search'])[12]//input")).sendKeys(value);

			browser.actions().sendKeys(protractor.Key.ENTER).perform();
		}

	};*/


	this.selectValueDisplayedInProductDropDownInRelationshipLayer = function (option, value){

		if(option.includes('table')) {

			element(by.xpath("(//div[@id='contentFormAdDocument']//input[@ng-model='searchtext'])[1]")).sendKeys(value);
			browser.actions().sendKeys(protractor.Key.ENTER).perform();
		}

		else{

			element(by.xpath("(//div[@id='panel2']//input[@ng-model='searchtext'])[3]")).sendKeys(value);
			browser.actions().sendKeys(protractor.Key.ENTER).perform();

		}


	};

	/*this.selectValueDisplayedInProductDropDownInRelationshipLayer = function (option, value) {


		if (params.BU == "mexico" || params.BU == "gulf") {

			if (params.env == "qc") {

				if (option.includes('table')) {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[4]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

				else {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[11]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

			}

			else {

				if (option.includes('table')) {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[4]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

				else {


					console.log("inside function");
					element(by.xpath("(//*[@class='input-group dropdown-search'])[12]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}


			}

		}


		else if (params.BU == "spain" || params.BU == "br") {

			if (params.env == "qc") {

				if (option.includes('table')) {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[4]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

				else {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[12]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

			}

			else {

				if (option.includes('table')) {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[4]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}

				else {

					element(by.xpath("(//*[@class='input-group dropdown-search'])[12]//input")).sendKeys(value);
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
				}


			}



		}

		else {

			console.log("error in selectValueDisplayedInProductDropDownInRelationshipLayer");
		}

	};*/




	//this function is used to click on modify product and add product buttons

	this.clickOnProductsButton = function (buttonname) {

		var ele = element(by.xpath("//span[contains(text(),'" + buttonname + "')]"));
		return ele.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(ele).perform();
				return result;
			}
			else {

				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in clickOnProductsButton");
				return false;

			});


	};





	/*
	 * This method checks if checkbox for the nth item is selected
	 */
	this.isCheckboxAtPositionSelected = function (position) {
		return element.all(by.css('.selecRowTable.align-checkox-table')).get(position).isSelected().then(function (displayed) {
			console.log("is displayed:", displayed);
			return displayed;
		},
			function (error) {
				console.log("Error in isCheckboxAtPositionSelected");
				return false;
			});
	};

	//to check whether the already selected language in the dropdown is disabled
	this.isLanguageEnabled = function (selectedlanguage) {


		element.all(by.xpath("//*[@ng-repeat='language in RelationshipsMultiLanguages.languages']//select")).last().click();

		return element.all(by.xpath("//option[contains(text(),'" + selectedlanguage + "')]")).last().isEnabled();


	};

	//entering text in the language text fields after clicking on the world icon near to level in target panel
	this.enterValueInLanguageFields = function (language, text) {
		element(by.xpath("//label[contains(text(),'" + language + "')]//following::input")).click().clear().sendKeys(text);

	};

	//entering data in nota fields of different languages after clicking on global icon in Target Panel

	this.enterTextinNotaFieldOfTarget = function (language, value) {
		element(by.xpath("//label[contains(text(),'" + language + "')]//following::textarea")).click().clear().sendKeys(value);

	};

	//to click on global icon of note in target panel

	this.clickonNoteGlobalInTarget = function () {
		element(by.xpath("//div[@id='panel3']//div[text()='Note']//..//a[@ng-click='multilingual()']")).click();
	};


	//click on the unit in the document structure
	this.clickUnitLinkInDocStructureIcon = function (section, unit) {

		//click on structure icon
		element(by.xpath("//button[@ng-click='openStructure" + section + "()']")).click();
		//click on the unit row to add the unit
		var ele = element(by.xpath("//span[@ng-click='tree.onSelect(node)'][contains(text(),'" + unit + "')]"));
		return ele.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(ele).perform();
				return result;
			}
			else {

				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in clickUnitLinkInDocStructureIcon");
				return false;

			});

	};


	//this function is used to click on the links present in the "Available options" section

	this.clickOnLinkInAvailableOptions = function (linkname) {

		element(by.xpath("//a[contains(text(),'" + linkname + "')]")).click();
	};

	//select legislation

	this.selectLegislation = function () {
		element(by.id('itemTextLink67')).click();
	};

	//select consolidation and select option called relationship pending consolidation

	this.selectConsolidationAndSelectOption = function () {
		element(by.id('itemTextLink82')).click();
		//click on the relationship consolidation
		browser.sleep(1000);
		element(by.xpath("//a[contains(text(),'Relationships pending consolidation')]")).click();
		browser.sleep(1000);
	};


	//click on back button at the top left corner of the document

	this.clickOnBackButton = function () {
		element(by.xpath("//span[@class='ng-binding'][contains(text(),'Back')]")).click();
	};

	//click on document structure button and select the unit 
	//section has values:"Source","Target"

	this.selectUnitFromStructureButton = function (section, unitdata) {

		//click on structure icon
		element(by.xpath("//button[@ng-click='openStructure" + section + "()']")).click();
		browser.waitForAngular();
		browser.sleep(3000);
		//click on the dropdown icon inside the document structure popup
		element(by.xpath("//span[text()='Document Structure']//..//..//a[@name='lnkSearchDropdownNav']")).click();
		//enter text in textbox
		element(by.xpath("//span[text()='Document Structure']//..//..//input[@name='txtdropdownsearch']")).sendKeys(unitdata);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		//check whether the entered unit is displayed in the result list 
		var loc1 = element(by.xpath("//span[contains(text(),'" + unitdata + "')]//..//..//input"));
		return loc1.isPresent().then(function (result) {
			if (result == true) {
				browser.actions().click(loc1).perform();
				return result;
			}
			else {

				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in selectUnitFromStructureButton");
				return false;
			});
	};

	//this function is used to check the fields inside the lens icon

	this.verifyinfoInLensIcon = function (fieldname) {

		var ele = element(by.xpath("//strong[contains(text(),'" + fieldname + "')]//..//span"));
		return ele.isPresent().then(function (result) {
			if (result == true) {
				return true;
			}
			else {
				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in verifyinfoInLensIcon");
				return false;
			});

	};

	//this function is used to click on language dropdown and select language

	this.selectLanguageFromDropdown = function (lang_name) {

		element(by.xpath("//span[contains(text(),'Language')]//..//..//*[@ng-model='RelationshipsAddModalCtrl.currentLang']")).click();
		var ele = element(by.xpath("(//option[contains(text(),'" + lang_name + "')])[1]"));
		ele.isPresent().then(function (result) {
			if (result == true) {

				browser.actions().click(ele).perform();
				return result;
			}
			else {
				console.log("element not present");
				return false;
			}
		},
			function (error) {
				console.log("Error in selectLanguageFromDropdown");
				return false;
			});
	};


	/*
	 * Close add or remove products popup
	 */
	this.closeAddOrRemoveProductPopUp = function () {
		element(by.css('.add-remove-rel-prod-header>.modalCloseWhite')).click().then(function (result) {
		},
			function (error) {
				console.log("Error in closeAddOrRemoveProductPopUp");
			});
	};

	/*
	 * returns the number of selected relationship displayed in the add product popup
	 * Eg:  "1 Relationships selected of marginal RCL\1947\476 " => returns 1.
	 */
	this.numberOfSelectedRelationshipInAddProductPopUp = function (value) {
		return element.all(by.css('.rel-text-bold.margin-none.ng-binding', value)).get(0).getText().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in numberOfSelectedRelationshipInAddProductPopUp");
				return '0';
			});
	};
	/*
	 * Checks if selected product displayed under product drop down
	 */
	this.isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer = function (value) {
		return element(by.cssContainingText('[ng-repeat="item in RelationshipsAddModalCtrl.relationship.publicationData.list"]', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isSelectedValueDisplayedInListUnderProductDropDownInRelationshipLayer");
				return false;
			});
	};

	/*
	 * Removes the selected product from list - displayed under product drop down
	 */
	this.removeSelectedValueDisplayedInListUnderProductDropDown = function (value) {
		element(by.cssContainingText('[ng-repeat="item in RelationshipsAddModalCtrl.relationship.publicationData.list"]', value)).isPresent().then(function (result) {
			if (result === true) {
				var item = element(by.cssContainingText('[ng-repeat="item in RelationshipsAddModalCtrl.relationship.publicationData.list"]', value));
				item.all(by.css('.color-orange.pointer')).get(0).click().then(function () {

				},
					function (error) {
						console.log("Error in click() in removeSelectedValueDisplayedInListUnderProductDropDown");
					});
			}
		},
			function (error) {
				console.log("Error in removeSelectedValueDisplayedInListUnderProductDropDown");
			});
	};
	/*
		 * Clicks on Product dropdown in relationship section in add popup 
		 */
	/*this.clickProductDropDownInRelationshipLayerInAddPopUp = function () {

		//element(by.xpath("(//*[@id='relProdMessage']//a)[1]")).click().then(function () {

		//element(by.xpath("//*[@id='RelaProductDrop']")).click().then(function () {
		element(by.xpath("(//*[@id='RelaProductDrop']//input)[1]")).click().then(function () {
		},
			function (error) {
				console.log("Error in clickProductDropDownInRelationshipLayerInAddPopUp");
			});
	};*/


	this.clickProductDropDownInRelationshipLayerInAddPopUp = function (option) {

		if (option.includes('table')) {


			var ele = element(by.xpath("(//a[@class='dropdown-toggle  nav-a'])[2]"));
			return ele.isPresent().then(function (result) {
				if (result == true) {

					browser.actions().click(ele).perform();
					return result;
				}
				else {
					console.log("element not present : table");
					return false;
				}
			},
				function (error) {
					console.log("Error in clickProductDropDownInRelationshipLayerInAddPopUp : table");
					return false;
				});

		}

		else {

			var ele = element(by.xpath("(//div[@id='panel2']//a[@class='dropdown-toggle  nav-a'])[3]"));
			return ele.isPresent().then(function (result) {
				if (result == true) {

					browser.actions().click(ele).perform();
					return result;
				}
				else {
					console.log("element not present : Add");
					return false;
				}
			},
				function (error) {
					console.log("Error in clickProductDropDownInRelationshipLayerInAddPopUp : Add");
					return false;
				});

		}


	};



	/*clickProductDropDownInRelationshipLayerInAddPopUp
	 * Clicks on last button (navigation) in Product dropdown in relationship section in add popup 
	 */
	this.clickNavigateToLastInProductDropDownInRelationshipLayer = function () {
		element(by.css('#RelaProductDrop [ng-click="selectPage(totalPages)"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickNavigateToLastInProductDropDownInRelationshipLayer");
			});
	};

	/*
	 * Checks if the value displayed in Product dropdown
	 */
	this.isValueDisplayedInProductDropDownInRelationshipLayer = function (value) {
		return element(by.cssContainingText('#RelaProductDrop li.search-nav-item.ng-scope>a', value)).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isValueDisplayedInProductDropDownInRelationshipLayer");
				return false;
			});
	};




	/*
	 * Checks if the Product dropdown in relationship section is displayed
	 */
	this.isProductDropDownDisplayedInRelationshipLayerInAddPopUp = function () {
		return element(by.id('RelaProductDrop')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isProductDropDownDisplayedInRelationshipLayerInAddPopUp");
				return false;
			});
	};

	//this function is used to enter text inside note relationship popup
	this.enterDataInNote = function (value) {

		element(by.xpath("//a[text()='NOTE RELATIONSHIP']//..//..//..//textarea")).click();
		element(by.xpath("//a[text()='NOTE RELATIONSHIP']//..//..//..//textarea")).clear();
		element(by.xpath("//a[text()='NOTE RELATIONSHIP']//..//..//..//textarea")).sendKeys(value);

	};

	//click on 'X' button in the Relationship popup

	this.clickOnXbutton = function () {

		element(by.xpath("(//a[@ng-click='RelationshipsAddModalCtrl.closeConfirmationModal()']//i)[2]")).click();

	};

	//this function is used to check the fields inside the lens icon

	this.verifyinfoInLensIcon = function (fieldname) {

		var ele = element(by.xpath("//strong[contains(text(),'" + fieldname + "')]//..//span"));
		return ele.isPresent().then(function (result) {
			if (result == true) {
				return true;
			}
			else {
				console.log("the element is not present");
				return false;
			}

		},
			function (error) {
				console.log("Error in verifyinfoInLensIcon");
				return false;
			});

	};

	//this function is used to click on language dropdown and select language

	this.selectLanguageFromDropdown = function (lang_name) {

		element(by.xpath("//span[contains(text(),'Language')]//..//..//*[@ng-model='RelationshipsAddModalCtrl.currentLang']")).click();
		var ele = element(by.xpath("(//option[contains(text(),'" + lang_name + "')])[1]"));
		return ele.isPresent().then(function (result) {
			if (result == true) {

				browser.actions().click(ele).perform();
				return result;
			}
			else {
				console.log("element not present");
				return false;
			}
		},
			function (error) {
				console.log("Error in selectLanguageFromDropdown");
				return false;
			});
	};



	/*
	 * Checks if CURRENT MARGINAL ID is displayed & disabled in source section
	 */
	this.isCurrentMarginalIdDisabledInSource = function () {
		return element(by.css('[name="afectado.marginal.tipo.fixed"]')).getAttribute('disabled').then(function (disabled) {
			if (disabled === 'true') {
				return true;
			}
			else {
				return false
			}
		},
			function (error) {
				console.log("Error in isCurrentMarginalIdDisabledInSource");
				return false;
			});
	};

	/*
	 * Checks if CURRENT MARGINAL ID is displayed & disabled in target section
	 */
	this.isCurrentMarginalIdDisabledInTarget = function () {
		return element(by.css('[name="afecta.marginal.tipo.fixed"]')).getAttribute('disabled').then(function (disabled) {
			if (disabled === 'true') {
				return true;
			}
			else {
				return false
			}
		},
			function (error) {
				console.log("Error in isCurrentMarginalIdDisabledInTarget");
				return false;
			});
	};

	// for pagination in relationsgip table: first ,last , next , previous

	this.clickonPagination = function (buttonName) {
		if (buttonName == 'first') {
			element(by.xpath("//button[contains(@id,'.pagination.first')]")).click();
		}
		else {
			element(by.xpath("//button[contains(@id,'" + buttonName + "')]")).click();
		}
	};

	/*
		 * Checks summary in view eye icon source pop up
		 */
	this.isSummaryDisplayedInViewEyePopUp = function () {
		return element(by.xpath("//div[@class='modal-content']//*[@on='DocSummaryCtrl.contentType']//span")).isPresent();

	};
	/*
	 * Checks if the relationship container is displayed 
	 */
	this.isRelationshipContainerDisplayed = function () {
		return element(by.id('relationShipsTableContainer')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRelationshipContainerDisplayed");
				return false;
			});
	};

	/*
	 * Checks if the data column present in relationship container 
	 */
	this.isDataPresentInRelationshipContainer = function () {
		return element.all(by.css('.marginal-table-column')).get(0).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDataPresentInRelationshipContainer");
				return false;
			});
	};
	// to verify if all element removed or not

	this.isAllParaIdRemoved = function () {
		return element(by.xpath("(//span[@ng-bind='multipleUnitLevelLength()'])[1]")).getText().then(function (text1) {
			console.log('hello', text1);
			if (text1 == '') {
				console.log('hello3', text1);
				return true;
			}
			else {
				console.log('hello2', text1);

				return false;
			}
		});

	};

	// to click on  links inside relationship panel
	this.clickonLinkInsideRelationship = function (linkName) {
		if (linkName == 'Consolidations') {
			element(by.xpath("(//*[@class='ng-binding'][contains(text(),'" + linkName + "')])[1]")).click();
		}
		else {
			element(by.xpath("(//*[@class='ng-binding'][contains(text(),'" + linkName + "')])[2]")).click();
		}
	};
	this.filterbyRelType = function (reltype) {
		element(by.xpath("//*[@id='relationships-filters-5']//input")).click();
		element(by.xpath("//*[@id='relationships-filters-5']//input")).clear();
		element(by.xpath("//*[@id='relationships-filters-5']//input")).sendKeys(reltype);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};

	this.filterbyNewdate = function (newdatevalue) {
		//relationships-filters-11
		element(by.xpath("//*[@id='relationships-filters-12']//input")).click();

		element(by.xpath("//*[@id='relationships-filters-12']//input")).sendKeys(newdatevalue);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};

	this.filterbySourceid = function (sourcevalue) {
		//relationships-filters-11
		element(by.xpath("//*[@id='relationships-filters-1']//input")).click();

		element(by.xpath("//*[@id='relationships-filters-1']//input")).sendKeys(sourcevalue);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
	this.filterbyUnitLevel = function (value) {
		element(by.xpath("//*[@id='relationships-filters-2']//input")).click();
		element(by.xpath("//*[@id='relationships-filters-2']//input")).clear();
		element(by.xpath("//*[@id='relationships-filters-2']//input")).sendKeys(value);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};


	this.filterByTargetid = function (targetidval) {
		element(by.xpath("//*[@id='relationships-filters-7']//input")).click();
		element(by.xpath("//*[@id='relationships-filters-7']//input")).sendKeys(targetidval);
		browser.actions().sendKeys(protractor.key.ENTER).perform();

	};


	this.filterbySourceUnitlevel = function (unitlevelvalue) {
		//relationships-filters-11
		element(by.xpath("//*[@id='relationships-filters-2']//input")).click();

		element(by.xpath("//*[@id='relationships-filters-2']//input")).sendKeys(unitlevelvalue);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
	this.filterbyTargetUnitlevel = function (targeunit) {
		//relationships-filters-11
		element(by.xpath("//*[@id='relationships-filters-8']//input")).click();

		element(by.xpath("//*[@id='relationships-filters-8']//input")).sendKeys(targeunit);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};

	this.filterbytargetdate = function (targetdatevalue) {
		element(by.xpath("//*[@id='relationships-filters-10']//input")).click();

		element(by.xpath("//*[@id='relationships-filters-10']//input")).sendKeys(targetdatevalue);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();

	};
	this.isTooltipPresent = function (element1, tooltip) {
		if (element1 == 'delete') {
			var loc = element(by.xpath("//a[@ng-click='deleteListRelationships()']"));
		}
		browser.actions().mouseMove(loc).perform();
		return element(by.xpath("//div[contains(@content,'" + tooltip + "')]")).isDisplayed();
	}


	this.filterbyConsolidation = function (type) {
		element(by.xpath("//*[@id='relationships-filters-6']/select")).click();
		element(by.xpath("//*[@id='relationships-filters-6']/select/option[text()='" + type + "']")).click();
	}

	this.clickonEditButtonInRelTable = function () {
		element(by.id("btn-relationships-edit")).click();

	};

	// To validate the filtered results

	this.isResultDisplayedAfterFilter = function (filtername) {
		return element.all(by.xpath("//*[contains(text(),'" + filtername + "')]")).count().then(function (count) {
			if (count > 1) {

				return true;
			}
			else {

				return false;

			}
		},
			function (error) {
				console.log("Error in isResultDisplayedAfterFilter");
				return 0;
			});
	};








	// here block: consolidations or annotaions 
	this.clickOnSoureOrTargetOf = function (block, sourceortarget) {

		if (block == 'Consolidations') {
			element(by.xpath("(//*[@class='ng-binding'][contains(text(),'" + sourceortarget + "')])[1]")).click();
		}
		else {
			element(by.xpath("(//*[@class='ng-binding'][contains(text(),'" + sourceortarget + "')])[4]")).click();
		}
	};

	//to click on actions in rel table on first row
	this.clickactionOnRelationshipTable = function (action) {

		var loc = element(by.xpath("(//a[@class='dropdown-toggle plain-text glyphicon glyphicon-chevron-down'])[1]"));
		//browser.executeScript("arguments[0].scrollIntoView();",  loc.getWebElement());
		browser.executeScript("arguments[0].click();", loc.getWebElement());
		browser.sleep(2000);
		var loc1 = element(by.xpath("(//span[text()='" + action + "'])[1]"));
		if (action == ' Edit') {

			//browser.executeScript("arguments[0].scrollIntoView();",  loc1.getWebElement());
			browser.executeScript("arguments[0].click();", loc1.getWebElement());
		}
		else {
			//loc1.click();
			browser.executeScript("arguments[0].click();", loc1);
		}
	};

	//this function is used to click on the lens icon

	this.clickOnLensIcon = function () {

		var el = element(by.xpath("//a[@ng-click='detailRelationship($row, dp, $item.idRelacion)']"));
		el.isPresent().then(function (result) {

			if (result == true) {
				//browser.actions().click(el).perform();
				browser.executeScript("arguments[0].click();", el);

				return true;
			}
			else {
				console.log('the element is not present');
				return false;
			}
		},
			function (error) {
				console.log("Error in clickOnLensIcon");
				return false;
			});

	};
	this.closeeditpopupmodal = function () {
		element(by.xpath("//button[text()='Yes']")).click();
	};
	this.getBackgroundcolorOfCollector = function () {
		return element(by.xpath("(//div[@wj-part='root']//div//div)[3]")).getCssValue('background-color').then(function (color) {
			console.log(color);
			return color;
		});
	};
	//to close add or edit window in relationship


	this.closeAddorEditRelationshipPopup = function () {

		browser.sleep(3000);
		element(by.xpath("(//a[@ng-click='RelationshipsAddModalCtrl.closeConfirmationModal()'])[2]")).click();

	};
	// verify weather Tab  is disabled or not in add relationship popup
	//tabname: NEW SECTION ,PURSUANT ,PRODUCTS (0)

	this.isTabEnabled = function (tabName) {


		return element(by.xpath("//li[@heading='" + tabName + "']")).getAttribute('disabled').then(function (present) {
			if (present === 'true')
				return false;
			else
				return true;
		},
			function (error) {
				console.log("no disabled attribute in isTabEnabled ");
				return true;
			});


	};
	/*
	 * Checks if eye icon displayed in source next to document marginal details
	 */
	this.isSourceDocumentEyeIconDisplayed = function (value) {
		return element(by.css('.panel-left-relas .md-icon .gcms2-eye')).isDisplayed().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isSourceDocumentEyeIconDisplayed");
				return false;
			});
	};
	/*
	 * Checks if eye icon displayed in target next to document marginal details
	 */
	this.isTargetDocumentEyeIconDisplayed = function (value) {
		return element.all(by.css('.right-tab-content .md-icon .gcms2-eye')).get(0).isDisplayed().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isTargetDocumentEyeIconDisplayed");
				return false;
			});
	};
	/*
 * Checks if Anchor doc view pop up header is displayed in relationship
 */
	this.isHeaderDisplayedInAnchorImageShowView = function (value) {
		return element(by.css('.modal-header.header-import')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isHeaderDisplayedInAnchorImageShowView");
				return false;
			});
	};

	/*
	 * Checks if document text tab displayed in Anchor doc view pop up in relationship
	 */
	this.isDocumentTextDisplayedInAnchorImageShowView = function (value) {
		return element.all(by.css('.unit-content.ng-isolate-scope [ng-click="select()"]')).get(0).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isDocumentTextDisplayedInAnchorImageShowView");
				return false;
			});
	};


	//valid icon name: openStructureTarget(),openStructureSource(),addMultipleUnitLevel('source'),
	//  addMultipleUnitLevel('target') ,showTargetUnitText() ,showSourceUnitText()

	this.isIconEnabled = function (iconName) {

		return element(by.xpath("//*[contains(@ng-click,'" + iconName + "')]")).getAttribute('disabled').then(function (present) {
			if (present === 'true')
				return false;
			else
				return true;
		},
			function (error) {
				console.log("Error in isIconEnabled");
				return false;
			});
	};


	this.closeMultiLanguagePopupAddRelationship = function () {
		element(by.css('.btn-modalClose-center')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in closeMultiLanguagePopupAddRelationship");
			});
	};

	/*
	 * Un selects unit in paragraph id popup in add relationship
	 */
	this.unselectUnitInParagraphIdPopup = function (ParaId) {
		element(by.xpath("//span[contains(text(),'" + ParaId + "')]//..//..//label")).click();
	};

	this.enterLevelandIncisoWithParaID = function (level, inscio, ParaId) {
		// Selects unit in paragraph id popup in add relationship

		element(by.xpath("//span[contains(text(),'" + ParaId + "')]//..//..//label")).click();



		// select level and enter value

		element(by.xpath("//span[contains(text(),'" + ParaId + "')]//..//..//div[@class='levelTxt']//div[@class='multilang-txt-field-input']/input")).sendKeys(level);

		// enter value in incino
		element(by.xpath("//span[contains(text(),'" + ParaId + "')]//..//..//div[@class='incisoTxt']//div[@class='multilang-txt-field-input']/input")).sendKeys(inscio);

	};

	// check if gloabl icon present or not
	this.isMultiLanguageIconDisplayedAddRelationship = function () {
		return element(by.css('.multilang-icon-color.glyphicons.global')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isMultiLanguageIconDisplayedAddRelationship");
				return false;
			});
	};

	/*
	  * Selects unit in paragraph id popup in add relationship
	  */
	this.selectUnitByPositionInParagraphIdPopup = function (position) {
		element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).get(position).click().then(function () {
		},
			function (error) {
				console.log("Error in selectUnitByPositionInParagraphIdPopup");
			});
	};

	/*
	 * Sends data to Inciso text fieldt in paragraph id popup in add relationship
	 */
	this.writeDataToIncisoInParagraphIdPopup = function (data, position) {
		element.all(by.css('.incisoTxt .multilang-txt-field-input>input')).get(position).isDisplayed().then(function () {
			//element.all(by.css('.incisoTxt .multilang-txt-field-input>input')).get(position).clear();
			element.all(by.css('.incisoTxt .multilang-txt-field-input>input')).get(position).sendKeys(data);
		},
			function (error) {
				console.log("Error in writeDataToIncisoInParagraphIdPopup");
			});
	};

	/*
	 * Sends data to Level text fieldt in paragraph id popup in add relationship
	 */
	this.writeDataToLevelInParagraphIdPopup = function (data, position) {
		element.all(by.css('.levelTxt .multilang-txt-field-input>input')).get(position).isDisplayed().then(function () {
			//element.all(by.css('.levelTxt .multilang-txt-field-input>input')).get(position).clear();
			element.all(by.css('.levelTxt .multilang-txt-field-input>input')).get(position).sendKeys(data);
		},
			function (error) {
				console.log("Error in writeDataToLevelInParagraphIdPopup");
			});
	};





	// to select value from dropdown search box in add Relationshipt popup (fieldname: relType-infor,type, depth,unitLevel,unitLevel-dest)

	this.clickandSelect = function (fieldname, fieldvalue) {
		element(by.xpath("//div[@name='" + fieldname + "']//input[@ng-model='model[property]']")).click();
		if (fieldname == 'depth' || fieldname == 'relType-infor' || fieldname == 'unitLevel') {
			browser.sleep(2000);
			element(by.xpath("//div[@name='" + fieldname + "']//a[contains(text(),'" + fieldvalue + "')]")).click();
		}
		else {
			if (fieldname === '') { }
			else {
				element(by.xpath("//div[@name='" + fieldname + "']//input[@ng-model='searchtext']")).sendKeys(fieldvalue).sendKeys(protractor.Key.ENTER);
			}
		}
	};

	// to verify if relationship appear in collector after adding 

	this.isRelationshipAddedInCollector = function () {

		return element(by.xpath("//*[@id='relationshipsCollectorContainer']")).isPresent();

	};

	// to verify if added language is shown in world icon or not

	this.isAddedLanguageShownInPopup = function (languageName) {


		return element(by.xpath("//label[contains(text(),'" + languageName + "')]")).isPresent();
	};


	// to click on Detail , Delete   Add button of Add relationship popup.
	// also to click  on Detail , Delete , Save and Cancel button of Edit Relationship popup.

	this.clickOnRelPopUpButtons = function (buttonName) {
		element(by.xpath("//button[contains(.,'" + buttonName + "') and contains(@ng-click,'RelationshipsAddModalCtrl')]")).click();


	};

	// check if analyst name is present for particluar language

	this.isAnalystNamePresentFor = function (langugeName, analystName) {
		if (langugeName = 'native') {
			return element(by.xpath("//input[contains(@tooltip,'" + analystName + "')]")).isPresent();
		}
		else {
			return element(by.xpath("//div[contains(text(),'" + langugeName + "')]//..//..//input")).isPresent();
		}
	};
	/*
		 * Returns the number of Level/Inciso text fields in paragraph id popup
		 */
	this.getNumberOfLevelIncisoRowsInParagraphIdPopup = function () {
		return element.all(by.css('.levelTxt .multilang-txt-field-input>input')).get(0).isDisplayed().then(function () {
			return element.all(by.css('.levelTxt .multilang-txt-field-input>input')).count().then(function (x) {
				return x;
			});
		},
			function (error) {
				console.log("Error in getNumberOfLevelIncisoRowsInParagraphIdPopup");
				return 0;
			});
	};

	// delete relationship from collector 
	this.selectAllRelFromCollector = function () {

		element.all(by.model('$item.selected')).click();

	};

	// to close all tags selected in doc structure
	this.closeAllTagsinDocumentStructurePopup = function () {

		return element.all(by.xpath("//*[contains(@ng-click,'deleteElemetOfUnitList')]")).each(element => element.click());
	};


	//level field of source editable or not
	this.isEnabledCheckForLevelInSource = function () {

		return element.all(by.model('txtField')).get(0).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};


	//note field of source editable or not
	this.isEnabledCheckForNoteInSource = function () {

		return element.all(by.model('txtField')).get(5).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};


	//note field of target editable or not
	this.isEnabledCheckForNoteInTarget = function () {

		return element.all(by.model('txtField')).get(15).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};

	// to get alert message
	this.getAlertMessage = function () {

		return element(by.xpath('//*[@class="modal-confirm-message ng-scope ng-binding"]')).getText();
	};

	// click on icon buttons 
	// valid Section name: Target , Source ,Relationship
	//valid iconName: UnitText ,UnitLevel ,openStructure,Languages

	this.clickOnIcon = function (Section, iconName) {

		if (Section == 'Source') {

			element(by.xpath("(//*[contains(@ng-click,'" + iconName + "')])[1]")).click();

		}

		else if (Section == 'Target') {

			element(by.xpath("(//div[@id='panel3']//*[contains(@ng-click,'" + iconName + "')])[1]")).click();



		}

		else if (Section == 'Relationship') {

			if (iconName == 'Rotation') {



				element(by.xpath("//*[contains(@ng-click,'switch')]")).click();

			}

			else {

				element(by.xpath("//*[contains(@ng-click,'Languages')]/i")).click();

			}



		}

		else {



			element(by.xpath("(//*[contains(@ng-click,'" + iconName + "')])[1]")).click();

			element(by.xpath("//*[contains(@ng-click,'ok()')]")).click();



		}

	};
	this.deleteEditrelationshipInpopup = function (value) {

		if (value == 'delete') {

			element.all(by.xpath("(//*[contains(@ng-click,'deleteRela')])")).last().click();

			element(by.xpath("//*[contains(@ng-click,'ok()')]")).click();

		}

		else {

			element.all(by.xpath("(//*[contains(@ng-click,'" + value + "')])")).last().click();

		}

	};


	this.addmultipleunitlevel = function (levelValue, incisoValue) {

		if (typeof levelValue == 'string') {

			console.log('if of addmultipleunitlevel');

			let checkbx = element.all(by.xpath("//input[@ng-model='unitLevel.selected']")).last();

			browser.actions().mouseMove(checkbx).click().perform();
			element.all(by.xpath("//*[@name='levelTxt']//input")).last().click().sendKeys(levelValue);
			element.all(by.xpath("//*[@name='incisoTxt']//input")).last().click().sendKeys(incisoValue);

		}
		else {

			console.log('else of addmultipleunitlevel');

			for (let i = 0; i < levelValue.length; i++) {

				console.log(levelValue[i]);

				element.all(by.xpath("//*[@class='levelTxt']//multilang-txt-field-ctx//div//input")).get(i).click().sendKeys(levelValue[i]);

				element.all(by.xpath("//*[@name='incisoTxt']//multilang-txt-field-ctx//div//input")).get(i).click().sendKeys(incisoValue[i]);

			}

		}

	};


	// to add language from language popup

	this.addLanguage = function (language) {

		element.all(by.xpath("//*[@ng-repeat='language in RelationshipsMultiLanguages.languages']//select")).last().click();
		element.all(by.xpath("//option[contains(text(),'" + language + "')]")).last().click();

	};


	// to check if worldicon present in add popup for particular field

	this.isWorldIconPresentFor = function (panel, fieldname) {

		if (fieldname == 'Analyst') {
			return element(by.xpath("//div[contains(text(),'" + fieldname + "')]//..//..//..//..//*[@class='multilang-dropdown']")).isPresent();
		}

		else if (fieldname == 'Note') {
			return element(by.xpath("//*[@class='titlePanelDark']//*[text()='" + panel + "']//..//..//*[contains(text(),'" + fieldname + "')]//..//a")).isPresent();


		}
	};

	// to click on world icon of particular field

	this.clickOnWorldIconOf = function (panel, fieldname) {
		if (fieldname == 'Analyst') {
			element(by.xpath("//div[contains(text(),'" + fieldname + "')]//..//..//..//..//*[@class='multilang-dropdown']")).click();
		}
		else if (fieldname == 'Note') {
			element(by.xpath("//*[@class='titlePanelDark']//*[text()='" + panel + "']//..//..//*[contains(text(),'" + fieldname + "')]//..//a")).click();


		}

	};

	// to verify if multiple unitlevel unit available on screen after adding


	this.isMultiUnitLevelPresent = () => {
		return element(by.model("RelationshipsAddModalCtrl.multiunitlevel['source'].list")).isPresent();
	};



	this.isIconPresent = function (iconName) {

		return element(by.xpath("(//*[contains(@ng-click,'" + iconName + "')])[1]")).isPresent();


	};

	// to verify if modal is present or not
	this.isModalPresent = function (ModalName) {
		if (ModalName == 'plus') {
			browser.sleep(3000);
			console.log('inside isModalPresent');
			return element(by.xpath("//*[@class='btn-close-mUnitLvl']//*[@class='close']")).isPresent();
		}
		else if (ModalName == 'Language') {

			return element(by.xpath("//*[@class='modal-content']//*[@class='header-multiLanguages']")).isPresent();

		}
		else {
			browser.sleep(3000);
			console.log('inside isModalPresent1');
			var xpath = "//*[@class='modal-content']//*[contains(text(),'" + ModalName + "')]";
			// var xpath = "//section[@class='import-border hight-400 ng-scope']";
			return element(by.xpath(xpath)).isPresent();

		}


	};


	// click on more info to get error popup
	this.clickERRORInfoLink = function () {
		element(by.cssContainingText('a', 'More info')).click();
	};

	// get text in popup
	this.verifyErrorInfoDialog = function () {
		return element(by.css("[name='txtInfoDialog']")).getText();
	};



	// to put input in input box of add relatioship  and edit relationship


	/*
	here valid fields: 
	panel = Source or Taget
	Field = code ,year ,num , noted
			nmc ,precu , precp ,sub , Date
			level ,inciso ,note ,unitLevel
			
	
	note:
	here  nmc= Body , precu = Unit , precp= part ,sub= subliment , Date =Date
	 unitLevel=*Nivel Unidad , level =Level ,inciso =*Inciso
	 note =Note
	
	*/

	this.sendValueTo = function (panel, field, inputvalue) {
		if (field == 'note' || field == '') {

			element(by.xpath("(//*[@class='titlePanelDark']//*[text()='" + panel + "']//..//..//div[contains(@name,'" + field + "') ]//textarea)[1]")).click().clear().sendKeys(inputvalue).sendKeys(protractor.Key.ENTER);
			return true;
		}
		else {
			if (panel == 'Target' && (field == 'code' || field == 'year' || field == 'num' || field == 'noted')) {
				element(by.xpath("(//*[text()='" + panel + "']//..//..//div[contains(@name,'" + field + "') ]//input)[2]")).click().clear().sendKeys(inputvalue).sendKeys(protractor.Key.ENTER);
			}
			else {
				element(by.xpath("(//*[text()='" + panel + "']//..//..//div[contains(@name,'" + field + "') ]//input)[1]")).click().clear().sendKeys(inputvalue).sendKeys(protractor.Key.ENTER);
			}
		}
	};


	// function for pursuant tab

	this.sendValueToPursuant = function (field, inputvalue) {
		if (field == 'code') {
			element(by.xpath("(//*[text()='Target']//..//..//div[contains(@name,'" + field + "') ]//input)[4]")).click().clear().sendKeys(inputvalue).sendKeys(protractor.Key.ENTER);
		}
		else {
			element(by.xpath("(//*[text()='Target']//..//..//div[contains(@name,'" + field + "') ]//input)[3]")).click().clear().sendKeys(inputvalue).sendKeys(protractor.Key.ENTER);
		}
	};

	this.clickOnTab = function (tabname) {
		element(by.xpath("//a[contains(text(),'" + tabname + "')]")).click();

	};

	this.getNumberofRelationship = function () {
		element(by.id('relationshipViewAllLink')).getText();
	};


	/*
	 * Clicks on + image in paragraph id popup in add relationship
	 */
	this.clickPlusImageInParagraphIdPopup = function () {
		let plusbutton = element(by.xpath("//*[@class='btn-close-mUnitLvl']//*[@class='close']"));
		plusbutton.isPresent().then(function () {
			console.log('inside clickPlusImageInParagraphIdPopup')


			browser.actions().mouseMove(plusbutton).mouseMove({ x: 2, y: 18 }).click().perform();
		},
			function (error) {
				console.log("Error in clickPlusImageInParagraphIdPopup");
			});
	};

	// to click all checkboxes in doc structure modal
	this.clickMultipleCheckBoxDocumentStructure = function () {
		for (var i = 0; i < 3; i++) {
			element.all(by.css('[ng-click="tree.updateList(node)"]')).get(i).click();
		}

	};
	/*
		 * Returns the number of checkbox (row) displayed in collector container
		 */
	this.getTheNumberOfRowsInCollectorContainer = function (value) {
		return element.all(by.css('#relationshipsCollectorContainer input')).count().then(function (count) {
			return count;
		},
			function (error) {
				console.log("Error in isNumberOfUnitSelectedEquals");
				return 0;
			});
	};

	this.isMultipleTagsPresent = function () {
		return element(by.xpath("//*[contains (@ng-repeat,'RelationshipsAddModalCtrl')]")).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isMultipleTagsPresent");
				return false;
			});
	};


	//this fuction is used to click on add relationship
	this.clickOnAddRelationship = function () {
		element(by.css('[ng-click="relationshipsSumData.addNewRelationship()"]')).click();
	};

	//this function is used to click on the note global icon
	this.clickonNoteglobalicon = function () {
		element.all(by.css('[ng-click="multilingual()"]')).get(7).click();
	};

	//this function is used to click on the structure button
	this.clickOnsourcestructurebutton = function () {
		element(by.css('[ng-click="openStructureSource()"]')).click();
	};


	//this function is used to click on the structure button
	this.clickOntargetstructurebutton = function () {
		element(by.css('[ng-click="openStructureTarget()"]')).click();
	};


	//this function is used to click on the save button
	this.clickOnsavebutton = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.editRelation(false)"]')).click();
	};

	//this function is used to click on unit from document structure 
	this.clickOnunitfromDocumentstructure = function () {
		element.all(by.css('[ng-click="tree.onSelect(node)"]')).get(6).click();
	};


	//clicks on delete button
	this.clickOndeletebutton = function () {
		element.all(by.css('[ng-click="RelationshipsMultiLanguages.remove(language)"]')).get(0).click();
	};

	//clicks on search button
	this.clickOnsearchbutton = function () {
		element.all(by.css('.bento-icon-search')).get(7).click();
	};

	//this function is to click on the number link
	this.clickonnumberlink = function () {
		element(by.id('relationshipViewAllLink')).click();
	};

	//enter the text in first note field
	this.entertextfirstnotefield = function (text1) {
		element.all(by.model('item.description')).get(0).sendKeys(text1).click();
	};


	//this function is used to click on the structure button
	this.clickOnsourcestructurebutton = function () {
		element(by.css('[ng-click="openStructureSource()"]')).click();
	};

	//enter the text in type field
	this.entertextintypefield = function (text1) {
		element.all(by.model('model[property]')).get(7).sendKeys(text1);
		//browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};

	//enter the text in code field
	this.entertextincodefield = function (text2) {
		element.all(by.model('model[property]')).get(10).sendKeys(text2);
	};

	//enter the text in year field
	this.entertextinyearfield = function (text3) {
		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nma')).get(1).sendKeys(text3);
	};

	//enter the text in Nº field
	this.entertextinNºfield = function (text4) {
		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn')).get(1).sendKeys(text4);
	};
	//enter text in level field
	this.entertextinlevelfield = function (data2) {
		element.all(by.model('txtField')).get(10).sendKeys(data2);
	};

	//enter the text in second note field
	this.entertextsecondnotefield = function (text2) {
		element.all(by.model('item.description')).get(1).sendKeys(text2);
	};

	//enter Modifica in relationship filter
	this.enterRelationshiptypefield = function (data) {

		element(by.model('typeRelationship')).sendKeys(data);
		element(by.model('typeRelationship')).sendKeys(protractor.Key.ENTER);
	};

	//click on 'NO' from consolidation filter

	this.clickNOfromConsolidationfilter = function () {
		var select = element(by.css('.margin-top-8.ng-pristine.ng-valid'));
		select.$('[value="N"]').click();
	};

	//click on 'YES' from consolidation filter

	this.clickYESfromConsolidationfilter = function () {
		var select = element(by.css('.margin-top-8.ng-pristine.ng-valid'));
		select.$('[value="S"]').click();
	};

	//click on the arrow button in first row
	this.clickonfirstarrowlinkunderactions = function () {
		element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0).click();
	};

	//this function is to clear the level field
	this.clearlevelfieldofTarget = function () {
		element.all(by.model('txtField')).get(10).clear();
	};


	//click on the arrow button in first row
	this.clickfirstarrowlink = function () {
		element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0).click();
	};

	//click on edit 
	this.clickonedit = function () {
		element.all(by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(0).click();
	};

	//this function is used to Check that the language "Español" appears selected
	this.isEspañolDisplayed = function () {
		return element(by.css('.language-select.selectpicker.select-element.input-border.cursor-pointer.select-relationship.reladatalang.ng-pristine.ng-valid')).getText();
	};

	//this function is used to click on the dropdown
	this.clickOnDropdown = function () {
		element.all(by.css('[name="datosRelacion.idiomas"]')).click();

	};


	//this function is used to Check that the language "Español" appears when clicked on dropdown
	this.isEspañolDisplayedfromDropdown = function () {
		return element(by.css('.language-select.selectpicker.select-element.input-border.cursor-pointer.select-relationship.reladatalang.ng-pristine.ng-valid')).$('[value="0"]').getText();
	};

	//this function is used to Check that the language "Alemán" appears when clicked on dropdown
	this.isAlemánDisplayedfromDropdown = function () {
		return element(by.css('.language-select.selectpicker.select-element.input-border.cursor-pointer.select-relationship.reladatalang.ng-pristine.ng-valid')).$('[value="0"]').getText();
	};

	//this function is used to Check that the language "Catalán" appears when clicked on dropdown
	this.isCatalánDisplayedfromDropdown = function () {
		return element(by.css('.language-select.selectpicker.select-element.input-border.cursor-pointer.select-relationship.reladatalang.ng-pristine.ng-valid')).$('[value="1"]').getText();
	};

	//this function is used to click on the pencil button
	this.clickOnPencilButton = function () {
		element(by.css('.bento-icon-edit.center-lang-ico')).click();
	};

	//this function is used to click on apply button
	this.clickonapplybutton = function () {
		element(by.css('.btn.btn-primary.orange-button.ng-scope')).click();
	};

	//this function is used to click on dropdownlist
	this.clickondropdownlist = function () {
		element.all(by.css('.select-element-large.input-border.cursor-pointer.width-100.ng-pristine.ng-valid')).get(0).click();
	};

	this.isLanuagelistdisplayed = function () {
		return element(by.css('.select-element-large.input-border.cursor-pointer.width-100.ng-pristine.ng-valid')).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in isLanuagelistdisplayed");
				return "";
			});
	};


	this.isLanuagedisplayonebyone = function (index) {
		var ele = element.all(by.xpath('(//select[@class="select-element-large input-border cursor-pointer width-100 ng-pristine ng-valid"])[1]//option')).get(index);
		  return ele.getText().then(function(text) {
			  console.log(text);
		    return text;
		},
			function (error) {
				console.log("Error in isLanuagedisplayonebyone");
				return false;
			});
	};

	//this function is to select language from dropdownlist
	this.selectfirstlanguagefromdropdownlist = function () {
		return element.all(by.css('.select-element-large.input-border.cursor-pointer.width-100.ng-pristine.ng-valid')).get(0).$('[value="1"]').click();
	};

	//this function is to select language from dropdownlist
	this.selectsecondlanguagefromdropdownlist = function () {
		return element(by.css('.select-element-large.input-border.cursor-pointer.width-100.ng-pristine.ng-valid')).$('[value="4"]').click();
	};

	//close Idiomas pop up
	this.clickOnXbuttonOfIdiomaspopup = function () {
		element.all(by.css('.bento-icon-close-x')).get(29).click();
	};


	this.clickonViewAlllinkTopic = function () {
		element(by.id('topicSubtopicViewAllLink')).click();
	};

	this.clickOnShowFilterTopic = function () {
		element(by.css('[ng-click="showHideFilters()"]')).click();
	};

	this.enterdatainTopic = function () {
		element(by.model('tcodeInput')).sendKeys('2000');
	};

	this.enterwrongdatainTopic = function () {
		element(by.model('tcodeInput')).sendKeys('1234');
	};


	this.verifyTopicfilter = function () {
		element.all(by.css('.wj-cell.wj-wrap')).get(1).getText();
	};

	this.relationshipTopicfilter = function () {
		element.all(by.css('.wj-cell.wj-wrap')).get(1).isDisplayed();
	};


	this.clickOncloseFilter = function () {
		element(by.css('[ng-click="close()"]')).click();
	};

	this.clickAddRelationship = function () {
		element(by.id('relationships.summarization.addSingle')).click();
	};


	this.expandRelationshiptype = function () {
		element.all(by.css('.dropdown-toggle.nav-a')).get(7).click();
	};


	this.enterRelationShiptype = function () {
		element.all(by.model('searchtext')).get(9).sendKeys('Véase');
		element.all(by.model('searchtext')).get(9).sendKeys(protractor.Key.ENTER);
	};


	this.expandCode = function () {
		element.all(by.css('.dropdown-toggle.nav-a')).get(10).click();
	};

	this.enterCode = function () {
		element.all(by.model('searchtext')).get(12).sendKeys('RCL');
		element.all(by.model('searchtext')).get(12).sendKeys(protractor.Key.ENTER);
	};

	this.enterYear = function () {
		element.all(by.css('[name="afectado.marginal.ano"]')).get(0).sendKeys('1947');
	};

	this.enterNumber = function () {
		element.all(by.css('[name="afectado.marginal.numero"]')).get(0).sendKeys('476');
		element.all(by.css('[name="afectado.marginal.numero"]')).get(0).sendKeys(protractor.Key.ENTER);
	};

	this.clickAddonpopup = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleRelation()"]')).click();
	};
	//add relationship popup close button
	this.clickClosepopup = function (i) {
		element.all(by.css('.bento-icon-close-x')).get(i).click();
	};

	this.clickESCbutton = function () {
		element(by.css('.modal-header.header-orange')).sendKeys(protractor.Key.ESC);
	};


	this.clickAddButtonFromTable = function () {
		element(by.id('btn-relationships-addSingle')).click();
	};


	//click on add button next to relationships tab

	this.clickAddButtonNextToRelationship = function () {
		element(by.id('relationships.summarization.addSingle')).click();
	};


	this.expandRelationshipTable = function () {
		element(by.id('relationshipViewAllLink')).click();
	};

	this.clickShowRelationshipfilter = function () {
		element(by.buttonText('Show Filters')).click().then(function (displayed) {
		},
			function (error) {
				console.log("Error in clickShowRelationshipfilter");
			});
	};

	this.entermarginalid = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\\1947\\476');
		element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
	};

	//Delete all duplicates (hard coded), and keep this one.
	this.enterTargetMarginalIdAndPressEnter = function (marginalId) {
		element(by.model('targetMarginalId')).isDisplayed().then(function (displayed) {
			element(by.model('targetMarginalId')).clear();
			element(by.model('targetMarginalId')).sendKeys(marginalId);
			element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
		},
			function (error) {
				console.log("Error in enterTargetMarginalId");
			});
	};

	this.entermarginalid1 = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\\2010\\92');
		element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
	};


	this.clearmarginalid = function () {
		element(by.model('targetMarginalId')).clear();
		element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
	};


	this.entermarginalidOfSource = function () {
		element(by.model('sourceMarginalId')).sendKeys('LCAT\\2014\\16');
	};

	this.entermarginalidOfTarget = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\\2010\\269');

	};

	//clicking and select the 'YES' option from consolidated filter

	this.selectConsildatedFilterY = function () {
		var select = element(by.css('.margin-top-8.ng-pristine.ng-valid')).click();
		select.$('[value="S"]').click();
	};




	this.enter2ndmarginalidOfSource = function () {
		element(by.model('sourceMarginalId')).sendKeys('RCL\\1981\\1151');
	};

	this.enter2ndmarginalidOfTarget = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\\1981\\1151');

	};


	//enter Añade unidad in relationship filter

	this.enterRelationshiptypeinFilter = function (data) {

		element(by.model('typeRelationship')).sendKeys(data);
		element(by.model('typeRelationship')).sendKeys(protractor.Key.ENTER);
	};

	this.enterunitlevelOfSource = function (data) {

		element.all(by.model('bodyUnitLevel')).get(0).sendKeys(data);

	};

	this.enterunitlevelOfTarget = function (data) {

		element.all(by.model('targetBodyUnitLevel')).sendKeys(data);

	};


	this.enternewlevelOfTarget = function (data) {

		element.all(by.model('newUnit')).get(0).sendKeys(data);
		element.all(by.model('newUnit')).get(0).sendKeys(protractor.Key.ENTER);
	};




	this.clickDeleteRelationShip = function () {
		element(by.id('btn-relationships-remove')).click();
	};

	this.selectAllFiltered = function () {
		element.all(by.css('[input="checkbox"]')).last().click();
	};

	this.clickOkpopup = function () {
		element(by.css('[ng-click="ok()"]')).click();
	};

	this.clickDelete = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\1947\476');
	};

	this.selectFirstcheckbox = function () {
		//element(by.css('.selecRowTable.align-checkox-table.ng-pristine.ng-valid')).click();
		//Normal click is sometimes not working. Hence added javascript click	 
		browser.executeScript("arguments[0].click();", element.all(by.css('.selecRowTable.align-checkox-table.ng-pristine.ng-valid')).get(0).getWebElement());
	};

	/*
	 * This method selects/unselects the checkbox for the nth item
	 */
	this.clickCheckboxAtPosition = function (position) {
		element.all(by.css('.selecRowTable.align-checkox-table')).get(position).isPresent().then(function (displayed) {
			if (displayed === true) {
				//Normal click is sometimes not working. Hence added javascript click	 
				browser.executeScript("arguments[0].click();", element.all(by.css('.selecRowTable.align-checkox-table')).get(position).getWebElement());
			}
		},
			function (error) {
				console.log("Error in selecCheckboxAtPosition");
			});
	};


	/*
	* This method selects/unselects the checkbox in the header line (select all)
	*/
	this.clickCheckboxAtHeader = function () {
		element(by.css('.wj-cell.wj-header.multi-select>input')).isPresent().then(function (displayed) {
			if (displayed === true) {
				//Normal click is sometimes not working. Hence added javascript click	 
				browser.executeScript("arguments[0].click();", element(by.css('.wj-cell.wj-header.multi-select>input')).getWebElement());
			}
		},
			function (error) {
				console.log("Error in clickCheckboxAtHeader");
			});
	};

	/*
	 * This method clicks the glass view button for the nth item
	 */
	this.clickGlassButtonAtPosition = function (position) {
		element.all(by.css('[ng-click="detailRelationship($row, dp, $item.idRelacion)"]>img')).get(position).isPresent().then(function (displayed) {
			if (displayed === true) {
				//Normal click is sometimes not working. Hence added javascript click	 
				browser.executeScript("arguments[0].click();", element.all(by.css('[ng-click="detailRelationship($row, dp, $item.idRelacion)"]>img')).get(position).getWebElement());
			}
		},
			function (error) {
				console.log("Error in clickGlassButtonAtPosition");
			});
	};

	this.selectfivecheckbox = function () {
		for (var i = 0; i < 5; i++) {
			element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).get(i).click();
		}
	};


	this.clickedit = function () {
		element(by.id('btn-relationships-edit')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickedit");
			});
	};


	//note relationship field in relationship section

	this.enterNoteRelationshipInRelationship = function (x) {

		element.all(by.model('txtField')).get(7).sendKeys(x);
		element.all(by.model('txtField')).get(7).sendKeys(protractor.Key.ENTER);

	};


	//close relationship table

	this.clickOnXbuttonOfRelatioshipTable = function () {
		element.all(by.css('.bento-icon-close-x')).get(1).click();
	};





	//10 th checkbox selection
	this.select10thcheckbox = function () {
		element.all(by.model('$item.selected')).get(9).click();
	};

	//12 th checkbox selection
	this.select12thcheckbox = function () {
		element.all(by.model('$item.selected')).get(11).click();
	};

	//11 th checkbox selection
	this.select11thcheckbox = function () {
		element.all(by.model('$item.selected')).get(10).click();
	};

	//13 th checkbox selection
	this.select13thcheckbox = function () {
		element.all(by.model('$item.selected')).get(12).click();
	};





	//5 th checkbox selection after filtering
	this.select5thcheckbox = function () {
		element.all(by.model('$item.selected')).get(4).click();
	};



	//6 th checkbox selection after filtering
	this.select6thcheckbox = function () {
		element.all(by.model('$item.selected')).get(5).click();
	};


	//7th checkbox selection after filtering
	this.select7thcheckbox = function () {
		element.all(by.model('$item.selected')).get(6).click();
	};



	//9th checkbox selection
	this.select9thcheckbox = function () {
		element.all(by.model('$item.selected')).get(8).click();
	};



	//16th checkbox selection
	this.select16thcheckbox = function () {
		element.all(by.model('$item.selected')).get(15).click();
	};

	//2nd checkbox selection
	this.select2ndcheckbox = function () {
		element.all(by.model('$item.selected')).get(1).click();
	};

	//3rd checkbox selection
	this.select3rdcheckbox = function () {
		element.all(by.model('$item.selected')).get(2).click();
	};



	//arrow button function to go to the next page

	this.clickArrowButtonForNextPage = function () {
		element.all(by.model('checkModel.middle')).get(7).click();
	};

	//unit/level filter of target(on right panel)


	this.unitOrLevelOfTarget = function (x) {

		element(by.model('targetBodyUnitLevel')).sendKeys(x);


	};



	this.clickDeleteButton11 = function () {
		element(by.css('[ng-click="deleteListRelationships()"]')).click();
	};



	this.clickexpandPopup = function () {
		element.all(by.css('.dropdown-toggle.nav-a')).get(11).click();
	};

	this.enterStructurePopup = function () {
		element.all(by.model('searchtext')).get(13).sendKeys('PE');
		element.all(by.model('searchtext')).get(13).sendKeys(protractor.Key.ENTER);
	};

	this.clickSave = function () {
		element(by.buttonText('Save')).click();
	};

	this.selectThirdItem = function () {
		element.all(by.css('.selecRowTable.align-checkox-table.ng-pristine.ng-valid')).get(2).click();
	};

	this.selectFourthItem = function () {
		element.all(by.css('.selecRowTable.align-checkox-table.ng-pristine.ng-valid')).get(3).click();
	};

	this.removeUnit = function () {
		element.all(by.css('.bento-icon-close-x')).get(14).click();
	};


	this.enterSourceDoc = function () {
		element(by.model('bodyUnitLevel')).sendKeys('A%');
		element(by.model('bodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.valueunderfilter = function () {
		element.all(by.css('.selecRowTable.align-checkox-table.ng-pristine.ng-valid')).get(0).isPresent();
	};

	this.clickEditLanguage = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultiLanguages()"]')).click();
	};

	this.selectRelationshipLanguage = function () {
		var select = element(by.model('RelationshipsAddModalCtrl.currentLang'));
		select.$('[value="1"]').click();
	};

	this.clickCloseLanguagePopup = function () {
		element(by.css('[ng-click="RelationshipsMultiLanguages.closeModal()"]')).click();
	};

	this.levelGlobalICon = function () {
		element.all(by.css('[ng-click="multilingual()"]')).get(5).click();
	};

	this.popLevelTextField1 = function (text) {
		element.all(by.model("item.description")).get(0).sendKeys(text);
	};

	this.popLevelTextField2 = function (text) {
		element.all(by.model("item.description")).get(1).sendKeys(text);
	};

	this.popLevelApplyButton = function () {
		element(by.id("editBtn-apply-Level")).click();
	};

	this.selectRelationshipLanguagAgaine = function () {
		var select = element(by.model('RelationshipsAddModalCtrl.currentLang'));
		select.$('[value="0"]').click();
	};

	this.selectLanguageLIst = function () {
		element.all(by.model('language.idLang')).get(0).$('[value="1"]').click();
		element.all(by.model('language.idLang')).get(1).$('[value="4"]').click();
	};

	this.selectFirstcheckbox1 = function () {
		element.all(by.model('$item.selected')).get(0).click();
	};

	this.selectcheckbox4 = function () {
		element.all(by.model('$item.selected')).get(3).click();
	};


	this.selectcheckbox3 = function () {
		element.all(by.model('$item.selected')).get(2).click();
	};


	this.selectcheckbox11 = function () {
		element(by.model('$item.selected')).click();
	};

	//enter text in level field of source

	this.enterLevelFieldInSource = function (x) {

		element.all(by.model('txtField')).get(0).sendKeys(x);
		element.all(by.model('txtField')).get(0).sendKeys(protractor.Key.ENTER);

	};

	//clear the level field from source section

	this.clearLevelFieldOfSource = function () {

		element.all(by.model('txtField')).get(0).clear();
	};

	//clear relationship filter

	this.clearRelationshipFilter = function (x) {

		element(by.model('typeRelationship')).clear();
		element(by.model('typeRelationship')).sendKeys(protractor.Key.ENTER);

	};

	this.enterfivetextfields = function (text) {
		for (var i = 24; i < 41; i += 4) {
			element.all(by.model('txtField')).get(i).sendKeys(text);
		}
	};

	this.enterfivetextfields1 = function (text) {
		for (var i = 26; i < 43; i += 4) {
			element.all(by.model('txtField')).get(i).sendKeys(text);
		}
	};
	//click on no if u dont want the changes  to be saved after edit operation

	this.enterrowforparaids = function (text) {
		element(by.css('[ng-click="addMultipleUnitLevel()"]')).click();
	};

	this.clickOnYesButton = function () {
		element(by.css('[ng-click="ok()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickOnYesButton");
			});
	};


	this.getElementData = function () {
		return element(by.css('.relationship-unit-label-text.align-center.ng-binding')).getText();
	};


	//enter inciso field in source

	this.enterIncisoFieldInSource = function (x) {

		element.all(by.model('txtField')).get(2).sendKeys(x);
		element.all(by.model('txtField')).get(2).sendKeys(protractor.Key.ENTER);

	};


	//clear the inciso field from source section

	this.clearincisoFieldOfSource = function () {

		element.all(by.model('txtField')).get(2).clear();
	};


	//enter note field in source

	this.enterNoteFieldInSource = function (x) {

		element.all(by.model('txtField')).get(5).sendKeys(x);
		element.all(by.model('txtField')).get(5).sendKeys(protractor.Key.ENTER);

	};



	//clear the note field from source section

	this.clearnoteFieldOfSource = function () {

		element.all(by.model('txtField')).get(5).clear();
	};



	//note relationship field in relationship section

	this.enterNoteRelationshipInRelationship = function (x) {

		element.all(by.model('txtField')).get(7).sendKeys(x);
		element.all(by.model('txtField')).get(7).sendKeys(protractor.Key.ENTER);

	};


	//close relationship table

	this.clickOnXbuttonOfRelatioshipTable = function () {
		element.all(by.css('.bento-icon-close-x')).get(2).click();
	};





	//10 th checkbox selection
	this.select10thcheckbox = function () {
		element.all(by.model('$item.selected')).get(9).click();
	};

	//12 th checkbox selection
	this.select12thcheckbox = function () {
		element.all(by.model('$item.selected')).get(11).click();
	};

	//11 th checkbox selection
	this.select11thcheckbox = function () {
		element.all(by.model('$item.selected')).get(10).click();
	};

	//13 th checkbox selection
	this.select13thcheckbox = function () {
		element.all(by.model('$item.selected')).get(12).click();
	};





	//5 th checkbox selection after filtering
	this.select5thcheckbox = function () {
		element.all(by.model('$item.selected')).get(4).click();
	};



	//6 th checkbox selection after filtering
	this.select6thcheckbox = function () {
		element.all(by.model('$item.selected')).get(5).click();
	};


	//7th checkbox selection after filtering
	this.select7thcheckbox = function () {
		element.all(by.model('$item.selected')).get(6).click();
	};



	//9th checkbox selection
	this.select9thcheckbox = function () {
		element.all(by.model('$item.selected')).get(8).click();
	};



	//16th checkbox selection
	this.select16thcheckbox = function () {
		element.all(by.model('$item.selected')).get(15).click();
	};

	//2nd checkbox selection
	this.select2ndcheckbox = function () {
		element.all(by.model('$item.selected')).get(1).click();
	};

	//3rd checkbox selection
	this.select3rdcheckbox = function () {
		element.all(by.model('$item.selected')).get(2).click();
	};



	//arrow button function to go to the next page

	this.clickArrowButtonForNextPage = function () {
		element.all(by.model('checkModel.middle')).get(7).click();
	};

	//unit/level filter of target(on right panel)


	this.unitOrLevelOfTarget = function (x) {

		element(by.model('targetBodyUnitLevel')).sendKeys(x);


	};



	this.clickDeleteButton11 = function () {
		element(by.css('[ng-click="deleteListRelationships()"]')).click();
	};




	this.isChecKBoxPresent = function () {
		return element.all(by.css('[ng-model="$item.selected"]')).get(0).isPresent();
	};

	this.clickLanguageDropdown = function () {
		element.all(by.model('RelationshipsAddModalCtrl.currentLang')).get(0).click();
	};

	this.clickExpanEDitCopyPaste = function () {
		element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0).click();
	};

	this.clickCopyRelationship1 = function () {
		element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0);
	};

	this.clickCopyRelationship = function () {
		element.all(by.css('[ng-click="copyRelationship($item.idRelacion)"]')).get(0).click();
	};
	this.isPopupDisplayed = function () {
		element(by.css('.toast-message')).isDisplayed();
	};


	this.enterSourceDoc1 = function () {
		element(by.model('sourceMarginalId')).clear();
		element(by.model('sourceMarginalId')).sendKeys('%%');
		element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
	};


	this.enterSourceDoc2 = function () {
		element(by.model('sourceMarginalId')).clear();
		element(by.model('sourceMarginalId')).sendKeys('');
		element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
	};

	this.enterSourceDoc3 = function () {
		element(by.model('sourceMarginalId')).clear();
		element(by.model('sourceMarginalId')).sendKeys(' ');
		element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
	};

	this.closeRelationshipFilter = function () {
		element(by.css('[ng-click="close()"]')).click();
	};

	this.isDisplayedButtonDisplayed = function () {
		element(by.id('btn-relationships-remove')).isDisplayed();
	};

	this.enterUnitFilterSpace = function () {
		element(by.model('bodyUnitLevel')).clear();
		element(by.model('bodyUnitLevel')).sendKeys(' ');
		element(by.model('bodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterUnitFilterA2Percentage = function () {
		element(by.model('bodyUnitLevel')).clear();
		element(by.model('bodyUnitLevel')).sendKeys('A2%');
		element(by.model('bodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterUnitFilterClear = function () {
		element(by.model('bodyUnitLevel')).clear();
		element(by.model('bodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterUnitFilterPercentage = function () {
		element(by.model('bodyUnitLevel')).clear();
		element(by.model('bodyUnitLevel')).sendKeys('%%');
		element(by.model('bodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};


	this.enterDateFilterSpace = function () {
		element(by.model('sourceDate')).clear();
		element(by.model('sourceDate')).sendKeys(' ');
		element(by.model('sourceDate')).sendKeys(protractor.Key.ENTER);
	};

	this.enterDateFilterPercentage = function () {
		element(by.model('sourceDate')).clear();
		element(by.model('sourceDate')).sendKeys('%%');
		element(by.model('sourceDate')).sendKeys(protractor.Key.ENTER);
	};

	this.enterDateFilterrWildcards = function () {
		element(by.model('sourceDate')).clear();
		element(by.model('sourceDate')).sendKeys('24%');
		element(by.model('sourceDate')).sendKeys(protractor.Key.ENTER);
	};

	this.enterDateFilterNone = function () {
		element(by.model('sourceDate')).clear();
		element(by.model('sourceDate')).sendKeys('');
		element(by.model('sourceDate')).sendKeys(protractor.Key.ENTER);
	};


	this.enterSourceDocDate = function () {
		element(by.model('sourceMarginalId')).clear();
		element(by.model('sourceMarginalId')).sendKeys('%394');
		element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
	};


	this.enterSourceDocDate1 = function (data) {
		element(by.model('sourceMarginalId')).click().then(function (result) {
			element(by.model('sourceMarginalId')).clear();
			element(by.model('sourceMarginalId')).sendKeys(data);
			element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
		},
			function (error) {
				console.log("Error in click() in enterSourceDocDate1");
			});
	};


	this.enterdatainTopic1 = function (x) {
		element(by.model('tcodeInput')).clear();
		element(by.model('tcodeInput')).sendKeys(x);
	};


	this.enterTargetUnitField = function (data) {
		element(by.model('targetBodyUnitLevel')).clear();
		element(by.model('targetBodyUnitLevel')).sendKeys(data);
		element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterTargetUnitFieldDirectly = function (data) {
		var el = element(by.css('div[name="precu-dest"]>#relaDataUnitDrop input[name="afectado.unidad.tipo"]'));
		el.clear();
		el.sendKeys(data);
	};


	this.enterTargetUnitFieldspace = function () {
		element(by.model('targetBodyUnitLevel')).clear();
		element(by.model('targetBodyUnitLevel')).sendKeys(' ');
		element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterTargetUnitFieldnospace = function () {
		element(by.model('targetBodyUnitLevel')).clear();
		element(by.model('targetBodyUnitLevel')).sendKeys('');
		element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterTargetDateField = function (data) {
		element(by.model('targetBodyUnitLevel')).clear();
		element(by.model('targetBodyUnitLevel')).sendKeys(data);
		element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.enterTargetNewDateField = function (data) {
		element(by.model('newDate')).clear();
		element(by.model('newDate')).sendKeys(data);
		element(by.model('newDate')).sendKeys(protractor.Key.ENTER);
	};

	this.enterTargetNewUnitField = function (data) {
		element(by.model('newDate')).clear();
		element(by.model('newDate')).sendKeys(data);
		element(by.model('newDate')).sendKeys(protractor.Key.ENTER);
	};

	this.enterRelationshipTypeFilter = function (data) {
		element(by.model('typeRelationship')).click().then(function (result) {
			element(by.model('typeRelationship')).clear();
			element(by.model('typeRelationship')).sendKeys(data);
			element(by.model('typeRelationship')).sendKeys(protractor.Key.ENTER);
		},
			function (error) {
				console.log("Error in click() in enterRelationshipTypeFilter");
			});
	};

	this.selectConsildatedFilterYes = function (data) {
		var select = element(by.model('spread'));
		select.$('[value="S"]').click();
	};

	this.selectConsildatedFilterNo = function (data) {
		var select = element(by.model('spread'));
		select.$('[value="N"]').click();
	};




	this.isRelationshipTypepresent = function () {
		return element(by.id('relaTypeDrop')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Relationship Type");
				return false;
			});
	};

	this.checkRealationDataInput1 = function () {
		element(by.model("RelationshipsAddModalCtrl.currentLang")).$('[value="0"]').click();
	};
	this.verifyRealationDataInput1 = function () {
		var txt = element.all(by.model('txtField')).get(10).getText();
		return txt;
	};

	this.checkRealationDataInput2 = function () {
		element(by.model("RelationshipsAddModalCtrl.currentLang")).$('[value="1"]').click();
	};

	this.verifyRealationDataInput2 = function () {
		var txt = element(by.css('.relaDataInput.ng-pristine.ng-valid.has-visited')).getText();
		console.log("is the text present?" + txt);
		return txt;
	};

	this.isLanguagepresent = function () {
		return element(by.model('RelationshipsAddModalCtrl.currentLang')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Language");
				return false;
			});
	};

	this.isExplicitpresent = function () {
		return element(by.model('RelationshipsAddModalCtrl.relationship.datosRelacion.explicita')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Explicit");
				return false;
			});
	};


	this.isDepthpresent = function () {
		return element(by.model('model[property]')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Explicit");
				return false;
			});
	};



	this.isLeftBodypresent = function () {
		return element(by.id('sourceBodyInput')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Left");
				return false;
			});
	};


	this.isLeftNotepresent = function () {
		return element.all(by.model('txtField')).get(5).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No left note");
				return false;
			});
	};


	this.isLeftIncisioPresent = function () {
		return element.all(by.model('txtField')).get(2).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Incisio");
				return false;
			});
	};


	//In this function we are checking the text for first row from Target section in table
	this.isTextFieldpresentTarget = function (value) {
		//return element.all(by.model('txtField')).get(0).isPresent().then(function (present) {
		//return present;
		return element(by.xpath("//div[@name='R0_C8']//span")).getText().then(function (text) {
			console.log("text=" + text);
			console.log("value=" + value);
			if (value === text) {
				console.log("text present");
				return true;
			}
			else {
				console.log("text not present");
				return false;
			}
		});
	};

	//In this function we are checking the text for first row from Source section in table
	this.isTextFieldpresentSource = function (value) {
		//return element.all(by.model('txtField')).get(0).isPresent().then(function (present) {
		//return present;
		return element(by.xpath("//div[@class='marginal-table-column']//span[contains(text(),'" + value + "')]")).getText().then(function (text) {
			console.log("text=" + text);
			console.log("value=" + value);
			if (value === text) {
				console.log("text present");
				return true;
			}
			else {
				console.log("text not present");
				return false;
			}
		});
	};

	this.isRightBodypresent = function () {
		return element(by.model('RelationshipsAddModalCtrl.relationship.afectado.unidad.nmc')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Left");
				return false;
			});
	};


	this.isRightNotepresent = function () {
		return element.all(by.model('txtField')).get(15).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No left note");
				return false;
			});
	};


	this.isRightIncisioPresent = function () {
		return element.all(by.model('txtField')).get(12).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Incisio");
				return false;
			});
	};



	this.isRightTextFieldpresent = function () {
		return element.all(by.model('txtField')).get(10).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No Text field");
				return false;
			});
	};

	this.isMinimizePopup = function () {
		return element.all(by.css('[ng-click="RelationshipsAddModalCtrl.minimize()"]')).get(1).click();
	},


		this.clickEditfirstrelationship = function () {
			//element.all (by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(0).click();
			//Normal click is sometimes not working. Hence added javascript click	 
			browser.executeScript("arguments[0].click();", element.all(by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(0).getWebElement());
		};


	this.clickCopyfirstrelationship = function () {
		//Normal click is sometimes not working. Hence added javascript click	 
		browser.executeScript("arguments[0].click();", element.all(by.css('[ng-click="copyRelationship($item.idRelacion)"]')).get(0).getWebElement());
	};


	this.isDeletebuttonDisbaled = function () {
		return element(by.id('btn-relationships-remove')).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Delete button is disabled");
				return false;
			});
	};

	this.clickSpectaleButton = function () {
		element.all(by.css('[ng-click="detailRelationship($row, dp, $item.idRelacion)"]')).get(0).click();
	};
	this.isSpectalebuttonverified = function () {
		return element(by.css('.col-md-2.padding-left-25.colorBackgroundGrey.borderRightHeight29')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Spectale button is not verified");
				return false;
			});
	};


	this.isAddButtonEnaled = function () {
		return element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleRelation()"]')).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("Add button is enabled");
				return false;
			});
	};

	this.enterRelationShiptype1 = function (data) {
		element.all(by.model('searchtext')).get(9).sendKeys(data);
		element.all(by.model('searchtext')).get(9).sendKeys(protractor.Key.ENTER);
	};


	this.enterCode1 = function (data) {
		element.all(by.model('searchtext')).get(12).sendKeys(data);
		element.all(by.model('searchtext')).get(12).sendKeys(protractor.Key.ENTER);
	};

	this.enterYear1 = function (data) {
		element.all(by.css('[name="afectado.marginal.ano"]')).get(0).sendKeys(data);
	};


	this.enterNumber1 = function (data) {
		element.all(by.css('[name="afectado.marginal.numero"]')).get(0).sendKeys(data);
		element.all(by.css('[name="afectado.marginal.numero"]')).get(0).sendKeys(protractor.Key.ENTER);
	};


	this.selectUnitDropdown = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(4).click();
	};





	this.iserrorpopupexist = function () {
		return element(by.css('.toast.toast-error')).isPresent().then(function (present) {
			return present;
		},
			function (error) {
				console.log("No error popup");

			});
	};






	//click on dropdown and enter RCL next to marginal in consolidation window


	this.selectCodeInConsolidation = function (data) {

		element.all(by.css('.padding-none-important.btn.btn-icon.pull-right')).get(4).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(4).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(4).sendKeys(protractor.Key.ENTER);


	};

	//enter year in consolidation window

	this.enterYearInConsolidation = function (data) {

		element.all(by.model('searchConsolidationCtrl.searchModel.amended.marginalFromYear')).get(0).clear();

		element.all(by.model('searchConsolidationCtrl.searchModel.amended.marginalFromYear')).get(0).sendKeys(data);


	};

	//enter n value in consolidated window

	this.enterNInConsolidation = function (data) {

		element.all(by.model('searchConsolidationCtrl.searchModel.amended.marginalFromNumber')).get(0).clear();

		element.all(by.model('searchConsolidationCtrl.searchModel.amended.marginalFromNumber')).get(0).sendKeys(data);


	};



	//click on search button

	this.clickOnSearchInConsolidation = function () {

		//window.scrollTo(836,765);

		element(by.css('[ng-click="searchConsolidationCtrl.search()"]')).click();


	};

	//scroll the window and clicking on search button

	this.scrollAndclickOnSearchButton = function () {

		var el = element(by.css('[ng-click="searchConsolidationCtrl.search()"]'));
		browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());



	};




	//select the checkbox and delete the document

	this.selectCheckboxAndDelete = function () {

		element.all(by.css('.common-checkbox.cursor-pointer')).get(4).click();
		browser.sleep(2000);
		element.all(by.css('.header-btn.header-btn-padding')).get(0).click();


	};

	//type "BOE" in publication field of orgin

	this.clickdropdownAndEnterDataInPublicationOfAmendingSection = function (data) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(1).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(1).sendKeys(protractor.Key.ENTER);

	};


	//type date in date of publication in amending section
	this.typeDateInDateOfPublicationOfAmendingSection = function (data, i) {

		element.all(by.model('date')).get(i).click();
		browser.sleep(2000);
		element.all(by.model('date')).get(i).sendKeys(data);

	};




	this.getTodaysDate = function (i) {
		var today = new Date();
		console.log("Todays Date" + today);

		var dd = today.getDate();
		var mm = today.getMonth() + 1;

		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var todayDate = dd + '/' + mm + '/' + yyyy;
		console.log("Today's date" + todayDate);
		element.all(by.model('date')).get(i).sendKeys(todayDate);

	};


	this.select1stCheckboxAndDelete = function () {


		browser.sleep(2000);
		element(by.css('.common-checkbox.cursor-pointer')).click();
		browser.sleep(2000);
		element(by.css('.header-btn.header-btn-padding')).click();


	};

	//select the checkbox of added document

	this.selectCheckboxOfAddedDocument = function () {

		element.all(by.css('.common-checkbox.cursor-pointer')).get(4).click();

	};

	//select the discard button

	this.selectDiscardButton = function () {
		element.all(by.css('.header-btn.header-btn-padding')).get(3).click();

	};


	//select the retrive button

	this.selectretriveButton = function () {
		element.all(by.css('.header-btn.header-btn-padding')).get(4).click();

	};


	//after clicking on relationship  pending consilidation  then you will be redirected to a page 
	//Type "BOE" in "Publicacion" field

	this.clickdropdownAndEnterDataInPublication = function (data) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(16).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(8).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(8).sendKeys(protractor.Key.ENTER);

	};

	//Type "Listado de Vigencias" next to "product workbench" field

	this.clickdropdownAndEnterDataInProductworkbench = function (data) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(6).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(3).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(3).sendKeys(protractor.Key.ENTER);

	};

	//click on dropdown and type "LJS" in text field of abbreviation

	this.clickdropdownAndEnterDataInAbbreviation = function (data) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(10).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(5).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(5).sendKeys(protractor.Key.ENTER);

	};

	//click on dropdown and type "%Navarra%" in text field of Jurisdiction in amending section

	this.clickdropdownAndEnterDataInJurisdiction = function (data) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(0).click();
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(0).sendKeys(data);
		browser.sleep(2000);
		element.all(by.css('[name="txtdropdownsearch"]')).get(0).sendKeys(protractor.Key.ENTER);

	};


	//select consolidated checkbox

	this.selectConsolidatedCheckbox = function () {
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(1).click();

	};

	//select non-consolidated checkbox


	this.selectNonConsolidatedCheckbox = function () {
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(0).click();

	};


	//select the discarded checkbox

	this.selectDiscardedCheckbox = function () {
		element.all(by.css('.blue-borde-checkbox.cursor-pointer')).get(2).click();

	};















	//entering a value for level field in target section


	this.enterLevelfieldInTarget = function (x) {

		element.all(by.model('txtField')).get(10).sendKeys(x);
		element.all(by.model('txtField')).get(10).sendKeys(protractor.Key.ENTER);
	};


	//arrow button for third relationship in actions column 



	this.clickOn3rdArrowButton = function () {
		element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(2).click();
	};

	//select copy from the dropdown

	this.clickOnCopyOf3rdArrow = function () {
		element.all(by.css('[ng-click="copyRelationship($item.idRelacion)"]')).get(2).click();
	};


	//select edit from actions dropdown of third relationship

	this.clickOnEditOf3rdArrow = function () {
		element.all(by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(2).click();
	};






	//arrow button for first relationship in actions column 



	this.clickOn1stArrowButton = function () {
		//element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0).click();
		//Normal click is sometimes not working. Hence added javascript click	 
		browser.executeScript("arguments[0].click();", element.all(by.css('.dropdown-toggle.plain-text.glyphicon.glyphicon-chevron-down')).get(0).getWebElement());
	};







	//select copy from the dropdown

	this.clickOnCopyOf1stArrow = function () {
		element.all(by.css('[ng-click="copyRelationship($item.idRelacion)"]')).get(0).click();
	};


	//From "Target" section, click structure button & Select a different unit from the pop up that is not been currently selected.

	this.clickandSelectOptionFromStructureButton = function () {
		element.all(by.css('.md-icon')).get(4).click();
		element.all(by.css('.col-md-3.width-29.unit-tree-node')).get(5).click();

	};



	this.clickAddButtonOnTop = function () {
		element(by.id('btn-relationships-addSingle')).click();
	};



	this.selectUnitDropdown = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(4).click();
	};




	this.selectUnitDropdown1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click();
	};






	this.select1stUnitDropdown = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click();
	};







	this.selectPartDropdownOfSource = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(6).click();
	};





	this.selectPartDropdownOfSource1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(4).click();
	};






	this.select1stPartDropdownOfSource = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(4).click();
	};




	this.selectComplementDropdownOfSource = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(8).click();
	};







	this.selectTypeDropdown = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(14).click();
	};



	this.enterRelationType = function (text) {


		element(by.xpath("//div[@name='type']//input[@ng-model='searchtext']")).sendKeys(text).sendKeys(protractor.Key.ENTER);
		// element.all(by.css('[name="txtdropdownsearch"]')).get(i).sendKeys(text);
		// element.all(by.css('[name="txtdropdownsearch"]')).get(i).sendKeys(protractor.Key.ENTER);
	};





	this.selectTypeDropdown1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(12).click();
	};








	this.select1stTypeDropdown = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(12).click();
	};


	this.selectCodeDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(20).click();
	};

	//enter code dynamically
	this.entercodeDynamically = function (text, j) {
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(text);
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(protractor.Key.ENTER);
	};




	this.enterYear = function (data) {

		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nma')).get(1).clear(); element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nma')).get(1).sendKeys(data);

	};




	this.enterN = function (data) {

		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn')).get(1).clear(); element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn')).get(1).sendKeys(data);

	};




	this.selectCodeDropdownOfDestination1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(18).click();
	};


	//same as selectCodeDropdownOfDestination1
	this.select1stCodeDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(18).click();
	};



	this.enterBody = function (data) {

		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.unidad.nmc')).get(0).sendKeys(data);

	};



	this.selectUnitDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(22).click();
	};





	this.selectPartDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(24).click();
	};





	this.selectUnitDropdownOfDestination1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(20).click();
	};



	this.selectPartDropdownOfDestination1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(22).click();
	};



	this.select1stUnitDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(20).click();
	};


	this.select2ndUnitDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(22).click();
	};



	this.select1stPartDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(22).click();
	};




	//select part drpdown and enter value

	this.select2ndPartDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(24).click();
	};


	//unitdropdown and select value  in newsection

	this.select1stUnitDropdownOfNewsection = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(30).click();
	};

	this.select2ndUnitDropdownOfNewsection = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(32).click();
	};




	this.selectComplementDropdownOfDestination = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(26).click();
	};



	this.RotateButtonClick = function () {
		element(by.css('.switch-direction-img')).click();
	};


	this.selectNewSectionOfDestination = function () {

		element.all(by.css('[ng-click="select()"]')).get(9).click();

	};

	this.enterNewLevelOfDestination = function (data) {

		element.all(by.model('txtField')).get(16).sendKeys(data);

	};



	this.clickOnAddButton = function () {

		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleRelation()"]')).click();

	};




	this.entermarginalidofVéase = function () {
		element(by.model('targetMarginalId')).sendKeys('RCL\\2010\\45');
		element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
	};






	this.selectUnitFromDocumentStructureOfTarget = function () {
		element(by.css('[ng-click="openStructureTarget()"]')).click();
	};


	this.selectTheFirstCheckboxOfTargetDocStructure = function () {

		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(0).click();

	};

	this.selectTheThirdCheckboxOfTargetDocStructure = function () {

		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(2).click();

	};


	this.clickOnOkButtonAfterChecking = function () {

		element(by.css('[ng-click="addMultipleUnits()"]')).click();

	};



	this.selectDateDropdownOfTarget = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(26).click();
	};





	this.selectOptionOfDateInTarget = function () {

		element(by.css('[ng-click="select(item)"]')).click();

	};





	this.selectTypeDropdown1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(12).click();
	};






	this.selectCodeDropdownOfDestination1 = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(18).click();
	};


	//clear and enter text in the note relationship  note ield



	this.enterinNoteRelationship = function (data) {
		element.all(by.model('txtField')).get(7).click();
		element.all(by.model('txtField')).get(7).clear();
		element.all(by.model('txtField')).get(7).sendKeys(data);
	};





	//this should be deleted (it is checking disabled or not). Use the method 
	this.isEnabledCheckForNewSectionInTarget = function () {
		return element(by.id('tabNewTarget')).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("element should be disaled");
				return false;
			});
	};

	this.isNewSectionDisabledInTarget = function () {
		return element(by.id('tabNewTarget')).getAttribute('disabled').then(function (present) {
			if (present === 'true')
				return true;
			else
				return false;
		},
			function (error) {
				console.log("Error in isNewSectionDisabledInTarget");
				return false;
			});
	};


	this.isEnabledCheckForYearBeforeRotationInTarget = function () {

		return element(by.css('.font-size-1-3em.relaDataInput.ng-dirty.ng-valid.ng-valid-required.has-visited')).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};


	// to check year is enable or not after rotation 
	this.isEnabledCheckForYearAfterRotationInTarget = function () {

		return element(by.css('[name="afectado.marginal.ano.fixed"]')).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not disabled");
				return false;
			});
	};





	this.CheckrelationaddByGetid = function () {

		return element(by.css('.ng-scope.ng-binding.standout-marginal')).getText().then(function (text) {
			console.log(text);
			return text;
		},
			function (error) {
				console.log("relationship not saved");
				return false;
			});
	};



	//checking whether eye icon is disabled

	this.isEnabledCheckForEyeIconInTarget = function () {

		return element.all(by.css('.md-icon')).get(4).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("eye icon is not disabled");
				return false;
			});
	};



	//checking whether date field is disabled

	this.isEnabledCheckForDateInTarget = function () {

		return element.all(by.css('[ name="afectado.fechaRedaccion"]')).get(0).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("date field is not disabled");
				return false;
			});
	};


	//checking whether anchor button is disabled  

	this.isEnabledCheckForAnchorButtonInTarget = function () {

		return element(by.css('[ng-click="RelationshipsAddModalCtrl.showTargetUnitText()"]')).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("anchor icon is not disabled");
				return false;
			});
	};

	//checking whether analyst name can be editable

	this.isEditableCheckOfAnalystName = function () {

		return element.all(by.model('model[property]')).get(25).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("analystName field is editable");
				return false;
			});
	};

	this.addRelationType = function () {

		element(by.xpath("//div[@name='type']//input[@ng-model='model[property]']")).click();
		//element.all(by.model('model[property]')).get(7).click();
		//element.all(by.css('[ng-click="$event.stopPropagation()"]')).get(18).click();
	};

	this.addTextsInCombo = function (i, text) {
		element.all(by.model('model[property]')).get(i).sendKeys(text);
		element.all(by.model('model[property]')).get(i).sendKeys(protractor.Key.ENTER);

	};

	this.addYearNo = function (text) {
		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nma')).get(1).sendKeys(text);
	};

	this.addN_No = function (text) {
		element.all(by.model('RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn')).get(1).sendKeys(text);
	};
	this.isEditable2ndCheckOfAnalystName = function () {

		return element.all(by.model('model[property]')).get(26).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("analystName field is editable");
				return false;
			});
	};





	//check whether newlevel field in target is enabled or not

	this.isEnabledCheckOfNewLevel = function () {

		return element.all(by.model('txtField')).get(16).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("newlevel field is disabled");
				return false;
			});
	};




	//save button disabled or not

	this.isEnabledCheckForSaveButton = function () {

		return element(by.css('[ng-click="RelationshipsAddModalCtrl.editRelation(false)"]')).getAttribute('disabled').then(function (present) {
			return present;
		},
			function (error) {
				console.log("save is not disabled");
				return false;
			});
	};

	//click save button
	this.clickSaveButton = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.editRelation(false)"]')).click().then(function (present) {
		},
			function (error) {
				console.log("save button not clicked");
			});
	};



	//level field of source editable or not
	this.isEnabledCheckForLevelInSource = function () {

		return element.all(by.model('txtField')).get(0).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};


	//note field of source editable or not
	this.isEnabledCheckForNoteInSource = function () {

		return element.all(by.model('txtField')).get(5).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};


	//note field of target editable or not
	this.isEnabledCheckForNoteInTarget = function () {

		return element.all(by.model('txtField')).get(15).isEnabled().then(function (present) {
			return present;
		},
			function (error) {
				console.log("element is not enabled");
				return false;
			});
	};






	this.eyeButtonClick = function () {
		element(by.css('.md-icon')).click();
	};




	this.eyeIconDisplayClose = function () {

		element(by.css('.bento-icon-close-x.pointer')).click().then(function () {
		},
			function (error) {
				console.log("Error in eyeIconDisplayClose");
			});
	};



	this.anchorButtonClick1 = function () {
		element.all(by.css('.md-icon')).get(2).click();
	};



	this.anchorButtonClick2 = function () {
		element.all(by.css('.md-icon')).get(6).click();
	};

	this.structureButtonClick = function () {
		element.all(by.css('.md-icon')).get(1).click();
	};

	//click on doc structure button in target
	this.docstructureButtonClick = function () {
		element.all(by.css('.md-icon')).get(5).click();
	};

	//select the checkbox for the required unit

	this.selectTheCheckboxForUnit = function () {
		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(3).click();
	};

	//select the  2nd checkbox after clicking on document structure button
	this.select2ndCheckboxForUnit = function () {
		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(1).click();
	};


	//click on ok once checkbox selected

	this.ClickOnOkAfterSelectingCheckbox = function () {
		element.all(by.css('[ng-click="addMultipleUnits()"]')).click();
	};




	this.plusButtonClick = function () {
		element.all(by.css('.md-icon')).get(3).click();
	};

	this.anchorIconDisplayClose = function () {

		element.all(by.css('.bento-icon-close-x')).get(30).click();

	};



	/*
	 * Clicks expand relationship  section arrow image 
	 */
	this.expandRelationshipSection = function () {
		element(by.id('collapsed-relationship-link')).click().then(function (displayed) {
		},
			function (error) {
				console.log("Error in expandRelationshipSection");
			});
	};


	/*
	 * Clicks on link in expanded relationship  section
	 * Clicks on link for the match at position <position> 
	 */
	this.clickLinkInRelationshipSection = function (link, position) {
		element.all(by.cssContainingText('#relationshipsSummarizationSection>div.row.left-label-no-height a', link)).get(position).click().then(function (displayed) {
		},
			function (error) {
				console.log("Error in clickLinkInRelationshipSection");
			});
	};

	/*
	 * Clicks on sub link link in expanded relationship  section
	 * Eg: Clicks on Source link under consolidation link -
	 * clickSubLinkInRelationshipSection('consolidation','source')
	 * position > cliks on nth matching element.
	 */
	this.clickSubLinkInRelationshipSection = function (link, sublink, position) {
		element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipContext(\'' + sublink + '\',\'' + link + '\')"]')).get(position).click().then(function () {
		},
			function (error) {
				console.log("Error in clickSubLinkInRelationshipSection");
			});
	};

	/*
	 * Checks if the Add single relationship popup is displayed
	 */
	this.isAddRelationshipModalWindowDisplayed = function () {
		return element.all(by.css('[ng-show="!RelationshipsAddModalCtrl.isMinimized"]')).get(0).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAddRelationshipModalWindowDisplayed");
				return false;
			});
	};

	/*
	 * Clicks on Product Tab in relationship section in add popup 
	 */
	this.clickProductTabInRelationshipLayerInAddPopUp = function () {
		element(by.id('tabProd')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickProductTabInRelationshipLayerInAddPopUp");
			});
	};


	/*
	 * Checks if the Product Tab in relationship section is displayed
	 */
	this.isProductTabDisplayedInRelationshipLayerInAddPopUp = function () {
		return element(by.id('tabProd')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isProductTabDisplayedInRelationshipLayerInAddPopUp");
				return false;
			});
	};









	/*
	 * Clicks on 'Add Product' relationship table header 
	 */
	this.clickAddProductInRelationshipTableHeader = function () {
		element(by.id('btn-relationships-addProd')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickAddProductInRelationshipTableHeader");
			});
	};

	/*
	 * Clicks on 'Modify Product' relationship table header 
	 */
	this.clickModifyProductInRelationshipTableHeader = function () {
		element(by.id('btn-relationships-modifyProd')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickModifyProductInRelationshipTableHeader");
			});
	};

	/*
	 * Checks if 'Add Product PopUp' is displayed 
	 */
	this.isAddProductFormPopUpIsDisplayed = function () {
		return element(by.id('contentFormAdDocument')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isAddProductFormPopUpIsDisplayed");
				return false;
			});
	};

	/*
	 * Checks if 'Add/Edit Relationship PopUp' is displayed 
	 */
	this.isAddOrEditRelationshipPopUpIsDisplayed = function () {
		return element(by.css('[name="RelationshipsAddModalCtrl.form"]')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isAddOrEditRelationshipPopUpIsDisplayed");
				return false;
			});
	};


	/*
	 * Checks if 'Add Product PopUp Header' is displayed 
	 */
	this.isAddOrRemovePopUpHeaderDisplayed = function () {
		return element(by.css('.add-remove-rel-prod-header')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isAddOrRemovePopUpHeaderDisplayed");
				return false;
			});
	};


	/*
	 * Checks if selected product displayed under product drop down in 'Add Product PopUp'
	 */
	this.isSelectedValueDisplayedInAddProductPopUp = function (value) {
		return element(by.cssContainingText('#selectedUnits .label.relationshipProductLabel', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isSelectedValueDisplayedInAddProductPopUp");
				return false;
			});
	};

	/*
	 * Checks if any product displayed under existing products in 'Modify Product PopUp'
	 */
	this.isExistingProductsPresentInModifyPopUp = function (value) {
		return element.all(by.css('#find-margin-import-exist .label.relationshipProductLabel', value)).get(0).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isExistingProductsPresentInModifyPopUp");
				return false;
			});
	};


	/*
	 * Clicks X button - displayed under existing products in 'Modify Product PopUp'
	 */
	this.removeAllExistingProductsInModifyPopUp = function (value) {
		element.all(by.css('#find-margin-import-exist .label.relationshipProductLabel')).count().then(function (count) {
			for (var row = 0; row < count; row++) {
				element.all(by.css('#find-margin-import-exist .label.relationshipProductLabel .color-orange.pointer')).get(0).click().then(function () {

				},
					function (error) {
						console.log("Error in click() in removeAllExistingProductsInModifyPopUp");
					});
			}
		},
			function (error) {
				console.log("Error in removeAllExistingProductsInModifyPopUp");
			});
	};

	/*
	 * Checks if given product displayed under discarded products in 'Modify Product PopUp'
	 */
	this.isValueDisplayedInDiscardedProductsInModifyPopUp = function (value) {
		return element(by.cssContainingText('#find-margin-import-remove .label.relationshipProductLabel', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isValueDisplayedInDiscardedProductsInModifyPopUp");
				return false;
			});
	};

	/*
	 * Clicks X button - for product under discarded products in 'Modify Product PopUp'
	 */
	this.removeDiscardedProductInModifyPopUp = function (value) {
		element(by.cssContainingText('#find-margin-import-remove .label.relationshipProductLabel', value)).isPresent().then(function (result) {
			if (result === true) {
				var item = element(by.cssContainingText('#find-margin-import-remove .label.relationshipProductLabel', value));
				item.all(by.css('.color-orange.pointer')).get(0).click().then(function () {

				},
					function (error) {
						console.log("Error in click() in removeDiscardedProductInModifyPopUp");
					});
			}
		},
			function (error) {
				console.log("Error in removeDiscardedProductInModifyPopUp");
			});
	};

	/*
	 * Click on common accept button
	 */
	this.clickCommonAcceptButton = function () {
		element(by.css('[translate="Common.Accept"]')).click().then(function (result) {
		},
			function (error) {
				console.log("Error in clickCommonAcceptButton");
			});
	};


	/*
	 * Click on common cancel button
	 */
	this.clickCommonCancelButton = function () {
		element(by.css('[translate="Common.Cancel"]')).click().then(function (result) {
		},
			function (error) {
				console.log("Error in clickCommonCancelButton");
			});
	};


	/*
	 * Reads the message from info dialogue popup
	 */
	this.getMessageFromInfoDialogueBox = function () {
		return element(by.css('[name="txtInfoDialog"]')).getText().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getMessageFromInfoDialogueBox");
				return "";
			});
	};

	/*
	 * Reads the message from delete relation dialogue popup
	 */
	this.getMessageFromDeleteDialogueBox = function () {
		return element(by.css('.modal-confirm-message.ng-binding')).getText().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getMessageFromDeleteDialogueBox");
				return "";
			});
	};

	/*
	 * Checks if given product displayed in Publication data in expanded(using glass button) relationship
	 */
	this.isValueDisplayedInPublicationData = function (value) {
		return element(by.cssContainingText('[ng-repeat="publication in $item.detail.publicationData.list"]', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isValueDisplayedInPublicationData");
				return false;
			});
	};

	/*
	 * Clicks on structure image in source section 
	 */
	this.clickStructureSourceImage = function () {
		element(by.css('[ng-click="openStructureSource()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickStructureSourceImage");
			});
	};

	/*
	 * Clicks on plus image in source section 
	 */
	this.clickAddUnitPlusImageInSource = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleUnitLevel(\'source\')"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickAddUnitPlusImageInSource");
			});
	};

	/*
	 * Clicks on plus image in target section 
	 */
	this.clickAddUnitPlusImageInTarget = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleUnitLevel(\'target\')"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickAddUnitPlusImageInTarget");
			});
	};

	/*
	 * Clicks on structure image in target section 
	 */
	this.clickStructureTargetImage = function () {
		element(by.css('[ng-click="openStructureTarget()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickStructureTargetImage");
			});
	};

	/*
	 * Clicks on close button of structure popup in add relationship
	 */
	this.closeStructurePopupInRelationship = function () {
		element.all(by.css('.inline-block.float-right>.close')).get(1).click().then(function () {
		},
			function (error) {
				console.log("Error in closeStructurePopupInRelationship");
			});
	};

	/*
	 * Clicks on source date dropdown arrow in add relationship
	 */
	this.clickSourceDateArrowInRelationship = function () {
		element.all(by.css('.panel-left-relas #relaDateUnitDrop a.dropdown-toggle')).get(0).click().then(function () {
		},
			function (error) {
				console.log("Error in clickSourceDateArrowInRelationship");
			});
	};

	/*
	 * select first value from dropdown fetcha in add relationship
	 */
	this.clickFirstValueInDateDropdown = function () {
		element.all(by.css('#relaDateUnitDrop .dropdown-menu .search-nav-item.ng-scope a')).get(0).click().then(function () {
		},
			function (error) {
				console.log("Error in clickFirstValueInDateDropdown");
			});
	};

	/*
	 * Clicks on target date dropdown arrow in add relationship
	 */
	this.clickTargetDateArrowInRelationship = function () {
		element.all(by.css('#rightPanelTabs #relaDateUnitDrop a.dropdown-toggle')).get(0).click().then(function () {
		},
			function (error) {
				console.log("Error in clickTargetDateArrowInRelationship");
			});
	};

	/*
	 * Clicks on Save button of structure popup in add relationship
	 */
	this.clickSaveStructurePopupInRelationship = function () {
		element(by.css('[ng-click="addMultipleUnits()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickSaveStructurePopupInRelationship");
			});
	};

	/*
	 * Clicks on Save button of paragraph id popup in add relationship
	 */
	this.clickSaveParagraphIdPopupInRelationship = function () {
		element(by.css('[ng-bind="\'Common.Ok\'|translate"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickSaveParagraphIdPopupInRelationship");
			});
	};



	/*
	 * Selects range of unit in paragraph id popup, use shift key functionality
	 */
	this.selectRangeOfUnitByPositionUsingShiftKeyInParagraphIdPopup = function (start, end) {
		//Click first check box
		element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).get(start).click().then(function () {
			browser.actions().keyDown(protractor.Key.SHIFT).perform(); //Shift key down
			element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).get(end).click().then(function () {
				browser.actions().keyUp(protractor.Key.SHIFT).perform();//Shift key up
			},
				function (error) {
					console.log("Error in selectRangeOfUnitByPositionUsingShiftKeyInParagraphIdPopup");
					browser.actions().keyUp(protractor.Key.SHIFT).perform();//Shift key up
				});

		},
			function (error) {
				console.log("Error in selectRangeOfUnitByPositionUsingShiftKeyInParagraphIdPopup");
			});
	};









	/*
	 * Returns number of units in paragraph id popup in add relationship
	 */
	this.getNumberOfUnitInParagraphIdPopup = function (position) {
		return element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).get(0).isDisplayed().then(function () {
			return element.all(by.css('.blue-borde-checkbox-mul.cursor-pointer')).count();
		},
			function (error) {
				console.log("Error in getNumberOfUnitInParagraphIdPopup");
				return 0;
			});
	};

	/*
	 * Checks the number of units displayed in paragraph id (Nivel Unidad)
	 */
	this.isNumberOfUnitSelectedEquals = function (value) {
		return element.all(by.css('.relationship-unit-label-text')).count().then(function (count) {
			if (count === value)
				return true;
			else
				return false;
		},
			function (error) {
				console.log("Error in isNumberOfUnitSelectedEquals");
				if (value === 0) {
					return true;
				} else {
					return false;
				}
			});
	};



	/*
	 * Checks if some items displayed in collector container
	 */
	this.isItemPresentInCollectorContainer = function (value) {
		return element.all(by.css('#relationshipsCollectorContainer input')).get(0).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isItemPresentInCollectorContainer");
				return false;
			});
	};

	/*
	 * Checks if warning image displayed in collector container
	 */
	this.isWarningImageDisplayedInCollectorContainer = function (value) {
		return element.all(by.css('#relationshipsCollectorContainer .gcms2-suggest')).get(0).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isWarningImageDisplayedInCollectorContainer");
				return false;
			});
	};

	/*
	 * Checks if warning image displayed for given rom in collector container
	 */
	this.isWarningImageDisplayedInCollectorContainerRow = function (row) {
		return element(by.css('#relationshipsCollectorContainer [data-row="' + row + '"] .gcms2-suggest')).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isWarningImageDisplayedInCollectorContainerRow");
				return false;
			});
	};

	/*
	 * Checks if edit image displayed in collector container
	 */
	this.isEditImageDisplayedInCollectorContainer = function (value) {
		return element.all(by.css('#relationshipsCollectorContainer .gcms2-edit')).get(0).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isEditImageDisplayedInCollectorContainer");
				return false;
			});
	};

	/*
	 * Checks if edit image displayed for given row in collector container
	 */
	this.isEditImageDisplayedInCollectorContainerRow = function (row) {
		return element(by.css('#relationshipsCollectorContainer [data-row="' + row + '"] .gcms2-edit')).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isEditImageDisplayedInCollectorContainerRow");
				return false;
			});
	};

	/*
	 * Clicks edit image displayed for given row in collector container
	 */
	this.clickEditImageInCollectorContainerRow = function (row) {
		element(by.css('#relationshipsCollectorContainer [data-row="' + row + '"] .gcms2-edit')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickEditImageInCollectorContainerRow");
			});
	};

	/*
	 * Returns background color displayed for given row in collector container
	 */
	this.getBGColorOfCollectorContainerRow = function (row) {
		return element.all(by.css('#relationshipsCollectorContainer [data-row="' + row + '"]')).get(0).getCssValue('background-color').then(function (color) {
			return color;
		},
			function (error) {
				console.log("Error in getBGColorOfCollectorContainerRow");
				return "";
			});
	};

	//background color
	this.getBGColorOfCollectorContainerRow12 = function (row) {
		return element.all(by.css('#relationshipsCollectorContainer [data-row="' + row + '"]')).get(0).getCssValue('background-color').then(function (result) {
			console.log("Expected Code:", result);
			if (expColor === result) {
				return true;
			} else {
				return false;
			}
			return false;

		},
			function (error) {
				console.log("Error in getBGColorOfCollectorContainerRow");
				return "";
			});
	};

	/*
	
	 * Checks if delete image displayed in collector container
	 */
	this.isDeleteImageDisplayedInCollectorContainer = function (value) {
		return element.all(by.css('#relationshipsCollectorContainer .gcms2-bin')).get(0).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isDeleteImageDisplayedInCollectorContainer");
				return false;
			});
	};

	/*
	 * Checks if delete image displayed at row in collector container
	 */
	this.isDeleteImageDisplayedInCollectorContainerRow = function (row) {
		return element(by.css('#relationshipsCollectorContainer [data-row="' + row + '"] .gcms2-bin')).isDisplayed().then(function (dispayed) {
			return dispayed;
		},
			function (error) {
				console.log("Error in isDeleteImageDisplayedInCollectorContainerRow");
				return false;
			});
	};

	/*
	 * Clicks delete image displayed for given row in collector container
	 */
	this.clickDeleteImageInCollectorContainerRow = function (row) {
		element(by.css('#relationshipsCollectorContainer [data-row="' + row + '"] .gcms2-bin')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickDeleteImageInCollectorContainerRow");
			});
	};

	/*
	 * Checks if selected the number of units count displayed in paragraph id (Nivel Unidad)
	 */
	this.isCountOfUnitSelectedDisplayed = function () {
		return element.all(by.css('[ng-bind="multipleUnitLevelLength()"]')).get(0).isDisplayed().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isCountOfUnitSelectedDisplayed");
				return false;
			});
	};

	/*
	 * Selects unit in structure popup in add relationship
	 */
	this.selectUnitByPositionInStructurePopupInRelationship = function (position) {
		element.all(by.css('.col-md-3.width-29.unit-tree-node [ng-click="tree.updateList(node)"]')).get(position).click().then(function () {
		},
			function (error) {
				console.log("Error in selectUnitByPositionInStructurePopupInRelationship");
			});
	};

	/*
	 * Selects unit in structure popup in add relationship
	 */
	this.selectUnitByNameInStructurePopupInRelationship = function (value) {
		element(by.cssContainingText('.col-md-3.width-29.unit-tree-node', value)).isDisplayed().then(function (result) {
			var el = element(by.cssContainingText('.col-md-3.width-29.unit-tree-node', value));
			el.all(by.css('[ng-click="tree.updateList(node)"]')).get(0).click().then(function () {
			},
				function (error) {
					console.log("Error in selectUnitByNameInStructurePopupInRelationship");
				});
		},
			function (error) {
				console.log("Error in selectUnitByNameInStructurePopupInRelationship");
			});
	};

	/*
	 * Checks if Document Structure pop up header is displayed in structure pop up
	 */
	this.isHeaderDisplayedInDocStructurePopUp = function (value) {
		//First pop up is add pop up , and second pop up is structure pop up
		return element.all(by.css('.modal-header>.ng-scope')).get(1).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isHeaderDisplayedInDocStructurePopUp");
				return false;
			});
	};

	/*
	 * Checks if structure pop up loaded with invalid structure message
	 */
	this.isInvalidStructureFoundInDocStructurePopUp = function (value) {
		return element(by.css('.tree-invalid-structure')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isInvalidStructureFoundInDocStructurePopUp");
				return false;
			});
	};

	/*
	 * Checks if structure pop up loaded with unit nodes
	 */
	this.isUnitStructureFoundInDocStructurePopUp = function () {
		//first match = doc name. tree nodes displays from 2nd match
		return element.all(by.css('.col-md-3.width-29.unit-tree-node')).get(1).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isUnitStructureFoundInDocStructurePopUp");
				return false;
			});
	};

	/*
	 * Checks if structure pop up loaded with given unit node
	 */
	this.isGivenUnitStructureFoundInDocStructurePopUp = function (value) {
		//first match = doc name. tree nodes displays from 2nd match
		return element(by.cssContainingText('.col-md-3.width-29.unit-tree-node', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isGivenUnitStructureFoundInDocStructurePopUp");
				return false;
			});
	};

	/*
	 * Checks if unit drop down displayed in structure pop up
	 */
	this.isUnitDropDownDisplayedInStructurePopUp = function (value) {
		return element(by.css('[onselect="searchUnitSelection"]')).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isUnitDropDownDisplayedInStructurePopUp");
				return false;
			});
	};



	/*
	 * Clicks eye icon displayed in source next to document marginal details
	 */
	this.clickSourceDocumentEyeIcon = function (value) {
		return element(by.css('.panel-left-relas .md-icon .gcms2-eye')).click().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in clickSourceDocumentEyeIcon");
				return false;
			});
	};





	/*
	 * Clicks eye icon displayed in target next to document marginal details
	 */
	this.clickTargetDocumentEyeIcon = function (value) {
		return element.all(by.css('.right-tab-content .md-icon .gcms2-eye')).get(0).click().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in clickTargetDocumentEyeIcon");
				return false;
			});
	};

	/*
	 * Clicks on anchor image in source section 
	 */
	this.clickShowSourceUnitTextAnchorImage = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.showSourceUnitText()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickShowSourceUnitTextAnchorImage");
			});
	};

	/*
	 * Clicks on anchor image in target section
	 */
	this.clickShowTargetUnitTextAnchorImage = function () {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.showTargetUnitText()"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickShowTargetUnitTextAnchorImage");
			});
	};


	/*
	 * Clicks on close button of  Anchor doc view pop up in add relationship
	 */
	this.closeAnchorDocViewPopupInRelationship = function () {
		element(by.css('.modal-header.header-import .close')).click().then(function () {
		},
			function (error) {
				console.log("Error in closeAnchorDocViewPopupInRelationship");
			});
	};

	/*
	 * Checks if given unit displayed selected units in source 'relationship popup'
	 */
	this.isValueDisplayedInSelectedSourceUnits = function (value) {
		return element(by.cssContainingText('[ng-repeat="item in RelationshipsAddModalCtrl.unitSourceList"] [tooltip-class="tooltip-inner-relationships"]', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isValueDisplayedInSelectedSourceUnits");
				return false;
			});
	};

	/*
	 * Checks if given unit displayed selected units in target 'relationship popup'
	 */
	this.isValueDisplayedInSelectedTargetUnits = function (value) {
		return element(by.cssContainingText('[ng-repeat="item in RelationshipsAddModalCtrl.unitTargetList"] [tooltip-class="tooltip-inner-relationships"]', value)).isPresent().then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in isValueDisplayedInSelectedTargetUnits");
				return false;
			});
	};

	/*
	 * Verifies the display of switch direction button in relationship section
	 */
	this.isSwitchDirectionImageDisplayed = function () {
		return element(by.css('.switch-direction-button')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSwitchDirectionImageDisplayed");
				return false;
			});
	};

	/*
	 * Clicks on switch direction button in relationship section
	 */
	this.clickSwitchDirectionImage = function () {
		element(by.css('.switch-direction-button')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickSwitchDirectionImage");
			});
	};

	/*
	 * Checks if confirmation window displayed for switch direction
	 */
	this.isSwitchDirectionConfirmationDisplayed = function () {
		return element(by.css('[name="btnConfirmationDialogAccept"]')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSwitchDirectionConfirmationDisplayed");
				return false;
			});
	};

	/*
	 * Click cancel in confirmation window displayed for switch direction
	 */
	this.cancelSwitchDirectionConfirmation = function () {
		element(by.css('[name="btnConfirmationDialogCancel"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in cancelSwitchDirectionConfirmation");
			});
	};

	/*
	 * Click Yes in confirmation window displayed for switch direction
	 */
	this.acceptSwitchDirectionConfirmation = function () {
		element(by.css('[name="btnConfirmationDialogAccept"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in acceptSwitchDirectionConfirmation");
			});
	};


	/*
	 * Click lamp image in document text section in right panel
	 */
	this.clickLampImageInDocumentText = function (lampPosition) {
		element.all(by.css('.cite')).get(lampPosition).isDisplayed().then(function () {
			varlampEl = element.all(by.css('.cite')).get(lampPosition).$('.potentialLink');
			browser.sleep(2000);//Sleep required - iFrame - 
			//Normal click wont work since element is hidden. Hence added javascript click	 
			browser.executeScript("arguments[0].click();", varlampEl.getWebElement());

		},
			function (error) {
				console.log("Error in clickLampImageInDocumentText");
			});
	};

	/*
	 * Click Next page button in relationship table
	 */
	this.clickNextPageButtonInRelationshipTable = function (lampPosition) {
		element(by.id('relationships.pagination.next')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickNextPageButtonInRelationshipTable");
			});
	};

	/*
	 * Click Previous page button in relationship table
	 */
	this.clickPreviousPageButtonInRelationshipTable = function (lampPosition) {
		element(by.id('relationships.pagination.previous')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickPreviousPageButtonInRelationshipTable");
			});
	};

	/*
	 * Click Last page button in relationship table
	 */
	this.clickLastPageButtonInRelationshipTable = function (lampPosition) {
		element(by.id('relationships.pagination.last')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickLastPageButtonInRelationshipTable");
			});
	};

	/*
	 * Click First page button in relationship table
	 */
	this.clickFirstPageButtonInRelationshipTable = function (lampPosition) {
		element(by.id('relationships.pagination.first')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickFirstPageButtonInRelationshipTable");
			});
	};

	/*
	 * Clear all filters in relationship table
	 */
	this.clearFiltersInRelationshipTable = function () {
		element(by.css('[ng-show="!showFilter"]')).isDisplayed().then(function (present) {
			if (present === true) {
				element(by.css('[ng-show="!showFilter"]')).click();
			}
		},
			function (error) {
			});

		browser.sleep(3000);//Sleep is required
		element(by.model('sourceMarginalId')).isDisplayed().then(function () {
			element(by.model('sourceMarginalId')).clear();
			element(by.model('bodyUnitLevel')).clear();
			element(by.model('unitSectionSource')).clear();
			element(by.model('sourceDate')).clear();
			element(by.model('typeRelationship')).clear();
			element(by.model('targetMarginalId')).clear();
			element(by.model('targetBodyUnitLevel')).clear();
			element(by.model('unitSectionTarget')).clear();
			element(by.model('targetDate')).clear();
			element(by.model('newUnit')).clear();
			element(by.model('newSection')).clear();
			element(by.model('newDate')).clear();
			element(by.model('spread')).$('[value=""]').click();
			element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
		},
			function (error) {
				console.log("Error in clearFiltersInRelationshipTable");
				element(by.id('sourceMarginalId')).isDisplayed().then(function () {
					element(by.model('sourceMarginalId')).sendKeys(protractor.Key.ENTER);
				},
					function (error) {
					});
			});

	};

	/*
	 * Clicks on pursuant tab in add relationship target
	 */
	this.clickPursuantTab = function () {
		element(by.css('#tabInForceTarget>a')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickPursuantTab");
			});
	};

	/*
	* Clears Target
	*/
	this.clearTargetForm = function () {
		element(by.css('#panel3 a>i.gcms2-clear_form')).click().then(function () {
		},
			function (error) {
				console.log("Error in clearTargetForm");
			});
	};


	this.isRalationshipViewAllPresent = function () {
		return element(by.id('relationshipViewAllLink')).isPresent().then(function (displayed) {
			browser.executeScript('arguments[0].scrollIntoView()', element(by.id('relationshipViewAllLink')));
			return displayed;
		},
			function (error) {
				console.log("Error in isRalationshipViewAllPresent");
				return false;
			});
	};

	this.clickBlankFieldinViewAllTableCell = function (value) {
		element(by.css('[name="R0_C1"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickBlankFieldinViewAllTableCell");
			});
	};

	this.clickonFirstCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonFirstCheckboxViewAll");
			});
	};


	this.clickShowFilters = function (value) {
		element(by.buttonText('Show Filters')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickShowFilters");
			});
	};

	this.clickonSecondCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonSecondCheckboxViewAll");
			});
	};

	this.clickonThirdCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(2).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonThirdCheckboxViewAll");
			});
	};

	this.clickonFourthCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(3).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonFourthCheckboxViewAll");
			});
	};

	this.clickonFifthCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(4).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonFifthCheckboxViewAll");
			});
	};

	this.clickonSixthCheckboxViewAll = function (value) {
		element.all(by.css('[ng-model="$item.selected"]')).get(5).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonSixthCheckboxViewAll");
			});
	};


	this.isDeleteButtonPresent = function () {
		return element(by.id('btn-relationships-remove')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDeleteButtonPresent");
				return false;
			});
	};

	this.isDeletePopupDisplayed = function () {
		return element(by.css('.modal-content')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDeletePopupDisplayed");
				return false;
			});
	};

	this.clickCancelButtonDeletePopup = function (value) {
		element(by.css('[ng-click="cancel()"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCancelButtonDeletePopup");
			});
	};

	this.clickDropdownViewAllTableFirst = function (value) {
		element.all(by.css('[class="dropdown-toggle plain-text glyphicon glyphicon-chevron-down"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDropdownViewAllTableFirst");
			});
	};

	this.isDeleteOptionPresentDropdownViewAll = function () {
		return element.all(by.css('[ng-click="deleteRelationshipSingle($item.idRelacion,relationShipsModel.start)"]')).get(0).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDeleteOptionPresentDropdownViewAll");
				return false;
			});
	};

	this.clickDeleteOptionPresentDropdownViewAll = function (value) {
		element.all(by.css('[ng-click="deleteRelationshipSingle($item.idRelacion,relationShipsModel.start)"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDeleteOptionPresentDropdownViewAll");
			});
	};

	this.isRelationshipCollapseButtonDisplayed = function () {
		return element(by.id('collapsed-relationship-link')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRelationshipCollapseButtonDisplayed");
				return false;
			});
	};

	this.clickRelationshipCollapseButtonDisplayed = function (value) {
		element(by.id('collapsed-relationship-link')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickRelationshipCollapseButtonDisplayed");
			});
	};

	this.isRelationshipNonCollapseButtonDisplayed = function () {
		return element(by.id('non-collapsed-relationship-link')).isDisplayed().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRelationshipNonCollapseButtonDisplayed");
				return false;
			});
	};

	this.isConsolidationLinkPresent = function () {
		return element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'consolidations\')"]')).get(0).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isConsolidationLinkPresent");
				return false;
			});
	};

	this.getTextConsolidationLinkPresent = function () {
		return element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'consolidations\')"]')).get(0).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in isConsolidationLinkPresent");
				return "";
			});
	};

	this.isAnnotationLinkPresent = function () {
		return element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'annotations\')"]')).get(1).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAnnotationLinkPresent");
				return false;
			});
	};

	this.getAnnotationTextRelationship = function () {
		return element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'annotations\')"]')).get(1).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getAnnotationTextRelationship");
				return "";
			});
	};

	this.clickConsolidationLinkRelationship = function () {
		element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'consolidations\')"]')).get(0).click().then(function (displayed) {

		},
			function (error) {
				console.log("Error in clickConsolidationLinkRelationship");
				return false;
			});
	};

	this.closeRelationshipViewAllTable = function () {
		element(by.css('[ng-click="close()"]')).click().then(function (displayed) {

		},
			function (error) {
				console.log("Error in closeRelationshipViewAllTable");
				return false;
			});
	};

	this.clickSourceinConsolidateLinkRelationship = function () {
		element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipContext(\'source\',\'consolidations\')"]')).get(0).click().then(function (displayed) {

		},
			function (error) {
				console.log("Error in clickSourceinConsolidateLinkRelationship");
				return false;
			});
	};

	this.clickTargetinConsolidationLinkRelationship = function () {
		element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipContext(\'target\',\'consolidations\')"]')).get(0).click().then(function (displayed) {

		},
			function (error) {
				console.log("Error in clickTargetinConsolidationLinkRelationship");
				return false;
			});
	};

	this.clickAnnotationLinkRelationship = function () {
		element.all(by.css('[ng-click="relationshipsSumData.viewRelationShipType(\'annotations\')"]')).get(1).click().then(function () {

		},
			function (error) {
				console.log("Error in clickAnnotationLinkRelationship");
				return false;
			});
	};

	this.isEditOptionPresentDropdownViewAll = function () {
		return element.all(by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(1).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isEditOptionPresentDropdownViewAll");
				return false;
			});
	};

	this.clickEditOptionPresentDropdownViewAll = function (value) {
		element.all(by.css('[ng-src="content/image/edit-icon.png"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickEditOptionPresentDropdownViewAll");
			});
	};

	this.isEditRelationshippopupDislayed = function () {
		return element(by.css('.modal-content')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isEditRelationshippopupDislayed");
				return false;
			});
	};

	this.sendKeysintoLevelFieldRelationshipPopup = function (value) {

		element.all(by.css('[ng-model="txtField"]')).get(0).clear();
		element.all(by.css('[ng-model="txtField"]')).get(0).sendKeys(value);
	};

	this.clickSaveButtonEditRelationshipPopUp = function (value) {
		element(by.buttonText('Save')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSaveButtonEditRelationshipPopUp");
			});
	};

	this.clickCloseButtonEditRelationshipPopup = function (value) {
		element.all(by.css('[ng-click="RelationshipsAddModalCtrl.closeConfirmationModal()"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCloseButtonEditRelationshipPopup");
			});
	};

	this.getTextofSecondRowUnitorLevel = function () {
		return element(by.css('[ng-if="$item.levelSourceMultilang.list | multilang"]')).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getTextofSecondRowUnitorLevel");
				return "";
			});
	};

	this.clearLevelTextFieldEditRelationShipPopup = function (value) {

		element.all(by.css('[ng-model="txtField"]')).get(0).clear().then(function () {

		},
			function (error) {
				console.log("Error in clearLevelTextFieldEditRelationShipPopup");
				return false;
			});

	};

	this.clickDropdownViewAllTableSecond = function (value) {
		element.all(by.css('[class="dropdown-toggle plain-text glyphicon glyphicon-chevron-down"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDropdownViewAllTableSecond");
			});
	};

	this.sendKeysRelationShipFieldViewAll = function (value) {

		element(by.css('[ng-model="typeRelationship"]')).clear();
		element(by.css('[ng-model="typeRelationship"]')).sendKeys(value);
		element(by.css('[ng-model="typeRelationship"]')).sendKeys(protractor.Key.ENTER);

	};

	this.isEditOptionPresentDropdownViewAllFirst = function () {
		return element.all(by.css('[ng-click="editRelationship([$item.idRelacion])"]')).get(0).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isEditOptionPresentDropdownViewAllFirst");
				return false;
			});
	};


	//after clicking on search in consolidation window
	//verify whether the  added relationship is displayed or not in the result list

	this.isDisplayedOfRelationshipInResultlistOfConsolidation = function () {
		return element(by.css('.common-checkbox.cursor-pointer')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("document not present");
				return false;
			});
	};



	this.clickEditOptionPresentDropdownViewAllFirst = function (value) {
		element.all(by.css('[ng-src="content/image/edit-icon.png"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickEditOptionPresentDropdownViewAllFirst");
			});
	};

	this.isTypeFieldPresentRelationshipPopup = function () {
		return element(by.css('.dropnav-input.ng-pristine.ng-valid.ng-valid-required.has-visited')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isTypeFieldPresentRelationshipPopup");
				return false;
			});
	};

	this.clickTypeFieldRelationshipPopup = function (value) {
		element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)>a[name="lnkSearchDropdownNav"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickTypeFieldRelationshipPopup");
			});
	};

	this.sendKeystoTypeinRelationshipTab = function (value) {

		element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div[name="dropdown-nav-directive"]>ul:nth-of-type(1)>li:nth-of-type(1)>div>input[ng-model="searchtext"]')).click();
		element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div[name="dropdown-nav-directive"]>ul:nth-of-type(1)>li:nth-of-type(1)>div>input[ng-model="searchtext"]')).clear();
		element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div[name="dropdown-nav-directive"]>ul:nth-of-type(1)>li:nth-of-type(1)>div>input[ng-model="searchtext"]')).sendKeys(value);


	};

	this.clickSearchButtoninTypeFieldRelationshipTab = function (value) {
		element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div[name="dropdown-nav-directive"]>ul:nth-of-type(1)>li:nth-of-type(1)>div>span>button[name="btndropdownsearch"]>i')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchButtoninTypeFieldRelationshipTab");
			});
	};

	this.isErrorDisplayedRelationshipPopup = function () {
		return element(by.css('.toast.toast-error')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isErrorDisplayedRelationshipPopup");
				return false;
			});
	};

	this.clickMoreInfoLinkInErrorInRelationshipPopUp = function () {
		element(by.css('.toast.toast-error a')).click().then(function (error) {
		},
			function (error) {
				console.log("Error in clickMoreInfoLinkInErrorInRelationshipPopUp");
			});
	};

	this.closeConfirmationDisplayedInRelationshipPopup = function () {
		element(by.css('.toast-close-button')).isPresent().then(function (displayed) {
			if (displayed === true) {
				element(by.css('.toast-close-button')).click().then(function (displayed) {
				},
					function (error) {
					});
			}
		},
			function (error) {
				console.log("Error in closeErrorDisplayedInRelationshipPopup");
			});
	};

	this.clickonCodeTextFieldinRelationshipPopup = function (value) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonCodeTextFieldinRelationshipPopup");
			});
	};

	this.sendKeystoCodeinRelationshipPopup = function (value) {

		element.all(by.css('[ng-model="searchtext"]')).get(3).click();
		element.all(by.css('[ng-model="searchtext"]')).get(3).clear();
		element.all(by.css('[ng-model="searchtext"]')).get(3).sendKeys(value);


	};

	this.clickSearchButtoninCodeFieldRelationshipTab = function (value) {
		element.all(by.css('[name="btndropdownsearch"]')).get(5).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchButtoninCodeFieldRelationshipTab");
			});
	};

	this.sendKeysinYearFieldRelationshipPopup = function (value) {

		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nma"]')).get(1).click();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nma"]')).get(1).clear();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nma"]')).get(1).sendKeys(value);


	};

	this.sendKeystoNumberinRelationshipPopup = function (value) {

		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nmn"]')).get(1).click();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nmn"]')).get(1).clear();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nmn"]')).get(1).sendKeys(value);


	};

	this.sendNoteRelationshipTextFieldRelationPopup = function (value) {

		element(by.css('.relaDataInput.ng-valid.ng-animate.ng-pristine-remove.ng-pristine-remove-active.ng-dirty')).click();
		element(by.css('.relaDataInput.ng-valid.ng-animate.ng-pristine-remove.ng-pristine-remove-active.ng-dirty')).clear();
		element(by.css('.relaDataInput.ng-valid.ng-animate.ng-pristine-remove.ng-pristine-remove-active.ng-dirty')).sendKeys(value);

	};

	this.isCopyOptionPresentDropdownViewAllFirst = function () {
		return element.all(by.css('[ng-click="copyRelationship($item.idRelacion)"]')).get(0).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isCopyOptionPresentDropdownViewAllFirst");
				return false;
			});
	};

	this.clickCopyOptionPresentDropdownViewAllFirst = function (value) {
		element.all(by.css('[ng-src="content/image/duplicate.png"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCopyOptionPresentDropdownViewAllFirst");
			});
	};

	this.clickonDropdownPartTargetSection = function (value) {
		element.all(by.xpath('.//*[@id="relaDataPartDrop"]/div/div/div/span/span[1]/a')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonDropdownPartTargetSection");
			});
	};

	this.sendKeysPartFieldTarget = function (value) {

		element.all(by.css('[ng-model="searchtext"]')).get(14).click();
		element.all(by.css('[ng-model="searchtext"]')).get(14).clear();
		element.all(by.css('[ng-model="searchtext"]')).get(14).sendKeys(value);

	};

	this.clickSearchBtnPartTextField = function (value) {
		element.all(by.css('[ng-click="search($event)"]')).get(14).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchBtnPartTextField");
			});
	};

	this.clickAddButtonEditRelationshipPopUp = function (value) {
		element(by.css('[ng-click="RelationshipsAddModalCtrl.addMultipleRelation()"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickAddButtonEditRelationshipPopUp");
			});
	};

	this.sendKeyUnitOrLevelFilterViewAll = function (data) {

		element(by.model('targetBodyUnitLevel')).clear();
		element(by.model('targetBodyUnitLevel')).sendKeys(data);
		element(by.model('targetBodyUnitLevel')).sendKeys(protractor.Key.ENTER);
	};

	this.isDeleteButtonDropdownEnabled = function () {
		return element.all(by.css('[ng-click="deleteRelationshipSingle($item.idRelacion,relationShipsModel.start)"]')).get(0).isEnabled().then(function (enable) {
			return enable;
		},
			function (error) {
				console.log("Error in isDeleteButtonDropdownEnabled");
				return false;
			});
	};

	this.clickMainCheckboxViewAllTable = function (value) {
		element(by.css('.wj-cell.wj-header.multi-select>input')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickMainCheckboxViewAllTable");
			});
	};

	this.isAddRelationshipDisplayed = function () {
		return element(by.id('relationships.summarization.addSingle')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAddRelationshipDisplayed");
				return false;
			});
	};

	this.clickCodeDropdownTarget = function (value) {
		element.all(by.xpath('.//*[@id="relaDataNMPDrop"]/div/div/div/span/span[1]/a')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCodeDropdownTarget");
			});
	};

	this.clickCodeDropdownTargetPursuant = function (value) {
		element.all(by.css('div[name="code-infor"] #relaDataNMPDrop a.dropdown-toggle')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCodeDropdownTargetPursuant");
			});
	};

	this.getBorderColorOfCodeInputField = function () {
		return element.all(by.css('#relaDataNMPDrop>div>input')).get(1).getCssValue('border-color').then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getBorderColorOfCodeInputField");
				return "";
			});
	};

	this.getBorderColorOfTypeInputField = function () {
		return element(by.css('#relaTypeDrop>div>input')).getCssValue('border-color').then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getBorderColorOfTypeInputField");
				return "";
			});
	};

	this.sendKeystoCodeinRelationshipPopupTarget = function (value) {

		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).click();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).clear();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).sendKeys(value);

	};

	this.sendKeystoCodeinTargetPursuant = function (value) {
		element.all(by.css('div[name="code-infor"] #relaDataNMPDrop [ng-model="searchtext"]')).get(0).click();
		element.all(by.css('div[name="code-infor"] #relaDataNMPDrop [ng-model="searchtext"]')).get(0).clear();
		element.all(by.css('div[name="code-infor"] #relaDataNMPDrop [ng-model="searchtext"]')).get(0).sendKeys(value);
	};

	this.sendKeysinYearFieldRelationshipPopupTarget = function (value) {

		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nma"]')).get(1).click();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nma"]')).get(1).clear();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nma"]')).get(1).sendKeys(value);
	};

	this.sendKeysinYearFieldTargetPursuant = function (value) {
		var el = element.all(by.css('div[name="year-infor"]>input')).get(0);
		el.click();
		el.clear();
		el.sendKeys(value);
	};

	this.getBorderColorOfYearInputField = function () {
		return element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nma"]')).get(1).getCssValue('border-color').then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getBorderColorOfYearInputField");
				return "";
			});
	};

	this.sendKeystoNumberinRelationshipPopupTarget = function (value) {

		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn"]')).get(1).click();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn"]')).get(1).clear();
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn"]')).get(1).sendKeys(value);
	};

	this.sendKeystoNumberTargetPursuant = function (value) {
		var el = element.all(by.css('div[name="num-infor"]>input')).get(0);
		el.click();
		el.clear();
		el.sendKeys(value);
	};

	this.sendKeystoUnitInRelationshipPopupTarget = function (value) {
		element.all(by.css('#relaDataUnitDrop [name="afectado.unidad.tipo"]')).get(0).click();
		element.all(by.css('#relaDataUnitDrop [name="afectado.unidad.tipo"]')).get(0).clear();
		element.all(by.css('#relaDataUnitDrop [name="afectado.unidad.tipo"]')).get(0).sendKeys(value);
	};

	this.getBorderColorOfNInputField = function () {
		return element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afectado.marginal.nmn"]')).get(1).getCssValue('border-color').then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getBorderColorOfNInputField");
				return "";
			});
	};

	this.clickSearchBtnPartTextFieldTarget = function (value) {
		element.all(by.css('#relaDataNMPDrop [ng-click="search($event)"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchBtnPartTextFieldTarget");
			});
	};

	this.clickSearchBtnPartTextFieldTargetPursuant = function (value) {
		element.all(by.css('div[name="code-infor"] #relaDataNMPDrop [ng-click="search($event)"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchBtnPartTextFieldTargetPursuant");
			});
	};

	this.clickDropdownUnitTarget = function (value) {
		element.all(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataUnitDrop .dropdown-toggle.nav-a')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDropdownUnitTarget");
			});
	};

	this.sendUnitinTargetTabRelationship = function (value) {

		element.all(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataUnitDrop .dropdown-menu .padding.dropdown-nav-search [ng-model="searchtext"]')).get(0).click();
		element.all(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataUnitDrop .dropdown-menu .padding.dropdown-nav-search [ng-model="searchtext"]')).get(0).clear();
		element.all(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataUnitDrop .dropdown-menu .padding.dropdown-nav-search [ng-model="searchtext"]')).get(0).sendKeys(value);


	};

	this.clickSearchButtonUnitTargetField = function (value) {
		element.all(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataUnitDrop .dropdown-menu .padding.dropdown-nav-search .input-group-btn.dropnav-search')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchButtonUnitTargetField");
			});
	};

	this.sendKeystoPartTargetField = function (value) {

		element(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataPartDrop .dropdown-menu [ng-model="searchtext"]')).click();
		element(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataPartDrop .dropdown-menu [ng-model="searchtext"]')).clear();
		element(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataPartDrop .dropdown-menu [ng-model="searchtext"]')).sendKeys(value);


	};

	this.clickPartDrpdownTargetRelationship = function (value) {
		element(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataPartDrop .padding-none-important.btn.btn-icon.pull-right')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickPartDrpdownTargetRelationship");
			});
	};

	this.clickSearchButtonPartTargetField = function (value) {
		element(by.css('[ng-if="RelationshipsAddModalCtrl.unitTargetList == 0"] #relaDataPartDrop .dropdown-menu .input-group-btn.dropnav-search')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchButtonPartTargetField");
			});
	};

	this.clickonNewSectionTarget = function (value) {
		element(by.css('#tabNewTarget')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonNewSectionTarget");
			});
	};

	this.clickDropdownBtnNewSectionUnit = function (value) {
		element.all(by.css('.dropdown-toggle.nav-a')).get(16).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDropdownBtnNewSectionUnit");
			});
	};

	this.sendUnitinNewSectionTabTargetField = function (value) {

		element(by.css('[class="tab-pane ng-scope active"] [name="precu-new"] .dropdown-menu [ng-model="searchtext"]')).click();
		element(by.css('[class="tab-pane ng-scope active"] [name="precu-new"] .dropdown-menu [ng-model="searchtext"]')).clear();
		element(by.css('[class="tab-pane ng-scope active"] [name="precu-new"] .dropdown-menu [ng-model="searchtext"]')).sendKeys(value);


	};

	this.clickSearchBtnUnitNewSection = function (value) {
		element(by.css('[class="tab-pane ng-scope active"] [name="precu-new"] .dropdown-menu [ng-click="search($event)"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchBtnUnitNewSection");
			});
	};

	//push Mohan

	this.enterDateofApplicationinRelationshipTab = function (value) {

		element.all(by.css('.select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-date.ng-valid.ng-valid-required')).get(0).click();
		element.all(by.css('.select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-date.ng-valid.ng-valid-required')).get(0).clear();
		element.all(by.css('.select-element-small.input-border.ng-isolate-scope.ng-pristine.ng-valid-date.ng-valid.ng-valid-required')).get(0).sendKeys(value);


	};

	this.clickDepthFieldDropdownLinkinRelationshipTab = function (value) {
		element(by.css('div[name="depth"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)>a[name="lnkSearchDropdownNav"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDepthFieldDropdownLinkinRelationshipTab");
			});
	};

	this.clickOptioninDepthFieldinDropdownLinkinRelationshipTab = function (value) {
		element.all(by.css('[class="search-nav-item ng-scope"] [ng-click="select(item)"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickOptioninDepthFieldinDropdownLinkinRelationshipTab");
			});
	};

	this.isSourceSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(0).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSourceSectionPresentinEditRelationship");
				return false;
			});
	};

	this.getTextSourceSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(0).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getTextSourceSectionPresentinEditRelationship");
				return false;
			});
	};

	this.isRelationshipSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(1).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRelationshipSectionPresentinEditRelationship");
				return false;
			});
	};

	this.getTextRelationshipSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(1).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getTextRelationshipSectionPresentinEditRelationship");
				return false;
			});
	};


	this.isTargetSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(2).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isRelationshipSectionPresentinEditRelationship");
				return false;
			});
	};

	this.getTextTargetSectionPresentinEditRelationship = function () {
		return element.all(by.css('[class="titlePanelDark"] span')).get(2).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getTextRelationshipSectionPresentinEditRelationship");
				return false;
			});
	};

	this.isExplicitCheckPresentRelationshipPopup = function () {
		return element(by.css('[configurable-field-state="datosRelacion.explicita"] [class="ng-binding"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isExplicitCheckPresentRelationshipPopup");
				return false;
			});

	};

	this.isAnalystFieldPresentinCopyDropdown = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip=""]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAnalystFieldPresentinCopyDropdown");
				return false;
			});
	};

	this.clickGlassIconInViewAllRelationship = function (value) {
		element.all(by.css('.col-md-4>img')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickGlassIconInViewAllRelationship");
			});
	};

	this.isNotesSectionEmptyinGlassIcon = function () {
		return element(by.css('[class="row border-bootom-grey row-equal-height ng-scope"] [class="col-md-2 padding-left-25 colorBackgroundGrey29 borderRightHeight29"] [class="left uppercase ng-binding"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isNotesSectionEmptyinGlassIcon");
				return false;
			});
	};

	this.isAnalystFieldPresentinCopyDropdownUserAnalyst = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip="Mohankumar BN"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAnalystFieldPresentinCopyDropdown");
				return false;
			});
	};

	this.isAnalystFieldPresentinCopyDropdownUserAnalystEdit = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip="Susana Campos"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAnalystFieldPresentinCopyDropdown");
				return false;
			});
	};

	this.isAnalystFieldDisabledinCopyDropdownUserAnalystEdit = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip="Susana Campos"]')).getAttribute('disabled').then(function (displayed) {
			if (displayed === 'true') {
				return true;
			}
			else {
				return false
			}
		},
			function (error) {
				console.log("Error in isAnalystFieldDisabledinCopyDropdownUserAnalystEdit");
				return false;
			});
	};

	this.isAnalystFieldDisabledinCopyDropdownUserAnalystEditLoginUser = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip="Mohankumar BN"]')).getAttribute('disabled').then(function (displayed) {
			if (displayed === 'true') {
				return true;
			}
			else {
				return false
			}
		},
			function (error) {
				console.log("Error in isAnalystFieldDisabledinCopyDropdownUserAnalystEditLoginUser");
				return false;
			});
	};

	this.getAnalystDateinGlassIconEdit = function () {
		return element(by.css('[class="row row-equal-height ng-scope"] [class="col-md-3 ng-scope"] span')).getText().then(function (text) {
			return text;
		},
			function (error) {
				console.log("Error in getAnalystDateinGlassIconEdit");
				return false;
			});
	};

	this.clickCancelButtoninEditRelationshipPopup = function (value) {
		element(by.css('.btn.white-button.btn-default.btn-header.btn-padding.ng-scope.ng-binding')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickCancelButtoninEditRelationshipPopup");
			});
	};

	this.getTextofAnalystinEditRelationshipPopup = function () {
		return element(by.css('.porcent-50.margin-left-10 [class="ng-isolate-scope"] [tooltip="Mohankumar BN"]')).getText().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isAnalystFieldPresentinCopyDropdown");
				return false;
			});
	};



	this.sendSpanishTexttoTargetNoteField = function (value) {

		element(by.css('[id="note-dest"] [class="multilang-txt-field-input"] textarea')).click();
		element(by.css('[id="note-dest"] [class="multilang-txt-field-input"] textarea')).clear();
		element(by.css('[id="note-dest"] [class="multilang-txt-field-input"] textarea')).sendKeys(value);


	};

	this.clickMultiLanguageDropdownButton = function (value) {
		element.all(by.css('.dropdown-icon.user-menu')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickMultiLanguageDropdownButton");
			});
	};

	this.isPortugueseLanguageOptionAvailable = function () {
		return element(by.css('[ng-click="menu.changeLanguage(\'pt\')"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isPortugueseLanguageOptionAvailable");
				return false;
			});
	};

	this.clickPortugueseLanguageOption = function (value) {
		element(by.css('[ng-click="menu.changeLanguage(\'pt\')"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickPortugueseLanguageOption");
			});
	};

	this.getTextofAnalystinGlassIcon = function () {
		return element.all(by.css('[class="row row-equal-height ng-scope"] [class="col-md-10"] span')).get(0).getText().then(function (displayed) {
			return displayed.trim();
		},
			function (error) {
				console.log("Error in getTextofAnalystinGlassIcon");
				return false;
			});
	};

	this.getDateofAnalystinGlassIcon = function () {
		return element.all(by.css('[class="row row-equal-height ng-scope"] [class="col-md-10"] span')).get(1).getText().then(function (displayed) {
			return displayed.trim();
		},
			function (error) {
				console.log("Error in getDateofAnalystinGlassIcon");
				return '';
			});
	};

	this.getTextofTargetNoteinGlassIcon = function () {
		return element(by.css('[class="col-md-10 relationshipDetail"] [class="col-md-4 ng-scope"] span')).getText().then(function (displayed) {
			return displayed.trim();
		},
			function (error) {
				console.log("Error in getTextofTargetNoteinGlassIcon");
				return false;
			});
	};


	this.clickDocumentTextLink = function (value) {
		element.all(by.css('[ng-click="select()"]')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDocumentTextLink");
			});
	};

	this.isDocumentTextDropdownPresent = function () {
		return element(by.xpath('html/body/div[1]/div[1]/a/span')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDocumentTextDropdownPresent");
				return false;
			});
	};

	this.clickDocumentTextDropdown = function (value) {
		element(by.xpath('html/body/div[1]/div[1]/a/span')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDocumentTextDropdown");
			});
	};

	this.clickAddRelationshipinDocumentTextDropdown = function (value) {
		element(by.xpath('html/body/ul/li[3]/span')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickAddRelationshipinDocumentTextDropdown");
			});
	};

	this.isTypeFieldPresentRelationshipPopupDocumentType = function () {
		return element(by.css('div[name="type"]>dynamic-dropdown-ctx>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(1)>span:nth-of-type(1)>a[name="lnkSearchDropdownNav"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isTypeFieldPresentRelationshipPopupDocumentType");
				return false;
			});
	};

	this.isPencilIconDisplayedInLanguageDropdown = function () {
		return element(by.css('.small-gray-icon.btn-pencil.cursor-pointer')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isPencilIconDisplayedInLanguageDropdown");
				return false;
			});
	};

	this.clickPencilIconDisplayedInLanguageDropdown = function (value) {
		element(by.css('.small-gray-icon.btn-pencil.cursor-pointer')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickPencilIconDisplayedInLanguageDropdown");
			});
	};

	this.isMultiLanguagePopupDisplayedAddReltionshipButton = function () {
		return element(by.css('[class="size-all ng-scope"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isMultiLanguagePopupDisplayedAddReltionshipButton");
				return false;
			});
	};




	this.clickDeleteButtoninMultiLanguagePopup = function (value) {
		element.all(by.css('.bento-icon-remove')).get(1).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickDeleteButtoninMultiLanguagePopup");
			});
	};

	this.clickMultiLanguageIconDisplayedAddRelationship = function (value) {
		element.all(by.css('[ng-click="multilingual()"]')).get(0).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickMultiLanguageIconDisplayedAddRelationship");
			});
	};

	this.isMultiLanguagePopupDisplayedWorldIcon = function () {
		return element(by.css('.import-border.hight-400.ng-scope')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isMultiLanguagePopupDisplayedWorldIcon");
				return false;
			});
	};

	this.getTextofFirstLanguageMultiLanguagePopup = function () {
		return element.all(by.css('[id="containerLanguague"] label')).get(0).getText().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in getTextofFirstLanguageMultiLanguagePopup");
				return false;
			});
	};

	this.getTextofSecondLanguageMultiLanguagePopup = function () {
		return element.all(by.css('[id="containerLanguague"] label')).get(1).getText().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in getTextofSecondLanguageMultiLanguagePopup");
				return false;
			});
	};

	this.clickonCloseButtonMultiLanguageWorldiconpopup = function (value) {
		element(by.css('.modal-content [ng-click="close()"] .bento-icon-close-x')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickonCloseButtonMultiLanguageWorldiconpopup");
			});
	};

	this.isWorldIconPresentforAnalystField = function () {
		return element(by.css('.displayflex.ng-scope [ng-click="multilingualDropdown()"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isWorlsIconPresentforAnalystField");
				return false;
			});
	};

	this.clickWorldIconPresentforAnalystField = function (value) {
		element(by.css('.displayflex.ng-scope [ng-click="multilingualDropdown()"]')).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickWorldIconPresentforAnalystField");
			});
	};

	this.isAnalystNamePresentinNewlyAddedLanguage = function () {
		return element.all(by.css('[class="ng-isolate-scope"] [tooltip="Mohankumar BN"]')).get(2).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isWorlsIconPresentforAnalystField");
				return false;
			});
	};

	this.getBorderColorOfNewLevelFieldinNewSectionTab = function () {
		return element.all(by.css('.relaDataInput.ng-pristine.ng-valid.ng-invalid-required')).get(0).getCssValue('border-color').then(function (result) {
			return result;
		},
			function (error) {
				console.log("Error in getBorderColorOfNewLevelFieldinNewSectionTab");
				return "";
			});
	};

	this.clearmarginalidandSendKeys = function (value) {
		element(by.model('targetMarginalId')).clear();
		element(by.model('targetMarginalId')).sendKeys(value);
		element(by.model('targetMarginalId')).sendKeys(protractor.Key.ENTER);
	};


	this.sendKeystoCodeinRelationshipPopupTargetRCL = function (value) {

		element.all(by.css('[ng-model="searchtext"]')).get(11).click();
		element.all(by.css('[ng-model="searchtext"]')).get(11).clear();
		element.all(by.css('[ng-model="searchtext"]')).get(11).sendKeys(value);

	};


	this.selectComplementDropdownOfTarget = function (value) {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(27).click();
		//element.all(by.css('[name="lnkSearchDropdownNav"]')).get(27).clear();
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(27).sendKeys(value);
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(27).sendKeys(protractor.Key.ENTER);

	};


	this.clickSearchBtnPartTextFieldTargetRCL = function (value) {
		element.all(by.css('[ng-click="search($event)"]')).get(11).click().then(function (result) {

		},
			function (error) {
				console.log("Error in click() in clickSearchBtnPartTextFieldTarget");
			});
	};

	this.sendKeystoBodyFieldSourceSectionCopy = function (value) {

		element(by.id('sourceBodyInput')).click();
		element(by.id('sourceBodyInput')).clear();
		element(by.id('sourceBodyInput')).sendKeys(value);

	};

	this.clickDropdownUnitSource = function () {
		element.all(by.css('.dropdown-toggle.nav-a')).get(2).click();
	};



	this.sendKeystoUnitFieldSourceSectionCopy = function (value) {

		element(by.xpath('.//*[@id="relaDataUnitDrop"]/div/div/div/div/ul/li[1]/div/input')).click();
		element(by.xpath('.//*[@id="relaDataUnitDrop"]/div/div/div/div/ul/li[1]/div/input')).clear();
		element(by.xpath('.//*[@id="relaDataUnitDrop"]/div/div/div/div/ul/li[1]/div/input')).sendKeys(value);

	};

	this.clickSearchButtonUnitSourceField = function () {
		element(by.xpath('.//*[@id="relaDataUnitDrop"]/div/div/div/div/ul/li[1]/div/span/button')).click();
	};

	this.clickDropdownPartSource = function () {
		element.all(by.css('.dropdown-toggle.nav-a')).get(3).click();
	};

	this.sendKeystoPartFieldSourceSectionCopy = function (value) {

		element(by.xpath('.//*[@id="relaDataPartDrop"]/div/div/div/div/ul/li[1]/div/input')).click();
		element(by.xpath('.//*[@id="relaDataPartDrop"]/div/div/div/div/ul/li[1]/div/input')).clear();
		element(by.xpath('.//*[@id="relaDataPartDrop"]/div/div/div/div/ul/li[1]/div/input')).sendKeys(value);

	};

	this.clickSearchButtonPartSourceField = function () {
		element(by.xpath('.//*[@id="relaDataPartDrop"]/div/div/div/div/ul/li[1]/div/span/button')).click();
	};

	this.viewAllLinkClick = function () {
		return element(by.id('relationshipViewAllLink')).click();
	};

	this.EnterValueInRelationshipTypeField = function (value) {

		return element(by.css('[ng-model="typeRelationship"]')).clear();
		return element(by.css('[ng-model="typeRelationship"]')).sendKeys(value);
		return element(by.css('[ng-model="typeRelationship"]')).sendKeys(protractor.Key.ENTER);
	};

	this.getCountOfRows = function () {
		return element.all(by.css('[wj-part="cells"]>div')).count().then(function (c) {
			return c;
		});
	};

	this.clickCloseButton = function () {

		return element(by.css('[ng-click="close()"]')).click();
	};

	this.getAddButtonCaption = function () {
		return element(by.id('relationships.summarization.addSingle')).getText();
	};

	this.isDocumentStructutePopupPresent = function () {
		return element.all(by.css('.modal-content')).get(1).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isDocumentStructutePopupPresents");
				return false;
			});
	};

	this.clickFirstCheckboxDocumentStructure = function () {

		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(0).click();
	};

	this.clickOKButtonDocumentStructurepopup = function () {

		element(by.css('[ng-click="addMultipleUnits()"]')).click();
	};

	this.isSelectedTagAppearsInUnitField = function () {
		return element(by.css('[tooltip="PE"]')).isPresent().then(function (displayed) {
			return displayed;
		},
			function (error) {
				console.log("Error in isSelectedTagAppearsInUnitField");
				return false;
			});
	};





	this.selectTypeDropdownAfterAdingTags = function () {
		element.all(by.css('.padding-none-important.btn.btn-icon.pull-right')).get(2).click();
	};

	this.enterRelationShiptypeAfterTags = function (value) {
		return element.all(by.css('[ng-model="searchtext"]')).get(4).sendKeys(value);
		//return element.all(by.css('[ng-model="searchtext"]')).get(4).sendKeys(protractor.Key.ENTER);
	};

	this.ClicksearchBtnRelationShipTypeAfterTag = function () {
		return element.all(by.css('[ng-click="search($event)"]')).get(4).click();

	};

	this.selectCodeDropdownOfDestinationAfterTag = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(10).click();
	};

	this.sendKeystoCodeinRelationshipPopupTargetAfterTag = function (value) {

		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).click();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).clear();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).sendKeys(value);

	};

	this.clickDocumentStructureDropdown = function () {
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="dropnav-input ng-pristine ng-valid ng-valid-required"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickDocumentStructureDropdown");
			});
	};

	this.sendUnitDocumentStructureDropdownTarget = function (value) {

		//return element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).click();
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).clear();
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).sendKeys(value);
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).sendKeys(protractor.Key.ENTER);
	};

	this.clickCheckboxDocumentStructureAX = function () {

		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(5).click();
	};

	this.sendUnitinShowFilters = function (value) {

		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).clear();
		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).sendKeys(value);
		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).sendKeys(protractor.Key.ENTER);
	};

	this.clickInterchangeButtonRelationTab = function () {

		element(by.css('[ng-click="RelationshipsAddModalCtrl.switchRelationship()"]')).click();
	};

	this.selectCodeDropdownSourceInterchange = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click();
	};

	this.entercodeDynamicallySourceInterchange = function (text, j) {
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(text);
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(protractor.Key.ENTER);
	};

	//enter the text in year field
	this.entertextinyearfieldSourceInterchange = function (value) {
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nma"]')).get(1).sendKeys(value);
	};

	//enter the text in Nº field
	this.entertextinNºfieldSourceInterchange = function (value) {
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nmn"]')).get(1).sendKeys(value);
	};



	this.selectTypeDropdownAfterAdingTags = function () {
		element.all(by.css('.padding-none-important.btn.btn-icon.pull-right')).get(2).click();
	};

	this.enterRelationShiptypeAfterTags = function (value) {
		return element.all(by.css('[ng-model="searchtext"]')).get(4).sendKeys(value);
		//return element.all(by.css('[ng-model="searchtext"]')).get(4).sendKeys(protractor.Key.ENTER);
	};

	this.ClicksearchBtnRelationShipTypeAfterTag = function () {
		return element.all(by.css('[ng-click="search($event)"]')).get(4).click();

	};

	this.selectCodeDropdownOfDestinationAfterTag = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(10).click();
	};

	this.sendKeystoCodeinRelationshipPopupTargetAfterTag = function (value) {

		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).click();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).clear();
		element.all(by.css('#relaDataNMPDrop [ng-model="searchtext"]')).get(1).sendKeys(value);

	};

	this.clickDocumentStructureDropdown = function () {
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="dropnav-input ng-pristine ng-valid ng-valid-required"]')).click().then(function () {
		},
			function (error) {
				console.log("Error in clickDocumentStructureDropdown");
			});
	};

	this.sendUnitDocumentStructureDropdownTarget = function (value) {

		//return element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).click();
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).clear();
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).sendKeys(value);
		element(by.css('[class="tree-panel-search ng-scope"] [class="ng-isolate-scope"] [class="position-relative"] [name="dropdown-nav-directive"] [class="padding dropdown-nav-search"] [name="txtdropdownsearch"]')).sendKeys(protractor.Key.ENTER);
	};

	this.clickCheckboxDocumentStructureAX = function () {

		element.all(by.css('[ng-click="tree.updateList(node)"]')).get(5).click();
	};

	this.sendUnitinShowFilters = function (value) {

		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).clear();
		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).sendKeys(value);
		element(by.css('[id="relationships-filters-8"] [ng-model="targetBodyUnitLevel"]')).sendKeys(protractor.Key.ENTER);
	};

	this.clickInterchangeButtonRelationTab = function () {

		element(by.css('[ng-click="RelationshipsAddModalCtrl.switchRelationship()"]')).click();
	};

	this.selectCodeDropdownSourceInterchange = function () {
		element.all(by.css('[name="lnkSearchDropdownNav"]')).get(2).click();
	};

	this.entercodeDynamicallySourceInterchange = function (text, j) {
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(text);
		element.all(by.css('[name="txtdropdownsearch"]')).get(j).sendKeys(protractor.Key.ENTER);
	};

	//enter the text in year field
	this.entertextinyearfieldSourceInterchange = function (value) {
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nma"]')).get(1).sendKeys(value);
	};

	//enter the text in Nº field
	this.entertextinNºfieldSourceInterchange = function (value) {
		element.all(by.css('[ng-model="RelationshipsAddModalCtrl.relationship.afecta.marginal.nmn"]')).get(1).sendKeys(value);
	};


};



module.exports = new relationshippage();