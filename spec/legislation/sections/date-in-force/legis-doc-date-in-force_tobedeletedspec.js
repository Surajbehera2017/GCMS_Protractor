var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var LoginPage = require('../../../../po/login.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2848';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {

    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });

	//Covered in GCMSQABANG-2848, Needs to be deleted
    it('should expand the date in force section.'+jiraNumber, function () {
      
        //expect(LegislationDateInForceSection.isExpanded()).toEqual(false);
        browser.waitForAngular();
        LegislationDateInForceSection.expandSection();
        expect(LegislationDateInForceSection.isExpanded()).toEqual(true);
	
        });
});
