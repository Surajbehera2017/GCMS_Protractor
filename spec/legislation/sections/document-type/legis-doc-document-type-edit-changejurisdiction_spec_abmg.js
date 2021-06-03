var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var DocTypetestData = testData.legislation.sections.document_type;
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
describe('Legislation Document Display - Document Type section', function () {
var LoginPage = require('../../../../po/login.po.js');

	beforeAll(function () {
       
  //browser.ignoreSynchronization = true;
        //browser.driver.manage().window().maximize();
        //var loginPage = new LoginPage();
        //loginPage.get().then(function () {
            //loginPage.setLanguage(params.language).then(function (loginPage) {
                //loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {

        browser.ignoreSynchronization = false;
    var legisDocEditPage = new LegislationDocumentEditionPage();
        legisDocEditPage.get(testData.legislation.sections.document_type.marginal_id_p_1);
                
               //browser.sleep(15000);
                     var loginpopup =  element(by.model('credentials.username'));
    loginpopup.isPresent().then(function(result) {
    if ( result ) {
       element(by.model('credentials.username')).sendKeys(params.valid_username);
       element(by.model('credentials.password')).sendKeys(params.valid_password);
       element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
        browser.waitForAngular();
        
        } else {
        
    }
	               });
                    
				//});
           // });
       // });
    });
    xit('should verify the error message for change a jurisdiction', function () {
        if (params.BU != 'gulf') {
            var legisDocEditPage = new LegislationDocumentEditionPage();
            var documentTypeSection = legisDocEditPage.sections.collectiveAgreementSection;
            documentTypeSection.DocumentTypeexpandable.expand.then(function () {
                expect(documentTypeSection.hasjurisdiction).toEqual(true);
              documentTypeSection.addjurisdiction(DocTypetestData.changeValidationJurisdiction).then(function () {
                    documentTypeSection.save;
                    documentTypeSection.errorMessage.then(function (errormsg) {
                        expect(errormsg).toContain(DocTypetestData.errormessage);
                        legisDocEditPage.clickonOk;
                    });
                });
                //changing to new jurisdication from old one
                documentTypeSection.addjurisdiction(DocTypetestData.changeToJurisdiction).then(function () {
                    legisDocEditPage.save.then(function () {
                        expect(documentTypeSection.title).toEqual(I18n.legisDocDisplay.title);
                    });
                });

            });
        } else if (params.BU == 'gulf') {
            var legisDocEditPage = new LegislationDocumentEditionPage();
            var documentTypeSection = legisDocEditPage.sections.collectiveAgreementSection;
            documentTypeSection.DocumentTypeexpandable.expand.then(function () {
                expect(documentTypeSection.hasjurisdiction).toEqual(true);
                documentTypeSection.addjurisdiction(DocTypetestData.changeToJurisdiction).then(function () {
                    legisDocEditPage.save.then(function () {
                        expect(documentTypeSection.title).toEqual(I18n.legisDocDisplay.title);
                    });
                });

            });
        }
    });

  
});
    
                                                   

