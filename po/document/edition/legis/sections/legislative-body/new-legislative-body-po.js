var legislativeBody = function () {

    /************/
    /*This function clicks on the + buttons available next to different labels as Lagislative Body, Statute type, etc.
    Needs to pass the ID propery of the button 
    */
    this.clickPlusButton = function (idProperty) {
        var EditModeEnabled = element(by.xpath("(//button[text()='Save'])[1]"));
        return EditModeEnabled.isEnabled().then(function () {
            button = element(by.xpath("//*[contains(@id,'" + idProperty + "')]/i")).click();
        }, function (error) {
            console.log("Error in clickPlusButton, Edit mode is not opened: " + error);
        });
    };
    /*This method is used for selecting the connector type from dropdown for any section ,
    TD:idProperty: Need to provide the ID property of the select dropdown
       selectoption(The value needs to select from dropdown) 
    */
    this.selectDropdownOption = function (idProperty, selectoption) {
        var connector = element(by.xpath("//*[contains(@id,'" + idProperty + "')]"));

        connector.click().then(function () {
            var select = element(by.xpath("//*[contains(@id,'" + idProperty + "')]//option[contains(text(),'" + selectoption + "')]"));
            select.click();
        }), function (error) {
            console.log("Error in selectConnectorOption: " + error);
        };
    };

    /*This method is used for selecting an option from dropdown below the connector dropdown,
    TD:lagislativeNo(Lagislative number added using + button)
   selectoption(The value needs to select from dropdown) 
    */

    // this.selectAnOption = function (lagislativeNo, selectoption) {
    //     var connector = element(by.xpath("//*[contains(@id,'addModelComboBoxInput-" + lagislativeNo + "-0')]"));

    //     connector.click().then(function () {
    //         var select = element(by.xpath("//*[contains(@id,'addModelComboBoxInput-" + lagislativeNo + "-0')]//option[contains(text(),'" + selectoption + "')]"));
    //         select.click();
    //     }), function (error) {
    //         console.log("Error in selectAnOption: " + error);
    //     };
    // };

    /*click on button in confirmation pop-up
    TD:ng-click() property
    */
    this.clickOnButtonConfirmationPopUp = function (ButtonText) {
        var option = element(by.xpath("//*[contains(@name,'btnConfirmationDialog')and text()='" + ButtonText + "']"));
        return option.click();
    };

    /*Delete particular node.
    Id property of the node to be deleted
    */
    this.deletePerticularNode = function (idPropertyNode) {
        return element(by.xpath("//*[contains(@id,'" + idPropertyNode + "')]//i")).click();
    };

    /*
     *This method is used for selecting the code from the dropdown in add pop up 
     */
    this.selectCodeFromAddDropDown = function (option) {
        element(by.xpath("//*[@ng-click='onDownArrowClick(false, $event)']")).click();
        var selectOption = element(by.xpath("//span[contains(text(),'" + option + "')]"));
        selectOption.isDisplayed().then(function (dispayed) {
            if (dispayed) {
                browser.executeScript("arguments[0].scrollIntoView();", selectOption.getWebElement());
                return selectOption.click();
            }
            else { console.log("Error in selectCodeFromAddDropDown") }
        })
    };


    /*This method is used for selecting the connector type from dropdown,
        TD:lagislativeNo(Lagislative number added using + button)
           selectoption(The value needs to select from dropdown) 
        */
    this.selectConnectorOptionInProvisionDateSection = function (lagislativeNo, selectoption) {
        var connector = element(by.xpath("//select[@id='combo-connector-" + lagislativeNo + "-0']"));
        connector.click().then(function () {
            var select = element(by.xpath("//select[@id='combo-connector-" + lagislativeNo + "-0']/option[contains(text(),'" + selectoption + "')]"));
            select.click();
        }), function (error) {
            console.log("Error in selectConnectorOption: " + error);
        };
    };

    this.enterMainKeyword = function (value) {
        var mainElement = element(by.xpath("//span[text()='Main-Keyword']//../following-sibling::div//input"));
        mainElement.clear();
        return mainElement.sendKeys(value);
    }

    //Get the note year in display mode.
    this.getNoteYear = function(){
        var noteYear = element(by.xpath("(//*[@class='detail-value-normalizer-left-grey ng-binding'])[3]"));
        return noteYear.getText();
    }

    this.getDocumentHeaderYear = function(){
        var headerYear = element(by.xpath("(//span[@ng-show='documentheader.documentation.data.document.rangos.list[0].numeros.list[0]!= undefined'])[4]"));
        return headerYear.getText();
    }




    this.getTextElement = function(locator){
        
        var object = element(by.xpath(locator));
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", object.getWebElement());
        return object.getText()
    }

    /*************/
    this.loginPopup = function () {
        element(by.model('credentials.username')).isDisplayed();
    };

    this.loginusername = function () {
        element(by.model('credentials.username')).sendKeys('UX007885');
    };
    this.loginpassword = function () {
        element(by.model('credentials.password')).sendKeys('Welcome4');
    };

    this.clicklogin = function () {
        element(by.buttonText('Login')).click();
    };

    this.clicklegislative = function () {
        element(by.id('collapsed-legislation-link')).click();
    };

    this.clearProvisionDate = function () {
        element(by.xpath('.//*[@id="data-picker-prevision-date-0-0"]/span/input')).clear();
    };

    this.enterProvisionDate = function () {
        element(by.xpath('.//*[@id="data-picker-prevision-date-0-0"]/span/input')).sendKeys('12/01/2012');
    };

    this.clickSave = function () {
        element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="btnSaveDocument"]')).click();
    };

    this.clickSaveConfirmation = function () {
        element(by.name('btnConfirmationDialogAccept')).click();
    };

    this.editButton = function () {
        element.all(by.id('btnGoToEditMode')).get(1).click();
        // browser.executeScript('return document.getElementById(\'btnGoToEditMode\').click();','');
    };

    this.exitEditButton = function () {
        browser.executeScript('return document.getElementById(\'btnExitEditMode\').click();', '');
    };

    this.cancelDate = function () {
        element(by.id('provision-delete-0-0')).click();
    };

    this.selectYear = function () {
        element(by.cssContainingText('option', 'yyyy')).click();
    };

    this.selectMonth = function () {
        element(by.cssContainingText('option', 'MM/yyyy')).click();
    };

    this.selectIncorrectDate = function () {
        element(by.cssContainingText('option', 'dd/MM/yyyy')).click();
    };

    this.enterYear = function () {
        element(by.xpath('.//*[@id="data-picker-prevision-date-0-0"]/span/input')).sendKeys('12/02/2012');
    };

    this.enterMonth = function () {
        element(by.xpath('.//*[@id="data-picker-prevision-date-0-0"]/span/input')).sendKeys('03/12/1988');
    };

    this.enterIncorrectDate = function () {
        element(by.xpath('.//*[@id="data-picker-prevision-date-0-0"]/span/input')).sendKeys('2012/12/01');
    };

    this.clickPlusButtonDate = function () {
        element(by.id('add.provision.date2-0-0')).click();
    };

    this.getTextProvisionDate = function () {
        element(by.id('span-precision-text-0-0')).getText();
    };

    this.displayProvisionDate = function () {
        element(by.id('span-precision-text-0-0')).isDisplayed();
    };

    this.getTextConnector = function () {
        element(by.id('provisionDateConnector1-0')).getText();
    };

    this.displayConnector = function () {
        element(by.id('provisionDateConnector1-0')).isDisplayed();
    };

    this.clickLegislativeNumber = function () {
        element(by.id('add.leg-number2-0-0')).click();
    };

    this.getTextNumber = function () {
        //element(by.cssContainingText('option', 'NUM')).getText();
        element.all(by.css('.detail-value-normalizer-left-grey.ng-binding')).get(2).getText();
    };

    this.displayNumber = function () {
        //element(by.cssContainingText('option', 'NUM')).getText();
        element.all(by.css('.detail-value-normalizer-left-grey.ng-binding')).get(2).getText();
    };

    this.getTextLegislativeConnector = function () {
        element(by.id('legislativeNumberConnector1-0')).getText();
    };

    this.displayLegislativeConnector = function () {
        element(by.id('legislativeNumberConnector1-0')).isDisplayed();
    };

    this.exitEditMode = function () {
        element.all(by.id('btnExitEditMode')).get(1).click();

    };

    this.clickYes = function () {
        element(by.name('btnConfirmationDialogAccept')).click();
    };

    this.copyButton = function () {
        browser.executeScript('return document.getElementById(\'btnCopyfixSection\').click();', '');
    };

    this.selectData = function () {
        element(by.cssContainingText('input', 'LEG - Legislación')).click();
    };

    this.clickCalculate = function () {
        element(by.id('validation-id')).click();
    };

    this.clickCopy = function () {
        element(by.id('[data-ng-click="copy()"]')).click();
    };

    this.clickExpand = function () {
        element(by.id('collapse-all-collapsed-link')).click();
    };

    this.displayDocument = function () {
        return element(by.className('class-title-body ng-binding')).isDisplayed();
    };

    this.displayLegislativeBody = function () {
        return element(by.name('lnkSearchDropdown')).isDisplayed();
    };

    this.addButton = function () {
        browser.executeScript('return document.getElementById(\'btnAddfixSection\').click();', '');
    };

};
module.exports = new legislativeBody();