var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');

// test data support for various Bu's

var LegislationDateInForceSectionEdition = require('../../../../po/document/edition/legis/sections/date-in-force/date-in-force-new.po.js');
var LoginPage = require('../../../../po/login.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2840';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {

    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocEditionPage = new LegislationDocumentEditionPage();
    legisDocEditionPage.get(loadedData.marginal_id);
    LegislationDateInForceSectionEdition.urlLoad(params.valid_username,params.valid_password);
       
   }); 

    it('should expand the date in force section and check all fields are displayed', function () {
        
        //expect(LegislationDateInForceSectionEdition.isExpanded()).toEqual(false);
        browser.waitForAngular();
		LegislationDateInForceSectionEdition.expandSection();
        expect(LegislationDateInForceSectionEdition.isExpanded()).toEqual(true);
        browser.waitForAngular();
        expect(LegislationDateInForceSectionEdition.isVisibleEffectiveTypeNew()).toEqual(true);
        expect(LegislationDateInForceSectionEdition.isVisibleDateForceNew()).toEqual(true);
        expect(LegislationDateInForceSectionEdition.isVisibleIneffectiveDateNew()).toEqual(true);
        expect(LegislationDateInForceSectionEdition.isVisibleineffectiveNoteNew()).toEqual(true);
            
		});
        
	});
   


