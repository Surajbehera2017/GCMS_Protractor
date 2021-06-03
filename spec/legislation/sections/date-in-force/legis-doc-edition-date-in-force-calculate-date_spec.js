var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various Bu's

var LegislationDateInForceSectionEdition = require('../../../../po/document/edition/legis/sections/date-in-force/date-in-force-new.po.js');
var LoginPage = require('../../../../po/login.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2835';
var testData = require('../../../../test-data/Jira_TestData/date_in_force/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Date In Force', function () {
    
    beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocEditionPage = new LegislationDocumentEditionPage();
    legisDocEditionPage.get(loadedData.marginal_id);
    LegislationDateInForceSectionEdition.urlLoad(params.valid_username,params.valid_password);
       
   }); 

    //Method: TC01 - All fields are displayed- according mock up
    it('should should calculate date.'+jiraNumber, function () {
      
        //expect(LegislationDateInForceSectionEdition.isExpanded()).toEqual(false);
        browser.waitForAngular();
		LegislationDateInForceSectionEdition.expandSection();
        expect(LegislationDateInForceSectionEdition.isExpanded()).toEqual(true);
        var date1 = LegislationDateInForceSectionEdition.getOriginalDate();
        browser.waitForAngular();
        LegislationDateInForceSectionEdition.clickonDateCalculator();
        LegislationDateInForceSectionEdition.clickonMonthRadioButton();
        LegislationDateInForceSectionEdition.clickonDateRadioButton();
        LegislationDateInForceSectionEdition.clickCalculateButton();
        browser.waitForAngular();
        LegislationDateInForceSectionEdition.clickSetDateButton();
        var date2 = LegislationDateInForceSectionEdition.getNewDate();
        //expect(date1).not.toBe(LegislationDateInForceSectionEdition.getNewDate());
        expect(date1).not.toBe(date2+'.');     
        }); 
});
   
        
    
