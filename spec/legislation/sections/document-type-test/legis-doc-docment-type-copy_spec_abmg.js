var params = browser.params;
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

describe('Legislation Document Display-Copy Document', function () {

  
xit('Should click on Copy and select a Code,click on Calculate button', function () {
    
  /*  browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();
        loginPage.get().then(function () {
            loginPage.setLanguage(params.language).then(function (loginPage) {
                loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) { */

        browser.ignoreSynchronization = false;
          var legisDocDisplayPage = new LegislationDocumentDisplayPage();  
               legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id_Doc_Type);
                // });
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
                
                
var orginalDoctype;
var  OrginalbaseLanguage;
var  OrginalofficialLanguage;
var  OrginalJurisdiction;
    
  
      //var legisDocDisplayPage = new LegislationDocumentDisplayPage();  
      //var documentTypeSection = legisDocDisplayPage.sections.documentType;
       /* expect(documentTypeSection.expandable.isExpanded).toEqual(false);
        documentTypeSection.expandable.expand.then(function () {
        expect(documentTypeSection.expandable.isExpanded).toEqual(true);
        documentTypeSection.documentType.then(function (documentType){
            var orginalDoctype=documentType;
            console.log(orginalDoctype);
		});
      documentTypeSection.baseLanguage.then(function (baselanguage){
          var OrginalbaseLanguage=baselanguage;
          console.log(OrginalbaseLanguage);
      });
       documentTypeSection.officialLanguage.then(function (officialLanguage){
          var OrginalofficialLanguage=officialLanguage;
          console.log(OrginalofficialLanguage);
      });
     
       documentTypeSection.Jurisdiction.then(function (Jurisdiction){
          var OrginalJurisdiction=Jurisdiction;
          console.log(OrginalJurisdiction);
      });
          
    });*/
    
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var documentTypeSection = legisDocDisplayPage.sections.documentType;
        //expect(documentTypeSection.hasDocTypeCopyButton).toEqual(true);
                browser.waitForAngular();
        documentTypeSection.clickDocTypeCopyButton.then(function () {
            //expect(documentTypeSection.hasCopyDocPopup).toEqual(true);
            
            documentTypeSection.selectcode.then(function () {
            documentTypeSection.clickcalculate.then(function () {
            documentTypeSection.clickCopyButton.then(function () {
            expect(legisDocDisplayPage.title).toEqual(I18n.legisDocDisplay.title);
                    });
                });
            });
        });
     expect(documentTypeSection.expandableEdit.isExpanded).toEqual(false);
        documentTypeSection.expandableEdit.expand.then(function () {
            expect(documentTypeSection.expandableEdit.isExpanded).toEqual(true);
            if (params.BU == 'gulf') {
                expect(documentTypeSection.gulfdocumentTypeEditvalue).toEqual(testData.legislation.sections.document_type.orginalDoctype)
                documentTypeSection.baseLanguageEditPage.then(function (baseLanguage) {
                    var baseLanguagetext1 = baseLanguage.trim();
                    expect(baseLanguagetext1).toEqual(testData.legislation.sections.document_type.OrginalbaseLanguage);
              documentTypeSection.GulfofficiallanguageEditPage1.then(function (OrginalofficialLanguage) {
                       var gulfOfficialLanguagetext1 = OrginalofficialLanguage.trim();       expect(gulfOfficialLanguagetext1).toEqual(testData.legislation.sections.document_type.OrginalofficialLanguage);
                     expect(documentTypeSection.JurisdictionEdit).toEqual(testData.legislation.sections.document_type.OrginalJurisdiction);
                });
                });
            } else if(params.BU == 'spain') {
               
                expect(documentTypeSection.documentTypeEditvalue).toEqual(testData.legislation.sections.document_type.orginalDoctype)
                documentTypeSection.baseLanguageEditPage1.then(function (baseLanguage) {
                    var baseLanguagetext1 = baseLanguage.trim();
                    expect(baseLanguagetext1).toEqual(testData.legislation.sections.document_type.OrginalbaseLanguage);
                    expect(documentTypeSection.hasOfficiallanguageEditPage).toEqual(true);
                    documentTypeSection.OfficiallanguageEditPage1.then(function (OrginalofficialLanguage) {
                       var OfficialLanguagetext1 = OrginalofficialLanguage.trim(); expect(OfficialLanguagetext1).toEqual(testData.legislation.sections.document_type.OrginalofficialLanguage);
                     expect(documentTypeSection.JurisdictionEdit).toEqual(testData.legislation.sections.document_type.OrginalJurisdiction);
                });
                });
        }else if(params.BU=='mex'){
            //it verify the doc type and jurisdication for  mex BUs
            //expect(documentTypeSection.hasDocumentTypeEdit).toEqual(true);
            //expect(documentTypeSection.hasJurisdictionEdit).toEqual(true);
            //using same gulf document type mex 
 expect(documentTypeSection.gulfdocumentTypeEditvalue).toEqual(testData.legislation.sections.document_type.orginalDoctype)
expect(documentTypeSection.JurisdictionEdit).toEqual(testData.legislation.sections.document_type.OrginalJurisdiction);
        }else
            //it verify the doc type and jurisdication for br BUs
expect(documentTypeSection.brdocumentTypeEditvalue).toEqual(testData.legislation.sections.document_type.orginalDoctype)
expect(documentTypeSection.JurisdictionEdit).toEqual(testData.legislation.sections.document_type.OrginalJurisdiction);
   
});
                
         //   });
       // });
    
    
});
    
    

    
});


