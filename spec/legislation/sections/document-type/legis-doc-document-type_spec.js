var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var LoginPage = require('../../../../po/login.po.js');




describe('Legislation Document Display - Document Type section', function () {

	beforeAll(function () {
        
        //browser.ignoreSynchronization = true;
        //browser.driver.manage().window().maximize();
       // var loginPage = new LoginPage();

		//loginPage.get().then(function () {
			//loginPage.setLanguage(params.language).then(function (loginPage) {
				//loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                    
                    browser.ignoreSynchronization = false;
                    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//legisDocDisplayPage.get(1576073);
        legisDocDisplayPage.get(testData.legislation.sections.document_type.marginal_id_p_2);
                    
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
                       
				});
			

	it('should be a legislation document', function () {
		// The value is hardcoded in spanish in the DataBase. Can't be translated.
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
       var section = legisDocDisplayPage.sections.documentType;
       expect(section.expandable.isExpanded).toEqual(false);
		section.expandable.expand.then(function () {
			expect(section.expandable.isExpanded).toEqual(true);
		}); expect(section.documentType).toEqual(testData.legislation.sections.document_type.doc_type);
        expect(section.baseLanguage).toEqual(testData.legislation.sections.document_type.base_lang);
        expect(section.hasOfficialLanguage).toEqual(true);
        var languages = testData.legislation.sections.document_type.secondary_languages;
		 expect(section.languages).toEqual(languages);

		languages.forEach(function (language) {
			expect(section.hasLanguage(language)).toEqual(true);
		});
	});

	

});
