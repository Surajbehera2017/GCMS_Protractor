var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var LoginPage = require('../../../../po/login.po.js');




describe('Legislation Document Display - Document Type section', function () {

	beforeEach(function () {
        
        //browser.ignoreSynchronization = true;
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

	it('should display document type', function () {
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
        var section = legisDocDisplayPage.sections.documentType;
            section.expandGeneralData.then(function () { 
          
             expect(section.displayDocumentType).toEqual(true);
             
           
	});

    });
    
    it('should display base langague', function () {
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
        var section = legisDocDisplayPage.sections.documentType;
            section.expandGeneralData.then(function () { 
          
             
             expect(section.displayBaseLangauge).toEqual(true);
             
           
	});

    });
    
    it('should display langague', function () {
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
        var section = legisDocDisplayPage.sections.documentType;
            section.expandGeneralData.then(function () { 
            expect(section.displayLangauge).toEqual(true);
           
	});

    });
    
    it('should display  Jurisdiction ', function () {
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
        var section = legisDocDisplayPage.sections.documentType;
            section.expandGeneralData.then(function () { 
            expect(section.displayJurisdiction).toEqual(true);
           
	});

    });
    
    it('should display  official langague ', function () {
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
        var section = legisDocDisplayPage.sections.documentType;
            section.expandGeneralData.then(function () { 
            expect(section.displayOfficialLangague).toEqual(true);
           
	});

    });
    
});
