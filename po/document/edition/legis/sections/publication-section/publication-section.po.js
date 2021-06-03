var LegislationPublicationSection = function () {


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

    //this function is used to add a new publication

    this.clickAddPublication = function () {

        var ele = element(by.xpath("//button[@ng-click='publication.addNewPublication()']//i"));
        ele.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }

            else {
                console.log("element is not present");
                return false;
            }
        },
            function (error) {
                console.log("error in clickAddPublication:", error);
                return false;

            });


    };

    //this function is used to add date and series

    this.clickAddDateandSeries = function () {

        var ele = element(by.xpath("//button[@ng-click='publication.addNewDateNumberAndSeries($event)']//i"));
        ele.isPresent().then(function (result) {

            if (result == true) {

                browser.actions().click(ele).perform();
                return result;
            }

            else {
                console.log("element is not present");
                return false;
            }
        },
            function (error) {
                console.log("error in clickAddPublication:", error);
                return false;

            });


    };

    //this function is used to select the publication from the dropdown

    this.selectPublicationFromDropdown = function (option, expectedoption) {

        if (option.includes('first')) {

            element(by.xpath("(//span[contains(text(),'Publication')]//..//..//..//a[@name='lnkSearchDropdown'])[1]")).click();
            var loc1 = element(by.xpath("(//span[contains(text(),'Publication')]//..//..//..//input[@name='txtdropdownsearch'])[1]"));
            loc1.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().sendKeys(expectedoption).perform();
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    var selectvalue = element(by.xpath("//a[contains(text(),'" + expectedoption + "')]"));
                    browser.actions().click(selectvalue).perform();
                    return result;
                }

                else {
                    return false;
                    console.log("error in selectPublicationFromDropdown:first");
                }
            });

        }


        else {

            element(by.xpath("(//span[contains(text(),'Publication')]//..//..//..//a[@name='lnkSearchDropdown'])[3]")).click();
            var loc1 = element(by.xpath("(//span[contains(text(),'Publication')]//..//..//..//input[@name='txtdropdownsearch'])[3]"));
            loc1.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().sendKeys(expectedoption).perform();
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    var selectvalue = element(by.xpath("//a[contains(text(),'" + expectedoption + "')]"));
                    browser.actions().click(selectvalue).perform();
                    return result;
                }

                else {
                    return false;
                    console.log("error in selectPublicationFromDropdown:second");
                }
            });

        }

    };

    //this function is used to select Date & Number,Series value from dropdown

    this.selectDateFromDropdown = function (option, expectedoption) {

        if (option.includes('first')) {

            element(by.xpath("(//span[contains(text(),'Date & Number, Series')]//..//..//..//a[@name='lnkSearchDropdown'])[1]")).click();
            var loc1 = element(by.xpath("(//span[contains(text(),'Date & Number, Series')]//..//..//..//input[@name='txtdropdownsearch'])[1]"));
            loc1.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().sendKeys(expectedoption).perform();
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    var selectvalue = element(by.xpath("//a[contains(text(),'" + expectedoption + "')]"));
                    browser.actions().click(selectvalue).perform();
                    return result;
                }

                else {
                    return false;
                    console.log("error in selectDateFromDropdown:first");
                }
            });

        }


        else {

            element(by.xpath("(//span[contains(text(),'Date & Number, Series')]//..//..//..//a[@name='lnkSearchDropdown'])[2]")).click();
            var loc1 = element(by.xpath("(//span[contains(text(),'Date & Number, Series')]//..//..//..//input[@name='txtdropdownsearch'])[2]"));
            loc1.isPresent().then(function (result) {

                if (result == true) {

                    browser.actions().sendKeys(expectedoption).perform();
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    var selectvalue = element(by.xpath("//a[contains(text(),'" + expectedoption + "')]"));
                    browser.actions().click(selectvalue).perform();
                    return result;
                }

                else {
                    return false;
                    console.log("error in selectDateFromDropdown:second");
                }
            });

        }

    };

    //this function is used to enter the page number

    this.enterPageNumber = function (option, page_number) {

        if (option.includes('first')) {

            element(by.xpath("(//input[@ng-model='dataSet.numeroPagina'])[1]")).clear();
            element(by.xpath("(//input[@ng-model='dataSet.numeroPagina'])[1]")).sendKeys(page_number);
        }

        else {
            element(by.xpath("//input[contains(@id,'publication.edit.section')]")).clear();
            element(by.xpath("//input[contains(@id,'publication.edit.section')]")).sendKeys(page_number);
           /* element(by.xpath("(//input[@ng-model='dataSet.numeroPagina'])[2]")).clear();
            element(by.xpath("(//input[@ng-model='dataSet.numeroPagina'])[2]")).sendKeys(page_number);*/
        }

    };


    //this function is used to remove a newly added publication

    this.clickOnElement = function (locator) {

        var ele = element(by.xpath(locator));
        return ele.isPresent().then(function (result) {
            if (result == true) {
                browser.actions().click(ele).perform();
                return result;
            }
            else {
                console.log("element is not present");
            }

        },
            function (error) {
                console.log("error in clickToRemovePublication:", error);
                return false;

            });

    };


    //this function is used to get the value of the publication
    this.valueInPublicationType = function (value) {
        var _pubname = element.all(by.xpath('//strong[@class="detail-value-principal ng-binding"]')).get(value);
        browser.executeScript("arguments[0].scrollIntoView();", _pubname.getWebElement());
        return _pubname.getText().then(function (result) {

            return result;
        }, function (err) {
            return null;
        });
    };

    //this function is used to drag & drop first publication on to the second position
    this.dragAndDropFirstPublicationTypeToSecondPosition = function () {

        var _firstpubname = element.all(by.css('[onload="publication.searchPublicationTypes"] a[name="lnkSearchDropdown"]')).get(0);
        var _secondpubname = element.all(by.css('[onload="publication.searchPublicationTypes"] a[name="lnkSearchDropdown"]')).get(1);

        browser.sleep(500);
        browser.actions().mouseUp(_firstpubname).perform();
        browser.sleep(500);
        browser.actions().mouseMove(_secondpubname).perform();
        browser.sleep(500);
        browser.actions().mouseDown().perform();
        browser.sleep(1000);
        return element(by.id('publication.edit.section.description0')).isDisplayed();
    };

    //this function is used to checking whether principal text is present
    this.principal = function () {

        var _principal = element(by.css('[ng-show="docPublication.principal"]'));
        browser.executeScript("arguments[0].scrollIntoView();", _principal.getWebElement());
        return _principal.getText();
    };

    //this function is used to check whether date & Number series label is present
    this.datenumberseries = function () {

        var _datenumberseries = element(by.css('.class-title-body.font-size-92p.ng-binding'));
        browser.executeScript("arguments[0].scrollIntoView();", _datenumberseries.getWebElement());
        return _datenumberseries.getText();
    };

    //this function is used to check the value of the publication
    this.haspublicationItem = function (itemName) {
        var _publicationitemList = element(by.css('[id="publication.edit.section.description0"] a[name="lnkSearchDropdown"]'));
        return _publicationitemList.getText().then(function (listNames) {
            if (listNames === itemName) {
                return true;
            } else {
                return false;
            }
        });
    };

    //this function is used to check the value of date & Number,series for the first publication
    this.hasdateseriesItem = function (itemName) {
        var _dateseriesItem1 = element(by.css('[id="publication.edit.section.date.00"] a[name="lnkSearchDropdown"]'));
        return _dateseriesItem1.getText().then(function (listNames) {
            if (listNames === itemName) {
                return true;
            } else {
                return false;
            }
        })
    };

    //this function is used to check wether Page N` label is present
    this.positionpage=function () {

        var _positionpage= element(by.xpath("//span[@class='class-title-body ng-binding'][text()='Page N°']"));
        browser.executeScript("arguments[0].scrollIntoView();", _positionpage.getWebElement());
        console.log("Page N present");
		return _positionpage.getWebElement().getText();
	};




















































};

module.exports = new LegislationPublicationSection;