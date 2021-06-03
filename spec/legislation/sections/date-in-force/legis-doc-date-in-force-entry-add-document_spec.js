var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2844';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {

    beforeAll(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        LegislationDateInForceSection.urlLoad(params.valid_username, params.valid_password);

    });


    it('should verify date in force entry on add document page.'+jiraNumber, function () {

        var documentDisplayPage = new LegislationDocumentDisplayPage();
        browser.waitForAngular();
        LegislationDateInForceSection.clickAddButton();
        LegislationDateInForceSection.selectcode(loadedData.document_code);
        browser.sleep(3000);
        LegislationDateInForceSection.clickcalculate();
        LegislationDateInForceSection.clickadd();
        browser.waitForAngular();
        LegislationDateInForceSection.expandSection();
        LegislationDateInForceSection.changeInDateInForce(loadedData.date_in_force);
        
        

    });
});


