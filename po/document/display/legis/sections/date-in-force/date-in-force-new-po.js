var LegislationDateInForceSection = function () {

    var _inForceDate = element(by.id('textDateForceValueValidityDataSection'));
    var _temporality = element(by.id('textEffectiveTypeValueValidityDataSection"]'));
    var _ineffectiveNoteText = function () {
        this._scrollTo(this._ineffectiveNote);

        //return element(by.css('[name="contentDinameTextDiretiveMore"][dynamic="originaltext"]')).getWebElement().getInnerHtml();
        return browser.findElement(by.css('[id="textIneffectiveNoteValueValidityDataSection"]')).getInnerHtml();
    };

    var _ineffectiveNoteTextNew = element(by.css('[id="textIneffectiveNoteValueValidityDataSection"] [class="ng-isolate-scope"] [class="ng-scope"] [name="contentDinameTextDiretiveMore"] div'));



    var _seeMoreLink = element(by.css('#textIneffectiveNoteValueValidityDataSection [name="linkMoreMinifiedDirective"]'));
    var _DateForce = element(by.id('textDateForceValueValidityDataSection'));
    var _EffectiveType = element(by.id('textEffectiveTypeValueValidityDataSection'));
    var _IneffectiveDate = element(by.xpath("//span[@ng-bind='sectionValidityController.document.data.document.fechaInoperancia']"));
    var _ineffectiveNote = element(by.xpath("//div[@name='contentDinameTextDiretiveMore' and @dynamic='originaltext']/div"));
    var _EffectiveTypeNew = element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] [ng-model="sectionValidityController.document.data.document.temporalidad.code"]'));
    var _IneffectiveDateNew = element(by.xpath("//input[@id='inoperateDate']"));
    var _ineffectiveNoteNew = element(by.xpath("//*[@ng-model='sectionValidityController.document.data.document.notaTemporalidad']"));


    _scrollTo = {
        value: function (webelement) {
            // There are some issues with the double scroll when trying to click some elements
            browser.executeScript(function (element) {
                element.scrollIntoView(false);
            },
                webelement.getWebElement());

        }
    };

    _hasAttr = {
        value: function (el, att) {
            browser.executeScript("return arguments[0].hasAttribute(arguments[1]);", el.getWebElement(), att);
        }
    };

    this.inForceDate = function () { return _inForceDate.getText(); };
    this.temporality = function () { return _temporality.getText(); };
    this.ineffectiveNote = function () { return _ineffectiveNote.getText(); };
    this.ineffectiveNoteTextNew = function () { return _ineffectiveNoteTextNew.getText(); };
    this.hasSeeMoreLink = function () { return _seeMoreLink.isPresent(); };

    this.DateForce = function () { return _DateForce.getText(); };
    this.EffectiveType = function () { return _EffectiveType.getText(); };
    this.IneffectiveDate = function () { return _IneffectiveDate.getText(); };
    this.IneffectiveNote = function () { return _ineffectiveNote.getText(); };

    this.clickSeeMoreLink = {
        function() {
            this._scrollTo(this._seeMoreLink);
            return this._seeMoreLink.click();
        }
    };

    var _expandButton = element(by.id('linkUncollapseValidityDataSection'));
    var _collapseButton = element(by.id('linkCollapseValidityDataSection'));


    this.isExpanded = function () {
        return _collapseButton.isPresent();
    };

    this.isCollapsed = function () {
        return _expandButton.isPresent();
    };


    this.expandSection = function () {
        _expandButton.click();
    };

    this.collapseSection = function () {
        _collapseButton.click();
    };

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

    var _DateForceNew = element(by.css('[ng-controller="DocumentSectionValidityController as sectionValidityController"] input[ng-model="date"]'));
    this.changeInDateInForce = function (value) {
         _DateForceNew.clear();
         _DateForceNew.sendKeys(value);

    };

    this.changeIneffectiveType = function (ineffectivetypeoptions) {
         _EffectiveTypeNew.click();
        return element.all(by.css('[ng-repeat="type in sectionValidityController.effectiveTypesList"]')).filter(function (elem, index) {
            return browser.executeScript('return arguments[0].innerHTML;', elem.getWebElement()).then(function (txt) {
                //return txt.indexOf(code,0)!=-1;
                return (txt < ineffectivetypeoptions ? false : (txt > ineffectivetypeoptions ? false : true));
            });

        }).first().click();
    };

    this.enterdateIntoIneffectiveDate = function (value) {
         _IneffectiveDateNew.clear();
         _IneffectiveDateNew.sendKeys(value);

    };

    this.enterIneffectiveNote = function (value) {
         _ineffectiveNoteNew.clear();
         _ineffectiveNoteNew.sendKeys(value);
    };

    this.getTextofDateInForceExpandSection = function () {

        return element(by.css('.col-md-8.border-sides-detail-border-top.right-label-height-grey')).getText;

    };

    this.isTextofDateInForceExpandSectionEmpty = function () {

        return element(by.css('.col-md-8.border-sides-detail-border-top.right-label-height-grey')).isPresent;

    };

    this.clickAddButton = function () {

        element.all(by.id('btnAddfixSection')).get(1).click();
    };

    this.selectcode = function (value) {

        element(by.model('inputLabel')).click();
        return element(by.model('inputLabel')).sendKeys(value);
    };

    var _calculatebutton = element(by.id('validation-id'));


    this.clickcalculate = function () {
        _calculatebutton.click();
    };


    var _add = element(by.css('button[translate="Common.Add"]'));

    this.clickadd = function () {
        _add.click();
    };

    this.clickCopyButton = function () {
        element.all(by.id('btnCopyfixSection')).get(1).click();
    };

    var _copyButtonOnCopyDocPopup = element(by.css('button[translate="Common.Copy"]'));

    this.clickCopyOnCopyDocPopup = function () {
        _copyButtonOnCopyDocPopup.click();
    };

    this.getTextofDateForce = function () {

        return element(by.css('#textDateForceValueValidityDataSection')).getText();
    };

    this.getTextofEffectiveType = function () {

        return element(by.css('#textEffectiveTypeValueValidityDataSection')).getText();
    };

    this.getTextofInneffectiveDate = function (date) {

        return element(by.xpath("//span[@class='detail-value ng-scope ng-binding'][contains(text(),'" +date+ "')]")).getText();
    };

  //this function is used to check whethre all the fields of "date in force"  are displayed or not after expanding the section

    this.isFieldPresent = function(fieldname){

         return element(by.xpath("//span[@class='class-title-body ng-binding'][contains(text(),'" +fieldname+ "')]")).isPresent();

    };


};

module.exports = new LegislationDateInForceSection();