var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDateInForceSection = require('../../../../po/document/display/legis/sections/date-in-force/date-in-force-new-po.js');
var LoginPage = require('../../../../po/login.po.js');

// test data support for various Bu's

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2841';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {


    beforeEach(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    LegislationDateInForceSection.urlLoad(params.valid_username,params.valid_password);
       
   });

  
    it('should not display the date in force section.'+jiraNumber, function () {
    
        browser.waitForAngular();
        LegislationDateInForceSection.expandSection();
        expect(LegislationDateInForceSection.isExpanded()).toEqual(true); 
        browser.waitForAngular();
        var getDate = LegislationDateInForceSection.getTextofDateInForceExpandSection();
        LegislationDateInForceSection.isTextofDateInForceExpandSectionEmpty();
       // expect(getDate).toEqual(' ');
                       
		});
	});
		
 