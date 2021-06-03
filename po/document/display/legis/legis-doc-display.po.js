var Sections = require('./sections/sections.po.js');
var LegislationProductWorkbench = require('./sections/product-workbench/product-workbench.po.js');
//var DocumentStructure=require('../../../../po/document/display/legis/sections/document-structure/document-structure.po.js');
//var ContextIndex=require('../po/document/display/legis/sections/context-index/context-index.po.js');
var ContextIndexSection = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
//var AuthorNotes=require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var LegislationDictionarySection = require('../../../../po/document/display/legis/sections/legislation-dictionary/legislation-dictionary.po.js');
var LegislationRelationshipSection = require('../../../../po/document/display/legis/sections/relationship-section/relationship-sectionnew.po.js');
var LegislativeDateInForceSection = require('./sections/date-in-force/date-in-force.po.js');
var LegislationStatuteDataSection = require('../../../document/edition/legis/sections/statute-data/statute-data.po.js');
var LegislativeBodySection = require('../../../document/edition/legis/sections/legislative-body/legislative-body.po.js');

var LegislationDocumentDisplayPage = function () {
    this.get = function (docId) {
        //return browser.get('v2/gcms-ui/index.html#/document?docId=' + docId);
        browser.get('static/gcms-ui/index.html#/document?docId=' + docId);
        browser.sleep(1000);
        browser.getCurrentUrl().then(function (currentUrlVal) {
            console.log('Url is ' + currentUrlVal);
            if (currentUrlVal === 'about:blank') {
                // browser.getAllWindowHandles().then(function(handles) {
                //     console.log('Handle # ' + handles.length);
                //     browser.switchTo().window(handles[0]);
                //     for(var i=1;i<handles.length;i++){
                //         browser.switchTo().window(handles[i]).then(function () {
                //             //browser.close();
                //             browser.driver.close();
                //         });
                //     }
                // });

                browser.driver.refresh();
                browser.sleep(2000);
                return browser.get('static/gcms-ui/index.html#/document?docId=' + docId);
            }
            if (currentUrlVal.indexOf(docId) >= 0) {

                if (currentUrlVal.includes('qc')) {

                     if(currentUrlVal.includes('arz')){
                     browser.driver.get('https://qc-gcms-arz.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                     }
                     else if(currentUrlVal.includes('mex')){
                    browser.driver.get('https://qc-gcms-mex.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                     }
                     else if(currentUrlVal.includes('br')){
                        browser.driver.get('https://qc-gcms-br.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                     }
                     else{
                    browser.driver.get('https://qc-gcms-gulf.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);  
                     }
                }
                else {

                    if(currentUrlVal.includes('arz')){
                        browser.driver.get('https://client-gcms-arz.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                        }
                        else if(currentUrlVal.includes('mex')){
                       browser.driver.get('https://client-gcms-mex.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                        }
                        else if(currentUrlVal.includes('br')){
                           browser.driver.get('https://client-gcms-br.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);
                        }
                        else{
                       browser.driver.get('https://client-gcms-gulf.int.thomsonreuters.com/static/gcms-ui/index.html#/document?docId=' + docId);  
                        }
                }
            }
            else {

            }
            return;
        });


    };
    //this.sections = new Sections();
    this.sections = {};
    //this.LegislationAuthorNoteSection =new LegislationAuthorNoteSection();
    //this.documentStructure= new DocumentStructure();
    //this.contextIndex=new ContextIndex();
    this.contextIndexSection = ContextIndexSection;
    // this.authorNotes=new AuthorNotes();
    this.LegislationDictionarySection = LegislationDictionarySection;
    this.LegislationRelationshipSection = new LegislationRelationshipSection();
    this.sections.dateInForceSection = new LegislativeDateInForceSection();
    this.sections.productWorkbench = new LegislationProductWorkbench();
    this.sections.statuteData = LegislationStatuteDataSection;
    this.sections.legislativeBodySection = LegislativeBodySection;

};

LegislationDocumentDisplayPage.prototype = Object.create({}, {
    title: { get: function () { return browser.getTitle(); } },

    //marginal: {get: function () {return element(by.css('[ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).getText();}},

    marginal: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).getText(); } },

    //range: {get: function () {return element(by.css('[ng-bind="documentheader.documentation.data.document.rangos.list[0].rango.description"]')).getText();}},

    range: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@ng-bind="documentheader.documentation.data.document.rangos.list[0].rango.description"]')).getText(); } },


    //docnum: {get: function () {return element(by.css('[ng-bind="documentheader.documentation.data.document.rangos.list[0].numeros.list[0].numdn"]')).getText();}},

    docnum: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@ng-bind="documentheader.documentation.data.document.rangos.list[0].numeros.list[0].numdn"]')).getText(); } },

    //lawarea: {get: function () {return element(by.css('[ng-bind="documentheader.documentation.findAreaPracticeMain()"]')).getText();}},

    lawarea: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="area-practice"]')).getText(); } },

    splitdisplay: { get: function () { return element(by.css('#content-document div div div')).getText(); } },

    /*abstract: {get: function () {return element(by.css('[originaltext^="documentheader.documentation.data.document.abstractMultilang.officialAbstractsHtml.list | multilang"] p')).getText();}},*/

    abstract: { get: function () { return element(by.binding('documentheader.abstractHeader | plaintext')).getText(); } },


    text: { get: function () { return element(by.id('previewDoc')).getText(); } },

    _addButton: { get: function () { return element.all(by.css('#btnAddfixSection')).get(1); } },
    hasAddButton: { get: function () { return this._addButton.isDisplayed(); } },
    isAddButtonEnabled: { get: function () { return this._addButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    clickAddButton: { get: function () { return browser.executeScript('return document.getElementById(\'btnAddfixSection\').click();', ''); } },

    _copyButton: { get: function () { return browser.driver.findElement(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="btnCopyfixSection"]')); } },
    hasCopyButton: { get: function () { return this._copyButton.isDisplayed(); } },
    isCopyButtonEnabled: { get: function () { return this._copyButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    //clickCopyButton: {get: function () {return this._copyButton.click(); }},
    clickCopyButton: { get: function () { return browser.executeScript('return document.getElementById(\'btnCopyfixSection\').click();', ''); } },

    isCopyButtonDisplayed: { get: function () { return browser.executeScript('return document.getElementById(\'btnCopyfixSection\').style.visibility !== \'hidden\';', ''); } },


    _copyButtonOnCopyDocPopup: { get: function () { return element(by.css('button[translate="Common.Copy"]')); } },

    clickCopyOnCopyDocPopup: { get: function () { return this._copyButtonOnCopyDocPopup.click(); } },

    _editButton: { get: function () { return element.all(by.id('btnGoToEditMode')).get(1); } },
    hasEditButton: { get: function () { return this._editButton.isDisplayed(); } },
    isEditButtonEnabled: { get: function () { return this._editButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    clickEditButton: { get: function () { return this._editButton.click(); } },

    _deleteButton: { get: function () { return element.all(by.id('btnDeletefixSection')).get(1); } },
    hasDeleteButton: { get: function () { return this._deleteButton.isDisplayed(); } },
    isDeleteButtonEnabled: { get: function () { return this._deleteButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    clickDeleteButton: { get: function () { return element(by.xpath('//div[@class="col-md-10"]//*[@id="btnDeletefixSection"]')).click(); } },

    gobackButton: { get: function () { return element.all(by.id('btnGoBack')).get(1); } },
    hasbackButton: { get: function () { return this._gobackButton.isDisplayed(); } },
    clickgobackButton: { get: function () { return this._gobackButton.click(); } },

    hasDeleteModal: { get: function () { return this._confirmDeleteButton.isPresent(); } },

    _confirmDeleteButton: { get: function () { return element(by.css('button[name="btnConfirmationDialogAccept"]')); } },

    clickConfirmDeleteButton: { get: function () { return this._confirmDeleteButton.click(); } },

    _cancelDeleteButton: { get: function () { return element(by.css('[name="btnConfirmationDialogCancel"]')); } },
    clickCancelDeleteButton: { get: function () { return this._cancelDeleteButton.click(); } },

    _cancelDeleteExportButton: { get: function () { return element(by.xpath('.//*[@id="body"]/div[2]/div/div/form/div[4]/button[1]')); } },
    clickCancelDeleteExportButton: { get: function () { return this._cancelDeleteExportButton.click(); } },

    _closeDeleteConfirmationButton: { get: function () { return element(by.css('button[ng-click="cancel()"]')); } },
    clickCloseDeleteConfirmationButton: { get: function () { return this._closeDeleteConfirmationButton.click(); } },

    _printButton: { get: function () { return element(by.xpath('//div[@class="col-md-10"]//*[@id="btnPrintfixSection"]')); } },

    hasPrintButton: { get: function () { return this._printButton.isDisplayed(); } },
    isPrintButtonEnabled: { get: function () { return this._printButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    clickPrintButton: { get: function () { return this._printButton.click(); } },

    _exportButton: { get: function () { return element.all(by.id('btnExportfixSection')).get(1); } },
    hasExportButton: { get: function () { return this._exportButton.isDisplayed(); } },
    isExportButtonEnabled: { get: function () { return this._exportButton.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    clickExportButton: { get: function () { return this._exportButton.click(); } },

    package: { get: function () { return element(by.model('packagingSubType')).getText(); } },

    _languageSelect: { get: function () { return element(by.id('document-lenguage-combo')); } },
    hasLanguageSelect: { get: function () { return this._languageSelect.isDisplayed(); } },
    hasLanguageOption: { get: function () { return false } }, // TODO
    languageOption: {
        get: function () { return false }, // TODO
        set: function (value) { return false } // TODO
    },

    _navigationInput: { get: function () { return element.all(by.id('textNavigationNumberfixSection')).get(1); } },
    _navigationButton: { get: function () { return element(by.id('document-header-paged-btn')); } },
    hasNavigationInput: { get: function () { return this._navigationInput.isDisplayed(); } },
    isNavigationInputEnabled: { get: function () { return this._navigationInput.getAttribute('disabled').then(function (disabled) { return disabled == null; }); } },
    navigationInput: {
        get: function () { return this._navigationInput.getText(); },
        set: function (value) { return this._navigationInput.sendKeys(value); }
    },

    _firstDocumentButton: { get: function () { return element.all(by.id('btnfirstNavigationfixSection')).get(1); } },
    hasFirstDocumentButton: { get: function () { return this._firstDocumentButton.isDisplayed(); } },
    isFirstDocumentButtonEnabled: { get: function () { return !browser.executeScript('return arguments[0].hasAttribute("disabled");', this._firstDocumentButton.getWebElement()); } },
    clickFirstDocumentButton: { get: function () { return this._firstDocumentButton.click(); } },

    //_previousDocumentButton: {get: function () { return element(by.id('btnPreviusNavigationfixSection')).get(1); }},
    // _previousDocumentButton: {get: function () { return element(by.xpath('//div[@class="btn-group"]//*[@id="btnPreviusNavigationfixSection"]')).get(2); }},
    _previousDocumentButton: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="btnPreviusNavigationfixSection"]')); } },

    hasPreviousDocumentButton: { get: function () { return this._previousDocumentButton.isDisplayed(); } },
    isPreviousDocumentButtonEnabled: {
        get: function () {
            return !browser.executeScript('return arguments[0].hasAttribute("disabled");', this._previousDocumentButton.getWebElement());
        }
    },
    clickPreviousDocumentButton: { get: function () { return this._previousDocumentButton.click(); } },

    _nextDocumentButton: { get: function () { return element.all(by.id('btnNextNavigationfixSection')).get(1); } },
    hasNextDocumentButton: { get: function () { return this._nextDocumentButton.isDisplayed(); } },
    isNextDocumentButtonEnabled: { get: function () { return !browser.executeScript('return arguments[0].hasAttribute("disabled");', this._nextDocumentButton.getWebElement()); } },
    clickNextDocumentButton: { get: function () { return this._nextDocumentButton.click(); } },

    _lastDocumentButton: { get: function () { return element.all(by.id('btnLastNavigationfixSection')).get(1); } },
    hasLastDocumentButton: { get: function () { return this._lastDocumentButton.isDisplayed(); } },
    isLastDocumentButtonEnabled: { get: function () { return !browser.executeScript('return arguments[0].hasAttribute("disabled");', this._lastDocumentButton.getWebElement()); } },
    clickLastDocumentButton: { get: function () { return this._lastDocumentButton.click(); } },

    isAddButtonDisabled: { get: function () { return this._addButton.getAttribute('disabled').then(function (disabled) { return disabled == true; }); } },

    _blockandunlockstaus: { get: function () { return element.all(by.xpath('//*[@ng-model="blockDocCtrl.lockStatus"]')).get(1); } },
    hasblockandunlockstaus: { get: function () { return this._blockandunlockstaus.isDisplayed(); } },
    clickblockandunlockstaus: { get: function () { return this._blockandunlockstaus.click(); } },

    _contentToggleBlock: { get: function () { return element.all(by.xpath('.//*[@id="contentToggleBlock"]/div/div')).get(1); } },
    clickcontentToggleBlock: { get: function () { return this._contentToggleBlock.click(); } },

    _unlockpad: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="contentToggleBlock"]/i[2]')); } },
    hasunlockpad: { get: function () { return this._unlockpad.isDisplayed(); } },

    _lockpad: { get: function () { return element(by.xpath('//div[@id="panel-fixed-minified"]//*[@id="contentToggleBlock"]/i[1]')); } },
    haslockpad: { get: function () { return this._lockpad.isDisplayed(); } },

    _lockpadButton: { get: function () { return element(by.xpath('.//*[@id="contentToggleBlock"]/div')); } },
    clickLockpad: { get: function () { return this._lockpadButton.click(); } },

    _popupOkButton: { get: function () { return element(by.css('button[ng-bind="primaryOption | translate"]')); } },
    haspopupOkButton: { get: function () { return this._lockpad.isDisplayed(); } },
    clickpopupOkButton: { get: function () { return this._popupOkButton.click(); } },

    _acceptOkButton: { get: function () { return element(by.css('button[ng-bind="acceptOption | translate "]')); } },
    hasAcceptOkButton: { get: function () { return this._acceptOkButton.isPresent(); } },
    clickacceptOkButton: { get: function () { return this._acceptOkButton.click(); } },

    _popupColseButton: { get: function () { return element(by.css('button[ng-bind="defaultOption | translate"]')); } },
    haspopupColseButton: { get: function () { return this._popupColseButton.isPresent(); } },
    clickpopupColseButton: { get: function () { return this._popupColseButton.click(); } },

    //_printoption: {get: function () { return element(by.xpath('//input[@onclick="presubmit(48);"]')); }},
    _printoption: { get: function () { return element(by.xpath('//td[@align="center"]//*[@class="buttonInform"]')); } },
    clickPrintOption: { get: function () { return this._printoption.click(); } },

    _gobackButton: { get: function () { return element(by.id('btnGoBack')); } },
    //clickgobackButton:{get: function () {return this._gobackButton.click(); }},
    _subMessage: { get: function () { return element(by.id = ('successMessage')); } },

    //added by punit joshi 24/05/2016

    selectcode: {
        value: function (code) {
            var self = this;

            return self._code.click().then(function () {
                return self.legistypevalue(code).click();
            });
        }
    },



    _code: { get: function () { return element(by.model('inputLabel')); } },



    legistypevalue: {
        value: function (code) {
            return element.all(by.css('li[ng-click="onItemClick($index)"]>span')).filter(function (elem, index) {
                return browser.executeScript('return arguments[0].innerHTML;', elem.getWebElement()).then(function (txt) {
                    //return txt.indexOf(code,0)!=-1;

                    return (txt < code ? false : (txt > code ? false : true));
                });

            }).first();
        }
    },

    _calculatebutton: { get: function () { return element(by.id('validation-id')) } },
    clickcalculate: {
        get: function () {
            return this._calculatebutton.click();
        }
    },
    _add: { get: function () { return element(by.css('button[translate="Common.Add"]')) } },
    clickadd: {
        get: function () {
            return this._add.click();
        }
    },

    _addpopup: { get: function () { return element(by.xpath('//div[@class="modal-footer btn-import"]//*[@class="btn btn-primary btn-medium ng-scope"]')); } },
    clickaddpopup: {
        get: function () {
            return this._addpopup.click();
        }
    },

    errorMessageCopyDoc: {
        get: function () {
            return element(by.css('[ng-bind="messageError"]')).getText();
        }
    },

    enterNumberOnCopyDocPopup: {
        get: function () {
            return element(by.css('[ng-model="model.number"]')).sendKeys('3');
        }
    },
    clickCancelOnCopydocPopup: {
        get: function () {
            return element(by.css('[translate="Common.Cancel"]')).click();
        }
    },
    isCancelOnAddDocPopupDisplayed: {
        get: function () {
            return element(by.css('[translate="Common.Cancel"]')).isDisplayed();
        }
    },
    isPopupNotDisplayed: {
        get: function () {
            return browser.executeScript('return document.getElementById(\'contentFormAdDocument\')===null;', '');
        }
    },
    clickOnOkDeleteNotPossible: {
        get: function () {
            return element(by.css('[name="btnInfoDialogOk"]')).click();
        }
    },
    errorMsgOnDeletingDocumentHavingRelationships: {
        get: function () {
            return element(by.css('[name="txtInfoDialog"]')).getText();
        }
    },
    isMarginalNumberDisplayed: {
        get: function () {
            return element(by.css('[id="addDocumentFile"]>div>select')).isDisplayed();
        }
    },
    isImportDisplayed: {
        get: function () {
            return element(by.css('[translate="AddNewDocument.import"]')).isDisplayed();
        }
    },
    isMarginalNumberEnabled: {
        get: function () {
            return element(by.css('[id="addDocumentFile"]>div>select')).isEnabled();
        }
    },
    isImportEnabled: {
        get: function () {
            return element(by.css('[translate="AddNewDocument.import"]')).isEnabled();
        }
    },
    isPopupDisplayed: {
        get: function () {
            return element(by.css('[class="modal-header header-import"]')).isDisplayed();
        }
    },
    enterYear: {
        value: function (year) {
            return element(by.css('[id="year"]')).clear().then(function () {
                return element(by.css('[id="year"]')).sendKeys(year);
            });
        }
    },
    getNumber: {
        get: function () {
            return element(by.css('[ng-model="model.number"]')).getAttribute('value');
        }
    },
    enterNumber: {
        value: function (no) {
            return element(by.css('[ng-model="model.number"]')).clear().then(function () {
                return element(by.css('[ng-model="model.number"]')).sendKeys(no);
            });
        }
    },
    getMarginalNumber: {
        get: function () {
            return element.all(by.css('[ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).get(1).getInnerHtml();
        }
    },
    getMarginalNumber2: {
        get: function () {
            return element.all(by.css('[ng-bind="documentheader.documentation.data.document.marginal.numeroMarginal"]')).get(2).getInnerHtml();
        }
    },

    enterText: {
        get: function () {
            return element(by.css('[ng-model="model.text"]')).clear().then(function () {
                return element(by.css('[ng-model="model.text"]')).sendKeys('Test');
            });
        }
    },
    getErrorMsg: {
        get: function () {
            return element.all(by.css('[class="toast-message"]')).get(0).getText();
        }
    },
    getErrorMsg1: {
        get: function () {
            return element.all(by.css('[class="toast-message"]')).get(2).getText();
        }
    },
    getErrorMsg2: {
        get: function () {
            return element.all(by.css('[class="toast-message"]')).get(1).getText();
        }
    },


    selectLanguage: {
        get: function () {
            return element.all(by.css('[class="dropdown-icon user-menu"]')).get(1).click().then(function () {
                return element(by.css('[ng-click="menu.changeLanguage(\'es\')"]')).click();
            });
        }
    },
});

module.exports = LegislationDocumentDisplayPage;