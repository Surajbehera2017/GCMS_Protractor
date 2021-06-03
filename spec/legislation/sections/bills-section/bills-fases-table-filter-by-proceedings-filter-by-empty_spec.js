var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var billSection = require('../../../../po/document/display/legis/sections/bills-section/bills-new.po.js');

describe('Bill Section', function () {

	beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
    billSection.urlLoad(params.valid_username,params.valid_password);
       
   });

	
    it('should verify filter by proceedings by filter by empty space', function () {
		
        billSection.expandSection();
        expect(billSection.isExpanded()).toEqual(true);
        billSection.clickViewAllLink();
        expect(billSection.isBillsTableDisplayed()).toBeTruthy();
        billSection.clickShowfilterButton();
        browser.actions().sendKeys(protractor.Key.ENTER);
               
    });
});
                
             
           
