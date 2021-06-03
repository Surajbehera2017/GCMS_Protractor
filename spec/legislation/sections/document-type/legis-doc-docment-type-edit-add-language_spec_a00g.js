var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var DocTypetestData = testData.legislation.sections.document_type;

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LoginPage = require('../../../../po/login.po.js');
describe('Legislation Document Display - Document Type section', function () {

    beforeAll(function () {
        // browser.ignoreSynchronization = true;
        //browser.driver.manage().window().maximize();
        //var loginPage = new LoginPage();
       // loginPage.get().then(function () {
            //loginPage.setLanguage(params.language).then(function (loginPage) {
               // loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {

        browser.ignoreSynchronization = false;
       var legisDocEditPage = new LegislationDocumentEditionPage();
        legisDocEditPage.get(testData.legislation.sections.document_type.marginal_id_Edit_Doc_Type);
                    
                     var loginpopup =  element(by.model('credentials.username'));
    loginpopup.isPresent().then(function(result) {
    if ( result ) {
       element(by.model('credentials.username')).sendKeys('UX001254');
       element(by.model('credentials.password')).sendKeys('Naveen@trvdi17');
       element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
        browser.waitForAngular();
        
        } else {
        
    }
                          
       
	});
                    
                   var legisDocEditPage = new LegislationDocumentEditionPage();
        //it object also fecth the collctive aggrement functions and locators 
        var documentTypeSection = legisDocEditPage.sections.documentType;
        
                    browser.waitForAngular();
        documentTypeSection.expandableEdit.expand.then(function () {
            
            browser.waitForAngular();
            documentTypeSection.hassecondlanguage.then(function (isVisable) {
                if (isVisable === true) {
                    expect(documentTypeSection.hassecondlanguage).toEqual(true);
                    documentTypeSection.clicksecondlanguage.then(function () {
                        legisDocEditPage.save.then(function () {
                            expect(documentTypeSection.title).toEqual(I18n.legisDocDisplay.title);
                            legisDocDisplayPage = new LegislationDocumentDisplayPage
                            legisDocDisplayPage.clickEditButton.then(function () {

                            });
                        });
                    });
                }
            });
        });
                    
                 //});
           // });
        //});
        
    });

    it('should add language under document type section', function () {
          
       var legisDocEditPage = new LegislationDocumentEditionPage();
        var documentTypeSection = legisDocEditPage.sections.documentType;
        documentTypeSection.expandableEdit.expand.then(function () {
            documentTypeSection.clickaddnewlanguage.then(function () {
                documentTypeSection.clicksecondLanguagedropDropdown.then(function () {
                    documentTypeSection.clickselectLanguage;
                      browser.waitForAngular();     
                });
            });
        });
          var legislativebodypage = new LegislationDocumentEditionPage();
        var LegislativebodySection = legislativebodypage.sections.LegislativeBodySection
        LegislativebodySection.expandable.expand.then(function () {
          
            expect(LegislativebodySection.expandable.isExpanded).toEqual(true);
            browser.sleep(8000);
            LegislativebodySection.clickMainKeyWordcolobule.then(function () {
     LegislativebodySection.add(testData.legislation.sections.legislativebody.statute_note).then(function () {
		 browser.sleep(3000);
                    LegislativebodySection.ClickApply.then(function () {
                        legislativebodypage.save.then(function () {
                            expect(LegislativebodySection.title).toEqual(I18n.legisDocDisplay.title);
                        });

                    });
                });

            });
        });
        

    });
    
});
    
                                                   

