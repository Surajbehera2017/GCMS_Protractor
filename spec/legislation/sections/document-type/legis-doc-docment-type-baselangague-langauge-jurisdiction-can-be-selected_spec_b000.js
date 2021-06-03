var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LoginPage = require('../../../../po/login.po.js');

var section;
var legisDocDisplayPage;
var enter;
describe('Legislation Document Display - Bill table display', function () {

    beforeEach(function () {

        /*browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();

		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
				loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                    
                    
                       
				});
			});
		});*/
        browser.ignoreSynchronization = false;
        legisDocDisplayPage = new LegislationDocumentDisplayPage();

        section = legisDocDisplayPage.sections.bills;

    });


    it('should  base langague type can be selected', function () {

        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
        var loginpopup = element(by.model('credentials.username'));
        loginpopup.isPresent().then(function (result) {
            if (result) {
                element(by.model('credentials.username')).sendKeys(params.valid_username);
                element(by.model('credentials.password')).sendKeys(params.valid_password);
                element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
                browser.waitForAngular();

            } else {
            }
        });

        section.clickAddButtonBill.then(function () {
            section.selectcode(testData.legislation.sections.bills.document_code).then(function () {
                section.clickCalculationButton.then(function () {
                    section.clickAddPopupButton.then(function () {
                        section.clickGeneral.then(function () {
                            section.selectDocument.then(function () {
                                var legisDocDisplayPage = new LegislationDocumentDisplayPage();
                                var sections = legisDocDisplayPage.sections.documentType;
                                sections.clickBaseLanguage.then(function () {
                                    sections.selectBaseLanguage.then(function () {
                                    });
                                });

                            });
                        });
                    });
                });
            });


        });

    });

    it('should official langague type can be selected', function () {

        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
        var loginpopup = element(by.model('credentials.username'));
        loginpopup.isPresent().then(function (result) {
            if (result) {
                element(by.model('credentials.username')).sendKeys(params.valid_username);
                element(by.model('credentials.password')).sendKeys(params.valid_password);
                element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
                browser.waitForAngular();

            } else {
            }
        });

        section.clickAddButtonBill.then(function () {
            section.selectcode(testData.legislation.sections.bills.document_code).then(function () {
                section.clickCalculationButton.then(function () {
                    section.clickAddPopupButton.then(function () {
                        section.clickGeneral.then(function () {
                            section.selectDocument.then(function () {
                                var legisDocDisplayPage = new LegislationDocumentDisplayPage();
                                var sections = legisDocDisplayPage.sections.documentType;
                                sections.clickBaseLanguage.then(function () {
                                    sections.selectBaseLanguage.then(function () {
                                        sections.clickLangagaue.then(function () {
                                            sections.clickCheckBoxLangauge.then(function () {
                                            });
                                        });
                                    });
                                });
                            });

                        });
                    });
                });
            });
        });
    });

    it('should Jurisdiction type can be selected', function () {

        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
        var loginpopup = element(by.model('credentials.username'));
        loginpopup.isPresent().then(function (result) {
            if (result) {
                element(by.model('credentials.username')).sendKeys(params.valid_username);
                element(by.model('credentials.password')).sendKeys(params.valid_password);
                element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
                browser.waitForAngular();

            } else {
            }
        });

        section.clickAddButtonBill.then(function () {
            section.selectcode(testData.legislation.sections.bills.document_code).then(function () {
                section.clickCalculationButton.then(function () {
                    section.clickAddPopupButton.then(function () {
                        section.clickGeneral.then(function () {
                            section.selectDocument.then(function () {
                                var legisDocDisplayPage = new LegislationDocumentDisplayPage();
                                var sections = legisDocDisplayPage.sections.documentType;
                                sections.clickBaseLanguage.then(function () {
                                    sections.selectBaseLanguage.then(function () {
                                        sections.clickLangagaue.then(function () {
                                            sections.clickCheckBoxLangauge.then(function () {
                                                sections.clickListJurisdiction.then(function () {
                                                    sections.selectJurisdiction.then(function () {
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

