var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's

var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2842';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {

    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });  
    
   it('should expand the date in force section and verify order of the fields.'+jiraNumber, function () {
       
            browser.waitForAngular();
            LegislationDateInForceSection.expandSection();
            expect(LegislationDateInForceSection.isExpanded()).toEqual(true);
            browser.waitForAngular();
            var dateForce = LegislationDateInForceSection.getTextofDateForce();
            expect(dateForce).toEqual(loadedData.dateInForce);
            var effectiveType = LegislationDateInForceSection.getTextofEffectiveType();
            expect(effectiveType).toEqual(loadedData.effectivetype);
            //browser.sleep(2000);
            var ineffectiveDate = LegislationDateInForceSection.getTextofInneffectiveDate(loadedData.ineffectivedate);
            expect(ineffectiveDate).toEqual(loadedData.ineffectivedate);
        });
                       
	});
			




