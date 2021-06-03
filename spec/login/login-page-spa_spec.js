var params = browser.params;

//i18n basic support
var I18n = require('../../i18n/' + params.language + '.i18n.js');

var LoginPage = require('../../po/login.po.js');

describe('Login page', function () {

	beforeEach(function () {
		//Login is not an AngularJS app, this prevents Protractor from looking for ng-app directive in the html tag
		browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
	});

	afterEach(function () {
		//return to default value
		browser.ignoreSynchronization = false;
	});

	it('should display the correct title', function () {

		var loginPage = new LoginPage();

		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
                 browser.sleep(15000);
            
				expect(loginPage.title).toEqual(I18n.loginPage.title);
                                
			});
		});
	});

	it('should log in and show the homepage (WIP Page)', function () {

		var loginPage = new LoginPage();

		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
				loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                         
                         browser.sleep(15000);
                         expect(wipPage.title).toEqual(I18n.wipPage.title);
                   
                       
				});
			});
		});
	});

	/*
	 it('should fail to log in with a valid user and a EMPTY password (invalid credentials) and show the corresponding error message', function () {

	 var loginPage = new LoginPage();
	 loginPage.get();

	 var loginPage = loginPage.setLanguage(params.language);

	 var loginPage = loginPage.loginWithInvalidCredentials(params.valid_username, '');

	 //Expect to remain at the login page
	 expect(loginPage.getTitle()).toEqual(I18n.loginPage.title);

	 expect(loginPage.getErrorMessage()).toEqual(I18n.loginPage.empty_credentials_error);

	 });

	 it('should fail to log in with a EMPTY user and a valid password (invalid credentials) and show the corresponding error message', function () {

	 var loginPage = new LoginPage();
	 loginPage.get();

	 var loginPage = loginPage.setLanguage(params.language);

	 var loginPage = loginPage.loginWithInvalidCredentials('', params.valid_password);

	 //Expect to remain at the login page
	 expect(loginPage.getTitle()).toEqual(I18n.loginPage.title);

	 expect(loginPage.getErrorMessage()).toEqual(I18n.loginPage.empty_credentials_error);

	 });

	 it('should fail to log in with an INVALID user and a INVALID password (invalid credentials) and show the corresponding error message', function () {

	 var loginPage = new LoginPage();
	 loginPage.get();

	 var loginPage = loginPage.setLanguage(params.language);

	 var loginPage = loginPage.loginWithInvalidCredentials('invaliduser', 'invalidpass');

	 //Expect to remain at the login page
	 expect(loginPage.getTitle()).toEqual(I18n.loginPage.title);

	 expect(loginPage.getErrorMessage()).toEqual(I18n.loginPage.invalid_credentials_error);

	 });
	 */

});
