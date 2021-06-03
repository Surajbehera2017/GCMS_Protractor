var globalfunction = function () {


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

                console.log("Error in URL load")

            }
        });
    };



    //check for the table is present after click on view all link or delete pop up or confirmation pop up
    // for all modules for expect statements
    this.isTablePresent = function () {
        var el = element(by.xpath('//*[@class="modal-content"]'));
        return el.isDisplayed().then(function (result) {
            if (result === true) {
                return result;
                console.log("table is dispalyed");
            }
            else {
                console.log(" Table is not Disabled");
                return false;

            }

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
        if (buttonName == 'Show Filters') {
            return loc.isDisplayed().then(function (result) {
                if (result == true) {
                    loc.click();
                    console.log(1234);
                    return result;
                    
                }
            });
        }
        else {

            return loc.getAttribute('disabled').then(function (result) {
                console.log("value of getAttribute", result);
                if (result === 'true') {
                    console.log(buttonName + " button is Disabled");
                    return true;

                } else {
                    browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
                    loc.click();
                    return false;
                }
            },
                function (error) {
                    console.log("error in clickOnbuttonInsideSectionTable:", error);
                    return false;
                });
        }

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

    // //Select Value from Context Index.
    // this.selectValueFromContextIndexTerm = function (indexValue) {
    //     var splitValue = indexValue.split(',');
    //     console.log("Length:: " + splitValue.length);
    //     for (var row = 0; row < splitValue.length; row++) {
    //         var loc = element(by.xpath("(//*[@id='panel3']//input//preceding::div[contains(text(),'" + splitValue[row] + "')]//following:: input)[1]"));
    //         console.log("index Value:: " + splitValue[row]);
    //         browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
    //         browser.actions().click(loc).perform();
    //     }
    // };



    //to write paragraph in the edit unit pop up editor
    // this.writeParagraphOneInAddUnitPopUpAndPressEnter = function (value) {
    //     browser.driver.findElement(by.id('visible-e10')).isDisplayed().then(function (result) {
    //         var el = browser.driver.findElement(by.id('visible-e10'));
    //         browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
    //     },
    //         function (error) {
    //             console.log("Error in isDisplayed() in writeParagraphOneInAddUnitPopUpAndPressEnter");
    //         });
    // };


    // Click on Navigation or Close Button in view all table(first page , last page , close table etc)
    this.clickOnNavigationOrCloseButton = function (buttonOption) {
        var loc = element(by.xpath("//span[@class='ng-binding']//following:: *[@ng-click='" + buttonOption + "()']"));
        return loc.isEnabled().then(function (result) {
            if (result == true) {
                browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
                browser.executeScript("arguments[0].click();", loc.getWebElement());
                return result;
            } else {
                console.log(buttonOption + " is Disabled ");
                return false;
            }
        },
            function (error) {
                console.log("error in clickOnNavigationOrCloseButton:", error);
                return false;
            });
    };
    //to click on the save or cancel button,used ngclick element
    this.clickSaveorCancel = function (buttonname) {
        if (buttonname == 'Save') {
            element(by.xpath("//button[@ng-click='ok()']")).click();
        }
        else {
            element(by.xpath("//button[@ng-click='cancel()']")).click();
        }
    }

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

        else {
            var detectFieldName1 = element(by.xpath("(//*[contains(text(),'" + fieldName + "')]// following:: select)[1]"));
            var selectValue = element(by.xpath("//*[contains(text(),'" + fieldName + "')]// following:: option[contains(text(),'" + Value + "')]"));
            return detectFieldName1.isEnabled().then(function (result) {
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
        if (buttonName == 'Modify Product') {
            var loc = element(by.xpath("//*[contains(text(),'" + buttonName + "')]"));
        } else {
            //var loc = element(by.xpath("//button[text()='" + buttonName + "']"));
            var loc = element(by.xpath("//*[text()='" + buttonName + "']"));
        }
        return loc.isPresent().then(function (result) {
            if (result == true) {
                console.log('inside clickOnButtonForGlobal');
                browser.actions().click(loc).perform();
            } else {
                console.log("Error in clickOnButtonForGlobal");
                return false;
            }
        });
    };
    //seleting multiple rows in the all sections tables
    //testdata 'All' or '1' or '10' or '5'
    this.selectNoOfRows = function (noofrows) {
        if (noofrows.includes('All')) {
            var el = element(by.xpath('//*[contains(@class,"multi-select")]//input[@type="checkbox"]'));
            return el.isDisplayed().then(function (displayed) {
                if (displayed === true) {
                    el.click();
                    console.log('clicked', displayed);
                    return displayed;
                }
                else {
                    console.log(' not clicked');
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
                    browser.sleep(5000);
                    // browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                    browser.executeScript("arguments[0].click();", element.getWebElement());

                }

            }, function (error) {
                console.log("error in selectNoOfRows: selectnoofrows");
                return false;
            });
        }
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


    //pass the value of unit value into unitname and for action,  send value is 'unitAdd'
    //pass the unit id ex:A.2 and to clcik on plus-(+)-pass "addUnit" or for  #-pass : "level"
    this.selectAndAddUnitFromDropDown = function (unitName, action) {
        var mainDropDown = element(by.xpath("//*[@id='panel1']//input[@ ng-click='$event.stopPropagation()']"));
        var searchAndEnter = element(by.xpath("//*[@id='panel1']//input[@name='txtdropdownsearch']"));
        var unitOrLevel = element(by.xpath("//*[@id='panel1']//a[@name='" + action + "']"));
        return mainDropDown.isPresent().then(function (result) {
            if (result == true) {
                browser.actions().click(mainDropDown).perform();
                browser.actions().click(searchAndEnter).sendKeys(unitName).perform();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.actions().click(unitOrLevel).perform();
                return result;
            } else {
                console.log("error in selectAndAddUnitFromDropDown: on " + unitName + " : ", error);
                return false;
            }

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
        element.all(by.css('#panel2 li div')).each(function (element) {
            element.getText().then(function (text) {
                console.log("text " + text);
                if (text === expectedHierarchy) {
                    browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                    browser.actions().mouseMove(element).perform();
                    browser.actions().click().perform();
                    browser.sleep(2000);

                }
            });
        });
    };


    // to click on visual and XML  for add and edit
    this.clickonXMLorVisual = (value => {
        var x = element(by.xpath("//a[contains(text(),'" + value + "')]"));
        return x.isPresent().then(result => {
            if (result == true) {
                browser.actions().click(x).perform();
                return result;
            }
            else {
                console.log("error in clickonXMLorVisual ", value);
                return false;
            }
        });

    });

    //Button is displayed inside section table (Add, Edit , Show Filters, ...etc)
    this.isButtonInsideSectionTableDisplayed = function (buttonName) {
        var loc = element(by.xpath("//div[@class='modal-content']//following:: *[text()='" + buttonName + "']"));
        return loc.isPresent().then(function (result) {
            if (result == true) {
                browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());

                return result;
            } else {
                console.log(buttonName + " button is not Displayed");
                return false;
            }
        });

    };


    //Click Captexto or other tabs in BreadCrumb
    this.clickCapatextoAndChildTabs = function (tabName) {
        var el = element(by.xpath("//*[@class='x-box-inner ']//span[text()='" + tabName + "']"));
        return el.isPresent().then(function (result) {
            if (result == true) {
                browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
                browser.actions().mouseMove(el).click().perform();
                return true;
            } else {
                console.log(tabName + "  is not Present");
                return false;
            }

        });

    };

    //Select the insert element from the Breadcrumb
    this.moveToInsertAndSelectElement = function (elementName) {
        var el = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='Insert element']"));
        el.isPresent().then(function (result) {
            if (result == true) {
                browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
                browser.actions().mouseMove(el).perform();
            } else {
                console.log(elementName + "  is not Present");
                return false;
            }
            var el1 = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='" + elementName + "']"));
            el1.isPresent().then(function (result) {
                if (result == true) {
                    browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
                    browser.actions().mouseMove(el1).click().perform();
                    return result;
                } else {
                    console.log(elementName + "  is not Present");
                    return false;
                }
            });
        });
    };

    //click on the tab and select insert break option

    this.clickOnTabAndSelectInserBreak = function (tabname) {

        //click on the tab
        var el = element(by.xpath("//*[@class='x-box-inner ']//span[text()='" + tabName + "']"));
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
        var el = element(by.xpath("//*[@class='x-btn-button']//span[text()='" + dataType + "']"));
        //*[@class='x-btn-button']//span[text()='notatexto']
        browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
        browser.actions().mouseMove(el).click().perform();
        browser.sleep(2000);
        var el1 = element(by.xpath("//*[@class='x-menu-item-link ']//span[text()='" + elementName + "']"));
        browser.executeScript("arguments[0].scrollIntoView();", el1.getWebElement());
        browser.actions().mouseMove(el1).click().perform();
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


    //Click on Paste drop down icon
    this.clickOnPasteDropdown = function () {

        var el = element(by.xpath("//*[@data-qtip='Paste external text']//span"));
        // var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
        browser.actions().mouseMove(el, { x: 30, y: 0 }).perform();
        browser.sleep(2000);
        browser.actions().click().perform();
    };

    //Select the option to the paste format
    this.selectOptionFromPasteDropdown = function (pasteFormat) {

        element(by.xpath("//a[@class='x-menu-item-link ']//span[text()='" + pasteFormat + "']")).click();
    };

    this.globalButtonElementDisplayedAndClick = function (value) {
        var ele1 = element(by.xpath("//button[contains(text(),'" + value + "')]"));
        return ele1.isDisplayed().then(function (loc) {
            if (loc) {
                ele1.click();
            }
            else {
                console.log("" + value + "element is not visible");
                return false;
            }
        }, function (error) {
            console.log("error in globalButtonElementDisplayedAndClick");
            return false;
        });
    };

    /*
      function to enter values in fields of show filters of all section's table
      valid fieldName for :
      1. authorNotes: note-type ,context-type, context-term ,note-note ,unit-detail,unit-level ,note-version

    */
    this.enterValueInShowFiltersField = function (fieldName, value) {
        var field = element(by.xpath("//*[contains(@id,'SearchContainer')]//*[contains(@id,'" + fieldName + "')] "));

        return field.isDisplayed().then(function (result) {
            if (result) {
                field.clear();
                browser.actions().click(field).sendKeys(value).perform();
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                return result;

            }


        }, function (error) {
            console.log("error in enterValueInShowFiltersField");
            return false;
        });


    }

    /*
       To verify if information Dialog is displayed or not
    
        */
    this.isErrorMessageDisplayed = function () {
        var el = element
            (by.xpath("(//*[contains(@name,'Dialog') and contains(@name,'txt')])[1]"));
        return el.isDisplayed().then(function (present) {
            if (present) {
                return present;
            }
            else {
                console.log("error is not getting displayed")
                return false;
            }
        }, function (error) {
            console.log("error in isErrorMessageDisplayed")
            return false;
        });
    }


    /*
    TD:filterValue: Input box ID need to pass 
    Ex:UnitName, UnitLevel, etc
    for selecting "P" dropdown filterValue:P  and enterText as Y or N  
    For author notes send the id property to search for unit/notetype etc.
     */

    this.clickOnFilterAndEnterValue = function (filterValue, enterText) {
        this.globalButtonElementDisplayedAndClick('Show Filters');
        // var ele2 = element(by.xpath("//*[text()='Unit']//preceding:: *[contains(@id,'Unit')]"));
        var ele2 = element(by.xpath("//*[text()='Unit']//preceding:: *[contains(@id,'unit')]"));
        return ele2.isDisplayed().then(function (text) {
            if (text === true) {
                console.log(filterValue);
                if (filterValue.includes("AnalystName")) {
                    element(by.xpath("(//*[text()='Unit']//preceding:: *[contains(@id,'analyst')])[1]")).sendKeys(enterText);

                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                }
                else if (filterValue.includes("Analystdate")) {
                    element(by.xpath("(//*[text()='Unit']//preceding:: *[contains(@id,'analyst')])[2]")).sendKeys(enterText);
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                }
                else if (filterValue.includes("P")) {
                    element(by.xpath("//*[text()='Unit']//preceding:: *[contains(@id,'spread')]")).click();
                    browser.sleep(1000);
                    if (enterText.includes("y") || enterText.includes("Y")) {
                        element(by.xpath("//option[@value='S']")).click();
                    }
                    else {
                        element(by.xpath("//option[@value='N']")).click();
                    }
                }
                else {
                    element(by.xpath("//*[text()='Unit']//preceding:: *[contains(@id,'" + filterValue + "')]")).sendKeys(enterText);
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                }
                return text;
            }
            else {
                console.log("Error in Entering vaue in filters");
                return false;
            }
        }, function (error) {
            console.log("error in clickOnFilterAndEnterValue");
            return false;
        });


    };
    //to select the edit, copy, delete in the actions colomn of thesaurus/contextindex/authornotes table
    //testdata: 'edit' 'delete' 'copy'
    this.clickActioninTable = function (action) {

        var x = element(by.xpath("(//a[contains(@class,'" + action + "')])[1]"));
        return x.isEnabled().then(function (result) {
            browser.executeScript("arguments[0].click();", x);
            browser.actions().click(x).perform();
            return result;
        }, function (error) {
            console.log("error in selectActionFromTable ", error);
            return false;
        });
    }
    this.isElementDisplayed = function (Locator) {

        var ele = element(by.xpath(Locator));
        return ele.isDisplayed().then(function (elepresent) {
            console.log(elepresent);
            if (elepresent == true) {
                console.log("inside if");
                browser.executeScript("arguments[0].scrollIntoView();", ele);
                // return elepresent;
                return true;
            }
            else {
                console.log("element not displayed")
                return false;

            }
        }, function (error) {
            console.log("error in isElementDisplayed" + error);
            return false;
        });
    };

    this.isElementPresent = function (Locator) {

        var ele = element(by.xpath(Locator));
        return ele.isPresent().then(function (elepresent) {
            if (elepresent == true) {
                // browser.executeScript("arguments[0].scrollIntoView();", ele);
                return true;
            }
            else {
                console.log("element not present")
                return false;

            }
        }, function (error) {
            console.log("error in isElementPresent", error);
            return false;
        });
    };
    //iselement enabled
    this.isElementEnabled = function (locator) {
        var el = element(by.xpath(locator));
        return el.getAttribute('disabled').then(function (result) {
            console.log("value of getAttribute", result);
            if (result === 'true') {
                console.log(" button is Disabled");
                return true;

            } else {
                console.log("error in isElementEnabled");
                // browser.actions().click(el).perform();
                return false;
            }
        }, function (error) {
            console.log(error);

        });
    };


    //to read the text from the element
    this.gettingTextofelement = function (locator, expectedtext) {
        console.log(locator);
        var el = element(by.xpath(locator));
        browser.waitForAngular();
        return el.getText().then(function (text) {
            console.log('text of gettingTextofelement ', text);
            if (text.includes(expectedtext)) {
                console.log('text is', text);
                return true;
            }
            else {
                return false;
            }
        },
            function (error) {
                console.log("Error in gettingTextofelement");
                return false;
            });

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


    /*This function will verify if the passed element has the current date and return true or false
    TD: Need to pass element's unique xpath property 
    */

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

                return date.getText().then(function (text) {

                    if (text.trim() == today) {
                        return true;
                    }
                    else {
                        console.log("element does not have current date");
                        return false;
                    }
                });

            }

        }, function (error) {
            console.log("error in getDateAndVerify: element is not displayed");
        });

    };

    //This function will click on the select dropdown inside xml editor 
    this.clickOnSelectXmlEditor = function () {

        var ele = element(by.xpath("//*[@ng-model='editor.selectedVariableElement']"));
        return ele.isDisplayed().then(function (elepresent) {
            if (elepresent === true) {
                ele.click();
                return elepresent;
            }
            else {
                console.log("element not visible")
                return false;

            }
        }, function (error) {
            console.log("error in clickOnSelectXmlEditor");
            return false;
        });
    };


    //This function will click on the select dropdown inside xml editor an dselect perticular option
    this.clickOnSelectXmlEditorAndclickOnOption = function (option) {
        this.clickOnSelectXmlEditor();
        var ele = element(by.xpath("//*[@ng-model='editor.selectedVariableElement']/option[text()='" + option + "']"));
        return ele.isDisplayed().then(function (elepresent) {
            if (elepresent === true) {
                ele.click();
                return elepresent;
            }
            else {
                console.log("element not visible")
                return false;

            }
        });
    };


    //This function will enter the text and date inside the date pop up
    this.clickOnSelectXmlEditorSelectDateAndPerform = function (text, date) {
        this.clickOnSelectXmlEditorAndclickOnOption("Date");
        var ele = element(by.xpath("//span[text()='Text']/following-sibling::input"));
        var ele2 = element(by.xpath("//span[text()='Date']/following-sibling::input"));
        return ele.isDisplayed().then(function (elepresent) {
            if (elepresent === true) {
                ele.sendKeys(text);
                ele2.sendKeys(date);
                element(by.xpath("//*[@ng-click='ok()']")).click();
                return elepresent;
            }
            else {
                console.log("error in clickOnSelectXmlEditorSelectDateAndPerform ; element not visible")
                return false;

            }
        });
    };

    //to select the value from dropdown for document type(generaldata section) and effective type(Validity/End of Validity section)
    //for general data section: 'generalData','Convenio Colectivo'
    //for validity section: 'Validity','Anual'
    this.selectValueDropdown = function (sectionname, dropdownvalue) {
        if (sectionname == 'Language') {
            var el = element(by.xpath("(//select[contains(@ng-model,'language')])[2]")).click();
            var value = element(by.xpath("(//select[contains(@ng-model,'language')])[2]//option[contains(text(),'" + dropdownvalue + "')]"));

        }

        else {
            var el = element(by.xpath("//select[contains(@ng-model,'" + sectionname + "')]")).click();
            var value = element(by.xpath("//select[contains(@ng-model,'" + sectionname + "')]//option[contains(text(),'" + dropdownvalue + "')]"));
        }
        return value.isPresent().then(function (result) {
            console.log("gettext value is", result)
            if (result == true) {
                value.click();
                console.log("inside if loop and element is : ", result)
                return result;
            }
            else {
                console.log("error in selectValueDropdown", result);
                return false;
            }
        }, function (error) {
            console.log("error in selectValueDropdown", error);
        });
    };

    //to add comapny or workcenter or provisiondate testdata: 1.'Company' 2. Workcenter 3.'Provision Date'

    this.clickPlusOrWorldicon = function (feildname) {
        if (feildname == 'Workcenter' || feildname == 'Company' || feildname == 'Provision Date') {
            var el = element(by.xpath("//*[contains(text(),'" + feildname + "')]//..//i"));

        }
        else {
            browser.sleep(1000);
            var el = element(by.xpath("//*[text()='" + feildname + "']//..//..//i"));
        }

        // browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
        return el.isPresent().then(function (result) {
            if (result == true) {
                console.log("clickPlusOrWorldicon");
                browser.executeScript("arguments[0].click();", el.getWebElement());
            }
            else {
                console.log("error in clickPlusOrWorldicon");
            }
        }, function (error) {
            console.log(error);
        });


    };
    //to select the dropdown value in all the sections
    //this function works for dropdown of Jurisdiction,Legislative Body,Statute Type,Publication Data
    //ex testdata: ('Jurisdiction','A Coruña') ('Legislative Body','Ayuntamiento de Sevilla') 
    this.dropdownValueSelect = function (feildname, value) {

        if (feildname == 'Practice Area') {
            var clickdropdown = element(by.xpath("(//span[contains(text(),'" + feildname + "')]//..//following-sibling::div//*[@class='search-dropdown-c dropdown-toggle ng-binding'])[3]"));
            var textbox = element(by.xpath("(//span[contains(text(),'" + feildname + "')]//..//following-sibling::div/div//input[@name='txtdropdownsearch'])[3]"));
        }
        else {
            var clickdropdown = element(by.xpath("//span[contains(text(),'" + feildname + "')]//..//following-sibling::div//*[@class='search-dropdown-c dropdown-toggle ng-binding']"));
            var textbox = element(by.xpath("//span[contains(text(),'" + feildname + "')]//..//following-sibling::div/div//input[@name='txtdropdownsearch']"));
        }
        return clickdropdown.isPresent().then(function (result) {
            if (result == true) {
                clickdropdown.click();


                browser.actions().click(textbox).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(2000);
                var selectvalue = element(by.xpath("//a[contains(text(),'" + value + "')]"));
                selectvalue.click();
                return result;
            }
            else {
                console.log("error in dropdownValueSelect ");
                return false;

            }

        }, function (error) {
            console.log(error);
        });

    };

    //to expand or collapse all the sections
    this.expandCollapseAllSec = function (action) {
        if (action == 'Expand') {
            element(by.xpath("//a[@id='collapse-all-collapsed-link']")).click();
        }
        else {
            element(by.xpath("//a[@id='collapse-all-non-collapsed-link']")).click();
        }
    };




};
module.exports = new globalfunction();















