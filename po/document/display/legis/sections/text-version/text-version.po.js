var textversionpage = function () {

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

  this.hoverelement = function (locator) {
    var element1 = element(by.xpath(locator));
    browser.actions().mouseMove(element1).perform()

    browser.actions().
    mouseDown(element1).
    //mouseUp().
    perform();

    // browser.actions().mouseDown(element1).perform();
    // browser.sleep(5000);
    // browser.actions().mouseUp().perform();

  }


// enter type feild
  this.entertextintypefield = function(text1){
    element.all(by.model('model[property]')).get(7).sendKeys(text1);
   // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

//enter code feild

  this.entertextincodefield = function(text2){
    element.all(by.model('model[property]')).get(10).sendKeys(text2);
   // browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };
  this.clickDocumentText = function () {
    element.all(by.css('[ng-click="select()"]')).get(1).click();
  };

  this.clickAnyLinkDocType = function () {
    element(by.css('.cite>span')).click();
  };

  this.clickGreenLamp = function () {
    element.all(by.css('.gcms2-suggest')).get(0).click();
  };

  this.isAddRelationshipDisplayed = function () {
    return element(by.css('.modal-content')).isPresent();
  };

  this.isDocumentTextPresent = function () {
    element(by.css('.tab-content')).isPresent();
  };

  this.clickBlankPageField = function () {
    element(by.id('text-features')).click();
  };

  this.getTextSourceAddRelationship = function () {
    return element(by.css('.ng-scope.ng-binding.standout-marginal')).getText();
  };

  this.getTextUnitAddRelationship = function () {
    return element(by.css('[style="position:relative;width:100%;height:100%;max-height:inherit;overflow:hidden"] [wj-part="cells"] [ng-if="$item.afecta.unidad.precu"]')).getText();
  };

  this.closeAddRelationShipPopup = function () {
    element.all(by.css('[ng-click="RelationshipsAddModalCtrl.closeConfirmationModal()"]')).get(1).click();
  };

  this.minimizeAddRelationShipPopup = function () {
    element.all(by.css('.gcms2-minus')).get(1).click();
  };

  this.maximizeAddRelationShipPopup = function () {
    element.all(by.css('.gcms2-minus')).get(0).click();
  };

  this.isAddRelationShipPopupMinimized = function () {
    return element(by.css('.modal-content.minimized')).isPresent();
  };

};

module.exports = new textversionpage();