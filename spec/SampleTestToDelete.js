var params = browser.params;

//i18n basic support
var I18n = require('../i18n/' + params.language + '.i18n.js');

//var LoginPage = require('../../po/login.po.js');

var LoginPage = require('../po/login.po.js');
var HomePage = require('../po/homepage.js');
describe('Some ad hoc test cases to verify various links can be clicked and verified', function () {

beforeEach(function () {

    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    var loginPage = new LoginPage();

loginPage.get().then(function () {
 loginPage.setLanguage(params.language).then(function (loginPage) {
                loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {

//browser.ignoreSynchronization = false;

                });
 });
});

});

it('verify links displayed on the left pane', function() {

    var homePage = new HomePage();
    expect(homePage.jurisprudenceisdisplayed).toBe(true);
    expect(homePage.bibliographylinkDisplayed).toEqual(true);

});

});
