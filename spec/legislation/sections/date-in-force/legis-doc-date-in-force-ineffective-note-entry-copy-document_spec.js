var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var LoginPage = require('../../../../po/login.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2335';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {

    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });
    
it('should verify ineffective note entry on copy document page.'+jiraNumber, function () {
         
        var documentDisplayPage = new LegislationDocumentDisplayPage();
        //browser.waitForAngular();
        //browser.ignoreSynchronization = true;
        LegislationDateInForceSection.clickCopyButton();
        LegislationDateInForceSection.selectcode(loadedData.document_code);
        console.log(loadedData.document_code);
        browser.sleep(3000);
        LegislationDateInForceSection.clickcalculate();
        LegislationDateInForceSection.clickCopyOnCopyDocPopup();
        LegislationDateInForceSection.expandSection();
        var select = element(by.model('sectionValidityController.document.data.document.temporalidad.code'));
        select.$('[value="3"]').click();
        //browser.waitForAngular();
        LegislationDateInForceSection.enterdateIntoIneffectiveDate(loadedData.ineffective_date);
        console.log(loadedData.ineffective_date);
        LegislationDateInForceSection.enterIneffectiveNote(loadedData.ineffective_note_large);
        console.log(loadedData.ineffective_note_large);
        browser.sleep(4000);
            
        });
    });
           
                       

