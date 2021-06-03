var relationshipsearchpage = function () {

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

    this.get = function () {
        return browser.get('static/gcms-ui/index.html#/consolidation/search');
    };

    //This function is used to check whether the relationship search page is displayed or not

    this.isRelationshipSearchPagePresent = function () {
        var el1 = element(by.xpath("//span[@class='section-title ng-binding'][contains(text(),'Relationship Search')]"));
        return el1.isPresent().then(function (present) {
            return present;
        },
            function (error) {
                console.log("Error in isRelationshipSearchPagePresent");
                return false;
            });
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
        var ele =  element.all(by.model('model[property]')).get(5);
        return ele.isPresent().then(function(present){
			return ele.getAttribute("tooltip");
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
		element(by.id('typeahead-01I-4923')).isPresent().then(function(present){
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
		element(by.id('typeahead-01I-4923')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isAbbreveiationSuggestionPresentSecond");
			return false;
		});

    };
    this.enterAbbreviationfield= function(){
		element(by.xpath('.//*[@id="panel-section-container"]/div[2]/div[3]/div[6]/div[2]/typeahead-dropdown/div/input[1]')).sendKeys(protractor.Key.ENTER);
	};

	this.sendKeyAbbreveiationThird = function(abbreviation_third) {

		element.all(by.model('searchtext')).get(5).clear();
		element.all(by.model('searchtext')).get(5).sendKeys(abbreviation_third);
		element.all(by.model('searchtext')).get(5).sendKeys(protractor.Key.ENTER);
    };
    this.isAmendingSectionPresent= function(){
		element(by.css('.amending-form.search-form')).isPresent().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in isAmendingSectionPresent");
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

    this.clickClearAllButton = function(){
		element(by.css('[ng-click="searchConsolidationCtrl.resetModel()"]')).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickClearAllButton");
			return false;
		});

    };
    
    this.clickEstatalDropdownOption = function(){
		return element.all(by.css('.ng-scope.ng-binding')).get(4).click().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in clickEstatalDropdownOption");
			return false;
		});

	};

	this.getTextofJurisEsta = function(){
        var ele = element.all(by.model('model[property]')).get(0)
        return ele.isPresent().then(function(present){
			return ele.getAttribute("tooltip");
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
        var ele = element.all(by.model('model[property]')).get(4);
        return ele.isPresent().then(function(present){
			return ele.getAttribute("tooltip");
		},
		function(error){
			console.log("Error in getTextofMarginalField");
			return false;
		});

    };
    
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
        var ele = element.all(by.css('[ng-show="!multiple"]')).get(2);
        return ele.isPresent().then(function(present){
			return ele.getAttribute('tooltip');
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
		return element(by.xpath("(//*[@class='typeahead-label-text ng-binding'])[3]")).getText().then(function(present){
			return present;
		},
		function(error){
			console.log("Error in getTextofAddedPublication");
			return false;
		});

    };
    
    this.sendPublicationKeywordSecond = function(publication_second) {
		element.all(by.model('searchvalue')).get(1).click();
		element.all(by.model('searchvalue')).get(1).clear();
		element.all(by.model('searchvalue')).get(1).sendKeys(publication_second);
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

    //this function is used to click on the dropdown next to the respective field
    //sectionname  has this data:"amending","amended","relationship"
    //fieldname has this data:"Jurisdiction","Publication","Product Workbench","Marginal"
    //"Abbreviation","Ranking Vid"

    this.clickOnDropdown = function (sectionname, fieldname) {

        var el = element(by.xpath("(//div[contains(@class,'" + sectionname + "')]//span[text()='" + fieldname + "']//..//following-sibling::div//a)[1]"));

        browser.actions().click(el).perform();
    };


    //this function is used to search the value entered in the textbox and select the value from the result list
    //sectionname  has this data:"amending","amended","relationship"
    //fieldname has this data:"Jurisdiction","Publication","Product Workbench","Marginal"
    //"Abbreviation","Ranking Vid"

    this.enterDataAndSelectValue = function (sectionname, fieldname, value) {

        var ele = element(by.xpath("//div[contains(@class,'" + sectionname + "')]//span[text()='" + fieldname + "']//..//following-sibling::div//input[@name='txtdropdownsearch']"));
        ele.sendKeys(value);
        ele.sendKeys(protractor.Key.ENTER);
    };

    //this function is used to select one option from Ranking Vid dropdown

    this.selectOptionInRankingVid = function (option_name) {

        var el = element(by.xpath("//*[@id='rankingviddropdown']//div[@class='dropdown-menu']//a[contains(text(),'" + option_name + "')]"));
        return el.isPresent().then(function (result) {
            if (result === true) {
                browser.actions().click(el).perform();
                return result;
                console.log("element is present");
            }
            else {
                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in selectOptionInRankingVid:", error);
                return false;

            });

    };

    //this function is used to click the radio button which is present next to secondary and Base
    //option can have the value "Secondary", "Base"
    this.clickOnRadioButton = function (option) {

        var ele = element(by.xpath("//span[text()='" + option + "']//..//input[@type='radio']"));
        return ele.isPresent().then(function (result) {
            if (result === true) {
                browser.actions().click(ele).perform();
                return result;
                console.log("element is present");
            }
            else {
                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in clickOnRadioButton:", error);
                return false;

            });

    };

    //this function is used to select the language from dropdown

    this.selectLanguageFromDropdown = function (language_name) {

        element(by.xpath('//*[@id="languagedropdown"]//span//a')).click();
        element(by.xpath("//a[text()='" + language_name + "']")).click();

    };

    //this function is used to get the current date
    this.getcurrentDate = function () {

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
        console.log('date is:', today);
        return today;
    };


    //this function is used to enter the date in the textboxes next to "Date of publication" or "Date of Load" fields
    //sectionname  has this data:"amending","amended","relationship"
    //field name has this data:"Date of publication","Date of Load"
    this.enterDate = function (option, sectionname, fieldname, date) {

        if (option.includes('first')) {

            var el = element(by.xpath("(//div[contains(@class,'" + sectionname + "')]//span[text()='" + fieldname + "']//..//following-sibling::div//input[@ng-model='date'])[1]"));
            return el.isDisplayed().then(function (displayed) {
                if (displayed === true) {
                    el.sendKeys(date);
                    return displayed;
                }
                else {
                    return false;
                    console.log("inside else block");
                }
            }, function (error) {
                console.log("error in enterDate: first");
                return false;
            });

        }

        else {
            var el = element(by.xpath("(//div[contains(@class,'" + sectionname + "')]//span[text()='" + fieldname + "']//..//following-sibling::div//input[@ng-model='date'])[2]"));
            return el.isDisplayed().then(function (displayed) {
                if (displayed === true) {
                    el.sendKeys(date);
                    return displayed;
                }
                else {
                    return false;
                }
            }, function (error) {
                console.log("error in enterDate: second");
                return false;
            });
        }

    };

    //this function is used to enter year and number of the marginal in "from" section and "to" section
    //if your "option=from" then take the value of year="marginalFromYear" and value of number="marginalFromNumber"
    //if your "option=to" then take year="marginalToYear" and number="marginalToNumber"

    this.fillTheYearAndNumFields = function (option, year, number, value1, value2) {

        if (option.includes('from')) {

            element(by.xpath("//div[contains(@class,'amended')]//span[text()='Marginal']//..//following-sibling::div//input[contains(@ng-model,'" + year + "')]")).sendKeys(value1);
            element(by.xpath("//div[contains(@class,'amended')]//span[text()='Marginal']//..//following-sibling::div//input[contains(@ng-model,'" + number + "')]")).sendKeys(value2);

        }

        else if (option.includes('to')) {

            element(by.xpath("//div[contains(@class,'amended')]//span[text()='Marginal']//..//following-sibling::div//input[contains(@ng-model,'" + year + "')]")).sendKeys(value1);
            element(by.xpath("//div[contains(@class,'amended')]//span[text()='Marginal']//..//following-sibling::div//input[contains(@ng-model,'" + number + "')]")).sendKeys(value2);

        }
        else {

            console.log("error in fillTheYearAndNumFields");
        }


    };

    //this function is used to click on the eye icon next "Marginal From" and "Marginal To"
    //if you want to click on the eye icon next to "Marginal from" then option="marginalFrom"
    //if you want to click on the eye icon next to "Marginal to" then option="marginalTo"

    this.clickOnEyeIcon = function (option) {

        var loc = element(by.xpath("//div[contains(@class,'amended')]//span[text()='Marginal']//..//following-sibling::div//button[contains(@ng-click,'" + option + "')]"));
        return loc.isEnabled().then(function (result) {

            if (result === true) {

                browser.actions().click(loc).perform();
                return result;
            }

            else {
                return false;
                console.log("element is not enabled");
            }
        },
            function (error) {
                console.log("error in clickOnEyeIcon:", error);
                return false;

            });

    };

    //this function is used to check or uncheck the checkboxex present in "AMENDING" and "RELATIONSHIP" section
    //field name has this data : "Final Text" ,"Non consolidated","Consolidated","Discarded"
    //sectionname  has this data:"amending","amended","relationship"

    this.clickOnCheckbox = function (sectionname, fieldname) {

        var ele = element(by.xpath("//div[contains(@class,'" + sectionname + "')]//span[contains(text(),'" + fieldname + "')]//..//input"));
        ele.isPresent().then(function (result) {

            if (result === true) {
                browser.executeScript("arguments[0].scrollIntoView();", ele.getWebElement());
                browser.actions().click(ele).perform();
                return result;
            }

            else {
                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in clickOnCheckbox:", error);
                return false;


            });

    };


    //this function is used to click on buttons "clear form","N° Results" and "Search"
    //if you want to click on clear form button then value="resetModel()"
    //if you want to click on N° Results button then value="searchCount()"
    //if you want to click on Search button then value="search()"

    this.clickOnTheButton = function (value) {

        var loc = element(by.xpath("//button[contains(@ng-click,'" + value + "')]"));
        return loc.isPresent().then(function (result) {

            if (result === true) {

                browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
                browser.actions().click(loc).perform();
                return result;
            }

            else {
                return false;
                console.log("element is not enabled");
            }
        },
            function (error) {
                console.log("error in clickOnTheButton:", error);
                return false;


            });

    };

    //this function is used to click on "Back" ,"Legislation","Consolidated" and "Search" buttons in the breadcrumb
    //buttonname contains the following data
    //"Back","Legislation","Consolidated","Search"

    this.clickOnButtonInBreadcrumb = function (buttonname) {

        var ele = element(by.xpath("//button[@type='button'][contains(text(),'" + buttonname + "')]"));
        ele.isPresent().then(function (result) {

            if (result === true) {

                browser.executeScript("window.scrollTo(0,0);", ele.getWebElement());
                browser.actions().click(ele).perform();
                return result;
            }

            else {
                return false;
                console.log("element is not Present");
            }
        },
            function (error) {
                console.log("error in clickOnButtonInBreadcrumb:", error);
                return false;

            });

    };

    //this function is used to enter data in Alias field

    this.fillInAliasField = function (value) {

        element(by.xpath("//input[@ng-model='searchConsolidationCtrl.searchModel.amended.alias']")).click();
        element(by.xpath("//input[@ng-model='searchConsolidationCtrl.searchModel.amended.alias']")).sendKeys(value);
    };

    //this function is used to check whether table header is present or not
    this.isTableHeaderPresent = function () {
        return element(by.css('.table-header')).isPresent().then(function (present) {
            return present;
        },
            function (error) {
                console.log("Error in isTableHeaderPresent");
                return false;
            });

    };


    //this function is used to click on buttons in the table header in the search results page
    //like "Delete","Consolidate","Group","Discard","Retrieve"

    this.clickButtonsInsideTable = function (buttonname) {

        var ele = element(by.xpath("//div[@class='table-header']//button//span[contains(text(),'" + buttonname + "')]"));
        return ele.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }
            else {
                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in clickButtonsInsideTable:", error);
                return false;

            });

    };


    //this function is used to Access the actions dropdown menu ("...") and select the action from the list
    //for edit action_name="editRelationship"
    //for copy action_name="copyRelationship"
    //for delete action_name="deleteRelationship"

    this.selectActionFromDropdown = function (unit, action_name) {

        element(by.xpath("//tr[@ng-repeat-start='item in searchResults.tableInstance.data().list']//div[contains(text(),'" + unit + "')]//..//..//span[contains(@class,'dropdown')]")).click();
        var ele = element(by.xpath("//div[contains(text(),'" + unit + "')]//..//..//ul[@class='dropdown-menu']//li//a[contains(@ng-click,'deleteRelationship')]"));
        return ele.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }
            else {

                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in selectActionFromDropdown:", error);
                return false;


            });

    };

    //this function is used click on consolidate icon,disable consolidation icon and eye icon 
    // which are present in particular row


    this.clickOnIconsInActions = function (icon_name) {

        if (icon_name.includes('consolidation')) {

            var el = element(by.xpath("//a[@ng-click='searchResults.consolidationForm([item.idRela], item)']"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {

                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickOnIconsInActions:consolidation");
                    return false;

                });
        }

        else if (icon_name.includes('eye')) {

            var el = element(by.xpath("//a[@ng-click='searchResults.expand(item)']"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {

                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickOnIconsInActions:eye");
                    return false;

                });

        }
        else {

            var el = element(by.xpath("//a[@ng-click='searchResults.disableConsolidations(item.idRela)']"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {

                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickOnIconsInActions:discard");
                    return false;

                });

        }


    };

    //this function is used to check if the eye popup is displayed after clicking the eyeicon
    this.isEyeIconPopUpDisplayed = function () {
        element(by.xpath('//tr[@class="ng-scope trow-border-bottom"]')).isPresent().then(function (present) {
            return present;
        },
            function (error) {
                console.log("Error in isEyeIconPopUpDisplayed");
                return false;
            });
    };


    //this function is used to check whether the result list table is present or not

    this.isResultListTablePresent = function () {

        var el = element(by.xpath('//div[@class="table-container"]'));
        return el.isDisplayed().then(function (result) {
            if (result === true) {
                return result;
                console.log("table is dispalyed");
            }
            else {
                return false;
                console.log(" Table is not Disabled");
            }

        });
    };

    //this function is used to click on "refresh" icon in "consolidate" window

    this.clickonRefreshIcon = function () {

        var ele = element(by.xpath("(//button[@ng-click='RelationshipsAddModalCtrl.clearRefresh();formConsolidationCtrl.reloadTexts()'])[1]"));
        ele.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }
            else {

                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in clickonRefreshIcon", error);
                return false;

            });

    };

    //this function is used to check if the unit name is present in text of source or target section
    //in consolidate window

    this.isUnitPresentInText = function (unitname) {

        element(by.xpath("//a[contains(text(),'DOCUMENT STRUCTURE')]")).click();
        // var el = element(by.xpath("//span//b[text()='" + unitname + "']"));
        var el = element(by.xpath("//span[@class='padding-left-5 ng-binding'][contains(text(),'[" + unitname + "] ')]"));
        return el.isPresent().then(function (result) {
            if (result === true) {

                console.log('unit is present')
                return true;

            }
            else {
                console.log("unit is not present");
                return false;

            }
        },
            function (error) {
                console.log("error in isUnitPresentInText", error);
                return false;

            });

    };

    this.isUnitPresentInConsolidationText = function (unitname) {
        var el = element(by.xpath("//*[@class='unitContainer']//b[text()='"+unitname+"']"));
        
        return el.isPresent().then(function (result) {

            if (result === true) {

                console.log('unit is present')
                return true;

            }
            else {
                console.log("unit is not present");
                return false;

            }
        },
            function (error) {
                console.log("error in isUnitPresentInText", error);
                return false;

            });

    };

    this.isUnitPresentInConsolidationTextTarget = function (unitname) {
        var el = element(by.xpath("//div[@class='tab-content']//b[text()='"+unitname+"']"));
        return el.isPresent().then(function (result) {
            if (result === true) {

                console.log('unit is present')
                return true;

            }
            else {
                console.log("unit is not present");
                return false;

            }
        },
            function (error) {
                console.log("error in isUnitPresentInText", error);
                return false;

            });

    };
    this.clickOnXbuttonInSourceSection = function ( fieldname) {
       var el = element(by.xpath("(//*[@tooltip='" + fieldname + "']//..//span)[3]"));
        return el.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(el).perform();
                return result;
            }
            else {
                return false;
                console.log("element is not present");
            }
        },
            function (error) {
                console.log("error in clickOnXbuttonInTheField:source");
                return false;

            });


    };

    this.clickOnXbuttonInTargetSection = function (fieldname) {
        var el = element.all(by.xpath("//*[@tooltip='" +fieldname+ "']//..//i[@class='bento-icon-close-x']")).last();
         return el.isPresent().then(function (result) {
 
             if (result == true) {
 
                 browser.actions().click(el).perform();
                 return result;
             }
             else {
                 return false;
                 console.log("element is not present");
             }
         },
             function (error) {
                 console.log("error in clickOnXbuttonInTheField:source");
                 return false;
 
             });
 
 
     };


    //this function is used to click on the 'x' button in the fields
    //fields which are present in the source and target section of the "consolidate" window

    this.clickOnXbuttonInTheField = function (option, fieldname) {

        if (option.includes('source')) {

            var el = element(by.xpath("(//span[text()='" + fieldname + "']//..//..//i)[1]"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {
                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickOnXbuttonInTheField:source");
                    return false;

                });

        }

        else {

            var el = element(by.xpath("(//span[text()='" + fieldname + "']//..//..//i)[3]"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {
                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickOnXbuttonInTheField:target");
                    return false;

                });

        }


    };

    //this function is used to click on "Edit(visual)" or "Edit(XML)" button which are present in source and target section
    //buttonname has values:"Edit (Visual)" and "Edit (XML)"

    this.clickonEditVisualOrXML = function (option, buttonname) {

        if (option.includes('source')) {

            var el = element(by.xpath("(//button[contains(.,'" + buttonname + "')])[1]"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {
                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickonEditVisualOrXML:source");
                    return false;

                });

        }

        else {

            var el = element(by.xpath("(//button[contains(.,'" + buttonname + "')])[2]"));
            return el.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().click(el).perform();
                    return result;
                }
                else {
                    return false;
                    console.log("element is not present");
                }
            },
                function (error) {
                    console.log("error in clickonEditVisualOrXML:target");
                    return false;

                });

        }

    };


    //this function is used to check wether the consolidation form is present or not

    this.isConsolidationFormPresent = function () {

        var el = element(by.xpath('(//div[@ng-if="formLoaded"])[1]'));
        return el.isDisplayed().then(function (result) {
            if (result === true) {

                console.log("Form is present");
                return result;

            }
            else {
                return false;
                console.log("Form is not present");
            }

        });

    };



    //this function is used to check whether the warning message is present once hovered over the exclamation icon next to relationship type

    this.isWarningMsgPresent = function (msg) {

        var ele = element(by.xpath('//span[@class="gcms2-notification ng-scope"]'));
        browser.actions().mouseMove(ele).perform();
        return element(by.xpath("//span[@class='gcms2-notification ng-scope']//..//div[contains(text(),'" + msg + "')]")).isPresent();

    };


    //this function is used to click on the checkbox of a particular record in result list by passing the unit

    this.clickOnRowCheckBox = function (unitname) {

        var loc = element(by.xpath("//tr[@ng-repeat-start='item in searchResults.tableInstance.data().list']//div[contains(text(),'" + unitname + "')]//..//..//input"));
        return loc.isPresent().then(function (result) {
            if (result == true) {

                browser.actions().click(loc).perform();
                return result;
            }
            else {

                console.log("element is not present in clickOnRowCheckBox");
                return false;
            }
        },
            function (error) {
                console.log("error in clickOnRowCheckBox");
                return false;

            });

    };



    //this function is used to select the date from calendar
    //sectionname can be :'amending','amended','relationship'
    //fieldname can be:'Date of Load','Date of publication'

    this.clickonCalendarIcon = function (sectionname, fieldname) {

        var loc = element(by.xpath("(//div[contains(@class,'" + sectionname + "')]//span[contains(text(),'" + fieldname + "')]//..//..//..//i[@class='bento-icon-calendar data-picker-icon'])[1]"));
        return loc.isPresent().then(function (result) {
            if (result == true) {

                browser.actions().click(loc).perform();
                return result;
            }
            else {

                console.log("element is not present in clickonCalendarIcon");
                return false;
            }
        },
            function (error) {
                console.log("error in clickonCalendarIcon");
                return false;

            });

    };


    //this function is used to select the date from calendar

    this.clickOnTheCurrentDay = function (sectionname, fieldname, day) {

        var ele = element(by.xpath("(//div[contains(@class,'" + sectionname + "')]//span[contains(text(),'" + fieldname + "')]//..//..//..//span[@class='ng-binding text-info'][contains(text(),'" + day + "')])[1]"));

        return ele.isPresent().then(function (result) {
            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }
            else {

                console.log("element is not present in clickOnTheCurrentDay");
                return false;
            }
        },
            function (error) {
                console.log("error in clickOnTheCurrentDay");
                return false;

            });

    };




























};

module.exports = new relationshipsearchpage();