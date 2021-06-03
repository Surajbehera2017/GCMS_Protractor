var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var LoginPage = require('../../../../po/login.po.js');

describe('Date In Force', function () {
    
    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(testData.legislation.sections.date_in_force.marginal_iddate1);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });
    //unable to replicate the steps available in test cases
    it('should verify the change in effective type', function () {
      
         
        //expect(LegislationDateInForceSection.isExpanded()).toEqual(false);
        browser.waitForAngular();
		LegislationDateInForceSection.expandSection();
        expect(LegislationDateInForceSection.isExpanded()).toEqual(true);  
        browser.waitForAngular();
        //expect(LegislationDateInForceSection.emptyfieldString()).toContain(' ');
            
             });
    });
    
