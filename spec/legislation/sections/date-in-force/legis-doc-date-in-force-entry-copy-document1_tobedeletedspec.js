var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');

describe('Date In Force', function () {

    beforeEach(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(testData.legislation.sections.date_in_force.marginal_id_add_document);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });
    
   //same as GCMSQABANG-2333, needs to be deleted
    it('should verify date in force entry on copy document page', function () {

         browser.waitForAngular();
        LegislationDateInForceSection.clickCopyButton()
        LegislationDateInForceSection.selectcode(testData.legislation.sections.date_in_force.document_code);
        browser.sleep(3000);
        LegislationDateInForceSection.clickcalculate();
        LegislationDateInForceSection.clickCopyOnCopyDocPopup();
        browser.waitForAngular();
        LegislationDateInForceSection.expandSection();
        LegislationDateInForceSection.changeInDateInForce(testData.legislation.sections.date_in_force.date_in_force);
                            
        });
    });
                

