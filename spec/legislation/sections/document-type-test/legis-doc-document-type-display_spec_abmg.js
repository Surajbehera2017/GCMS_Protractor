var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');

describe('Legislation Document Display - Document Type section', function () {

 
  
    xit('should be display The following fields are documet type,base language...etc.', function () {
        /*browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();
        loginPage.get().then(function () {
            loginPage.setLanguage(params.language).then(function (loginPage) {
                loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) { */

        browser.ignoreSynchronization = false;
          var legisDocDisplayPage = new LegislationDocumentDisplayPage();  
               legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id_Doc_Type);
                 browser.waitForAngular();   
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
                    
                    
                    if (params.BU == 'spain' || params.BU == 'gulf') {
            var legisDocDisplayPage = new LegislationDocumentDisplayPage();
            var documentTypeSection = legisDocDisplayPage.sections.documentType;
            expect(documentTypeSection.expandable.isExpanded).toEqual(false);
            documentTypeSection.expandable.expand.then(function () {
                expect(documentTypeSection.documentType).toEqual(testData.legislation.sections.document_type.doc_type);
                expect(documentTypeSection.baseLanguage).toEqual(testData.legislation.sections.document_type.base_lang);
                expect(documentTypeSection.hasOfficialLanguage).toEqual(true);
                var languages = testData.legislation.sections.document_type.multilingual_languages;
                expect(documentTypeSection.languages).toEqual(languages);
                languages.forEach(function (language) {
                    expect(documentTypeSection.hasLanguage(language)).toEqual(true);
                });
            });
            expect(documentTypeSection.hasJurisdiction).toEqual(true);
        } else if (params.BU == 'br' || params.BU == 'mex') {
            var legisDocDisplayPage = new LegislationDocumentDisplayPage();
            var documentTypeSection = legisDocDisplayPage.sections.documentType;
            documentTypeSection.expandable.expand.then(function () {
                expect(documentTypeSection.documentType).toEqual(testData.legislation.sections.document_type.orginalDoctype);
                expect(documentTypeSection.JurisdictionDisplay).toEqual(testData.legislation.sections.document_type.OrginalJurisdiction);
            });
        }

                    
                    
                    
                    
           //      });
         //   });
       // });
     });
});
    
    
                                                   

