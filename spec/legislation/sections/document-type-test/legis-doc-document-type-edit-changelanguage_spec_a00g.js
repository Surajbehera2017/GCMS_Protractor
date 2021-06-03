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

    

    xit('should change the language under document type section', function () {
        
       /* browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();
        loginPage.get().then(function () {
            loginPage.setLanguage(params.language).then(function (loginPage) {
                loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) { */

        browser.ignoreSynchronization = false;
                    
                    
                    var legisDocEditPage = new LegislationDocumentEditionPage();
        legisDocEditPage.get(testData.legislation.sections.document_type.marginal_id_Edit_Doc_Type);
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
                    
         /*documentTypeSection = legisDocEditPage.sections.documentType;
         documentTypeSection.expandableEdit.expand.then(function () {
            documentTypeSection.hassecondlanguage.then(function (isVisable) {
                if (isVisable === true) {
                    expect(documentTypeSection.hassecondlanguage).toEqual(true);
                    //documentTypeSection.clickaddnewlanguage.then(function() {
                   documentTypeSection.clicksecondLanguagedropDropdown.then(function () {
                    documentTypeSection.clickselectLanguage;
                      browser.sleep(30000);     
                })
                });
            };
        });
            });*/
  
                    
                    var legisDocEditPage = new LegislationDocumentEditionPage();
        var documentTypeSection = legisDocEditPage.sections.documentType;
        documentTypeSection.expandableEdit.expand.then(function () {
        documentTypeSection.clickaddnewlanguage.then(function() {
        documentTypeSection.clicksecondLanguagedropDropdown.then(function () {
        clickDropdownOptionWithGivenValue(documentTypeSection.selectlanguage, 5);
        });
        });
        });
         if (params.BU != 'gulf') {
        var legislativebodypage = new LegislationDocumentEditionPage();
        var LegislativebodySection = legislativebodypage.sections.legislativeBodySection;
        LegislativebodySection.expandable.expand.then(function () {
        LegislativebodySection.clickMainKeyWordcolobule.then(function () {
LegislativebodySection.add(testData.legislation.sections.legislativebody.statute_note).then(function () {
                    LegislativebodySection.ClickApply.then(function () {
                       

                    });
                    
                });

            });
        });
         }
         var legislativebodypage = new LegislationDocumentEditionPage();
         var LegislativebodySection = legislativebodypage.sections.legislativeBodySection;
         legislativebodypage.save.then(function () {
        expect(LegislativebodySection.title).toEqual(I18n.legisDocDisplay.title);
            });
                    
                    
           //      });
         //   });
       // });
        
  });
      var clickDropdownOptionWithGivenValue=function (element, optionNum) {
        if (optionNum) {
            var options = element.getWebElement().findElements(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();

         });
        }
    };
 

    
});
   
  
    
                                                   

