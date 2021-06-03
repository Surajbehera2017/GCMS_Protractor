var params = browser.params;
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
describe('Legislation Document Display-Create Document', function () {

   
 
    xit('should add/create a new document', function () {
      /*  browser.ignoreSynchronization = true;
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
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var documentTypeSection = legisDocDisplayPage.sections.documentType;
        expect(documentTypeSection.hasDocTypeAddButton).toEqual(true);
        documentTypeSection.clickDocTypeAddButton.then(function () {
            expect(documentTypeSection.hasNewDocPopup).toEqual(true);
            documentTypeSection.selectcode.then(function () {
                documentTypeSection.clickcalculate.then(function () {
                    documentTypeSection.clickadd.then(function () {
                        expect(legisDocDisplayPage.title).toEqual(I18n.legisDocDisplay.title);
                    });
                });

            });

        });
        expect(documentTypeSection.expandableEdit.isExpanded).toEqual(false);
        documentTypeSection.expandableEdit.expand.then(function () {
            expect(documentTypeSection.expandableEdit.isExpanded).toEqual(true);
            if (params.BU == 'gulf') {
                documentTypeSection.baseLanguageEditPage.then(function (baseLanguage) {
                    var baseLanguagetext1 = baseLanguage.trim();
                    expect(baseLanguagetext1).toEqual(testData.legislation.sections.document_type.base_lang1);
                      expect(documentTypeSection.hasOfficiallanguageEditPage1).toEqual(true);
                      expect(documentTypeSection.hasaddnewlanguage).toEqual(true);
                     expect(documentTypeSection.hasJurisdiction).toEqual(true);
                });
            } else if(params.BU == 'spain') {
                documentTypeSection.baseLanguageEditPage1.then(function (baseLanguage) {
                    var baseLanguagetext1 = baseLanguage;
                    expect(baseLanguagetext1).toEqual(testData.legislation.sections.document_type.base_lang1);
                    expect(documentTypeSection.hasOfficiallanguageEditPage).toEqual(true);
                    expect(documentTypeSection.hasaddnewlanguage).toEqual(true);
                    expect(documentTypeSection.hasJurisdiction).toEqual(true);
                });
        }else
            //it verify the doc type and jurisdication for br and mex BUs
            expect(documentTypeSection.hasDocumentTypeEdit).toEqual(true);
            expect(documentTypeSection.hasJurisdiction).toEqual(true);


        });

                    
                    
            //     });
          //  });
        //});
        
        

    });
});

