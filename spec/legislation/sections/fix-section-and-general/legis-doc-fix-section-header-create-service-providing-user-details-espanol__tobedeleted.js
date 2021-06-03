
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationSearchPage = require('../../../../po/legis-search.po.js');

describe('Fix section', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = false;
        LegislationSearchPage.get(1572021);      
        browser.waitForAngular();
        browser.sleep(5000);      
        LegislationSearchPage.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();
    });
    
    it('it should show the header for espanol',function(){
                
        LegislationSearchPage.ClickUserDropDown();
        browser.sleep(1000);
        LegislationSearchPage.selectSpanish();  
        expect(LegislationSearchPage.isExpectedDetailsDisplayed("Bienvenido")).toEqual(true);
    });
   
});