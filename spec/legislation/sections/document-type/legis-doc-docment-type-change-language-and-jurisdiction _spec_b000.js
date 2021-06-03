var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LoginPage = require('../../../../po/login.po.js');





describe('Legislation Document Display - Document Type section', function () {

	beforeEach(function () {
        
       // browser.ignoreSynchronization = true;
        //browser.driver.manage().window().maximize();
        //var loginPage = new LoginPage();

		//loginPage.get().then(function () {
			//loginPage.setLanguage(params.language).then(function (loginPage) {
				//loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                    
                    browser.ignoreSynchronization = false;
                    
		//legisDocDisplayPage.get(1576073);
        
                    
                     
                       
				//});
			//});
		//});
    });

	it('should change langauges', function () {
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id);
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
        browser.waitForAngular();
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var legisEditDisplayPage = new LegislationDocumentEditionPage();
        var section = legisDocDisplayPage.sections.documentType;
        
             section.clickEdit.then(function () { 
             section.expandGeneralData.then(function () { 
             section.clickLangagaue.then(function () { 
             section.clickListLangauge.then(function () {
             section.selectLangauge.then(function () {
             legisEditDisplayPage.clickSave.then(function(){
                   
               });
             });
           });
	});

    });
    
    });
    });
    
    it('should change official langauges indicator', function () {
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id);
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
        browser.waitForAngular();
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var legisEditDisplayPage = new LegislationDocumentEditionPage();
        var section = legisDocDisplayPage.sections.documentType;
        
             section.clickEdit.then(function () { 
             section.expandGeneralData.then(function () { 
             expect(section.displayDocumentType).toEqual(true);
              //expect(section.displayBaseLangauge).toEqual(true);
              expect(section.displayLangauge).toEqual(true);
                 expect(section.displayJurisdiction).toEqual(true);
                  section.clickLangagaue.then(function () {
                    section.clickCheckBoxLangauge.then(function () {  
                  legisEditDisplayPage.clickSave.then(function(){
                   
               });
                    });
                  });

    });
    
    });
    });
    
    it('should delete langauges', function () {
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id);
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
        browser.waitForAngular();
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var legisEditDisplayPage = new LegislationDocumentEditionPage();
        var section = legisDocDisplayPage.sections.documentType;
        
             section.clickEdit.then(function () { 
             section.expandGeneralData.then(function () { 
             
                  section.clickLangagaue.then(function () {
                    section.deleteLangauge.then(function () {  
                        
                  legisEditDisplayPage.clickSave.then(function(){
                   
               });
                    });
                  });

    });
    
    });
    });
    
    it('should change  Jurisdiction', function () {
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id);
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
        browser.waitForAngular();
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        var legisEditDisplayPage = new LegislationDocumentEditionPage();
        var section = legisDocDisplayPage.sections.documentType;
        
             section.clickEdit.then(function () { 
             section.expandGeneralData.then(function () { 
             section.clickListJurisdiction.then(function () {
             section.selectJurisdiction.then(function () {
             legisEditDisplayPage.clickSave.then(function(){
                   
               
             });
           });
	});

    });
    
    });
    });
});
